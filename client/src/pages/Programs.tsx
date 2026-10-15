import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import ProgramCard from "../components/ProgramCard";
import ScrollReveal from "../components/ScrollReveal";
import Seo, { pageTitle } from "../components/Seo";
import { programs } from "../data/programs";

export default function Programs() {
  return (
    <>
      <Seo
        title={pageTitle("Our Programs")}
        description="Explore B.Sc. CSIT, BCA, BBM, BBS and MBS programs at Academia International College, affiliated with Tribhuvan University."
        path="/programs"
      />
      <PageHeader
        eyebrow="Our Programs"
        title="Programs Under Tribhuvan University"
        subtitle="Choose from computing and business management programs at bachelor's and master's level."
        crumbs={[{ label: "Programs" }]}
      />
      <section className="section">
        <div className="container">
          <ul className="program-grid">
            {programs.map((program, index) => (
              <li key={program.slug}>
                <ScrollReveal delay={index * 0.06} className="fill">
                  <ProgramCard program={program} />
                </ScrollReveal>
              </li>
            ))}
          </ul>
          <div className="cta-band">
            <div>
              <h2>Ready to take the next step?</h2>
              <p>Send an admission enquiry and the college will get in touch.</p>
            </div>
            <Button href="/apply">Apply Now</Button>
          </div>
        </div>
      </section>
    </>
  );
}
