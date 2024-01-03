from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database.db import get_db
from ..schemas.category_schema import NewArrivals,TrendingCreate,TrendingResponse,NewArrivalsResponse,CategoryResponse,CategoryCreate


#these are the controller import statements
from ..controllers.category_controller import read_all_categories,read_new_arrivals, read_trending, read_products_by_category,  create_new_arrival,create_trending


router = APIRouter(
    prefix="/categories",
    tags=["categories"],
)


@router.get("/")
def all_categories(db: Session = Depends(get_db)):
    return read_all_categories(db)



@router.post("/")
def create_category(category: CategoryCreate, db: Session = Depends(get_db)):
    return create_category(category, db)



@router.get("/{category_id}/products")
def products_by_category(category_id: str, db: Session = Depends(get_db)):
    return read_products_by_category(category_id, db)



@router.get("/new-arrivals")
def new_arrivals(db: Session = Depends(get_db),response_model=NewArrivalsResponse):
    return read_new_arrivals(db)


@router.get("/trending")
def trending(db: Session = Depends(get_db),response_model=TrendingResponse):
    return read_trending(db)

@router.post("/new-arrival")
def new_arrival(new_arrival: NewArrivals, db: Session = Depends(get_db)):
    return create_new_arrival(new_arrival, db)


@router.post("/trending")
def trending(trending: TrendingCreate, db: Session = Depends(get_db)):
    return create_trending(trending, db)
    