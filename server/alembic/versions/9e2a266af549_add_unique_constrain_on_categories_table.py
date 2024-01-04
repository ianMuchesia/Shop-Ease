"""add unique constrain on categories table

Revision ID: 9e2a266af549
Revises: ffd4b14c4503
Create Date: 2024-01-04 12:37:32.816912

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9e2a266af549'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_unique_constraint("uq_category_name", "categories", ["name"])
    pass


def downgrade() -> None:
    op.drop_constraint("uq_category_name", "categories", type_="unique")
    pass
