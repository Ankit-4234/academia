import type { Experience } from "../types";
import { imageBase } from "./images";

// Real student videos from the college website. No quotes are invented here:
// add written testimonials once the college provides them.
export const experiences: Experience[] = [
  {
    name: "Lun Maharjan",
    program: "BCA",
    videoUrl: "https://www.youtube.com/watch?v=jmC_BjSxyyU",
    image: { src: `${imageBase}/img/success-image-1.png`, alt: "Lun Maharjan, BCA student" },
  },
  {
    name: "Anusha Shrestha",
    program: "B.Sc. CSIT",
    videoUrl: "https://www.youtube.com/watch?v=EhfvoHwOSJs",
    image: { src: `${imageBase}/img/success-image-2.png`, alt: "Anusha Shrestha, B.Sc. CSIT student" },
  },
  {
    name: "Aarshee Ale Magar",
    program: "B.Sc. CSIT",
    videoUrl: "https://www.youtube.com/watch?v=W6s8MVGU9aM",
    image: { src: `${imageBase}/img/success-image-3.png`, alt: "Aarshee Ale Magar, B.Sc. CSIT student" },
  },
];
