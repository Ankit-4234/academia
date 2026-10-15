import { CalendarDays, FileText, Tag } from "lucide-react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import { getNotice } from "../data/notices";
import { formatDate } from "../lib/date";
import NotFound from "./NotFound";

export default function NoticeDetail() {
  const { slug = "" } = useParams();
  const notice = getNotice(slug);

  if (!notice) return <NotFound />;

  return (
    <>
      <Seo
        title={pageTitle(notice.title)}
        description={notice.summary}
        path={`/notices/${notice.slug}`}
      />
      <PageHeader
        eyebrow="Notice"
        title={notice.title}
        crumbs={[{ label: "Notices", to: "/notices" }, { label: notice.label }]}
      />
      <section className="section">
        <div className="container detail-layout">
          <div className="prose">
            <p>{notice.summary}</p>
            <p>
              The full notice is published by Academia International College. Use the button to open
              or download the official document.
            </p>
            <Button href={notice.fileUrl}>
              <FileText size={18} aria-hidden="true" /> Open notice
            </Button>
          </div>
          <aside className="side-card" aria-label="Notice details">
            <h2>Details</h2>
            <ul className="side-card__list">
              <li>
                <CalendarDays size={18} aria-hidden="true" />
                <time dateTime={notice.date}>{formatDate(notice.date)}</time>
              </li>
              <li>
                <Tag size={18} aria-hidden="true" />
                <span>
                  {notice.category} · {notice.label}
                </span>
              </li>
              {notice.programs.length > 0 && (
                <li>
                  <FileText size={18} aria-hidden="true" />
                  <span>{notice.programs.join(", ")}</span>
                </li>
              )}
            </ul>
            <Button href="/notices" variant="secondary">
              All notices
            </Button>
            <Button href="https://www.academiacollege.edu.np/web/news/A" variant="secondary">
              Official notice archive
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}
