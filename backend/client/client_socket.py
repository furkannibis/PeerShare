import socket
import os
from tqdm import tqdm

from ps_obj.psMessage import PeerShareClientMessage, PeerShareClientException

class Client(socket.socket):
    def __init__(self):
        super().__init__(socket.AF_INET, socket.SOCK_STREAM)
        self.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 10)

        self.ip = None
        self.port = None
        self.connected = False
        self.message = PeerShareClientMessage(status_code=200, status='success', message_code='M000', message='Successfully created client socket.', ip=self.ip, port=self.port)

    def connect_server(self, server_ip: str, server_port: int, password: str):

        if self.connected:
            self.message = PeerShareClientException(status_code=404, status='failed', err_code='E000', err_desc='Before connecting to a new server, you need to close your connection to the server you are already connected to.', ip=self.ip, port=self.port)
        else:
            self.ip = server_ip
            self.port = server_port
            self.password = password
            self.connect((self.ip, self.port))
            self.send(f'password:{self.password}'.encode())
            self.recv(1024).decode()
            self.connected = True
            self.message = PeerShareClientMessage(status_code=200, status='success', message_code='M001', message='Successfully connected to the server.', ip=self.ip, port=self.port)

    def exit_from_server(self):
        if self.connected:
            self.send('exit'.encode())
            self.receive_message()
            self.close()
            self.connected = False
            self.message = PeerShareClientMessage(status_code=200, status='success', message_code='M005', message='The connection to the server was successfully terminated.', ip=self.ip, port=self.port)
        else:
            self.message = PeerShareClientException(status_code=404, status='failed', err_code='E004', err_desc='You are not already connected to a server.', ip=self.ip, port=self.port)
    def send_message(self, message: str):
        self.send(message.encode())

    def receive_message(self):
        return self.recv(1024).decode()

    def get_file_info(self, file_name):
        if self.connected:
            self.send_message(message=f'file:{file_name}')
            message = self.receive_message()
            if message == 'No file':
                self.message = PeerShareClientException(status_code=404, status='failed', err_code='E002', err_desc=f'The file named {file_name} is not found on the server. Please make sure you are requesting the correct file.', ip=self.ip, port=self.port)
            else:
                print(message)
                message = message.split(' - ')
                self.message = PeerShareClientMessage(status_code=200, status='success', message_code='M002', message=f'The information for the file named {file_name} was successfully retrieved from the server.', ip=self.ip, port=self.port, file_info={'file_name': message[0], 'file_size': message[1], 'file_type': message[2]})
        else:
            self.message = PeerShareClientException(status_code=404, status='failed', err_code='E001', err_desc='There is no connection to any server.', ip=self.ip, port=self.port)

    def get_files_info(self):
        if self.connected:
            self.send_message(message='files')
            message = self.receive_message()
            self.message = PeerShareClientMessage(status_code=200, status='success', message_code='M003', message='The list of files served by the server was successfully obtained.', ip=self.ip, port=self.port, files=message.split('\n'))
        else:
            self.message = PeerShareClientException(status_code=404, status='failed', err_code='E003', err_desc='To get file information, you must first connect to a server.', ip=self.ip, port=self.port)

    def download_file(self, file_name: str, save_path: str):
        try:
            if not self.connected:
                raise Exception(f"Client not connected. Cannot download {file_name}.")

            self.send_message(f"sendfile:{file_name}")    
            file_size_bytes = int(self.receive_message().strip())

            with open(os.path.join(save_path, file_name), 'wb') as file:
                with tqdm(total=file_size_bytes, unit='B', unit_scale=True, desc=f"Downloading {file_name}") as progress_bar:
                    buffer = b""
                    while True:
                        data = self.recv(4096)
                        buffer += data
                        
                
                        if b"[EOF]" in buffer:
                            eof_index = buffer.index(b"[EOF]")
                            file.write(buffer[:eof_index])
                            progress_bar.update(eof_index)
                            break
                        
                        file.write(buffer)
                        progress_bar.update(len(buffer))
                        buffer = b""

            self.message = PeerShareClientMessage(
                status_code=200,
                status="success",
                message_code="M004",
                message=f"The file named {file_name} was successfully retrieved from the server.",
                ip=self.ip,
                port=self.port
            )

        except Exception as e:
            print(f"Error downloading file: {e}")