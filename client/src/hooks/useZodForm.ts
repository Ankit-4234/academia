import { useState, type FormEvent } from "react";
import type { ZodTypeAny } from "zod";
import { ApiError } from "../lib/api";

export type FormStatus = "idle" | "submitting" | "success" | "error";

interface Options<T> {
  schema: ZodTypeAny;
  initial: T;
  /** Must resolve with the success message to show. */
  submit: (values: T) => Promise<string>;
}

export function useZodForm<T extends object>({ schema, initial, submit }: Options<T>) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const setValue = <K extends keyof T>(key: K, value: T[K]) => {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      const name = String(key);
      if (!(name in previous)) return previous;
      const next = { ...previous };
      delete next[name];
      return next;
    });
    setStatus((current) => (current === "submitting" ? current : "idle"));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const result = schema.safeParse(values);
    if (!result.success) {
      const found: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!found[key]) found[key] = issue.message;
      }
      setErrors(found);
      setStatus("idle");
      setMessage("");
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      });
      return;
    }

    setStatus("submitting");
    setMessage("");
    setErrors({});

    try {
      const successMessage = await submit(values);
      setValues(initial);
      setMessage(successMessage);
      setStatus("success");
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.fieldErrors) setErrors(error.fieldErrors);
        setMessage(error.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
      setStatus("error");
    }
  };

  return { values, errors, status, message, setValue, handleSubmit };
}
