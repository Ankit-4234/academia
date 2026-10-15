import type { Notice } from "../types";

const file = (id: string) => `https://drive.google.com/uc?id=${id}&export=media`;

// A selection of recent notices from the college website (newest first).
// The full archive is on the official Notices page.
export const notices: Notice[] = [
  {
    slug: "bbm-7th-semester-ledger",
    title: "BBM 7th Semester Ledger",
    date: "2026-10-09",
    category: "University",
    label: "Result",
    programs: ["BBM"],
    summary: "Ledger for BBM 7th semester students.",
    fileUrl: file("1c0kUY7xnok9HQV2OALY9dyjFmiHpR5SU"),
    important: true,
  },
  {
    slug: "re-cmat-result-2026",
    title: "RE-CMAT Result Published (admission year 2026, Bachelor Level) under FOM, TU",
    date: "2026-10-05",
    category: "University",
    label: "Result",
    programs: [],
    summary: "The re-CMAT result for the 2026 admission year at Bachelor level under the Faculty of Management, TU.",
    fileUrl: file("1AVTWLz9cLGIsO_bi54BZ0xZEwAuxog2g"),
  },
  {
    slug: "bbm-5th-semester-ledger",
    title: "BBM 5th Semester Ledger",
    date: "2026-10-03",
    category: "University",
    label: "Result",
    programs: ["BBM"],
    summary: "Ledger for BBM 5th semester students.",
    fileUrl: file("1dLYDkCW-quqnIDw0LbX7zRGlHQkABRPt"),
  },
  {
    slug: "bsc-csit-4th-semester-practical-routine",
    title: "B.Sc. CSIT Fourth Semester (2081 Batch) Practical Examination Routine",
    date: "2026-09-30",
    category: "University",
    label: "Exam Routine",
    programs: ["B.Sc. CSIT"],
    summary: "Practical examination routine for B.Sc. CSIT fourth semester, 2081 batch.",
    fileUrl: file("1zOUYtqDeXFGPrCxdPc8Doz-SzNyeLg2D"),
  },
  {
    slug: "bsc-csit-8th-semester-end-term-routine",
    title: "B.Sc. CSIT Eighth Semester (2079 Batch) End Term Examination Routine",
    date: "2026-09-30",
    category: "Internal",
    label: "Exam Routine",
    programs: ["B.Sc. CSIT"],
    summary: "End-term examination routine for B.Sc. CSIT eighth semester, 2079 batch.",
    fileUrl: file("1I096wfNeuGUzAU3QSKwMdJSGvI5o0Yro"),
  },
  {
    slug: "bbs-fourth-year-exam-result",
    title: "Exam Result: BBS Fourth Year",
    date: "2026-09-29",
    category: "University",
    label: "Result",
    programs: ["BBS"],
    summary: "Examination result for BBS fourth year.",
    fileUrl: file("1rU2ECkEBRsJ8Wit6mSRp3PsWEl3p43jI"),
  },
  {
    slug: "bsc-csit-1st-semester-2082-result",
    title: "B.Sc. CSIT I Semester-2082 Exam Result",
    date: "2026-09-29",
    category: "University",
    label: "Result",
    programs: ["B.Sc. CSIT"],
    summary: "Examination result for B.Sc. CSIT first semester, 2082 batch.",
    fileUrl: file("1zfpU1wtuAoodNTNgilygY-VhFrzzr_02"),
  },
  {
    slug: "bsc-csit-5th-semester-academic-calendar",
    title: "Academic Calendar of B.Sc. CSIT V Semester (2081 Batch)",
    date: "2026-09-29",
    category: "University",
    label: "General Notice",
    programs: ["B.Sc. CSIT"],
    summary: "Academic calendar for B.Sc. CSIT fifth semester, 2081 batch.",
    fileUrl: file("1I7Yyp-vSru5mmQZhW0TxmqvreKpIPU2x"),
  },
  {
    slug: "bbm-6th-8th-semester-exam-form",
    title: "Exam Form Notice for BBM 6th and 8th Semester",
    date: "2026-09-29",
    category: "University",
    label: "Exam Notice",
    programs: ["BBM"],
    summary: "Examination form notice for BBM 6th and 8th semester students.",
    fileUrl: file("1aRmq55wA84BSiBM1BY7btbSrGaH0HQMv"),
  },
  {
    slug: "bca-2nd-4th-semester-updated-routine",
    title: "BCA II and IV Semester Updated Examination Routine",
    date: "2026-09-22",
    category: "University",
    label: "Exam Routine",
    programs: ["BCA"],
    summary: "Updated examination routine for BCA second and fourth semesters.",
    fileUrl: "https://www.academiacollege.edu.np/web/news/A",
  },
];

export function getNotice(slug: string): Notice | undefined {
  return notices.find((notice) => notice.slug === slug);
}
