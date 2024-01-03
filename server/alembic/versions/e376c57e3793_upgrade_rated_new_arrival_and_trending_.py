"""upgrade rated, new arrival and trending to be unique so that we dont have redundant data

Revision ID: e376c57e3793
Revises: a8b00f5662ce
Create Date: 2024-01-03 17:26:25.730408

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e376c57e3793'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_unique_constraint('uq_new_arrivals_product', 'new_arrivals', ['product'])
    op.create_unique_constraint('uq_trending_product', 'trending', ['product'])
    op.create_unique_constraint('uq_rated_product', 'rated', ['product'])


def downgrade() -> None:
    op.drop_constraint('uq_new_arrivals_product', 'new_arrivals', type_='unique')
    op.drop_constraint('uq_trending_product', 'trending', type_='unique')
    op.drop_constraint('uq_rated_product', 'rated', type_='unique')
    pass
