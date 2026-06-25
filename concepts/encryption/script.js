const STEPS = [
  {
    kicker: 'Plain HTTP',
    title: 'Data travels in readable text',
    desc: 'Without encryption, HTTP sends headers and body as plain text. Anyone on the same Wi‑Fi — or any router along the path — can read passwords, cookies, and personal data.',
    bullets: ['URL and body visible on the network', 'No lock icon in the browser', 'Never send passwords over plain HTTP'],
    hint: 'Red packet crosses in plain text — the snooper can read it.',
    show: { client: true, tunnel: false, server: true, attacker: true },
    packet: { label: 'password=secret', mode: 'plain' },
  },
  {
    kicker: 'HTTPS',
    title: 'TLS wraps the connection',
    desc: 'HTTPS = HTTP inside TLS. The browser and server negotiate keys, then all traffic is encrypted. The URL path is still visible, but the body and cookies are protected.',
    bullets: ['Padlock icon in the address bar', 'Uses port 443 instead of 80', 'Certificates prove server identity'],
    hint: 'Green TLS tunnel appears — data transforms inside it.',
    show: { client: true, tunnel: true, server: true, attacker: true },
    packet: { label: 'password=secret', mode: 'encrypt' },
  },
  {
    kicker: 'Handshake',
    title: 'TLS handshake establishes keys',
    desc: 'Before any data flows, client and server perform a handshake: agree on cipher suites, verify the certificate, and exchange session keys using asymmetric crypto.',
    bullets: ['Client Hello → Server Hello → Certificate', 'Session keys are symmetric (fast)', 'Happens once per connection (or resumed)'],
    hint: 'Packet morphs to ciphertext inside the tunnel — snooper sees gibberish.',
    show: { client: true, tunnel: true, server: true, attacker: true },
    packet: { label: 'a8f3…9c2e', mode: 'encrypted' },
  },
  {
    kicker: 'In transit',
    title: 'Encrypted bytes cross the internet',
    desc: 'The encrypted payload travels through ISPs, data centers, and coffee-shop routers. Without the private key, attackers only see random-looking bytes.',
    bullets: ['End-to-end encryption between client & server', 'Forward secrecy with modern TLS 1.3', 'HSTS forces HTTPS in browsers'],
    hint: 'Snooper shows "???" — cannot decrypt without the session key.',
    show: { client: true, tunnel: true, server: true, attacker: true },
    packet: { label: '???', mode: 'blocked', snooper: true },
  },
  {
    kicker: 'Decrypted',
    title: 'Server reads the original request',
    desc: 'Only the server with the matching private key decrypts the request, processes it, and encrypts the response. The client decrypts on arrival — the round trip stays protected.',
    bullets: ['Encrypt outbound, decrypt inbound', 'Same tunnel for request and response', 'Foundation of all secure web apps'],
    hint: 'Full cycle: plain → encrypted → plain on the server side.',
    show: { client: true, tunnel: true, server: true, attacker: false },
    packet: { label: '{ ok: true }', mode: 'encrypt', roundTrip: true },
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

function bounds() {
  const canvas = document.getElementById('anim-canvas');
  const cr = canvas.getBoundingClientRect();
  const client = document.getElementById('tn-client');
  const server = document.getElementById('tn-server');
  const tunnel = document.getElementById('tn-tunnel');
  const cR = client.getBoundingClientRect();
  const sR = server.getBoundingClientRect();
  const tR = tunnel.getBoundingClientRect();
  return {
    clientX: cR.right - cr.left,
    tunnelIn: tR.left - cr.left + 20,
    tunnelMid: tR.left - cr.left + tR.width / 2,
    tunnelOut: tR.right - cr.left - 20,
    serverX: sR.left - cr.left,
    y: cR.top + cR.height / 2 - cr.top,
  };
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

  ['tn-client', 'tn-server'].forEach(id => {
    const el = document.getElementById(id);
    el.classList.toggle('visible', step.show.client || step.show.server);
    el.classList.toggle('active', true);
  });
  document.getElementById('tn-tunnel').classList.toggle('visible', step.show.tunnel);
  document.getElementById('tn-tunnel').classList.toggle('active', step.show.tunnel);
  document.getElementById('tn-attacker').classList.toggle('visible', step.show.attacker);

  if (step.packet) startPacket(step.packet);
  lucide.createIcons();
  if (window.AnimTooltips) AnimTooltips.refresh();
}

function startPacket(cfg) {
  const packet = document.getElementById('tunnel-packet');
  packet.textContent = cfg.label;
  packet.classList.remove('hidden', 'plain', 'encrypted', 'blocked');
  packet.classList.add(cfg.mode === 'plain' ? 'plain' : cfg.mode === 'blocked' ? 'blocked' : 'encrypted');

  const duration = cfg.roundTrip ? 5000 : 3200;
  let start = null;

  function tick(ts) {
    if (!start) start = ts;
    const t = ((ts - start) % duration) / duration;
    const b = bounds();

    if (cfg.roundTrip) {
      if (t < 0.2) {
        packet.style.left = `${b.clientX + (b.tunnelIn - b.clientX) * (t / 0.2)}px`;
        packet.className = 'tunnel-packet plain';
        packet.textContent = 'GET /api';
      } else if (t < 0.35) {
        packet.style.left = `${b.tunnelMid}px`;
        packet.className = 'tunnel-packet encrypted';
        packet.textContent = '7f2a…b1c9';
      } else if (t < 0.55) {
        packet.style.left = `${b.tunnelOut + (b.serverX - b.tunnelOut) * ((t - 0.35) / 0.2)}px`;
        packet.className = 'tunnel-packet encrypted';
      } else if (t < 0.75) {
        packet.style.left = `${b.serverX - (b.serverX - b.tunnelOut) * ((t - 0.55) / 0.2)}px`;
        packet.className = 'tunnel-packet encrypted';
        packet.textContent = '{ ok: true }';
      } else {
        packet.style.left = `${b.tunnelMid - (b.tunnelMid - b.clientX) * ((t - 0.75) / 0.25)}px`;
        packet.className = 'tunnel-packet encrypted';
      }
    } else if (cfg.mode === 'encrypt') {
      const enterEnd = 0.35;
      const exitEnd = 0.7;
      if (t < enterEnd) {
        const p = t / enterEnd;
        packet.style.left = `${b.clientX + (b.tunnelIn - b.clientX) * p}px`;
        packet.className = 'tunnel-packet ' + (p > 0.5 ? 'encrypted' : 'plain');
        if (p > 0.55) packet.textContent = 'a8f3…9c2e';
      } else if (t < exitEnd) {
        const p = (t - enterEnd) / (exitEnd - enterEnd);
        packet.style.left = `${b.tunnelIn + (b.serverX - b.tunnelIn) * p}px`;
        packet.className = 'tunnel-packet encrypted';
      } else {
        const p = (t - exitEnd) / (1 - exitEnd);
        packet.style.left = `${b.serverX}px`;
        packet.className = 'tunnel-packet encrypted';
        packet.style.opacity = String(1 - p * 0.5);
      }
    } else {
      packet.style.left = `${b.clientX + (b.serverX - b.clientX) * t}px`;
      packet.style.opacity = '1';
    }

    packet.style.top = `${b.y}px`;
    animId = requestAnimationFrame(tick);
  }
  animId = requestAnimationFrame(tick);
}

function stopAnim() {
  if (animId) cancelAnimationFrame(animId);
  animId = null;
  const packet = document.getElementById('tunnel-packet');
  packet.classList.add('hidden');
  packet.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', init);
