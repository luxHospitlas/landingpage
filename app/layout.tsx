import type { Metadata } from "next";
import Header from './components/header/header';
import ClientLayout from './ClientLayout';  // Import ClientLayout
import ClientHead from './ClientHead';  // Import the new ClientHead component

import "./globals.css";

export const metadata: Metadata = {
  title: "Lux LP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        
        <link rel="preload" href="/globals.css" as="style" />
        <link rel="stylesheet" href="/globals.css" media="print" />
        <link
  rel="preload"
  href="/fonts/Parkinsans-Bold.ttf"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
<link
  rel="preload"
  href="/fonts/Parkinsans-Medium.ttf"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
<link
  rel="preload"
  href="/fonts/Parkinsans-Regular.ttf"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
<link
  rel="preload"
  href="/fonts/Parkinsans-SemiBold.ttf"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
       
        <ClientHead />
      </head>
      <body>
        <Header />
        <ClientLayout>{children}</ClientLayout> 
      </body>
    </html>
  );
}
