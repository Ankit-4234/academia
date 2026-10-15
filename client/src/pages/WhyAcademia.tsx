import { Briefcase, GraduationCap } from "lucide-react";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import { site } from "../data/site";
import Facilities from "../sections/Facilities";
import Partners from "../sections/Partners";
import WhyAcademia from "../sections/WhyAcademia";

export default function WhyAcademiaPage() {
  return (
    <>
      <Seo
        title={pageTitle("Why Join Us")}
        description="Why study at Academia International College: Tribhuvan University programs, experienced faculty, modern facilities, scholarships and career support."
        path="/why-academia"
      />
      <PageHeader
        eyebrow="Why Join Us"
        title="Why Academia"
        subtitle="Academic strength, a supportive environment and a clear path to your career."
        crumbs={[{ label: "Why Academia" }]}
      />
      <WhyAcademia />
      <Facilities showLink={false} alt />

      <section id="career" className="section" aria-labelledby="career-title">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Career Support</p>
            <h2 id="career-title">Ready for what comes next</h2>
            <p>
              B.Sc. CSIT students benefit from career counselling and a placement cell, ties with
              leading software companies, regular seminars, workshops, field visits and guest
              lectures. Partnerships with industry organisations connect students with practical
              exposure.
            </p>
            <Button href="/programs/bsc-csit" variant="secondary">
              See the B.Sc. CSIT program
            </Button>
          </div>
          <div className="side-card">
            <h2>
              <Briefcase size={20} aria-hidden="true" /> Scholarships
            </h2>
            <p>
              Academia offers scholarships that recognise academic excellence, talent and financial
              need, so that quality education stays accessible to deserving learners.
            </p>
            <Button href={site.scholarshipUrl}>
              <GraduationCap size={18} aria-hidden="true" /> Scholarship details
            </Button>
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
}
