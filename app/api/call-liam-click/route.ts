import { NextRequest, NextResponse } from "next/server";

type CallClickPayload = {
  event?: string;
  phone_number?: string;
  link_text?: string;
  page_path?: string;
  page_url?: string;
};

function truncate(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let payload: CallClickPayload = {};

  try {
    payload = await request.json();
  } catch {
    payload = {};
  }

  const logEntry = {
    event: "call_liam_click",
    phone_number: "0413592054",
    page_path: truncate(payload.page_path, 160),
    page_url: truncate(payload.page_url, 500),
    link_text: truncate(payload.link_text, 120),
    referer: truncate(request.headers.get("referer"), 500),
    user_agent: truncate(request.headers.get("user-agent"), 300),
    timestamp: new Date().toISOString(),
  };

  console.info("Turner Installs call Liam click", logEntry);

  return new NextResponse(null, { status: 204 });
}

