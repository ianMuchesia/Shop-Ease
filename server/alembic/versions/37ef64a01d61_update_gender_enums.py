"""update gender enums

Revision ID: 37ef64a01d61
Revises: 652e04728fd8
Create Date: 2024-01-03 16:56:32.457235

"""
from sqlalchemy import Enum

from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '37ef64a01d61'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    from sqlalchemy import Enum
from alembic import op

def upgrade():
    gender_enum = Enum('M', 'U', 'F', name='gender_enum', create_type=False)
    op.alter_column('products', 'gender', type_=gender_enum, existing_type=gender_enum)
    pass


def downgrade() -> None:
    gender_enum = Enum('M', 'F',name='gender_enum', create_type=False)
    op.alter_column('products','gender',type_=gender_enum,existing_type=gender_enum)
    pass
