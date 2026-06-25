/**
 * Hover popups for animation elements with data-tip-title / data-tip-text
 */
(function () {
  let tip = null;

  function ensureTip() {
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'anim-hover-tip hidden';
      tip.setAttribute('role', 'tooltip');
      document.body.appendChild(tip);
    }
    return tip;
  }

  function show(el, e) {
    const title = el.dataset.tipTitle;
    const text = el.dataset.tipText;
    if (!title) return;
    const t = ensureTip();
    t.innerHTML = `<strong>${title}</strong>${text ? `<p>${text}</p>` : ''}`;
    t.classList.remove('hidden');
    move(e);
  }

  function move(e) {
    if (!tip || tip.classList.contains('hidden')) return;
    const pad = 14;
    let x = e.clientX + pad;
    let y = e.clientY + pad;
    const r = tip.getBoundingClientRect();
    if (x + r.width > window.innerWidth - pad) x = e.clientX - r.width - pad;
    if (y + r.height > window.innerHeight - pad) y = e.clientY - r.height - pad;
    tip.style.left = `${x}px`;
    tip.style.top = `${y}px`;
  }

  function hide() {
    if (tip) tip.classList.add('hidden');
  }

  function bind(root) {
    (root || document).querySelectorAll('[data-tip-title]').forEach(el => {
      if (el.dataset.tipBound) return;
      el.dataset.tipBound = '1';
      el.addEventListener('mouseenter', e => show(el, e));
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', hide);
      el.addEventListener('focus', e => show(el, e));
      el.addEventListener('blur', hide);
    });
  }

  document.addEventListener('DOMContentLoaded', () => bind(document));
  window.AnimTooltips = { bind, refresh: () => bind(document) };
})();
