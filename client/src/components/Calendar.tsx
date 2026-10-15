import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatRange, monthLabel, startOfToday, toISO } from "../lib/date";
import type { AcademicDate } from "../types";

const WEEKDAYS = [
  { short: "Sun", full: "Sunday" },
  { short: "Mon", full: "Monday" },
  { short: "Tue", full: "Tuesday" },
  { short: "Wed", full: "Wednesday" },
  { short: "Thu", full: "Thursday" },
  { short: "Fri", full: "Friday" },
  { short: "Sat", full: "Saturday" },
];

const KIND_LABEL: Record<AcademicDate["kind"], string> = {
  holiday: "Holiday",
  deadline: "Deadline",
  exam: "Examination",
};

export default function Calendar({ dates }: { dates: AcademicDate[] }) {
  const today = startOfToday();
  const todayISO = toISO(today);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leading = new Date(year, month, 1).getDay();

  const cells: (Date | null)[] = [
    ...Array.from({ length: leading }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => new Date(year, month, index + 1)),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (Date | null)[][] = [];
  for (let index = 0; index < cells.length; index += 7) weeks.push(cells.slice(index, index + 7));

  const monthStart = toISO(new Date(year, month, 1));
  const monthEnd = toISO(new Date(year, month, daysInMonth));
  const monthDates = dates.filter((item) => item.start <= monthEnd && (item.end ?? item.start) >= monthStart);

  const eventsOn = (day: Date) => {
    const iso = toISO(day);
    return dates.filter((item) => item.start <= iso && iso <= (item.end ?? item.start));
  };

  const shiftMonth = (delta: number) => setCursor(new Date(year, month + delta, 1));

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button type="button" className="icon-btn" onClick={() => shiftMonth(-1)} aria-label="Previous month">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <h2 aria-live="polite">{monthLabel(cursor)}</h2>
        <button type="button" className="icon-btn" onClick={() => shiftMonth(1)} aria-label="Next month">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="calendar__scroll">
        <table className="calendar__table">
          <caption className="visually-hidden">Academic calendar for {monthLabel(cursor)}</caption>
          <thead>
            <tr>
              {WEEKDAYS.map((day) => (
                <th key={day.full} scope="col" abbr={day.full}>
                  {day.short}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => {
                  if (!day) return <td key={dayIndex} className="calendar__cell calendar__cell--empty" />;
                  const items = eventsOn(day);
                  const iso = toISO(day);
                  return (
                    <td
                      key={dayIndex}
                      className={`calendar__cell${iso === todayISO ? " is-today" : ""}${items.length ? " has-events" : ""}`}
                    >
                      <span className="calendar__day">{day.getDate()}</span>
                      {items.length > 0 && (
                        <>
                          <span className="calendar__dots" aria-hidden="true">
                            {items.map((item) => (
                              <span key={item.id} className={`dot dot--${item.kind}`} />
                            ))}
                          </span>
                          <span className="visually-hidden">: {items.map((item) => item.title).join(", ")}</span>
                        </>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="calendar__legend" aria-label="Legend">
        {(Object.keys(KIND_LABEL) as AcademicDate["kind"][]).map((kind) => (
          <li key={kind}>
            <span className={`dot dot--${kind}`} aria-hidden="true" /> {KIND_LABEL[kind]}
          </li>
        ))}
      </ul>

      <div className="calendar__agenda">
        <h3>In {monthLabel(cursor)}</h3>
        {monthDates.length === 0 ? (
          <p className="empty">No dates are listed for this month.</p>
        ) : (
          <ul>
            {monthDates.map((item) => (
              <li key={item.id}>
                <span className={`dot dot--${item.kind}`} aria-hidden="true" />
                <div>
                  <p className="calendar__agenda-title">{item.title}</p>
                  <p className="calendar__agenda-detail">
                    {formatRange(item.start, item.end)} · {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
