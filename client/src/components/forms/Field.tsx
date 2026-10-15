import type { ReactNode } from "react";
import type { FormStatus } from "../../hooks/useZodForm";
import LoadingSpinner from "../LoadingSpinner";

interface Option {
  value: string;
  label: string;
}

interface FieldProps {
  formId: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  hint?: string;
  as?: "input" | "textarea" | "select";
  type?: string;
  options?: Option[];
  placeholder?: string;
  autoComplete?: string;
  rows?: number;
  maxLength?: number;
  inputMode?: "text" | "email" | "tel" | "numeric";
  max?: string;
}

export default function Field({
  formId,
  name,
  label,
  value,
  onChange,
  error,
  required,
  hint,
  as = "input",
  type = "text",
  options = [],
  placeholder,
  autoComplete,
  rows = 5,
  maxLength,
  inputMode,
  max,
}: FieldProps) {
  const id = `${formId}-${name}`;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const shared = {
    id,
    name,
    required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  } as const;

  let control: ReactNode;
  if (as === "textarea") {
    control = (
      <textarea
        {...shared}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  } else if (as === "select") {
    control = (
      <select {...shared} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">{placeholder ?? "Select an option"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else {
    control = (
      <input
        {...shared}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        max={max}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }

  return (
    <div className={`field${error ? " field--error" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required && (
          <span className="field__required" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {control}
      {hint && (
        <p className="field__hint" id={hintId}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}

interface CheckboxProps {
  formId: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  children: ReactNode;
}

export function CheckboxField({ formId, name, checked, onChange, error, children }: CheckboxProps) {
  const id = `${formId}-${name}`;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={`field field--checkbox${error ? " field--error" : ""}`}>
      <label htmlFor={id}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span>{children}</span>
      </label>
      {error && (
        <p className="field__error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}

/** Hidden anti-spam field. Real visitors never see or fill it. */
export function Honeypot({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="honeypot" aria-hidden="true">
      <label>
        Leave this field empty
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
}

export function FormStatusMessage({ status, message }: { status: FormStatus; message: string }) {
  if (status === "success") {
    return (
      <p className="form__status form__status--success" role="status">
        {message}
      </p>
    );
  }
  if (status === "error") {
    return (
      <p className="form__status form__status--error" role="alert">
        {message}
      </p>
    );
  }
  return null;
}

export function SubmitButton({
  status,
  idleLabel,
  busyLabel,
}: {
  status: FormStatus;
  idleLabel: string;
  busyLabel: string;
}) {
  const busy = status === "submitting";
  return (
    <button type="submit" className="btn btn--primary" disabled={busy}>
      {busy ? (
        <>
          <LoadingSpinner inline label={busyLabel} /> {busyLabel}
        </>
      ) : (
        idleLabel
      )}
    </button>
  );
}
