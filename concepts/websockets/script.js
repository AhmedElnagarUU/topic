const STEPS = [
  {
    kicker: 'The problem',
    title: 'Polling wastes requests',
    desc: 'With plain HTTP, a chat app must ask "any new messages?" every second. Thousands of users × constant polling = huge server load and delayed updates.',
    bullets: ['Client repeatedly sends GET /messages', 'Most responses are empty', 'Battery and bandwidth drain on mobile'],
    hint: 'Orange dots show repeated polling — ask, wait, ask again.',
    clients: [],
    server: false,
    mode: 'polling',
  },
  {
    kicker: 'Upgrade',
    title: 'WebSocket opens a persistent channel',
    desc: 'The client sends an HTTP Upgrade request. If the server agrees, the TCP connection stays open and switches to the WebSocket protocol — a two-way pipe.',
    bullets: ['Starts as HTTP, upgrades to WS', 'Connection stays open for hours', 'ws:// or wss:// (secure) URLs'],
    hint: 'Server appears — the single long-lived connection replaces polling.',
    clients: ['rc-1'],
    server: true,
    mode: 'connect',
  },
  {
    kicker: 'More clients',
    title: 'Many clients, one server',
    desc: 'Each browser or app opens its own WebSocket to the server. The server tracks every open connection in memory (or Redis pub/sub at scale).',
    bullets: ['Each tab = one connection', 'Server maps connection → user ID', 'Heartbeats detect dead connections'],
    hint: 'All three clients connect to the central server.',
    clients: ['rc-1', 'rc-2', 'rc-3'],
    server: true,
    mode: 'connect',
  },
  {
    kicker: 'Push',
    title: 'Server broadcasts instantly',
    desc: 'When someone sends a chat message, the server does not wait for clients to ask. It pushes the event to every connected client immediately — ripples radiate outward.',
    bullets: ['Zero polling delay', 'Perfect for chat, games, live dashboards', 'One event → N clients'],
    hint: 'Watch ripple rings expand from the server to every client.',
    clients: ['rc-1', 'rc-2', 'rc-3'],
    server: true,
    mode: 'broadcast',
  },
  {
    kicker: 'vs HTTP',
    title: 'When to use WebSockets',
    desc: 'Use WebSockets when the server needs to push frequently. Stick with HTTP/REST for CRUD pages, file uploads, and rare updates — simpler and cache-friendly.',
    bullets: ['WebSockets: chat, live sports, collaborative docs', 'HTTP: forms, REST APIs, page loads', 'Often both in the same app'],
    hint: 'Broadcast mode — compare this instant push to the polling in step 1.',
    clients: ['rc-1', 'rc-2', 'rc-3'],
    server: true,
    mode: 'broadcast',
  },
];

let current = 0;
let pollTimer = null;

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
  stopEffects();
  current = i;
  buildNav();
  buildBar();
  render();
}

function stopEffects() {
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = null;
  document.querySelectorAll('.polling-dot').forEach(d => d.remove());
  document.getElementById('ripple-rings').innerHTML = '';
  document.getElementById('ripple-msg').classList.add('hidden');
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

  const server = document.getElementById('rc-server');
  server.classList.toggle('visible', step.server);
  server.classList.toggle('active', step.server && step.mode !== 'polling');

  ['rc-1', 'rc-2', 'rc-3'].forEach(id => {
    const el = document.getElementById(id);
    const on = step.clients.includes(id);
    el.classList.toggle('visible', on || step.mode === 'polling');
    el.classList.toggle('active', on && step.mode !== 'polling');
  });

  if (step.mode === 'polling') startPolling();
  else if (step.mode === 'broadcast') startBroadcast();
  else if (step.mode === 'connect') {
    document.getElementById('ripple-msg').textContent = 'Connected ✓';
    document.getElementById('ripple-msg').classList.remove('hidden');
  }

  lucide.createIcons();
  if (window.AnimTooltips) AnimTooltips.refresh();
}

function startPolling() {
  const canvas = document.getElementById('anim-canvas');
  const client = document.getElementById('rc-1');
  client.classList.add('visible', 'active');
  let tick = 0;
  pollTimer = setInterval(() => {
    document.querySelectorAll('.polling-dot').forEach(d => d.remove());
    const dot = document.createElement('div');
    dot.className = 'polling-dot';
    const cr = canvas.getBoundingClientRect();
    const er = client.getBoundingClientRect();
    dot.style.left = `${er.left + er.width / 2 - cr.left}px`;
    dot.style.top = `${er.top - cr.top - 8}px`;
    dot.textContent = '';
    canvas.appendChild(dot);
    tick++;
    if (tick % 2 === 0) {
      const label = document.createElement('div');
      label.className = 'ripple-msg';
      label.style.animation = 'none';
      label.textContent = 'GET /poll';
      label.style.opacity = '0.8';
      canvas.appendChild(label);
      setTimeout(() => label.remove(), 600);
    }
  }, 900);
}

function startBroadcast() {
  const rings = document.getElementById('ripple-rings');
  rings.innerHTML = '';
  [0, 1, 2].forEach(() => {
    const r = document.createElement('div');
    r.className = 'ripple-ring';
    rings.appendChild(r);
  });
  const msg = document.getElementById('ripple-msg');
  msg.textContent = '{ type: "message", text: "Hi!" }';
  msg.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', init);
