"use client";

import { useState } from "react";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

const consultationUrl = "https://calendly.com/hello-william-purnell/initial-call";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Case Studies" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background-dark/95 px-6 py-3 text-slate-100 backdrop-blur md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight text-white">
          <span className="text-base font-bold tracking-wide">William Purnell</span>
          <span className="text-xs font-medium text-slate-300">AI Automation Developer</span>
        </Link>

        <button
          className="min-h-11 px-2 text-sm font-semibold uppercase tracking-[0.16em] text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-slate-300 transition hover:text-white hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <PrimaryButton
              buttonLink={consultationUrl}
              buttonText="Book Consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-11 px-5 py-2"
            />
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/50 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          <div
            className="fixed inset-0 z-[70] h-dvh w-full overflow-y-auto bg-background-dark text-white md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              className="min-h-11 p-6 text-sm font-semibold uppercase tracking-[0.16em]"
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
                  className="btn-primary w-full"
                  buttonLink={consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  buttonText="Book Consultation"
                />
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
