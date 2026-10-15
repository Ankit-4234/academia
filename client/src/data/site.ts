import type { SocialLink } from "../types";

export const site = {
  name: "Academia International College",
  shortName: "Academia",
  tagline: "Where Knowledge Meets Innovation",
  affiliation: "Tribhuvan University",
  award: "Winner of the College of the Year Award – 2083",
  address: "Gwarko Chowk, Lalitpur-7, Nepal",
  email: "mail@academiacollege.edu.np",
  phones: ["01-5425393", "5443037", "5420553", "5421388"],
  phoneHref: "tel:+97715425393",
  whatsappUrl: "https://wa.me/9779861888137",
  website: "https://www.academiacollege.edu.np",
  logo: "https://www.academiacollege.edu.np/img/Logo/academiacollege_logo.png",
  loginUrl: "https://www.academiacollege.edu.np/login",
  privacyUrl: "https://www.academiacollege.edu.np/web/privacy-policy",
  officialApplyUrl: "https://www.academiacollege.edu.np/web/online/application",
  scholarshipUrl: "https://www.academiacollege.edu.np/scholarship",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Academia+International+College+Gwarko+Lalitpur&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Academia+International+College+Gwarko+Lalitpur",
} as const;

export const socials: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/academiacollege",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/academia.college/",
    icon: "instagram",
  },
  {
    // The official YouTube channel was not listed on the college site.
    // This search link is a placeholder: replace it with the real channel URL.
    label: "YouTube",
    href: "https://www.youtube.com/results?search_query=Academia+International+College+Nepal",
    icon: "youtube",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/academia-international-college",
    icon: "linkedin",
  },
];
