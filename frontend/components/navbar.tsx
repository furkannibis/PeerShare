'use client'

import { useState } from "react";
import Link from "next/link";
import { PeerShareLink, HeaderLinks } from "@/config/links";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`${isMenuOpen ? "relative" : ""}`}>
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 backdrop-blur-md z-10"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

            <nav className="bg-white border-gray-200 dark:bg-gray-900 z-20 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href={PeerShareLink.href} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <PeerShareLink.icon size={36}/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{PeerShareLink.text}</span>
                    </Link>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${isMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {HeaderLinks.map((link, index) => (
                                <li key={index} className="flex flex-rows items-center justify-items-center gap-1 hover:underline">
                                    <link.icon size={24}/>
                                    <Link href={link.href}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}