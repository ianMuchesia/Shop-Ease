from sqlalchemy.orm import Session
from ..models.category_model import Category, NewArrivals, Trending
from ..models.product_model import Product
from ..errors.errors import NotFoundError





def read_products_by_category(category_id: str, db: Session):
    category_exists = db.query(Category).filter(Category.id == category_id).first()
    
    if not category_exists:
        raise NotFoundError(f"Category with id {category_id} not found")
    products = db.query(Product).filter(Product.category == category_id).all()
    return products




def read_new_arrivals(db: Session):
    new_arrivals = db.query(NewArrivals).all()
    return new_arrivals


def read_trending(db: Session):
    trending = db.query(Trending).all()
    return trending









def create_new_arrival(new_arrival: NewArrivals, db: Session):
    db_new_arrival = NewArrivals(**new_arrival.model_dump())
    db.add(db_new_arrival)
    db.commit()
    db.refresh(db_new_arrival)
    return db_new_arrival


def create_trending(trending: Trending, db: Session):
    db_trending = Trending(**trending.model_dump())
    db.add(db_trending)
    db.commit()
    db.refresh(db_trending)
    return db_trending




    
def read_all_categories(db: Session):
    categories = db.query(Category).all()
    return categories


def create_category(category: Category, db: Session):
    db_category = Category(**category.model_dump())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category