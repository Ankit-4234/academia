import { Subscriber } from "../models/Subscriber";
import type { NewsletterInput } from "../validators/schemas";
import { asyncHandler } from "../utils/asyncHandler";

// Same response whether or not the address already exists,
// so the endpoint cannot be used to discover who is subscribed.
const SUCCESS = "Thanks for subscribing!";

export const subscribe = asyncHandler(async (req, res) => {
  const data = req.body as NewsletterInput;

  if (data.website) {
    res.status(201).json({ message: SUCCESS });
    return;
  }

  await Subscriber.updateOne(
    { email: data.email },
    { $setOnInsert: { email: data.email } },
    { upsert: true }
  );

  res.status(201).json({ message: SUCCESS });
});
