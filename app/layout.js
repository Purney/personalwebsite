"use client";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { useState } from "react";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <body className="bg-gray-100 min-h-screen">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
