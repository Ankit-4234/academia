import { programs } from "../../data/programs";
import { useZodForm } from "../../hooks/useZodForm";
import { postJson } from "../../lib/api";
import { toISO } from "../../lib/date";
import { applicationSchema } from "../../lib/schemas";
import Field, { CheckboxField, FormStatusMessage, Honeypot, SubmitButton } from "./Field";

interface ApplicationValues {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  program: string;
  previousEducation: string;
  message: string;
  consent: boolean;
  website: string;
}

const initial: ApplicationValues = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  program: "",
  previousEducation: "",
  message: "",
  consent: false,
  website: "",
};

const programOptions = programs.map((program) => ({ value: program.slug, label: program.code }));

export default function ApplicationForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  const { values, errors, status, message, setValue, handleSubmit } = useZodForm<ApplicationValues>({
    schema: applicationSchema,
    initial: { ...initial, program: defaultProgram },
    submit: async (data) => (await postJson<{ message: string }>("/applications", data)).message,
  });

  return (
    <form className="form" onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"}>
      <div className="form__grid">
        <Field formId="apply" name="fullName" label="Full name" required autoComplete="name"
          value={values.fullName} onChange={(v) => setValue("fullName", v)} error={errors.fullName} />
        <Field formId="apply" name="email" label="Email" type="email" required autoComplete="email"
          inputMode="email" value={values.email} onChange={(v) => setValue("email", v)} error={errors.email} />
        <Field formId="apply" name="phone" label="Phone" type="tel" required autoComplete="tel"
          inputMode="tel" value={values.phone} onChange={(v) => setValue("phone", v)} error={errors.phone} />
        <Field formId="apply" name="dob" label="Date of birth" type="date" required autoComplete="bday"
          max={toISO(new Date())} value={values.dob} onChange={(v) => setValue("dob", v)} error={errors.dob} />
        <Field formId="apply" name="program" label="Program" as="select" required
          placeholder="Select a program" options={programOptions}
          value={values.program} onChange={(v) => setValue("program", v)} error={errors.program} />
        <Field formId="apply" name="previousEducation" label="Previous education" required
          hint="For example: +2 Science, Grade 12 Management, Bachelor's degree"
          value={values.previousEducation} onChange={(v) => setValue("previousEducation", v)}
          error={errors.previousEducation} />
      </div>
      <Field formId="apply" name="message" label="Message (optional)" as="textarea" rows={4} maxLength={1000}
        value={values.message} onChange={(v) => setValue("message", v)} error={errors.message} />
      <CheckboxField formId="apply" name="consent" checked={values.consent}
        onChange={(checked) => setValue("consent", checked)} error={errors.consent}>
        I agree that Academia International College may contact me about my admission enquiry.
      </CheckboxField>
      <Honeypot value={values.website} onChange={(v) => setValue("website", v)} />
      <FormStatusMessage status={status} message={message} />
      <SubmitButton status={status} idleLabel="Submit application" busyLabel="Submitting..." />
    </form>
  );
}
