import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-expect-error Next.js handles this global CSS import at build time.
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce - Best Cloths",
  description: "E-commerce is the best place find the best cloths",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar/>
          {children}
          <Footer />
          </div>
          <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
