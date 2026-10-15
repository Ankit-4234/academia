import path from "node:path";
import dotenv from "dotenv";
import { z } from "zod";

// Load server/.env first (if present), then the project-root .env.
// dotenv never overrides values that are already set.
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const emptyToUndefined = (value: unknown) =>
  typeof value === "string" && value.trim() === "" ? undefined : value;

const schema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().int().positive().default(5000),
  CLIENT_URL: z.preprocess(emptyToUndefined, z.string().default("http://localhost:5180")),
  MONGODB_URI: z.preprocess(emptyToUndefined, z.string().optional()),
  JWT_SECRET: z.preprocess(emptyToUndefined, z.string().optional()),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment configuration:");
  for (const issue of parsed.error.issues) {
    console.error(` - ${issue.path.join(".")}: ${issue.message}`);
  }
  process.exit(1);
}

const raw = parsed.data;

export const env = {
  nodeEnv: raw.NODE_ENV,
  isProduction: raw.NODE_ENV === "production",
  port: raw.PORT,
  mongoUri: raw.MONGODB_URI,
  jwtSecret: raw.JWT_SECRET,
  allowedOrigins: raw.CLIENT_URL.split(",")
    .map((origin) => origin.trim().replace(/\/+$/, ""))
    .filter(Boolean),
};
