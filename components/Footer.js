import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export  default function Footer() {
  return (
    <footer className="py-6 bg-gray-200">
      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse md:flex-row  justify-between gap-8">
        {/* Footer Text */}
        <p className="text-xs md:text-sm self-center md:self-end">
          © {new Date().getFullYear()} William Purnell. All Rights Reserved.
        </p>
        <div className='flex flex-col text-sm text-center gap-4 md:text-left'>
          <b>My Work</b>
          <Link href={"/projects"}>All Our Projects</Link>
          <Link href={"/projects/text-2-quiz"}>Text2Quiz</Link>
          <Link href={"/projects/filament-gifts"}>FilamentGifts</Link>

        </div>

        <div className='flex flex-col text-sm text-center gap-4 md:text-left'>
          <b>Company</b>
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>

        <div className='flex flex-col text-sm text-center gap-4 md:text-left'>
          <b>Legal</b>
          <Link href={"/termsandconditions"}>Terms & Conditions</Link>
          <Link href={"/privacy"}>Privacy</Link>
        </div>

        

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0 self-center md:self-end">
          {/* GitHub */}
          <Link
            href="https://github.com/Purney"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub size={24} />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/william-purnell-uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
