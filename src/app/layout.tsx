import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GOLFWERKSTATT",
  description: "Generated by create next app",
  // NOTE: SEO here?
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="golfwerkstatt/favicon.ico" />
        <link rel="manifest" href="golfwerkstatt/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
