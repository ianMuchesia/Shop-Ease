"""add image to products and change category default to none in creating product

Revision ID: 98851503d195
Revises: 7f826438b715
Create Date: 2024-01-10 15:09:54.414740

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '98851503d195'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('products', sa.Column('image', sa.String(), nullable=False))
    pass


def downgrade() -> None:
    op.drop_column('products', 'image')
    pass
