import { useState } from "react";
import BackgroundPattern from "./articles/BackgroundPattern";
import ArticlesHeader from "./articles/ArticlesHeader";
import ArticlesGrid from "./articles/ArticlesGrid";
import ArticleCard from "./articles/ArticleCard";
import ArticlesPager from "./articles/ArticlesPager";
import type { Article } from "./articles/types";

interface ArticlesListProps {
  articles: Article[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <BackgroundPattern />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24 lg:pb-12">
        <ArticlesHeader />
        <ArticlesGrid>
          {currentArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </ArticlesGrid>

        <ArticlesPager currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </main>
  );
}
