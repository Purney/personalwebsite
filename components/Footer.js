import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-200">
      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        {/* Footer Text */}
        <p className="text-xxs md:text-sm">
          © {new Date().getFullYear()} William Purnell. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
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
