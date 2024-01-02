import uuid
def test_get_products(client, test_products):
    response = client.get("/products/")
    assert response.status_code == 200
    assert len(response.json()) == len(test_products)
    
    
def test_get_product(client, test_products):
    product_id = test_products[0].id
    response = client.get(f"/products/{product_id}")

  
    assert response.status_code == 200
    assert response.json()['id'] == product_id
    
    
def test_get_product_not_found(client, test_products):
    product_id = str(uuid.uuid4())
    response = client.get(f"/products/{product_id}")
    
    assert response.status_code == 404
    assert response.json()['detail'] == f"Product with id {product_id} not found"