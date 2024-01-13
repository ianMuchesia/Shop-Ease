from sqlalchemy.orm import Session
from ..models.product_model import Product
from ..models.category_model import Category
from ..errors.errors import NotFoundError



def read_products(db: Session,limit,skip, gender):
    query = db.query(Product)
    if gender is not None:
        query = query.filter(Product.gender == gender)
    query = query.offset(skip).limit(limit)
    return query.all()

def create_product(product: Product, db: Session):
    db_product = Product(**product.model_dump())
    
    if db_product.category:
        category_exists = db.query(Category).filter(Category.id == db_product.category).first()
    
        if not category_exists:
            raise NotFoundError(f"Category with id {db_product.category} not found")
    
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return {"msg":"product creaed successfully"}


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
    
    