# 🏗️ Turner Installs Website - Project Context & Initialization

## 📌 Project Overview
**Current Workspace**: `c:\dev\turnerinstallswebsite`
**Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React.
**Primary Purpose**: Main business website for Turner Installs (Flooring services).

---

## 🚀 Active Module: PumpPosts (Formerly Roadara)
**Status**: Integrated Prototype / Client View
**Location**: `/app/pumpposts`

The **PumpPosts** module (previously known as Roadara and SocialSync) is currently embedded directly within this website to simulate the client-side experience of a social media management engine. 

### 🔑 Key Architecture Details
1.  **Branding**: Fully rebranded to **PumpPosts**.
    *   **Dashboard**: `/pumpposts/dashboard` (The main client interface).
    *   **Landing**: `/pumpposts` (Internal marketing/landing page).
    *   **Asset Paths**: All components and logic moved to `components/pumpposts`, `lib/pumpposts-auth.ts`, etc.

2.  **Authentication Simulation**:
    *   **Auth Logic**: `app/api/pumpposts/auth/route.ts` handles magic code requests via Resend.
    *   **Session Management**: Uses `jose` to sign a JWT stored in a `pumpposts_session` cookie.
    *   **Auth Data**: Configuration (allowed emails, secrets) is in `data/pumpposts-auth.ts`.
    *   **Master Key**: "billiamglobal@gmail.com" is hardcoded as the Master Admin.

3.  **The "Bridge" Connection**:
    *   **Purpose**: Simulates connecting this website to an external "PumpPosts Hub".
    *   **Route**: `app/bridge/auth/route.ts`.
    *   **Usage**: Clicking a link from `bridge-links.json` triggers this route, enabling a "Connected" state in the dashboard.

4.  **Redirects**:
    *   `next.config.mjs` contains redirects mapping legacy `/socialsync` and `/roadara` paths to `/pumpposts`.

---

## 📂 Important File Paths
*   **Dashboard Page**: `app/pumpposts/dashboard/page.tsx`
*   **Auth Component**: `components/pumpposts/AuthShield.tsx` (Protects the dashboard)
*   **Team Management**: `components/pumpposts/TeamManagement.tsx`
*   **Bridge Logic**: `app/bridge/auth/route.ts`

---

## 🔮 Next Steps (Roadmap)
1.  **Maintain**: Ensure the prototype remains functional for client demos.
2.  **Standalone Build**: The *actual* PumpPosts engine will be built in a separate repo (`c:\dev\pumpposts`). This current module will eventually connect to that real API instead of the simulated internal logic.

---
*Context generated for Antigravity Session Handoff • 2026-02-14*
