"""Merge heads

Revision ID: 3eacedfb9cf7
Revises: 063036d19dd5, a2971c8296ee
Create Date: 2024-01-08 12:10:23.436899

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '3eacedfb9cf7'
down_revision: Union[str, None] = ('063036d19dd5', 'a2971c8296ee')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
