import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "../types";
import Img from "./Img";

export default function PhotoGallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // The native <dialog> gives us focus trapping and Escape-to-close for free.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const step = (delta: number) =>
    setIndex((current) => (current === null ? current : (current + delta + items.length) % items.length));

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  };

  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) setIndex(null);
  };

  const current = index !== null ? items[index] : null;

  return (
    <>
      <ul className="gallery">
        {items.map((item, itemIndex) => (
          <li key={item.image.src}>
            <button
              type="button"
              className="gallery__item"
              onClick={() => setIndex(itemIndex)}
              aria-label={`Open photo: ${item.image.title ?? item.image.alt}`}
            >
              <Img image={item.image} />
              <span className="gallery__caption">{item.image.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onKeyDown={onKeyDown}
        onClick={onBackdropClick}
      >
        {current && (
          <figure className="lightbox__figure">
            <Img image={current.image} loading="eager" className="lightbox__image" />
            <figcaption>
              {current.image.title}
              <span className="lightbox__count">
                {(index ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox__btn lightbox__close" onClick={() => setIndex(null)} aria-label="Close">
          <X size={22} aria-hidden="true" />
        </button>
        <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Previous photo">
          <ChevronLeft size={26} aria-hidden="true" />
        </button>
        <button type="button" className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Next photo">
          <ChevronRight size={26} aria-hidden="true" />
        </button>
      </dialog>
    </>
  );
}
