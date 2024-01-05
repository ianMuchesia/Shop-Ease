from sqlalchemy.orm import Session
from ..models.orders_model import Orders,OrderItem
from typing import List
from ..errors.errors import NotFoundError
from ..utils.check_permission import belongs_to_user



#this function is used to create a new order
#ensure that all changes are committed as a single transaction
def create_order(db: Session, user:str, order: Orders, order_items: List[OrderItem]):
    
    db_order = Orders(user=user,total_price=order.total_price)
    db.add(db_order)
    db.flush()  # Use db.flush() to get the id of db_order without committing the transaction
    
    for item in order_items:
        db_item = OrderItem(order=db_order.id,product=item.product,quantity=item.quantity)
        db.add(db_item)
    
    db.commit()
    db.refresh(db_order)
    return {"msg": "Order created successfully", "order_id": db_order.id}



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


#this function is used to read all order items for a specific order
def read_user_order_items(user_id: str,order_id:str, db: Session):
    order_exists = db.query(Orders).filter(Orders.id == order_id).first()   
    if not order_exists:
        raise NotFoundError(f"Order with id {order_id} not found")
    
    return db.query(OrderItem).filter(OrderItem.order == order_id).all()
    
    
    
#this function is used to update an order
def update_order_items(order_id: str, db: Session, order: Orders, order_items: List[OrderItem], current_user):
    order_exists = db.query(Orders).filter(Orders.id == order_id).first()

    if not order_exists:
        raise NotFoundError(f"Order with id {order_id} not found")

    belongs_to_user(current_user, order_exists.user)

    # Update the order
    db.query(Orders).filter(Orders.id == order_id).update({"user": current_user.id, "total_price": order.total_price})

    # Delete all existing order items associated with the order
    db.query(OrderItem).filter(OrderItem.order == order_id).delete()

    # Add the new order items
    for item in order_items:
        new_item = OrderItem(order=order_id, product=item.product, quantity=item.quantity)
        db.add(new_item)

    # Commit the session to persist all changes to the database
    db.commit()

    return {"msg": "Order updated successfully", "order_id": order_id}
    
    
    
#this function is used to delete an order
def delete_order_items(order_id: str, db: Session,current_user):
    
    order_exists = db.query(Orders).filter(Orders.id == order_id).first()
    
    if not order_exists:
        raise NotFoundError(f"Order with id {order_id} not found")
        
    belongs_to_user(current_user, order_exists.user)
    db.query(Orders).filter(Orders.id == order_id).delete()
    db.commit()
    
    return {"msg": f"Order with id {order_id} deleted successfully"}

def delete_user_orders(order_id, user_id: str, db: Session):
    order = db.query(Orders).filter(Orders.id == order_id, Orders.user == user_id).first()

    if not order:
        raise NotFoundError(f"Order with id {order_id} for user with id {user_id} not found")

    db.delete(order)

    db.commit()

    return {"msg": f"Order with id {order_id} for user with id {user_id} deleted successfully"}

