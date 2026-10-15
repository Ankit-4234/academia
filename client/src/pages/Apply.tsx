import { ExternalLink, Phone } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ApplicationForm from "../components/forms/ApplicationForm";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import Button from "../components/Button";
import { getProgram } from "../data/programs";
import { site } from "../data/site";

export default function Apply() {
  const [params] = useSearchParams();
  const requested = params.get("program") ?? "";
  const defaultProgram = getProgram(requested) ? requested : "";

  return (
    <>
      <Seo
        title={pageTitle("Apply Now")}
        description="Send an admission enquiry to Academia International College for B.Sc. CSIT, BCA, BBM, BBS or MBS."
        path="/apply"
      />
      <PageHeader
        eyebrow="Admissions"
        title="Apply Now"
        subtitle="Send your details and the admissions team will contact you."
        crumbs={[{ label: "Apply" }]}
      />

      <section className="section">
        <div className="container two-col two-col--form">
          <div>
            <h2>Application form</h2>
            <p className="note">
              Fields marked <span aria-hidden="true">*</span>
              <span className="visually-hidden">with an asterisk</span> are required.
            </p>
            <ApplicationForm key={defaultProgram} defaultProgram={defaultProgram} />
          </div>

          <aside className="side-card" aria-label="Other ways to apply">
            <h2>Other ways to apply</h2>
            <p>You can also apply through the college's official online application form.</p>
            <Button href={site.officialApplyUrl}>
              Official online application <ExternalLink size={16} aria-hidden="true" />
            </Button>
            <p className="side-card__sub">
              <Phone size={16} aria-hidden="true" /> Questions? Call {site.phones.slice(0, 3).join(", ")}
            </p>
            <Button href={site.scholarshipUrl} variant="secondary">
              Scholarship information
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}
