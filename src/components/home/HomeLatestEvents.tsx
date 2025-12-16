import CompactEventItem, { type CompactEventData } from "./CompactEventItem";
import { FaArrowRight } from "react-icons/fa6";

interface HomeLatestEventsProps {
  events: CompactEventData[];
}

export default function HomeLatestEvents({ events }: HomeLatestEventsProps) {
  if (!events?.length) return null;
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-family-slab text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Najnowsze wydarzenia
          </h2>
          <a
            href="/events"
            className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex items-center gap-1 text-sm font-medium"
          >
            Zobacz wszystkie
            <FaArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <CompactEventItem key={`${e.date}-${i}-${e.title}`} {...e} />
          ))}
        </ul>
      </div>
    </section>
  );
}
