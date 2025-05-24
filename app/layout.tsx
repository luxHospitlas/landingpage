

import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import ClientHead from "./ClientHead";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Lux Hospitals Hyderabad – Advanced Surgical Care",
  description: "Lux Hospitals offers expert surgical care in Hyderabad, specializing in minimally invasive procedures across multiple specialties.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts and Preloads */}
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
        {/* Move GoogleTagManager here */}
        <GoogleTagManager gtmId="GTM-5BCR427Z" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
