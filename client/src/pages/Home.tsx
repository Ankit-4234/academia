import { useMemo } from "react";
import InfoBar from "../components/InfoBar";
import Seo from "../components/Seo";
import { site, socials } from "../data/site";
import About from "../sections/About";
import CalendarSection from "../sections/CalendarSection";
import EventsSection from "../sections/EventsSection";
import Experiences from "../sections/Experiences";
import Facilities from "../sections/Facilities";
import GalleryGrid from "../sections/GalleryGrid";
import Glimpse from "../sections/Glimpse";
import Hero from "../sections/Hero";
import NoticesSection from "../sections/NoticesSection";
import Partners from "../sections/Partners";
import Programs from "../sections/Programs";
import StudentLife from "../sections/StudentLife";
import WhyAcademia from "../sections/WhyAcademia";

export default function Home() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      name: site.name,
      url: site.website,
      logo: site.logo,
      email: site.email,
      telephone: "+977-1-5425393",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gwarko Chowk, Lalitpur-7",
        addressCountry: "NP",
      },
      sameAs: socials.filter((social) => social.label !== "YouTube").map((social) => social.href),
    }),
    []
  );

  return (
    <>
      <Seo
        title="Academia International College | Kathmandu Valley, Nepal"
        description="Academia International College, affiliated with Tribhuvan University, offers B.Sc. CSIT, BCA, BBM, BBS and MBS programs in the Kathmandu Valley, Nepal."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <InfoBar />
      <Glimpse />
      <About />
      <Programs />
      <WhyAcademia alt />
      <Facilities />
      <StudentLife limit={3} />
      <EventsSection />
      <NoticesSection />
      <CalendarSection />
      <GalleryGrid />
      <Experiences alt />
      <Partners alt={false} />
    </>
  );
}
