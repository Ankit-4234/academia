import { ExternalLink } from "lucide-react";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import Seo, { pageTitle } from "../components/Seo";
import { clubs } from "../data/clubs";

export default function Clubs() {
  return (
    <>
      <Seo
        title={pageTitle("Clubs")}
        description="Student clubs at Academia International College: the IT Club and the Sports Club."
        path="/clubs"
      />
      <PageHeader
        eyebrow="Life at Academia"
        title="Clubs"
        subtitle="Find your community beyond the classroom."
        crumbs={[{ label: "Student Life", to: "/student-life" }, { label: "Clubs" }]}
      />
      <section className="section">
        <div className="container">
          <ul className="card-grid card-grid--2">
            {clubs.map((club, index) => (
              <li key={club.name}>
                <ScrollReveal delay={index * 0.08} className="fill">
                  <article className="info-tile">
                    <h2 className="info-tile__title">{club.name}</h2>
                    <p>{club.description}</p>
                    <Button href={club.href} variant="secondary">
                      Visit {club.name} <ExternalLink size={16} aria-hidden="true" />
                    </Button>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
