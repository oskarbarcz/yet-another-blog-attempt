import { FaArrowRight } from "react-icons/fa6";

interface ArticleButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export default function ArticleButton({
  href,
  className = "",
  label = "Powiązany artykuł",
}: ArticleButtonProps) {
  return (
    <a
      href={href}
      className={`hover:text-brand-600 hover:border-brand-200 dark:hover:text-brand-400 inline-flex items-center gap-2 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300 ${className}`}
    >
      {label}
      <FaArrowRight className="h-3 w-3" />
    </a>
  );
}
