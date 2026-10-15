import { z } from "zod";
import { cleanLine, cleanMultiline } from "../utils/sanitize";

export const PROGRAM_SLUGS = ["bsc-csit", "bca", "bbm", "bbs", "mbs"] as const;

function lengthMessages(label: string, min: number, max: number) {
  return {
    min: min <= 1 ? `${label} is required` : `${label} must be at least ${min} characters`,
    max: `${label} must be at most ${max} characters`,
  };
}

const line = (label: string, min: number, max: number) => {
  const msg = lengthMessages(label, min, max);
  return z
    .string({ required_error: `${label} is required`, invalid_type_error: `${label} must be text` })
    .transform(cleanLine)
    .pipe(z.string().min(min, msg.min).max(max, msg.max));
};

const multiline = (label: string, min: number, max: number) => {
  const msg = lengthMessages(label, min, max);
  return z
    .string({ required_error: `${label} is required`, invalid_type_error: `${label} must be text` })
    .transform(cleanMultiline)
    .pipe(z.string().min(min, msg.min).max(max, msg.max));
};

const email = z
  .string({ required_error: "Email is required", invalid_type_error: "Email must be text" })
  .trim()
  .toLowerCase()
  .email("Enter a valid email address")
  .max(254, "Email is too long");

const phone = z
  .string({ required_error: "Phone number is required", invalid_type_error: "Phone must be text" })
  .trim()
  .regex(/^\+?[0-9\s\-()]{7,20}$/, "Enter a valid phone number");

const optionalPhone = z.union([phone, z.literal("")]).optional();

const dateOfBirth = z
  .string({ required_error: "Date of birth is required" })
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date of birth")
  .refine((value) => {
    const date = new Date(`${value}T00:00:00Z`);
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return false;
    const now = new Date();
    let age = now.getUTCFullYear() - date.getUTCFullYear();
    const monthDiff = now.getUTCMonth() - date.getUTCMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getUTCDate() < date.getUTCDate())) age -= 1;
    return age >= 14 && age <= 70;
  }, "Enter a valid date of birth");

// Honeypot: real users never see or fill this field.
const honeypot = z.string().max(200).optional();

export const contactSchema = z.object({
  name: line("Name", 2, 80),
  email,
  phone: optionalPhone,
  subject: line("Subject", 3, 120),
  message: multiline("Message", 10, 2000),
  website: honeypot,
});

export const applicationSchema = z.object({
  fullName: line("Full name", 2, 100),
  email,
  phone,
  dob: dateOfBirth,
  program: z.enum(PROGRAM_SLUGS, { errorMap: () => ({ message: "Select a program" }) }),
  previousEducation: line("Previous education", 2, 200),
  message: z
    .string()
    .transform(cleanMultiline)
    .pipe(z.string().max(1000, "Message must be at most 1000 characters"))
    .optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "You must agree to continue" }) }),
  website: honeypot,
});

export const newsletterSchema = z.object({
  email,
  website: honeypot,
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ApplicationInput = z.infer<typeof applicationSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
