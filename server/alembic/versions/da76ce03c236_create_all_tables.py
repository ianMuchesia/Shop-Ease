"""create all tables

Revision ID: da76ce03c236
Revises: 1477dbb36d85
Create Date: 2024-01-08 17:09:02.634005

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'da76ce03c236'
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
    
    op.create_table(
        'products',
        sa.Column('internal_id', sa.Integer(), nullable=False),
        sa.Column('id', sa.String(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('description', sa.String(), nullable=False),
        sa.Column('price', sa.Integer(), nullable=False),
        sa.Column('category', sa.String(), nullable=False),
        sa.Column('created_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.Column('updated_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint('internal_id'),
        sa.UniqueConstraint('id')
    )
        
    op.create_table(
        'users',
        sa.Column('id', sa.String(), nullable=False,unique=True),
        sa.Column("internal_id",sa.Integer(),nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('email', sa.String(), nullable=False),
        sa.Column('password', sa.String(), nullable=False),
        sa.Column('phone', sa.String(), nullable=False),
        sa.Column('role', sa.Enum('admin', 'customer',name="role_enum"), nullable=False,default="customer"),
        sa.Column('created_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.Column('updated_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint('internal_id'),
        sa.UniqueConstraint('email'),
        sa.UniqueConstraint('phone'),
        sa.UniqueConstraint('id'),
        
        
    )
    
    
    op.create_table(
        "orders",
        sa.Column('id', sa.String(), nullable=False,unique=True),
        sa.Column("internal_id",sa.Integer(),nullable=False),
        sa.Column('total_price', sa.Integer(), nullable=False),
        sa.Column('status', sa.Enum('pending', 'paid', name="status_enum"), nullable=False, default='pending'),
        sa.Column('user', sa.String(), sa.ForeignKey('users.id'), nullable=False),
        sa.Column('created_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.Column('updated_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint('internal_id'),
        sa.UniqueConstraint('id'),
    )
    
    
    op.create_table(
        "order_items",
        sa.Column('id', sa.String(), nullable=False,unique=True),
        sa.Column("internal_id",sa.Integer(),nullable=False),
        sa.Column('order', sa.String(), sa.ForeignKey('orders.id'), nullable=False),
        sa.Column('product', sa.String(), sa.ForeignKey('products.id'), nullable=False),
        sa.Column('quantity', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.Column('updated_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint('internal_id'),
        sa.UniqueConstraint('id'),
        
    )
    
    
    op.create_table(
        "trending",
        sa.Column('id', sa.String(), nullable=False,unique=True),
        sa.Column("internal_id",sa.Integer(),nullable=False),
        sa.Column('product', sa.String(), sa.ForeignKey('products.id'), nullable=False,unique=True),
        sa.Column('created_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.Column('updated_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint('internal_id'),
        
        sa.UniqueConstraint('id'),
        
    )
    
    
    op.create_table(
        "rated",
        sa.Column('id', sa.String(), nullable=False,unique=True),
        sa.Column("internal_id",sa.Integer(),nullable=False),
        sa.Column('product', sa.String(), sa.ForeignKey('products.id'), nullable=False,unique=True),
        sa.Column('created_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.Column('updated_at', sa.TIMESTAMP(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint('internal_id'),
        sa.UniqueConstraint('id'),
        
    )
    pass


def downgrade() -> None:
    op.drop_table('users')
    op.drop_table('orders')
    op.drop_table('order_items')
    op.drop_table('trending')
    op.drop_table('rated')
    op.drop_table('products')
    op.drop_table('categories')
    pass
