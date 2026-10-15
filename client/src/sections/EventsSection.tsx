import Button from "../components/Button";
import EventCard from "../components/EventCard";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { campusEvents } from "../data/events";

export default function EventsSection() {
  return (
    <section className="section section--alt" aria-labelledby="events-title">
      <div className="container">
        <SectionHeading
          id="events-title"
          align="center"
          eyebrow="Events"
          title="Latest News & Events"
          description="Recent happenings at Academia International College."
        />
        <ul className="card-grid card-grid--3">
          {campusEvents.slice(0, 3).map((event, index) => (
            <li key={event.slug}>
              <ScrollReveal delay={index * 0.07} className="fill">
                <EventCard event={event} />
              </ScrollReveal>
            </li>
          ))}
        </ul>
        <div className="section-action">
          <Button href="/events" variant="secondary">
            All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
