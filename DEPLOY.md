# Deploy Stash Club Landing to AWS Amplify (with GitHub + custom domain)

This guide gets your landing page live on AWS Amplify using GitHub and a custom domain.

---

## 1. Push the project to GitHub

If you haven’t already:

```bash
cd "/Users/miguelelias/Downloads/Stash-Club-Landing 2"
git init
git add .
git commit -m "Initial commit – Amplify-ready"
```

Create a new repository on [GitHub](https://github.com/new) (e.g. `stash-club-landing`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/stash-club-landing.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `stash-club-landing` with your GitHub username and repo name.

---

## 2. Connect and deploy on AWS Amplify

1. Open **[AWS Amplify Console](https://console.aws.amazon.com/amplify/)** and sign in.
2. Click **“New app”** → **“Host web app”**.
3. Choose **GitHub** and authorize AWS if prompted.
4. Select the repository and branch (e.g. `main`), then **Next**.
5. **Build settings** – Amplify will detect `amplify.yml` in the repo. Confirm:
   - **Build command:** (from `amplify.yml`: `npm run build:client`)
   - **Output directory:** `dist/public`
   - If the wizard asks, choose **“Single-page application (SPA)”** so client-side routes work.
6. Click **Next**, then **Save and deploy**.

Amplify will install dependencies, run the build, and deploy. When the build is green, your app will be live at an `*.amplifyapp.com` URL.

---

## 3. SPA routing (if links like `/about` show 404)

If you use client-side routes (e.g. `/about`, `/pricing`), add a rewrite so all non-file requests serve `index.html`:

1. In Amplify: **Hosting** → **Rewrites and redirects** → **Edit**.
2. Add a rule:
   - **Source:** `/<*>`
   - **Target:** `/index.html`
   - **Type:** **Rewrite (200)**  
   (so the URL stays the same and the SPA can handle the route.)

Save. Your SPA routes should work.

---

## 4. Add a custom domain

1. In Amplify: **Hosting** → **Domain management** → **Add domain**.
2. Enter your domain (e.g. `stashclub.com` or `www.stashclub.com`).
3. Follow the steps to verify ownership (DNS or certificate).
4. Amplify will show the DNS records to add at your registrar (e.g. CNAME to the Amplify URL).
5. Add those records where your domain is managed (e.g. Route 53, Cloudflare, Namecheap).
6. Wait for DNS to propagate (often 5–30 minutes). Amplify will issue the SSL certificate automatically.

---

## 5. Backend / API (optional)

This setup deploys only the **frontend** (the Vite/React app) to Amplify. The Express server and database in this repo are **not** run by Amplify.

- If the landing page is **static** (no login, no API calls), you’re done.
- If you need the **API/backend** (Express + DB), you’ll need to deploy it elsewhere (e.g. AWS Elastic Beanstalk, ECS, or Lambda) and point the frontend’s API base URL to that backend (e.g. via environment variables in the build).

---

## Quick reference

| Item            | Value            |
|----------------|------------------|
| Build command  | `npm run build:client` |
| Output directory | `dist/public` |
| App type       | Single-page application (SPA) |

Build spec is in **`amplify.yml`** at the repo root. To change Node version or build steps, edit that file and push to GitHub; Amplify will use the updated spec on the next build.
