from fastapi import APIRouter
from fastapi.responses import JSONResponse

from server.server_socket import Server
from server.model import ServerSocketParameters

server_router = APIRouter()
server_socket = None

@server_router.get('/server')
async def server_root():
    return JSONResponse(status_code=200, content={'Message': 'Welcome to the server'})

@server_router.get('/server/create-socket')
async def create_server_socket():
    global server_socket
    if not server_socket:
        server_socket = Server()
        return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)
    else:
        return JSONResponse(status_code=409, content={'err_info': {'err_code': 'E000', 'err_desc': 'The server socket has already been created.'}})
    
@server_router.get('/server/server-status')
async def server_status():
    global server_socket
    server_socket.server_status()
    return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)

@server_router.post('/server/start-bind')
async def start_bind(socket_parameters: ServerSocketParameters):
    global server_socket
    server_socket.start_bind(ip=socket_parameters.ip, port=socket_parameters.port, password=socket_parameters.password, max_conn_count=socket_parameters.max_conn_count)
    return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)

@server_router.get('/server/start-listen')
async def start_bind():
    global server_socket
    server_socket.start_listen()
    return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)

@server_router.get('/server/stop-server')
async def close_server():
    global server_socket
    server_socket.close_server()
    return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)

@server_router.get('/server/server-weekly-stat')
async def server_weekly_stat():
    global server_socket
    server_socket.weekly_stat()
    return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)

@server_router.get('/server/server-daily-stat')
async def server_daily_stat():
    global server_socket
    server_socket.hourly_stat()
    return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)

@server_router.get('/server/connected-devices')
async def show_devices():
    global server_socket
    server_socket.show_connections()
    return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)

@server_router.get('/server/shared-files')
async def show_files():
    global server_socket
    server_socket.show_shared_files()
    return JSONResponse(status_code=server_socket.message['status_code'], content=server_socket.message)