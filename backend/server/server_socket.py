import socket
import threading
from tqdm import tqdm
from ps_obj.functions import show_files, file_info, file_size

class ConnectedClient:
    def __init__(self, ip: str, port: int, password: str, socket_conn: socket.socket):
        self.ip = ip
        self.port = port
        self.password = password
        self.socket_conn = socket_conn

class Server(socket.socket):
    def __init__(self, ip: str, port: int, password: str, max_conn_count: int):
        super().__init__(socket.AF_INET, socket.SOCK_STREAM)
        self.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.ip = ip
        self.port = port
        self.password = password
        self.max_conn_count = max_conn_count
        self.connected_devices = []

    def start_bind(self):
        self.bind((self.ip, self.port))
        print(f"Server bound to {self.ip}:{self.port}")

    def start_listen(self):
        self.listen(self.max_conn_count)
        threading.Thread(target=self.accept_connections, daemon=True).start()
        print(f"Server is listening for up to {self.max_conn_count} connections...")

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
            print(f"{connection.ip}:{connection.port} connected!")
            received_password = connection.socket_conn.recv(1024).decode().strip()
            if not received_password.startswith("password:"):
                connection.socket_conn.send("Invalid format. Use 'password:<your_password>'".encode())
                self.cleanup_connection(connection)
                return

            if received_password == self.password:
                connection.socket_conn.send("Welcome to the server! :)".encode())
                threading.Thread(target=self.reply_message, args=(connection,), daemon=True).start()
            else:
                connection.socket_conn.send("Incorrect password.".encode())
                self.cleanup_connection(connection)
        except Exception as e:
            print(f"Error handling client {connection.ip}:{connection.port}: {e}")
            self.cleanup_connection(connection)

    def reply_message(self, connection: ConnectedClient):
        try:
            while True:
                message = connection.socket_conn.recv(1024).decode().strip()
                if not message:
                    break
                print(f"Received from {connection.ip}:{connection.port}: {message}")
                if message.lower() == 'exit':
                    connection.socket_conn.send("Goodbye!".encode())
                    break

                elif message == 'files':
                    connection.socket_conn.send('\n'.join(show_files('./server/files')).encode())

                elif message.startswith('file:'):
                    file_name = message.split(':', 1)[1].strip()
                    file_name = f'./server/files/{file_name}'
                    try:
                        file_info_str = ''.join(file_info(file_name))
                        connection.socket_conn.send(file_info_str.encode())
                    except FileNotFoundError:
                        connection.socket_conn.send(f"File not found: {file_name}".encode())
                    except Exception as e:
                        connection.socket_conn.send(f"Error retrieving file info: {e}".encode())

                elif message.startswith('sendfile:'):
                    file_name = message.split(':', 1)[1].strip()
                    file_name = f'./server/files/{file_name}'

                    file_size_bytes = file_size(file_name)
                    connection.socket_conn.send(f'{file_size_bytes}'.encode())
                    try:
                        with open(file_name, 'rb') as file:
                            with tqdm(total=file_size_bytes, unit='B', unit_scale=True, desc="Sending File") as progress_bar:
                                while chunk := file.read(4096):
                                    connection.socket_conn.send(chunk)
                                    progress_bar.update(len(chunk))
                        connection.socket_conn.send(b"[EOF]")
                    except FileNotFoundError:
                        connection.socket_conn.send(f"File not found: {file_name}".encode())
                    except Exception as e:
                        connection.socket_conn.send(f"Error sending file: {e}".encode())

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
        print(f"Connection from {connection.ip}:{connection.port} closed.")

    def run(self):
        self.start_bind()
        self.start_listen()
        self.accept_connections()
