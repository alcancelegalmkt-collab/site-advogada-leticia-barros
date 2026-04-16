/* =====================================================
   PÁGINAS INTERNAS — JavaScript Compartilhado
   Letícia Barros | Advocacia e Consultoria Jurídica
   ===================================================== */

// Header scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
    const backTop = document.getElementById('backTop');
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('navOverlay');

function closeMenu() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    overlay.classList.remove('visible');
}

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    overlay.classList.toggle('visible', isOpen);
});

overlay.addEventListener('click', closeMenu);
navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
    });
});

// Phone mask
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '');
        if (v.length > 11) v = v.slice(0, 11);
        if (v.length > 6) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
        else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
        else if (v.length > 0) v = `(${v}`;
        this.value = v;
    });
}

// Form submit feedback
const form = document.getElementById('contactForm') || document.getElementById('lpForm');
if (form) {
    form.addEventListener('submit', function () {
        const btn = this.querySelector('.form-submit');
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        btn.disabled = true;
    });
}

// Back to top
const backTopBtn = document.getElementById('backTop');
if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
});
