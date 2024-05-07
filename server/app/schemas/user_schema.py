from pydantic import BaseModel, ConfigDict, EmailStr
from typing import Optional
from datetime import datetime



class UserBase(BaseModel):
    name: str
    email: EmailStr
    phone: str
    

    
class UserCreate(UserBase):
    password: str
    name: str
    email: EmailStr
    phone: str
    role:Optional[str] = "customer"
   
    
    
class UserResponse(UserBase):
    model_config = ConfigDict(from_attributes = True)
    id: str
    name: str
    # created_at: datetime
    # updated_at: datetime
    role:str
    
class UserUpdate(UserBase):
    pass
   
class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
    
class UserLoginResponse(BaseModel):
    model_config = ConfigDict(from_attributes = True)
    access_token: str
    token_type: str
    user: UserResponse
    
    
class Token(BaseModel):
    access_token: str
    token_type: str
    
    
class TokenData(BaseModel):
    model_config = ConfigDict(from_attributes = True)
    
   
    user_id: Optional[str] = None
    role: Optional[str] = None