"use client";

import { FormEvent, useState } from "react";

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Unable to send your message.");
      setStatus("success");
      setMessage(
        result.demo
          ? "Message validated successfully. Add RESEND_API_KEY to send real emails."
          : "Thanks. Your message has been sent to Devnet."
      );
      setForm(initial);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to send your message."
      );
    }
  }

  const update = (key: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid two">
        <label>
          <span>Name *</span>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
          />
        </label>
        <label>
          <span>Work email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="name@company.com"
          />
        </label>
      </div>
      <div className="form-grid two">
        <label>
          <span>Phone</span>
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+880…"
          />
        </label>
        <label>
          <span>Organization</span>
          <input
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Company or agency"
          />
        </label>
      </div>
      <label>
        <span>What can we help with? *</span>
        <select
          required
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
        >
          <option value="">Select a topic</option>
          <option>Document management</option>
          <option>Process automation</option>
          <option>Scanning and archiving</option>
          <option>Application development</option>
          <option>AI and machine learning</option>
          <option>Scanner hardware</option>
          <option>Support request</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        <span>Project details *</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about the workflow, volume, users, timeline and integrations…"
        />
      </label>
      <div className="form-submit-row">
        <button
          className="btn btn-hot"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send message"}{" "}
          <span className="ar">→</span>
        </button>
        <p>
          By submitting, you agree that Devnet may contact you about this
          request.
        </p>
      </div>
      {message && <div className={`form-response ${status}`}>{message}</div>}
    </form>
  );
}
