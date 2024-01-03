from ..models.user_model import User
from sqlalchemy.orm import Session
from ..utils.hash import hash,verify
from ..utils.oauth2 import create_access_token
from ..errors.errors import NotFoundError, NotAuthenticatedError

def create_user(user: User, db: Session):
    db_user = User(name=user.name, username=user.username, email=user.email, password=user.password, phone=user.phone)
    
    db_user.password = hash(db_user.password)
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def authenticate_user(email: str, password: str, db: Session):
    user = db.query(User).filter(User.email == email).first()
    
    if not user:
        raise NotFoundError(f"User with username {email} not found")
    
    is_correct = verify(password, user.password)
    
    if not is_correct:
        raise NotAuthenticatedError("Invalid Credentials")
    
    
    access_token = create_access_token(data={"user_email": user.email, "user_id": user.id})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user":user
    }



