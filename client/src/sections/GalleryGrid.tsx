import Button from "../components/Button";
import Img from "../components/Img";
import ScrollReveal, { type RevealDirection } from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/gallery";

// Layout like the reference: one tall photo on the left, three on the right.
// The left photo slides in from the left, the others from the right.
const slots: { className: string; direction: RevealDirection; delay: number }[] = [
  { className: "photo-grid__tall", direction: "left", delay: 0 },
  { className: "photo-grid__a", direction: "right", delay: 0.05 },
  { className: "photo-grid__b", direction: "right", delay: 0.12 },
  { className: "photo-grid__wide", direction: "up", delay: 0.08 },
];

export default function GalleryGrid() {
  return (
    <section className="section" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading
          id="gallery-title"
          align="center"
          eyebrow="Life at Academia"
          title="Moments That Matter"
          description="Sports, competitions and everyday campus life."
        />
        <div className="photo-grid">
          {slots.map((slot, index) => (
            <ScrollReveal key={slot.className} direction={slot.direction} delay={slot.delay} className={slot.className}>
              <figure className="photo">
                <Img image={galleryItems[index].image} />
              </figure>
            </ScrollReveal>
          ))}
        </div>
        <div className="section-action">
          <Button href="/gallery" variant="secondary">
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
