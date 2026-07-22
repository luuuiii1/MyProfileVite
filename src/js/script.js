// loading screen
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1000);
});

// scroll fade in/out
const revealEls = document.querySelectorAll('.section, .footer');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// editable placeholders
document.querySelectorAll('[contenteditable="true"][data-placeholder]').forEach(el => {
  const placeholder = el.dataset.placeholder;
  el.addEventListener('focus', () => {
    if (el.textContent.trim() === placeholder) el.textContent = '';
  });
  el.addEventListener('blur', () => {
    if (el.textContent.trim() === '') el.textContent = placeholder;
  });
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// contact form (front-end only placeholder)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = 'thanks for reaching out — I\'ll get back to you soon!';
  form.reset();
});