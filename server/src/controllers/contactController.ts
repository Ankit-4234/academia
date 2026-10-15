import { Contact } from "../models/Contact";
import type { ContactInput } from "../validators/schemas";
import { asyncHandler } from "../utils/asyncHandler";

const SUCCESS = "Thank you! Your message has been sent. We will get back to you soon.";

export const submitContact = asyncHandler(async (req, res) => {
  const data = req.body as ContactInput;

  // Honeypot filled in = bot. Pretend it worked, store nothing.
  if (data.website) {
    res.status(201).json({ message: SUCCESS });
    return;
  }

  await Contact.create({
    name: data.name,
    email: data.email,
    phone: data.phone || undefined,
    subject: data.subject,
    message: data.message,
  });

  res.status(201).json({ message: SUCCESS });
});
