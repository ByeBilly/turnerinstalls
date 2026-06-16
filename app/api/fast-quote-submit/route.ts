import { NextRequest, NextResponse } from "next/server";

type FastQuotePayload = {
  event?: string;
  form_id?: string;
  source?: string;
  page_path?: string;
  page_url?: string;
  contact_method?: string;
};

function truncate(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let payload: FastQuotePayload = {};

  try {
    payload = await request.json();
  } catch {
    payload = {};
  }

  const logEntry = {
    event: "fast_quote_submit",
    form_id: truncate(payload.form_id, 80) || "hero_fast_quote",
    source: truncate(payload.source, 160),
    page_path: truncate(payload.page_path, 160),
    page_url: truncate(payload.page_url, 500),
    contact_method: truncate(payload.contact_method, 40),
    referer: truncate(request.headers.get("referer"), 500),
    user_agent: truncate(request.headers.get("user-agent"), 300),
    timestamp: new Date().toISOString(),
  };

  console.info("Turner Installs fast quote submit", logEntry);

  return new NextResponse(null, { status: 204 });
}
