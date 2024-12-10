import socket
import threading
from tqdm import tqdm
from datetime import datetime
import os

from ps_obj.functions import show_files, file_info, file_size, show_files_for_server
from ps_obj.psMessage import PeerShareServerMessage, PeerShareServerException

from server.functions import write_to_event, wan_ip

class ConnectedClient:
    def __init__(self, ip: str, port: int, password: str, socket_conn: socket.socket):
        self.ip = ip
        self.port = port
        self.password = password
        self.socket_conn = socket_conn
        self.connected_time = datetime.now().strftime('%d.%m.%Y %H:%M:%S')
        self.downloaded_size = 0

class Server(socket.socket):
    def __init__(self):
        super().__init__(socket.AF_INET, socket.SOCK_STREAM)
        self.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

        self.ip = None
        self.port = None
        self.binding = False
        self.listening = False
        self.connected_devices = []
        self.wan_ip = wan_ip()
        
        write_to_event({'event_code': 'ECSS', 'event_description': 'Server socket created'})
        self.message = PeerShareServerMessage(status_code=200, status='success', message_code='M000', message='Server socket created successfully.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening)

    def start_bind(self, ip: str, port: int, password: str, max_conn_count: int):
        if self.binding:
            self.message = PeerShareServerException(status_code=404, status='failed', err_code='E000', err_desc='The server is already in bind mode.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening)
        else:
            self.binding = True
            self.ip = ip
            self.port = port
            self.password = password
            self.max_conn_count = max_conn_count
            self.bind((self.ip, self.port))

            write_to_event({'event_code': 'ESBS', 'event_description': 'Server bind started'})
            self.message = PeerShareServerMessage(status_code=200, status='success', message_code='M001', message='The server\'s bind mode has been activated successfully.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening)

    def start_listen(self):
        if self.listening:
            self.message = PeerShareServerException(status_code=404, status='failed', err_code='E001', err_desc='The server is already in listening mode.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening)
        else:
            self.listening = True
            self.listen(self.max_conn_count)
            threading.Thread(target=self.accept_connections, daemon=True).start()
            write_to_event({'event_code': 'ESLS', 'event_description': 'Server listen started'})
            self.message = PeerShareServerMessage(status_code=200, status='success', message_code='M002', message=f'The server was successfully put into listening mode. The number of users that can connect is set to {self.max_conn_count}.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening)

    def close_server(self):
        self.ip = None
        self.port = None
        self.password = None
        self.connected_devices = []
        self.binding = False
        self.listening = False
        self.close()
        write_to_event({'event_code': 'ESC', 'event_description': 'Server closed'})
        self.message = PeerShareServerMessage(status_code=200, status='success', message_code='M003', message=f'The server was shut down successfully.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening)

    def accept_connections(self):
        try:
            while True:
                conn, addr = self.accept()
                connection = ConnectedClient(ip=addr[0], port=addr[1], password=None, socket_conn=conn)
                self.connected_devices.append(connection)
                threading.Thread(target=self.handle_client_login, args=(connection,), daemon=True).start()
        except Exception as e:
            print(f"Error while accepting connections: {e}")
        finally:
            self.close()
            print("Server shut down")

    def handle_client_login(self, connection: ConnectedClient):
        try:
            received_password = connection.socket_conn.recv(1024).decode().strip()
            if not received_password.startswith("password:"):
                write_to_event({'event_code': 'EPWF', 'event_description': 'User enter wrong password format', 'ip': connection.ip, 'port': connection.port})
                connection.socket_conn.send("Invalid format. Use 'password:<your_password>'".encode())
                self.cleanup_connection(connection)
                return
            else:
                if received_password.split(':', 1)[1] == self.password:
                    write_to_event({'event_code': 'EUSL', 'event_description': 'User enter to server successfully', 'ip': connection.ip, 'port': connection.port})
                    connection.socket_conn.send("Welcome to the server! :)".encode())
                    threading.Thread(target=self.reply_message, args=(connection,), daemon=True).start()
                else:
                    write_to_event({'event_code': 'EUWP', 'event_description': 'User enter wrong password', 'ip': connection.ip, 'port': connection.port})
                    connection.socket_conn.send("Incorrect password.".encode())
                    self.cleanup_connection(connection)
        except Exception as e:
            self.cleanup_connection(connection)

    def reply_message(self, connection: ConnectedClient):
        try:
            while True:
                message = connection.socket_conn.recv(1024).decode().strip()
                if not message:
                    break
                if message.lower() == 'exit':
                    write_to_event({'event_code': 'EUE', 'event_descrtiption': 'User exit from server', 'ip': connection.ip, 'port': connection.port})
                    connection.socket_conn.send("Goodbye!".encode())
                    break

                elif message == 'files':
                    write_to_event({'event_code': 'EUAF', 'event_description': 'User request all files', 'ip': connection.ip, 'port': connection.port})
                    connection.socket_conn.send('\n'.join(show_files('./server/files')).encode())

                elif message.startswith('file:'):
                    file_name = message.split(':', 1)[1].strip()
                    file_name = f'./server/files/{file_name}'
                    try:
                        file_info_str = ''.join(file_info(file_name))
                        write_to_event({'event_code': 'EUF', 'event_description': 'User request file', 'ip': connection.ip, 'port': connection.port, 'file': file_name})
                        connection.socket_conn.send(file_info_str.encode())
                    except FileNotFoundError:
                        connection.socket_conn.send(f"File not found: {file_name}".encode())
                    except Exception as e:
                        connection.socket_conn.send(f"Error retrieving file info: {e}".encode())

                elif message.startswith('sendfile:'):
                    
                        file_name = message.split(':', 1)[1].strip()
                        file_name = f'./server/files/{file_name}'

                        file_size_bytes = os.path.getsize(file_name)
                        connection.socket_conn.send(f"{file_size_bytes}\n".encode())

                        with open(file_name, 'rb') as file:
                            with tqdm(total=file_size_bytes, unit='B', unit_scale=True, desc="Sending File") as progress_bar:
                                while chunk := file.read(4096):
                                    connection.socket_conn.send(chunk)
                                    connection.downloaded_size += len(chunk)
                                    progress_bar.update(len(chunk))
                        connection.socket_conn.send(b"[EOF]")

                        write_to_event({
                            'event_code': 'EUDF',
                            'event_description': 'User download file',
                            'ip': connection.ip,
                            'port': connection.port,
                            'file': file_name
                        })
                else:
                    connection.socket_conn.send(f"Echo: {message}".encode())

        except Exception as e:
            print(f"Error replying to client {connection.ip}:{connection.port}: {e}")

        finally:
            self.cleanup_connection(connection)

    def cleanup_connection(self, connection: ConnectedClient):
        if connection in self.connected_devices:
            self.connected_devices.remove(connection)
        connection.socket_conn.close()

    def server_status(self):
        self.message = PeerShareServerMessage(status_code=200, status='success', message_code='M004', message=f'Information about the server\'s status was successfully retrieved.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening)

    def show_connections(self):
        devices_info = []
        for connection in self.connected_devices:
            devices_info.append({
                'ip': connection.ip,
                'port': connection.port,
                'connected_time': connection.connected_time,
                'downloaded_size': connection.downloaded_size
                })
        self.show_shared_files()
        self.message = PeerShareServerMessage(status_code=200, status='success', message_code='M005', message=f'Information about the devices connected to the server has been transferred successfully.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening, devices=devices_info)

    def show_shared_files(self):
        files = show_files_for_server('./server/files/')
        self.message = PeerShareServerMessage(status_code=200, status='success', message_code='M006', message=f'The requested file information for the server was successfully transmitted.', wan_ip=self.wan_ip, ip=self.ip, port=self.port, server_binding=self.binding, server_listening=self.listening, files=files)