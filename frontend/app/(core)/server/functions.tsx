import { NetworkInterfacesInterface, ServerStatusInterface } from "./interfaces";
import { StartServerInputInterface, StartServerInterface, StartServerExceptionInterface } from "./interfaces";
import { StartListenResponse, StartListenInterface, StartListenExceptionInterface } from "./interfaces";
import { StopServerResponse, StopServerInterface, StopServerExceptionInterface } from "./interfaces";
import { ConnectedDeviceResponse, ConnectedDevicesInterface, ConnectedDevicesExceptionInterface } from "./interfaces";

export async function getNetworkInterface(): Promise<NetworkInterfacesInterface> {
    const response = await fetch('http://localhost:8000/server/network-interfaces');

    if (!response.ok)
        throw new Error('Error get network interfaces')

    const data = await response.json();
    return data as NetworkInterfacesInterface
}

export async function getServerStatus(): Promise<ServerStatusInterface> {
    const response = await fetch('http://localhost:8000/server/server-status');

    const data = await response.json();
    return data as ServerStatusInterface
}

export async function startServer({ nic, port, password }: StartServerInputInterface): Promise<StartServerInterface | StartServerExceptionInterface> {
    const response = await fetch('http://localhost:8000/server/start-server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ interface: nic, port, password }),
    });

    const data = await response.json();
    return data;
}

export async function startListen(): Promise<StartListenInterface | StartListenExceptionInterface> {
    const response = await fetch('http://localhost:8000/server/start-listening');
    const data = await response.json();
    return data as StartListenResponse
}

export async function stopServer(): Promise<StopServerInterface | StopServerExceptionInterface> {
    const response = await fetch('http://localhost:8000/server/stop-server');
    const data = await response.json();
    return data as StopServerResponse
}

export async function connectedDevicesF(): Promise<ConnectedDevicesInterface | ConnectedDevicesExceptionInterface> {
    const ip = localStorage.getItem('ip');
    const port = Number(localStorage.getItem('port'));
    const password = localStorage.getItem('password');
    const response = await fetch('http://localhost:8000/server/connected-devices', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ip, port, password }),
    });

    const data = await response.json();
    return data as ConnectedDeviceResponse;
}