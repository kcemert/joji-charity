/* ============================================
   Fr. Joji Charity — Main JS
   ============================================ */

// ── Mobile nav toggle ──────────────────────
(function () {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ── Donation amount selector ───────────────
(function () {
  const amtBtns = document.querySelectorAll('.amount-btn');
  if (!amtBtns.length) return;

  amtBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amtBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Default select first
  if (amtBtns[0]) amtBtns[0].classList.add('selected');
})();

// ── Recurring / one-time toggle ───────────
(function () {
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  if (!toggleBtns.length) return;
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
})();

// ── Donation form submit (placeholder) ────
(function () {
  const form = document.getElementById('donateForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Processing…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Thank you! (Stripe integration coming soon)';
      btn.style.background = '#2D6A4F';
    }, 1200);
  });
})();

// ── Smooth scroll for anchor links ────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
