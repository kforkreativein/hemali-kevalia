/* Hemali Kevalia — Landing Page */

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 70);
}, { passive: true });

// Mobile menu
function openMenu()  { document.getElementById('mobileMenu').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { document.getElementById('mobileMenu').classList.remove('open'); document.body.style.overflow = ''; }

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Results lightbox
function openLightbox(src, name, stat) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxName').textContent = name;
  document.getElementById('lightboxStat').textContent = stat;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
// Close lightbox on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Open first FAQ by default
document.querySelector('.faq-item')?.classList.add('open');

// Facebook Pixel: track WhatsApp clicks as Lead events
document.querySelectorAll('a[href^="https://wa.me"]').forEach(a => {
  a.addEventListener('click', () => {
    if (typeof fbq === 'function') fbq('track', 'Lead', { content_name: 'WhatsApp Click' });
  });
});

// Facebook Pixel: track Calendly section view
const bookingSection = document.getElementById('booking');
if (bookingSection && typeof IntersectionObserver !== 'undefined') {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && typeof fbq === 'function') {
      fbq('track', 'ViewContent', { content_name: 'Booking Section' });
    }
  }, { threshold: 0.3 }).observe(bookingSection);
}

// Results carousel arrows
function scrollCarousel(dir) {
  const grid = document.getElementById('resultsCarousel');
  if (!grid) return;
  const card = grid.querySelector('.result-card');
  const step = card ? card.offsetWidth + 14 : 280;
  grid.scrollBy({ left: dir * step, behavior: 'smooth' });
}

// Hide WA float when footer is visible
const waFloat = document.querySelector('.wa-float');
const footer  = document.getElementById('footer');
if (waFloat && footer && typeof IntersectionObserver !== 'undefined') {
  new IntersectionObserver(entries => {
    waFloat.classList.toggle('wa-hidden', entries[0].isIntersecting);
  }, { threshold: 0.05 }).observe(footer);
}
