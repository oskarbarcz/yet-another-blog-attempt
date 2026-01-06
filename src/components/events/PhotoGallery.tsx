import { useMemo } from "react";

interface PhotoGalleryProps {
  photos?: string[];
  title: string;
}

export default function PhotoGallery({
  photos = [],
  title,
}: PhotoGalleryProps) {
  const items = useMemo(() => photos ?? [], [photos]);
  if (!items.length) return null;

  return (
    <div className="pswp-gallery mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
      {items.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${title} photo ${i + 1}`}
          className="block h-28 w-full cursor-zoom-in rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02] sm:h-32"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}
