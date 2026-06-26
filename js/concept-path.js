/** Reference list — auto-synced via scripts/build-knowledge-index.js */
const CONCEPT_PATH = typeof CONCEPTS !== 'undefined'
  ? CONCEPTS.map((c) => ({
      id: c.id,
      num: c.num,
      name: c.title,
      slug: c.slug,
      category: c.category,
    }))
  : [];
