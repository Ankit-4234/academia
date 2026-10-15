import { Router } from "express";
import { submitApplication } from "../controllers/applicationController";
import { submitContact } from "../controllers/contactController";
import { health } from "../controllers/healthController";
import { subscribe } from "../controllers/newsletterController";
import { formLimiter, newsletterLimiter } from "../middleware/rateLimiters";
import { requireDb } from "../middleware/requireDb";
import { validate } from "../middleware/validate";
import { applicationSchema, contactSchema, newsletterSchema } from "../validators/schemas";

const router = Router();

router.get("/health", health);

router.post("/contact", formLimiter, validate(contactSchema), requireDb, submitContact);
router.post("/applications", formLimiter, validate(applicationSchema), requireDb, submitApplication);
router.post("/newsletter", newsletterLimiter, validate(newsletterSchema), requireDb, subscribe);

export default router;
