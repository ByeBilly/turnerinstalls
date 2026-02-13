import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { authConfig } from "@/data/socialsync-auth";

const secret = new TextEncoder().encode(authConfig.jwtSecret);

export async function createSession(email: string) {
    const token = await new SignJWT({ email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(authConfig.sessionExpiry)
        .sign(secret);

    // Set the cookie
    cookies().set("socialsync_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });

    return token;
}

export async function getSession() {
    const token = cookies().get("socialsync_session")?.value;
    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token, secret);
        return payload as { email: string };
    } catch (err) {
        return null;
    }
}

export async function deleteSession() {
    cookies().delete("socialsync_session");
}
