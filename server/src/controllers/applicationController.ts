import { Application } from "../models/Application";
import type { ApplicationInput } from "../validators/schemas";
import { asyncHandler } from "../utils/asyncHandler";

const SUCCESS =
  "Thank you! We have received your application. The admissions team will contact you soon.";

export const submitApplication = asyncHandler(async (req, res) => {
  const data = req.body as ApplicationInput;

  if (data.website) {
    res.status(201).json({ message: SUCCESS });
    return;
  }

  await Application.create({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    dob: new Date(`${data.dob}T00:00:00Z`),
    program: data.program,
    previousEducation: data.previousEducation,
    message: data.message || undefined,
    consent: true,
  });

  res.status(201).json({ message: SUCCESS });
});
