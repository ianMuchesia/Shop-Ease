from sqlalchemy.orm import Session
from ..models.category_model import Category, NewArrivals, Trending,Rated
from ..models.product_model import Product
from ..errors.errors import NotFoundError,BadRequestError
from sqlalchemy import desc





#categories controllers
def read_products_by_category(category_id: str, db: Session):
    category_exists = db.query(Category).filter(Category.id == category_id).first()
    
    if not category_exists:
        raise NotFoundError(f"Category with id {category_id} not found")
    products = db.query(Product).filter(Product.category == category_id).all()
    return products



    
def read_all_categories(db: Session):
    categories = db.query(Category).all()
    return categories


def create_category(category: Category, db: Session):
    db_category = Category(**category.model_dump())
    category_exists = db.query(Category).filter(Category.name == category.name).first()
    if category_exists:
        raise BadRequestError(f"Category with name {category.name} already exists")
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return {"msg": "Category created successfully"}




#trending controllers

def read_trending(db: Session):
    trending = db.query(Trending).all()
    return trending

def create_trending(trending: Trending, db: Session):
    product_exists = db.query(Product).filter(Product.id == trending.product).first()
    if not product_exists:
        raise NotFoundError(f"Product with id {trending.product} not found")
    
    trending_exists = db.query(Trending).filter(Trending.product == trending.product).first()
    if trending_exists:
        raise BadRequestError(f"Product with id {trending.product} already exists in trending")
    db_trending = Trending(**trending.model_dump())
    db.add(db_trending)
    db.commit()
    db.refresh(db_trending)
    return {"msg":"category created successfully"}


def remove_trending(trending_id: str, db: Session):
    trending = db.query(Trending).filter(Trending.product== trending_id).first()
    if not trending:
        raise NotFoundError(f"Trending with id {trending_id} not found")
    db.delete(trending)
    db.commit()
    return {"msg": "Trending Product deleted successfully"}

#new arrivals controllers
def read_new_arrivals(db: Session):
    new_arrivals = db.query(Product).order_by(desc(Product.created_at)).limit(10).all()
    return new_arrivals


#rated controllers
def create_rated(rated: Rated, db: Session):
    product_exists = db.query(Product).filter(Product.id == rated.product).first()
    if not product_exists:
        raise NotFoundError(f"Product with id {rated.product} not found")
    rated_exists = db.query(Rated).filter(Rated.product == rated.product).first()
    if rated_exists:
        raise BadRequestError(f"Product with id {rated.product} already exists in rated")
    db_rated = Rated(**rated.model_dump())
    db.add(db_rated)
    db.commit()
    db.refresh(db_rated)
    return {"msg": "Rated created successfully"}

def read_rated(db: Session):
    rated = db.query(Rated).all()
   
    return rated

def remove_rated(rated_id: str, db: Session):
    rated = db.query(Rated).filter(Rated.product == rated_id).first()
    if not rated:
        raise NotFoundError(f"Rated with id {rated_id} not found")
    db.delete(rated)
    db.commit()
    return {"msg": "Rated deleted successfully"}
