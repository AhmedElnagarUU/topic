/**
 * Concept Lab — Search across concepts and steps
 */
const ConceptSearch = (function () {
  let index = [];
  let focusedIndex = -1;

  function init(containerEl, options = {}) {
    if (!containerEl) return;
    index = getSearchIndex();
    const input = containerEl.querySelector('.search-input');
    const results = containerEl.querySelector('.search-results');
    if (!input || !results) return;

    const basePath = options.basePath || '';

    function close() {
      results.classList.remove('open');
      focusedIndex = -1;
    }

    function open() {
      results.classList.add('open');
    }

    function buildUrl(item) {
      let url = `${basePath}concepts/${item.conceptSlug}/index.html`;
      if (item.type === 'section-step') {
        url += `#${item.sectionId}-step-${item.stepIndex + 1}`;
      } else if (item.type === 'step') {
        url += `#step-${item.stepIndex + 1}`;
      }
      return url;
    }

    function render(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        results.innerHTML = '';
        close();
        return;
      }

      const matches = index
        .filter((item) => item.searchText.includes(q) || item.conceptTitle.toLowerCase().includes(q))
        .slice(0, 8);

      if (matches.length === 0) {
        results.innerHTML = '<div class="search-empty">No concepts found. Try "client", "cache", or "jwt".</div>';
        open();
        return;
      }

      results.innerHTML = matches.map((item, i) => `
        <a href="${buildUrl(item)}" class="search-result-item${i === focusedIndex ? ' focused' : ''}" data-index="${i}">
          <div class="search-result-meta">
            <span class="search-result-cat">${item.category}</span>
          </div>
          <div class="search-result-title">${item.title}</div>
          <div class="search-result-desc">${item.conceptTitle} — ${item.desc}</div>
        </a>
      `).join('');
      open();
    }

    input.addEventListener('input', () => {
      focusedIndex = -1;
      render(input.value);
    });

    input.addEventListener('focus', () => {
      if (input.value.trim()) render(input.value);
    });

    input.addEventListener('keydown', (e) => {
      const items = results.querySelectorAll('.search-result-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
        render(input.value);
        items[focusedIndex]?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusedIndex = Math.max(focusedIndex - 1, 0);
        render(input.value);
      } else if (e.key === 'Enter' && focusedIndex >= 0) {
        e.preventDefault();
        items[focusedIndex]?.click();
      } else if (e.key === 'Escape') {
        close();
        input.blur();
      }
    });

    document.addEventListener('click', (e) => {
      if (!containerEl.contains(e.target)) close();
    });
  }

  return { init };
})();
