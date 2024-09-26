import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { RiFolderSharedFill } from "@react-icons/all-files/ri/RiFolderSharedFill";

interface NavbarItem {
    name: string,
    href: string
}

export function NavbarComp({ navbarItems }: { navbarItems: NavbarItem[] }) {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <Link color="foreground" href="/">
                    <RiFolderSharedFill />
                    <p className="font-bold text-inherit">PeerShare</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navbarItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color="foreground" href={item.href}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}