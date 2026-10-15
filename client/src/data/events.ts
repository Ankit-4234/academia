import type { CampusEvent } from "../types";
import { imageBase } from "./images";

const storage = `${imageBase}/storage`;

// Campus news and events published on the college website (newest first).
export const campusEvents: CampusEvent[] = [
  {
    slug: "bbm-students-take-the-spotlight",
    title: "Academia BBM Students Take the Spotlight",
    date: "2026-10-10",
    category: "Academics",
    summary:
      "BBM 1st Semester students presented insightful case studies on Nepalese business houses and industries.",
    image: {
      src: `${storage}/sports/gallery/krishna.jpg`,
      alt: "BBM first-semester students presenting case studies at Academia",
    },
    sourceUrl: "https://academiacollege.edu.np/blog/bbm-spotlight",
  },
  {
    slug: "dashain-fest-2026",
    title: "Dashain Fest 2026",
    date: "2026-10-05",
    category: "Festival",
    summary:
      "Academia BBM students organised a vibrant Dashain Fest, bringing students and the college community together to celebrate one of Nepal's most cherished festivals.",
    image: {
      src: `${storage}/sports/gallery/dashain.jpg`,
      alt: "Students celebrating Dashain Fest 2026 at Academia",
    },
    sourceUrl: "https://academiacollege.edu.np/blog/dashai-2083",
  },
  {
    slug: "student-orientation-2083",
    title: "Student Orientation 2083: A New Journey Begins",
    date: "2026-09-19",
    category: "Orientation",
    summary:
      "An orientation programme for the 2083 batch, bringing together newly admitted B.Sc. CSIT, BCA, BBM and BBS students to learn about Academia's environment, culture and values.",
    image: {
      src: `${storage}/sports/gallery/orient2083.jpg`,
      alt: "Newly admitted students at the Academia orientation for the 2083 batch",
    },
    sourceUrl: "https://academiacollege.edu.np/blog/student-orientation-2083",
  },
  {
    slug: "surakshit-ghar",
    title: "Surakshit Ghar: An Innovative Project",
    date: "2026-08-08",
    category: "Innovation",
    summary:
      "Surakshit Ghar, a generative 3D architecture and grassroots BIM co-pilot for Nepal, is an academic project developed by Academia students.",
    image: {
      src: `${storage}/sports/gallery/build1.jpg`,
      alt: "Students presenting the Surakshit Ghar project",
    },
    sourceUrl: "https://academiacollege.edu.np/blog/surakshit-ghar",
  },
  {
    slug: "friendly-match-bsc-csit-vs-bca",
    title: "Friendly Match: B.Sc. CSIT vs. BCA",
    date: "2026-03-16",
    category: "Sports",
    summary: "A friendly match between B.Sc. CSIT and BCA students. The final score was 3–1.",
    image: {
      src: `${storage}/gallery/VsKQ9K1023pwsjEc5iW9cGVo9EfNLScbJ9XSZ5xI.jpg`,
      alt: "B.Sc. CSIT and BCA students at their friendly match",
    },
    sourceUrl: "https://www.academiacollege.edu.np/gallery/friendly-match-bsc-csit-vs-bca-3-1",
  },
  {
    slug: "goalfest-2026",
    title: "GoalFest 2026: Academia in Semi Final",
    date: "2026-03-03",
    category: "Sports",
    summary: "Academia reached the semi-final at GoalFest 2026.",
    image: {
      src: `${storage}/gallery/DhmqqCHODkQ2JqvafdUeZLaGQjvITfcYwzeAF2tG.jpg`,
      alt: "The Academia team at GoalFest 2026",
    },
    sourceUrl: "https://www.academiacollege.edu.np/gallery/goalfest-2026-academia-in-semi-final",
  },
  {
    slug: "sports-week-2082",
    title: "Sports Week 2082 Concluded",
    date: "2026-03-02",
    category: "Sports",
    summary: "Photos from Sports Week 2082 at Academia International College.",
    image: {
      src: `${storage}/gallery/ECXVPYp2PiXdM35yuTjmZYMUtIQBVTYuYZNKiuIy.jpg`,
      alt: "Students taking part in Sports Week 2082 at Academia",
    },
    sourceUrl: "https://www.academiacollege.edu.np/gallery/sports-week-2082-concluded",
  },
];

export function getEvent(slug: string): CampusEvent | undefined {
  return campusEvents.find((event) => event.slug === slug);
}
