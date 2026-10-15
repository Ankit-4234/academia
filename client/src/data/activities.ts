import type { WhyPoint } from "../types";

export interface Activity extends WhyPoint {
  href: string;
}

export const activities: Activity[] = [
  {
    title: "Clubs",
    text: "Join the IT Club or the Sports Club and take part in student-led activities.",
    href: "/clubs",
  },
  {
    title: "Sports Week & GoalFest",
    text: "Friendly matches between programs, Sports Week and tournaments such as GoalFest 2026.",
    href: "/events/sports-week-2082",
  },
  {
    title: "Orientation & Festivals",
    text: "Orientation for each new batch and celebrations such as Dashain Fest.",
    href: "/events/dashain-fest-2026",
  },
  {
    title: "Incubation Program",
    text: "Guidance, mentorship and support that help students turn ideas into ventures.",
    href: "https://www.academiacollege.edu.np/blog/incubation-program",
  },
  {
    title: "Seminars & Workshops",
    text: "Regular seminars, workshops, field visits and guest lectures.",
    href: "/programs/bsc-csit",
  },
  {
    title: "Student Projects",
    text: "Student-built projects such as Surakshit Ghar, a generative 3D architecture project for Nepal.",
    href: "/events/surakshit-ghar",
  },
];
