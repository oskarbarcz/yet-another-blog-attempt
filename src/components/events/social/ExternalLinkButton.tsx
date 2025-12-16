import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ExternalLinkButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export default function ExternalLinkButton({
  href,
  className = "",
  label = "Strona",
}: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:text-brand-600 hover:border-brand-200 dark:hover:text-brand-400 inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300 ${className}`}
      aria-label="Otwórz link zewnętrzny"
    >
      <FaArrowUpRightFromSquare className="h-3 w-3" /> {label}
    </a>
  );
}
