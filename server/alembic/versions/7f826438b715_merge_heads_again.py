"""merge heads again

Revision ID: 7f826438b715
Revises: 117108f55d7f, 15e0b0e96277
Create Date: 2024-01-10 15:09:12.385235

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7f826438b715'
down_revision: Union[str, None] = ('117108f55d7f', '15e0b0e96277')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
