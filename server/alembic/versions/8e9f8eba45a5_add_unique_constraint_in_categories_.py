"""add unique constraint in categories table

Revision ID: 8e9f8eba45a5
Revises: cdd3cf92ea18
Create Date: 2024-01-04 16:55:48.804308

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '8e9f8eba45a5'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_unique_constraint("uq_categories_name", "categories", ["name"])
    pass


def downgrade() -> None:
    op.drop_constraint("uq_categories_name", "categories", type_="unique")    
    pass
