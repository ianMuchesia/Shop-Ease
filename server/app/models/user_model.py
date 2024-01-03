from .base_model import BaseModel, Base
from sqlalchemy import Column, String, Integer,Enum,ForeignKey, event
from sqlalchemy.orm import relationship



class User(BaseModel, Base):
    __tablename__ = 'users'

    #internal id and id here
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    
    phone = Column(String, nullable=False,unique=True)
    role = Column(Enum('admin', 'customer',name="role_enum"), nullable=False,default="customer")
    
    @classmethod
    def before_update_listener(cls, mapper, connection, target):
        BaseModel.before_update_listener(mapper, connection, target)
        
        
        
event.listen(User, 'before_update', User.before_update_listener)