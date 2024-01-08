"""Create categories table

Revision ID: d95f2fcc907d
Revises: 105905e4a3c2
Create Date: 2024-01-08 12:00:20.622252

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd95f2fcc907d'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'categories',
        sa.Column('internal_id', sa.Integer(), nullable=False),
        sa.Column('id', sa.String(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('created_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.Column('updated_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint('internal_id'),
        sa.UniqueConstraint('id')
    )
        
    pass


def downgrade() -> None:
    op.drop_table('categories')
    pass
