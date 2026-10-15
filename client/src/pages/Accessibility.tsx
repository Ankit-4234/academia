import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import { site } from "../data/site";

export default function Accessibility() {
  return (
    <>
      <Seo
        title={pageTitle("Accessibility")}
        description="Accessibility features of the Academia International College website."
        path="/accessibility"
      />
      <PageHeader title="Accessibility" crumbs={[{ label: "Accessibility" }]} />
      <section className="section">
        <div className="container container--narrow prose">
          <p>We want everyone to be able to use this website. It includes:</p>
          <ul className="check-list">
            <li><span>Keyboard navigation, a "skip to main content" link and visible focus outlines.</span></li>
            <li><span>Semantic page structure, headings, landmarks and descriptive link text.</span></li>
            <li><span>Text alternatives for images, and labelled, accessible forms with clear error messages.</span></li>
            <li><span>Light and dark themes with readable contrast.</span></li>
            <li><span>Reduced motion: animations are switched off if your device asks for it.</span></li>
            <li><span>A layout that adapts from large screens to small phones.</span></li>
          </ul>
          <h2>Feedback</h2>
          <p>
            If you find something hard to use, please tell us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we will work to fix it.
          </p>
        </div>
      </section>
    </>
  );
}
