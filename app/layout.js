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
          <nav className="h-10 bg-slate-400 flex justify-between gap-3 p-2 text-lg">
            <div className="flex gap-3">
              <Link
                className="hover:text-black hover:border-b-2 transition-all duration-300"
                href={"/"}
              >
                Home
              </Link>
              <Link
                className="hover:text-black hover:border-b-2 transition-all duration-300"
                href={"/jobs"}
              >
                Jobs
              </Link>
              <Link
                className="hover:text-black hover:border-b-2 transition-all duration-300"
                href={"/about"}
              >
                About
              </Link>
            </div>
            <AuthButton />
          </nav>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
