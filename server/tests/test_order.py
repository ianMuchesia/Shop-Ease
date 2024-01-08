def test_post_order(user_authorized_client,test_products):
    product1 = test_products[0].id
    product2 = test_products[1].id
    data = {
        "total_price":"1000",
        "products": [
            {
                "product": product1,
                "quantity": 2
            },
            {
                "product": product2,
                "quantity": 3
            }
        ]
    }
    
    res = user_authorized_client.post("/orders",json=data)
    assert res.status_code == 201

    
    
    
def test_get_user_orders(user_authorized_client,test_products):
    product1 = test_products[0].id
    product2 = test_products[1].id
    data = {
        "total_price":"1000",
        "products": [
            {
                "product": product1,
                "quantity": 2
            },
            {
                "product": product2,
                "quantity": 3
            }
        ]
    }
    
    response = user_authorized_client.post("/orders",json=data)
    res = user_authorized_client.get("/orders/user")
    assert res.status_code == 200
    assert len(res.json()) == 1
  
  
  
def get_one_order (user_authorized_client,test_products):
    product1 = test_products[0].id
    product2 = test_products[1].id
    data = {
        "total_price":"1000",
        "products": [
            {
                "product": product1,
                "quantity": 2
            },
            {
                "product": product2,
                "quantity": 3
            }
        ]
    }
    
    response = user_authorized_client.post("/orders",json=data)
    order_id = response.json()["order_id"]
    res = user_authorized_client.get(f"/orders/user/{order_id}")
    assert res.status_code == 200
    assert len(res.json()) == 2
    
    
    
def test_update_order(user_authorized_client,test_products):
    product1 = test_products[0].id
    product2 = test_products[1].id
    data = {
        "total_price":"1000",
        "products": [
            {
                "product": product1,
                "quantity": 2
            },
            {
                "product": product2,
                "quantity": 3
            }
        ]
    }
    
    response = user_authorized_client.post("/orders",json=data)
    order_id = response.json()["order_id"]
    data = {
        "total_price":"2000",
        "products": [
            {
                "product": product1,
                "quantity": 2
            }
        ]
    }
    res = user_authorized_client.patch(f"/orders/user/{order_id}",json=data)

    assert res.status_code == 201
    assert res.json()['msg'] == "Order updated successfully"
    
    
    
def test_delete_order(user_authorized_client,test_products):
    product1 = test_products[0].id
    product2 = test_products[1].id
    data = {
        "total_price":"1000",
        "products": [
            {
                "product": product1,
                "quantity": 2
            },
            {
                "product": product2,
                "quantity": 3
            }
        ]
    }
    
    response = user_authorized_client.post("/orders",json=data)
    order_id = response.json()["order_id"]
    res = user_authorized_client.delete(f"/orders/user/{order_id}")
    assert res.status_code == 204
    