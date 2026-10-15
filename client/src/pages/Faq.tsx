import { useMemo } from "react";
import Button from "../components/Button";
import FAQAccordion from "../components/FAQAccordion";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import { faqs } from "../data/faqs";

export default function Faq() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    }),
    []
  );

  return (
    <>
      <Seo
        title={pageTitle("FAQ")}
        description="Frequently asked questions about programs, affiliation, scholarships, location, admission and facilities at Academia International College."
        path="/faq"
        jsonLd={jsonLd}
      />
      <PageHeader
        eyebrow="More"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about studying at Academia International College."
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="section">
        <div className="container container--narrow">
          <FAQAccordion items={faqs} />
          <div className="cta-band">
            <div>
              <h2>Still have a question?</h2>
              <p>Our team is happy to help.</p>
            </div>
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
