from fastapi.exceptions import RequestValidationError
from starlette.responses import JSONResponse
from fastapi import status, HTTPException, Request
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY
from sqlalchemy.exc import IntegrityError



#this is for handling validation errors
async def validation_exception_handler(request:Request, exc:RequestValidationError):
    detail = exc.errors() 
    try:
        if detail[0]['type'] == 'missing':
            return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={"msg":"Missing required fields"},
        )
        if detail[0]['loc'][1] == 'token':        
            return JSONResponse(
        status_code=status.HTTP_401_UNAUTHORIZED,
        content={"msg":"Not authenticated"},
        )
     
    except:
        return JSONResponse(
        status_code=HTTP_422_UNPROCESSABLE_ENTITY,
        content={"msg":detail[0]['msg']},
        )
        
        
#this is the error handler for database integrity errors
async def integrity_error_handler(request: Request, exc: IntegrityError):
    return JSONResponse(
        status_code=400,  # Bad Request Error
        content={"msg": "Database Integrity Error"},
    )