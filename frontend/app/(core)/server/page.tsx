'use client'

import React, { useState, useEffect } from 'react';
import { lanServerStatus, LanServerStatusInterface } from "./functions";
import { startLANServer, StartLANServerInterface, StartLANServerExceptionInterface } from './functions';
import { startLANServerListening, startLANServerListeningInterface, startLANServerListeningExceptionInterface } from './functions';
import { stopLANServer, stopLANServerInterface, stopLANServerExceptionInterface } from './functions';
import { Table } from '@/components/table/table';
import { FileTable, TableRowProps } from '@/components/table/fileTable';
import { lanServerSharedFiles, lanServerSharedFilesInterface, lanServerSharedFilesExceptionInterface } from './functions';

export default function ServerPage() {
  const [lanServerStat, setLanServerStat] = useState<LanServerStatusInterface | null>(null);
  const [port, setPort] = useState<number | string>('');
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [fileData, setFileData] = useState<TableRowProps[]>([]);

 
  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await lanServerStatus();
        setLanServerStat(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchServerStatus();
  }, []);

 
  const fetchFiles = async () => {
    if (lanServerStat?.service_info?.ip && lanServerStat?.service_info?.port) {
      const response = await lanServerSharedFiles(lanServerStat.service_info.ip, lanServerStat.service_info.port);
      console.log("Fetched Files Response:", response);

      if (lanServerStat.server_binding && lanServerStat.server_listening) {
        if (response.status === 'success') {
          console.log('Files fetched successfully');

         
          const successResponse = response as lanServerSharedFilesInterface;
          const transformedFiles: TableRowProps[] = successResponse.files.map(file => ({
            fileName: file.fileName,
            fileType: file.fileType as 'Directory' | 'File',
            fileSize: file.fileSize
          }));

          setFileData(transformedFiles);
        } else if (response.status === 'failed') {
          const failureResponse = response as lanServerSharedFilesExceptionInterface;
          setPopupMessage(`Error code: ${failureResponse.err_info.error_code} - ${failureResponse.err_info.error_desc}`);
          setIsPopupVisible(true);
        }
      }
    }
  };

  useEffect(() => {
    if (lanServerStat) {
      fetchFiles();
    }
  }, [lanServerStat]);

 
  const handleStartLANServer = async () => {
    if (typeof port === 'number' && port > 0) {
      const response = await startLANServer(port);
      if (response.status === "success") {
        const successResponse = response as StartLANServerInterface;
        setPopupMessage(successResponse.message);
        setIsPopupVisible(true);

        const updatedServerStat = await lanServerStatus();
        setLanServerStat(updatedServerStat);
      } else if (response.status === "failed") {
        const errorResponse = response as StartLANServerExceptionInterface;
        setPopupMessage(`Error code: ${errorResponse.err_info.error_code} - ${errorResponse.err_info.error_desc}`);
        setIsPopupVisible(true);
      }
    } else {
      setPopupMessage('Invalid port number');
      setIsPopupVisible(true);
    }
  };

 
  const handleStartLANServerListening = async () => {
    const response = await startLANServerListening();
    if (response.status === "success") {
      const successResponse = response as startLANServerListeningInterface;
      setPopupMessage(successResponse.message);
      setIsPopupVisible(true);

      const updatedServerStat = await lanServerStatus();
      setLanServerStat(updatedServerStat);
    } else if (response.status === "failed") {
      const errorResponse = response as startLANServerListeningExceptionInterface;
      setPopupMessage(`Error code: ${errorResponse.err_info.error_code} - ${errorResponse.err_info.error_desc}`);
      setIsPopupVisible(true);
    }
  };

 
  const handleStopLANServer = async () => {
    const response = await stopLANServer();
    if (response.status === "success") {
      const successResponse = response as stopLANServerInterface;
      setPopupMessage(successResponse.message);
      setIsPopupVisible(true);

      const updatedServerStat = await lanServerStatus();
      setLanServerStat(updatedServerStat);
    } else if (response.status === "failed") {
      const errorResponse = response as stopLANServerExceptionInterface;
      setPopupMessage(`Error code: ${errorResponse.err_info.error_code} - ${errorResponse.err_info.error_desc}`);
      setIsPopupVisible(true);
    }
  };

 
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10">

      {/* LAN Server Durumu Bölümü */}
      <div className="flex flex-col aling-center justify-items-center border p-5 gap-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">LAN Server Status</h2>
        <Table
          TableHeader={['Property Name', 'Property Value']}
          TableRows={[
            { name: 'IP', value: lanServerStat?.service_info.ip || 'Loading...' },
            { name: 'Port', value: lanServerStat?.service_info.port || 'Loading...' },
            { name: 'Server Status', value: lanServerStat?.service_info.server_status || 'Loading...' },
            { name: 'Server Binding', value: lanServerStat?.server_binding ? 'Yes' : 'No' },
            { name: 'Server Listening', value: lanServerStat?.server_listening ? 'Yes' : 'No' },
          ]}
        />
        <div className='w-full mx-auto flex flex-col items-center space-y-4'>
          <input
            type="number"
            value={port}
            onChange={(e) => setPort(Number(e.target.value))}
            className="border p-2 rounded-md w-1/2"
            placeholder="Enter Port"
          />
          <div className='flex flex-row items-center justify-items-center gap-5'>
            <button
              onClick={handleStartLANServer}
              className='border p-2 rounded-md bg-blue-500 text-white'
            >
              Start Binding
            </button>
            <button
              onClick={handleStartLANServerListening}
              className='border p-2 rounded-md bg-blue-500 text-white'>
              Start Listening
            </button>
            <button
              onClick={handleStopLANServer}
              className='border p-2 rounded-md bg-blue-500 text-white'>
              Stop Server
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col aling-center justify-items-center border p-5 gap-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">LAN Server Files</h2>
        <FileTable
          tableHeader={['File Name', 'File Type', 'File Size']}
          tableRows={fileData}
        />
      </div>

      {/* Popup (Hata mesajı) */}
      {isPopupVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 border rounded-md shadow-md">
          <p>{popupMessage}</p>
          <button onClick={closePopup} className="bg-blue-500 text-white p-2 rounded-md">Close</button>
        </div>
      )}
    </div>
  );
}
