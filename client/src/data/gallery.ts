import type { GalleryItem } from "../types";
import { imageBase } from "./images";

const storage = `${imageBase}/storage`;

export const galleryItems: GalleryItem[] = [
  {
    image: {
      src: `${storage}/gallery/ECXVPYp2PiXdM35yuTjmZYMUtIQBVTYuYZNKiuIy.jpg`,
      alt: "Students taking part in Sports Week 2082 at Academia",
      title: "Sports Week 2082",
    },
    date: "2026-03-02",
    albumUrl: "https://www.academiacollege.edu.np/gallery/sports-week-2082-concluded",
  },
  {
    image: {
      src: `${storage}/gallery/DhmqqCHODkQ2JqvafdUeZLaGQjvITfcYwzeAF2tG.jpg`,
      alt: "The Academia team at GoalFest 2026",
      title: "GoalFest 2026",
    },
    date: "2026-03-03",
    albumUrl: "https://www.academiacollege.edu.np/gallery/goalfest-2026-academia-in-semi-final",
  },
  {
    image: {
      src: `${storage}/gallery/VsKQ9K1023pwsjEc5iW9cGVo9EfNLScbJ9XSZ5xI.jpg`,
      alt: "B.Sc. CSIT and BCA students at their friendly match",
      title: "B.Sc. CSIT vs BCA friendly match",
    },
    date: "2026-03-16",
    albumUrl: "https://www.academiacollege.edu.np/gallery/friendly-match-bsc-csit-vs-bca-3-1",
  },
  {
    image: {
      src: `${storage}/sports/gallery/dashain.jpg`,
      alt: "Students celebrating Dashain Fest 2026 at Academia",
      title: "Dashain Fest 2026",
    },
    date: "2026-10-05",
  },
  {
    image: {
      src: `${storage}/sports/gallery/orient2083.jpg`,
      alt: "Newly admitted students at the Academia orientation for the 2083 batch",
      title: "Student Orientation 2083",
    },
    date: "2026-09-19",
  },
  {
    image: {
      src: `${storage}/sports/gallery/krishna.jpg`,
      alt: "BBM first-semester students presenting case studies at Academia",
      title: "BBM student presentations",
    },
    date: "2026-10-10",
  },
  {
    image: {
      src: `${storage}/sports/gallery/build1.jpg`,
      alt: "Students presenting the Surakshit Ghar project",
      title: "Surakshit Ghar project",
    },
    date: "2026-08-08",
  },
];
