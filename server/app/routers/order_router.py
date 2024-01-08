from fastapi import APIRouter, Depends,status
from ..schemas.order_schema import OrderCreate,OrderItemCreate,OrderResponse,OrderItemResponse
from sqlalchemy.orm import Session
from ..database.db import get_db
from typing import List
from ..utils.oauth2 import get_current_user
from ..utils.check_permission import get_current_admin_user

#controller imports
from ..controllers.order_controller import create_order, read_user_orders, update_order_items,read_user_order_items,delete_user_orders

router = APIRouter(
    prefix="/orders",
    tags=["orders"],
)


@router.post("/", status_code=status.HTTP_201_CREATED)
def post_order(order: OrderCreate, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return create_order(db,current_user.id, order, order.products)
   



@router.get("/user",response_model=List[OrderResponse])
def user_orders( db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return read_user_orders(current_user.id, db)



@router.get("/user/{order_id}", response_model=List[OrderItemResponse])
def get_user_order_items(order_id:str, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
   
    return read_user_order_items(current_user.id,order_id, db)


@router.patch("/user/{order_id}", status_code=status.HTTP_201_CREATED)
def update_order(order_id: str, order: OrderCreate, db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    return update_order_items(order_id, db, order,order.products,current_user)
 


@router.delete("/user/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(order_id:str, db: Session = Depends(get_db),current_user = Depends(get_current_user)):
   return delete_user_orders(order_id,current_user.id, db)





#admini get order items for particular order id
# @router.get("/{order_id}/items")
# def order_items(order_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_admin_user)):
#     return read_order_items(order_id, db)





# @router.delete("/{order_id}")
# def delete_order(order_id: str, db: Session = Depends(get_db), current_user = Depends(get_current_admin_user)):
#     return delete_order_items(order_id, db,current_user)