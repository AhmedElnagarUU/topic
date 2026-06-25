/**
 * Prev / next concept navigation bar
 * Requires: concept-path.js, body[data-concept-id]
 */
(function () {
  function hrefFor(slug) {
    return `../${slug}/index.html`;
  }

  function render() {
    const id = document.body.dataset.conceptId;
    if (!id || typeof CONCEPT_PATH === 'undefined') return;

    const idx = CONCEPT_PATH.findIndex(c => c.id === id);
    if (idx === -1) return;

    const current = CONCEPT_PATH[idx];
    const prev = idx > 0 ? CONCEPT_PATH[idx - 1] : null;
    const next = idx < CONCEPT_PATH.length - 1 ? CONCEPT_PATH[idx + 1] : null;

    const nav = document.createElement('nav');
    nav.className = 'concept-pager';
    nav.setAttribute('aria-label', 'Concept navigation');

    nav.innerHTML = `
      ${prev
        ? `<a href="${hrefFor(prev.slug)}" class="concept-pager-btn prev">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
            <span class="pager-label"><span class="pager-num">${prev.num}</span>${prev.name}</span>
          </a>`
        : `<a href="../../index.html" class="concept-pager-btn prev muted">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
            <span class="pager-label">All concepts</span>
          </a>`}
      <div class="concept-pager-current">
        <span class="pager-num">${current.num}</span>
        <span class="pager-name">${current.name}</span>
      </div>
      ${next
        ? `<a href="${hrefFor(next.slug)}" class="concept-pager-btn next">
            <span class="pager-label"><span class="pager-num">${next.num}</span>${next.name}</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>`
        : `<a href="../../index.html" class="concept-pager-btn next muted">
            <span class="pager-label">All concepts</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>`}
    `;

    const host = document.querySelector('.concept-main') || document.querySelector('main');
    if (host) host.appendChild(nav);

    if (window.lucide) lucide.createIcons();
  }

  document.addEventListener('DOMContentLoaded', render);
})();
