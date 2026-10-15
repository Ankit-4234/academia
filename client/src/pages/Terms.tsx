import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import SmartLink from "../components/SmartLink";
import { site } from "../data/site";

export default function Terms() {
  return (
    <>
      <Seo title={pageTitle("Terms of Use")} description="Terms of use for the Academia International College website." path="/terms" />
      <PageHeader title="Terms of Use" crumbs={[{ label: "Terms" }]} />
      <section className="section">
        <div className="container container--narrow prose">
          <h2>Information on this website</h2>
          <p>
            This website provides general information about {site.name}. Programs, dates, notices and
            other details may change. Official notices and the college administration always take
            precedence.
          </p>
          <h2>Forms</h2>
          <p>
            Details you send through the contact, application and newsletter forms are used by the
            college to respond to your enquiry or process your request. Please only submit the
            information the forms ask for. For privacy information, see the college's{" "}
            <SmartLink href={site.privacyUrl}>Privacy Policy</SmartLink>.
          </p>
          <h2>External links</h2>
          <p>
            This website links to other sites, such as TU, partner organisations and social media.
            The college does not control those sites.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
