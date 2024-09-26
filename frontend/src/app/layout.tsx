import type { Metadata } from "next";
import "./globals.css";

import { NavbarComp } from "./components/navbar";

export const metadata: Metadata = {
  title: "PeerShare",
  description: "PeerShare Open-Source Unlimited Free File Sharing App.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarComp navbarItems={[
          { name: 'Server', href: '/server' },
          { name: 'Client', href: '/client' },
          { name: 'Docs', href: '/docs' }
        ]} />
        {children}
      </body>
    </html>
  );
}
