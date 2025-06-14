const intro = document.querySelector('.intro');
const logoSpans = document.querySelectorAll('.logo');
const logoImage = document.querySelector('.logo-image');
const header = document.querySelector('header');

window.addEventListener('DOMContentLoaded', () => {
  // 1. Fade in logo elements
  setTimeout(() => {
    logoImage?.classList.add('active');
    logoSpans.forEach((span, idx) => {
      setTimeout(() => span.classList.add('active'), (idx + 1) * 400);
    });
  });

  // 2. Fade out logo elements
  setTimeout(() => {
    logoSpans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove('active');
        span.classList.add('fade');
      }, (idx + 1) * 50);
    });

    // 3. Slide intro up
    setTimeout(() => {
      intro.style.top = '-100vh';

      // 4. Reveal header after intro fully slides out
      setTimeout(() => {
        if (header) {
          header.classList.remove('hidden-header'); // Enable visibility in DOM
          setTimeout(() => header.classList.add('visible'), 50); // Animate in
        }
      }, 1000); // Match CSS transition
    }, 500);
  }, 2000);
});