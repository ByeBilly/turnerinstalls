import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const siteId = searchParams.get('siteId');
    const token = searchParams.get('token');

    // Basic validation
    if (!siteId || !token) {
        return NextResponse.json({ error: "Missing siteId or token" }, { status: 400 });
    }

    // In a production app, verify the token against the social media engine or database
    // For now, we assume the link is valid and redirect to the dashboard

    const destinationUrl = new URL('/pumpposts/dashboard', request.url);
    destinationUrl.searchParams.set('bridge_connected', 'true');
    destinationUrl.searchParams.set('site_id', siteId);

    // Redirect to the dashboard
    return NextResponse.redirect(destinationUrl);
}
