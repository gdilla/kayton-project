// ==========================================
// NAVIGATION & SMOOTH SCROLLING
// ==========================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without jumping
      history.pushState(null, null, this.getAttribute('href'));
    }
  });
});

// Navigation background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add background when scrolled
  if (currentScroll > 100) {
    nav.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    nav.style.background = 'rgba(10, 10, 10, 0.8)';
  }
  
  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});

// Handle direct navigation to planet sections (e.g., from QR codes)
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    // Wait a bit for page to load, then scroll
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
});

// Update active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Toggle further reading sections
document.querySelectorAll('.further-reading h3').forEach(heading => {
  heading.addEventListener('click', function() {
    this.parentElement.classList.toggle('collapsed');
  });
});

// Share functionality (copy link to clipboard)
function shareLink(planetId) {
  const url = `${window.location.origin}${window.location.pathname}#${planetId}`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  } else {
    // Fallback for older browsers
    const temp = document.createElement('input');
    temp.value = url;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    alert('Link copied to clipboard!');
  }
}

// Mobile menu toggle (if needed)
const createMobileMenu = () => {
  if (window.innerWidth <= 768) {
    const navContent = document.querySelector('.nav-content');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button if it doesn't exist
    if (!document.querySelector('.menu-toggle')) {
      const menuToggle = document.createElement('button');
      menuToggle.className = 'menu-toggle';
      menuToggle.innerHTML = '☰';
      menuToggle.style.cssText = `
        background: none;
        border: 2px solid white;
        color: white;
        font-size: 1.5rem;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 8px;
        display: none;
      `;
      
      if (window.innerWidth <= 480) {
        menuToggle.style.display = 'block';
        navContent.insertBefore(menuToggle, navLinks);
        
        menuToggle.addEventListener('click', () => {
          navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.left = '0';
          navLinks.style.right = '0';
          navLinks.style.background = 'rgba(10, 10, 10, 0.98)';
          navLinks.style.padding = '1rem';
        });
      }
    }
  }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const currentSection = sections.find(section => {
    const rect = section.getBoundingClientRect();
    return rect.top >= -100 && rect.top <= 100;
  });
  
  if (!currentSection) return;
  
  const currentIndex = sections.indexOf(currentSection);
  
  // Arrow Down or Page Down - next section
  if ((e.key === 'ArrowDown' && e.metaKey) || e.key === 'PageDown') {
    e.preventDefault();
    if (currentIndex < sections.length - 1) {
      sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Arrow Up or Page Up - previous section
  if ((e.key === 'ArrowUp' && e.metaKey) || e.key === 'PageUp') {
    e.preventDefault();
    if (currentIndex > 0) {
      sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Home key - go to top
  if (e.key === 'Home' && e.metaKey) {
    e.preventDefault();
    sections[0].scrollIntoView({ behavior: 'smooth' });
  }
  
  // End key - go to bottom
  if (e.key === 'End' && e.metaKey) {
    e.preventDefault();
    sections[sections.length - 1].scrollIntoView({ behavior: 'smooth' });
  }
});

console.log('Navigation initialized ✨');
