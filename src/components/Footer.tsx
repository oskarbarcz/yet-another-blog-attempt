import { Footer as FlowbiteFooter, FooterCopyright } from "flowbite-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <FlowbiteFooter container className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 rounded-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="w-full py-4 flex flex-col gap-3 items-center justify-between md:flex-row">
          {/* Left: copyright only */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <FooterCopyright href="/" by="Tech Blog" year={new Date().getFullYear()} />
          </div>

          {/* Right: socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}
