/**
 * Navigation Module - Sueleido Chaves Portfolio
 * Manages mobile menu toggle and active scroll-spy state
 */

export function initNavigation() {
  const toggleBtn = document.querySelector('[data-menu-toggle]');
  const siteNav = document.querySelector('[data-menu]');
  const navLinks = siteNav ? siteNav.querySelectorAll('a[href^="#"]') : [];

  if (toggleBtn && siteNav) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      toggleBtn.classList.toggle('is-open', !isExpanded);
      siteNav.classList.toggle('is-open', !isExpanded);
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.classList.remove('is-open');
        siteNav.classList.remove('is-open');
      });
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (siteNav.classList.contains('is-open')) {
        if (!siteNav.contains(e.target) && !toggleBtn.contains(e.target)) {
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.classList.remove('is-open');
          siteNav.classList.remove('is-open');
        }
      }
    });
  }

  // Active section scroll spy via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
