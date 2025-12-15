import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import { Quicksand } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boston Roundnet",
};

const quicksand = Quicksand({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
