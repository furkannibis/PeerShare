'use client';

import React, { useState, useEffect } from 'react';
import {
  getNetworkInterface,
  getServerStatus,
  startServer,
  startListen,
  stopServer,
  connectedDevicesF,
} from './functions';

import {
  NetworkInterfacesInterface,
  ServerStatusInterface,
  StartServerInputInterface,
  StartServerResponse,
  StartListenResponse,
  StopServerResponse,
  ConnectedDevicesInterface,
  ConnectedDeviceResponse,
  ConnectedDevicesAddrInterface

} from './interfaces';

import { TableComp } from '@/components/table';
import { DropDownComp } from '@/components/dropdown';

export default function ServerPage() {
  const [networkInterfaces, setNetworkInterfaces] = useState<NetworkInterfacesInterface | null>(null);
  const [serverStatus, setServerStatus] = useState<ServerStatusInterface | null>(null);
  const [connectedDevices, setConnectedDevices] = useState<ConnectedDevicesInterface | null>(null);

  const [selectedNIC, setSelectedNIC] = useState<string | null>(null);
  const [port, setPort] = useState<number | string>('');
  const [password, setPassword] = useState<string>('');
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [popupVisible, setPopupVisible] = useState(false);


  useEffect(() => {
    if (popupMessage) {
      setPopupVisible(true);
      const timer = setTimeout(() => {
        setPopupVisible(false);
        setTimeout(() => setPopupMessage(null), 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);


  useEffect(() => {
    const fetchNetworkCards = async () => {
      try {
        const response = await getNetworkInterface();
        if (response?.network_interfaces) {
          setNetworkInterfaces(response);
        } else {
          console.error('Invalid network interface structure:', response);
        }
      } catch (error) {
        console.error('Error fetching network interfaces:', error);
      }
    };
    fetchNetworkCards();
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchServerStatus();
      if (serverStatus?.service_info.server_status === 'listening')
        console.log(serverStatus)
      await handleConnectedDevices();
    };
    fetchInitialData();
  }, []);

  const fetchServerStatus = async () => {
    try {
      const response = await getServerStatus();
      setServerStatus(response);
    } catch (error) {
      console.error('Error fetching server status:', error);
    }
  };

  const handleStartServer = async () => {
    if (!selectedNIC || !port || !password) {
      setPopupMessage('Please fill in all fields.');
      setIsError(true);
      return;
    }

    const startServerInput: StartServerInputInterface = {
      nic: selectedNIC,
      port: Number(port),
      password,
    };

    try {
      const response: StartServerResponse = await startServer(startServerInput);
      if ('err_info' in response) {
        const { error_code, error_desc } = response.err_info;
        setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc}`);
        setIsError(true);
      } else if ('message_info' in response) {
        localStorage.setItem('ip', response.service_info.ip || '');
        localStorage.setItem('port', response.service_info.port?.toString() || '');
        localStorage.setItem('password', password);

        const { message_info } = response;
        setPopupMessage(`Message Code: ${message_info.message_code}\nMessage: ${message_info.message}`);
        setIsError(false);

        await fetchServerStatus();
      }
    } catch (error) {
      console.error('Error starting server:', error);
      setPopupMessage('An error occurred while starting the server.');
      setIsError(true);
    }
  };

  const handleListenServer = async () => {
    try {
      const response: StartListenResponse = await startListen();
      if ('message_info' in response) {
        const { message_info } = response;
        setPopupMessage(`Message Code: ${message_info.message_code}\nMessage: ${message_info.message}`);
        setIsError(false);
        await fetchServerStatus();
        await handleConnectedDevices();
      } else if ('err_info' in response) {
        const { error_code, error_desc } = response.err_info;
        setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc}`);
        setIsError(true);
      }
    } catch (error) {
      console.error('Error starting listen server:', error);
      setPopupMessage('An error occurred while starting listening.');
      setIsError(true);
    }
  };

  const handleStopServer = async () => {
    try {
      const response: StopServerResponse = await stopServer();
      if ('message_info' in response) {
        const { message_info } = response;
        setPopupMessage(`Message Code: ${message_info.message_code}\nMessage: ${message_info.message}`);
        setIsError(false);
        await fetchServerStatus();
      } else if ('err_info' in response) {
        const { error_code, error_desc } = response.err_info;
        setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc}`);
        setIsError(true);
      }
    } catch (error) {
      console.error('Error stopping server:', error);
      setPopupMessage('An error occurred while stopping the server.');
      setIsError(true);
    }
  };

  const handleConnectedDevices = async () => {
    try {
      console.log(serverStatus?.service_info.server_status)
      const response: ConnectedDeviceResponse = await connectedDevicesF();
      if ('connected_devices_addr' in response) {
        // ÇOK ÖNEMLİ BU ANYYİ TEMİZLEMEM LAZIM ####################################################################################################################################
        const devices: ConnectedDevicesAddrInterface[] | any = response.connected_devices_addr.map((device) => ({
          IP: device.ip,
          Port: device.port,
        }));

        setConnectedDevices({ ...response, connected_devices_addr: devices });
      } else if ('err_info' in response) {
        const { error_code, error_desc } = response.err_info;
        setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc}`);
        setIsError(true);
      }

    } catch (error) {
      console.error('Error fetching connected devices:', error);
      setPopupMessage('An error occurred while fetching connected devices.');
      setIsError(true);
    }
  };

  return (
    <div className="w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10">
      <div className="flex flex-col align-center justify-items-center border p-5 gap-5 text-center">
        <h2>Server's Network Interface Cards</h2>
        <TableComp tableHeader={['interface', 'ipv4', 'netmask', 'broadcast', 'gateway']} tableBody={networkInterfaces?.network_interfaces || []} />
      </div>

      <div className="flex flex-col align-center justify-items-center border p-5 gap-5 text-center">
        <h2>Server's Status</h2>
        <TableComp
          tableHeader={['Public IP', 'Local IP', 'Port', 'Server Status']}
          tableBody={[{
            'Public IP': serverStatus?.service_info.public_ip || '-',
            'Local IP': serverStatus?.service_info.ip || '-',
            'Port': serverStatus?.service_info.port || '-',
            'Server Status': serverStatus?.service_info.server_status || '-',
          }]}
        />
      </div>

      <div className="flex flex-col align-center items-center border p-5 gap-5 text-center">
        <h2>Set Server Status</h2>
        <div className='flex flex-row items-center gap-5'>
          <div className='flex flex-col gap-1 items-center'>
            <DropDownComp
              id='selectedNetworkCard'
              ddHeader="Select a network interface card"
              ddBody={networkInterfaces?.network_interfaces.map((nic) => nic.interface) || []}
              onSelect={(nic: string) => setSelectedNIC(nic)}
            />
            <input
              type="number"
              placeholder='Enter Port Number'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder='Enter Password'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleStartServer}
            >
              Start Binding
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleListenServer}>
              Start Listening
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={handleStopServer}
            >
              Stop Server
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col align-center justify-items-center border p-5 gap-5 text-center'>
        <h2>Connected Devices</h2>
        <TableComp tableHeader={['IP', 'Port']} tableBody={connectedDevices?.connected_devices_addr || []} />
      </div>

      <div className='lg:row-start-3 lg:col-span-2  w-full flex flex-col align-center justify-items-center border p-5 gap-5 text-center'>
        <h2>Shared Files</h2>
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
