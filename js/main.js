/**
 * Main Application Script - Sueleido Chaves Portfolio
 */

import { initNavigation } from './navigation.js';
import { initTerminal } from './terminal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Navigation
  initNavigation();

  // 2. Initialize Terminal
  initTerminal();

  // 3. Dynamic Copyright Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 4. Copy Email to Clipboard with Toast Notification
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-feedback');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'sueleidoc@gmail.com';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback method
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast('E-mail copiado para a área de transferência! ✓');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span>Copiado! ✓</span>';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2200);
      } catch (err) {
        showToast('Falha ao copiar. E-mail: ' + email);
      }
    });
  }

  // 5. Reveal Animations on Scroll (IntersectionObserver)
  const reveals = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reveals.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('is-revealed'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      reveals.forEach(el => revealObserver.observe(el));
    }
  }

  // 6. Avatar Image Fallback
  const avatarImg = document.getElementById('hero-avatar-img');
  if (avatarImg) {
    avatarImg.addEventListener('error', () => {
      avatarImg.style.display = 'none';
      const parent = avatarImg.parentElement;
      if (parent) {
        parent.style.display = 'grid';
        parent.style.placeItems = 'center';
        parent.style.background = '#0a1923';
        parent.style.fontFamily = 'var(--font-mono)';
        parent.style.color = 'var(--mint)';
        parent.style.fontWeight = 'bold';
        parent.textContent = 'SC';
      }
    });
  }
});
