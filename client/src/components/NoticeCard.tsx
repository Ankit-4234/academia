import { ArrowRight } from "lucide-react";
import { formatDate } from "../lib/date";
import type { Notice } from "../types";
import SmartLink from "./SmartLink";

export default function NoticeCard({ notice }: { notice: Notice }) {
  return (
    <article className={`notice-card${notice.important ? " notice-card--important" : ""}`}>
      <div className="notice-card__top">
        <span className="notice-card__badge">Notice</span>
        <span className="notice-card__chip">{notice.category}</span>
        {notice.important && <span className="notice-card__chip notice-card__chip--important">Important</span>}
      </div>
      <h3>{notice.title}</h3>
      <p className="notice-card__meta">
        <time dateTime={notice.date}>{formatDate(notice.date)}</time> · {notice.label}
      </p>
      <p className="notice-card__summary">{notice.summary}</p>
      <SmartLink
        className="notice-card__link"
        href={`/notices/${notice.slug}`}
        aria-label={`Read more: ${notice.title}`}
      >
        Read More
        <ArrowRight size={16} aria-hidden="true" />
      </SmartLink>
    </article>
  );
}
