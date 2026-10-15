import { CheckCircle2, Clock, ExternalLink, GraduationCap } from "lucide-react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import { getProgram } from "../data/programs";
import NotFound from "./NotFound";

export default function ProgramDetail() {
  const { slug = "" } = useParams();
  const program = getProgram(slug);

  if (!program) return <NotFound />;

  return (
    <>
      <Seo
        title={pageTitle(program.code)}
        description={`${program.name} at Academia International College. ${program.summary}`}
        path={`/programs/${program.slug}`}
      />
      <PageHeader
        eyebrow="Program"
        title={program.name}
        subtitle={program.summary}
        crumbs={[{ label: "Programs", to: "/programs" }, { label: program.code }]}
      />

      <section className="section">
        <div className="container detail-layout">
          <div className="prose">
            <h2>Overview</h2>
            {program.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {program.objectives && (
              <>
                <h2>Objectives</h2>
                <ul className="check-list">
                  {program.objectives.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={20} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {program.careers && (
              <>
                <h2>Career prospects</h2>
                <p>{program.careers}</p>
              </>
            )}

            {program.highlights && (
              <>
                <h2>Why {program.code} at Academia?</h2>
                <ul className="check-list">
                  {program.highlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={20} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="side-card" aria-label="Program summary">
            <h2>At a glance</h2>
            <ul className="side-card__list">
              <li>
                <GraduationCap size={18} aria-hidden="true" />
                <span>Affiliated with Tribhuvan University</span>
              </li>
              {program.duration && (
                <li>
                  <Clock size={18} aria-hidden="true" />
                  <span>{program.duration}</span>
                </li>
              )}
            </ul>
            <Button href={`/apply?program=${program.slug}`}>Apply for {program.code}</Button>
            <Button href={program.officialUrl} variant="secondary">
              Syllabus on official site <ExternalLink size={16} aria-hidden="true" />
            </Button>
            {program.prospectusUrl && (
              <Button href={program.prospectusUrl} variant="secondary">
                Download prospectus
              </Button>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
