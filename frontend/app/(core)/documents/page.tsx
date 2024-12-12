import Image from "next/image";

export default function DocumentsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 py-10 px-6">
            <article className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8 transform transition-all duration-500 hover:scale-105">
                {/* Server Side Section */}
                <section className="mb-12">
                    <header className="animate-fade-in">
                        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 border-b-2 border-blue-500 inline-block pb-2">Server Side</h2>
                    </header>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The server facilitates file sharing by implementing socket communication and security protocols. But first, what is a socket?
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        A network socket acts as an endpoint for data transmission and reception in a network. Sockets are created during a running process's lifetime.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The server uses sockets to listen for and respond to various requests efficiently.
                    </p>

                    <section className="mt-8 animate-slide-in">
                        <header>
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">Bind Mode</h3>
                        </header>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Bind mode assigns a specific IP and port to the socket, allowing the server to define where requests will be received.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This ensures incoming requests are properly routed and handled by the server.
                        </p>
                    </section>

                    <section className="mt-8 animate-slide-in">
                        <header>
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">Listen Mode</h3>
                        </header>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            After enabling bind mode, the server can activate listen mode to begin listening for incoming requests.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Listen mode also defines the maximum number of simultaneous connections.
                        </p>
                    </section>
                </section>

                {/* Client Side Section */}
                <section className="mb-12 animate-fade-in">
                    <header>
                        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 border-b-2 border-blue-500 inline-block pb-2">Client Side</h2>
                    </header>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The client connects to an established server to request files.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        After passing security protocols, the client gains access to the server's shared files and information.
                    </p>
                </section>

                {/* Additional Information */}
                <section className="mt-12 animate-fade-in">
                    <header>
                        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 border-b-2 border-blue-500 inline-block pb-2">Additional Information</h2>
                    </header>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        When the server starts, it does not immediately activate bind or listen modes. Instead, it prepares various internal variables.
                    </p>
                    <figure className="mb-8 animate-zoom-in">
                        <Image
                            src={"/server_init.png"}
                            alt={"Server Initialization Diagram"}
                            className="rounded-xl shadow-lg mx-auto"
                            width={200}
                            height={133}
                        />
                        <figcaption className="text-center text-gray-500 mt-4">Server Initialization Diagram</figcaption>
                    </figure>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        To start the server, the user must activate bind and listen modes with the correct inputs.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Similarly, on the client side, the user can connect to the server by entering the correct server IP, port, and password.
                    </p>
                </section>

                {/* Server-Client Interaction Section */}
                <section className="mt-12 animate-fade-in">
                    <header>
                        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 border-b-2 border-blue-500 inline-block pb-2">Server-Client Interaction</h2>
                    </header>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The client connects to the server using three main pieces of information:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>IP Address</li>
                        <li>Port Number</li>
                        <li>Password</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        If the provided information is correct, the following scenario occurs:
                    </p>
                    <figure className="mb-8 animate-zoom-in">
                        <Image
                            src={"/correct_information.png"}
                            alt={"Client successfully connects to server image"}
                            className="rounded-xl shadow-lg mx-auto"
                            width={600}
                            height={300}
                        />
                        <figcaption className="text-center text-gray-500 mt-4">Successful Connection</figcaption>
                    </figure>
                    <p className="text-gray-700 leading-relaxed mb-4">If the information is incorrect:</p>
                    <figure className="mb-8 animate-zoom-in">
                        <Image
                            src={"/wrong_information.png"}
                            alt={"Client fails to connect to server image"}
                            className="rounded-xl shadow-lg mx-auto"
                            width={600}
                            height={300}
                        />
                        <figcaption className="text-center text-gray-500 mt-4">Failed Connection</figcaption>
                    </figure>

                    <section className="mt-8 animate-slide-in">
                        <header>
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">Client Requests</h3>
                        </header>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Upon successfully connecting, the client can perform the following actions:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Request file information</li>
                            <li>Request all shared files</li>
                            <li>Download a specific file</li>
                            <li>Exit the server</li>
                        </ul>
                        <figure className="mb-8 animate-zoom-in">
                            <Image
                                src={"/file.png"}
                                alt={"Client requests file information image"}
                                className="rounded-xl shadow-lg mx-auto"
                                width={600}
                                height={300}
                            />
                            <figcaption className="text-center text-gray-500 mt-4">Requesting File Information</figcaption>
                        </figure>
                        <figure className="mb-8 animate-zoom-in">
                            <Image
                                src={"/files.png"}
                                alt={"Client requests all shared files image"}
                                className="rounded-xl shadow-lg mx-auto"
                                width={600}
                                height={300}
                            />
                            <figcaption className="text-center text-gray-500 mt-4">Requesting Shared Files</figcaption>
                        </figure>
                        <figure className="mb-8 animate-zoom-in">
                            <Image
                                src={"/download_file.png"}
                                alt={"Client downloads a file image"}
                                className="rounded-xl shadow-lg mx-auto"
                                width={600}
                                height={300}
                            />
                            <figcaption className="text-center text-gray-500 mt-4">Downloading a File</figcaption>
                        </figure>
                        <figure className="mb-8 animate-zoom-in">
                            <Image
                                src={"/exit.png"}
                                alt={"Client exits server image"}
                                className="rounded-xl shadow-lg mx-auto"
                                width={600}
                                height={300}
                            />
                            <figcaption className="text-center text-gray-500 mt-4">Exiting the Server</figcaption>
                        </figure>
                    </section>
                </section>

                {/* Bugs and Updates Section */}
                <section className="mt-12 animate-fade-in">
                    <header>
                        <h2 className="text-3xl font-extrabold text-red-600 mb-6 border-b-2 border-red-400 inline-block pb-2">Bugs and Future Updates</h2>
                    </header>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>[BUG]: Server cannot restart without manual intervention.</li>
                        <li>[UPDATE]: Consider improving error handling for failed connections.</li>
                    </ul>
                </section>
            </article>
        </main>
    );
}