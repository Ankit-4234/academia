import { PlayCircle } from "lucide-react";
import Img from "../components/Img";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import SmartLink from "../components/SmartLink";
import { experiences } from "../data/experiences";

export default function Experiences({ alt = false }: { alt?: boolean }) {
  return (
    <section id="experiences" className={`section${alt ? " section--alt" : ""}`} aria-labelledby="exp-title">
      <div className="container">
        <SectionHeading
          id="exp-title"
          align="center"
          eyebrow="Student Experiences"
          title="Hear From Our Students"
          description="Watch students talk about their time at Academia."
        />
        <ul className="card-grid card-grid--3">
          {experiences.map((item, index) => (
            <li key={item.name}>
              <ScrollReveal delay={index * 0.07} className="fill">
                <article className="video-card">
                  <div className="video-card__media">
                    <Img image={item.image} />
                  </div>
                  <div className="video-card__body">
                    <h3>{item.name}</h3>
                    <p>{item.program}</p>
                    <SmartLink href={item.videoUrl} className="text-link">
                      <PlayCircle size={18} aria-hidden="true" /> Watch story
                    </SmartLink>
                  </div>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
