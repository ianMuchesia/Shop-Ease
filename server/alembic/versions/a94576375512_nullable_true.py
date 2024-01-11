"""nullable true

Revision ID: a94576375512
Revises: 0fcf2b37ba91
Create Date: 2024-01-10 16:15:00.323659

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a94576375512'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.alter_column('products', 'category', nullable=True)

    pass


def downgrade() -> None:
    op.alter_column('products', 'category', nullable=False)
    pass
