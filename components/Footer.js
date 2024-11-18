import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} William Purnell. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* GitHub */}
          <a
            href="https://github.com/Purney"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/william-purnell-uk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
