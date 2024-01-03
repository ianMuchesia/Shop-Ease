from fastapi import APIRouter, Depends,status
from sqlalchemy.orm import Session
from ..database.db import get_db
from ..schemas.product_schema import ProductResponse
from ..schemas.category_schema import TrendingCreate,TrendingResponse,NewArrivalsResponse,CategoryResponse,CategoryCreate,NewArrivalsCreate,CategoryAllResponse, RatedCreate,RatedResponse
from typing import List
from ..utils.check_permission import get_current_admin_user

#these are the controller import statements
from ..controllers.category_controller import read_all_categories,read_new_arrivals, read_trending, read_products_by_category,create_trending, create_category,create_rated,read_rated


router = APIRouter(
    prefix="/categories",
    tags=["categories"],
)


@router.get("/", response_model=List[CategoryAllResponse], status_code=status.HTTP_200_OK)
def all_categories(db: Session = Depends(get_db)):
    return read_all_categories(db)



@router.post("/", status_code=status.HTTP_201_CREATED)
def post_category(category: CategoryCreate, db: Session = Depends(get_db),current_user = Depends(get_current_admin_user)):
    return create_category(category, db)




@router.get("/new-arrivals", response_model=List[ProductResponse], status_code=status.HTTP_200_OK)
def new_arrivals(db: Session = Depends(get_db),response_model=NewArrivalsResponse):
    return read_new_arrivals(db)


@router.get("/trending", response_model=List[ProductResponse], status_code=status.HTTP_200_OK)
def trending(db: Session = Depends(get_db),response_model=TrendingResponse):
    return read_trending(db)




@router.post("/trending")
def trending(trending: TrendingCreate, db: Session = Depends(get_db)):
    return create_trending(trending, db)
    
    
@router.post("/rated", status_code=status.HTTP_201_CREATED)
def post_rated(rated: RatedCreate, db: Session = Depends(get_db)):
    return create_rated(rated, db)

@router.get("/rated", response_model=List[RatedResponse], status_code=status.HTTP_200_OK)
def get_rated(db: Session = Depends(get_db)):
    return read_rated(db)


@router.get("/{category_id}/products", response_model=List[CategoryResponse], status_code=status.HTTP_200_OK)
def products_by_category(category_id: str, db: Session = Depends(get_db)):
    return read_products_by_category(category_id, db)


