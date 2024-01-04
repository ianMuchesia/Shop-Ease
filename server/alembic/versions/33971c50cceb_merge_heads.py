"""Merge heads

Revision ID: 33971c50cceb
Revises: 9e2a266af549, ffd4b14c4503
Create Date: 2024-01-04 12:55:02.522382

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '33971c50cceb'
down_revision: Union[str, None] = ('9e2a266af549', 'ffd4b14c4503')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
