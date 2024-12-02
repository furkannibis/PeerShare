from requests import get
import netifaces
import socket
import json

from os import stat
from os.path import isdir, isfile

from datetime import datetime, timedelta
from collections import Counter


def get_network_interfaces() -> list:
    interfaces = []

    gateways = netifaces.gateways()
    default_gateway = gateways.get(netifaces.AF_INET, [(None, None)])[0]

    for interface in netifaces.interfaces():
        addresses = netifaces.ifaddresses(interface)
        if netifaces.AF_INET in addresses:
            int_info = {
                'interface': interface,
                'ipv4': addresses[netifaces.AF_INET][0].get('addr'),
                'netmask': addresses[netifaces.AF_INET][0].get('netmask'),
                'broadcast': addresses[netifaces.AF_INET][0].get('broadcast'),
            }
            try:
                if default_gateway and interface == gateways[netifaces.AF_INET][0][1]:
                    int_info['gateway'] = default_gateway[0]
                else:
                    int_info['gateway'] = None
            except:
                int_info['gateway'] = None
            interfaces.append(int_info)
    return interfaces

def get_network_interface(inter_name: str) -> dict:
    interfaces = get_network_interfaces()

    for interface in interfaces:
        if interface['interface'] == inter_name:
            return interface
    return None

def get_server_lan_ip() -> str:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(('8.8.8.8', 1))
    local_ip_address = s.getsockname()[0]
    s.close()
    return local_ip_address

def get_server_wan_ip():
    try:
        ip = get('https://api.ipify.org').content.decode('utf8')
        return ip
    except:
        return None

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
        if (ip, port) == (connection['ip'], connection['port']):
            return connection
    return None

def is_server(server_addr: tuple, ip: str, port: int) -> bool:
    if (ip, port) == server_addr:
        return True
    return False

def change_connected_devices_type(conn_devices: list):
    conn_dict = []
    for device in conn_devices[1:]:
        conn_dict.append({
            'ip': device[1][0],
            'port': device[1][1]
        })
    return conn_dict

def check_password(server_password: str, client_password: str) -> bool:
    if not server_password:
        return True
    if server_password == client_password:
        return True
    else:
        return False

def readEvent() -> list:
    try:
        with open('server/event/event.json', 'r') as event_file:
            json_object = json.load(event_file)
            if isinstance(json_object, list):
                return json_object
    except (FileNotFoundError, json.JSONDecodeError):
        return []
    return []

def writeToEvent(event_id: str, event_type: str, event_status: int, event_info: dict, event_date = datetime.now().isoformat()):
    event_dict = {
        "eventDate": event_date,
        "eventID": event_id,
        "eventType": event_type,
        "eventStatus": event_status,
        "eventInfo": event_info
    }
    
    json_file = readEvent()
    json_file.append(event_dict)
    
    with open('server/event/event.json', 'w') as event_file:
        json.dump(json_file, event_file, indent=4)

def countEventsByDayWithinWeek(end_date=datetime.now()):
    event_json = readEvent()

    end_datetime = end_date.date()
    start_datetime = end_datetime - timedelta(days=7)

    daily_events = Counter()

    for event in event_json:
        event_date = datetime.fromisoformat(event["eventDate"]).date()
        if start_datetime < event_date <= end_datetime and event['eventID'] == '-':
            daily_events[event_date.isoformat()] += 1

    return dict(daily_events)