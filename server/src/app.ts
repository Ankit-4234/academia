import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env";
import { errorHandler, notFound } from "./middleware/errorHandler";
import { apiLimiter } from "./middleware/rateLimiters";
import { sanitizeBody } from "./middleware/sanitizeBody";
import routes from "./routes";
import { AppError } from "./utils/AppError";

const app = express();

app.disable("x-powered-by");
// Render/Vercel/etc. sit behind a proxy: needed for correct client IPs (rate limiting).
app.set("trust proxy", 1);

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      // Requests without an Origin header (curl, health checks) are allowed.
      if (!origin || env.allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new AppError("Origin not allowed", 403));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    maxAge: 600,
  })
);

// Small body limit: forms never need more than a few KB.
app.use(express.json({ limit: "10kb" }));
app.use(sanitizeBody);

app.get("/", (_req, res) => {
  res.json({ name: "Academia College API", status: "running" });
});

app.use("/api", apiLimiter, routes);

app.use(notFound);
app.use(errorHandler);

export default app;
