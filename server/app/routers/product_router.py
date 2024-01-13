from fastapi import APIRouter, Depends,status
from typing import List
from ..schemas.product_schema import ProductResponse, ProductCreate
from ..database.db import get_db
from ..utils.check_permission import get_current_admin_user
from ..controllers.product_controller import create_product, read_products,read_product,update_product,delete_product


router = APIRouter(
    prefix="/products",
    tags=["products"],
)


@router.get("/",response_model=List[ProductResponse])
def get_products(db=Depends(get_db), limit : int = 20, skip : int = 0, gender:str = None):
    #skip -> offset
    #pagination
    print(gender)
    return read_products(db,limit, skip,gender)



@router.post("/", status_code=status.HTTP_201_CREATED)
def post_product(product:ProductCreate,db=Depends(get_db),current_user = Depends(get_current_admin_user)):
    return create_product(product,db)



@router.get("/{product_id}", status_code=status.HTTP_200_OK, response_model=ProductResponse)
def get_product(product_id:str,db=Depends(get_db)):
    return read_product(product_id,db)


@router.patch("/{product_id}", status_code=status.HTTP_201_CREATED, response_model=ProductResponse)
def patch_product(product_id:str,product:ProductCreate,db=Depends(get_db),current_user=Depends(get_current_admin_user)):
    return update_product(product_id,db,product)



@router.delete("/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_product(product_id:str,db=Depends(get_db),current_user=Depends(get_current_admin_user)):
    return delete_product(product_id,db)

