import type { Metadata } from "next";
import localFont from 'next/font/local'
import Navbar from "./components/Navbar";

const myFont = localFont({
  src: '../../public/arian.ttf',
})

import "./globals.css";

export const metadata: Metadata = {
  title: "Flux 2025",
  description: "National IT Fest hosetd by Department of Computer Science, CHRIST University - BYC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={myFont.className}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
