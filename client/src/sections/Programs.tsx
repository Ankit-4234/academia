import Button from "../components/Button";
import ProgramCard from "../components/ProgramCard";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { programs } from "../data/programs";

export default function Programs() {
  return (
    <section id="programs" className="section section--alt" aria-labelledby="programs-title">
      <div className="container">
        <SectionHeading
          id="programs-title"
          align="center"
          eyebrow="Our Programs"
          title="Programs Under Tribhuvan University"
          description="Five programs across computing and business management."
        />
        <ul className="program-grid">
          {programs.map((program, index) => (
            <li key={program.slug}>
              <ScrollReveal delay={index * 0.06} className="fill">
                <ProgramCard program={program} />
              </ScrollReveal>
            </li>
          ))}
        </ul>
        <div className="section-action">
          <Button href="/programs" variant="secondary">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
