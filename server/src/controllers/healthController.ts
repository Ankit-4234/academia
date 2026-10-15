import type { Request, Response } from "express";
import { isDbReady } from "../config/db";

export function health(_req: Request, res: Response): void {
  res.json({ status: "ok", database: isDbReady() ? "connected" : "disconnected" });
}
