import { useState } from "react";
import { Modal } from "flowbite-react";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
  modalTitle?: string;
}

export default function ZoomableImage({
  src,
  alt = "",
  className = "",
  modalTitle,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group block cursor-zoom-in ${className}`}
        aria-label={alt ? `Otwórz obraz: ${alt}` : "Otwórz obraz"}
      >
        <img src={src} alt={alt} className="h-auto w-full object-cover" />
      </button>

      <Modal
        show={open}
        onClose={() => setOpen(false)}
        size="5xl"
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
          body: {
            base: "p-0",
          },
          header: {
            base: "hidden",
          },
          footer: {
            base: "hidden",
          },
        }}
      >
        <div className="flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-h-[85vh] w-auto max-w-[95vw] object-contain"
          />
        </div>
      </Modal>
    </>
  );
}
