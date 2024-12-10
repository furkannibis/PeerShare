import { createSocketProps } from "./interfaces";
import { bindInputProps, bindResponseProps } from "./interfaces";
import { listenResponseProps } from "./interfaces";
import { stopResponseProps } from "./interfaces";
import { weeklyReportProps } from "./interfaces";
import { dailyReportProps } from "./interfaces";
import { statusProps } from "./interfaces";
import { connectedDevicesProps } from "./interfaces";
import { filesInformationProps } from "./interfaces";

export async function createServerSocket(): Promise<createSocketProps> {
    const response = await fetch('http://localhost:8000/server/create-socket');
    const data = await response.json();
    return data as createSocketProps;
}

export async function startServerBind({ ip, port, password, max_conn_count }: bindInputProps): Promise<bindResponseProps> {
    const response = await fetch('http://localhost:8000/server/start-bind', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ip,
            port,
            password,
            max_conn_count,
        }),
    });

    const data = await response.json();
    return data as bindResponseProps;
}

export async function startServerListen(): Promise<listenResponseProps> {
    const response = await fetch('http://localhost:8000/server/start-listen');
    const data = await response.json();
    return data as listenResponseProps;
}

export async function stopServer(): Promise<stopResponseProps> {
    const response = await fetch('http://localhost:8000/server/stop-server');
    const data = await response.json();
    return data as stopResponseProps;
}

export async function weeklyStat(): Promise<weeklyReportProps> {
    const response = await fetch('http://localhost:8000/server/server-weekly-stat');
    const data = await response.json()
    return data as weeklyReportProps;
}

export async function dailyStat(): Promise<dailyReportProps> {
    const response = await fetch('http://localhost:8000/server/server-daily-stat');
    const data = await response.json();
    return data as dailyReportProps;
}

export async function serverStatus(): Promise<statusProps> {
    const response = await fetch('http://127.0.0.1:8000/server/server-status');
    const data = await response.json();
    return data as statusProps;
}

export async function connectedDevices(): Promise<connectedDevicesProps> {
    const response = await fetch('http://127.0.0.1:8000/server/connected-devices');
    const data = await response.json();
    return data as connectedDevicesProps;
}

export async function filesInformation(): Promise<filesInformationProps> {
    const response = await fetch('http://127.0.0.1:8000/server/shared-files');
    const data = await response.json();
    return data as filesInformationProps;
}