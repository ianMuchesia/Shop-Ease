from sqlalchemy.orm import Session
from ..models.orders_model import Orders,OrderItem
from typing import List
from ..errors.errors import NotFoundError
from ..utils.check_permission import belongs_to_user



#this function is used to create a new order
def create_order(db: Session, user:str, order: Orders, order_items: List[OrderItem]):
    
    db_order = Orders(user=user,total=order.total)
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    
    for item in order_items:
        db_item = OrderItem(order=db_order.id,product=item.product,quantity=item.quantity)
        db.add(db_item)
        db.commit()
        db.refresh(db_item)
    
    
    return db_order



#this function is used to read all orders
def read_order_items(order_id: str, db: Session):
    
    order_exists = db.query(Orders).filter(Orders.id == order_id).first()
    
    if not order_exists:
        raise NotFoundError(f"Order with id {order_id} not found")
        
    return db.query(OrderItem).filter(OrderItem.order == order_id).all()


#this function is used to read all orders for a specific user
def read_user_orders(user_id: str, db: Session):
    
    orders = db.query(Orders).filter(Orders.user == user_id).all()
    
    return orders
    
    
    
#this function is used to update an order
def update_order_items(order_id: str, db: Session, order: Orders, order_items: List[OrderItem],current_user):
    
    order_exists = db.query(Orders).filter(Orders.id == order_id).first()
    
    if not order_exists:
        raise NotFoundError(f"Order with id {order_id} not found")
    
    belongs_to_user(current_user, order_exists.user)
    
    db.query(Orders).filter(Orders.id == order_id).update({"user": order.user, "total": order.total})
    db.commit()
    
    for item in order_items:
        db.query(OrderItem).filter(OrderItem.order == order_id).update({"product": item.product, "quantity": item.quantity})
        db.commit()
    
    return db.query(Orders).filter(Orders.id == order_id).first()
    
    
    
#this function is used to delete an order
def delete_order_items(order_id: str, db: Session,current_user):
    
    order_exists = db.query(Orders).filter(Orders.id == order_id).first()
    
    if not order_exists:
        raise NotFoundError(f"Order with id {order_id} not found")
        
    belongs_to_user(current_user, order_exists.user)
    db.query(Orders).filter(Orders.id == order_id).delete()
    db.commit()
    
    return {"message": f"Order with id {order_id} deleted successfully"}


#this function is used to delete all orders for a specific user
def delete_user_orders(user_id: str, db: Session):
    
    orders = db.query(Orders).filter(Orders.user == user_id).all()
    
    if not orders:
        raise NotFoundError(f"Orders for user with id {user_id} not found")
        
    for order in orders:
        db.query(Orders).filter(Orders.id == order.id).delete()
        db.commit()
    
    return {"message": f"Orders for user with id {user_id} deleted successfully"}



#this function is used to add item to an order
def add_item_to_order(order_id: str, db: Session, order_item: OrderItem, total_price: float,current_user):
    
    order_exists = db.query(Orders).filter(Orders.id == order_id).first()
    
    if not order_exists:
        raise NotFoundError(f"Order with id {order_id} not found")
    
    belongs_to_user(current_user, order_exists.user)
        
    db_item = OrderItem(order=order_id,product=order_item.product,quantity=order_item.quantity)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    
    order_exists.total = total_price
    db.commit()
    
    return db_item


def remove_item_from_order(order_id: str, db: Session, order_item: OrderItem, total_price: float,current_user):
    
    order_exists = db.query(Orders).filter(Orders.id == order_id).first()
    
    if not order_exists:
        raise NotFoundError(f"Order with id {order_id} not found")
        
    belongs_to_user(current_user, order_exists.user)
    db.query(OrderItem).filter(OrderItem.order == order_id).filter(OrderItem.product == order_item.product).delete()
    db.commit()
    
    order_exists.total = total_price
    db.commit()
    
    return {"message": f"Item with id {order_item.product} deleted successfully"}