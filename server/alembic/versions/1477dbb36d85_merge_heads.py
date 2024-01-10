"""Merge heads

Revision ID: 1477dbb36d85
Revises: 8bff4a5a85b8, aa9c52684b34
Create Date: 2024-01-08 17:08:48.857247

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '1477dbb36d85'
down_revision: Union[str, None] = ('8bff4a5a85b8', 'aa9c52684b34')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
