'use client'

import React, { useState, useEffect } from 'react';

import { TableComp } from '@/components/table';

import { createClientSocket } from './function';

import { connectServer } from './function';
import { connectServerProps } from './interfaces';

import { serverStat } from './function';

import { getServerFiles } from './function';
import { serverFilesProps } from './interfaces';

import { downloadFile } from './function';

export default function ClientPage() {
    const refreshTime = 3000;

    const [ipInput, setIpInput] = useState<string>('');
    const [portInput, setPortInput] = useState<number>(0);
    const [passwordInput, setPasswordInput] = useState<string>('')

    const [popupMessage, setPopupMessage] = useState<string | null>(null);
    const [popupVisible, setPopupVisible] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);

    const [serverStats, setServerStats] = useState<connectServerProps | null>(null);
    const [serverFiles, setServerFiles] = useState<serverFilesProps | null>(null);

    const [loadingFile, setLoadingFile] = useState<string | null>(null);

    // popup
    useEffect(() => {
        if (popupMessage) {
            setPopupVisible(true);
            const timer = setTimeout(() => {
                setPopupVisible(false);
                setTimeout(() => setPopupMessage(null), 500);
            }, refreshTime);
            return () => clearTimeout(timer);
        }
    }, [popupMessage]);

    // Create Client Socket
    useEffect(() => {
        const fetchClientSocket = async () => {
            const response = await createClientSocket();
            setPopupMessage(`Message Code: ${response.message_info.message_code}.\nMessage: ${response.message_info.message}`);
        };
        fetchClientSocket();
    }, []);

    // Connect Server
    const handleConnectServer = async () => {
        const response = await connectServer({ ip: ipInput, port: portInput, password: passwordInput });
        if ('message_info' in response) {
            setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
            setIsError(false);
        }
    }

    // Stats
    const handleClientStat = async () => {
        const response = await serverStat();
        if ('message_info' in response) {
            setServerStats(response)
            setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
            setIsError(false);
        }
    }

    // Shared files
    const handleSharedFiles = async () => {
        const response = await getServerFiles();
        setServerFiles(response);
        setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
        setIsError(false);

    }

    const LoadingPopup = ({ fileName }: { fileName: string }) => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-5 text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mx-auto mb-4"></div>
                <p className="text-lg font-medium mb-2">The {fileName} file is being downloaded.</p>
                <p className="text-sm text-gray-600">
                    Please do not close the browser during this process. You will be notified when the process is complete.
                </p>
            </div>
        </div>
    );

    // Download file
    const handleDownloadFile = async (file_name: string) => {
        setLoadingFile(file_name);
        const response = await downloadFile({ file_name });
        setLoadingFile(null);
        setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
        setIsError(false);
    }


    return (
        <div className='w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10 [&>*]:border [&>*]:border-zinc-300'>
            {/* Connection Area */}
            <div className='flex flex-col items-center p-5 gap-5'>
                <h2>Connect to server</h2>
                <div className='flex flex-row justify-between gap-5'>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="text"
                        placeholder='IP Address'
                        onChange={(e) => setIpInput(e.target.value)}
                    />
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="number"
                        placeholder='Port'
                        onChange={(e) => setPortInput(Number(e.target.value))}
                    />
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                </div>
                <div className='flex flex-row justify-between gap-10'>
                    <button
                        className='mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                        onClick={handleConnectServer}
                    >
                        Connect Server
                    </button>
                    <button
                        className='mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                        onClick={undefined}
                    >
                        Exit Server
                    </button>
                </div>
            </div>

            {/* Connection Stat */}
            <div className='flex flex-col items-center p-5 gap-5'>
                <h2>Connection Stats</h2>
                <TableComp
                    tableHeader={['LAN IP', 'Port']}
                    tableBody={serverStats ? [
                        [
                            serverStats?.server_info.ip || 'N/A',
                            serverStats?.server_info.port || 'N/A'
                        ]
                    ] : []}
                />
                <button
                    className='mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                    onClick={handleClientStat}
                >
                    Refresh
                </button>
            </div>

            {/* Server's Files */}
            <div className='flex flex-col items-center p-5 gap-5 col-span-full'>
                <h2>Server's Files</h2>
                <TableComp
                    tableHeader={['File Name', 'File Type', 'File Size', '']}
                    tableBody={
                        serverFiles?.files.map(file => [
                            file.file_name,
                            file.file_type,
                            file.file_size,
                            <button
                                key={file.file_name}
                                onClick={() => handleDownloadFile(file.file_name)}
                                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                            >
                                Download
                            </button>
                        ]) || []
                    }
                />

                <button
                    className='mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                    onClick={handleSharedFiles}
                >
                    Refresh
                </button>
            </div>

            {
                popupMessage && (
                    <div
                        className={`fixed top-4 right-4 z-50 
      ${isError ? 'bg-red-500' : 'bg-green-500'} 
      p-4 rounded shadow-lg flex items-start transition-opacity duration-500 ease-in-out 
      ${popupVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="text-white">
                            <pre className="whitespace-pre-wrap">{popupMessage}</pre>
                        </div>
                        <button
                            onClick={() => setPopupMessage(null)}
                            className="ml-2 text-white hover:text-gray-300"
                            aria-label="Close"
                        >
                            ✖️
                        </button>
                    </div>
                )}
            {loadingFile && <LoadingPopup fileName={loadingFile} />}
        </div>
    );
}