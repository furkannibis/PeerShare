import { createSocketProps } from "./interfaces";
import { connectServerInputProps, connectServerResponse } from "./interfaces";
import { serverFilesResponse } from "./interfaces";
import { downloadFileInputProps, downloadFileProps } from "./interfaces";
import { exitServerResponse } from "./interfaces";
import { serverStatProps } from "./interfaces";

export async function createClientSocket(): Promise<createSocketProps> {
    const response = await fetch('http://localhost:8000/client/create-socket');
    const data = await response.json();
    return data as createSocketProps;
}

export async function connectServer({ ip, port, password }: connectServerInputProps): Promise<connectServerResponse> {
    const response = await fetch('http://localhost:8000/client/connect-server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ip,
            port,
            password
        }),
    });

    const data = await response.json();
    return data as connectServerResponse;
}

export async function getServerFiles(): Promise<serverFilesResponse> {
    const response = await fetch('http://localhost:8000/client/server-files');
    const data = await response.json();
    return data as serverFilesResponse;
}

export async function downloadFile({ file_name }: downloadFileInputProps): Promise<downloadFileProps> {
    const response = await fetch('http://localhost:8000/client/download-file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            file_name
        }),
    });

    const data = await response.json();
    return data as downloadFileProps;
}

export async function exitServer(): Promise<exitServerResponse> {
    const response = await fetch('http://localhost:8000/client/exit');
    const data = await response.json();
    return data as exitServerResponse;
}

export async function serverStat(): Promise<serverStatProps> {
    const response = await fetch('http://localhost:8000/client/server-stat');
    const data = await response.json();
    return data as serverStatProps;
}