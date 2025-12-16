import { FaLinkedin } from "react-icons/fa6";

interface LinkedInButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export default function LinkedInButton({ href, className = "", label = "LinkedIn" }: LinkedInButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 hover:bg-sky-100 dark:bg-sky-400/10 dark:text-sky-400 ${className}`}
      aria-label="Otwórz link LinkedIn"
    >
      <FaLinkedin className="h-3.5 w-3.5" /> {label}
    </a>
  );
}
