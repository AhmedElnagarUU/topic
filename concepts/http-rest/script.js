const STEPS = [
  {
    kicker: 'Foundation',
    title: 'HTTP is the delivery protocol',
    desc: 'Every click, form submit, and API call uses HTTP. The client sends a request with a method (GET, POST, etc.) and URL. The server replies with a status code and body.',
    bullets: ['GET = read data', 'POST = create/send data', 'Status 200 = success, 404 = not found'],
    hint: 'Client and Server endpoints appear on opposite sides.',
    show: { client: true, server: false, lanes: false },
    anim: null,
  },
  {
    kicker: 'Reading data',
    title: 'GET request — fetch a resource',
    desc: 'When you visit /api/users/42, the client sends GET /api/users/42. The server looks up user 42 and returns JSON. GET requests should not change data.',
    bullets: ['Idempotent — safe to repeat', 'No request body needed', 'Cached by browsers and CDNs'],
    hint: 'Watch the violet ball travel on the top lane: Client → Server.',
    show: { client: true, server: true, lanes: ['request'], active: ['request'] },
    anim: { lane: 'request', label: 'GET /users/42', color: 'request' },
  },
  {
    kicker: 'Server replies',
    title: 'Response comes back on its own lane',
    desc: 'The server responds with HTTP 200 OK and a JSON body. Responses travel separately from requests — think of two one-way streets instead of one confused road.',
    bullets: ['Status line: HTTP/1.1 200 OK', 'Headers: Content-Type: application/json', 'Body: { "id": 42, "name": "Ada" }'],
    hint: 'Green ball on the bottom lane: Server → Client. Two lanes = less confusion.',
    show: { client: true, server: true, lanes: ['request', 'response'], active: ['response'] },
    anim: { lane: 'response', label: '200 { id: 42 }', color: 'response', reverse: true },
  },
  {
    kicker: 'Writing data',
    title: 'POST request — create something new',
    desc: 'Signing up, placing an order, or posting a comment uses POST. The client sends data in the body. The server validates it, saves to the database, and returns the created resource.',
    bullets: ['POST /api/orders with JSON body', 'Server returns 201 Created', 'Not cached — changes state'],
    hint: 'POST travels request lane with a payload label.',
    show: { client: true, server: true, lanes: ['request', 'response'], active: ['request'] },
    anim: { lane: 'request', label: 'POST { item: "book" }', color: 'request' },
  },
  {
    kicker: 'REST pattern',
    title: 'Resources + HTTP methods = REST API',
    desc: 'REST organizes APIs around nouns (users, orders) not verbs. GET /users, POST /users, PUT /users/1, DELETE /users/1 — predictable URLs with standard HTTP semantics.',
    bullets: ['Nouns in URLs, verbs in HTTP methods', 'Stateless — each request is independent', 'Foundation for most modern APIs'],
    hint: 'Full ping-pong: request out, response back — the classic API dance.',
    show: { client: true, server: true, lanes: ['request', 'response'], active: ['request', 'response'] },
    anim: { pingPong: true, reqLabel: 'GET /orders', resLabel: '[ {...}, {...} ]' },
  },
];

let current = 0;
let animId = null;

function init() {
  buildNav();
  buildBar();
  document.getElementById('prev-btn').addEventListener('click', () => go(current - 1));
  document.getElementById('next-btn').addEventListener('click', () => go(current + 1));
  document.getElementById('continue-btn').addEventListener('click', () => go(current + 1));
  render();
  lucide.createIcons();
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

  const client = document.getElementById('ep-client');
  const server = document.getElementById('ep-server');
  client.classList.toggle('visible', step.show.client);
  client.classList.toggle('active', step.show.client);
  server.classList.toggle('visible', step.show.server);
  server.classList.toggle('active', step.show.server);

  ['request', 'response'].forEach(lane => {
    const el = document.getElementById(`lane-${lane}`);
    const show = step.show.lanes && step.show.lanes.includes(lane);
    el.classList.toggle('visible', show);
    el.classList.toggle('active', step.show.active?.includes(lane));
  });

  if (step.anim) startAnim(step.anim);
  lucide.createIcons();
}

function laneBounds(lane) {
  const canvas = document.getElementById('anim-canvas');
  const track = document.getElementById(`lane-${lane}`).querySelector('.lane-track');
  const cr = canvas.getBoundingClientRect();
  const tr = track.getBoundingClientRect();
  return {
    left: tr.left - cr.left + 12,
    right: tr.right - cr.left - 12,
    y: tr.top - cr.top + tr.height / 2,
  };
}

function startAnim(cfg) {
  const ball = document.getElementById('ping-ball');
  ball.classList.remove('hidden', 'request', 'response');
  ball.classList.add('show');

  if (cfg.pingPong) {
    let phase = 0;
    const reqB = laneBounds('request');
    const resB = laneBounds('response');
    const duration = 2800;
    let start = null;
    function tick(ts) {
      if (!start) start = ts;
      const t = ((ts - start) % duration) / duration;
      if (t < 0.45) {
        ball.className = 'ping-ball request show';
        ball.textContent = cfg.reqLabel;
        const p = t / 0.45;
        ball.style.left = `${reqB.left + (reqB.right - reqB.left) * p}px`;
        ball.style.top = `${reqB.y}px`;
      } else {
        ball.className = 'ping-ball response show';
        ball.textContent = cfg.resLabel;
        const p = (t - 0.45) / 0.55;
        ball.style.left = `${resB.right - (resB.right - resB.left) * p}px`;
        ball.style.top = `${resB.y}px`;
      }
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return;
  }

  const b = laneBounds(cfg.lane);
  ball.textContent = cfg.label;
  ball.classList.add(cfg.color);
  const reverse = cfg.reverse;
  const duration = 2400;
  let start = null;
  function tick(ts) {
    if (!start) start = ts;
    const p = ((ts - start) % duration) / duration;
    const x = reverse ? b.right - (b.right - b.left) * p : b.left + (b.right - b.left) * p;
    ball.style.left = `${x}px`;
    ball.style.top = `${b.y}px`;
    animId = requestAnimationFrame(tick);
  }
  animId = requestAnimationFrame(tick);
}

function stopAnim() {
  if (animId) cancelAnimationFrame(animId);
  animId = null;
  document.getElementById('ping-ball').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', init);
