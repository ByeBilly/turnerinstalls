# 🚀 PumpPosts Hub: The Engine Initialization

This document is the "Master Seed" for our standalone social media infrastructure. **Billiam: Once you open this folder in Antigravity, I will read this file and begin the automated build.**

---

## 🏗️ Project Architecture: PumpPosts
**Goal**: A central "SaaS-lite" engine that manages social media auth, posting, and scheduling for unlimited client websites.

### 🛠️ Technical Stack (Phase 1)
*   **Core**: Next.js 14 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS + Shadcn UI (for a professional admin feel)
*   **Auth**: NextAuth.js (to manage your Master Admin login)
*   **Engine Muscle**: Adapted Postiz Core (Open Source)
*   **Database**: PostgreSQL + Prisma

---

## 📍 Phase 1: The Foundation (Automated Initialization)
**Tasks to execute as soon as this repo is opened:**

1.  **Framework Setup**: 
    - `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir false --import-alias "@/*"`
2.  **Infrastructure Core**:
    - Install `prisma`, `@prisma/client`
    - Install `lucide-react` for iconography
    - Install `jose` for secure JWT communication between client sites (like Turner Installs) and this Hub.
3.  **The "Bridge" API**:
    - Build the **Registration Endpoint** where you generate API Keys for client sites.
4.  **Admin UI**:
    - Build the **PumpPosts Master Dashboard** where you see all your connected client sites and their "Engine Health."

---

## 🚦 Instructions for Antigravity:
1.  Verify the current working directory is `c:\dev\pumpposts`.
2.  Initialize the Next.js project using non-interactive flags.
3.  Build the `prisma/schema.prisma` file with models for `Site` (Client), `SocialAccount`, and `PostQueue`.
4.  Create a premium landing page at `page.tsx` that reflects the **PumpPosts** brand (High energy, powerful, growth-oriented).

---
*Blueprint generated for Billiam by Antigravity AI • 2026-02-14*
