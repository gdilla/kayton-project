# 🌌 Extreme Worlds: Exoplanet Explorer

An interactive website showcasing 5 extraordinary exoplanets with unique characteristics, from glass rain to iron storms. Built for a science project with QR code integration for easy mobile access.

## 🪐 Featured Planets

1. **HD 189733 b** - The Blue Glass Rain Planet
2. **WASP-76b** - Iron Rain Planet
3. **55 Cancri e** - Lava Ocean Super-Earth
4. **Kepler-16b** - The Real Tatooine (Two Suns!)
5. **TrES-2b** - Darker Than Coal Planet

## 🚀 Features

- **Interactive Design**: Smooth animations and transitions
- **Mobile-First**: Optimized for QR code scanning on phones
- **Unique Planet Sections**: Each planet has custom visual effects
  - Glass rain particles
  - Iron rain droplets
  - Lava flow and bubbles
  - Dual sun visualization
  - Light absorption effects
- **Accessibility**: Keyboard navigation, screen reader support
- **Performance**: Fast loading, lightweight vanilla JavaScript
- **Responsive**: Works on all device sizes

## 🛠 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks needed
- **Canvas API** - Starfield background
- **Web Fonts** - Space Grotesk & Space Mono

## 📦 Installation

1. Clone or download this repository
2. No build process required - it's pure HTML/CSS/JS!
3. Open `index.html` in a browser, or deploy to a hosting service

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd /path/to/kayton-project

# Deploy
vercel

# Follow prompts to deploy
# For production deployment:
vercel --prod
```

### Option 2: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub, GitLab, or Bitbucket
3. Click "Add New Project"
4. Import your Git repository (or upload folder)
5. Vercel auto-detects static site - no configuration needed!
6. Click "Deploy"
7. Get your production URL (e.g., `exoplanets.vercel.app`)

### Option 3: GitHub + Vercel Integration

1. Push this code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/exoplanets.git
   git push -u origin main
   ```

2. Connect repository to Vercel:
   - Go to Vercel dashboard
   - Click "Import Project"
   - Select your GitHub repo
   - Deploy automatically on every push!

## 🔗 QR Code Generation

After deployment, generate QR codes for each planet:

### URLs to Generate QR Codes For:

```
Landing Page: https://your-site.vercel.app
HD 189733 b:  https://your-site.vercel.app#hd-189733-b
WASP-76b:     https://your-site.vercel.app#wasp-76b
55 Cancri e:  https://your-site.vercel.app#cancri-e
Kepler-16b:   https://your-site.vercel.app#kepler-16b
TrES-2b:      https://your-site.vercel.app#tres-2b
```

### QR Code Generators (Free):

- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Code Monkey](https://www.qrcode-monkey.com/)
- [Canva QR Code Generator](https://www.canva.com/qr-code-generator/)

**Tips:**
- Use high resolution (300 DPI) for printing
- Test QR codes with multiple devices before printing
- Add color to match planet themes (optional)
- Include planet name below QR code for reference

## 📊 Trifold Board Content

### Left Panel: Introduction
- **Title**: "What Are Exoplanets?"
- Definition and context
- Discovery methods (Transit & Radial Velocity diagrams)
- Statistics: "5,000+ exoplanets discovered"
- Main website QR code

### Center Panel: Planet Grid
- **Title**: "5 Extreme Worlds"
- 5 planet cards with mini-descriptions
- Large QR codes for each planet (labeled)
- Visual planet icons/images

### Right Panel: Comparisons
- Temperature comparison chart
- Distance from Earth infographic
- Size comparison (Earth vs planets)
- "Did You Know?" facts section
- Discovery timeline

### Printable Assets Needed:

1. **Planet Illustrations**: Use NASA/ESA exoplanet archive images
2. **Infographics**: Create charts in Canva or similar
3. **QR Codes**: High-res exports (300 DPI)
4. **Text**: Large readable fonts (minimum 14pt)

## 📱 Testing

### Before Printing QR Codes:

```bash
# Test locally first
open index.html

# Test on mobile device
# Option 1: Use local server
python3 -m http.server 8000
# Then visit http://localhost:8000 on your phone

# Option 2: Deploy to Vercel preview
vercel
# Scan preview URL QR code
```

### Cross-Browser Testing:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (iOS)
- ✅ Samsung Internet

## 🎨 Customization

### Color Schemes
Edit `styles/main.css` CSS variables:
```css
:root {
  --hd189733b-primary: #0047AB;
  --wasp76b-primary: #FF6B35;
  --cancri-primary: #FF4500;
  --kepler-primary: #D4A574;
  --tres2b-primary: #1C1C1C;
}
```

### Adding More Planets
1. Add planet section to `index.html`
2. Add planet card to overview grid
3. Create custom styles in `styles/planets.css`
4. Add particle effects in `scripts/animations.js`

## 🔧 Optional Configuration

Create `vercel.json` for custom settings:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 📚 Resources & Credits

- **Data Sources**:
  - [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/)
  - [NASA Exoplanet Exploration](https://exoplanets.nasa.gov/)
  - [ESA Exoplanet Database](https://www.esa.int/Science_Exploration/Space_Science/Exoplanets)

- **Fonts**:
  - [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
  - [Space Mono](https://fonts.google.com/specimen/Space+Mono)

## 📄 License

This project is created for educational purposes. Planet data is sourced from NASA and ESA public archives.

## 🤝 Contributing

Feel free to fork and enhance this project! Ideas:
- Add more planets
- Create 3D planet models
- Add sound effects
- Implement planet comparison tool
- Add planet search functionality

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Made with 🌟 for space exploration education**
