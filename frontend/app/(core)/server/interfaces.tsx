export interface MessageInfoInterface {
    message_code: string
    message: string
}

export interface ServiceInfoInterface {
    public_ip: string | null
    ip: string | null
    port: number | null
    server_status: string
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