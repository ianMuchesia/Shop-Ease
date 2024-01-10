from .base_model import BaseModel, Base
from sqlalchemy import Column, String, Integer,Enum,ForeignKey, event
from sqlalchemy.orm import relationship



class Product(BaseModel, Base):
    __tablename__ = 'products'
    
    #internal id and id here
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    price = Column(Integer, nullable=False)
    gender = Column(Enum('M','U' ,'F',name='gender_enum'), nullable=False)
    rating = Column(Integer, nullable=False)
    category = Column(String,ForeignKey('categories.id'), nullable=True)
    image = Column(String, nullable=False)
    
    category_rel = relationship("Category")
    
    @classmethod
    def before_update_listener(cls, mapper, connection, target):
        BaseModel.before_update_listener(mapper, connection, target)
        
        
#use event.listen to listen to the before_update event
event.listen(Product, 'before_update', Product.before_update_listener)