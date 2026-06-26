/**
 * Concept Lab — Index page renderer
 */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('categories-container');
  const statsEl = document.getElementById('doc-stats');
  if (!container) return;

  const stats = typeof getKnowledgeStats === 'function' ? getKnowledgeStats() : { topicCount: 0, categoryCount: 0, stepCount: 0 };

  if (statsEl) {
    statsEl.innerHTML = `
      <div class="doc-stat"><span class="doc-stat-num">${stats.topicCount}</span><span class="doc-stat-label">Topics</span></div>
      <div class="doc-stat"><span class="doc-stat-num">${stats.categoryCount}</span><span class="doc-stat-label">Categories</span></div>
      <div class="doc-stat"><span class="doc-stat-num">${stats.stepCount}+</span><span class="doc-stat-label">Steps</span></div>
    `;
  }

  const sorted = [...CONCEPT_CATEGORIES].sort((a, b) => a.order - b.order);

  container.innerHTML = sorted.map((cat) => {
    const concepts = getConceptsByCategory(cat.id);
    return `
      <section class="category-block" id="category-${cat.id}">
        <div class="category-header">
          <div class="category-icon-wrap ${cat.color}">
            <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
          </div>
          <div>
            <p class="category-order">Category ${cat.order} of ${sorted.length}</p>
            <h3 class="category-title">${cat.name}</h3>
            <p class="category-desc">${cat.description}</p>
          </div>
        </div>
        <div class="doc-concept-grid">
          ${concepts.map((c) => `
            <a href="concepts/${c.slug}/index.html" class="doc-concept-card ${c.color}">
              <div class="doc-concept-card-top">
                <div class="doc-concept-icon ${c.color}">
                  <i data-lucide="${c.icon}" class="w-5 h-5"></i>
                </div>
                <span class="doc-concept-num">${c.num}</span>
              </div>
              <h4 class="doc-concept-title">${c.title}${c.important ? ' <span class="doc-important-badge">Important</span>' : ''}</h4>
              <p class="doc-concept-summary">${c.summary}</p>
              <div class="doc-concept-tags">
                ${(c.tags || []).slice(0, 3).map((t) => `<span class="doc-tag">${t}</span>`).join('')}
              </div>
            </a>
          `).join('')}
        </div>
      </section>
    `;
  }).join('');

  lucide.createIcons();

  const heroSearch = document.getElementById('hero-search');
  const headerSearch = document.getElementById('header-search');
  if (heroSearch) ConceptSearch.init(heroSearch);
  if (headerSearch) ConceptSearch.init(headerSearch);
});
