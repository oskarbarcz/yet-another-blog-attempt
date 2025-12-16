import ArticleCard from "../articles/ArticleCard";
import { FaArrowRight } from "react-icons/fa6";
import type { Article } from "../articles/types";

interface HomeLatestArticlesProps {
  articles: Article[];
}

export default function HomeLatestArticles({ articles }: HomeLatestArticlesProps) {
  if (!articles?.length) return null;
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-family-slab text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Najnowsze publikacje
          </h2>
          <a
            href="/articles"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            Zobacz wszystkie
            <FaArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
