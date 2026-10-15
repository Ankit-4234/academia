/** Parse "YYYY-MM-DD" as a LOCAL date (avoids time-zone off-by-one bugs). */
export function parseISO(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function toISO(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

const longFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const shortFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" });

export function formatDate(value: string): string {
  return longFormat.format(parseISO(value));
}

export function formatRange(start: string, end?: string): string {
  if (!end || end === start) return longFormat.format(parseISO(start));
  return `${shortFormat.format(parseISO(start))} – ${longFormat.format(parseISO(end))}`;
}

export function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function monthLabel(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(date);
}
