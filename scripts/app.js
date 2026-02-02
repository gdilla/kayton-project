// ==========================================
// MAIN APPLICATION LOGIC
// ==========================================

console.log('🚀 Extreme Worlds Exoplanet Explorer');
console.log('Initializing application...');

// ==========================================
// PAGE LOAD OPTIMIZATION
// ==========================================

// Preload critical resources
window.addEventListener('load', () => {
  console.log('✅ Page fully loaded');
  
  // Remove any loading screens if present
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 300);
  }
  
  // Trigger initial animations
  triggerInitialAnimations();
});

// ==========================================
// INITIAL ANIMATIONS
// ==========================================

function triggerInitialAnimations() {
  // Fade in hero content
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'fadeIn 1.5s ease forwards';
  }
  
  // Stagger planet cards animation
  const planetCards = document.querySelectorAll('.planet-card');
  planetCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = 'fadeIn 0.8s ease forwards';
    }, index * 100);
  });
}

// ==========================================
// ANALYTICS & TRACKING (Optional)
// ==========================================

function trackPlanetView(planetName) {
  console.log(`Viewing planet: ${planetName}`);
  
  // Could integrate with analytics here
  // Example: gtag('event', 'view_planet', { planet_name: planetName });
}

// Track which planet sections are viewed
const planetSections = document.querySelectorAll('.planet-section');
const viewedPlanets = new Set();

const planetObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !viewedPlanets.has(entry.target.id)) {
      viewedPlanets.add(entry.target.id);
      trackPlanetView(entry.target.id);
    }
  });
}, { threshold: 0.5 });

planetSections.forEach(section => {
  planetObserver.observe(section);
});

// ==========================================
// PERFORMANCE MONITORING
// ==========================================

function checkPerformance() {
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
      const loadTime = perfData.loadEventEnd - perfData.fetchStart;
      console.log(`⚡ Page load time: ${Math.round(loadTime)}ms`);
      
      // Warn if page is slow
      if (loadTime > 3000) {
        console.warn('⚠️ Page load is slower than optimal (>3s)');
      }
    }
  }
}

window.addEventListener('load', () => {
  setTimeout(checkPerformance, 0);
});

// ==========================================
// RESPONSIVE IMAGE HANDLING
// ==========================================

function optimizeImages() {
  // Check if WebP is supported
  const supportsWebP = document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;
  
  if (supportsWebP) {
    console.log('✅ WebP images supported');
  } else {
    console.log('ℹ️ WebP not supported, using fallback images');
  }
}

optimizeImages();

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

// Add ARIA labels dynamically
function enhanceAccessibility() {
  // Add skip link
  const skipLink = document.createElement('a');
  skipLink.href = '#planets';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: white;
    color: black;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
  `;
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add ARIA labels to interactive elements
  document.querySelectorAll('.planet-card').forEach(card => {
    const planetName = card.querySelector('.planet-card-name').textContent;
    card.setAttribute('aria-label', `Explore ${planetName}`);
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    
    // Add keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
  
  console.log('✅ Accessibility enhancements applied');
}

enhanceAccessibility();

// ==========================================
// DARK MODE DETECTION
// ==========================================

function detectColorScheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(`🌓 User prefers: ${prefersDark ? 'dark' : 'light'} mode`);
  
  // Site is already dark-themed, but could adjust contrast
  if (!prefersDark) {
    // Could add a light mode toggle here
    console.log('ℹ️ User prefers light mode - consider adding toggle');
  }
}

detectColorScheme();

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', (e) => {
  console.error('❌ Error occurred:', e.message);
  // Could show user-friendly error message
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
  console.error('❌ Unhandled promise rejection:', e.reason);
});

// ==========================================
// SCROLL PROGRESS INDICATOR
// ==========================================

function createScrollProgress() {
  const progress = document.createElement('div');
  progress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #0047AB, #FF6B35, #FFD700, #9B59B6, #8B0000);
    width: 0%;
    z-index: 10001;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progress);
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progress.style.width = scrolled + '%';
  });
}

createScrollProgress();

// ==========================================
// QR CODE DETECTION
// ==========================================

// Detect if user arrived via QR code (has hash in URL on first load)
function detectQRCodeEntry() {
  const hash = window.location.hash;
  const isFirstVisit = !sessionStorage.getItem('visited');
  
  if (hash && isFirstVisit) {
    console.log('👋 Welcome via QR code!');
    sessionStorage.setItem('visited', 'true');
    sessionStorage.setItem('entry_point', hash);
    
    // Could show a welcome message
    // showWelcomeMessage(hash);
  }
}

detectQRCodeEntry();

// ==========================================
// OFFLINE DETECTION
// ==========================================

window.addEventListener('online', () => {
  console.log('🌐 Back online');
});

window.addEventListener('offline', () => {
  console.log('📡 You are offline');
  // Could show offline message to user
});

// ==========================================
// COPY TO CLIPBOARD HELPER
// ==========================================

window.copyToClipboard = function(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  } else {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return Promise.resolve();
    } catch (err) {
      document.body.removeChild(textarea);
      return Promise.reject(err);
    }
  }
};

// ==========================================
// SHARE FUNCTIONALITY
// ==========================================

window.sharePlanet = function(planetId, planetName) {
  const url = `${window.location.origin}${window.location.pathname}#${planetId}`;
  
  // Check if Web Share API is available
  if (navigator.share) {
    navigator.share({
      title: `${planetName} - Extreme Worlds`,
      text: `Check out ${planetName}, an extreme exoplanet!`,
      url: url
    }).then(() => {
      console.log('✅ Shared successfully');
    }).catch(err => {
      console.log('Share cancelled or failed:', err);
    });
  } else {
    // Fallback to copy to clipboard
    copyToClipboard(url).then(() => {
      alert(`Link to ${planetName} copied to clipboard!`);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
};

// ==========================================
// BROWSER COMPATIBILITY CHECK
// ==========================================

function checkBrowserCompatibility() {
  const features = {
    'Intersection Observer': 'IntersectionObserver' in window,
    'CSS Grid': CSS.supports('display', 'grid'),
    'CSS Custom Properties': CSS.supports('--test', '0'),
    'Fetch API': 'fetch' in window,
    'ES6 Classes': true, // If this script runs, ES6 is supported
  };
  
  const unsupported = Object.entries(features)
    .filter(([name, supported]) => !supported)
    .map(([name]) => name);
  
  if (unsupported.length > 0) {
    console.warn('⚠️ Unsupported features:', unsupported.join(', '));
  } else {
    console.log('✅ All required features supported');
  }
}

checkBrowserCompatibility();

// ==========================================
// EASTER EGGS
// ==========================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    console.log('🎮 Konami Code activated!');
    // Could trigger a special effect
    document.body.style.animation = 'rainbow 5s linear infinite';
  }
});

// ==========================================
// INITIALIZATION COMPLETE
// ==========================================

console.log('✨ Application initialized successfully');
console.log('📊 Total planets loaded:', planetSections.length);
console.log('🌟 Ready to explore extreme worlds!');

// Export functions for use in other scripts
window.ExoplanetApp = {
  trackPlanetView,
  sharePlanet,
  copyToClipboard
};
