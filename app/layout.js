import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import AuthButton from "./components/AuthButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevBoard - Jobs for Developers",
  description: "Find your next developer job on DevBoard.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider>
          <nav className="bg-linear-to-r from-slate-900 via-gray-500 to-slate-900 shadow-xl border-b-2 flex flex-wrap text-base justify-between items-center gap-3 px-6 py-4">
            <div className="flex items-center gap-8">
              <Link href={"/"} className="font-bold text-xl text-white">
                DevBoard
              </Link>
              <div className="flex gap-6">
                <Link
                  className="relative text-gray-300 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  href={"/jobs/new"}
                >
                  Post job
                </Link>
                <Link
                  className="relative text-gray-300 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  href={"/jobs"}
                >
                  Jobs
                </Link>
                <Link
                  className="relative text-gray-300 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  href={"/about"}
                >
                  About
                </Link>
              </div>
            </div>
            <AuthButton />
          </nav>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
