import type { RequestHandler } from "express";
import { isDbReady } from "../config/db";
import { AppError } from "../utils/AppError";

export const requireDb: RequestHandler = (_req, _res, next) => {
  if (!isDbReady()) {
    next(new AppError("The service is temporarily unavailable. Please try again later.", 503));
    return;
  }
  next();
};
