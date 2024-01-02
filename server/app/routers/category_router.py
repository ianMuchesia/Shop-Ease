from fastapi import APIRouter, Depends


router = APIRouter(
    prefix="/categories",
    tags=["categories"],
)


@router.get("/")
def read_categories():
    return [{"name": "Foo", "price": 42}]