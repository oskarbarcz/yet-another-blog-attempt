import { FaArrowRight } from "react-icons/fa6";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Witaj na moim blogu — moim cyfrowym ogrodzie
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Dzielę się tym, czego się uczę: architekturą, wydajnością, bezpieczeństwem API
            oraz praktycznymi wzorcami w React i Astro. Bez marketingu — tylko wiedza i notatki z praktyki.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              Zobacz publikacje
              <FaArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/events"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 hover:border-brand-300 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:text-brand-400"
            >
              Zobacz wydarzenia
              <FaArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
