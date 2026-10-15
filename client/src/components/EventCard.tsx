import { ArrowRight, CalendarDays } from "lucide-react";
import { formatDate } from "../lib/date";
import type { CampusEvent } from "../types";
import Img from "./Img";
import SmartLink from "./SmartLink";

export default function EventCard({ event }: { event: CampusEvent }) {
  return (
    <article className="event-card">
      <div className="event-card__media">
        <Img image={event.image} />
        <span className="event-card__tag">{event.category}</span>
      </div>
      <div className="event-card__body">
        <p className="event-card__date">
          <CalendarDays size={15} aria-hidden="true" />
          <time dateTime={event.date}>{formatDate(event.date)}</time>
        </p>
        <h3>{event.title}</h3>
        <p className="event-card__summary">{event.summary}</p>
        <SmartLink
          className="event-card__link"
          href={`/events/${event.slug}`}
          aria-label={`View event: ${event.title}`}
        >
          View Event
          <ArrowRight size={16} aria-hidden="true" />
        </SmartLink>
      </div>
    </article>
  );
}
