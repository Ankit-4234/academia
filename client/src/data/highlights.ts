import type { Highlight, WhyPoint } from "../types";
import { site } from "./site";

export const highlights: Highlight[] = [
  {
    id: "information",
    icon: "building",
    title: "College Information",
    text: "Affiliated with Tribhuvan University in the heart of the Kathmandu Valley.",
    href: "/about",
    linkLabel: "About Academia",
  },
  {
    id: "environment",
    icon: "users",
    title: "College Environment",
    text: "A dynamic academic atmosphere that encourages curiosity, creativity and holistic development.",
    href: "/student-life",
    linkLabel: "Student life",
  },
  {
    id: "facilities",
    icon: "library",
    title: "Facilities",
    text: "Modern labs, a library and learning spaces that support research and academic excellence.",
    href: "/why-academia#facilities",
    linkLabel: "See facilities",
  },
  {
    id: "scholarships",
    icon: "scholarship",
    title: "Scholarships",
    text: "Schemes recognising academic excellence, talent and financial need.",
    href: site.scholarshipUrl,
    linkLabel: "Financial aid",
  },
];

export const aboutPoints: string[] = [
  "One of the pioneer institutes in Nepal to offer the B.Sc. CSIT programme",
  "Affiliated with Tribhuvan University",
  "A multicultural environment for modern, quality higher education",
  "Scholarship schemes for deserving learners",
];

export const whyPoints: WhyPoint[] = [
  {
    title: "TU-Affiliated Programs",
    text: "All programs are affiliated with Tribhuvan University, giving nationally accepted credentials.",
  },
  {
    title: "Experienced Faculty",
    text: "Faculty bring academic expertise and real-world industry experience to the classroom.",
  },
  {
    title: "Modern Infrastructure",
    text: "Computer labs, a library and spacious classrooms create an environment for focused learning.",
  },
  {
    title: "Multicultural Environment",
    text: "Students from diverse backgrounds come together, building an inclusive campus culture.",
  },
  {
    title: "Career Readiness",
    text: "Internship guidance and industry partnerships support students as they start their careers.",
  },
  {
    title: "Track Record of Toppers",
    text: "Academia regularly produces university toppers and high achievers.",
  },
];

export const coreValues: WhyPoint[] = [
  {
    title: "Critical Thinking",
    text: "Students are encouraged to question, analyse and reason independently to solve complex problems.",
  },
  {
    title: "Communication",
    text: "Written, verbal and digital expression is built into the curriculum.",
  },
  {
    title: "Collaboration",
    text: "A culture of teamwork, shared ownership and mutual respect prepares students for diverse teams.",
  },
  {
    title: "Creativity",
    text: "Students are inspired to think outside the box and bring original ideas to life.",
  },
];
