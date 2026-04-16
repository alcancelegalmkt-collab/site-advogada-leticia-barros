/* =====================================================
   LANDING PAGES — JavaScript Compartilhado
   Letícia Barros | Advocacia e Consultoria Jurídica
   ===================================================== */

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .stagger');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        // Toggle current
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
const form = document.getElementById('lpForm');
if (form) {
    form.addEventListener('submit', function () {
        const btn = this.querySelector('.form-submit');
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        btn.disabled = true;
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
});
