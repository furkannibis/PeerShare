from fastapi import APIRouter
from fastapi.responses import JSONResponse

from server.server_socket import Server
from server.model import ServerSocketParameters

server_router = APIRouter()
server_socket = None

@server_router.get('/server')
async def server_root():
    return JSONResponse(status_code=200, content={'Message': 'Welcome to the server'})

@server_router.post('/server/create-socket')
async def create_server_socket(socket_parameters: ServerSocketParameters):
    global server_socket
    server_socket = Server(ip=socket_parameters.ip, port=socket_parameters.port, password=socket_parameters.password, max_conn_count=socket_parameters.max_conn_count)
    return JSONResponse(status_code=200, content={'Message': 'Welcome to the server'})

@server_router.get('/server/start-bind')
async def start_bind():
    global server_socket
    if server_socket:
        server_socket.start_bind()
        return JSONResponse(status_code=200, content={'Message': 'Welcome to the server'})
    return JSONResponse(status_code=404, content={'Message': 'Welcome to the server'})

@server_router.get('/server/start-listen')
async def start_bind():
    global server_socket
    if server_socket:
        server_socket.start_listen()
        return JSONResponse(status_code=200, content={'Message': 'Welcome to the server'})
    return JSONResponse(status_code=404, content={'Message': 'Welcome to the server'})