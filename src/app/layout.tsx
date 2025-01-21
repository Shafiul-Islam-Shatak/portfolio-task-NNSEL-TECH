import type { Metadata } from "next";
import { Syne, Rubik ,Inter , Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const syneFont = Syne({
  variable: "--font-syneFont",
  subsets: ["latin"],
});
const soraFont = Sora({
  variable: "--font-soraFont",
  subsets: ["latin"],
});
const interFont = Inter({
  variable: "--font-interFont",
  subsets: ["latin"],
});

const rubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AARONN",
  description: "AARONN Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syneFont.variable} ${rubikFont.variable} ${interFont.variable} ${soraFont.variable} antialiased bg-[#262A2C] text-white`}
      >
        <Toaster/>
       <div className="max-w-[1145px] mx-auto">
          <Navbar />
        </div>
        <main className="max-w-[1140px] mx-auto">
          {children}
        </main>
        <div className=" bg-black">
          <Footer />
        </div>
      </body>
    </html>
  );
}
