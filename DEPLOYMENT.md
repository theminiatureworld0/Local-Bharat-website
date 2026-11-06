# Deployment Guide: Stone Craft Studio

This guide outlines step-by-step instructions for deploying the Stone Craft Studio website to **Vercel** or any modern cloud hosting platform.

---

## 1. Deploying to Vercel (Recommended)

Next.js is maintained by Vercel, offering native zero-configuration deployments with global edge CDN caching.

### Step 1: Push Code to Git
1. Initialize Git in the project root (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Stone Craft Studio website"
   ```
2. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.

### Step 2: Import Project to Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **Add New...** > **Project**.
3. Select your repository.
4. **Build and Output Settings:**
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Configure Environment Variables
Under the **Environment Variables** section in Vercel, add:
| Variable Name | Example Value | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` | Your production canonical domain |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/xyz...` | Your Formspree form submission endpoint |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `your_token_here` | Optional Google Search Console verification |

Click **Deploy**.

---

## 2. Connecting a Custom Domain

1. Go to your Vercel Project Dashboard > **Settings** > **Domains**.
2. Enter your custom domain (e.g. `stonecraftstudio.com` and `www.stonecraftstudio.com`).
3. Add the DNS records provided by Vercel to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - **A Record:** `@` -> `76.76.21.21`
   - **CNAME Record:** `www` -> `cname.vercel-dns.com`
4. Vercel automatically generates and provisions an **SSL/TLS Certificate (HTTPS)** for free via Let's Encrypt.

---

## 3. Post-Deployment Verification Checklist

Once deployed, verify:

- [x] **Homepage Hero:** Loads quickly with proper aspect ratio and responsive typography.
- [x] **All Collections (`/collections`):** Shows all 6 disciplines and accurate calculated product counts.
- [x] **Category Pages (`/collections/[slug]`):** Loads filtered products, banner image, and breadcrumbs.
- [x] **Product Pages (`/products/[slug]`):** Image gallery lightbox works, specifications table renders, and related products display.
- [x] **WhatsApp Consultation Links:** Click-to-chat opens with pre-filled product name and page link.
- [x] **Contact Form:** Submits to Formspree endpoint (or displays the graceful fallback if not yet set up).
- [x] **Sitemap:** Accessible at `https://yourdomain.com/sitemap.xml`.
- [x] **Robots.txt:** Accessible at `https://yourdomain.com/robots.txt`.
- [x] **404 Handling:** Visiting an invalid path (e.g., `/products/unknown-item`) renders the bespoke 404 page.
- [x] **Mobile Responsiveness:** Tested without horizontal overflow across 360px, 390px, 768px, and desktop widths.
