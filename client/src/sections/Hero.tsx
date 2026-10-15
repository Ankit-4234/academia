import { Award } from "lucide-react";
import Button from "../components/Button";
import Img from "../components/Img";
import ScrollReveal from "../components/ScrollReveal";
import { heroImage } from "../data/images";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <ScrollReveal direction="left" className="hero__content">
          <p className="hero__badge">
            <Award size={16} aria-hidden="true" />
            {site.award}
          </p>
          <h1 id="hero-title">
            Where Knowledge Meets <span>Innovation</span>
          </h1>
          <p className="hero__lead">
            {site.name}, affiliated with {site.affiliation}, offers B.Sc. CSIT, BCA, BBM, BBS and
            MBS programs in the heart of the Kathmandu Valley.
          </p>
          <div className="hero__actions">
            <Button href="/apply">Apply Now</Button>
            <Button href="/programs" variant="secondary">
              Explore Programs
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1} className="hero__media">
          <Img image={heroImage} loading="eager" />
        </ScrollReveal>
      </div>
    </section>
  );
}
