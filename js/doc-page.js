/**
 * Concept Lab — Documentation page renderer
 */
const DocPage = (function () {
  const LAYER_ICONS = {
    client: 'monitor-smartphone',
    server: 'server',
    database: 'database',
  };

  const LAYER_LABELS = {
    client: 'Client',
    server: 'Server',
    database: 'Database',
  };

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderVisual(step, color) {
    const v = step.visual;
    if (!v) {
      return `
        <div class="doc-visual ${color}">
          <div class="doc-visual-inner">
            <div class="doc-visual-icon ${color}"><i data-lucide="${step.icon || 'lightbulb'}"></i></div>
            <div class="doc-visual-label">${escapeHtml(step.kicker)}</div>
          </div>
        </div>`;
    }

    let inner = '';

    if (v.type === 'stack') {
      const layers = v.layers || [];
      inner = `<div class="visual-stack">${layers.map((id) => `
        <div class="visual-layer${v.highlight === id || layers.length === 1 ? ' active' : ''}">
          <i data-lucide="${LAYER_ICONS[id] || 'box'}"></i>
          ${LAYER_LABELS[id] || id}
        </div>
      `).join('')}</div>`;
      if (v.layers?.length > 1 && !v.highlight) {
        inner += '<div class="visual-arrow">↓ request &nbsp; ↑ response</div>';
      }
    } else if (v.type === 'flow') {
      inner = `
        <div class="visual-flow">
          <div class="visual-flow-box">${escapeHtml(v.from)}</div>
          <span class="visual-flow-arrow">→</span>
          <div class="visual-flow-box">${escapeHtml(v.to)}</div>
        </div>
        ${v.label ? `<div class="visual-flow-label">${escapeHtml(v.label)}</div>` : ''}`;
    } else if (v.type === 'roundtrip') {
      inner = `
        <div class="visual-flow" style="flex-direction:column">
          ${(v.path || []).map((p, i) => `
            ${i > 0 ? '<span class="visual-flow-arrow">↓</span>' : ''}
            <div class="visual-flow-box">${LAYER_LABELS[p] || p}</div>
          `).join('')}
        </div>
        <div class="visual-flow-label">full round trip</div>`;
    } else if (v.type === 'nodes') {
      inner = `<div class="visual-nodes">${(v.nodes || []).map((n) => `
        <div class="visual-node"><i data-lucide="circle-dot"></i>${escapeHtml(n)}</div>
      `).join('')}</div>`;
    } else if (v.type === 'exchange') {
      const labels = {
        intro: 'Client ↔ Server',
        request: 'GET /users/42 →',
        response: '← 200 OK',
        full: 'GET → ← Response',
      };
      inner = `
        <div class="doc-visual-icon violet"><i data-lucide="arrow-left-right"></i></div>
        <div class="visual-flow-label">${escapeHtml(v.label || labels[v.mode] || 'HTTP exchange')}</div>`;
    } else if (v.type === 'tunnel') {
      const badges = {
        plain: ['plain', 'Unencrypted HTTP'],
        secure: ['secure', 'HTTPS / TLS'],
        handshake: ['secure', 'TLS Handshake'],
        transit: ['secure', 'Encrypted in transit'],
        decrypt: ['secure', 'Decrypted at server'],
      };
      const [cls, label] = badges[v.mode] || ['plain', 'TLS'];
      inner = `
        <span class="visual-badge ${cls}"><i data-lucide="lock" class="w-3 h-3"></i> ${label}</span>
        <div class="visual-flow" style="margin-top:0.75rem">
          <div class="visual-flow-box">Client</div>
          <span class="visual-flow-arrow">⟷</span>
          <div class="visual-flow-box">Server</div>
        </div>`;
    } else if (v.type === 'cache') {
      const badges = {
        overview: null,
        hit: ['hit', 'Cache HIT'],
        miss: ['miss', 'Cache MISS'],
        cdn: ['hit', 'CDN Edge'],
        invalidate: ['miss', 'Invalidate'],
      };
      const badge = badges[v.mode];
      inner = badge
        ? `<span class="visual-badge ${badge[0]}">${badge[1]}</span>`
        : '<div class="doc-visual-icon amber"><i data-lucide="zap"></i></div>';
      inner += `
        <div class="visual-flow" style="margin-top:0.75rem;font-size:0.625rem">
          <div class="visual-flow-box">Client</div>
          <span class="visual-flow-arrow">→</span>
          <div class="visual-flow-box">Cache</div>
          <span class="visual-flow-arrow">→</span>
          <div class="visual-flow-box">Server</div>
        </div>`;
    } else if (v.type === 'fanout') {
      inner = `
        <div class="visual-flow" style="flex-direction:column;gap:0.375rem">
          <div class="visual-flow-box">Clients</div>
          <span class="visual-flow-arrow">↓</span>
          <div class="visual-flow-box">Load Balancer</div>
          <span class="visual-flow-arrow">↓</span>
          <div class="visual-nodes">
            <div class="visual-node">S1</div>
            <div class="visual-node">S2</div>
            <div class="visual-node">S3</div>
          </div>
        </div>`;
    } else if (v.type === 'realtime') {
      const icons = { polling: 'refresh-ccw', connect: 'plug', multi: 'users', broadcast: 'megaphone', compare: 'scale' };
      inner = `
        <div class="doc-visual-icon sky"><i data-lucide="${icons[v.mode] || 'radio'}"></i></div>
        <div class="visual-flow-label">${v.mode === 'polling' ? 'HTTP polling' : v.mode === 'broadcast' ? 'Server push' : 'WebSocket'}</div>`;
    }

    return `
      <div class="doc-visual ${color}">
        <div class="doc-visual-inner">${inner}</div>
      </div>`;
  }

  function renderStep(step, index, color, idPrefix) {
    const stepId = idPrefix === 'step' ? `step-${index + 1}` : `${idPrefix}-step-${index + 1}`;
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
        ${renderVisual(step, color)}
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
      stepsHtml = concept.steps.map((step, i) => renderStep(step, i, concept.color, 'step')).join('');
    }
    if (concept.sections) {
      stepsHtml = concept.sections.map((section) => `
        <div class="doc-section-group" id="${section.id}">
          <h3 class="doc-section-group-title">
            <i data-lucide="${section.icon || 'book-open'}" class="w-5 h-5"></i>
            ${escapeHtml(section.title)}
          </h3>
          ${section.steps.map((step, i) => renderStep(step, i, concept.color, section.id)).join('')}
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
