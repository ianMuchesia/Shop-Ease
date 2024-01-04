"""merge heads

Revision ID: 1a2cec68ad7b
Revises: 8e9f8eba45a5, cdd3cf92ea18
Create Date: 2024-01-04 17:03:44.134225

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '1a2cec68ad7b'
down_revision: Union[str, None] = ('8e9f8eba45a5', 'cdd3cf92ea18')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
