"use client";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"


// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  var className = inter.className + (isMenuOpen ? " overflow-hidden h-screen" : "")

  return (
    <html
      lang="en"
      className={className}
    >
      <body className="bg-light-background text-base-text min-h-screen flex flex-col">
        <Analytics />
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
