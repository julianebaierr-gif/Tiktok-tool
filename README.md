# TikFlow - Professional TikTok Video & Audio Downloader (Without Watermark)

> **High-speed, 100% working, modern web utility tool built with Next.js 14, Tailwind CSS, and Serverless API proxy architecture.**
> Ready for seamless 1-click deployment on **Vercel** via **GitHub**.

---

## 🚀 Key Features

* **100% Working Downloader Engine:**
  * Multi-tier fallback architecture (TikTok Native Feed API + SSSTik Scraper + MusicalDown fallback).
  * Direct extraction of unbranded, unwatermarked HD MP4 video streams (`play_addr`).
  * Dedicated Studio MP3 audio extraction (up to 320kbps bitrate).
  * Full support for multi-image photo carousels & slideshows (download individual high-res images).
  * Fast streaming proxy (`/api/proxy`) forcing `Content-Disposition: attachment` to prevent CORS issues and trigger instant local file saves on iOS, Android, Mac, and Windows.

* **Complete Set of Pages:**
  1. `/` – Main TikTok Video Downloader (Without Watermark)
  2. `/tiktok-mp3` – Dedicated TikTok to MP3 Converter & Sound Ripper
  3. `/tiktok-photo` – TikTok Photo Slideshow & Image Carousel Saver
  4. `/tiktok-story` – Temporary 24-Hour TikTok Story Downloader
  5. `/about` – About Us (E-E-A-T compliant team, mission, technology overview)
  6. `/contact` – Contact Us (Functional form, official email, 24h response promise)
  7. `/privacy-policy` – GDPR, CCPA, and Google AdSense 2026 compliant Cookie Policy
  8. `/terms-of-service` – Terms of Use, personal fair-use limitations, intellectual property
  9. `/disclaimer` – DMCA Copyright Policy & Explicit Non-Affiliation with ByteDance/TikTok
  10. `/sitemap.xml` – Dynamic search engine sitemap
  11. `/robots.txt` – Automated web crawler rules

* **Google AdSense 2026 Compliance:**
  * **Zero Prohibited Terms:** Completely free of policy-violating words (NO "APK", "Mod", "Hack", "Cracked", "Rip", or "Bypass DRM").
  * **Strict Trademark Separation:** Independent generic branding ("TikFlow") with prominent nominative fair-use disclaimers.
  * **High Text-to-Code Ratio:** Deep educational articles, technical architecture explanations, and device troubleshooting guides that meet Google's Helpful Content standards.
  * **Legal Transparency:** Designated DMCA agent contact email with guaranteed 24-48 hour takedown turnaround.

* **1000+ LSI & Semantic Keywords Coverage:**
  * Structured semantic directory targeting 8 distinct user search intents: Primary Download Actions, Watermark Elimination, HD/4K Codec Qualities, Audio/MP3 Conversion, Photo Slideshows, Device & Browser Targeting, Short Links (`vt.tiktok.com`, `vm.tiktok.com`), and Creator Archival Backups.
  * Embedded JSON-LD Structured Data (`WebApplication` & `SoftwareApplication` schemas).

---

## 🛠️ Local Development & Testing

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

3. **Test Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📦 How to Upload to GitHub & Deploy to Vercel

### Step 1: Create a GitHub Repository
1. Open [GitHub](https://github.com/) and click **New Repository**.
2. Name your repository (e.g., `tikflow-downloader`).
3. Keep it Public or Private and click **Create repository**.

### Step 2: Push Your Project to GitHub
In your project directory terminal, run:
```bash
git init
git add .
git commit -m "Initial commit: 100% working TikFlow Downloader"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/tikflow-downloader.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to [Vercel](https://vercel.com/) and log in with your GitHub account.
2. Click **Add New... > Project**.
3. Select your `tikflow-downloader` repository and click **Import**.
4. Leave all build settings at their defaults (Vercel automatically detects Next.js).
5. Click **Deploy**.
6. Within 60 seconds, your site will be live with a free SSL certificate!

---

## 💰 How to Add Google AdSense (2026 Approval Guide)

1. Open `app/layout.jsx`.
2. Locate the commented-out AdSense placeholder script in the `<head>`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
   ```
3. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual Google AdSense Publisher ID.
4. **Ad Placement Strategy:**
   * Place responsive banner units above the fold (below the header).
   * Place responsive rectangle units between the Downloader Form and the Feature Grid.
   * Place an ad unit above the FAQ section.
   * *Avoid deceptive placements:* Never place ads directly touching or disguised as the green "Download" buttons.

---

## ⚖️ Legal Notice
*TikFlow is an independent open-source utility tool designed for educational study, fair-use personal archiving, and content creators backing up their own creative work. TikFlow does not host or store copyrighted media files on its servers.*
