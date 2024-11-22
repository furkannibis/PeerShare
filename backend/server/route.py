from fastapi import APIRouter

from server.server_socket import Server
from server.model import LANServerStartServer, SendMessageAddr, ShowFilesAddr, ConnectedDevice


server_router = APIRouter()

lan_server = Server(net_type='LAN')
wan_server = Server(net_type='WAN')

@server_router.get('/server')
async def server_root():
    return {
        'message': 'welcome to the server'
    }

@server_router.post('/server/lan/start-server')
async def start_server_route(server_inf: LANServerStartServer):
    return lan_server.start_server(server_inf.port)
    
@server_router.get('/server/lan/stop-server')
async def stop_server_route():
    return lan_server.stop_server()

@server_router.get('/server/lan/server-status')
async def check_server_status():
    return lan_server.check_server_status()

@server_router.post('/server/lan/shared-files')
async def show_shared_files(addr: ShowFilesAddr):
    return lan_server.shared_files_list(addr.ip, addr.port)

@server_router.get('/server/lan/start-listening')
async def start_listen():
    return lan_server.start_listening()

@server_router.post('/server/lan/send-message')
async def send_msg(addr: SendMessageAddr):
    return lan_server.send_message(addr.ip, addr.port, addr.message)

@server_router.post('/server/lan/connected-devices')
async def conn_devices(addr: ConnectedDevice):
    return lan_server.get_connected_devices(addr.ip, addr.port)

@server_router.post('/server/wan/start-server')
async def start_server_route(server_inf: LANServerStartServer):
    return wan_server.start_server(server_inf.port)
    
@server_router.get('/server/wan/stop-server')
async def stop_server_route():
    return wan_server.stop_server()

@server_router.get('/server/wan/server-status')
async def check_server_status():
    return wan_server.check_server_status()

@server_router.post('/server/wan/shared-files')
async def show_shared_files(addr: ShowFilesAddr):
    return wan_server.shared_files_list(addr.ip, addr.port)

@server_router.get('/server/wan/start-listening')
async def start_listen():
    return wan_server.start_listening()

@server_router.post('/server/wan/send-message')
async def send_msg(addr: SendMessageAddr):
    return wan_server.send_message(addr.ip, addr.port, addr.message)