import { ArrowRight, Clock } from "lucide-react";
import type { Program } from "../types";
import SmartLink from "./SmartLink";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="program-card">
      <p className="program-card__code">{program.code}</p>
      <h3>{program.name}</h3>
      {program.duration && (
        <p className="program-card__duration">
          <Clock size={14} aria-hidden="true" /> {program.duration}
        </p>
      )}
      <p className="program-card__summary">{program.summary}</p>
      <SmartLink
        className="program-card__link"
        href={`/programs/${program.slug}`}
        aria-label={`Learn more about ${program.code}`}
      >
        Learn More
        <ArrowRight size={16} aria-hidden="true" />
      </SmartLink>
    </article>
  );
}
