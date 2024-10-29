from fastapi import APIRouter

server_router = APIRouter()

@server_router.get('/server')
async def server_root():
    return {
        'message': 'welcome to the server'
    }
