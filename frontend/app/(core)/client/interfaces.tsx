interface messageInfoProps {
    message_code: string
    message: string
}

interface serverInfoProps {
    wan_ip: string
    ip: string | null
    port: number | null
}

export interface createSocketProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}

export interface connectServerInputProps {
    ip: string
    port: number
    password: string
}

export interface connectServerProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}

interface files {
    file_name: string
    file_type: string
    file_size: string
}

export interface serverFilesProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    files: files[]
}

export interface downloadFileInputProps {
    file_name: string
}

export interface downloadFileProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}

export interface exitServerProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}

export interface serverStatProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}