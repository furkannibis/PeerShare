from fastapi import APIRouter
from fastapi.responses import JSONResponse

from client.client_socket import Client
from client.model import ClientSocketParameters, ClientSocketRequestFileParameters

client_router = APIRouter()

@client_router.get('/client/create-socket')
async def create_client_socket():
    global client_socket
    client_socket = Client()
    return JSONResponse(status_code=client_socket.message['status_code'], content=client_socket.message)

@client_router.post('/client/connect-server')
async def connect_server(socket_parameters: ClientSocketParameters):
    global client_socket
    client_socket.connect_server(server_ip=socket_parameters.ip, server_port=socket_parameters.port, password=socket_parameters.password)
    return JSONResponse(status_code=client_socket.message['status_code'], content=client_socket.message)

@client_router.post('/client/server-file')
async def get_file(fileParams: ClientSocketRequestFileParameters):
    global client_socket
    client_socket.get_file_info(fileParams.file_name)
    return JSONResponse(status_code=client_socket.message['status_code'], content=client_socket.message)

@client_router.get('/client/server-files')
async def get_server_files():
    global client_socket
    client_socket.get_files_info()
    return JSONResponse(status_code=client_socket.message['status_code'], content=client_socket.message)

@client_router.post('/client/download-file')
async def download_file(downloadParam: ClientSocketRequestFileParameters):
    global client_socket
    client_socket.download_file(file_name=downloadParam.file_name, save_path='./client/files/')
    return JSONResponse(status_code=client_socket.message['status_code'], content=client_socket.message)

@client_router.get('/client/exit')
async def exit_from_server():
    global client_socket
    client_socket.exit_from_server()
    return JSONResponse(status_code=client_socket.message['status_code'], content=client_socket.message)

@client_router.get('/client/server-stat')
async def get_server_stat():
    global client_socket
    client_socket.server_stat()
    return JSONResponse(status_code=client_socket.message['status_code'], content=client_socket.message)