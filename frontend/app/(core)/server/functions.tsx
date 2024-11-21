interface LanServiceInfo {
    ip: string
    port: number
    server_status: string
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
