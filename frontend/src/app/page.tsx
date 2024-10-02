import { Link, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="w-10/12 h-screen flex flex-row gap-5 items-center justify-center mx-auto">
      <Link href="/server" className="w-full h-4/6 bg-orange-100 font-bold flex flex-col justify-around p-24 transition duration-700 ease-in-out">
        <p className="text-5xl text-black font-bold uppercase">Server</p>
        <p className="text-md text-black font-bold text-justify opacity-65 hover:opacity-100 transition-opacity duration-700">
          Do you want to share your files for yourself or your friends? After clicking "SERVER" and making the necessary settings easily with PeerShare, you can share the file you want without any problems.        </p>
      </Link>
      <Link href="/" className="w-full h-4/6 bg-orange-100 text-black font-bold flex flex-col justify-around p-24 transition duration-700 ease-in-out">
        <p className="text-5xl text-black font-bold uppercase">Client</p>
        <p className="text-md text-black font-bold text-justify opacity-65 hover:opacity-100 transition-opacity duration-700">
          To easily access shared files. You can use "CLIENT". This will allow you to easily access files shared by your acquaintances, colleagues or yourself. All you have to do is click here.
        </p>
      </Link>
    </section>
  );
}
