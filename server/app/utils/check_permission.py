from ..errors.errors import UnauthorizedError
from fastapi import Depends, Request
from sqlalchemy.orm import Session
from ..database.db import get_db
from .oauth2 import get_current_user



def belongs_to_user(current_user, user_id):
    if current_user.role == "admin": 
        return
    if current_user.id != user_id:
        raise UnauthorizedError("You are not authorized to perform this action")
   
    
def authorized_admini(current_user):
    if current_user.role != "admin":
        raise UnauthorizedError("You are not authorized to perform this action")
    
    
    
def get_current_admin_user(req: Request, db: Session = Depends(get_db)):
    current_user = get_current_user(req, db)
    authorized_admini(current_user)
    return current_user