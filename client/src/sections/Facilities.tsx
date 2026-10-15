import Button from "../components/Button";
import FacilityCard from "../components/FacilityCard";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { facilities } from "../data/facilities";

export default function Facilities({ showLink = true, alt = false }: { showLink?: boolean; alt?: boolean }) {
  return (
    <section id="facilities" className={`section${alt ? " section--alt" : ""}`} aria-labelledby="facilities-title">
      <div className="container">
        <SectionHeading
          id="facilities-title"
          align="center"
          eyebrow="Campus & Facilities"
          title="Learning Spaces That Support You"
          description="Labs, a library and spaces for clubs and student activities."
        />
        <ul className="card-grid card-grid--4">
          {facilities.map((facility, index) => (
            <li key={facility.title}>
              <ScrollReveal delay={(index % 4) * 0.05} className="fill">
                <FacilityCard facility={facility} />
              </ScrollReveal>
            </li>
          ))}
        </ul>
        {showLink && (
          <div className="section-action">
            <Button href="/why-academia#facilities" variant="secondary">
              More about Facilities
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
