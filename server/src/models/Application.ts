import { Schema, model } from "mongoose";

const applicationSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, lowercase: true, trim: true, maxlength: 254 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    dob: { type: Date, required: true },
    program: {
      type: String,
      required: true,
      enum: ["bsc-csit", "bca", "bbm", "bbs", "mbs"],
      index: true,
    },
    previousEducation: { type: String, required: true, trim: true, maxlength: 200 },
    message: { type: String, trim: true, maxlength: 1000 },
    consent: { type: Boolean, required: true },
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
  },
  { timestamps: true }
);

applicationSchema.index({ createdAt: -1 });

export const Application = model("Application", applicationSchema);
