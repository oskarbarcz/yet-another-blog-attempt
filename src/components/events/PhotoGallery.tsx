import { useEffect, useMemo, useState } from "react";
import { Modal } from "flowbite-react";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import AnimatedImage from "./AnimatedImage";

interface PhotoGalleryProps {
  photos?: string[];
  title: string;
  initialIndex?: number;
}

export default function PhotoGallery({ photos = [], title, initialIndex = 0 }: PhotoGalleryProps) {
  const hasPhotos = (photos?.length ?? 0) > 0;
  const items = useMemo(() => photos ?? [], [photos]);
  const [activeIndex, setActiveIndex] = useState(Math.min(Math.max(initialIndex, 0), Math.max(items.length - 1, 0)));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open || !hasPhotos) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        e.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % items.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, hasPhotos, items.length]);

  if (!hasPhotos) return null;

  return (
    <>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {items.slice(0, 3).map((src, i) => (
          <button
            key={i}
            type="button"
            className="block cursor-zoom-in"
            onClick={() => {
              setActiveIndex(i);
              setOpen(true);
            }}
            aria-label={`Otwórz zdjęcie ${i + 1}`}
          >
            <img
              src={src}
              alt={`${title} photo ${i + 1}`}
              className="h-28 w-full rounded-lg object-cover sm:h-32 transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Modal
        show={open}
        onClose={() => setOpen(false)}
        size="6xl"
        dismissible
        theme={{
          root: {
            show: {
              on: "flex bg-gray-900/80",
              off: "hidden",
            },
          },
          content: {
            base: "p-0",
            inner: "bg-transparent p-0 shadow-none ring-0 dark:bg-transparent",
          },
          body: { base: "p-0" },
          header: { base: "hidden" },
          footer: { base: "hidden" },
        }}
      >
        <div className="relative h-[65vh] select-none">
          <button
            type="button"
            aria-label="Poprzednie zdjęcie"
            onClick={() => setActiveIndex((i) => (i - 1 + items.length) % items.length)}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-700 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-900/70 dark:text-gray-200"
          >
            <FaArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Następne zdjęcie"
            onClick={() => setActiveIndex((i) => (i + 1) % items.length)}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-700 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-gray-900/70 dark:text-gray-200"
          >
            <FaArrowRightLong className="h-5 w-5" />
          </button>

          <AnimatedImage key={activeIndex} src={items[activeIndex]} alt={`${title} photo ${activeIndex + 1}`} />
        </div>
      </Modal>
    </>
  );
}
