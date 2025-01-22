"use client";

import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

export default function Header({isMenuOpen, toggleMenu}) {
  return (
    <header className=" py-4 px-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold bg-gray-200 p-2 px-3 rounded-sm">
          <Link href="/" className="tracking-widest">William Purnell</Link>
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
        <ul className="hidden md:flex space-x-6 items-center gap-8">
          <li>
            <Link href="/about" className="">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="">
              My Work
            </Link>
          </li>
          <li>
            <div>
              <PrimaryButton buttonLink="/contact" buttonText="Get in Touch" className="mt-0 inline-block bg-black text-white py-2 px-5 rounded-sm text-sm uppercase hover:bg-gray-700" />
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full  w-full transform z-10 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-300`}
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
              href="/about"
              className=""
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className=""
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className=""
              onClick={toggleMenu}
            >
              My Work
            </Link>
          </li>
          <li>
            <PrimaryButton className="mt-0 inline-block bg-black text-white py-2 px-4 rounded-sm uppercase hover:bg-gray-700" buttonLink="/contact" onClick={toggleMenu} buttonText="Get in Touch" />
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
