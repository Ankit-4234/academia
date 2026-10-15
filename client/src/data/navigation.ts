import type { NavChild, NavItem } from "../types";
import { programs } from "./programs";
import { site } from "./site";

const programLinks: NavChild[] = programs.map((program) => ({
  label: program.code,
  href: `/programs/${program.slug}`,
}));

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Who We Are",
    match: ["/about"],
    children: [
      { label: "About Academia", href: "/about" },
      { label: "Vision, Mission & Values", href: "/about#vision" },
      { label: "The 4C Values", href: "/about#values" },
      { label: "Our Partners", href: "/about#partners" },
    ],
  },
  {
    label: "Our Programs",
    match: ["/programs"],
    children: [{ label: "All Programs", href: "/programs" }, ...programLinks],
  },
  {
    label: "Why Join Us",
    match: ["/why-academia"],
    children: [
      { label: "Why Academia", href: "/why-academia" },
      { label: "Facilities", href: "/why-academia#facilities" },
      { label: "Career Support", href: "/why-academia#career" },
      { label: "Scholarships", href: site.scholarshipUrl },
    ],
  },
  {
    label: "Life at Academia",
    match: ["/student-life", "/clubs", "/gallery"],
    children: [
      { label: "Student Life", href: "/student-life" },
      { label: "Clubs", href: "/clubs" },
      { label: "Gallery", href: "/gallery" },
      { label: "Student Experiences", href: "/student-life#experiences" },
    ],
  },
  {
    label: "Events",
    match: ["/events", "/calendar"],
    children: [
      { label: "Upcoming Events", href: "/events#upcoming" },
      { label: "Event Calendar", href: "/calendar" },
      { label: "Past Events", href: "/events#past" },
    ],
  },
  {
    label: "More",
    match: ["/notices", "/faq"],
    children: [
      { label: "Notices", href: "/notices" },
      { label: "FAQs", href: "/faq" },
      { label: "Downloads", href: "https://www.academiacollege.edu.np/web/downloads" },
      { label: "Careers", href: "https://www.academiacollege.edu.np/web/career" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const applyLink = { label: "Apply Now", href: "/apply" };

export const footerQuickLinks: NavChild[] = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Notices", href: "/notices" },
  { label: "Contact", href: "/contact" },
  { label: "Apply", href: "/apply" },
];
