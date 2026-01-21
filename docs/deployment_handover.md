# Deployment Instructions for Turner Installs Website

Hi Liam,

We've completed the major upgrade for the Turner Installs website! The new site is built with **Next.js**, a modern web framework that ensures the site is significantly faster, better for SEO, and offers a premium user experience compared to the previous Wix implementation.

## Current Status

We have successfully pushed the entire source code for the new website to your GitHub repository: `ByeBilly/flooring-pros`.

> **Note:** We have replaced the previous Wix Velo code in this repository with the new Next.js application.

## ⚠️ Important: Connecting the Site

Because the new site uses Next.js (a more advanced technology than standard Wix sites), it cannot run on the old Wix "Velo" hosting infrastructure. The domain `turnerinstalls.com.au` is currently still pointing to Wix, which is why the live site has not updated yet.

To make the new site live, we need to deploy it to a platform that supports Next.js. We recommend **Vercel**, which is created by the team behind Next.js and provides excellent performance.

## Steps to Go Live

### 1. Create a Vercel Account
1. Go to [vercel.com/signup](https://vercel.com/signup).
2. Sign up using your existing GitHub account (`ByeBilly`). This will automatically link your repositories.

### 2. Import the Project
1. In the Vercel dashboard, click **"Add New..."** > **"Project"**.
2. You will see a list of your GitHub repositories. Find `flooring-pros` and click **"Import"**.
3. Vercel will automatically detect that this is a Next.js project.
4. Click **"Deploy"**.
   - *The build process will take about 1-2 minutes.*

### 3. connect Your Domain
1. Once the deployment shows "Ready", click on the project card to go to the dashboard.
2. Go to **Settings** > **Domains**.
3. Enter `turnerinstalls.com.au` and click **Add**.
4. Vercel will display a configuration error because the domain is currently pointing to Wix.
5. It will provide you with the correct **DNS Records** (an `A Record` typically `76.76.21.21`).

### 4. Update DNS Records
1. Log in to your domain registrar (where you purchased the domain, e.g., Wix Domains, GoDaddy, CrazyDomains).
2. Find the **DNS Settings** or **Manage DNS** section.
3. Update the functionality to point to Vercel:
   - **Remove/Delete** the old records pointing to Wix IP addresses.
   - **Add** the new A Record provided by Vercel.
4. Save the changes.

## Completion
Once the DNS changes propagate (usually 1-24 hours), `turnerinstalls.com.au` will load your new Next.js website!
