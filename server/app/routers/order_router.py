from fastapi import APIRouter, Depends,status
from ..schemas.order_schema import OrderCreate,OrderItemCreate
from sqlalchemy.orm import Session
from ..database.db import get_db
from typing import List
from ..utils.oauth2 import get_current_user

#controller imports
from ..controllers.order_controller import create_order,read_order_items, read_user_orders, update_order_items, delete_order_items, delete_user_orders, add_item_to_order, remove_item_from_order

router = APIRouter(
    prefix="/orders",
    tags=["orders"],
)


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_order(order: OrderCreate, order_items: List[OrderItemCreate], db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return create_order(db,current_user.id, order, order_items)


@router.get("/{order_id}/items")
def order_items(order_id: str, db: Session = Depends(get_db)):
    return read_order_items(order_id, db)

@router.get("/user")
def user_orders( db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return read_user_orders(current_user.id, db)


@router.put("/{order_id}")
def update_order(order_id: str, order: OrderCreate, order_items: List[OrderItemCreate], db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return update_order_items(order_id, db, order, order_items,current_user)


@router.delete("/{order_id}")
def delete_order(order_id: str, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return delete_order_items(order_id, db,current_user)


@router.delete("/user")
def delete_user( db: Session = Depends(get_db),current_user = Depends(get_current_user)):
    return delete_user_orders(current_user.id, db)


@router.patch("/{order_id}/items")
def add_item(order_id: str, order_item: OrderItemCreate, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return add_item_to_order(order_id, db, order_item,current_user)


@router.delete("/{order_id}/items")
def delete_item(order_id: str, order_item: OrderItemCreate, db: Session = Depends(get_db),current_user = Depends(get_current_user)):
    return remove_item_from_order(order_id, db, order_item,current_user)
