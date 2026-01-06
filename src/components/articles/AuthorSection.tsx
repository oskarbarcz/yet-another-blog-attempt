import { AUTHOR_NAME, AUTHOR_BIO, AUTHOR_PHOTO } from "../../constants";
import { FaLinkedin } from "react-icons/fa6";

export default function AuthorSection() {
  return (
    <div className="mx-auto mt-16 max-w-[72ch] border-t border-gray-200 dark:border-gray-800">
      <div className="group flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:text-left">
        <div className="relative shrink-0">
          <div className="bg-brand-100 absolute inset-0 rotate-6 rounded-2xl transition-transform group-hover:rotate-12 dark:bg-brand-400/20" />
          <img
            src={AUTHOR_PHOTO}
            alt={AUTHOR_NAME}
            className="relative h-24 w-24 rounded-2xl border-2 border-white object-cover shadow-sm dark:border-gray-800"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-family-slab text-2xl font-bold text-gray-900 dark:text-white">
            {AUTHOR_NAME}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {AUTHOR_BIO}
          </p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <a
              href="https://linkedin.com/in/oskarbarcz"
              className="bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors focus:ring-2 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-4 w-4" />
              Napisz do mnie na LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
