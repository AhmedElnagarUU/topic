const FAN_PATHS = {
  'client-lb': 'M 10% 48% L 34% 48%',
  'lb-s1': 'M 38% 48% Q 58% 48%, 72% 20%',
  'lb-s2': 'M 38% 48% L 72% 48%',
  'lb-s3': 'M 38% 48% Q 58% 48%, 72% 76%',
};

const STEPS = [
  {
    kicker: 'The problem',
    title: 'Traffic spikes overwhelm one server',
    desc: 'A viral post or Black Friday sale can send thousands of requests per second. A single server has limited CPU and memory — it will slow down or crash under load.',
    bullets: ['Vertical scaling has limits', 'Single point of failure', 'Need horizontal scaling'],
    hint: 'Only the Client appears — all traffic hits one place.',
    show: { client: true, lb: false, servers: false },
    lines: [],
    anim: null,
  },
  {
    kicker: 'The solution',
    title: 'Load balancer as traffic director',
    desc: 'A load balancer sits between clients and servers. Clients only know one address. The balancer forwards each request to a healthy backend server.',
    bullets: ['AWS ALB, NGINX, HAProxy', 'Hides multiple servers behind one URL', 'Enables zero-downtime deploys'],
    hint: 'Load Balancer appears between Clients and the server pool.',
    show: { client: true, lb: true, servers: false },
    lines: ['client-lb'],
    activeLines: ['client-lb'],
    anim: { path: 'client-lb' },
  },
  {
    kicker: 'Server pool',
    title: 'Multiple identical servers',
    desc: 'You run 3, 10, or 100 copies of the same app. Each can handle requests independently. If one dies, others keep serving — the balancer stops routing to it.',
    bullets: ['Stateless servers scale easily', 'Auto-scaling adds/removes instances', 'Same code, shared database'],
    hint: 'Three servers fan out from the load balancer.',
    show: { client: true, lb: true, servers: true },
    lines: Object.keys(FAN_PATHS),
    activeLines: ['client-lb'],
    anim: null,
  },
  {
    kicker: 'Round robin',
    title: 'Distribute requests evenly',
    desc: 'Round robin sends request 1 to Server 1, request 2 to Server 2, request 3 to Server 3, then back to Server 1. Simple and fair for equal-capacity servers.',
    bullets: ['Request N goes to server (N % 3)', 'Other algorithms: least connections, IP hash', 'Watch the counter rotate'],
    hint: 'Packet routes to a different server each round — watch the counter.',
    show: { client: true, lb: true, servers: true },
    lines: Object.keys(FAN_PATHS),
    activeLines: ['client-lb', 'lb-s1', 'lb-s2', 'lb-s3'],
    anim: { roundRobin: true },
  },
  {
    kicker: 'Health checks',
    title: 'Only send traffic to healthy servers',
    desc: 'The balancer pings each server every few seconds. If Server 2 stops responding, it\'s removed from the pool automatically. When it recovers, traffic returns.',
    bullets: ['HTTP /health endpoint', 'Prevents cascading failures', 'Enables rolling deployments'],
    hint: 'Server 2 dims when unhealthy — traffic skips it.',
    show: { client: true, lb: true, servers: true, unhealthy: 2 },
    lines: Object.keys(FAN_PATHS),
    activeLines: ['client-lb', 'lb-s1', 'lb-s3'],
    anim: { roundRobin: true, skip: 2 },
  },
];

let current = 0;
let animId = null;
let pathEls = {};
let rrIndex = 0;

function init() {
  const svg = document.getElementById('fan-svg');
  const ns = 'http://www.w3.org/2000/svg';
  Object.entries(FAN_PATHS).forEach(([id, d]) => {
    const p = document.createElementNS(ns, 'path');
    p.setAttribute('d', d);
    p.setAttribute('class', 'fan-line');
    p.setAttribute('id', `line-${id}`);
    p.setAttribute('stroke', '#fb7185');
    svg.appendChild(p);
    pathEls[id] = p;
  });
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

  document.getElementById('fan-client').classList.toggle('visible', step.show.client);
  document.getElementById('fan-client').classList.toggle('active', step.show.client);
  document.getElementById('fan-lb').classList.toggle('visible', step.show.lb);
  document.getElementById('fan-lb').classList.toggle('active', step.show.lb);

  [1, 2, 3].forEach(n => {
    const el = document.getElementById(`fan-s${n}`);
    const show = step.show.servers;
    const unhealthy = step.show.unhealthy === n;
    el.classList.toggle('visible', show);
    el.classList.toggle('active', show && !unhealthy);
    el.style.opacity = unhealthy ? '0.25' : '';
  });

  Object.keys(FAN_PATHS).forEach(id => {
    pathEls[id].classList.toggle('visible', step.lines.includes(id));
    pathEls[id].classList.toggle('active', step.activeLines?.includes(id));
  });

  const counter = document.getElementById('fan-counter');
  counter.classList.toggle('hidden', !step.anim?.roundRobin);

  if (step.anim) startAnim(step.anim);
  lucide.createIcons();
}

function startAnim(cfg) {
  const packet = document.getElementById('fan-packet');
  packet.classList.remove('hidden');

  if (cfg.roundRobin) {
    const serverPaths = ['lb-s1', 'lb-s2', 'lb-s3'].filter((_, i) => cfg.skip !== i + 1);
    const duration = 3000;
    let start = null;
    let lastRound = -1;

    function tick(ts) {
      if (!start) start = ts;
      const cycle = ((ts - start) % duration) / duration;
      const idx = Math.floor(cycle * serverPaths.length) % serverPaths.length;
      const serverPath = serverPaths[idx];

      if (idx !== lastRound) {
        lastRound = idx;
        const serverNum = serverPath === 'lb-s1' ? 1 : serverPath === 'lb-s2' ? 2 : 3;
        document.getElementById('fan-counter').textContent = `Round ${idx + 1} → Server ${serverNum}`;
        [1, 2, 3].forEach(n => document.getElementById(`fan-s${n}`).classList.toggle('active', n === serverNum && cfg.skip !== n));
      }

      const t = (cycle * serverPaths.length) % 1;
      const clientLb = pathEls['client-lb'];
      const lbLen = clientLb.getTotalLength();
      const srvPath = pathEls[serverPath];
      const srvLen = srvPath.getTotalLength();

      let pt;
      if (t < 0.35) {
        pt = clientLb.getPointAtLength((t / 0.35) * lbLen);
      } else {
        pt = srvPath.getPointAtLength(((t - 0.35) / 0.65) * srvLen);
      }
      positionPacket(packet, pt, srvPath);
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return;
  }

  const path = pathEls[cfg.path];
  const duration = 2400;
  let start = null;
  function tick(ts) {
    if (!start) start = ts;
    const p = ((ts - start) % duration) / duration;
    const pt = path.getPointAtLength(p * path.getTotalLength());
    positionPacket(packet, pt, path);
    animId = requestAnimationFrame(tick);
  }
  animId = requestAnimationFrame(tick);
}

function positionPacket(packet, pt, pathEl) {
  const canvas = document.getElementById('anim-canvas');
  const cr = canvas.getBoundingClientRect();
  const sp = document.getElementById('fan-svg').createSVGPoint();
  sp.x = pt.x; sp.y = pt.y;
  const screen = sp.matrixTransform(pathEl.getScreenCTM());
  packet.style.left = `${screen.x - cr.left}px`;
  packet.style.top = `${screen.y - cr.top}px`;
}

function stopAnim() {
  if (animId) cancelAnimationFrame(animId);
  animId = null;
  document.getElementById('fan-packet').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', init);
