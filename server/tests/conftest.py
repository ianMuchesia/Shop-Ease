from app.main import app
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.models.base_model import Base
from fastapi.testclient import TestClient
from app.database.db import get_db
import uuid
from app.models.product_model import Product
from app.models.category_model import Category
from app.utils.oauth2 import create_access_token


SQLALCHEMY_DATABASE_URL = "postgresql://postgres:password@localhost:5432/shop_ease"



engine = create_engine(SQLALCHEMY_DATABASE_URL)

Testing_SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)



@pytest.fixture()
def session():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    
    db = Testing_SessionLocal()
    try:
        yield db
    finally:
        db.close()




@pytest.fixture()
def client(session):
    def override_get_db():
 
        try:
            yield session
        finally:
            session.close()
    app.dependency_overrides[get_db] = override_get_db
    yield TestClient(app)


@pytest.fixture()
def test_admin(client):
    admin_data = {
    "name": "ian",
    "email": "ian@gmail.com",
    "password": "password",
    "role":"admin",
    "phone":"0712345678"
    }
    
    
    res = client.post("/auth/register", json=admin_data)
    
    assert res.status_code == 201
   
    return res.json()
  


@pytest.fixture()
def test_user(client):
    user_data = {
        "name":"msodoki",
        "email":"msodoki@email.com",
        "password":"password",
        "phone":"0712445678"
    }
    
    res = client.post("/auth/register", json=user_data)
    assert res.status_code == 201
    return res.json()

@pytest.fixture
def user_token(test_user):
   
    if test_user:
        return create_access_token({"user_id": test_user["user"]["id"], "user_email": test_user["user"]["email"]})

@pytest.fixture
def admin_token(test_admin):
   
    if test_admin:
        return create_access_token({"user_id": test_admin["user"]["id"], "user_email": test_admin["user"]["email"]})

@pytest.fixture
def user_authorized_client(client, user_token):
    client.headers["Authorization"] = f"Bearer {user_token}"
    return client

@pytest.fixture
def admin_authorized_client(client, admin_token):
    client.headers["Authorization"] = f"Bearer {admin_token}"
    return client



@pytest.fixture()
def test_products(session):
    products_data = [
    {
                    "id": str(uuid.uuid4()),

  "name": "Awesome Product",
  "description": "An incredible product that will amaze you!",
  "category": "Electro 1",
  "price": 4999,
  "image":"image",
  "gender": "M",
  "rating": 4
},{
    "id": str(uuid.uuid4()),
    "name": "Awesome Product 2",
    "description": "An incredible product that will amaze you!",
    "category": "Electro 2",
    "price": 4999,
    "gender": "F",
    "image":"image",
    "rating": 4
    
    
},{
    "id": str(uuid.uuid4()),
    "name": "Awesome Product 3",
    "description": "An incredible product that will amaze you!",
    "category": "Electro 3",
    "price": 4999,
    "gender": "M",
    "image":"image",
    "rating": 4
    
}
    ]
   
    for product in products_data:
        category = Category(name=product['category'], id=str(uuid.uuid4()))
        session.add(category)
        session.commit()
        product['category'] = category.id
       
        
        session.add(Product(**product))
    session.commit()   
    return session.query(Product).all()
    
    
@pytest.fixture()
def test_category(session):
    category = Category(name="Electronics", id=str(uuid.uuid4()))
    session.add(category)
    session.commit()
    return category