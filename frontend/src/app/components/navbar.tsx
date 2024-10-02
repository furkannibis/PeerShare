'use client';

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { ImShare2 } from "@react-icons/all-files/im/ImShare2";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

export default function NavbarComp() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Help & Feedback",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="mb-10 border-b-1">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link color="foreground" href="/" className="gap-x-2">
                        <ImShare2 className="text-3xl" />
                        <p className="text-3xl font-bold text-inherit">PeerShare</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Documents
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/server">
                        Server
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/client">
                        Client
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://github.com/furkannibis/PeerShare" color="foreground" className="gap-x-2 text-xl hover:border-b-4 transition-all duration-75 ease-in-out hover:ease-in-out">
                        <FaGithub />
                        <p>Github</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
