import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import PhotoGallery from "../components/PhotoGallery";
import Seo, { pageTitle } from "../components/Seo";
import { galleryItems } from "../data/gallery";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title={pageTitle("Gallery")}
        description="Photos from sports, competitions, orientation and campus life at Academia International College."
        path="/gallery"
      />
      <PageHeader
        eyebrow="Life at Academia"
        title="Gallery"
        subtitle="Moments that matter: sports, competitions and campus life."
        crumbs={[{ label: "Student Life", to: "/student-life" }, { label: "Gallery" }]}
      />
      <section className="section">
        <div className="container">
          <PhotoGallery items={galleryItems} />
          <div className="section-action">
            <Button href="https://www.academiacollege.edu.np/gallery" variant="secondary">
              More albums on the college website
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
