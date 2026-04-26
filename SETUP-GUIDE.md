# Dubai Syndicate — Setup Guide

## File Structure
```
dubaisyndicate.com/
├── index.html          ← Main homepage (all 12 sections)
├── about.html          ← About page
├── blog.html           ← Blog page
├── privacy.html        ← Privacy policy
├── terms.html          ← Terms of service
├── ads.txt             ← Google AdSense verification
├── robots.txt          ← SEO crawling rules
├── sitemap.xml         ← SEO sitemap
├── .htaccess           ← Apache config (HTTPS, caching, compression)
├── .cpanel.yml         ← Auto-deploy config for cPanel Git
├── .gitignore
├── css/
│   ├── style.css       ← Main stylesheet
│   └── pages.css       ← Inner pages stylesheet
├── js/
│   └── main.js         ← All JavaScript (menu, FAQ, animations, form)
└── images/
    └── logo.png        ← ⚠️ ADD YOUR LOGO HERE
```

## Step 1: Add Your Logo
Place your logo image as `images/logo.png` in the images folder.

## Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Name it `dubaisyndicate.com` (or `dubai-syndicate`)
3. Set it to **Public** or **Private**
4. Do NOT initialize with README
5. Click "Create repository"

## Step 3: Push Files to GitHub
Open terminal/command prompt in the project folder:
```bash
git init
git add .
git commit -m "Initial commit: Dubai Syndicate website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dubaisyndicate.com.git
git push -u origin main
```

## Step 4: Connect GitHub to cPanel (Auto-Deploy)

### Option A: cPanel Git Version Control (Recommended)
1. Log into your cPanel
2. Go to **Git™ Version Control**
3. Click **Create**
4. Enter your GitHub repo URL: `https://github.com/YOUR_USERNAME/dubaisyndicate.com.git`
5. Set the repository path to your website directory (e.g., `/home/username/public_html`)
6. Click **Create**

### Option B: GitHub Webhook (Alternative)
For automatic deploys on every push:
1. In cPanel Git Version Control, note the **Clone URL**
2. In GitHub → Settings → Webhooks → Add webhook
3. Set Payload URL to your cPanel deploy URL
4. Content type: `application/json`
5. Select "Just the push event"

### Important: Edit .cpanel.yml
Open `.cpanel.yml` and replace `YOUR_CPANEL_USERNAME` with your actual cPanel username:
```yaml
- export DEPLOYPATH=/home/YOUR_ACTUAL_USERNAME/public_html/
```

## Step 5: Test Deployment
1. Make a small change to any file
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Test deploy"
git push
```
3. Go to cPanel → Git Version Control → Pull/Deploy
4. Check your website — changes should be live!

## Step 6: Verify AdSense
- `ads.txt` is already created with your publisher ID
- AdSense `<script>` tag is in the `<head>` of every page
- Ad placements are in: after About, mid-page, and before FAQ sections
- Once AdSense approves your site, add your ad slot IDs to the `data-ad-slot=""` attributes

## Notes
- **Logo:** Replace `images/logo.png` with your actual logo file
- **WhatsApp:** All CTAs link to wa.me/971557133786
- **Instagram:** Links to instagram.com/dubaisyndicate
- **Form:** Sends enquiries directly to WhatsApp as a pre-filled message
- **SEO:** Meta tags, Open Graph, sitemap, and robots.txt are all set up
- **.htaccess:** Forces HTTPS, enables compression, caching, and clean URLs
