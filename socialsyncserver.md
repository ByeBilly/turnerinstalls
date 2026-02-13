# 🚀 SocialSync Hub: Master Implementation Plan

This document serves as the architectural blueprint for the **SocialSync Hub**—a standalone, open-source-powered social media engine designed to be "bolted onto" any website you build in the future.

---

## 🏗️ 1. Project Vision
To build a **zero-cost, multi-tenant** social media infrastructure that allows any client website (e.g., Turner Installs) to manage posts, scheduling, and analytics without paying $600/month SaaS fees.

### Core Strategy: "The Central API"
Instead of every website having its own "App" approved by Meta/LinkedIn, they will all act as **clients** to this single **SocialSync Hub**. 
*   **One Approval**: You only get Meta/LinkedIn approval once for the Hub.
*   **Infinite Clients**: Add unlimited client websites to your hub.
*   **Shared Costs**: Zero monthly costs by using the **Postiz** open-source engine.

---

## 🛠️ 2. Technical Stack
*   **Framework**: Next.js (Client & Server)
*   **Open-Source Core**: [Postiz Engine](https://github.com/postiz/postiz) (adapted for our multi-tenant needs).
*   **Database**: PostgreSQL (via Prisma) — to store OAuth tokens and scheduled posts.
*   **Background Tasks**: Resend (Emails) + Redis/Temporal (Cron jobs for scheduling).
*   **Image Engine**: `sharp` (High-performance server-side image resizing).

---

## 🔐 3. Security & Multi-Tenancy Architecture
The Hub will use an **API Key + Organization ID** system:
1.  **Website Registration**: You register a new site (e.g., `turnerinstalls`) in the Hub.
2.  **API Key Generation**: The Hub generates a unique secure key for that site.
3.  **The Bridge**: The site uses this key to talk to the Hub's API for posting and account linking.

---

## 📍 4. Implementation Roadmap

### Phase 1: Hub Foundation (Local)
*   [ ] Initialize the standalone repo.
*   [ ] Configure Postiz engine core.
*   [ ] Set up PostgreSQL for account/token storage.
*   [ ] Create the "Master Admin Dashboard" (for you, Billiam).

### Phase 2: Client Connection API
*   [ ] Build `/api/v1/auth` (To verify client site requests).
*   [ ] Build `/api/v1/posts` (Endpoint to receive post data and images).
*   [ ] Build `/api/v1/media` (The rescaling engine using `sharp`).

### Phase 3: Platform Approval (The "One-Time" Grind)
*   [ ] Create the "Neutral Brand" identity for the Hub (e.g., `SocialSync.au`).
*   [ ] Set up the public-facing "Privacy Policy" and "Terms of Service" required by Meta.
*   [ ] Submit for Meta (FB/IG) and LinkedIn Developer App approval.

### Phase 4: Scaling
*   [ ] Deploy the Hub to Vercel/Railway.
*   [ ] Connect Turner Installs as the first production client.

---

## 🖼️ 5. Smart Image Engine (Business Logic)
To save data and meet platform requirements, the Hub will perform **Automatic Transcoding**:
*   **Instagram**: Auto-crop to 1:1 or 4:5.
*   **Facebook/LinkedIn**: Optimize for 1.91:1.
*   **X (Twitter)**: Optimize for 16:9.

---

## 🏁 6. Next Steps for Billiam
1.  Initialize a new empty folder/repo for **SocialSync-Hub**.
2.  Load this `socialsyncserver.md` into the root.
3.  We will begin by installing the **Postiz** monorepo structure.

---
*Created by Antigravity AI for Billiam Global • 2026-02-13*
