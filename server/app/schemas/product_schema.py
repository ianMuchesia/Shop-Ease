from pydantic import BaseModel, ConfigDict, EmailStr
from typing import Optional
from datetime import datetime



class ProductBase(BaseModel):
    name: str
    description: str
    category: Optional[str] = None
    price: int
    gender: str
    rating: int
   
    
    
class ProductCreate(ProductBase):
    pass


class ProductResponse(ProductBase):
    model_config = ConfigDict(from_attributes = True)
    category: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    id: str
    
    
class ProductUpdate(ProductBase):
    pass







