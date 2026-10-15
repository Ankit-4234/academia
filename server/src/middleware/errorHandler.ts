import type { ErrorRequestHandler, RequestHandler } from "express";
import { env } from "../config/env";
import { AppError } from "../utils/AppError";

export const notFound: RequestHandler = (_req, _res, next) => {
  next(new AppError("Not found", 404));
};

// Never send stack traces, database errors or internal paths to the client.
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
      ...(err.errors ? { errors: err.errors } : {}),
    });
    return;
  }

  const type = (err as { type?: string } | null)?.type;

  if (type === "entity.too.large") {
    res.status(413).json({ message: "Request is too large." });
    return;
  }

  if (type === "entity.parse.failed") {
    res.status(400).json({ message: "Invalid request body." });
    return;
  }

  // Full details go to the private server log only.
  console.error("Unhandled error:", env.isProduction ? (err as Error)?.message : err);
  res.status(500).json({ message: "Something went wrong on our side. Please try again later." });
};
