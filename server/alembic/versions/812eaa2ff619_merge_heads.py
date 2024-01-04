"""Merge heads

Revision ID: 812eaa2ff619
Revises: 082b09e05c1b, 33971c50cceb
Create Date: 2024-01-04 14:20:01.980196

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '812eaa2ff619'
down_revision: Union[str, None] = ('082b09e05c1b', '33971c50cceb')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
