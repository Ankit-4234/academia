import Button from "../components/Button";
import NoticeCard from "../components/NoticeCard";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { notices } from "../data/notices";

export default function NoticesSection() {
  return (
    <section className="section" aria-labelledby="notices-title">
      <div className="container">
        <SectionHeading
          id="notices-title"
          align="center"
          eyebrow="Notices"
          title="Recent Notices"
          description="Results, exam routines and announcements."
        />
        <ul className="card-grid card-grid--4">
          {notices.slice(0, 4).map((notice, index) => (
            <li key={notice.slug}>
              <ScrollReveal delay={index * 0.06} className="fill">
                <NoticeCard notice={notice} />
              </ScrollReveal>
            </li>
          ))}
        </ul>
        <div className="section-action">
          <Button href="/notices" variant="secondary">
            All Notices
          </Button>
        </div>
      </div>
    </section>
  );
}
