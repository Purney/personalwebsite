import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-dark py-16 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col-reverse justify-between gap-8 px-8 md:flex-row">
        <p className="self-center text-xs md:self-end md:text-sm">
          © {new Date().getFullYear()} William Purnell. All Rights Reserved.
        </p>

        <div className="flex flex-col gap-4 text-center text-sm md:text-left">
          <b className="text-white">Case studies</b>
          <Link href="/projects">All Projects</Link>
          <Link href="/projects/text-2-quiz">Text2Quiz</Link>
          <Link href="/projects/filament-gifts">FilamentGifts</Link>
        </div>

        <div className="flex flex-col gap-4 text-center text-sm md:text-left">
          <b className="text-white">Company</b>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex flex-col gap-4 text-center text-sm md:text-left">
          <b className="text-white">Legal</b>
          <Link href="/termsandconditions">Terms & Conditions</Link>
          <Link href="/privacy">Privacy</Link>
        </div>

        <div className="mt-4 flex self-center space-x-6 md:mt-0 md:self-end">
          <Link
            href="https://github.com/Purney"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-white"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/william-purnell-uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="hover:text-white"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
