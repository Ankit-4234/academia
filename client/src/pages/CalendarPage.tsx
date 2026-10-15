import Button from "../components/Button";
import Calendar from "../components/Calendar";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import { academicDates } from "../data/calendar";

export default function CalendarPage() {
  return (
    <>
      <Seo
        title={pageTitle("Event Calendar")}
        description="Academic calendar: holidays, examination form deadlines and TU board examinations at Academia International College."
        path="/calendar"
      />
      <PageHeader
        eyebrow="Events"
        title="Academic & Event Calendar"
        subtitle="Holidays, examination form deadlines and TU board examinations."
        crumbs={[{ label: "Events", to: "/events" }, { label: "Calendar" }]}
      />
      <section className="section">
        <div className="container">
          <Calendar dates={academicDates} />
          <p className="note">
            Dates follow the Gregorian calendar and the schedule published by the college. For the
            complete yearly calendar, download the official Calendar 2083.
          </p>
          <Button
            href="https://drive.google.com/file/d/1OaJ1JSp9Vqw0LDgo8IucC2uG-O3ssEmy/view?usp=sharing"
            variant="secondary"
          >
            Official Calendar 2083
          </Button>
        </div>
      </section>
    </>
  );
}
