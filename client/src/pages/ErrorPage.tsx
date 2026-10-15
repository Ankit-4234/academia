import Button from "../components/Button";
import Seo, { pageTitle } from "../components/Seo";

export default function ErrorPage() {
  return (
    <section className="container notfound">
      <Seo title={pageTitle("Something went wrong")} description="An unexpected error occurred." />
      <p className="eyebrow">Error</p>
      <h1>Something went wrong</h1>
      <p>This page could not be loaded. Please try again, or go back to the home page.</p>
      <Button href="/">Back to Home</Button>
    </section>
  );
}
