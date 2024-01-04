"""Merge heads

Revision ID: ffd4b14c4503
Revises: 3216846ea785, a8b00f5662ce, e376c57e3793
Create Date: 2024-01-04 12:37:28.674232

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ffd4b14c4503'
down_revision: Union[str, None] = ('3216846ea785', 'a8b00f5662ce', 'e376c57e3793')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
