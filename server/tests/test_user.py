from app.schemas.user_schema import UserResponse
import pytest

def test_register_user(client):
  
    res = client.post("/auth/register", json={
        "name":"modoki",
        "email":"msodoki@email.com",
        "password":"password",
        "phone":"07124456788"
        
       })
    
    new_user = UserResponse(**res.json())
    assert res.status_code == 201
    assert new_user.username == "modoki"


def test_login_user(client, test_user):
    
   
    res = client.post("/auth/login", json={
        "email":test_user['email'],
        "password":"password"
         })
 
    assert res.status_code == 200
    assert True
    

    
    
    
def test_register_user_fail(client, test_user):
  
    res = client.post("/auth/register", json={
        "name":"modoki",
        "email":"msodoki@email.com",
        "password":"password",
        "phone":1234567890
         })

    assert res.status_code == 400
    assert res.json() == {"msg": "Database Integrity Error"}
   
    


@pytest.mark.parametrize("email, password, expected, status", [
    ("i", "wrongpassword", {"detail": "Invalid Credentials"}, 401),
    ("ian@gmail.com", "password", {"detail": "Not Found"}, 404),
       ("", "password", {"detail": "Invalid Credentials"},40), 
])
def test_login_user_fail_2(test_user,client, email,password, expected,status):
    
    with pytest.raises(Exception):
        res = client.post("/auth/login", json={
        "email":email,
        "password":password
         })
   
        assert res.status_code == status
        assert res.json() == expected


