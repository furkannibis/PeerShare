import { NetworkInterfacesInterface, ServerStatusInterface } from "./interfaces";

export async function getNetworkInterface(): Promise<NetworkInterfacesInterface> {
    const response = await fetch('http://localhost:8000/server/network-interfaces');

    if (!response.ok)
        throw new Error('Failed to fetch server\' interfaces');

    const data = await response.json();
    return data as NetworkInterfacesInterface
}

export async function getServerStatus(): Promise<ServerStatusInterface> {
    const response = await fetch('http://localhost:8000/server/server-status');

    if (!response.ok)
        throw new Error('Failed to fetch server\' interfaces');

    const data = await response.json();
    return data as ServerStatusInterface
}