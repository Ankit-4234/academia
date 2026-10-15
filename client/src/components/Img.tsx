import { useState, type ImgHTMLAttributes } from "react";
import type { SiteImage } from "../types";

interface ImgProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  image: SiteImage;
}

export default function Img({ image, loading = "lazy", className, ...rest }: ImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`img-fallback ${className ?? ""}`.trim()}
        role="img"
        aria-label={image.alt}
      />
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      title={image.title}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
