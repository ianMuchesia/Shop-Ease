"""Remove product from Orders and add to OrderItem

Revision ID: 74619c288739
Revises: 812eaa2ff619
Create Date: 2024-01-04 14:20:06.835144

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '74619c288739'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.alter_column('orders', 'total', new_column_name='total_price')
    op.drop_constraint('orders_product_fkey', 'orders', type_='foreignkey')
    op.drop_column("orders","product")
    pass


def downgrade() -> None:
    op.alter_column('orders', 'total_price', new_column_name='total')
    op.add_column("orders", sa.Column("product", sa.String, nullable=False))
    op.create_foreign_key('orders_product_fkey', 'orders', 'products', ['product'], ['id'])
    pass
