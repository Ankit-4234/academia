import type { SiteImage } from "../types";

// These point to the college's own website for the preview.
// Before launch, get permission and download them into client/public/images.
export const imageBase = "https://www.academiacollege.edu.np";

export const heroImage: SiteImage = {
  src: `${imageBase}/storage/sports/gallery/orient2083.jpg`,
  alt: "Newly admitted students at the Academia orientation programme for the 2083 batch",
  title: "Student Orientation 2083",
};

export const aboutImage: SiteImage = {
  src: `${imageBase}/img/nhub.jpg`,
  alt: "Academia International College, a national hub for students",
  title: "National hub of education",
};

export const glimpseBackground: SiteImage = heroImage;
