from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from server.route import server_router
from client.route import client_route

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(server_router)
app.include_router(client_route)

@app.get('/')
async def root():
    return {
        "Message": "Hello, World!"
    }
