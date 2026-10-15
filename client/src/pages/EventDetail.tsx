import { CalendarDays, Tag } from "lucide-react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import EventCard from "../components/EventCard";
import Img from "../components/Img";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import { campusEvents, getEvent } from "../data/events";
import { formatDate } from "../lib/date";
import NotFound from "./NotFound";

export default function EventDetail() {
  const { slug = "" } = useParams();
  const event = getEvent(slug);

  if (!event) return <NotFound />;

  const related = campusEvents.filter((item) => item.slug !== event.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={pageTitle(event.title)}
        description={event.summary}
        path={`/events/${event.slug}`}
        image={event.image.src}
      />
      <PageHeader
        eyebrow={event.category}
        title={event.title}
        crumbs={[{ label: "Events", to: "/events" }, { label: event.title }]}
      />

      <section className="section">
        <div className="container detail-layout">
          <div>
            <div className="detail-image">
              <Img image={event.image} loading="eager" />
            </div>
            <div className="prose">
              <p>{event.summary}</p>
              <Button href={event.sourceUrl} variant="secondary">
                Read the full story
              </Button>
            </div>
          </div>
          <aside className="side-card" aria-label="Event details">
            <h2>Details</h2>
            <ul className="side-card__list">
              <li>
                <CalendarDays size={18} aria-hidden="true" />
                <time dateTime={event.date}>{formatDate(event.date)}</time>
              </li>
              <li>
                <Tag size={18} aria-hidden="true" />
                <span>{event.category}</span>
              </li>
            </ul>
            <Button href="/events">All events</Button>
          </aside>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="related-title">
        <div className="container">
          <h2 id="related-title">More from campus</h2>
          <ul className="card-grid card-grid--3 spaced">
            {related.map((item) => (
              <li key={item.slug}>
                <EventCard event={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
