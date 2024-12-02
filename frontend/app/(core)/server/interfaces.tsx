export interface MessageInfoInterface {
    message_code: string
    message: string
}

export interface ServiceInfoInterface {
    public_ip: string | null
    ip: string
    port: number | null
    server_status: string
}

export interface ErrorInfoInterface {
    error_code: string
    error_desc: string
}

export interface NICSInterface {
    interface: string
    ipv4: string
    netmask: string
    broadcast: string | null
    gateway: string | null
}

export interface NetworkInterfacesInterface {
    status_code: number
    status: string
    message_info: MessageInfoInterface
    service_info: ServiceInfoInterface
    network_interfaces: NICSInterface[]
}

export interface ServerStatusInterface {
    status_code: number
    status: string
    message_info: MessageInfoInterface
    service_info: ServiceInfoInterface
}

export interface StartServerInputInterface {
    nic: string | null
    port: number
    password: string | null
}

export interface StartServerInterface {
    status_code: 200
    status: string
    message_info: MessageInfoInterface
    service_info: ServiceInfoInterface
}

export interface StartServerExceptionInterface {
    status_code: number
    status: string
    err_info: ErrorInfoInterface
    service_info: ServiceInfoInterface
}

export type StartServerResponse = StartServerInterface | StartServerExceptionInterface;

export interface StartListenInterface {
    status_code: number
    status: string
    message_info: MessageInfoInterface
    service_info: ServiceInfoInterface
}

export interface StartListenExceptionInterface {
    status_code: number
    status: string
    err_info: ErrorInfoInterface
    service_info: ServiceInfoInterface
}

export type StartListenResponse = StartListenInterface | StartListenExceptionInterface

export interface StopServerInterface {
    status_code: number
    status: string
    message_info: MessageInfoInterface
    service_info: ServiceInfoInterface
}

export interface StopServerExceptionInterface {
    status_code: number
    status: string
    err_info: ErrorInfoInterface
    service_info: ServiceInfoInterface
}

export type StopServerResponse = StopServerInterface | StopServerExceptionInterface

export interface ConnectedDevicesAddrInterface {
    ip: string
    port: number
}

export interface ConnectedDevicesInterface {
    status_code: number
    status: string
    message_info: MessageInfoInterface
    service_info: ServiceInfoInterface
    connected_devices_addr: ConnectedDevicesAddrInterface[]
}

export interface ConnectedDevicesExceptionInterface {
    status_code: number
    status: string
    err_info: ErrorInfoInterface
    service_info: ServiceInfoInterface
}

export type ConnectedDeviceResponse = ConnectedDevicesInterface | ConnectedDevicesExceptionInterface

export interface fileListInterface {
    fileName: string
    fileType: string
    fileSize: string
}

export interface SharedFilesInterface {
    status_code: number
    status: string
    message_info: MessageInfoInterface
    service_info: ServiceInfoInterface
    file_list: fileListInterface[]
}

export interface SharedFilesExceptionInterface {
    status_code: number
    status: string
    err_info: ErrorInfoInterface
    service_info: ServiceInfoInterface
}

export type SharedFilesResponse = SharedFilesInterface | SharedFilesExceptionInterface

export interface ConnectedDeviceCountInfoInterface {
    conn_inf: { [date: string]: number }
}

export interface ConnectedDeviceCountInterface {
    status_code: number
    status: string
    message_info: MessageInfoInterface
    service_info: ServiceInfoInterface
    conn_inf: ConnectedDeviceCountInfoInterface
}