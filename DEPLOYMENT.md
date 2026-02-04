# 🚀 Deployment Instructions

## Quick Start: Deploy to Vercel

### Option 1: Vercel CLI (Fastest)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy from this directory**:
   ```bash
   cd /Users/gautambanerjee/projects/kayton-project
   vercel
   ```

3. **Follow the prompts**:
   - Login/signup when prompted
   - Select "Set up and deploy"
   - Project name: `exoplanets` (or your choice)
   - Which directory: `.` (current)
   - Want to override settings? **No**

4. **Get your preview URL** (e.g., `exoplanets-abc123.vercel.app`)

5. **Deploy to production**:
   ```bash
   vercel --prod
   ```

6. **Your site is live!** 🎉

---

### Option 2: Vercel Dashboard (Recommended for Beginners)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up** with GitHub, GitLab, or email
3. **Click "Add New Project"**
4. **Choose one of these methods**:

#### Method A: Import from Git (Best Practice)
```bash
# Create GitHub repo (if you haven't already)
gh repo create exoplanets --public --source=. --remote=origin --push

# Or manually:
git remote add origin https://github.com/YOUR_USERNAME/exoplanets.git
git branch -M main
git push -u origin main
```

Then in Vercel dashboard:
- Click "Import Project"
- Connect your GitHub account
- Select your repository
- Click "Deploy"

#### Method B: Upload Folder
- Click "Import Project" → "Upload Folder"
- Select your `kayton-project` folder
- Click "Deploy"

---

## 📱 QR Code Generation

**✅ QR codes have been generated!** They are located in `assets/qrcodes/`.

### Live Site URLs

```
Landing Page:  https://kayton-project.vercel.app
HD 189733 b:   https://kayton-project.vercel.app#hd-189733-b
WASP-76b:      https://kayton-project.vercel.app#wasp-76b
55 Cancri e:   https://kayton-project.vercel.app#cancri-e
Kepler-16b:    https://kayton-project.vercel.app#kepler-16b
TrES-2b:       https://kayton-project.vercel.app#tres-2b
```

### Generated QR Code Files

Located in `assets/qrcodes/`:
- `qr-landing-page.png` / `.svg` - Main website
- `qr-hd-189733-b.png` / `.svg` - HD 189733 b
- `qr-wasp-76b.png` / `.svg` - WASP-76b
- `qr-cancri-e.png` / `.svg` - 55 Cancri e
- `qr-kepler-16b.png` / `.svg` - Kepler-16b
- `qr-tres-2b.png` / `.svg` - TrES-2b

### Regenerate QR Codes (if needed)

```bash
npm install qrcode
node generate-qrcodes.js
```

### Step 3: Test QR Codes

**CRITICAL: Test before printing!**

1. Print a test page with all QR codes
2. Scan each one with your phone
3. Verify it goes to the correct planet
4. Test on multiple devices (iPhone, Android)
5. Test from different angles and distances

### Step 4: Print for Trifold Board

**Print Sizes**:
- Landing page QR: 3" × 3" (for left panel)
- Planet QRs: 2" × 2" each (for center panel)

**Print Settings**:
- Resolution: 300 DPI minimum
- Paper: White cardstock or photo paper
- Printer: Color (or high-quality black & white)
- Cut with borders for neat appearance

---

## ✅ Post-Deployment Checklist

### Immediate Testing:
- [ ] Visit production URL in browser
- [ ] Test on mobile device
- [ ] Check all 5 planet anchor links work
- [ ] Verify smooth scroll behavior
- [ ] Test QR codes scan correctly
- [ ] Check responsive design on different screen sizes

### Performance:
- [ ] Page loads in < 3 seconds
- [ ] Animations run smoothly
- [ ] No console errors
- [ ] Images load properly

### Content:
- [ ] All planet data is accurate
- [ ] No typos in text
- [ ] All links work
- [ ] Further reading links open correctly

---

## 🔧 Updating Your Site

### Method 1: Git Push (if using GitHub integration)
```bash
# Make changes to files
git add .
git commit -m "Update planet information"
git push

# Vercel auto-deploys on push!
```

### Method 2: Vercel CLI
```bash
# Make changes to files
vercel --prod
```

### Method 3: Re-upload via Dashboard
- Go to Vercel dashboard
- Select your project
- Upload new version

---

## 🎨 Custom Domain (Optional)

If you want a custom domain like `exoplanets.com`:

1. Buy domain from registrar (Namecheap, Google Domains, etc.)
2. In Vercel dashboard:
   - Go to your project
   - Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions
3. Wait for propagation (can take 24-48 hours)

---

## 🐛 Troubleshooting

### QR Code Not Working:
- ✅ Check URL is correct (including `#planet-id`)
- ✅ Ensure site is deployed (not just preview)
- ✅ Test QR code with multiple apps
- ✅ Regenerate with higher error correction

### Site Not Loading:
- ✅ Check Vercel deployment status
- ✅ Look for build errors in Vercel logs
- ✅ Verify all file paths are correct
- ✅ Clear browser cache

### Animations Not Working:
- ✅ Check browser console for errors
- ✅ Verify JavaScript files are loading
- ✅ Test in different browsers
- ✅ Check if browser has JavaScript enabled

### Mobile Display Issues:
- ✅ Test in Chrome DevTools mobile view
- ✅ Check responsive CSS breakpoints
- ✅ Verify viewport meta tag is present
- ✅ Test on actual mobile devices

---

## 📊 Analytics (Optional)

Add Vercel Analytics to track visitors:

1. In Vercel dashboard → Project → Analytics
2. Enable Vercel Analytics (free tier available)
3. See how many people visit each planet!

---

## 🔒 Environment & Settings

Your site includes:
- ✅ Security headers (XSS protection, etc.)
- ✅ Performance optimization (caching)
- ✅ Auto HTTPS
- ✅ Global CDN
- ✅ Automatic compression

No additional configuration needed!

---

## 📞 Support

**Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)

**Common Issues**:
- [Deployment errors](https://vercel.com/docs/concepts/deployments/troubleshoot-a-build)
- [Custom domains](https://vercel.com/docs/concepts/projects/domains)
- [Environment variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## 🎯 Next Steps After Deployment

1. **Generate all QR codes** with production URL
2. **Print test page** and verify scanning
3. **Create trifold board** using TRIFOLD_BOARD_GUIDE.md
4. **Print final QR codes** at high resolution
5. **Test presentation** with friends/family
6. **Share your project!** 🚀

---

**Your website is ready to explore the cosmos! 🌌✨**
