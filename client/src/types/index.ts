export interface SiteImage {
  src: string;
  alt: string;
  title?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "youtube" | "linkedin";
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
  /** Path prefixes that mark this item as "active". */
  match?: string[];
}

export interface Program {
  slug: string;
  code: string;
  name: string;
  summary: string;
  duration?: string;
  overview: string[];
  objectives?: string[];
  careers?: string;
  highlights?: string[];
  officialUrl: string;
  prospectusUrl?: string;
}

export interface Partner {
  name: string;
  href: string;
  logo: SiteImage;
}

export interface GlimpseStat {
  value: string;
  label: string;
}

export interface Highlight {
  id: string;
  icon: "building" | "users" | "library" | "scholarship";
  title: string;
  text: string;
  href: string;
  linkLabel: string;
}

export interface CampusEvent {
  slug: string;
  title: string;
  /** ISO date: YYYY-MM-DD */
  date: string;
  category: string;
  summary: string;
  image: SiteImage;
  sourceUrl: string;
}

export interface Notice {
  slug: string;
  title: string;
  /** ISO date: YYYY-MM-DD */
  date: string;
  category: "University" | "Internal";
  label: string;
  programs: string[];
  summary: string;
  fileUrl: string;
  important?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Facility {
  title: string;
  text: string;
  icon: "monitor" | "library" | "trophy" | "coffee" | "wifi" | "users" | "flask" | "briefcase";
}

export interface AcademicDate {
  id: string;
  title: string;
  detail: string;
  /** ISO date: YYYY-MM-DD */
  start: string;
  end?: string;
  kind: "holiday" | "deadline" | "exam";
}

export interface Club {
  name: string;
  description: string;
  href: string;
}

export interface GalleryItem {
  image: SiteImage;
  date?: string;
  albumUrl?: string;
}

export interface Experience {
  name: string;
  program: string;
  videoUrl: string;
  image: SiteImage;
}

export interface WhyPoint {
  title: string;
  text: string;
}
