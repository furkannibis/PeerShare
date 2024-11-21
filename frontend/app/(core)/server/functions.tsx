interface LanServiceInfo {
    ip: string
    port: number
    server_status: string
}

interface LanServiceExceptionInfo {
    error_code: string
    error_desc: string
}

export interface LanServerStatusInterface {
    status: string
    service_info: LanServiceInfo
    server_binding: boolean
    server_listening: boolean
}

export async function lanServerStatus(): Promise<LanServerStatusInterface> {
    const response = await fetch('http://127.0.0.1:8000/server/lan/server-status');
    if (!response.ok) {
        throw new Error('Failed to fetch server status');
    }
    const data = await response.json();
    console.log(data)
    return data;
}

export interface StartLANServerInterface {
    status: string
    service_info: LanServiceInfo
    message: string
    server_binding: boolean
    server_listening: boolean
}

export interface StartLANServerExceptionInterface {
    status: string
    err_info: LanServiceExceptionInfo
    service_info: LanServiceInfo
    server_binding: boolean
    server_listening: boolean
}

export async function startLANServer(port: number): Promise<StartLANServerInterface | StartLANServerExceptionInterface> {
    const response = await fetch("http://127.0.0.1:8000/server/lan/start-server", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ port }),
    });
    if (!response.ok) {
        throw new Error('Failed to fetch server status');
    }
    const data = await response.json();
    if(data.status === 'success')
        return data as StartLANServerInterface;
    else
        return data as StartLANServerExceptionInterface
}