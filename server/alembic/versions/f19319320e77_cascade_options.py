"""cascade options

Revision ID: f19319320e77
Revises: abbe05ad23a0
Create Date: 2024-01-05 12:30:29.711861

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'f19319320e77'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    with op.batch_alter_table('order_items') as batch_op:
        batch_op.drop_constraint('order_items_order_fkey', type_='foreignkey')
        batch_op.create_foreign_key('order_items_order_fkey', 'orders', ['order'], ['id'], ondelete='CASCADE')
    pass


def downgrade() -> None:
    with op.batch_alter_table('order_items') as batch_op:
        batch_op.drop_constraint('order_items_order_fkey', type_='foreignkey')
        batch_op.create_foreign_key('order_items_order_fkey', 'orders', ['order'], ['id'])
    pass
