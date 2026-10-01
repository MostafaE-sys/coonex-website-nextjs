import { NextResponse } from "next/server";
import { deliverLead, normalizeLead, type ContactLead } from "@/lib/contact-delivery";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Generous but bounded — rejects abusive/oversized payloads without limiting
// any real business enquiry.
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

function isValidPayload(body: unknown): body is ContactLead & { honeypot?: string } {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    b.name.length <= MAX_FIELD_LENGTH &&
    typeof b.email === "string" &&
    EMAIL_PATTERN.test(b.email) &&
    b.email.length <= MAX_FIELD_LENGTH &&
    typeof b.company === "string" &&
    b.company.trim().length > 0 &&
    b.company.length <= MAX_FIELD_LENGTH &&
    (b.phone === undefined || (typeof b.phone === "string" && b.phone.length <= MAX_FIELD_LENGTH)) &&
    typeof b.topic === "string" &&
    b.topic.trim().length > 0 &&
    b.topic.length <= MAX_FIELD_LENGTH &&
    typeof b.message === "string" &&
    b.message.trim().length >= 10 &&
    b.message.length <= MAX_MESSAGE_LENGTH
  );
}

export async function POST(request: Request) {
  // Basic payload-size guard before even parsing JSON.
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields." }, { status: 400 });
  }

  // Honeypot: a hidden field real users never fill in. Bots that populate
  // every field will trip this. Silently report success to avoid signaling
  // the check to whatever submitted it.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const lead = normalizeLead(body);
  const result = await deliverLead(lead);

  // Never log full lead content (name/email/phone/message) in any
  // environment — only a non-identifying diagnostic in development.
  if (process.env.NODE_ENV !== "production") {
    console.log("[contact]", result.delivered ? "delivered" : `not delivered (${result.reason})`, {
      topic: lead.topic,
      at: new Date().toISOString(),
    });
  }

  if (!result.delivered) {
    return NextResponse.json(
      { ok: false, error: "We're unable to deliver your message right now. Please try again shortly." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
