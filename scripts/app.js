// Disable automatic scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Wait for full page load, then fade out splash screen
window.addEventListener('load', handlePageLoad);

// Initialize all behaviors once DOM is ready
window.addEventListener('DOMContentLoaded', init);

/**
 * Fade out the splash screen after a delay
 */
function handlePageLoad() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  setTimeout(() => {
    splash.classList.add('hide');
    setTimeout(() => (splash.style.display = 'none'), 500);
  }, 2000);
}

/**
 * Entry point: set up functionality
 */
function init() {
  initStickyNavbar();
  initHamburgerMenu();
  initNavLinkSmoothScroll();
  initTypedJS();
  initScrollTopBtn();
}

/**
 * Add/remove blur on navbar when scrolling
 */
function initStickyNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/**
 * Toggle mobile menu and icon animation
 */
function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  const barsIcon = hamburger.querySelector('.fa-bars');
  const xIcon    = hamburger.querySelector('.fa-x');

  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll', isOpen);

    // Icon animations
    if (isOpen) {
      barsIcon.style.opacity = '0';
      barsIcon.style.transform = 'rotate(90deg)';
      xIcon.style.opacity = '1';
      xIcon.style.transform = 'rotate(0deg)';
    } else {
      barsIcon.style.opacity = '1';
      barsIcon.style.transform = 'rotate(0deg)';
      xIcon.style.opacity = '0';
      xIcon.style.transform = 'rotate(-90deg)';
    }
  });

  // Close menu when clicking a nav link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeMenu(hamburger, navLinks));
  });
}

/**
 * Smooth-scroll to anchor targets, closing menu first
 */
function initNavLinkSmoothScroll() {
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      // Close menu before scrolling
      const hamburger = document.getElementById('hamburger');
      const navLinks  = document.getElementById('navLinks');
      closeMenu(hamburger, navLinks);

      setTimeout(() => {
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    });
  });
}

/**
 * Helper to close the mobile menu and reset icons
 */
function closeMenu(hamburger, navLinks) {
  if (!hamburger || !navLinks) return;

  hamburger.classList.remove('open');
  navLinks.classList.remove('active');
  document.body.classList.remove('no-scroll');

  const barsIcon = hamburger.querySelector('.fa-bars');
  const xIcon    = hamburger.querySelector('.fa-x');
  barsIcon.style.opacity = '1';
  barsIcon.style.transform = 'rotate(0deg)';
  xIcon.style.opacity = '0';
  xIcon.style.transform = 'rotate(-90deg)';
}

/**
 * Initialize typing animation using Typed.js
 */
function initTypedJS() {
  if (typeof Typed !== 'undefined') {
    setTimeout(() => {
      new Typed('.auto-type', {
        strings: ["Zaky.", "I'm a Student.", "I'm a Programmer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });
    }, 2500);
  }
}

/**
 * Show scroll-to-top button and handle its click
 */
function initScrollTopBtn() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
