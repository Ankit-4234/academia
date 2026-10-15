import app from "./app";
import { connectDB, disconnectDB } from "./config/db";
import { env } from "./config/env";

async function main(): Promise<void> {
  if (env.mongoUri) {
    try {
      await connectDB(env.mongoUri);
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB connection failed:", (error as Error).message);
    }
  } else {
    console.warn(
      "MONGODB_URI is not set. The API runs, but form endpoints answer 503 until a database is configured."
    );
  }

  const server = app.listen(env.port, () => {
    console.log(`API listening on port ${env.port} (${env.nodeEnv})`);
  });

  const shutdown = (signal: string) => {
    console.log(`${signal} received, shutting down`);
    server.close(() => {
      disconnectDB()
        .catch(() => undefined)
        .finally(() => process.exit(0));
    });
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}

main().catch((error) => {
  console.error("Failed to start server:", (error as Error).message);
  process.exit(1);
});
