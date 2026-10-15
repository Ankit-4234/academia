import { Check } from "lucide-react";
import Img from "../components/Img";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import Seo, { pageTitle } from "../components/Seo";
import { aboutPoints, coreValues } from "../data/highlights";
import { aboutImage } from "../data/images";
import Glimpse from "../sections/Glimpse";
import Partners from "../sections/Partners";
import WhyAcademia from "../sections/WhyAcademia";

export default function About() {
  return (
    <>
      <Seo
        title={pageTitle("About Us")}
        description="Learn about Academia International College: our story, vision, mission, values and what makes us different."
        path="/about"
      />
      <PageHeader
        eyebrow="Who We Are"
        title="About Academia"
        subtitle="Learn who we are, what we stand for and the values that drive us forward."
        crumbs={[{ label: "About" }]}
      />

      <section className="section">
        <div className="container about__grid">
          <ScrollReveal direction="left" className="about__media">
            <Img image={aboutImage} />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <SectionHeading eyebrow="Our College" title="Shaping Futures at Academia" />
            <p>
              Academia International College is one of the premier institutions dedicated to
              providing quality education in a fully integrated, multicultural environment. The
              college occupies a spacious area at Lalitpur with excellent facilities, and it is one
              of the pioneer institutes in Nepal to introduce the B.Sc. CSIT program offered by
              Tribhuvan University.
            </p>
            <p>
              We are committed to achieving excellence in the academic development of students and
              professionals. Our programs are designed to be rigorous, relevant and fulfilling,
              preparing graduates who are ready to lead and contribute in a competitive global
              landscape.
            </p>
            <ul className="check-list">
              {aboutPoints.map((point) => (
                <li key={point}>
                  <Check size={20} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <Glimpse />

      <section id="vision" className="section" aria-labelledby="vision-title">
        <div className="container">
          <SectionHeading
            id="vision-title"
            align="center"
            eyebrow="Our Foundation"
            title="Vision, Mission & Values"
          />
          <ul className="card-grid card-grid--3">
            {[
              {
                title: "Vision",
                text: "To be a reputable and creditable college, producing quality graduates at a competitive level in line with the international education philosophy.",
              },
              {
                title: "Mission",
                text: "To serve society and enhance quality of life through excellence and leadership in vocationally and professionally relevant education, research and consultancy.",
              },
              {
                title: "Values",
                text: "We act with integrity and social responsibility, constantly setting high standards and striving to exceed them while valuing diverse people and perspectives.",
              },
            ].map((item, index) => (
              <li key={item.title}>
                <ScrollReveal delay={index * 0.07} className="fill">
                  <article className="info-tile">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="values" className="section section--alt" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading
            id="values-title"
            align="center"
            eyebrow="Our Core Framework"
            title="The 4C Values"
            description="Four competencies at the heart of every program."
          />
          <ul className="card-grid card-grid--4">
            {coreValues.map((value, index) => (
              <li key={value.title}>
                <ScrollReveal delay={index * 0.06} className="fill">
                  <article className="info-tile">
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyAcademia />
      <Partners />
    </>
  );
}
