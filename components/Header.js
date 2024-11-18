"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white py-4 px-8 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">William Purnell</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-yellow-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-yellow-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue-900 text-white w-full transform z-10 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="text-2xl p-4 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ×
        </button>
        <ul className="flex flex-col space-y-4 mt-10 px-6 text-lg">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}
