import socket
import threading
from os import listdir, getcwd

from server.functions import get_server_wan_ip, get_network_interfaces, get_network_interface, is_conn_exists, is_server, define_file_size, define_file_type, check_password, writeToEvent, countEventsByDayWithinWeek
from models.psMessage import PeerShareMessage, PeerShareException

class Server:
    def __init__(self):
        self.password = None

        self.public_ip = get_server_wan_ip()
        self.network_interfaces = get_network_interfaces()
        self.selected_network_interface = None

        self.port = None
        
        self.server_status = 'closed'
        self.binding = False
        self.listening = False
        
        self.connected_devices_addr = list()
        self.connected_devices = list()

    def send_public_ip(self):
        if not self.selected_network_interface:
            return PeerShareMessage(status_code=200, status='successful', message_code='M003', message='The server\'s public IP has been obtained. The user is expected to define the network interface card.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
        return PeerShareMessage(status_code=200, status='successful', message_code='M004', message='The server\'s public IP has been obtained.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
    
    def send_network_interfaces(self):
        if not self.selected_network_interface:
            return PeerShareMessage(status_code=200, status='successful', message_code='M001', message='The network interface cards defined on the system have been successfully identified. The user is expected to select one of them.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status, network_interfaces=self.network_interfaces)
        return PeerShareMessage(status_code=200, status='successful',message_code='M002', message='The network interface cards defined on the system have been successfully identified.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status, network_interfaces=self.network_interfaces)
    
    def check_server_status(self):
        if self.binding:
            return PeerShareMessage(status_code=200, status='successful', message_code='M000', message='Server information has been successfully delivered.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
        else:
            return PeerShareMessage(status_code=200, status='successful', message_code='M000', message='Server information has been successfully delivered.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
    
    def create_server_socket(self):
        self.server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 10)

    def start_server(self, interface, port, password):
            if not self.binding:
                if password:
                    self.password = password
                
                self.selected_network_interface = get_network_interface(inter_name=interface)
                if not self.selected_network_interface:
                    writeToEvent(event_id='E000', event_type='startServer', event_status=500, event_info={"selectedInterface": None, "ip":None, "port":self.port, "server_status":self.server_status})
                    return PeerShareException(status_code=500, status='failed', err_code='E000', err_desc='The specified network interface card could not be detected on the system.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
                if 0 > port or port > 65535:
                    writeToEvent(event_id='E002', event_type='startServer', event_status=400, event_info={"selectedInterface": None, "ip":None, "port":self.port, "server_status":self.server_status})
                    return PeerShareException(status_code=400, status='failed', err_code='E002', err_desc='Please enter a valid port number (1-65535).', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
                try:
                    self.create_server_socket()
                    self.port = port
                    self.server_socket.bind((self.selected_network_interface['ipv4'], self.port))
                    self.connected_devices_addr.append({'ip': self.selected_network_interface['ipv4'], 'port': self.port})
                
                    self.binding = True
                    self.server_status = 'binding'
                    
                    writeToEvent(event_id='M007', event_type='startServer', event_status=200, event_info={"selectedInterface": self.selected_network_interface['interface'], "ip":self.selected_network_interface['ipv4'], "port":self.port, "server_status":self.server_status})
                    return PeerShareMessage(status_code=200, status='successful', message_code='M007', message='The server\'s binding mode has been successfully enabled.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
                except OSError:
                    self.stop_server()
                    writeToEvent(event_id='E003', event_type='startServer', event_status=409, event_info={"selectedInterface": None, "ip":None, "port":self.port, "server_status":self.server_status})
                    return PeerShareException(status_code=409, status='failed', err_code='E003', err_desc='The entered port number is already in use by the server. Please enter a different port number.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
            else:
                writeToEvent(event_id='E001', event_type='startServer', event_status=409, event_info={"selectedInterface": self.selected_network_interface['interface'], "ip":self.selected_network_interface['ipv4'], "port":self.port, "server_status":self.server_status})
                return PeerShareException(status_code=409, status='failed', err_code='E001', err_desc='The server is already running in binding mode.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
       
    def stop_server(self):
        if self.binding:
            self.server_socket.close()
            del self.server_socket

            self.selected_network_interface = None
            self.port = None
            self.server_status = 'closed'
            self.password = None

            self.binding = False
            self.listening = False

            self.connected_devices_addr = list()

            writeToEvent(event_id='M008', event_type='stopServer', event_status=200, event_info={"selectedInterface": None, "ip":None, "port":self.port, "server_status":self.server_status})
            return PeerShareMessage(status_code=200, status='successful', message_code='M008', message='The server has been successfully shut down.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
        else:
            writeToEvent(event_id='E004', event_type='stopServer', event_status=503, event_info={"selectedInterface": None, "ip":None, "port":self.port, "server_status":self.server_status})
            return PeerShareException(status_code=503, status='failed', err_code='E004', err_desc='The server is already off.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
    
    def start_listen(self):
        if self.binding:
            if not self.listening:
                self.server_socket.listen()
                self.listening = True
                self.server_status = 'listening'

                server_accept_thread = threading.Thread(target=self.accept_connections)
                server_accept_thread.start()

                writeToEvent(event_id='M009', event_type='startListen', event_status=200, event_info={"selectedInterface": self.selected_network_interface['interface'], "ip":self.selected_network_interface['ipv4'], "port":self.port, "server_status":self.server_status})
                return PeerShareMessage(status_code=200, status='successful', message_code='M009', message='The server has been successfully set to listening mode.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
            else:
                writeToEvent(event_id='E006', event_type='startListen', event_status=409, event_info={"selectedInterface": self.selected_network_interface['interface'], "ip":self.selected_network_interface['ipv4'], "port":self.port, "server_status":self.server_status})
                return PeerShareException(status_code=409, status='failed', err_code='E006', err_desc='The server is already in listening mode.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
        else:
            writeToEvent(event_id='E005', event_type='startListen', event_status=503, event_info={"selectedInterface": None, "ip":None, "port":self.port, "server_status":self.server_status})
            return PeerShareException(status_code=503, status='failed', err_code='E005', err_desc='To enable the server\'s listening mode, you must first enable the binding mode.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)

    def accept_connections(self):
        conn, addr = self.server_socket.accept()
        self.connected_devices_addr.append({'ip': addr[0], 'port': addr[1]})
        self.connected_devices.append({'socket_conn': conn, 'socket_addr': addr})
        writeToEvent(event_id='-', event_type='acceptConnection', event_status=200, event_info={"selectedInterface": self.selected_network_interface['interface'], "ip":self.selected_network_interface['ipv4'], "port":self.port, "server_status":self.server_status, "cip": addr[0], "cport": addr[1]})
        self.start_listen()

    def get_connected_devices(self, ip, port, password):
        if self.binding:
            if self.listening:
                if not check_password(server_password=self.password, client_password=password):
                    return PeerShareException(status_code=401, status='failed', err_code='E014', err_desc='Incorrect or missing password.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
                
                curr_connection = is_server((self.selected_network_interface['ipv4'], self.port), ip=ip, port=port)
                if curr_connection:
                    return PeerShareMessage(status_code=200, status='successful', message_code='M010', message='Devices connected to the server have been successfully identified.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status, connected_devices_addr=self.connected_devices_addr)
                else:
                    return PeerShareException(status_code=403, status='failed', err_code='E009', err_desc='Only the server can view the devices connected to it. (Logically, this seems to be the case...)', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
            else:
                return PeerShareException(status_code=503, status='failed', err_code='E008', err_desc='To view the devices connected to the server, the device\'s listen mode must first be active.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
        else:
            return PeerShareException(status_code=503, status='failed', err_code='E007', err_desc='To view the devices connected to the server, the device\'s bind mode must first be active.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
    
    def shared_files(self, ip, port, password):
            if self.binding:
                if self.listening:
                    if not check_password(server_password=self.password, client_password=password):
                        return PeerShareException(status_code=401, status='failed', err_code='E013', err_desc='Incorrect or missing password.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
                    curr_connection = is_conn_exists(self.connected_devices_addr, ip=ip, port=port)
                    if curr_connection:
                        path = getcwd() + '/server/files/'
                        files = listdir(path=path)
                        files_total = list()
                        for file in files:
                            file_type = define_file_type(path=path, file=file)
                            file_size = define_file_size(path=path, file=file)
                            files_total.append({'fileName': file, 'fileType': file_type, 'fileSize': file_size})
                        return PeerShareMessage(status_code=200, status='successful', message_code='M011', message='Shared files have been successfully transmitted in the system.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status, file_list=files_total)
                    else:
                        return PeerShareException(status_code=403, status='failed', err_code='E010', err_desc='In order to view shared files, you must first be connected to the server.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
                else:
                    return PeerShareException(status_code=503, status='failed', err_code='E011', err_desc='To view the devices connected to the server, the device\'s listen mode must first be active.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status)
            else:
                return PeerShareException(status_code=503, status='failed', err_code='E012', err_desc='To view the devices connected to the server, the device\'s bind mode must first be active.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status)
    
    def connected_client_stat_by_date(self):
        if self.binding:
            if self.listening:
                return PeerShareMessage(status_code=200, status='successful', message_code='M012', message='The number of connected devices by date was successfully transmitted.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status, conn_inf=countEventsByDayWithinWeek())
            return PeerShareMessage(status_code=200, status='successful', message_code='M012', message='The number of connected devices by date was successfully transmitted.', public_ip=self.public_ip, ip=self.selected_network_interface['ipv4'], port=self.port, server_status=self.server_status, conn_inf=countEventsByDayWithinWeek())
        return PeerShareMessage(status_code=200, status='successful', message_code='M012', message='The number of connected devices by date was successfully transmitted.', public_ip=self.public_ip, ip=None, port=self.port, server_status=self.server_status, conn_inf=countEventsByDayWithinWeek())
    
    def check_device_still_connected(self):
        # print(self.connected_devices)
        # print(self.connected_devices_addr)
        # while True:
        #     for conn in self.connected_devices:
        #         print(conn['socket_conn'])
        #         conn['socket_conn'].settimeout(2)
        #         message = conn['socket_conn'].recv(1024)
        #         if not message:
        #             print(conn, 'Bağlantıyı kesmiş olaiblir')
        pass