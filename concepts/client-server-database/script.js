const STEPS = [
  {
    kicker: 'The big picture',
    title: 'Every web app has three layers',
    desc: 'When you use Instagram, Gmail, or any website, three separate pieces work together. The client shows the UI, the server runs the logic, and the database remembers everything.',
    bullets: ['Client = what you see and click', 'Server = business rules & security', 'Database = users, posts, orders'],
    hint: 'Layers will appear one at a time — watch the vertical stack build.',
    layers: [],
    packet: null,
  },
  {
    kicker: 'Layer 1',
    title: 'The Client — your device',
    desc: 'The client is the browser or mobile app on your phone. It renders buttons and forms, captures clicks, and sends requests over the internet. It never stores the master copy of your data.',
    bullets: ['Chrome, Safari, React Native apps are all clients', 'Runs on the user\'s machine', 'Asks the server for data and sends user actions'],
    hint: 'Only the Client layer lights up. Every interaction starts here.',
    layers: ['client'],
    packet: null,
  },
  {
    kicker: 'Layer 2',
    title: 'The Server — the brain',
    desc: 'The server receives requests, validates them, applies business rules ("is this user allowed?"), and talks to the database. It\'s a program running on a remote machine — not on your laptop.',
    bullets: ['Node.js, Django, Rails, Go APIs', 'Never expose database directly to users', 'Returns JSON or HTML back to the client'],
    hint: 'Client and Server are connected. Requests travel downward.',
    layers: ['client', 'server'],
    connectors: [0],
    packet: { label: 'GET /profile', from: 'client', to: 'server' },
  },
  {
    kicker: 'Layer 3',
    title: 'The Database — long-term memory',
    desc: 'The database stores users, passwords (hashed), posts, and settings. The server reads and writes here. Clients should never connect to the database directly — that would be a security disaster.',
    bullets: ['PostgreSQL, MySQL, MongoDB, Redis', 'Data survives server restarts', 'Only the server has database credentials'],
    hint: 'Watch the packet drop from Server → Database to fetch data.',
    layers: ['client', 'server', 'database'],
    connectors: [0, 1],
    packet: { label: 'SELECT * FROM users', from: 'server', to: 'database' },
  },
  {
    kicker: 'Full round trip',
    title: 'Request down, response back up',
    desc: 'A typical flow: Client asks Server → Server queries Database → Server formats the answer → Client displays it. This pattern repeats billions of times per day across the internet.',
    bullets: ['Request travels down the stack', 'Response travels back up', 'Same pattern for login, search, checkout'],
    hint: 'Packet goes down then back up — that\'s the full request/response cycle.',
    layers: ['client', 'server', 'database'],
    connectors: [0, 1],
    packet: { label: '{ name: "You" }', from: 'database', to: 'client', roundTrip: true },
  },
];

let current = 0;
let packetAnim = null;

const layerEls = {
  client: () => document.getElementById('layer-client'),
  server: () => document.getElementById('layer-server'),
  database: () => document.getElementById('layer-database'),
};
const connectors = () => [document.getElementById('conn-down'), document.getElementById('conn-down-2')];

function init() {
  buildStepNav();
  buildStepBar();
  document.getElementById('prev-btn').addEventListener('click', () => go(current - 1));
  document.getElementById('next-btn').addEventListener('click', () => go(current + 1));
  document.getElementById('continue-btn').addEventListener('click', () => go(current + 1));
  render();
  lucide.createIcons();
}

function buildStepNav() {
  const nav = document.getElementById('step-nav');
  STEPS.forEach((s, i) => {
    if (i > 0) {
      const c = document.createElement('div');
      c.className = 'step-connector' + (i <= current ? ' done' : '');
      nav.appendChild(c);
    }
    const pill = document.createElement('button');
    pill.className = 'step-pill' + (i === current ? ' active' : '') + (i < current ? ' done' : '') + (i > current ? ' locked' : '');
    pill.innerHTML = `<span class="step-pill-num">${i + 1}</span>${s.kicker}`;
    pill.addEventListener('click', () => { if (i <= current) go(i); });
    nav.appendChild(pill);
  });
}

