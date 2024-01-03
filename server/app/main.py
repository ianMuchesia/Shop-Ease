from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from sqlalchemy.exc import IntegrityError
from app.middlewares.error_handler import validation_exception_handler, integrity_error_handler
from app.routers import product_router, category_router, order_router, auth_router



app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
  
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



#exception handlers
app.add_exception_handler(RequestValidationError, validation_exception_handler)
#integrity error handler
app.add_exception_handler(IntegrityError, integrity_error_handler)


#routers
app.include_router(product_router.router)
app.include_router(category_router.router)
app.include_router(order_router.router)
app.include_router(auth_router.router)




@app.get("/")
async def root():
    return {"message": "Welcome to ShopEase API"}