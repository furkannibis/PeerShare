import { createSocketProps } from "./interfaces";
import { connectServerInputProps, connectServerProps } from "./interfaces";
import { serverFilesProps } from "./interfaces";
import { downloadFileInputProps, downloadFileProps } from "./interfaces";
import { exitServerProps } from "./interfaces";
import { serverStatProps } from "./interfaces";

export async function createClientSocket(): Promise<createSocketProps> {
    const response = await fetch('http://localhost:8000/client/create-socket');
    const data = await response.json();
    return data as createSocketProps;
}

export async function connectServer({ ip, port, password }: connectServerInputProps): Promise<connectServerProps> {
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
    return data as connectServerProps;
}

export async function getServerFiles(): Promise<serverFilesProps> {
    const response = await fetch('http://localhost:8000/client/server-files');
    const data = await response.json();
    return data as serverFilesProps;
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

export async function exitServer(): Promise<exitServerProps> {
    const response = await fetch('http://localhost:8000/client/exit');
    const data = await response.json();
    return data as exitServerProps;
}

export async function serverStat(): Promise<serverStatProps> {
    const response = await fetch('http://localhost:8000/client/server-stat');
    const data = await response.json();
    return data as serverStatProps;
}