// Remove control characters (keeps tab, newline and carriage return).
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const HTML_TAGS = /<[^>]*>/g;

function stripMarkup(value: string): string {
  return value.replace(CONTROL_CHARS, "").replace(HTML_TAGS, "").replace(/[<>]/g, "");
}

/** Single-line text: strips HTML/control characters and collapses whitespace. */
export function cleanLine(value: string): string {
  return stripMarkup(value).replace(/\s+/g, " ").trim();
}

/** Multi-line text: strips HTML/control characters but keeps paragraph breaks. */
export function cleanMultiline(value: string): string {
  return stripMarkup(value)
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
