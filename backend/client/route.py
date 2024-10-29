from fastapi import APIRouter

client_route = APIRouter()

@client_route.get('/client')
async def client_root():
    return {
        'message': 'welcome to the client'
    }