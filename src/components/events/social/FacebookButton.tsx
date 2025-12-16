import { FaFacebook } from "react-icons/fa6";

interface FacebookButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export default function FacebookButton({ href, className = "", label = "Facebook" }: FacebookButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-400/10 dark:text-blue-400 ${className}`}
      aria-label="Open Facebook link"
    >
      <FaFacebook className="h-3.5 w-3.5" /> {label}
    </a>
  );
}
