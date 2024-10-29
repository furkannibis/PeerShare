from requests import get
from json import load

def get_server_ip():
    server_ip = get('https://checkip.amazonaws.com').text.strip()
    return server_ip

def get_server_port():
    with open('conf.json', 'r') as file:
        server_port = load(file)['port']
    return server_port