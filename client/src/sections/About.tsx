import { Check } from "lucide-react";
import Button from "../components/Button";
import Img from "../components/Img";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { aboutPoints } from "../data/highlights";
import { aboutImage } from "../data/images";
import { site } from "../data/site";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <ScrollReveal direction="left" className="about__media">
          <Img image={aboutImage} />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <SectionHeading
            id="about-title"
            eyebrow="About Academia"
            title="A Thriving Environment for Higher Education"
          />
          <p>
            Located in the heart of the Kathmandu Valley and affiliated with {site.affiliation},{" "}
            {site.name} provides quality higher education across its B.Sc. CSIT, BCA, BBM, BBS and
            MBS programs.
          </p>
          <ul className="check-list">
            {aboutPoints.map((point) => (
              <li key={point}>
                <Check size={20} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Button href="/about">Learn More About Academia</Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
