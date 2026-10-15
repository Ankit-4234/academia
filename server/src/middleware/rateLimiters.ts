import rateLimit from "express-rate-limit";

const tooMany = { message: "Too many requests. Please wait a while and try again." };

/** Applied to every /api route. */
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: tooMany,
});

/** Contact + application forms: 10 submissions per 15 minutes per IP. */
export const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: tooMany,
});

/** Newsletter: 5 sign-ups per hour per IP. */
export const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: tooMany,
});
