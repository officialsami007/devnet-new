import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
};

type RateStore = Map<string, { count: number; resetAt: number }>;
const globalForRateLimit = globalThis as typeof globalThis & { devnetRateStore?: RateStore };
const rateStore = globalForRateLimit.devnetRateStore ?? new Map();
globalForRateLimit.devnetRateStore = rateStore;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function allow(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const current = rateStore.get(ip);
  if (!current || current.resetAt < now) {
    rateStore.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= 5) return false;
  current.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!allow(ip)) return NextResponse.json({ message: "Too many requests. Please try again shortly." }, { status: 429 });

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const data = {
    name: clean(payload.name, 100),
    email: clean(payload.email, 160),
    phone: clean(payload.phone, 50),
    company: clean(payload.company, 120),
    subject: clean(payload.subject, 120),
    message: clean(payload.message, 4000)
  };

  if (!data.name || !isEmail(data.email) || !data.subject || data.message.length < 10) {
    return NextResponse.json({ message: "Please provide a valid name, email, topic and project description." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("Devnet contact form (demo mode)", { ...data, message: `${data.message.slice(0, 120)}…` });
    return NextResponse.json({ ok: true, demo: true });
  }

  const to = process.env.CONTACT_TO_EMAIL || "info@devnetlimited.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Devnet Website <website@example.com>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[Website] ${data.subject} — ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nOrganization: ${data.company || "Not provided"}\nTopic: ${data.subject}\n\n${data.message}`
    })
  });

  if (!response.ok) {
    console.error("Resend API failed", await response.text());
    return NextResponse.json({ message: "The message could not be delivered. Please email info@devnetlimited.com." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, demo: false });
}
