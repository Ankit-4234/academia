import { useZodForm } from "../../hooks/useZodForm";
import { postJson } from "../../lib/api";
import { newsletterSchema } from "../../lib/schemas";
import { FormStatusMessage, Honeypot } from "./Field";

interface NewsletterValues {
  email: string;
  website: string;
}

const initial: NewsletterValues = { email: "", website: "" };

export default function NewsletterForm() {
  const { values, errors, status, message, setValue, handleSubmit } = useZodForm<NewsletterValues>({
    schema: newsletterSchema,
    initial,
    submit: async (data) => (await postJson<{ message: string }>("/newsletter", data)).message,
  });

  return (
    <form className="newsletter" onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"}>
      <label htmlFor="newsletter-email" className="visually-hidden">
        Email address
      </label>
      <div className="newsletter__row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Your email address"
          value={values.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "newsletter-error" : undefined}
          onChange={(event) => setValue("email", event.target.value)}
        />
        <button type="submit" className="btn btn--accent" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Subscribe"}
        </button>
      </div>
      {errors.email && (
        <p className="field__error newsletter__error" id="newsletter-error">
          {errors.email}
        </p>
      )}
      <Honeypot value={values.website} onChange={(v) => setValue("website", v)} />
      <FormStatusMessage status={status} message={message} />
    </form>
  );
}
