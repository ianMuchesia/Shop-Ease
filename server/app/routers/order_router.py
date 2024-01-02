from fastapi import APIRouter, Depends


router = APIRouter(
    prefix="/orders",
    tags=["orders"],
)


@router.get("/")
def read_orders():
    return [{"name": "Foo", "price": 42}]