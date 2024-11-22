import socket
from os import listdir, getcwd
import threading

from server.functions import get_server_lan_ip, get_server_wan_ip, get_server_port, define_file_size, define_file_type, is_conn_exists, change_connected_devices_type

from models.psMessage import PeerShareMessage, PeerShareException

class Server:
    def __init__(self, net_type: str):
        if net_type == 'LAN':
            self.ip = get_server_lan_ip()
        elif net_type == 'WAN':
            self.ip = get_server_wan_ip()
        self.port = 0
        self.server_status = 'closed'
        self.binding = False
        self.listening = False
        self.connected_devices = list()

    def check_server_status(self):
        return PeerShareMessage('success', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
    
    def create_server_socket(self):
        self.server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 10)

    def start_server(self, port):
        if not self.check_server_status()['server_binding']:
            self.create_server_socket()
            if 0 > port or port > 65535:
                return PeerShareException('failed', '0x014', 'The server\'s port number can range from 1 to 65,535. Be careful not to use a port number that is already in use.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
            self.port = port
            try:
                self.server_socket.bind((self.ip, self.port))
                self.connected_devices.append((self.ip, self.port))
            except OSError:
                self.stop_server()
                return PeerShareException('failed', '0x015', 'The port you are trying to use is being used by the server. Please select another port.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
            self.server_status = 'binding'
            self.binding = True
            return PeerShareMessage('success', self.ip, self.port, self.server_status, message='The server has started binding for connection requests.', server_binding=self.binding, server_listening=self.listening)
        elif self.check_server_status()['server_binding']:
            return PeerShareException('failed', '0x001', 'The server is already binding for requests.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
    
    def stop_server(self):
        if self.check_server_status()['server_binding']:
            self.server_socket.close()
            del self.server_socket
            self.port = 0
            self.server_status = 'closed'
            self.binding = False
            self.listening = False
            self.connected_devices = list()
            return PeerShareMessage('success', self.ip, self.port, self.server_status, message='The server\'s socket successfully closed by the user.', server_binding=self.binding, server_listening=self.listening)
        elif not self.check_server_status()['server_binding']:
            return PeerShareException('failed', '0x002', 'The server\'s socket already close.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
    
    def start_listening(self):
        if self.check_server_status()['server_binding']:
            if not self.check_server_status()['server_listening']:
                self.server_socket.listen()
                
                self.listening = True
                self.server_status = 'listening'

                server_listen_thread = threading.Thread(target=self.accept_connections)
                server_listen_thread.start()

                return PeerShareMessage('success', self.ip, self.port, self.server_status, message='The server started to listening for connections.', server_binding=self.binding, server_listening=self.listening)
            elif self.check_server_status()['server_listening']:
                return PeerShareException('failed', '0x004', 'The server\'s socket already listening for connections.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
        elif not self.check_server_status()['server_binding']:
            return PeerShareException('failed', '0x003', 'The server\'s socket is closed to binding. Server have to start to binding first.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
        
    def accept_connections(self):
        if self.check_server_status()['server_binding']:
            if self.check_server_status()['server_listening']:
                conn, addr = self.server_socket.accept()
                if (conn, addr) not in self.connected_devices:
                    self.connected_devices.append((conn, addr))
                self.start_listening()
            else:
                return PeerShareException('failed', '0x006', 'The server have to be bind-listening mode first for accept connection.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
        elif not self.check_server_status()['server_binding']:
            return PeerShareException('failed', '0x005', 'The server have to be bind-listening mode first for accept connection.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
    
    def shared_files_list(self, ip, port):
        if self.check_server_status()['server_binding']:
            if self.check_server_status()['server_listening']:
                curr_connection = is_conn_exists(self.connected_devices, ip=ip, port=port)
                if curr_connection:
                    path = getcwd() + '/server/files/'
                    files = listdir(path=path)
                    files_total = list()
                    for file in files:
                        file_type = define_file_type(path=path, file=file)
                        file_size = define_file_size(path=path, file=file)
                        files_total.append({'fileName': file, 'fileType': file_type, 'fileSize': file_size})
                    return PeerShareMessage('success', self.ip, self.port, self.server_status, message='The server shared files for connection.', server_binding=self.binding, server_listening=self.listening, client={'ip': ip, 'port': port}, files=files_total)
                elif not curr_connection:
                    return PeerShareException('failed', '0x009', 'The server could not find in the current connection list current connection.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
            elif not self.check_server_status()['server_listening']:
                return PeerShareException('failed', '0x008', 'The server have to be bind-listening mode first for share files.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
        elif not self.check_server_status()['server_binding']:
            return PeerShareException('failed', '0x007', 'The server have to be bind-listening mode first for share files.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
    
    def send_message(self, ip, port, message):
        if self.check_server_status()['server_binding']:
            if self.check_server_status()['server_listening']:
                curr_connection = is_conn_exists(self.connected_devices, ip=ip, port=port)
                if (self.ip, self.port) == curr_connection:
                    return PeerShareException('failed', '0x016', 'You can\'t send messages to yourself.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
                if curr_connection:
                    conn, addr = curr_connection
                    try:
                        conn.send(b'ping')
                    except socket.error:
                        self.connected_devices.remove(curr_connection)
                        return PeerShareException('failed', '0x013', 'The client has no connection to the server.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening, client=addr)
                    conn.send(f'{message}'.encode())
                    conn.close()
                    return PeerShareMessage('success', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening, client={'ip': ip, 'port': port}, sended_message=message)
                elif not curr_connection:
                    return PeerShareException('failed', '0x012', 'The server could not find in the current connection list current connection.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
            elif not self.check_server_status()['server_listening']:
                return PeerShareException('failed', '0x011', 'The server have to be bind-listening mode first for send message.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
        elif not self.check_server_status()['server_binding']:
            return PeerShareException('failed', '0x010', 'The server have to be bind-listening mode first for send message.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
    
    def get_connected_devices(self, ip, port):
        if self.check_server_status()['server_binding']:
            if self.check_server_status()['server_listening']:
                curr_connection = is_conn_exists(self.connected_devices, ip=ip, port=port)
                if (self.ip, self.port) == curr_connection:
                    return PeerShareMessage('success', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening, connected_devices=change_connected_devices_type(self.connected_devices))
                else:
                    return PeerShareException('failed', '0x019', 'It was detected that you do not have sufficient permissions to see the connected users.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
            else:
                return PeerShareException('failed', '0x018', 'The server have to be bind-listening mode first for send current connections.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)
        else:
            return PeerShareException('failed', '0x017', 'The server have to be bind-listening mode first for send current connections.', self.ip, self.port, self.server_status, server_binding=self.binding, server_listening=self.listening)