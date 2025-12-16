import { FaArrowRight } from "react-icons/fa6";
import HeroBlob from "./HeroBlob";

export default function HomeHero() {
  return (
    <section className="relative">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative max-w-3xl">
          <HeroBlob />
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Witaj na moim blogu — moim cyfrowym ogrodzie
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Dzielę się tym, czego się uczę: architekturą, wydajnością,
            bezpieczeństwem API oraz praktycznymi wzorcami w React i Astro. Bez
            marketingu — tylko wiedza i notatki z praktyki.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/articles"
              className="bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow focus:ring-2 focus:outline-none"
            >
              Zobacz publikacje
              <FaArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/events"
              className="hover:text-brand-600 hover:border-brand-300 dark:hover:text-brand-400 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-300"
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
