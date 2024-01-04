"""change default to heading

Revision ID: 423fd6b01d1d
Revises: befc54719159
Create Date: 2024-01-04 14:50:15.625615

"""
from typing import Sequence, Union


from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '423fd6b01d1d'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    status_enum = sa.Enum('pending', 'paid', name="status_enum", create_type=False)
    op.alter_column('orders', 'status', type_=status_enum, nullable=False, server_default='pending')
    pass


def downgrade() -> None:
    status_enum = sa.Enum('pending', 'paid', name="status_enum", create_type=False)
    op.alter_column('orders', 'status', type_=status_enum, nullable=False, server_default=None)
    pass
