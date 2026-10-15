import Button from "../components/Button";
import PartnerLogos from "../components/PartnerLogos";
import SectionHeading from "../components/SectionHeading";

export default function Partners({ alt = true }: { alt?: boolean }) {
  return (
    <section id="partners" className={`section${alt ? " section--alt" : ""}`} aria-labelledby="partners-title">
      <div className="container">
        <SectionHeading
          id="partners-title"
          align="center"
          eyebrow="Collaborations"
          title="Our Partners"
          description="Industry and institutional partnerships that connect students with practical exposure and career-ready learning."
        />
        <PartnerLogos />
        <div className="section-action">
          <Button href="https://academiacollege.edu.np/our-partners" variant="secondary">
            View All Partners
          </Button>
        </div>
      </div>
    </section>
  );
}
