'use client'

import React, { useState, useEffect } from 'react';

import { getNetworkInterface } from './functions';
import { NetworkInterfacesInterface } from './interfaces';

import { getServerStatus } from './functions';
import { ServerStatusInterface } from './interfaces';

import { TableComp } from '@/components/table';
import { CheckBoxComp } from '@/components/checkbox';

export default function ServerPage() {
  const [networkInterfaces, setNetworkInterfaces] = useState<NetworkInterfacesInterface | null>(null);
  const [serverStatus, setServerStatus] = useState<ServerStatusInterface | null>(null);

  useEffect(() => {
    const fetchNetworkCards = async () => {
      try {
        const response = await getNetworkInterface();
        setNetworkInterfaces(response);
      } catch (error) {
        console.log('error');
      }
    };
    fetchNetworkCards();
  }, []);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await getServerStatus();
        setServerStatus(response);
      } catch (error) {
        console.log('error');
      }
    };
    fetchServerStatus();
  }, []);


  return (
    <div className="w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10">
      <div className="flex flex-col aling-center justify-items-center border p-5 gap-5 text-center">
        <h2>Server's Network Interface Cards</h2>
        <TableComp tableHeader={['interface', 'ipv4', 'netmask', 'broadcast', 'gateway']} tableBody={networkInterfaces?.network_interfaces || []} />
      </div>

      <div className="flex flex-col aling-center justify-items-center border p-5 gap-5 text-center">
        <h2>Server's Status</h2>
        <TableComp tableHeader={['Public IP', 'Local IP', 'Port', 'Server Status']} tableBody={[{
          'Public IP': serverStatus?.service_info.public_ip || '-',
          'Local IP': serverStatus?.service_info.ip || '-',
          Port: serverStatus?.service_info.port || '-',
          'Server Status': serverStatus?.service_info.server_status || '-',
        },]} />
      </div>

      <div className="flex flex-col aling-center items-center border p-5 gap-5 text-center">
        <h2>Set Server Status</h2>
        <div className='flex flex-row items-center gap-5'>
          <div className='flex flex-col text-left'>
            <CheckBoxComp
              cbHeader="Select a network interface card"
              cbBody={networkInterfaces?.network_interfaces.map((nic) => nic.interface) || []}
            />
          </div>
          <div className='flex flex-col'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start Binding</button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start Listening</button>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Stop Server</button>
          </div>
        </div>
      </div>

    </div>
  );
}
