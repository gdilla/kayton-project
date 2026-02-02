// ==========================================
// STARFIELD BACKGROUND
// ==========================================

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Star class
class Star {
  constructor() {
    this.reset();
  }
  
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.5 + 0.1;
    this.opacity = Math.random();
    this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
    this.fadeSpeed = Math.random() * 0.01 + 0.001;
  }
  
  update() {
    // Twinkling effect
    this.opacity += this.fadeSpeed * this.fadeDirection;
    if (this.opacity <= 0 || this.opacity >= 1) {
      this.fadeDirection *= -1;
    }
    
    // Slow downward drift
    this.y += this.speed;
    
    // Reset if off screen
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }
  
  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create stars
const stars = [];
const starCount = 200;

for (let i = 0; i < starCount; i++) {
  stars.push(new Star());
}

// Animation loop
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  stars.forEach(star => {
    star.update();
    star.draw();
  });
  
  requestAnimationFrame(animateStars);
}

animateStars();

// ==========================================
// GLASS RAIN EFFECT - HD 189733 b
// ==========================================

function createGlassRain() {
  const container = document.getElementById('glass-rain');
  if (!container) return;
  
  setInterval(() => {
    const particle = document.createElement('div');
    particle.className = 'glass-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    particle.style.animationDelay = Math.random() * 0.5 + 's';
    
    container.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
      particle.remove();
    }, 4000);
  }, 200);
}

// ==========================================
// IRON RAIN EFFECT - WASP-76b
// ==========================================

function createIronRain() {
  const container = document.getElementById('iron-rain');
  if (!container) return;
  
  setInterval(() => {
    const particle = document.createElement('div');
    particle.className = 'iron-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
    particle.style.animationDelay = Math.random() * 0.3 + 's';
    
    container.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
      particle.remove();
    }, 3500);
  }, 150);
}

// ==========================================
// LAVA BUBBLES - 55 Cancri e
// ==========================================

function createLavaBubbles() {
  const container = document.getElementById('lava-bubbles');
  if (!container) return;
  
  setInterval(() => {
    const bubble = document.createElement('div');
    bubble.className = 'lava-bubble';
    
    const size = Math.random() * 40 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    container.appendChild(bubble);
    
    // Remove after animation
    setTimeout(() => {
      bubble.remove();
    }, 6000);
  }, 500);
}

// ==========================================
// ORBITAL CLOCK - 55 Cancri e
// ==========================================

function startOrbitClock() {
  const clockElement = document.getElementById('orbit-clock');
  if (!clockElement) return;
  
  let totalSeconds = 18 * 3600; // 18 hours in seconds
  
  setInterval(() => {
    totalSeconds--;
    if (totalSeconds < 0) totalSeconds = 18 * 3600;
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    clockElement.textContent = 
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0');
  }, 100); // Update faster for smooth countdown
}

// ==========================================
// LIGHT RAYS - TrES-2b
// ==========================================

function createLightRays() {
  const container = document.getElementById('light-rays');
  if (!container) return;
  
  setInterval(() => {
    const ray = document.createElement('div');
    ray.className = 'light-ray';
    ray.style.left = Math.random() * 100 + '%';
    ray.style.animationDuration = (Math.random() * 2 + 2) + 's';
    ray.style.animationDelay = Math.random() * 1 + 's';
    
    container.appendChild(ray);
    
    // Remove after animation
    setTimeout(() => {
      ray.remove();
    }, 5000);
  }, 400);
}

// ==========================================
// PARALLAX EFFECT
// ==========================================

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  // Hero parallax
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - (scrolled / 800);
  }
  
  // Planet card parallax
  document.querySelectorAll('.planet-card').forEach((card, index) => {
    const speed = 0.1 + (index * 0.02);
    const cardTop = card.offsetTop;
    const cardScroll = scrolled - cardTop + window.innerHeight;
    
    if (cardScroll > 0 && cardScroll < window.innerHeight + card.offsetHeight) {
      card.style.transform = `translateY(${-cardScroll * speed}px)`;
    }
  });
});

// ==========================================
// PLANET CARD HOVER EFFECTS
// ==========================================

document.querySelectorAll('.planet-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.4s ease';
  });
  
  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    this.style.transform = `
      translateY(-10px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.02)
    `;
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
  });
});

// ==========================================
// TEMPERATURE GAUGES
// ==========================================

function animateTemperatureGauges() {
  document.querySelectorAll('.temp-fill').forEach(fill => {
    const value = fill.getAttribute('data-temp') || 50;
    setTimeout(() => {
      fill.style.width = value + '%';
    }, 500);
  });
}

// ==========================================
// INITIALIZE ALL EFFECTS
// ==========================================

function initializeEffects() {
  // Check if we're on a planet section
  const hash = window.location.hash;
  
  // Always create effects for visible sections
  createGlassRain();
  createIronRain();
  createLavaBubbles();
  startOrbitClock();
  createLightRays();
  animateTemperatureGauges();
}

// Initialize when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEffects);
} else {
  initializeEffects();
}

// Reinitialize when navigating to a planet
window.addEventListener('hashchange', () => {
  setTimeout(initializeEffects, 100);
});

// Performance optimization: pause animations when not visible
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, could pause heavy animations
    console.log('Page hidden, maintaining animations');
  } else {
    // Page is visible again
    console.log('Page visible');
  }
});

console.log('Animations initialized ✨');
