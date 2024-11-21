from requests import get
from json import load
import socket

from os import stat
from os.path import isdir, isfile

def get_server_lan_ip() -> str:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(('8.8.8.8', 1))
    local_ip_address = s.getsockname()[0]
    s.close()
    return local_ip_address

def get_server_wan_ip():
    ip = get('https://api.ipify.org').content.decode('utf8')
    return ip

def get_server_port():
    with open('conf.json', 'r') as file:
        server_port = load(file)['port']
    return server_port

def define_file_type(path, file):
        if isfile(path+file):
            file_type = 'File'
        elif isdir(path+file):
            file_type = 'Directory'
        else:
            file_type = 'Special File (socket, FIFO, device file)'
        return file_type

def define_file_size(path, file):
    file_size_gb = round(stat(path=path+file).st_size / (1024 * 1024 * 1024), 2)
    file_size_mb = round(stat(path=path+file).st_size / (1024 * 1024), 2)
    file_size_kb = round(stat(path=path+file).st_size / 1024, 2)
    file_size_b = round(stat(path=path+file).st_size, 2)

    file_size = f'{file_size_b} B'
    if file_size_b >= 500:
        file_size = f'{file_size_kb} KB'
    if file_size_kb >= 500:
        file_size = f'{file_size_mb} MB'
    if file_size_mb >= 500:
        file_size = f'{file_size_gb} GB'
    
    return file_size

def is_conn_exists(connections: list, ip: str, port: int):
    for connection in connections:
        if (ip, port) == connection[1]:
            return connection
    return False