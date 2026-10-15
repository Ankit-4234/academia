import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import Experiences from "../sections/Experiences";
import GalleryGrid from "../sections/GalleryGrid";
import StudentLife from "../sections/StudentLife";

export default function StudentLifePage() {
  return (
    <>
      <Seo
        title={pageTitle("Student Life")}
        description="Student life at Academia International College: clubs, sports, festivals, projects, workshops and the Incubation Program."
        path="/student-life"
      />
      <PageHeader
        eyebrow="Life at Academia"
        title="Student Life"
        subtitle="A dynamic atmosphere that encourages curiosity, creativity and holistic development."
        crumbs={[{ label: "Student Life" }]}
      />
      <StudentLife />
      <GalleryGrid />
      <Experiences alt />
    </>
  );
}
