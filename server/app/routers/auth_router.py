from fastapi import APIRouter, status,Depends
from ..database.db import get_db
from ..schemas.user_schema import UserCreate,UserLogin,UserLoginResponse,UserResponse
from sqlalchemy.orm import Session
from ..controllers.auth_controller import create_user, authenticate_user
from ..utils.oauth2 import get_current_user


router = APIRouter(
    prefix="/auth",
    tags=["auth"],
)


@router.post("/register",response_model=UserLoginResponse, status_code=status.HTTP_201_CREATED)
def register_user(user:UserCreate, db:Session = Depends(get_db)):
    return create_user(user, db) 



@router.post("/login", status_code=status.HTTP_200_OK,response_model=UserLoginResponse)
def login_user(user:UserLogin, db:Session=Depends(get_db)):
    return authenticate_user(user.email,user.password, db)


@router.get("/me",response_model=UserResponse, status_code=status.HTTP_200_OK)
def get_user(current_user = Depends(get_current_user)):
    return current_user