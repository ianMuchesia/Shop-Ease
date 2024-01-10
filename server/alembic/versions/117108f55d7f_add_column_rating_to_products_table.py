"""add column rating to products table

Revision ID: 117108f55d7f
Revises: 15e0b0e96277
Create Date: 2024-01-10 12:47:46.443527

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '117108f55d7f'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('products', sa.Column('rating', sa.Integer(), nullable=False, server_default='0'))
    pass


def downgrade() -> None:
    op.drop_column("products","rating")
    pass
