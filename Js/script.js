// ══════════════════════════════════════════════════
// Mobile nav toggle
// ══════════════════════════════════════════════════
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ══════════════════════════════════════════════════
// Active nav link on scroll
// ══════════════════════════════════════════════════
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav__link');

if (sections.length && links.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('nav__link--active'));
          const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('nav__link--active');
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

// ══════════════════════════════════════════════════
// Scroll-reveal — uses CSS class, NOT inline transform
// so card hover effects still work after reveal
// ══════════════════════════════════════════════════
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  // Only reveal cards and the about intro — NOT hero__content
  // (hero is already visible on page load; animating it causes a flash)
  const revealItems = document.querySelectorAll('.avatar-card, .about__intro');

  revealItems.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.07}s`;
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealItems.forEach(el => revealObserver.observe(el));
}
