import type { Faq } from "../types";
import { site } from "./site";

export const faqs: Faq[] = [
  {
    question: "What programs does Academia International College offer?",
    answer:
      "Academia offers B.Sc. CSIT, BCA, BBM, BBS and MBS programs under Tribhuvan University affiliation. The programs are designed to provide both theoretical knowledge and practical skills for a competitive career.",
  },
  {
    question: "Is Academia International College affiliated with Tribhuvan University?",
    answer:
      "Yes. Academia International College is affiliated with Tribhuvan University (TU), Nepal's largest and most recognised university.",
  },
  {
    question: "Does Academia offer scholarships?",
    answer:
      "Yes. Academia provides scholarships based on academic merit, financial need and special talent. Students are encouraged to apply during the admission process. See the scholarship page on the college website for details.",
  },
  {
    question: "Where is Academia International College located?",
    answer: `Academia is located at ${site.address}, in the heart of the Kathmandu Valley.`,
  },
  {
    question: "How can I apply for admission?",
    answer: `You can apply online through the official application page, send an admission enquiry from this website, or visit the college in person. For support, call ${site.phones.slice(0, 3).join(", ")}.`,
  },
  {
    question: "What facilities are available at Academia?",
    answer:
      "Academia provides modern computer labs, a well-stocked library, sports facilities, a canteen, a Wi-Fi campus and dedicated spaces for clubs and student activities.",
  },
];
