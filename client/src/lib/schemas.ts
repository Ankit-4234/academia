import { z } from "zod";
import { programs } from "../data/programs";

// Mirrors the server-side rules. The server validates again: never trust the browser alone.

const clean = (value: string) => value.replace(/<[^>]*>/g, "").replace(/[<>]/g, "").trim();

const text = (label: string, min: number, max: number) =>
  z
    .string()
    .transform((value) => clean(value))
    .pipe(
      z
        .string()
        .min(min, min <= 1 ? `${label} is required` : `${label} must be at least ${min} characters`)
        .max(max, `${label} must be at most ${max} characters`)
    );

const email = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Enter a valid email address")
  .max(254, "Email is too long");

const phone = z
  .string()
  .trim()
  .min(1, "Phone number is required")
  .regex(/^\+?[0-9\s\-()]{7,20}$/, "Enter a valid phone number");

const optionalPhone = z.union([phone, z.literal("")]);

const dob = z
  .string()
  .min(1, "Date of birth is required")
  .refine((value) => {
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return false;
    const now = new Date();
    let age = now.getFullYear() - date.getFullYear();
    const monthDiff = now.getMonth() - date.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date.getDate())) age -= 1;
    return age >= 14 && age <= 70;
  }, "Enter a valid date of birth");

const slugs = programs.map((program) => program.slug) as [string, ...string[]];

export const contactSchema = z.object({
  name: text("Name", 2, 80),
  email,
  phone: optionalPhone,
  subject: text("Subject", 3, 120),
  message: text("Message", 10, 2000),
  website: z.string().max(200),
});

export const applicationSchema = z.object({
  fullName: text("Full name", 2, 100),
  email,
  phone,
  dob,
  program: z.enum(slugs, { errorMap: () => ({ message: "Select a program" }) }),
  previousEducation: text("Previous education", 2, 200),
  message: z.string().max(1000, "Message must be at most 1000 characters"),
  consent: z.literal(true, { errorMap: () => ({ message: "You must agree to continue" }) }),
  website: z.string().max(200),
});

export const newsletterSchema = z.object({
  email,
  website: z.string().max(200),
});
