"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const TOPIC_OPTIONS = ["Solutions", "Products", "Industries", "General enquiry"];

interface FormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  topic: string;
  message: string;
}

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  topic: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): Partial<Record<keyof FormValues, string>> {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) {
    errors.email = "Enter your work email.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.company.trim()) errors.company = "Enter your company name.";
  if (!values.topic) errors.topic = "Choose what you'd like to discuss.";
  if (!values.message.trim()) {
    errors.message = "Enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Add a little more detail — at least 10 characters.";
  }
  return errors;
}

const FIELD_CLASS =
  "mt-1.5 w-full rounded-sm border border-border bg-white px-4 py-3 text-body text-navy transition-colors placeholder:text-foreground-muted focus:border-yale focus:outline-none focus:ring-1 focus:ring-yale";
const ERROR_FIELD_CLASS = "border-red-600 focus:border-red-600 focus:ring-red-600";
const LABEL_CLASS = "text-body-sm font-semibold text-navy";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Honeypot: real visitors never see or fill this field (visually hidden,
  // not display:none, so it still trips naive bots but is invisible and
  // never focusable for real users). Kept out of FormValues/validate since
  // it's not a real field.
  const [honeypot, setHoneypot] = useState("");

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, honeypot }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok) {
        setErrorMessage(data?.error || "Something went wrong sending your message. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong sending your message. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-md border border-border bg-background-subtle p-8 text-center">
        <p className="text-h4 font-bold text-navy">Thanks — your message has been received.</p>
        <p className="mt-2 text-body-sm text-foreground-secondary">
          Someone from Coonex will review what you shared and follow up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="contact-company-website">Company website</label>
        <input
          id="contact-company-website"
          name="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={LABEL_CLASS}>
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={`${FIELD_CLASS} ${errors.name ? ERROR_FIELD_CLASS : ""}`}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1.5 text-body-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={LABEL_CLASS}>
            Work email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={`${FIELD_CLASS} ${errors.email ? ERROR_FIELD_CLASS : ""}`}
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1.5 text-body-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-company" className={LABEL_CLASS}>
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={`${FIELD_CLASS} ${errors.company ? ERROR_FIELD_CLASS : ""}`}
          />
          {errors.company && (
            <p id="contact-company-error" role="alert" className="mt-1.5 text-body-sm text-red-600">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className={LABEL_CLASS}>
            Phone <span className="font-normal text-foreground-muted">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-topic" className={LABEL_CLASS}>
          What would you like to discuss?
        </label>
        <select
          id="contact-topic"
          name="topic"
          required
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "contact-topic-error" : undefined}
          value={values.topic}
          onChange={(e) => updateField("topic", e.target.value)}
          className={`${FIELD_CLASS} ${errors.topic ? ERROR_FIELD_CLASS : ""}`}
        >
          <option value="" disabled>
            Choose one
          </option>
          {TOPIC_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p id="contact-topic-error" role="alert" className="mt-1.5 text-body-sm text-red-600">
            {errors.topic}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${FIELD_CLASS} resize-y ${errors.message ? ERROR_FIELD_CLASS : ""}`}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1.5 text-body-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-body-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="md"
        loading={status === "submitting"}
        withArrow
        className="w-full sm:w-auto"
      >
        Talk to Coonex
      </Button>
    </form>
  );
}
