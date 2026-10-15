import Button from "../components/Button";
import Seo, { pageTitle } from "../components/Seo";

export default function NotFound() {
  return (
    <section className="container notfound">
      <Seo title={pageTitle("Page not found")} description="The page you are looking for could not be found." />
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <div className="notfound__actions">
        <Button href="/">Back to Home</Button>
        <Button href="/programs" variant="secondary">
          Explore Programs
        </Button>
      </div>
    </section>
  );
}
