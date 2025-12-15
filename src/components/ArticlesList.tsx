import { useState } from "react";
import { DarkThemeToggle, Pagination, Button } from "flowbite-react";
import { FaCalendarDays, FaClock, FaTag, FaCode, FaArrowRight } from "react-icons/fa6";

interface Author {
  name: string;
  avatarUrl?: string;
}

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  author: Author;
  coverUrl?: string;
}

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
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 size-full opacity-30">
        <div className="relative h-full w-full select-none">
          <img
            className="absolute right-0 min-w-dvh dark:hidden"
            alt="Pattern Light"
            src="/pattern-light.svg"
          />
          <img
            className="absolute right-0 hidden min-w-dvh dark:block"
            alt="Pattern Dark"
            src="/pattern-dark.svg"
          />
        </div>
      </div>
      
      <div className="absolute top-6 right-6 z-10">
        <DarkThemeToggle />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <FaCode className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Tech Blog
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Deep dives into backend development, system design, and modern web architecture
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <article
              key={article.slug}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900/50 dark:backdrop-blur-sm"
            >
              {article.coverUrl && (
                <div className="relative h-40 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={article.coverUrl}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 via-gray-900/0 to-gray-900/0 dark:from-gray-950/70" />
                </div>
              )}
              
              <div className="flex flex-1 flex-col p-5 space-y-3">
                <div className="flex-1 space-y-2">
                  <h2 className="text-xl font-bold leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                    {article.title}
                  </h2>
                  
                  <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {article.excerpt}
                  </p>
                </div>

                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-400/10 dark:text-brand-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarDays className="h-3 w-3 text-gray-400 dark:text-gray-600" />
                      <time>
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      <FaClock className="h-3 w-3 text-gray-400 dark:text-gray-600" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <Button
                    size="xs"
                    color="gray"
                    pill
                  >
                    <span className="flex items-center gap-1.5 text-xs">
                      Read
                      <FaArrowRight className="h-2.5 w-2.5" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-brand-400 via-brand-500 to-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        )}
      </div>
    </main>
  );
}
