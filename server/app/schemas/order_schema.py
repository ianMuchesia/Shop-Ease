from pydantic import BaseModel, ConfigDict, EmailStr
from typing import List
from datetime import datetime
from .product_schema import ProductResponse
from typing import Optional



class OrderBase(BaseModel):
    total_price: int
    
    
class OrderItemBase(BaseModel):
    product: str
    quantity: int
    
    
class OrderCreate(OrderBase):
    
    products:List[OrderItemBase]
    

    
class OrderItemCreate(OrderItemBase):
    pass


class OrderItemResponse(BaseModel):
   
    id:str
    created_at: datetime
    updated_at: datetime
    product_rel:ProductResponse


class OrderResponse(OrderBase):
    model_config = ConfigDict(from_attributes = True)
    
    created_at: datetime
    updated_at: datetime
    id: str
    #optional
    # order_items: Optional[List[OrderItemResponse]]
  
    
    
    
class OrderUpdate(OrderBase):
    pass
    
    


    
    