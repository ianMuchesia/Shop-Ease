"""add unique constraint on category name

Revision ID: 3216846ea785
Revises: 
Create Date: 2024-01-04 12:22:38.929540

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '3216846ea785'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_unique_constraint("uq_category_name", "categories", ["name"])
    pass


def downgrade() -> None:
    op.drop_constraint("uq_category_name", "categories", type_="unique")
    pass
