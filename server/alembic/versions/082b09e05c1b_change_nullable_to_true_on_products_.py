"""change nullable to true on products category column on products table

Revision ID: 082b09e05c1b
Revises: 33971c50cceb
Create Date: 2024-01-04 12:55:10.085926

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '082b09e05c1b'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    
    op.alter_column('products', 'category', nullable=True)
    pass


def downgrade() -> None:
    op.alter_column("products", "categories", nullable=False)
    pass
