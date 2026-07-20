// Pastel VIBGYOR Theme Enhancements

// Add pastel color cycling to headers on hover
document.addEventListener("DOMContentLoaded", function() {
  // Pastel color array
  const pastelColors = [
    '#DDA0DD', // Violet
    '#B5C7EA', // Indigo
    '#AEC6CF', // Blue
    '#77DD77', // Green
    '#FDFD96', // Yellow
    '#FFB347', // Orange
    '#FF6961'  // Red
  ];

  // Add subtle animation to navigation items
  const navItems = document.querySelectorAll('.md-nav__item');
  navItems.forEach((item, index) => {
    const color = pastelColors[index % pastelColors.length];
    item.style.borderLeftColor = color;
  });

  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Add pastel glow effect to active sections
  function updateActiveSection() {
    const headers = document.querySelectorAll('.md-typeset h1, .md-typeset h2, .md-typeset h3');
    const scrollPosition = window.scrollY + 100;

    headers.forEach(header => {
      const section = header.nextElementSibling;
      if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        header.style.textShadow = `0 0 10px ${pastelColors[Math.floor(Math.random() * pastelColors.length)]}40`;
      } else {
        header.style.textShadow = 'none';
      }
    });
  }

  // Throttled scroll event
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Add pastel color flash to buttons on click
  const buttons = document.querySelectorAll('.md-button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
      ripple.style.borderRadius = '50%';
      ripple.style.position = 'absolute';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s ease-out';
      ripple.style.pointerEvents = 'none';

      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add CSS animation for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Pastel color cycling for emphasis
  function cyclePastelColors(element, duration = 3000) {
    let colorIndex = 0;
    setInterval(() => {
      element.style.color = pastelColors[colorIndex % pastelColors.length];
      colorIndex++;
    }, duration / pastelColors.length);
  }

  // Apply color cycling to special elements (if any)
  const rainbowElements = document.querySelectorAll('.rainbow-text');
  rainbowElements.forEach(element => {
    cyclePastelColors(element, 5000);
  });
});

// Add subtle pastel background animation
function createPastelParticle() {
  const particle = document.createElement('div');
  const colors = ['#DDA0DD', '#B5C7EA', '#AEC6CF', '#77DD77', '#FDFD96', '#FFB347', '#FF6961'];

  particle.style.position = 'fixed';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.opacity = '0.6';
  particle.style.zIndex = '9999';
  particle.style.transition = 'all 2s ease-out';

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const endX = startX + (Math.random() - 0.5) * 100;
  const endY = startY - 100 + Math.random() * 50;

  particle.style.left = startX + 'px';
  particle.style.top = startY + 'px';

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.style.left = endX + 'px';
    particle.style.top = endY + 'px';
    particle.style.opacity = '0';
    particle.style.transform = 'scale(0)';
  }, 100);

  setTimeout(() => {
    particle.remove();
  }, 2100);
}

// Create particles occasionally (subtle effect)
setInterval(createPastelParticle, 3000);

// Pastel theme toggle enhancement
const themeToggle = document.querySelector('[data-md-color-scheme]');
if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    document.body.style.transition = 'background-color 0.5s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 500);
  });
}