"""merge heads

Revision ID: cdd3cf92ea18
Revises: 423fd6b01d1d, befc54719159
Create Date: 2024-01-04 16:55:35.706412

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'cdd3cf92ea18'
down_revision: Union[str, None] = ('423fd6b01d1d', 'befc54719159')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
