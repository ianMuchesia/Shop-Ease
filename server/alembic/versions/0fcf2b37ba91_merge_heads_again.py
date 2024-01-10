"""merge heads again

Revision ID: 0fcf2b37ba91
Revises: 7f826438b715, 98851503d195
Create Date: 2024-01-10 16:14:39.249983

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '0fcf2b37ba91'
down_revision: Union[str, None] = ('7f826438b715', '98851503d195')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
