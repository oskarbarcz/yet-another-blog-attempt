import { Button } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa6";
import ArticleTags from "./ArticleTags";
import ArticleMeta from "./ArticleMeta";
import type { Article } from "./types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900/50 dark:backdrop-blur-sm"
    >
      {article.coverUrl && (
        <div className="relative h-40 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <a href={`/articles/${article.slug}`} className="block h-full w-full">
            <img
              src={article.coverUrl}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 space-y-3">
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-bold leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
            <a href={`/articles/${article.slug}`}>{article.title}</a>
          </h2>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {article.excerpt}
          </p>
        </div>

        <ArticleTags tags={article.tags} />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
          <ArticleMeta date={article.date} readTime={article.readTime} />

          <Button size="xs" color="gray" pill as="a" href={`/articles/${article.slug}`}>
            <span className="flex items-center gap-1.5 text-xs">
              Read
              <FaArrowRight className="h-2.5 w-2.5" />
            </span>
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-brand-400 via-brand-500 to-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}
