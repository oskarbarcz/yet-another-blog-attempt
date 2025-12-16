import { FaYoutube } from "react-icons/fa6";

interface YouTubeButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export default function YouTubeButton({ href, className = "", label = "YouTube" }: YouTubeButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-400/10 dark:text-red-400 ${className}`}
      aria-label="Open YouTube link"
    >
      <FaYoutube className="h-3.5 w-3.5" /> {label}
    </a>
  );
}
