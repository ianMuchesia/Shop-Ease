from fastapi import APIRouter, Depends,status
from typing import List
from ..schemas.product_schema import ProductResponse, ProductCreate
from ..database.db import get_db
from ..controllers.product_controller import create_product, read_products,read_product


router = APIRouter(
    prefix="/products",
    tags=["products"],
)


@router.get("/")
def get_products(db=Depends(get_db)):
    return read_products(db)



@router.post("/", status_code=status.HTTP_201_CREATED)
def post_product(product:ProductCreate,db=Depends(get_db)):
    return create_product(product,db)



@router.get("/{product_id}", status_code=status.HTTP_200_OK, response_model=ProductResponse)
def get_product(product_id:str,db=Depends(get_db)):
    return read_product(product_id,db)