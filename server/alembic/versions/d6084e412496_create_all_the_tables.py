"""create all the tables

Revision ID: d6084e412496
Revises: f62a74348824
Create Date: 2024-01-03 09:23:34.970409

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd6084e412496'
down_revision: Union[str, None] = 'f62a74348824'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'orders',
        sa.Column('id', sa.String(length=36), nullable=False),
        sa.Column('user', sa.String(length=255), nullable=False),
        sa.Column('total', sa.Float(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table(
        'order_item',
        sa.Column('id', sa.String(length=36), nullable=False),
        sa.Column('order', sa.String(length=36), nullable=False),
        sa.Column('product', sa.String(length=36), nullable=False),
        sa.Column('quantity', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['order'], ['orders.id'], ),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade() -> None:
    op.drop_table('order_item')
    op.drop_table('orders')
    pass
