from ..models.user_model import User
from sqlalchemy.orm import Session
from ..utils.hash import hash,verify
from ..utils.oauth2 import create_access_token
from ..errors.errors import NotFoundError,UnauthorizedError,BadRequestError
from sqlalchemy import or_



def create_user(user: User, db: Session):
    userExists = db.query(User).filter(or_(User.email == user.email, User.phone == user.phone)).first()
    if userExists:
        raise BadRequestError(f"User with email {user.email} or phone number {user.phone} already exists")
    
    db_user = User(name=user.name,  email=user.email, password=hash(user.password), phone=user.phone, role=user.role)
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    access_token = create_access_token(data={"user_email": db_user.email, "user_id": db_user.id})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": db_user
    }
  


def authenticate_user(email: str, password: str, db: Session):
    user = db.query(User).filter(User.email == email).first()
    
    if not user:
        raise NotFoundError(f"User with username {email} not found")
    
    is_correct = verify(password, user.password)
    
    if not is_correct:
        raise UnauthorizedError("Invalid Credentials")
    
    
    access_token = create_access_token(data={"user_email": user.email, "user_id": user.id})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user":user
    }



