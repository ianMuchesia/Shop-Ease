"""Merge heads

Revision ID: aa9c52684b34
Revises: 3eacedfb9cf7
Create Date: 2024-01-08 12:36:00.162899

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'aa9c52684b34'
down_revision: Union[str, None] = '3eacedfb9cf7'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
