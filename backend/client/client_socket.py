import socket
import threading
from tqdm import tqdm


class Client(socket.socket):
    def __init__(self, server_ip: str, server_port: int, password: str):
        super().__init__(socket.AF_INET, socket.SOCK_STREAM)
        self.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 10)

        self.ip = server_ip
        self.port = server_port
        self.password = password

    def connect_server(self):
        self.connect((self.ip, self.port))
        print(f"Connected to server at {self.ip}:{self.port}")
        self.send(f'password:{self.password}'.encode())
        self.recv(1024).decode()

    def send_message(self, message: str):
        self.send(message.encode())

    def receive_message(self):
        return self.recv(1024).decode()

    def exit_from_server(self):
        self.send('exit'.encode())
        print(self.receive_message())
        self.close()

    def get_files_info(self):
        self.send_message(message='files')
        return self.receive_message()

    def get_file_info(self, file_name):
        self.send_message(message=f'file:{file_name}')
        print(self.receive_message())

    def download_file(self, file_name: str, save_path: str):
        try:
            self.send_message(f'sendfile:{file_name}')
            file_size_bytes = int(self.receive_message())
    
            with open(save_path, 'wb') as file:
                with tqdm(total=file_size_bytes, unit='B', unit_scale=True, desc=f"Downloading {file_name}") as progress_bar:
                    while True:
                        data = self.recv(4096)
                        if data.endswith(b'[EOF]'):
                            file.write(data[:-5])
                            progress_bar.update(len(data) - 5)
                            break
                        file.write(data)
                        progress_bar.update(len(data))

            print(f"File '{file_name}' downloaded successfully to '{save_path}'")
        except Exception as e:
            print(f"Error downloading file: {e}")