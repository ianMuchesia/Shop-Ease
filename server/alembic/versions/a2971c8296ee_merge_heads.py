"""Merge heads

Revision ID: a2971c8296ee
Revises: 105905e4a3c2, d95f2fcc907d
Create Date: 2024-01-08 12:06:00.381201

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a2971c8296ee'
down_revision: Union[str, None] = ('105905e4a3c2', 'd95f2fcc907d')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
