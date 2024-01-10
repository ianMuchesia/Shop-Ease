"""merge heads

Revision ID: 15e0b0e96277
Revises: 20e1d933a0d5, b63d08ccabb1
Create Date: 2024-01-10 12:47:35.452803

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '15e0b0e96277'
down_revision: Union[str, None] = ('20e1d933a0d5', 'b63d08ccabb1')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
