import { Pagination } from "flowbite-react";

interface ArticlesPagerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ArticlesPager({ currentPage, totalPages, onPageChange }: ArticlesPagerProps) {
  if (totalPages <= 1) return null;
  return (
    <div className="mt-12 flex justify-center">
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
    </div>
  );
}
