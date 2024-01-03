"""Merge heads

Revision ID: a8b00f5662ce
Revises: 37ef64a01d61, 652e04728fd8
Create Date: 2024-01-03 17:26:01.439421

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a8b00f5662ce'
down_revision: Union[str, None] = ('37ef64a01d61', '652e04728fd8')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
