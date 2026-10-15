import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import SmartLink from "../components/SmartLink";
import { activities } from "../data/activities";

export default function StudentLife({ limit }: { limit?: number }) {
  const items = limit ? activities.slice(0, limit) : activities;

  return (
    <section className="section" aria-labelledby="life-title">
      <div className="container">
        <SectionHeading
          id="life-title"
          align="center"
          eyebrow="Student Life"
          title="Life Beyond the Classroom"
          description="Clubs, sports, festivals, projects and more."
        />
        <ul className="card-grid card-grid--3">
          {items.map((activity, index) => (
            <li key={activity.title}>
              <ScrollReveal delay={(index % 3) * 0.06} className="fill">
                <article className="info-tile info-tile--link">
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                  <SmartLink href={activity.href} className="text-link" aria-label={`Learn more: ${activity.title}`}>
                    Learn more <ArrowRight size={16} aria-hidden="true" />
                  </SmartLink>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
