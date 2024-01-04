"""Merge heads

Revision ID: befc54719159
Revises: 74619c288739, 812eaa2ff619
Create Date: 2024-01-04 14:49:08.261125

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'befc54719159'
down_revision: Union[str, None] = ('74619c288739', '812eaa2ff619')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
