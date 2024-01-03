from ..errors.errors import UnauthorizedError


def belongs_to_user(current_user, user_id):
    if current_user.role == "admin": 
        return
    if current_user.id != user_id:
        raise UnauthorizedError("You are not authorized to perform this action")