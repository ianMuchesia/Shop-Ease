"""merge heads

Revision ID: b63d08ccabb1
Revises: 1477dbb36d85, da76ce03c236
Create Date: 2024-01-10 12:39:23.328269

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b63d08ccabb1'
down_revision: Union[str, None] = ('1477dbb36d85', 'da76ce03c236')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
