"""remove column status in users table

Revision ID: 652e04728fd8
Revises: 82d018f3c783
Create Date: 2024-01-03 15:13:11.515904

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '652e04728fd8'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_column('users', 'status')
    
    pass


def downgrade() -> None:
    op.add_column('users', sa.Column('status', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
    pass