function buildStepBar() {
  const bar = document.getElementById('step-bar');
  bar.innerHTML = '';
  STEPS.forEach((_, i) => {
    if (i > 0) {
      const wrap = document.createElement('div');
      wrap.className = 'step-line';
      wrap.innerHTML = `<div class="step-line-fill${i <= current ? ' filled' : ''}"></div>`;
      bar.appendChild(wrap);
    }
    const dot = document.createElement('div');
    dot.className = 'step-dot' + (i === current ? ' active' : '') + (i < current ? ' done' : '');
    dot.addEventListener('click', () => go(i));
    bar.appendChild(dot);
  });
}

function go(index) {
  if (index < 0 || index > STEPS.length - 1) return;
  stopPacket();
  current = index;
  document.getElementById('step-nav').innerHTML = '';
  buildStepNav();
  buildStepBar();
  render();
}

function render() {
  const step = STEPS[current];
  document.getElementById('concept-eyebrow').textContent = `Step ${current + 1} of ${STEPS.length}`;
  document.getElementById('step-kicker').textContent = step.kicker;
  document.getElementById('step-title').textContent = step.title;
  document.getElementById('step-desc').textContent = step.desc;
  document.getElementById('step-bullets').innerHTML = step.bullets.map(b => `<li>${b}</li>`).join('');

  const hint = document.getElementById('flow-hint');
  hint.textContent = step.hint;
  hint.classList.toggle('hidden', !step.hint);

  const btn = document.getElementById('continue-btn');
  btn.innerHTML = current === STEPS.length - 1
    ? 'Done <i data-lucide="check" class="w-4 h-4"></i>'
    : 'Continue <i data-lucide="arrow-right" class="w-4 h-4"></i>';

  document.getElementById('next-concept').classList.toggle('hidden', current < STEPS.length - 1);

  ['client', 'server', 'database'].forEach(id => {
    const el = layerEls[id]();
    el.classList.remove('visible', 'active', 'dimmed');
    if (step.layers.includes(id)) {
      el.classList.add('visible');
      if (step.packet && (step.packet.from === id || step.packet.to === id)) el.classList.add('active');
      else if (step.layers.length > 1 && !step.packet) el.classList.add('active');
    }
  });

  connectors().forEach((c, i) => {
    c.classList.remove('visible', 'active');
    if (step.connectors?.includes(i)) {
      c.classList.add('visible', 'active');
    }
  });

  if (step.packet) startPacket(step.packet);
  lucide.createIcons();
}

function layerCenter(id) {
  const canvas = document.getElementById('anim-canvas');
  const el = layerEls[id]();
  const cr = canvas.getBoundingClientRect();
  const er = el.getBoundingClientRect();
  return { x: er.left + er.width / 2 - cr.left, y: er.top + er.height / 2 - cr.top };
}

function startPacket(cfg) {
  const packet = document.getElementById('stack-packet');
  packet.textContent = cfg.label;
  packet.classList.remove('hidden');
  requestAnimationFrame(() => packet.classList.add('show'));

  const from = layerCenter(cfg.from);
  const to = layerCenter(cfg.to);
  const duration = cfg.roundTrip ? 4000 : 2200;
  let start = null;

  function tick(ts) {
    if (!start) start = ts;
    const t = ((ts - start) % duration) / duration;
    let progress;
    if (cfg.roundTrip) {
      if (t < 0.25) progress = t / 0.25;
      else if (t < 0.5) progress = 1 - (t - 0.25) / 0.25;
      else if (t < 0.75) progress = (t - 0.5) / 0.25;
      else progress = 1 - (t - 0.75) / 0.25;
      const down = t < 0.5;
      const y = down
        ? from.y + (to.y - from.y) * (t < 0.25 ? t / 0.25 : 1 - (t - 0.25) / 0.25)
        : to.y + (from.y - to.y) * ((t - 0.5) < 0.25 ? (t - 0.5) / 0.25 : 1 - (t - 0.75) / 0.25);
      packet.style.top = `${y}px`;
    } else {
      progress = t;
      packet.style.top = `${from.y + (to.y - from.y) * progress}px`;
    }
    packetAnim = requestAnimationFrame(tick);
  }
  packetAnim = requestAnimationFrame(tick);
}

function stopPacket() {
  if (packetAnim) cancelAnimationFrame(packetAnim);
  packetAnim = null;
  const packet = document.getElementById('stack-packet');
  packet.classList.add('hidden');
  packet.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', init);
