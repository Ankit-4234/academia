import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { whyPoints } from "../data/highlights";

export default function WhyAcademia({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`section${alt ? " section--alt" : ""}`} aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          id="why-title"
          align="center"
          eyebrow="Why Academia"
          title="What Makes Us Different"
          description="An environment where students grow academically, professionally and personally."
        />
        <ul className="card-grid card-grid--3">
          {whyPoints.map((point, index) => (
            <li key={point.title}>
              <ScrollReveal delay={(index % 3) * 0.06} className="fill">
                <article className="info-tile">
                  <CheckCircle2 size={24} aria-hidden="true" />
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
