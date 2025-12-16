import { Footer as FlowbiteFooter, FooterCopyright } from "flowbite-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <FlowbiteFooter
      container
      className="rounded-none border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-between gap-3 py-4 md:flex-row">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <FooterCopyright
              href="https://barcz.me"
              rel="noopener noreferrer"
              by="Oskar Barcz"
              year={new Date().getFullYear()}
            />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/oskarbarcz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 dark:hover:text-brand-400 text-gray-500 transition-colors dark:text-gray-400"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/oskar.barcz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 dark:hover:text-brand-400 text-gray-500 transition-colors dark:text-gray-400"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/oskarbarcz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 dark:hover:text-brand-400 text-gray-500 transition-colors dark:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/oskarbarcz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 dark:hover:text-brand-400 text-gray-500 transition-colors dark:text-gray-400"
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
