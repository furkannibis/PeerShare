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
    if (data.status === 'success')
        return data as StartLANServerInterface;
    else
        return data as StartLANServerExceptionInterface
}

export interface startLANServerListeningInterface {
    status: string
    service_info: LanServiceInfo
    message: string
    server_binding: boolean
    server_listening: boolean
}

export interface startLANServerListeningExceptionInterface {
    status: string
    err_info: LanServiceExceptionInfo
    service_info: LanServiceInfo
    server_binding: boolean
    server_listening: boolean
}


export async function startLANServerListening(): Promise<startLANServerListeningInterface | startLANServerListeningExceptionInterface> {
    const response = await fetch('http://127.0.0.1:8000/server/lan/start-listening')
    if (!response.ok) {
        throw new Error('Failed to fetch server status');
    }
    const data = await response.json()
    if (data.status === 'success')
        return data as startLANServerListeningInterface
    else
        return data as startLANServerListeningExceptionInterface
}

export interface stopLANServerInterface {
    status: string
    service_info: LanServiceInfo
    message: string
    server_binding: boolean
    server_listening: boolean
}

export interface stopLANServerExceptionInterface {
    status: string
    err_info: LanServiceExceptionInfo
    service_info: LanServiceInfo
    server_binding: boolean
    server_listening: boolean
}

export async function stopLANServer(): Promise<stopLANServerInterface | stopLANServerExceptionInterface> {
    const response = await fetch('http://127.0.0.1:8000/server/lan/stop-server')
    if (!response.ok) {
        throw new Error('Failed to fetch server status');
    }
    const data = await response.json()
    if (data.status === 'success')
        return data as stopLANServerInterface
    else
        return data as stopLANServerExceptionInterface
}

interface lanServerClientInfoInterface {
    ip: string
    port: number
}

export interface lanServerFilesInterface {
    fileName: string
    fileType: 'File' | 'Directory'
    fileSize: string
}

export interface lanServerSharedFilesInterface {
    status: string
    service_info: LanServiceInfo
    message: string
    server_binding: boolean
    server_listening: boolean
    client: lanServerClientInfoInterface
    files: lanServerFilesInterface[]
}

export interface lanServerSharedFilesExceptionInterface {
    status: string
    err_info: LanServiceExceptionInfo
    service_info: LanServiceInfo
    server_binding: boolean
    server_listening: boolean
}

export async function lanServerSharedFiles(ip: string, port: number): Promise<lanServerSharedFilesInterface | lanServerSharedFilesExceptionInterface> {
    const response = await fetch("http://127.0.0.1:8000/server/lan/shared-files", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip, port }),
    });
    if (!response.ok) {
        throw new Error('Failed to fetch server status');
    }
    const data = await response.json();
    if (data.status === 'success')
        return data as lanServerSharedFilesInterface;
    else
        return data as lanServerSharedFilesExceptionInterface
}

export interface lanServerConnectedDevicesContentsInterface {
    ip: string
    port: number
}

export interface lanServerConnectedDevicesInterface {
    status: string
    service_info: LanServiceInfo
    server_binding: boolean
    service_listening: boolean
    connected_devices: lanServerConnectedDevicesContentsInterface
}

export interface lanServerConnectedDevicesExceptionInterface {
    status: string
    err_info: LanServiceExceptionInfo
    service_info: LanServiceInfo
    server_binding: boolean
    server_listening: boolean
}

export async function lanServerConnectedDevices(ip: string, port: number): Promise<lanServerConnectedDevicesInterface | lanServerConnectedDevicesExceptionInterface> {
    const response = await fetch("http://127.0.0.1:8000/server/lan/connected-devices", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip, port }),
    });
    if (!response.ok) {
        throw new Error('Failed to fetch server status');
    }
    const data = await response.json();
    console.log(data)
    if (data.status === 'success')
        return data as lanServerConnectedDevicesInterface;
    else
        return data as lanServerConnectedDevicesExceptionInterface
}