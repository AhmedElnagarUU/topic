const NODES = ['client', 'cache', 'server', 'db'];
const PATHS = {
  'client-cache': { d: 'M 12 48 Q 20 28, 32 24', color: '#34d399' },
  'cache-client': { d: 'M 32 24 Q 20 28, 12 48', color: '#34d399' },
  'client-server': { d: 'M 12 48 L 58 48', color: '#fb923c' },
  'server-db': { d: 'M 58 48 L 88 48', color: '#fb923c' },
  'db-server': { d: 'M 88 48 L 58 48', color: '#fb923c' },
  'server-client': { d: 'M 58 48 L 12 48', color: '#fb923c' },
};

const STEPS = [
  {
    kicker: 'Why cache?',
    title: 'Repeated work is wasteful',
    desc: 'Fetching the same product page from the database every time is slow and expensive. Caching stores a copy of the answer so the next identical request finishes in milliseconds.',
    bullets: ['RAM is 100× faster than disk', 'Reduces database load', 'Used in browsers, CDNs, Redis'],
    hint: 'Four nodes appear — Client, Cache, Server, Database.',
    nodes: ['client', 'cache', 'server', 'db'],
    paths: [],
    mode: null,
  },
  {
    kicker: 'Cache HIT',
    title: 'Fast path — answer already stored',
    desc: 'The client asks for /products/1. The cache already has that response from an earlier request. It returns immediately — the server and database are never touched.',
    bullets: ['Typical latency: 1–5 ms', 'Green path = cache hit', 'Happens on popular, repeated requests'],
    hint: 'Green badge: HIT. Packet shortcuts Client → Cache → Client.',
    nodes: ['client', 'cache'],
    paths: ['client-cache', 'cache-client'],
    activePaths: ['client-cache', 'cache-client'],
    mode: 'hit',
    packetLabel: '/products/1',
  },
  {
    kicker: 'Cache MISS',
    title: 'Slow path — must fetch from origin',
    desc: 'First visit or expired entry: cache has nothing. Request falls through to the server, which queries the database, builds the response, returns it, and the cache stores a copy for next time.',
    bullets: ['Orange path = cache miss', 'Slower but populates cache', 'TTL decides when entry expires'],
    hint: 'Orange badge: MISS. Full path through Server and Database.',
    nodes: ['client', 'cache', 'server', 'db'],
    paths: ['client-server', 'server-db', 'db-server', 'server-client'],
    activePaths: ['client-server', 'server-db', 'db-server', 'server-client'],
    mode: 'miss',
    packetLabel: 'fetch + store',
  },
  {
    kicker: 'CDN edge',
    title: 'Cache closer to users',
    desc: 'A CDN (Content Delivery Network) puts cache servers in cities worldwide. A user in Tokyo gets cached images from Tokyo — not from a server in Virginia.',
    bullets: ['Geographic distribution', 'Great for static assets (images, JS)', 'Cloudflare, Fastly, Akamai'],
    hint: 'Cache node glows — it sits between client and origin.',
    nodes: ['client', 'cache', 'server'],
    paths: ['client-cache', 'cache-client', 'client-server'],
    activePaths: ['client-cache', 'cache-client'],
    mode: 'hit',
    packetLabel: 'CDN edge HIT',
  },
  {
    kicker: 'Invalidation',
    title: 'Stale data is dangerous',
    desc: 'When product price changes, you must invalidate or update the cache. Strategies: TTL expiry, explicit delete on write, or cache-aside pattern where app manages consistency.',
    bullets: ['Cache-aside: app reads cache, on miss loads DB', 'Write-through: update cache + DB together', 'Choose TTL based on how fresh data must be'],
    hint: 'Compare green hit vs orange miss — pick the right path per request.',
    nodes: ['client', 'cache', 'server', 'db'],
    paths: Object.keys(PATHS),
    activePaths: ['client-cache'],
    mode: 'hit',
    packetLabel: 'invalidate()',
  },
];

let current = 0;
let animId = null;
let pathEls = {};

function init() {
  drawPaths();
  buildNav();
  buildBar();
  document.getElementById('prev-btn').addEventListener('click', () => go(current - 1));
  document.getElementById('next-btn').addEventListener('click', () => go(current + 1));
  document.getElementById('continue-btn').addEventListener('click', () => go(current + 1));
  render();
  lucide.createIcons();
}

