interface messageInfoProps {
    message_code: string
    message: string
}

interface serverInfoProps {
    wan_ip: string
    ip: string | null
    port: number | null
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
}

export interface connectServerInputProps {
    ip: string
    port: number
    password: string
}

interface connectServerProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}

interface connectServerExceptionProps {
    status_code: number
    status: string
    err_info: errorInfoProps
    server_info: serverInfoProps
}

export type connectServerResponse = connectServerProps | connectServerExceptionProps

interface files {
    file_name: string
    file_type: string
    file_size: string
}

interface serverFilesProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
    files: files[]
}

interface serverFilesExceptionProps {
    status_code: number
    status: string
    err_info: errorInfoProps
    server_info: serverInfoProps
}

export type serverFilesResponse = serverFilesProps | serverFilesExceptionProps

export interface downloadFileInputProps {
    file_name: string
}

export interface downloadFileProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}

interface exitServerProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}

interface exitServerExceptionProps {
    status_code: number
    status: string
    err_info: errorInfoProps
    server_info: serverInfoProps
}

export type exitServerResponse = exitServerProps | exitServerExceptionProps


export interface serverStatProps {
    status_code: number
    status: string
    message_info: messageInfoProps
    server_info: serverInfoProps
}