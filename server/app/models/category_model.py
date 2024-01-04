from .base_model import BaseModel, Base
from sqlalchemy import Column, String, Integer,Enum,ForeignKey, event
from sqlalchemy.orm import relationship



class Category(BaseModel, Base):
    __tablename__ = 'categories'
    
    #internal id and id here
    name = Column(String, nullable=False, unique=True)
    
    @classmethod
    def before_update_listener(cls, mapper, connection, target):
        BaseModel.before_update_listener(mapper, connection, target)
        
event.listen(Category, 'before_update', Category.before_update_listener)



class NewArrivals(BaseModel, Base):
    __tablename__ = 'new_arrivals'
    
    #internal id and id here
    product = Column(String, ForeignKey('products.id'), nullable=False,unique=True)
    
    product_rel = relationship("Product")
    
    @classmethod
    def before_update_listener(cls, mapper, connection, target):
        BaseModel.before_update_listener(mapper, connection, target)
        
        
#use event.listen to listen to the before_update event
event.listen(NewArrivals, 'before_update', NewArrivals.before_update_listener)



class Trending(BaseModel, Base):
    __tablename__ = 'trending'
    
    #internal id and id here
    product = Column(String, ForeignKey('products.id'), nullable=False,unique=True)
    
    product_rel = relationship("Product")
    
    @classmethod
    def before_update_listener(cls, mapper, connection, target):
        BaseModel.before_update_listener(mapper, connection, target)
        
        
#use event.listen to listen to the before_update event
event.listen(Trending, 'before_update', Trending.before_update_listener)


class Rated(BaseModel, Base):
    __tablename__ = 'rated'
    
    #internal id and id here
    product = Column(String, ForeignKey('products.id'), nullable=False, unique=True)
    
    product_rel = relationship("Product")
    
    @classmethod
    def before_update_listener(cls, mapper, connection, target):
        BaseModel.before_update_listener(mapper, connection, target)
        
event.listen(Rated, 'before_update', Rated.before_update_listener)