export interface ContactLead {
  name: string;
  email: string;
  company: string;
  phone?: string;
  topic: string;
  message: string;
}

export interface DeliveryResult {
  delivered: boolean;
  reason?: "not_configured" | "provider_error";
}

export function normalizeLead(payload: ContactLead): ContactLead {
  return {
    name: payload.name.trim(),
    email: payload.email.trim(),
    company: payload.company.trim(),
    phone: payload.phone?.trim() || undefined,
    topic: payload.topic.trim(),
    message: payload.message.trim(),
  };
}

// Delivery is intentionally pluggable and currently UNCONFIGURED — no real
// email/CRM provider has been chosen or supplied credentials for this
// project. Do not invent one. Once a provider is chosen, implement it here
// (e.g. POST to a transactional-email API or CRM webhook using the
// CONTACT_DELIVERY_WEBHOOK_URL env var below) without changing the route
// handler's contract (`normalizeLead` -> `deliverLead` -> respond).
export async function deliverLead(lead: ContactLead): Promise<DeliveryResult> {
  const webhookUrl = process.env.CONTACT_DELIVERY_WEBHOOK_URL;
  if (!webhookUrl) {
    return { delivered: false, reason: "not_configured" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    return { delivered: response.ok, reason: response.ok ? undefined : "provider_error" };
  } catch {
    return { delivered: false, reason: "provider_error" };
  }
}
