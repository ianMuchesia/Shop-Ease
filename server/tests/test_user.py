from app.schemas.user_schema import UserResponse,UserLoginResponse
import pytest

def test_register_user(client):
  
    res = client.post("/auth/register", json={
        "name":"modoki",
        "email":"msodoki@email.com",
        "password":"password",
        "phone":"07124456788"
        
       })
   
    new_user = UserLoginResponse(**res.json())
    assert res.status_code == 201
    assert new_user.user.name == "modoki"


def test_login_user(client, test_user):
   
    
   
    res = client.post("/auth/login", json={
        "email":test_user["user"]["email"],
        "password":"password"
         })
 
    assert res.status_code == 200
    assert True
    

    
    
    
def test_register_user_fail(client):
  
    existing_user = {
        "name":"modoki",
        "email":"msodoki@email.com",
        "password":"password",
        "phone":"1234567890"
    }
    response = client.post("/auth/register", json=existing_user)

    res = client.post("/auth/register", json=existing_user)

    assert res.status_code == 400
    assert res.json() == {"detail": "User with email msodoki@email.com or phone number 1234567890 already exists"}
   
    


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


