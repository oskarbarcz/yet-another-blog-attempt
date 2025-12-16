import { FaArrowRight, FaArrowUpRightFromSquare, FaFacebook, FaLinkedin, FaYoutube, FaLocationDot, FaUserGroup } from "react-icons/fa6";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import RoleBadge from "./RoleBadge";

export interface EventLinks {
  article?: string;
  youtube?: string;
  linkedin?: string;
  facebook?: string;
  other?: string;
}

export interface EventItemData {
  title: string;
  role: "guest" | "speaker" | "panelist";
  date: string; // ISO
  city: string;
  description: string;
  organizer: {
    name: string;
    logo?: string | null;
  };
  photos?: string[];
  links?: EventLinks;
}

interface EventItemProps {
  event: EventItemData;
}

export default function EventItem({ event }: EventItemProps) {
  const date = new Date(event.date);
  const hasPhotos = (event.photos?.length ?? 0) > 0;
  const { links } = event;

  return (
    <TimelineItem>
      <TimelinePoint className="bg-brand-500 ring-4 ring-white dark:ring-gray-900" />
      <TimelineContent>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {event.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <RoleBadge role={event.role} />
              <time className="text-gray-500 dark:text-gray-400" dateTime={date.toISOString()}>
                {date.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          {/* Location directly below the event name (force new line) */}
          <div className="mt-1 flex w-full items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
            <FaLocationDot className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
            <span className="truncate max-w-[18rem] sm:max-w-none">{event.city}</span>
          </div>

          {/* Organizer row */}
          <div className="mt-2 flex w-full items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            {event.organizer?.logo ? (
              <img
                src={event.organizer.logo}
                alt={`${event.organizer.name} logo`}
                className="h-4 w-4 rounded-sm object-contain bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <FaUserGroup className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
            )}
            <span className="truncate max-w-[18rem] sm:max-w-none">{event.organizer?.name}</span>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {event.description}
          </p>

          {hasPhotos && (
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {event.photos!.slice(0, 3).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${event.title} photo ${i + 1}`}
                  className="h-28 w-full rounded-lg object-cover sm:h-32"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {links && Object.values(links).some(Boolean) && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {links.article && (
                <a
                  href={links.article}
                  className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 hover:text-brand-600 hover:border-brand-200 dark:border-gray-700 dark:text-gray-300 dark:hover:text-brand-400"
                >
                  Related article
                  <FaArrowRight className="h-3 w-3" />
                </a>
              )}
              {links.youtube && (
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-400/10 dark:text-red-400"
                >
                  <FaYoutube className="h-3.5 w-3.5" /> YouTube
                </a>
              )}
              {links.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 hover:bg-sky-100 dark:bg-sky-400/10 dark:text-sky-400"
                >
                  <FaLinkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              )}
              {links.facebook && (
                <a
                  href={links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-400/10 dark:text-blue-400"
                >
                  <FaFacebook className="h-3.5 w-3.5" /> Facebook
                </a>
              )}
              {links.other && (
                <a
                  href={links.other}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 hover:text-brand-600 hover:border-brand-200 dark:border-gray-700 dark:text-gray-300 dark:hover:text-brand-400"
                >
                  <FaArrowUpRightFromSquare className="h-3 w-3" /> Link
                </a>
              )}
            </div>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}
