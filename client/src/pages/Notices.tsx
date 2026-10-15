import { useMemo, useState } from "react";
import Button from "../components/Button";
import NoticeCard from "../components/NoticeCard";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import { notices } from "../data/notices";

const programFilters = ["BBM", "BBS", "BCA", "B.Sc. CSIT", "MBS"];

export default function Notices() {
  const [category, setCategory] = useState("");
  const [program, setProgram] = useState("");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return notices.filter((notice) => {
      if (category && notice.category !== category) return false;
      if (program && !notice.programs.includes(program)) return false;
      if (needle && !notice.title.toLowerCase().includes(needle)) return false;
      return true;
    });
  }, [category, program, query]);

  return (
    <>
      <Seo
        title={pageTitle("Notices")}
        description="Latest notices from Academia International College: results, exam routines, exam forms and announcements."
        path="/notices"
      />
      <PageHeader
        eyebrow="More"
        title="Latest Notices"
        subtitle="Stay updated with notices and announcements from Academia International College."
        crumbs={[{ label: "Notices" }]}
      />

      <section className="section">
        <div className="container">
          <form className="filters" role="search" aria-label="Filter notices" onSubmit={(event) => event.preventDefault()}>
            <div className="field">
              <label htmlFor="notice-search">Search</label>
              <input
                id="notice-search"
                type="search"
                placeholder="Search notices"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="notice-category">Category</label>
              <select id="notice-category" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">All categories</option>
                <option value="University">University</option>
                <option value="Internal">Internal</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="notice-program">Program</label>
              <select id="notice-program" value={program} onChange={(event) => setProgram(event.target.value)}>
                <option value="">All programs</option>
                {programFilters.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <p className="results-count" role="status">
            {filtered.length} {filtered.length === 1 ? "notice" : "notices"}
          </p>

          {filtered.length === 0 ? (
            <p className="empty">No notices match your filters.</p>
          ) : (
            <ul className="card-grid card-grid--3">
              {filtered.map((notice) => (
                <li key={notice.slug}>
                  <NoticeCard notice={notice} />
                </li>
              ))}
            </ul>
          )}

          <div className="section-action">
            <Button href="https://www.academiacollege.edu.np/web/news/A" variant="secondary">
              Full notice archive
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
