from sqlalchemy.orm import Session
from ..models.product_model import Product
from ..errors.errors import NotFoundError



def read_products(db: Session):
    return db.query(Product).all()

def create_product(product: Product, db: Session):
    db_product = Product(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


def read_product(product_id: str, db: Session):
    product =  db.query(Product).filter(Product.id == product_id).first()
    
    if not product:
        raise NotFoundError(f"Product with id {product_id} not found")
    
    
    return product



def update_product(product_id: str, db: Session, product: Product):
        
        product_exists = db.query(Product).filter(Product.id == product_id).first()
        
        if not product_exists:
            raise NotFoundError(f"Product with id {product_id} not found")
            
        db.query(Product).filter(Product.id == product_id).update({"name": product.name, "description": product.description, "price": product.price, "category": product.category})
        db.commit()
        
        return db.query(Product).filter(Product.id == product_id).first()
    
    
    
def delete_product(product_id: str, db: Session):
        
        product_exists = db.query(Product).filter(Product.id == product_id).first()
        
        if not product_exists:
            raise NotFoundError(f"Product with id {product_id} not found")
            
        db.query(Product).filter(Product.id == product_id).delete()
        db.commit()
        
        return {"message": f"Product with id {product_id} deleted successfully"}
    
    