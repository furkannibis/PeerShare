from fastapi import APIRouter
from fastapi.responses import JSONResponse

from client.client_socket import Client
from client.model import ClientSocketParameters

client_router = APIRouter()

@client_router.post('/client/create-socket')
async def create_client_socket(socket_parameters: ClientSocketParameters):
    global client_socket
    client_socket = Client(server_ip=socket_parameters.ip, server_port=socket_parameters.port, password=socket_parameters.password)
    return JSONResponse(status_code=200, content={'Message': 'Welcome to the client'})

@client_router.get('/client/connect-server')
async def connect_server():
    global client_socket
    client_socket.connect_server()
    return JSONResponse(status_code=200, content={'Message': 'Welcome to the client'})

@client_router.get('/client/server-files')
async def get_server_files():
    global client_socket
    print(client_socket.get_files_info())
    return JSONResponse(status_code=200, content={'Message': 'Welcome to the client'})