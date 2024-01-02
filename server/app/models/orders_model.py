from .base_model import BaseModel, Base
from sqlalchemy import Column, String, Integer,Enum,ForeignKey, event
from sqlalchemy.orm import relationship







class Orders(Base, BaseModel):
    __tablename__ = 'orders'

    #internal id and id here
    product = Column(String, ForeignKey('products.id'), nullable=False)
  
    total = Column(Integer, nullable=False)
    status = Column(Enum('pending', 'paid'), nullable=False)
    user = Column(String, ForeignKey('users.id'), nullable=False)
    
    
    product_rel = relationship("Product")
    user_rel = relationship("User")
    
    @classmethod
    def before_update_listener(cls, mapper, connection, target):
        BaseModel.before_update_listener(mapper, connection, target)
        
        
#use event.listen to listen to the before_update event
event.listen(Orders, 'before_update', Orders.before_update_listener)
    
    
class OrderItem(Base, BaseModel):
    __tablename__ = 'order_items'

    #internal id and id here
    order = Column(String, ForeignKey('orders.id'), nullable=False)
    product = Column(String, ForeignKey('products.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
  
    
    order_rel = relationship("Orders")
    product_rel = relationship("Product")
    
    @classmethod
    def before_update_listener(cls, mapper, connection, target):
        BaseModel.before_update_listener(mapper, connection, target)
        
        
#use event.listen to listen to the before_update event
event.listen(OrderItem, 'before_update', OrderItem.before_update_listener)