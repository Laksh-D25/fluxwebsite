import type { Metadata } from "next";
import localFont from 'next/font/local'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const arianFont = localFont({
  src: '../../public/arian.ttf',
  variable: '--font-arian' // This makes it available as a CSS variable
})

const quadFont = localFont({
  src: '../../public/quad.otf',
  variable: '--font-quad'
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
      <body className={`${arianFont.variable} ${quadFont.variable} ${arianFont.className}`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
