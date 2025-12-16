import { useEffect, useState } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
}

export default function AnimatedImage({ src, alt }: AnimatedImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className="flex h-full items-center justify-center p-2">
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`max-h-[80vh] w-auto max-w-full object-contain transition-all duration-300 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-[0.99]"
        }`}
      />
    </div>
  );
}
