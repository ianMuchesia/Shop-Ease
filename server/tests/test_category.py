import uuid
def test_create_category(client):
    category = {
        "name": "Electronics",
        "id":"kjhoihsgh"
    }
    response = client.post("/categories/", json=category)
    assert response.status_code == 403
    assert response.json() == {"detail": "Not authenticated"}
  
    
def test_create_category_admin(admin_authorized_client):
    category = {
        "name": "Electronics",
        "id":"kjhoihsgh"
    }
    response = admin_authorized_client.post("/categories/", json=category)
    assert response.status_code == 201
    assert response.json() == {
        "msg": "Category created successfully"
    }
    
    
def test_create_category_duplicate(admin_authorized_client):
    category = {
        "name": "Electronics",
        "id":"kjhoihsgh"
    }
    res = admin_authorized_client.post("/categories/", json=category)
 
    response = admin_authorized_client.post("/categories/", json=category)

    assert response.status_code == 400
    assert response.json() == {
        "detail": "Category with name Electronics already exists"
    }
    
    
def test_create_trending(client):
    trending = {
        "product":"kjhoihsgh"
    }
    response = client.post("/categories/trending", json=trending)
    assert response.status_code == 403
    assert response.json() == {"detail": "Not authenticated"}
    
    
    
def tesst_create_trending_admin(admin_authorized_client):
    trending = {
        "product":"kjhoihsgh"
    }
    response = admin_authorized_client.post("/categories/trending", json=trending)
    assert response.status_code == 201
    assert response.json() == {
        "msg": "category created successfully"
    }
    
    
def test_get_trending(client):
    response = client.get("/categories/trending")
    assert response.status_code == 200
    assert response.json() == []
    
    
    
def test_delete_trending(client):
    response = client.delete("/categories/trending/1")
    assert response.status_code == 403
    assert response.json() == {"detail": "Not authenticated"}
    
    
    
def test_delete_trending_admin(admin_authorized_client,test_products):
 
    product = {
    "id": "sljlkdkjdng-skjgldsjfd",
    "name": "Awesome Product 3",
    "description": "An incredible product that will amaze you!",
    "category": "Electro 3",
    "price": 4999,
    "gender": "M",
    "rating": 4
    }
    
    admin_authorized_client.post("/products/", json=product)
   
    trending = {
        "product":test_products[0].id
    }
    res = admin_authorized_client.post("/categories/trending", json=trending)
    
  
   
    response = admin_authorized_client.delete(f"/categories/trending/{trending['product']}")

    assert response.status_code == 204
    

def test_get_new_arrivals(client):
    response = client.get("/categories/new-arrivals")
    assert response.status_code == 200
    assert response.json() == []
    
    
    
def test_create_rated(client):
    rated = {
        "product":"kjhoihsgh"
    }
    response = client.post("/categories/rated", json=rated)
    assert response.status_code == 403
    assert response.json() == {"detail": "Not authenticated"}
    
    
def test_create_rated_admin(admin_authorized_client,test_products):
    rated={
        "product":test_products[0].id
    }

    response = admin_authorized_client.post("/categories/rated", json=rated)
    assert response.status_code == 201
    assert response.json() == {
        "msg": "Rated created successfully"
    }
    
    
    
def test_create_rated_duplicate(admin_authorized_client,test_products):
    rated={
        "product":test_products[0].id
    }
    res = admin_authorized_client.post("/categories/rated", json=rated)
    response = admin_authorized_client.post("/categories/rated", json=rated)
    assert response.status_code == 400
    assert response.json() == {
        "detail": f"Product with id {rated['product']} already exists in rated"
    }
    
    
def test_get_rated(client):
    response = client.get("/categories/rated")
    assert response.status_code == 200
    assert response.json() == []
    
    
def test_deleted_rated(client):
    response = client.delete("/categories/rated/1")
    assert response.status_code == 403
    assert response.json() == {"detail": "Not authenticated"}
    
def test_deleted_rated_admin(admin_authorized_client,test_products):
  
    rated={
        "product":test_products[0].id
    }
    res = admin_authorized_client.post("/categories/rated", json=rated)
    response = admin_authorized_client.delete(f"/categories/rated/{rated['product']}")
    assert response.status_code == 204
    # assert response.json() == {
    #     "msg": "Rated removed successfully"
    # }
    
    
def get_products_by_categories(client):
    response = client.get("/categories/1/products")
    assert response.status_code == 200
    assert response.json() == []