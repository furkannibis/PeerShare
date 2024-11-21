'use client'

import React, { useState, useEffect } from 'react';
import { lanServerStatus, startLANServer } from "./functions";
import { LanServerStatusInterface, StartLANServerInterface, StartLANServerExceptionInterface } from './functions';
import { Table } from "@/components/table";

export default function ServerPage() {
  const [lanServerStat, setLanServerStat] = useState<LanServerStatusInterface | null>(null);
  const [port, setPort] = useState<number | string>(''); // Port state'i ekledik
  const [popupMessage, setPopupMessage] = useState<string | null>(null); // Popup mesajı için state
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup görünürlüğünü kontrol eden state

  // Server durumunu al
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

  // Server'ı başlatmak için
  const handleStartServer = async () => {
    if (typeof port === 'number' && port > 0) {
      try {
        const response = await startLANServer(port);

        if (response.status === "success") {
          const successResponse = response as StartLANServerInterface;
          setPopupMessage(successResponse.message);
          setIsPopupVisible(true);
          console.log(`Server started on port: ${port}`);

          // Server başarıyla başlatıldıktan sonra güncel durumu al ve table'yi yenile
          const updatedServerStat = await lanServerStatus();
          setLanServerStat(updatedServerStat); // Yeni server bilgilerini table'ye aktar
        } else if (response.status === "failed") {
          const errorResponse = response as StartLANServerExceptionInterface;
          setPopupMessage(`Error code: ${errorResponse.err_info.error_code} - ${errorResponse.err_info.error_desc}`);
          setIsPopupVisible(true);
          console.log("Error starting server");
        }

      } catch (error) {
        setPopupMessage('Error starting the server!');
        setIsPopupVisible(true);
        console.error("Error starting server:", error);
      }
    } else {
      setPopupMessage('Invalid port number');
      setIsPopupVisible(true);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Popup'ı kapatmak için
  };

  return (
    <div className="w-4/5 mx-auto grid sm:w-full sm:grid-cols-1 md:w-full md:grid-cols-1 lg:w-4/5 lg:grid-cols-2 xl:w-4/5 xl:grid-cols-2 2xl:w-4/5 2xl:grid-cols-2 gap-10">
      <div className="flex flex-col aling-center justify-items-center border p-5 gap-5">
        <h2 className="text-3xl uppercase font-bold mx-auto">LAN Server Status</h2>
        <Table
          TableHeader={['Property Name', 'Property Value']}
          TableRows={[
            {
              name: 'IP',
              value: lanServerStat?.service_info.ip || 'Loading...'
            },
            {
              name: 'Port',
              value: (lanServerStat?.service_info.port === 0) ? 'undefined' : lanServerStat?.service_info.port || 'Loading...',
            },
            {
              name: 'Server Status',
              value: lanServerStat?.service_info.server_status || 'Loading...'
            },
            {
              name: 'Server Binding',
              value: lanServerStat?.server_binding ? 'Yes' : 'No',
            },
            {
              name: 'Server Listening',
              value: lanServerStat?.server_listening ? 'Yes' : 'No',
            },
          ]}
        />
        <div className='w-full mx-auto flex flex-col items-center space-y-4'>
          <input
            type="number"
            value={port}
            onChange={(e) => setPort(Number(e.target.value))} // input değeri değiştiğinde setPort çağırıyoruz
            className="border p-2 rounded-md w-1/2"
            placeholder="Enter Port"
          />
          <div className='flex flex-row items-center justify-items-center gap-5'>
            <button
              onClick={handleStartServer} // Butona tıklandığında handleStartServer fonksiyonunu çağırıyoruz
              className='border p-2 rounded-md bg-blue-500 text-white'
            >
              Start Binding
            </button>
            <button className='border p-2 rounded-md bg-blue-500 text-white'>
              Start Listening
            </button>
            <button className='border p-2 rounded-md bg-blue-500 text-white'>
              Stop Server
            </button>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p>{popupMessage}</p>
            <button onClick={closePopup} className="mt-4 p-2 bg-blue-500 text-white rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
