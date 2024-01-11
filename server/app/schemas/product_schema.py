from pydantic import BaseModel, ConfigDict, EmailStr
from typing import Optional
from datetime import datetime
# from .category_schema import CategoryAllResponse




class ProductBase(BaseModel):
    name: str
    description: str
    category: Optional[str] = None
    price: int
    gender: str
    rating: int
    image: str
   
    
    
class ProductCreate(ProductBase):
    pass


class CategoryResponse(BaseModel):
 
    id: str
    name: str
class ProductResponse(ProductBase):
    model_config = ConfigDict(from_attributes = True)
    category: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    category_rel: Optional[CategoryResponse] = None
    id: str
    
    
class ProductUpdate(ProductBase):
    pass







