"""add column gender to products table

Revision ID: 20e1d933a0d5
Revises: b63d08ccabb1
Create Date: 2024-01-10 12:39:46.368343

"""
from typing import Sequence, Union

from alembic import op
from sqlalchemy.dialects.postgresql import ENUM

from sqlalchemy import Enum
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '20e1d933a0d5'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    gender_enum = ENUM('M', 'U', 'F', name='gender_enum', create_type=False)
    gender_enum.create(op.get_bind(), checkfirst=False)
    op.add_column('products', sa.Column('gender', gender_enum, nullable=False, server_default='U'))
    pass


def downgrade() -> None:
    op.drop_column("products","gender")
    pass
