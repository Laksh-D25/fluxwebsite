import type { Metadata } from "next";
import localFont from 'next/font/local'
import Link from "next/link";

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
        <nav className="fixed top-0 left-0 w-full flex gap-6 p-4 text-white z-50">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
