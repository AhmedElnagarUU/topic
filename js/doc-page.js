/**
 * Concept Lab — Documentation page renderer
 */
const DocPage = (function () {
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderSources(sources) {
    if (!sources?.length) {
      return `
        <div class="doc-sources doc-sources-empty">
          <p class="doc-sources-title"><i data-lucide="link" class="w-4 h-4"></i> Sources</p>
          <p class="doc-sources-hint">No links yet — add URLs in <code>scripts/topic-sources.js</code> and rebuild.</p>
        </div>`;
    }
    return `
      <div class="doc-sources">
        <p class="doc-sources-title"><i data-lucide="link" class="w-4 h-4"></i> Sources</p>
        <ul class="doc-sources-list">
          ${sources.map((s) => `
            <li>
              <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" class="doc-source-link">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                ${escapeHtml(s.title)}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>`;
  }

  function renderStep(step, index, color, idPrefix, concept) {
    const stepId = idPrefix === 'step' ? `step-${index + 1}` : `${idPrefix}-step-${index + 1}`;
    const visual = typeof VisualEngine !== 'undefined'
      ? VisualEngine.render(step, color, concept)
      : '';
    return `
      <article class="doc-step" id="${stepId}">
        <div class="doc-step-content">
          <div class="doc-step-num ${color}">
            <i data-lucide="${step.icon || 'circle'}" class="w-3.5 h-3.5"></i>
            Step ${index + 1} · ${escapeHtml(step.kicker)}
          </div>
          <h2>${escapeHtml(step.title)}</h2>
          <p class="doc-step-desc">${escapeHtml(step.desc)}</p>
          ${step.bullets?.length ? `
            <ul class="doc-step-bullets ${color}">
              ${step.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
            </ul>` : ''}
          ${step.code ? `<pre class="doc-code">${escapeHtml(step.code)}</pre>` : ''}
        </div>
        ${visual}
      </article>`;
  }

  function buildToc(concept) {
    const links = [];
    if (concept.steps) {
      concept.steps.forEach((step, i) => {
        links.push({ href: `#step-${i + 1}`, label: step.title, group: null });
      });
    }
    if (concept.sections) {
      concept.sections.forEach((section) => {
        links.push({ href: `#${section.id}`, label: section.title, group: true });
        section.steps.forEach((step, i) => {
          links.push({ href: `#${section.id}-step-${i + 1}`, label: step.title, group: false, indent: true });
        });
      });
    }
    return links;
  }

  function renderToc(links) {
    let html = '<nav class="doc-toc" aria-label="On this page"><p class="doc-toc-title">On this page</p><ul class="doc-toc-list">';
    links.forEach((link) => {
      if (link.group) {
        html += `<li class="doc-toc-section">${escapeHtml(link.label)}</li>`;
      } else {
        html += `<li><a href="${link.href}" class="doc-toc-link${link.indent ? ' pl-4' : ''}">${escapeHtml(link.label)}</a></li>`;
      }
    });
    html += '</ul></nav>';
    return html;
  }

  function render(conceptId) {
    const concept = getConceptById(conceptId);
    if (!concept) return;

    const category = CONCEPT_CATEGORIES.find((c) => c.id === concept.category);
    const tocEl = document.getElementById('doc-toc');
    const articleEl = document.getElementById('doc-article');
    if (!articleEl) return;

    document.title = `${concept.title} — Concept Lab`;

    const tocLinks = buildToc(concept);
    if (tocEl) tocEl.innerHTML = renderToc(tocLinks);

    let stepsHtml = '';
    if (concept.steps) {
      stepsHtml = concept.steps.map((step, i) => renderStep(step, i, concept.color, 'step', concept)).join('');
    }
    if (concept.sections) {
      stepsHtml = concept.sections.map((section) => `
        <div class="doc-section-group" id="${section.id}">
          <h3 class="doc-section-group-title">
            <i data-lucide="${section.icon || 'book-open'}" class="w-5 h-5"></i>
            ${escapeHtml(section.title)}
          </h3>
          ${section.steps.map((step, i) => renderStep(step, i, concept.color, section.id, concept)).join('')}
        </div>
      `).join('');
    }

    articleEl.innerHTML = `
      <header class="doc-hero">
        <div class="doc-hero-badge ${concept.color}">
          <i data-lucide="${concept.icon}" class="w-4 h-4"></i>
          ${escapeHtml(category?.name || '')} · ${concept.num}
        </div>
        <h1>${escapeHtml(concept.title)}${concept.important ? ' <span class="doc-important-badge">Important</span>' : ''}</h1>
        <p class="doc-hero-intro">${escapeHtml(concept.intro)}</p>
        ${renderSources(concept.sources)}
      </header>
      ${stepsHtml}
    `;

    lucide.createIcons();
    setupTocObserver();
  }

  function setupTocObserver() {
    const links = document.querySelectorAll('.doc-toc-link');
    const sections = [];
    links.forEach((link) => {
      const id = link.getAttribute('href')?.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (el) sections.push({ el, link });
    });

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove('active'));
            const match = sections.find((s) => s.el === entry.target);
            match?.link.classList.add('active');
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s.el));
  }

  function init() {
    const conceptId = document.body.dataset.conceptId;
    if (conceptId) render(conceptId);
  }

  return { init, render };
})();

document.addEventListener('DOMContentLoaded', () => {
  DocPage.init();
});
