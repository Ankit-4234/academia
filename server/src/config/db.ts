import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export async function connectDB(uri: string): Promise<void> {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
}

export function isDbReady(): boolean {
  return mongoose.connection.readyState === 1;
}

export async function disconnectDB(): Promise<void> {
  await mongoose.disconnect();
}
