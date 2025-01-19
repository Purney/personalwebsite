import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-200">
      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse md:flex-row  justify-between gap-8">
        {/* Footer Text */}
        <p className="text-xs md:text-sm self-center md:self-end">
          © {new Date().getFullYear()} William Purnell. All Rights Reserved.
        </p>

        <div className='flex flex-col text-sm text-center md:text-left'>
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/projects"}>Our Work</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>

        <div className='flex flex-col text-sm text-center md:text-left'>
          <Link href={"/termsandconditions"}>Terms & Conditions</Link>
          <Link href={"/privacy"}>Privacy</Link>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0 self-center md:self-end">
          {/* GitHub */}
          <a
            href="https://github.com/Purney"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/william-purnell-uk"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
