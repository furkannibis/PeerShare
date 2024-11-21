import Link from "next/link";
import { PeerShareLink, FooterLinks } from "@/config/links";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-5">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href={PeerShareLink.href} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <PeerShareLink.icon size={36} />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{PeerShareLink.text}</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {FooterLinks.map((link, index) => (
                            <div className="flex flex-row gap-4 items-center hover:underline">
                                <link.icon size={24} />
                                <Link href={link.href} target="_blank">{link.text}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Furkan İBİŞ
                    </span>
                </div>
            </div>
        </footer>

    );
}