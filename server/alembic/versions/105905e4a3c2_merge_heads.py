"""Merge heads

Revision ID: 105905e4a3c2
Revises: abbe05ad23a0, f19319320e77
Create Date: 2024-01-08 11:45:21.159497

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '105905e4a3c2'
down_revision: Union[str, None] = ('abbe05ad23a0', 'f19319320e77')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
