from fastapi import FastAPI

from server.route import server_router
from client.route import client_route

app = FastAPI()
app.include_router(server_router)
app.include_router(client_route)

@app.get('/')
async def root():
    return {
        "Message": "Hello, World!"
    }

