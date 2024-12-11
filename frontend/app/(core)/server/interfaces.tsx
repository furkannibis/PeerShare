interface messageInfoProps {
    message_code: string
    message: string
}

interface serverInfoProps {
    ip: string | null
    port: number | null
    wan_ip: string
}

interface serverStatusProps {
    server_binding: boolean
    server_listening: boolean
}

interface errorInfoProps {
    error_code: string
    error_desc: string
}

export interface createSocketProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

export interface bindInputProps {
    ip: string
    port: number
    password: string
    max_conn_count: number
}

interface bindMessageProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

interface bindExceptionProps {
    status_code: number
    status: string
    err_info: errorInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

export type bindResponseProps = bindMessageProps | bindExceptionProps

interface listenMessageProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

interface listenExceptionProps {
    status_code: number
    status: string
    err_info: errorInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

export type listenResponseProps = listenMessageProps | listenExceptionProps

interface stopMessageProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

interface stopExceptionProps {
    status_code: number
    status: string
    err_info: errorInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

export type stopResponseProps = stopMessageProps | stopExceptionProps

export interface weeklyReportProps {
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
    weekly_stat: Record<string, number>
}

export interface dailyReportProps {
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
    hourly_stat: Record<string, number>
}

export interface statusProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

interface devicesProps {
    ip: string
    port: number
    connected_time: string
    downloaded_size: number
}

interface connectedDevicesProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
    devices: devicesProps[]
}

interface connectedDevicesExceptionProps {
    status_code: number
    status: string
    err_info: errorInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

export type connectedDevicesResponse = connectedDevicesProps | connectedDevicesExceptionProps

interface filesProps {
    file_name: string
    file_size: number
    file_type: string
    downloaded_count: number
}

interface filesInformationProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
    files: filesProps[]
}

interface filesInformationExceptionProps {
    status_code: number
    status: string
    err_info: errorInfoProps
    server_info: serverInfoProps
    server_status: serverStatusProps
}

export type filesInformationResponse = filesInformationProps | filesInformationExceptionProps