"""merge heads

Revision ID: abbe05ad23a0
Revises: 1a2cec68ad7b, 4829a9f840f4
Create Date: 2024-01-05 12:30:12.839424

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'abbe05ad23a0'
down_revision: Union[str, None] = ('1a2cec68ad7b', '4829a9f840f4')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
