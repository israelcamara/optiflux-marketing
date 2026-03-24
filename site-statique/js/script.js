/* ============================================================
   OPTIFLUX Marketing — JavaScript principal
   ============================================================ */

/* ── Données globales ── */
const WA_BASE = 'https://wa.me/224620975273';
const BOOKING_LINK = 'https://cal.com/optiflux';

/* ── SVG Helper (icônes inline) ── */
const ICONS = {
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  messageCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  chevronUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
};

/* ============================================================
   HEADER — scroll effect & active nav
   ============================================================ */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active nav link
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-desktop a, .mobile-nav-list a').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    const isHome = href === '' || href === '/';
    const active = isHome ? currentPath === '/' || currentPath === '' : currentPath.startsWith(href) && href !== '/';
    if (isHome && (currentPath === '/' || currentPath === '')) link.classList.add('active');
    else if (!isHome && currentPath.startsWith(href)) link.classList.add('active');
  });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const btn     = document.getElementById('btn-hamburger');
  const menu    = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  if (!btn || !menu) return;

  const open  = () => { menu.classList.add('open'); overlay && overlay.classList.add('open'); document.body.style.overflow = 'hidden'; btn.setAttribute('aria-expanded', 'true'); };
  const close = () => { menu.classList.remove('open'); overlay && overlay.classList.remove('open'); document.body.style.overflow = ''; btn.setAttribute('aria-expanded', 'false'); };
  const toggle = () => menu.classList.contains('open') ? close() : open();

  btn.addEventListener('click', toggle);
  overlay && overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ============================================================
   INTERSECTION OBSERVER — Fade-up animations
   ============================================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.anim-fade-up, .stat-card');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el, target, prefix, suffix, duration = 1800) {
  const start = performance.now();

  const tick = (now) => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // cubic easeOut
    el.textContent = prefix + Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function initCounters() {
  const stats = [
    { value: 15,  suffix: '+',  prefix: '',  label: 'Projets réalisés' },
    { value: 98,  suffix: '%',  prefix: '',  label: 'Clients satisfaits' },
    { value: 150, suffix: '%',  prefix: '+', label: 'Croissance moyenne' },
    { value: 3,   suffix: '',   prefix: '',  label: "Domaines d'expertise" },
  ];

  const cards = document.querySelectorAll('.stat-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card  = entry.target;
        const idx   = [...cards].indexOf(card);
        const stat  = stats[idx];
        if (!stat) return;
        const valueEl = card.querySelector('.stat-value');
        if (valueEl) animateCounter(valueEl, stat.value, stat.prefix, stat.suffix);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.35 });

  cards.forEach(card => observer.observe(card));
}

/* ============================================================
   BOOKING MODAL
   ============================================================ */
function initBookingModal() {
  const overlay = document.getElementById('booking-overlay');
  const wrap    = document.getElementById('booking-wrap');
  const closeBtn = document.getElementById('booking-close');
  if (!overlay || !wrap) return;

  const waMsg = encodeURIComponent('Bonjour OPTIFLUX ! Je souhaite réserver un appel stratégique. Quelles sont vos disponibilités ?');

  const open = () => {
    overlay.classList.add('open');
    wrap.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    overlay.classList.remove('open');
    wrap.classList.remove('open');
    document.body.style.overflow = '';
  };

  overlay.addEventListener('click', close);
  closeBtn && closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  wrap.querySelector('.modal-box') && wrap.querySelector('.modal-box').addEventListener('click', e => e.stopPropagation());

  // Set WA link in modal
  const waBtn = document.getElementById('modal-wa-btn');
  if (waBtn) waBtn.href = `${WA_BASE}?text=${waMsg}`;

  // All "Réserver un appel" buttons
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', open);
  });

  window.openBookingModal = open;
  window.closeBookingModal = close;
}

/* ============================================================
   WHATSAPP FAB
   ============================================================ */
function initWhatsAppFAB() {
  const fab = document.getElementById('wa-fab');
  if (!fab) return;

  const waMsg = encodeURIComponent('Bonjour OPTIFLUX ! Je suis intéressé(e) par vos services.\nPouvez-vous m\'en dire plus ?');
  const waBtn = fab.querySelector('.wa-btn');
  if (waBtn) waBtn.href = `${WA_BASE}?text=${waMsg}`;

  setTimeout(() => fab.classList.add('visible'), 1500);
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function initScrollToTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   MARQUEE — pause on hover (already handled by CSS)
   ============================================================ */

/* ============================================================
   PORTFOLIO HOVER CARDS — extra touch for mobile (tap toggle)
   ============================================================ */
function initPortfolioCards() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', e => {
      // Si le lien intérieur est cliqué, laisser naviguer
      if (e.target.closest('a[href]')) return;
      // Sinon suivre le href du data-href
      const href = card.dataset.href;
      if (href) window.location.href = href;
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initCounters();
  initBookingModal();
  initWhatsAppFAB();
  initScrollToTop();
  initPortfolioCards();

  // Set dynamic year in footer
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