function drawPaths() {
  const svg = document.getElementById('branch-svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  const ns = 'http://www.w3.org/2000/svg';
  Object.entries(PATHS).forEach(([id, p]) => {
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', p.d);
    path.setAttribute('class', 'branch-path');
    path.setAttribute('id', `path-${id}`);
    path.setAttribute('stroke', p.color);
    svg.appendChild(path);
    pathEls[id] = path;
  });
}

function buildNav() {
  const nav = document.getElementById('step-nav');
  nav.innerHTML = '';
  STEPS.forEach((s, i) => {
    if (i > 0) nav.appendChild(Object.assign(document.createElement('div'), { className: 'step-connector' + (i <= current ? ' done' : '') }));
    const pill = document.createElement('button');
    pill.className = 'step-pill' + (i === current ? ' active' : '') + (i < current ? ' done' : '');
    pill.innerHTML = `<span class="step-pill-num">${i + 1}</span>${s.kicker}`;
    pill.addEventListener('click', () => { if (i <= current) go(i); });
    nav.appendChild(pill);
  });
}

function buildBar() {
  const bar = document.getElementById('step-bar');
  bar.innerHTML = '';
  STEPS.forEach((_, i) => {
    if (i > 0) {
      const w = document.createElement('div');
      w.className = 'step-line';
      w.innerHTML = `<div class="step-line-fill${i <= current ? ' filled' : ''}"></div>`;
      bar.appendChild(w);
    }
    const d = document.createElement('div');
    d.className = 'step-dot' + (i === current ? ' active' : '') + (i < current ? ' done' : '');
    d.addEventListener('click', () => go(i));
    bar.appendChild(d);
  });
}

function go(i) {
  if (i < 0 || i > STEPS.length - 1) return;
  stopAnim();
  current = i;
  buildNav();
  buildBar();
  render();
}

function render() {
  const step = STEPS[current];
  document.getElementById('concept-eyebrow').textContent = `Step ${current + 1} of ${STEPS.length}`;
  document.getElementById('step-kicker').textContent = step.kicker;
  document.getElementById('step-title').textContent = step.title;
  document.getElementById('step-desc').textContent = step.desc;
  document.getElementById('step-bullets').innerHTML = step.bullets.map(b => `<li>${b}</li>`).join('');
  document.getElementById('flow-hint').textContent = step.hint;
  document.getElementById('flow-hint').classList.remove('hidden');
  document.getElementById('next-concept').classList.toggle('hidden', current < STEPS.length - 1);

  NODES.forEach(n => {
    const el = document.getElementById(`node-${n}`);
    el.classList.toggle('visible', step.nodes.includes(n));
    el.classList.toggle('active', step.nodes.includes(n) && step.mode);
  });

  Object.keys(PATHS).forEach(id => {
    const el = pathEls[id];
    el.classList.toggle('visible', step.paths.includes(id));
    el.classList.toggle('active', step.activePaths?.includes(id));
  });

  const badge = document.getElementById('branch-badge');
  if (step.mode) {
    badge.classList.remove('hidden', 'hit', 'miss');
    badge.classList.add(step.mode);
    badge.textContent = step.mode === 'hit' ? 'CACHE HIT' : 'CACHE MISS';
  } else {
    badge.classList.add('hidden');
  }

  if (step.activePaths?.length) startPathAnim(step);
  lucide.createIcons();
}

function startPathAnim(step) {
  const packet = document.getElementById('branch-packet');
  packet.textContent = step.packetLabel;
  packet.classList.remove('hidden', 'hit', 'miss');
  packet.classList.add(step.mode);

  const pathIds = step.activePaths;
  const paths = pathIds.map(id => pathEls[id]);
  const lengths = paths.map(p => p.getTotalLength());
  const total = lengths.reduce((a, b) => a + b, 0);
  const duration = step.mode === 'hit' ? 2200 : 4500;
  let start = null;

  function tick(ts) {
    if (!start) start = ts;
    const t = ((ts - start) % duration) / duration;
    const dist = t * total;
    let acc = 0;
    for (let i = 0; i < paths.length; i++) {
      if (acc + lengths[i] >= dist) {
        const local = (dist - acc) / lengths[i];
        const pt = paths[i].getPointAtLength(local * lengths[i]);
        const canvas = document.getElementById('anim-canvas');
        const cr = canvas.getBoundingClientRect();
        const ctm = paths[i].getScreenCTM();
        const sp = document.getElementById('branch-svg').createSVGPoint();
        sp.x = pt.x; sp.y = pt.y;
        const screen = sp.matrixTransform(ctm);
        packet.style.left = `${screen.x - cr.left}px`;
        packet.style.top = `${screen.y - cr.top}px`;
        break;
      }
      acc += lengths[i];
    }
    animId = requestAnimationFrame(tick);
  }
  animId = requestAnimationFrame(tick);
}

function stopAnim() {
  if (animId) cancelAnimationFrame(animId);
  animId = null;
  document.getElementById('branch-packet').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', init);
