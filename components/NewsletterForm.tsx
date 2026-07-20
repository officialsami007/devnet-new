"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({
  variant = "dark",
  label = "Get occasional Devnet updates",
  buttonLabel,
}: {
  variant?: "dark" | "light";
  label?: string;
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to subscribe.");
      setStatus("success");
      setMessage("Thanks — you are on the update list.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to subscribe."
      );
    }
  }

  return (
    <form
      className={`newsletter-form ${variant === "light" ? "newsletter-form-light" : ""}`}
      onSubmit={submit}
    >
      {label && <label htmlFor="newsletter-email">{label}</label>}
      <div>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
        >
          {buttonLabel || (status === "loading" ? "…" : "→")}
        </button>
      </div>
      {message && <p className={`form-note ${status}`}>{message}</p>}
    </form>
  );
}
