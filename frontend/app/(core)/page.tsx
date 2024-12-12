import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-gray-200 text-gray-900 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Başlık */}
      <h1 className="text-6xl font-extrabold text-blue-700 mb-6 drop-shadow-md">
        PeerShare
      </h1>

      {/* Alt Başlık */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Simplifying File Management with Innovation and Security
      </h2>

      {/* İçerik */}
      <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mb-12">
        Empower your workflow with PeerShare, the ultimate solution for secure
        and seamless file management. Whether you’re sharing, monitoring, or
        organizing, PeerShare has you covered with cutting-edge features and
        intuitive tools designed for efficiency and ease of use.
      </p>

      {/* Özellikler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center transform transition hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Real-Time Insights</h3>
          <p className="text-gray-600">
            Monitor server activities, connections, and file downloads with precision and ease.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center transform transition hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold text-green-600 mb-4">Enhanced Security</h3>
          <p className="text-gray-600">
            Protect your data with state-of-the-art encryption and robust security protocols.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center transform transition hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold text-purple-600 mb-4">Comprehensive Reports</h3>
          <p className="text-gray-600">
            Access detailed insights with weekly and hourly reports on server activity.
          </p>
        </div>
      </div>

      {/* Navigasyon Linkleri */}
      <div className="flex gap-6 mb-12">
        <Link
          href="/server"
          className="bg-blue-600 text-white font-medium rounded-lg px-6 py-3 transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          Explore Server
        </Link>
        <Link
          href="/client"
          className="bg-green-600 text-white font-medium rounded-lg px-6 py-3 transition hover:bg-green-700 focus:ring-4 focus:ring-green-300"
        >
          Connect Client
        </Link>
        <Link
          href="/documents"
          className="bg-gray-600 text-white font-medium rounded-lg px-6 py-3 transition hover:bg-gray-700 focus:ring-4 focus:ring-gray-300"
        >
          Learn More
        </Link>
      </div>

      {/* Dönen SVG */}
      <div className="absolute bottom-[-102%] left-0 w-full h-auto flex justify-center items-center animate-spinSlow opacity-35 z-0 pointer-events-none">
        <svg
          id="_50._Save_Earth"
          data-name="50. Save Earth"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-[300%] h-auto"
        >
          <defs>
            <style>
              {`
          .cls-3 { fill: #9dcc6b; }
          .cls-4 { fill: #b5e08c; }
          .cls-5 { fill: #5b9ad8; }
        `}
            </style>
          </defs>
          <path
            d="M39 24a15 15 0 0 1-15 15C8.29 39 3.16 17.69 17.27 10.6A15 15 0 0 1 39 24z"
            fill="#9fdbf3"
          />
          <path
            d="M39 24a14.9 14.9 0 0 1-5.27 11.4A15 15 0 0 1 12 22c0-6.7 4.85-11.42 5.3-11.42A15 15 0 0 1 39 24z"
            fill="#b2e5fb"
          />
        </svg>
      </div>

    </main>
  );
}
