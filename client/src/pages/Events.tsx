import Button from "../components/Button";
import EventCard from "../components/EventCard";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import Seo, { pageTitle } from "../components/Seo";
import { academicDates } from "../data/calendar";
import { campusEvents } from "../data/events";
import { formatRange, parseISO, startOfToday, toISO } from "../lib/date";

const monthFormat = new Intl.DateTimeFormat("en-GB", { month: "short" });

export default function Events() {
  const today = toISO(startOfToday());
  const upcomingEvents = campusEvents.filter((event) => event.date >= today);
  const pastEvents = campusEvents.filter((event) => event.date < today);
  const upcomingDates = academicDates.filter((item) => (item.end ?? item.start) >= today);

  return (
    <>
      <Seo
        title={pageTitle("Events")}
        description="Upcoming dates, campus events and past events at Academia International College."
        path="/events"
      />
      <PageHeader
        eyebrow="Events"
        title="Events & News"
        subtitle="What is coming up and what has happened on campus."
        crumbs={[{ label: "Events" }]}
      />

      <section id="upcoming" className="section" aria-labelledby="upcoming-title">
        <div className="container">
          <h2 id="upcoming-title">Upcoming</h2>

          {upcomingEvents.length > 0 && (
            <ul className="card-grid card-grid--3 spaced">
              {upcomingEvents.map((event) => (
                <li key={event.slug}>
                  <EventCard event={event} />
                </li>
              ))}
            </ul>
          )}

          {upcomingDates.length === 0 && upcomingEvents.length === 0 ? (
            <p className="empty">No upcoming events are listed right now. Please check back soon.</p>
          ) : (
            <ul className="date-list">
              {upcomingDates.map((item) => {
                const start = parseISO(item.start);
                return (
                  <li key={item.id}>
                    <div className="date-list__badge" aria-hidden="true">
                      <span>{monthFormat.format(start)}</span>
                      <strong>{start.getDate()}</strong>
                    </div>
                    <div>
                      <p className="date-list__title">{item.title}</p>
                      <p className="date-list__detail">
                        {item.detail} · {formatRange(item.start, item.end)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="section-action section-action--left section-action--gap">
            <Button href="/calendar" variant="secondary">
              Open Event Calendar
            </Button>
            <Button href="https://www.academiacollege.edu.np/web/events" variant="secondary">
              Official events page
            </Button>
          </div>
        </div>
      </section>

      <section id="past" className="section section--alt" aria-labelledby="past-title">
        <div className="container">
          <h2 id="past-title">Past events</h2>
          <ul className="card-grid card-grid--3 spaced">
            {pastEvents.map((event, index) => (
              <li key={event.slug}>
                <ScrollReveal delay={(index % 3) * 0.06} className="fill">
                  <EventCard event={event} />
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
