import Button from "../components/Button";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { academicDates } from "../data/calendar";
import { formatRange, parseISO, startOfToday, toISO } from "../lib/date";

const monthFormat = new Intl.DateTimeFormat("en-GB", { month: "short" });

export default function CalendarSection() {
  const today = toISO(startOfToday());
  const upcoming = academicDates.filter((item) => (item.end ?? item.start) >= today).slice(0, 5);

  return (
    <section className="section section--alt" aria-labelledby="calendar-title">
      <div className="container calendar-teaser">
        <ScrollReveal direction="left">
          <SectionHeading
            id="calendar-title"
            eyebrow="Academic Calendar"
            title="Important Dates"
            description="Holidays, examination form deadlines and TU board examinations."
          />
          <Button href="/calendar">Open Full Calendar</Button>
        </ScrollReveal>

        <ScrollReveal direction="right">
          {upcoming.length === 0 ? (
            <p className="empty">No upcoming dates are listed right now.</p>
          ) : (
            <ul className="date-list">
              {upcoming.map((item) => {
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
        </ScrollReveal>
      </div>
    </section>
  );
}
