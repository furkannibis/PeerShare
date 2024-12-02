'use client';

import React, { useState, useEffect } from 'react';

import { getNetworkInterface, getServerStatus, startServer, startListen, stopServer, connectedDevicesF, sharedFiles, connectedDeviceCountByDate } from './functions';
import { NetworkInterfacesInterface, ServerStatusInterface, ConnectedDevicesAddrInterface, ConnectedDevicesInterface, SharedFilesInterface, ConnectedDeviceCountInfoInterface, ConnectedDeviceCountInterface } from './interfaces';

import { TableComp } from '@/components/table';
import { DropDownComp } from '@/components/dropdown';
import { BarChart } from '@/components/graph/bar';
import { LineChart } from '@/components/graph/line';
import { Bar } from 'react-chartjs-2';

export default function ServerPage() {
  const refreshTime = 1000;

  // Popup area
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [selectedNIC, setSelectedNIC] = useState<string | null>(null);
  const [selectedPort, setSelectedPort] = useState<string | number>('');
  const [selectedPassword, setSelectedPassword] = useState<string | null>(null);

  const [networkInterfaces, setNetworkInterfaces] = useState<NetworkInterfacesInterface | null>(null);
  const [serverStatus, setServerStatus] = useState<ServerStatusInterface>();
  const [connectedDevices, setConnectedDevices] = useState<ConnectedDevicesInterface | null>(null);
  const [sharedFilesState, setSharedFiles] = useState<SharedFilesInterface | null>(null);
  const [connectionCount, setConnectionCount] = useState<ConnectedDeviceCountInfoInterface | null>(null);


  // Popup
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

  // Network Interfaces
  useEffect(() => {
    const fetchNetworkCards = async () => {
      const response = await getNetworkInterface();
      if (response.network_interfaces)
        setNetworkInterfaces(response);
    }
    fetchNetworkCards();
    const intervalID = setInterval(fetchNetworkCards, refreshTime);
    return () => clearInterval(intervalID);
  }, []);

  // Server Status
  useEffect(() => {
    const fetchServerStatus = async () => {
      const response = await getServerStatus();
      if (response.status_code === 200) {
        localStorage.setItem('ip', response.service_info.ip)
        setServerStatus(response);
      }
    }
    const intervalID = setInterval(fetchServerStatus, refreshTime);
    return () => clearInterval(intervalID);
  }, []);

  // Start Server
  const handleStartServer = async () => {
    if (!selectedNIC || !selectedPort) {
      setPopupMessage('Please select an network interface card and fill port field.');
      setIsError(true);
      return;
    }

    if (65535 < Number(selectedPort)) {
      setPopupMessage('Please select an valid port number.');
      setIsError(true);
      return;
    }

    const response = await startServer({ nic: selectedNIC, port: Number(selectedPort), password: selectedPassword });
    if ('err_info' in response) {
      const { error_code, error_desc } = response.err_info;
      setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc}`);
      setIsError(true);
    } else if ('message_info' in response) {
      localStorage.setItem('ip', serverStatus?.service_info.ip || '')
      localStorage.setItem('port', selectedPort.toString() || '');
      localStorage.setItem('password', selectedPassword || '');

      const { message_info } = response; sharedFiles
      setPopupMessage(`Message Code: ${message_info.message_code}\nMessage: ${message_info.message}`);
      setIsError(false);
    }
  };

  // Start Listen
  const handleStartListen = async () => {
    const response = await startListen();
    if ('message_info' in response) {
      const { message_info } = response;
      setPopupMessage(`Message Code: ${message_info.message_code}\nMessage: ${message_info.message}`);
      setIsError(false);
    } else if ('err_info' in response) {
      const { error_code, error_desc } = response.err_info;
      setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc}`);
      setIsError(true);
    }
  };

  // Stop Server
  const handleStopServer = async () => {
    const response = await stopServer();
    if ('message_info' in response) {
      const { message_info } = response;

      localStorage.setItem('ip', '');
      localStorage.setItem('port', '');
      localStorage.setItem('password', '');

      setPopupMessage(`Message Code: ${message_info.message_code}\nMessage: ${message_info.message}`);
      setIsError(false);
    } else if ('err_info' in response) {
      const { error_code, error_desc } = response.err_info;
      setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc}`);
      setIsError(true);
    }
  }

  // Set Connected Devices
  useEffect(() => {
    const fetchConnectedDevices = async () => {
      if (serverStatus?.service_info.server_status === 'listening') {
        const response = await connectedDevicesF();
        if ('connected_devices_addr' in response) {
          const devices: ConnectedDevicesAddrInterface[] = response.connected_devices_addr.map((device) => ({
            IP: device.ip,
            Port: device.port,
          }));

          setConnectedDevices(devices);
        } else if ('err_info' in response) {
          const { error_code, error_desc } = response.err_info;
          setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc} `);
          setIsError(true);
        }
      }
    };
    const intervalID = setInterval(fetchConnectedDevices, refreshTime);
    return () => clearInterval(intervalID);
  })

  // Shared Files
  useEffect(() => {
    const fetchSharedFiles = async () => {
      if (serverStatus?.service_info.server_status === 'listening') {
        const response = await sharedFiles();
        if ('file_list' in response) {
          setSharedFiles(response);
        } else if ('err_info' in response) {
          const { error_code, error_desc } = response.err_info;
          setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc} `);
          setIsError(true);
        }
      }
    };
    const intervalID = setInterval(fetchSharedFiles, refreshTime);
    return () => clearInterval(intervalID);
  })

  useEffect(() => {
    const fetchConnectionCount = async () => {
      if (serverStatus?.service_info.server_status === "listening") {
        const response: ConnectedDeviceCountInterface = await connectedDeviceCountByDate();
        if ("conn_inf" in response) {
          console.log(response); // Gelen veriyi kontrol etmek için
          setConnectionCount(response.conn_inf);
        } else if ("err_info" in response) {
          const { error_code, error_desc } = response.err_info;
          setPopupMessage(`Error Code: ${error_code}\nError Description: ${error_desc}`);
          setIsError(true);
        }
      }
    };

    const intervalID = setInterval(fetchConnectionCount, refreshTime);
    return () => clearInterval(intervalID);
  });

  return (
    <div className="w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10 [&>*]:border [&>*]:border-zinc-300">
      <div className="flex flex-col align-center justify-items-center border p-5 gap-5 text-center">
        <h2>Server's Network Interface Cards</h2>
        <TableComp tableHeader={['interface', 'ipv4', 'netmask', 'broadcast', 'gateway']} tableBody={networkInterfaces?.network_interfaces || []} />
      </div>

      <div className="flex flex-col align-center justify-items-center border p-5 gap-5 text-center">
        <h2>Server's Status</h2>
        <TableComp
          tableHeader={['Public IP', 'Local IP', 'Port', 'Server Status']}
          tableBody={[{
            'Public IP': serverStatus?.service_info.public_ip,
            'Local IP': serverStatus?.service_info.ip,
            'Port': serverStatus?.service_info.port,
            'Server Status': serverStatus?.service_info.server_status,
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
              value={selectedPort}
              onChange={(e) => setSelectedPort(Number(e.target.value))}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder='Enter Password'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSelectedPassword(e.target.value)}
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
              onClick={handleStartListen}
            >
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
        <TableComp
          tableHeader={['IP', 'Port']}
          tableBody={connectedDevices || []}
        />
      </div>

      <div className='lg:row-start-3 lg:col-span-2  w-full flex flex-col align-center justify-items-center border p-5 gap-5 text-center'>
        <h2>Shared Files</h2>
        <TableComp
          tableHeader={['File Name', 'File Type', 'File Size']}
          tableBody={sharedFilesState?.file_list.map((file) => ({
            "File Name": file.fileName,
            "File Type": file.fileType,
            "File Size": file.fileSize,
          })) || []}
        />
      </div>

      <div>
        <BarChart title="Number of all connections made in a day" conn_inf={connectionCount || {}} />
      </div>

      <div>
        <LineChart />
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
