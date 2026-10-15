import type { RequestHandler } from "express";

// Defence in depth against NoSQL operator injection:
// drop any key that starts with "$" or contains ".".
function strip(value: unknown, depth = 0): unknown {
  if (depth > 5) return undefined;
  if (Array.isArray(value)) return value.map((item) => strip(item, depth + 1));
  if (value && typeof value === "object") {
    const clean: Record<string, unknown> = {};
    for (const [key, inner] of Object.entries(value as Record<string, unknown>)) {
      if (key.startsWith("$") || key.includes(".")) continue;
      clean[key] = strip(inner, depth + 1);
    }
    return clean;
  }
  return value;
}

export const sanitizeBody: RequestHandler = (req, _res, next) => {
  if (req.body && typeof req.body === "object") {
    req.body = strip(req.body);
  }
  next();
};
