import {
  Footer as FlowbiteFooter,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
} from "flowbite-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <FlowbiteFooter container className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 rounded-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid w-full justify-between gap-8 py-8 md:flex md:grid-cols-1">
          <div className="flex flex-col gap-4">
            <FooterBrand
              href="/"
              name="Oskar Barcz"
              className="text-2xl font-bold"
            />
            <p className="max-w-md text-sm text-gray-600 dark:text-gray-400">
              Backend developer passionate about distributed systems, API design, and building scalable web applications.
              Sharing insights on modern web development and system architecture.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full py-6">
          <FooterCopyright
            href="/"
            by="Oskar Barcz"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </FlowbiteFooter>
  );
}
