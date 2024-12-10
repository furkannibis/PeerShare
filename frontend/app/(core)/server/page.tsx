'use client'

import React, { useState, useEffect } from 'react';

import { TableComp } from '@/components/table';

import { createServerSocket, startServerBind, serverStatus, startServerListen, weeklyStat, dailyStat, connectedDevices, filesInformation } from './functions';
import { statusProps, weeklyReportProps, dailyReportProps, connectedDevicesProps, filesInformationProps } from './interfaces';

import { BarChart } from '@/components/graph/bar';
import { LineChart } from '@/components/graph/line';

export default function ServerPage() {
  const refreshTime = 3000;

  const [ipInput, setIpInput] = useState<string>('');
  const [portInput, setPortInput] = useState<number>(0);
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [maxConnCount, setMaxConnCount] = useState<number>(0)

  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [serverStat, setServerStat] = useState<statusProps | null>(null);
  const [weeklyStatistic, setWeeklyStatistic] = useState<weeklyReportProps | null>(null);
  const [dailyStatistic, setDailyStatistic] = useState<dailyReportProps | null>(null);
  const [devices, setConnectedDevices] = useState<connectedDevicesProps | null>(null);
  const [files, setFiles] = useState<filesInformationProps | null>(null);

  // Create Socket
  useEffect(() => {
    const fetchServerSocket = async () => {
      const response = await createServerSocket();
      setPopupMessage(`Message Code: ${response.message_info.message_code}.\nMessage: ${response.message_info.message}`);
    };
    fetchServerSocket();
  }, []);

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

  const handleServerStatus = async () => {
    const response = await serverStatus();
    if ('message_info' in response) {
      setServerStat(response);
      setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
      setIsError(false);
    }
  }

  // Start Bind Mode
  const handleStartBind = async () => {
    const response = await startServerBind({ ip: ipInput, port: portInput, password: passwordInput, max_conn_count: maxConnCount });
    if ('err_info' in response) {
      setPopupMessage(`Error Code: ${response.err_info.error_code}\nError Description: ${response.err_info.error_desc}`);
      setIsError(true);
    } else if ('message_info' in response) {
      setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
      setIsError(false);
    }
  }

  // Start Listen
  const handleStartListen = async () => {
    const response = await startServerListen();
    if ('err_info' in response) {
      setPopupMessage(`Error Code: ${response.err_info.error_code}\nError Description: ${response.err_info.error_desc}`);
      setIsError(true);
    } else if ('message_info' in response) {
      setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
      setIsError(false);
    }
  }

  // Weekly Statistics
  const handleWeeklyStat = async () => {
    const response = await weeklyStat();
    setPopupMessage(`Weekly statistics updated successfully.`);
    setIsError(false);
    setWeeklyStatistic(response);
  }

  // Daily Statistics
  const handleDailyStat = async () => {
    const response = await dailyStat();
    setPopupMessage(`Weekly statistics updated successfully.`);
    setIsError(false);
    setDailyStatistic(response);
  }

  // Connected Devices
  const handleConnectedDevives = async () => {
    const response = await connectedDevices();
    setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
    setIsError(false);
    setConnectedDevices(response);
  }

  // Files
  const handleFiles = async () => {
    const response = await filesInformation();
    setPopupMessage(`Message Code: ${response.message_info.message_code}\nMessage: ${response.message_info.message}`);
    setIsError(false);
    setFiles(response)
  }

  return (
    <div className='w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10 [&>*]:border [&>*]:border-zinc-300'>
      {/* Server Status */}
      <div className="flex flex-col items-center p-5 gap-5">
        <h2>Server Status</h2>
        <TableComp
          tableHeader={['WAN IP', 'LAN IP', 'Port', 'Bind', 'Listen']}
          tableBody={serverStat ? [
            [
              serverStat.server_info.wan_ip,
              serverStat.server_info.ip || 'N/A',
              serverStat.server_info.port || 'N/A',
              serverStat.server_status.server_binding ? 'Yes' : 'No',
              serverStat.server_status.server_listening ? 'Yes' : 'No',
            ]
          ] : []}
        />
        <button
          className=' w-1/2 mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          onClick={handleServerStatus}
        >
          Refresh
        </button>
      </div>

      <div className='flex flex-col p-5 gap-5'>
        <h2 className='text-center'>Server Settings</h2>
        <div className='flex flex-row justify-between gap-5'>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type="text"
            placeholder='IP'
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
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type="number"
            placeholder='Max Connection Count'
            onChange={(e) => setMaxConnCount(Number(e.target.value))}
          />
        </div>
        <div className='flex flex-row justify-between gap-10'>
          <button
            className=' w-1/2 mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            onClick={handleStartBind}
          >
            Start Binding

          </button>
          <button
            className=' w-1/2 mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            onClick={handleStartListen}
          >
            Start Listening
          </button>
          <button className=' w-1/2 mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Stop Server</button>
        </div>
      </div>

      <div className='flex flex-col p-5 items-center gap-5'>
        <h2>Connected Devices</h2>
        <TableComp
          tableHeader={['IP', 'Port', 'Connection Time', 'Downloaded Size']}
          tableBody={
            devices?.devices.map((device) => [
              device.ip,
              device.port,
              device.connected_time,
              device.downloaded_size,
            ]) || []
          }
        />
        <button
          className=' w-1/2 mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          onClick={handleConnectedDevives}
        >
          Refresh
        </button>
      </div>

      <div className='flex flex-col p-5 items-center gap-5'>
        <h2>Shared Files</h2>
        <TableComp
          tableHeader={['File Name', 'File Size', 'File Type', 'Number of Downloads']}
          tableBody={
            files?.files.map(file => [
              file.file_name,
              file.file_size,
              file.file_type,
              file.downloaded_count,
            ]) || []
          }
        />
        <button
          className='w-1/2 mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          onClick={handleFiles}
        >
          Refresh
        </button>
      </div>

      <div className='flex flex-col p-5 gap-5'>
        <BarChart title={'Server\'s Weekly Stats'} conn_inf={weeklyStatistic || {}} />
        <button
          className='mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          onClick={handleWeeklyStat}
        >
          Refresh
        </button>
      </div>

      <div className='flex flex-col p-5 gap-5'>
        <LineChart title={'Statistics of the number of connections per hour to the server.'} conn_inf={dailyStatistic || {}} />
        <button
          className='mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          onClick={handleDailyStat}
        >
          Refresh
        </button>
      </div>

      {popupMessage && (
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

    </div>
  );
}