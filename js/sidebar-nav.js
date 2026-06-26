/**
 * Concept Lab — Collapsible sidebar navigation (index page only)
 */
const SidebarNav = (function () {
  const STORAGE_KEY = 'concept-lab-sidebar-open';
  const COLLAPSED_KEY = 'concept-lab-sidebar-collapsed';

  function getOpenCategories() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function saveOpenCategories(ids) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }

  function isCollapsed() {
    return localStorage.getItem(COLLAPSED_KEY) === 'true';
  }

  function setCollapsed(collapsed) {
    localStorage.setItem(COLLAPSED_KEY, collapsed ? 'true' : 'false');
    document.body.classList.toggle('sidebar-collapsed', collapsed);
    const reopen = document.getElementById('sidebar-reopen');
    if (reopen) reopen.classList.toggle('visible', collapsed);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function render(options = {}) {
    const {
      containerId = 'sidebar-nav',
      basePath = '',
      activeId = null,
      activeCategoryId = null,
    } = options;

    const container = document.getElementById(containerId);
    if (!container || typeof CONCEPT_CATEGORIES === 'undefined') return;

    const saved = getOpenCategories();
    const categories = [...CONCEPT_CATEGORIES].sort((a, b) => a.order - b.order);
    const defaultOpen = activeCategoryId || (activeId && CONCEPTS.find((c) => c.id === activeId)?.category) || categories[0]?.id;
    const openSet = new Set(saved || categories.map((c) => c.id));

    let html = `
      <nav class="sidebar-nav-inner" aria-label="All topics">
        <div class="sidebar-nav-header">
          <div class="sidebar-nav-title">
            <i data-lucide="list-tree" class="w-4 h-4"></i>
            <span>All topics</span>
          </div>
          <button type="button" id="sidebar-close" class="sidebar-close-btn" aria-label="Close topic list" title="Close list">
            <i data-lucide="chevron-left"></i>
          </button>
        </div>
        <ul class="sidebar-category-list">`;

    categories.forEach((cat) => {
      const concepts = getConceptsByCategory(cat.id);
      const isOpen = openSet.has(cat.id);
      html += `
        <li class="sidebar-category" data-category="${cat.id}">
          <button type="button" class="sidebar-category-btn${isOpen ? ' open' : ''}" aria-expanded="${isOpen}" data-toggle="${cat.id}">
            <i data-lucide="chevron-right" class="sidebar-chevron"></i>
            <span class="sidebar-category-name">${escapeHtml(cat.name)}</span>
            <span class="sidebar-category-count">${concepts.length}</span>
          </button>
          <ul class="sidebar-topic-list${isOpen ? ' open' : ''}">
            ${concepts.map((c) => `
              <li>
                <a href="${basePath}concepts/${c.slug}/index.html"
                   class="sidebar-topic-link${c.id === activeId ? ' active' : ''}">
                  <i data-lucide="${c.icon}" class="w-3.5 h-3.5"></i>
                  <span>${escapeHtml(c.title)}</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </li>`;
    });

    html += '</ul></nav>';
    container.innerHTML = html;

    container.querySelectorAll('[data-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const catId = btn.dataset.toggle;
        const list = btn.parentElement.querySelector('.sidebar-topic-list');
        const nowOpen = !btn.classList.contains('open');
        btn.classList.toggle('open', nowOpen);
        btn.setAttribute('aria-expanded', String(nowOpen));
        list.classList.toggle('open', nowOpen);
        if (nowOpen) openSet.add(catId);
        else openSet.delete(catId);
        saveOpenCategories([...openSet]);
      });
    });

    document.getElementById('sidebar-close')?.addEventListener('click', () => setCollapsed(true));

    if (isCollapsed()) setCollapsed(true);

    if (window.lucide) lucide.createIcons();
  }

  function initMobileToggle() {
    const toggle = document.getElementById('sidebar-toggle');
    const reopen = document.getElementById('sidebar-reopen');
    const sidebar = document.getElementById('sidebar-nav');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar) return;

    function closeMobile() {
      sidebar.classList.remove('mobile-open');
      overlay?.classList.remove('open');
      document.body.classList.remove('sidebar-open');
    }

    toggle?.addEventListener('click', () => {
      if (document.body.classList.contains('sidebar-collapsed')) {
        setCollapsed(false);
        return;
      }
      const open = sidebar.classList.toggle('mobile-open');
      overlay?.classList.toggle('open', open);
      document.body.classList.toggle('sidebar-open', open);
    });

    reopen?.addEventListener('click', () => setCollapsed(false));

    overlay?.addEventListener('click', closeMobile);
  }

  return { render, initMobileToggle, setCollapsed };
})();
