/* nav.js — shared navigation logic */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  /* Close mobile menu on link click */
  document.querySelectorAll('.mobile-nav-link, .mobile-nav-sub').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* Mark active nav item by current page */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-btn').forEach(el => {
    const href = el.getAttribute('href') || el.getAttribute('data-page') || '';
    if (href && path.includes(href.replace('.html', ''))) {
      el.classList.add('active');
    }
  });

  /* Smooth form submission feedback */
  document.querySelectorAll('form.contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      if (btn) {
        btn.textContent = 'Lähetetty! ✓';
        btn.style.background = '#3A5440';
        setTimeout(() => {
          btn.textContent = 'Lähetä viesti';
          btn.style.background = '';
          form.reset();
        }, 3000);
      }
    });
  });
});
