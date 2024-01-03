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
def test_products(session):
    products_data = [
    {
                    "id": str(uuid.uuid4()),

  "name": "Awesome Product",
  "description": "An incredible product that will amaze you!",
  "category": "Electronics",
  "price": 4999,
  "gender": "M",
  "rating": 4
},{
    "id": str(uuid.uuid4()),
    "name": "Awesome Product 2",
    "description": "An incredible product that will amaze you!",
    "category": "Electronics",
    "price": 4999,
    "gender": "F",
    "rating": 4
    
},{
    "id": str(uuid.uuid4()),
    "name": "Awesome Product 3",
    "description": "An incredible product that will amaze you!",
    "category": "Electronics",
    "price": 4999,
    "gender": "M",
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
    