import { useZodForm } from "../../hooks/useZodForm";
import { postJson } from "../../lib/api";
import { contactSchema } from "../../lib/schemas";
import Field, { FormStatusMessage, Honeypot, SubmitButton } from "./Field";

interface ContactValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

const initial: ContactValues = { name: "", email: "", phone: "", subject: "", message: "", website: "" };

export default function ContactForm() {
  const { values, errors, status, message, setValue, handleSubmit } = useZodForm<ContactValues>({
    schema: contactSchema,
    initial,
    submit: async (data) => (await postJson<{ message: string }>("/contact", data)).message,
  });

  return (
    <form className="form" onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"}>
      <div className="form__grid">
        <Field formId="contact" name="name" label="Full name" required autoComplete="name"
          value={values.name} onChange={(v) => setValue("name", v)} error={errors.name} />
        <Field formId="contact" name="email" label="Email" type="email" required autoComplete="email"
          inputMode="email" value={values.email} onChange={(v) => setValue("email", v)} error={errors.email} />
        <Field formId="contact" name="phone" label="Phone (optional)" type="tel" autoComplete="tel"
          inputMode="tel" value={values.phone} onChange={(v) => setValue("phone", v)} error={errors.phone} />
        <Field formId="contact" name="subject" label="Subject" required
          value={values.subject} onChange={(v) => setValue("subject", v)} error={errors.subject} />
      </div>
      <Field formId="contact" name="message" label="Message" as="textarea" rows={6} required maxLength={2000}
        value={values.message} onChange={(v) => setValue("message", v)} error={errors.message} />
      <Honeypot value={values.website} onChange={(v) => setValue("website", v)} />
      <FormStatusMessage status={status} message={message} />
      <SubmitButton status={status} idleLabel="Send message" busyLabel="Sending..." />
    </form>
  );
}
