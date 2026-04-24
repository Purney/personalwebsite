"use client";

import { useState } from "react";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Case Studies" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  return (
    <header className="border-b border-white/10 bg-background-dark/95 px-6 py-4 text-slate-100 backdrop-blur md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight text-white">
          <span className="text-base font-bold tracking-wide">William Purnell</span>
          <span className="text-xs font-medium text-accent-cyan">AI Automation Developer</span>
        </Link>

        <button
          className="text-sm font-semibold uppercase tracking-[0.16em] text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-slate-300 hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <PrimaryButton
              buttonLink="/contact"
              buttonText="Free Automation Audit"
              className="mt-0 inline-block bg-accent-cyan px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 hover:bg-white"
            />
          </li>
        </ul>
      </nav>

      <div
        className={`fixed right-0 top-0 z-20 h-full w-full transform bg-background-dark text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="p-6 text-sm font-semibold uppercase tracking-[0.16em]"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          Close
        </button>
        <ul className="mt-10 flex flex-col space-y-6 px-6 text-lg">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={toggleMenu}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <PrimaryButton
              className="mt-0 inline-block bg-accent-cyan px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 hover:bg-white"
              buttonLink="/contact"
              onClick={toggleMenu}
              buttonText="Free Automation Audit"
            />
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
