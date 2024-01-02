from pydantic import BaseModel, ConfigDict, EmailStr
from typing import List
from datetime import datetime



class OrderBase(BaseModel):
    user: str
    total: int
    
    
class OrderItemBase(BaseModel):
    order: str
    product: str
    quantity: int
    
    
class OrderCreate(OrderBase):
    user: str
    total: int
    
    
class OrderItemCreate(OrderItemBase):
    pass


class OrderItemResponse(OrderItemBase):
    model_config = ConfigDict(from_attributes = True)
    
    created_at: datetime
    updated_at: datetime
    id: str

class OrderResponse(OrderBase):
    model_config = ConfigDict(from_attributes = True)
    
    created_at: datetime
    updated_at: datetime
    id: str
    order_items: List[OrderItemResponse]
    
    
    
class OrderUpdate(OrderBase):
    pass
    
    


    
    