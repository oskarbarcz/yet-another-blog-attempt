import type { HTMLAttributes } from "react";

interface LightboxImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  imgClassName?: string;
}

export default function LightboxImage({
  src,
  alt = "",
  className = "",
  imgClassName = "h-auto w-full object-cover",
  ...rest
}: LightboxImageProps) {
  return (
    <div
      className={["pswp-gallery", className].filter(Boolean).join(" ")}
      {...rest}
    >
      <a href={src} data-pswp-src={src}>
        <img src={src} alt={alt} className={imgClassName} />
      </a>
    </div>
  );
}
