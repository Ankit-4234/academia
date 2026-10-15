import type { AcademicDate } from "../types";

// Taken from the Academic Calendar on the college website (dates in the Gregorian calendar).
export const academicDates: AcademicDate[] = [
  { id: "dashain", title: "Bada Dashain", detail: "Holiday", start: "2026-10-17", end: "2026-10-23", kind: "holiday" },
  { id: "bca-form", title: "BCA II & IV Semester", detail: "Examination form submission deadline", start: "2026-10-27", kind: "deadline" },
  { id: "bbm-form", title: "BBM VI & VIII Semester", detail: "Examination form submission deadline", start: "2026-11-04", kind: "deadline" },
  { id: "tihar", title: "Tihar", detail: "Holiday", start: "2026-11-08", end: "2026-11-12", kind: "holiday" },
  { id: "chhath", title: "Chhath", detail: "Holiday", start: "2026-11-15", kind: "holiday" },
  { id: "bca-2", title: "BCA II Semester", detail: "TU Board Examination", start: "2026-11-25", kind: "exam" },
  { id: "bca-4", title: "BCA IV Semester", detail: "TU Board Examination", start: "2026-11-26", kind: "exam" },
];
