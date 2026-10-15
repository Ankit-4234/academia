import type { Program } from "../types";

const base = "https://www.academiacollege.edu.np";

// Syllabus, fee and eligibility details live on the official program pages (officialUrl).
// Durations for BCA and BBM follow Tribhuvan University's standard 8-semester structure;
// please confirm against the college prospectus.
export const programs: Program[] = [
  {
    slug: "bsc-csit",
    code: "B.Sc. CSIT",
    name: "Bachelor of Science in Computer Science and Information Technology",
    summary:
      "A four-year Tribhuvan University computing degree covering core computer science and information technology.",
    duration: "4 years (8 semesters)",
    overview: [
      "The B.Sc. CSIT curriculum follows courses practised in accredited international universities. Foundation and core computer science and information technology courses are combined with electives that meet the demand for high-technology application development.",
      "Students study the design and implementation of software systems, the theoretical foundations of computer science and the functional background of computer hardware. Undergraduate students complete at least 126 credit hours.",
    ],
    objectives: [
      "Build intensive knowledge of the theory, design, programming and application of computers.",
      "Gain in-depth understanding of, and experience with, computer systems.",
      "Develop the creative and analytical skills needed for technological problem-solving.",
      "Prepare to assess and develop computer-based solutions as an IT professional.",
      "Learn advanced IT applications used across different business sectors.",
      "Understand both hardware systems and computer software systems.",
    ],
    careers:
      "Graduates can work as software developers, web developers, database administrators, data analysts, SEO specialists or game developers. Many Academia alumni run their own software companies.",
    highlights: [
      "One of the pioneer institutes in Nepal to offer the B.Sc. CSIT programme",
      "Highly qualified faculty members",
      "Research-based and project-based education",
      "Ties with leading software companies",
      "Regular seminars, workshops, field visits and guest lectures",
      "Well-equipped computer, electronics and physics laboratories",
      "Career counselling and a placement cell",
    ],
    officialUrl: `${base}/bsccsit`,
    prospectusUrl: `${base}/storage/faculty-banner/prospectus/1676792410-1-combined_compressed.pdf`,
  },
  {
    slug: "bca",
    code: "BCA",
    name: "Bachelor of Computer Applications",
    summary:
      "A Tribhuvan University degree focused on computer applications and software-oriented learning.",
    duration: "4 years (8 semesters)",
    overview: [
      "The Bachelor of Computer Applications (BCA) is offered at Academia International College under Tribhuvan University.",
      "See the official program page for the syllabus, prospectus and admission details.",
    ],
    officialUrl: `${base}/bca`,
  },
  {
    slug: "bbm",
    code: "BBM",
    name: "Bachelor of Business Management",
    summary:
      "Prepares students for a business environment that demands critical thinking and clear communication.",
    duration: "4 years (8 semesters)",
    overview: [
      "The BBM programme is designed to prepare students for a business environment that demands much more than theoretical knowledge. Modern managers are expected to think critically and communicate effectively.",
      "See the official program page for the syllabus, prospectus and admission details.",
    ],
    officialUrl: `${base}/bbm`,
  },
  {
    slug: "bbs",
    code: "BBS",
    name: "Bachelor of Business Studies",
    summary:
      "A Tribhuvan University business studies degree building a foundation for careers in commerce and management.",
    duration: "4 years",
    overview: [
      "The Bachelor of Business Studies (BBS) is offered at Academia International College under Tribhuvan University.",
      "See the official program page for the syllabus, prospectus and admission details.",
    ],
    officialUrl: `${base}/bbs`,
  },
  {
    slug: "mbs",
    code: "MBS",
    name: "Master of Business Studies",
    summary:
      "A postgraduate business studies programme under Tribhuvan University for advanced management learning.",
    overview: [
      "The Master of Business Studies (MBS) is the postgraduate programme offered at Academia International College under Tribhuvan University.",
      "See the official program page for the syllabus, prospectus and admission details.",
    ],
    officialUrl: `${base}/mbs`,
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}
