from fastapi import APIRouter
from fastapi.responses import JSONResponse

from server.server_socket import Server
from server.model import SetPasswordModel, StartServerModel, SharedFilesModel, ConnectedDevicesModel

server_router = APIRouter()

server = Server()

@server_router.get('/server')
async def server_root():
    return {
        'message': 'welcome to the server'
    }

@server_router.get('/server/network-interfaces')
async def get_net_card():
    net_ints = server.send_network_interfaces()
    return JSONResponse(status_code=net_ints['status_code'], content=net_ints)

@server_router.get('/server/public-ip')
async def get_public_ip():
    public_ip = server.send_public_ip()
    return JSONResponse(status_code=public_ip['status_code'], content=public_ip)

@server_router.get('/server/server-status')
async def check_server_status():
    status_message = server.check_server_status()
    return JSONResponse(status_code=status_message['status_code'], content=status_message)

@server_router.post('/server/start-server')
async def start_server_route(server_inf: StartServerModel):
    start_server_message = server.start_server(server_inf.interface, server_inf.port, password=server_inf.password)
    return JSONResponse(status_code=start_server_message['status_code'], content=start_server_message)

@server_router.get('/server/stop-server')
async def stop_server_route():
    stop_message = server.stop_server()
    return JSONResponse(status_code=stop_message['status_code'], content=stop_message)

@server_router.post('/server/shared-files')
async def show_shared_files(addr: SharedFilesModel):
    shared_files_message = server.shared_files(addr.ip, addr.port, password=addr.password)
    return JSONResponse(status_code=shared_files_message['status_code'], content=shared_files_message)

@server_router.get('/server/start-listening')
async def start_listen():
    start_listen_message = server.start_listen()
    return JSONResponse(status_code=start_listen_message['status_code'], content=start_listen_message)

@server_router.post('/server/connected-devices')
async def conn_devices(addr: ConnectedDevicesModel):
    connected_device_message = server.get_connected_devices(addr.ip, addr.port, addr.password)
    return JSONResponse(status_code=connected_device_message['status_code'], content=connected_device_message)