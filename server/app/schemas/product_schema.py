from pydantic import BaseModel, ConfigDict, EmailStr
from typing import Optional
from datetime import datetime



class ProductBase(BaseModel):
    name: str
    description: str
    category: str
    price: int
    gender: str
    rating: int
   
    
    
class ProductCreate(ProductBase):
    pass


class ProductResponse(ProductBase):
    model_config = ConfigDict(from_attributes = True)
    
    created_at: datetime
    updated_at: datetime
    id: str
    
    
class ProductUpdate(ProductBase):
    pass







