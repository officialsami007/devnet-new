import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let email = "";
  try {
    const body = await request.json();
    email = typeof body.email === "string" ? body.email.trim().slice(0, 160) : "";
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 422 });
  }

  // Production teams can replace this with a CRM/newsletter provider.
  console.info("Devnet newsletter signup", { email });
  return NextResponse.json({ ok: true });
}
