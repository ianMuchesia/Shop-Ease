from pydantic import BaseModel, ConfigDict, EmailStr
from typing import List
from datetime import datetime
from .product_schema import ProductResponse







class CategoryBase(BaseModel):
    name: str
    
    
class CategoryCreate(CategoryBase):
    pass


class CategoryResponse(CategoryBase):
    model_config = ConfigDict(from_attributes = True)
 
    id: str
    products: List[ProductResponse]
    
    
class NewArrivalsBase(BaseModel):
    product: str
    
class NewArrivalsCreate(NewArrivalsBase):
    pass


class NewArrivalsResponse(NewArrivalsBase):
    model_config = ConfigDict(from_attributes = True)
 
    id: str
    product: List[ProductResponse]
    
    
class TrendingBase(BaseModel):
    product: str
    
class TrendingCreate(TrendingBase):
    pass

class TrendingResponse(TrendingBase):
    model_config = ConfigDict(from_attributes = True)
 
    id: str
    product: List[ProductResponse]
    
    
class RatedBase(BaseModel):
    product: str
    
class RatedCreate(RatedBase):
    pass

class RatedResponse(RatedBase):
    model_config = ConfigDict(from_attributes = True)
 
    id: str
    product: List[ProductResponse]