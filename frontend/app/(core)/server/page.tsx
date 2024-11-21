'use client'

import React, { useState, useEffect } from 'react';

import { lanServerStatus } from "./functions";
import { LanServerStatusInterface } from './functions';
import { Table } from "@/components/table";

export default function ServerPage() {
  const [lanServerStat, setLanServerStat] = useState<LanServerStatusInterface | null>(null);
  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await lanServerStatus();
        setLanServerStat(response);
      } catch (error) {
        console.error("Error fetching server status:", error);
      }
    };
    fetchServerStatus();
  }, []);
  return (
    <div className="w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10">
      <div className="flex flex-col justify-items-center border p-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">LAN Server Status</h2>
        <Table
          TableHeader={['Property Name', 'Property Value', 'New Value', 'Edit']}
          TableRows={[
            { name: 'IP', value: lanServerStat?.service_info.ip || 'Loading...', replaceable: false, saveble: false },
            {
              name: 'Port',
              value: (lanServerStat?.service_info.port === 0) ? 'undefined' : lanServerStat?.service_info.port || 'Loading...',
              replaceable: true, saveble: true
            },
            { name: 'Server Status', value: lanServerStat?.service_info.server_status || 'Loading...', replaceable: false, saveble: false },
            {
              name: 'Server Binding',
              value: lanServerStat?.server_binding ? 'Yes' : 'No',
              replaceable: false,
              saveble: true
            },
            {
              name: 'Server Listening',
              value: lanServerStat?.server_listening ? 'Yes' : 'No',
              replaceable: false,
              saveble: true
            },
          ]}
        />


      </div>
      <div className="flex flex-col justify-items-center border p-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">Server Status</h2>
        {/* <Table TableHeader={['Trial']} /> */}
      </div>
      <div className="flex flex-col justify-items-center border p-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">Server Status</h2>
        {/* <Table TableHeader={['Trial']} /> */}
      </div>
      <div className="flex flex-col justify-items-center border p-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">Server Status</h2>
        {/* <Table TableHeader={['Trial']} /> */}
      </div>
      <div className="flex flex-col justify-items-center border p-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">Server Status</h2>
        {/* <Table TableHeader={['Trial']} /> */}
      </div>
      <div className="flex flex-col justify-items-center border p-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">Server Status</h2>
        {/* <Table TableHeader={['Trial']} /> */}
      </div>
    </div>
  );
}
