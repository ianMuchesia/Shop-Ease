from pydantic import BaseModel, ConfigDict
from typing import List,ForwardRef
from .product_schema import ProductResponse

ProductResponseForwardRef = ForwardRef("ProductResponse")


class CategoryBase(BaseModel):
    name: str
    
    
class CategoryCreate(CategoryBase):
    pass

class CategoryAllResponse(CategoryBase):
    model_config = ConfigDict(from_attributes = True)
 
    id: str
    name: str

class CategoryResponse(CategoryBase):
    model_config = ConfigDict(from_attributes = True)
 
    id: str
    product_rel: "ProductResponse"
    
    
class NewArrivalsBase(BaseModel):
    product: str
    
class NewArrivalsCreate(NewArrivalsBase):
    pass


class NewArrivalsResponse(NewArrivalsBase):
    model_config = ConfigDict(from_attributes = True)
 
    products: List["ProductResponse"]
    
    
class TrendingBase(BaseModel):
    product: str
    
class TrendingCreate(TrendingBase):
    pass

class TrendingResponse(TrendingBase):
    model_config = ConfigDict(from_attributes = True)
 
    id: str
    # product: str
    product_rel:"ProductResponse"
    
    
    
class RatedBase(BaseModel):
    product: str
    
class RatedCreate(RatedBase):
    pass

class RatedResponse(BaseModel):
    model_config = ConfigDict(from_attributes = True)
 
    id: str
    product_rel:"ProductResponse"
    