import type { Metadata } from "next";
import { Raleway, Comforter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/layout/Navbar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const comforter = Comforter({
  variable: "--font-comforter",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "AIDventure",
  description: "lorem ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${comforter.variable} antialiased`}>
        {/* <Navbar></Navbar> */}
        {children}
      </body>
    </html>
  );
}
