/**
 * Concept Lab — Rich explanatory visuals for documentation steps
 */
const VisualEngine = (function () {
  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  const LAYER_META = {
    client: { icon: 'monitor-smartphone', label: 'Client', sub: 'Browser / App' },
    server: { icon: 'server', label: 'Server', sub: 'API / Logic' },
    database: { icon: 'database', label: 'Database', sub: 'MongoDB' },
    cache: { icon: 'zap', label: 'Cache', sub: 'Redis / CDN' },
    auth: { icon: 'shield', label: 'Auth', sub: 'Kinde / JWT' },
  };

  const STACK_HIGHLIGHT = {
    react: 'client',
    nextjs: 'server',
    backend: 'server',
    database: 'database',
    'auth-security': 'auth',
    forms: 'client',
    javascript: 'client',
    typescript: 'client',
  };

  function inferVisual(step, color, concept) {
    const k = (step.kicker || '').toLowerCase();
    if (k.includes('definition') || k.includes('big picture') || k.includes('what')) {
      return { type: 'definition', icon: step.icon || concept?.icon, title: step.title, bullets: step.bullets };
    }
    if (k.includes('how') || k.includes('works') || k.includes('mechanism')) {
      return { type: 'mechanism', bullets: step.bullets, code: step.code, title: step.title };
    }
    if (k.includes('stack') || k.includes('project') || k.includes('fit')) {
      return { type: 'integration', category: concept?.category, title: concept?.title };
    }
    return { type: 'summary', icon: step.icon || 'lightbulb', kicker: step.kicker, bullets: step.bullets };
  }

  function renderDefinition(v, color) {
    const bullets = (v.bullets || []).slice(0, 3);
    return `
      <div class="vex-definition">
        <div class="vex-def-icon ${color}"><i data-lucide="${v.icon || 'book-open'}"></i></div>
        <p class="vex-def-title">${esc(v.title || 'Concept')}</p>
        <div class="vex-def-chips">
          ${bullets.map((b, i) => `
            <div class="vex-chip">
              <span class="vex-chip-num">${i + 1}</span>
              <span>${esc(b.length > 48 ? b.slice(0, 45) + '…' : b)}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function renderMechanism(v, color) {
    const bullets = v.bullets || [];
    if (v.code) {
      return `
        <div class="vex-mechanism">
          <p class="vex-caption"><i data-lucide="code-2" class="w-3.5 h-3.5"></i> How it runs</p>
          <pre class="vex-code-preview">${esc(v.code)}</pre>
          ${bullets.length ? `<div class="vex-mini-flow">${bullets.map((b, i) => `
            <div class="vex-mini-step">
              <span class="vex-mini-dot ${color}">${i + 1}</span>
              <span>${esc(b.length > 40 ? b.slice(0, 38) + '…' : b)}</span>
            </div>
          `).join('')}</div>` : ''}
        </div>`;
    }
    return `
      <div class="vex-mechanism">
        <p class="vex-caption"><i data-lucide="git-branch" class="w-3.5 h-3.5"></i> Step-by-step flow</p>
        <div class="vex-pipeline">
          ${bullets.map((b, i) => `
            ${i > 0 ? '<div class="vex-pipe-arrow">↓</div>' : ''}
            <div class="vex-pipe-step ${color}">
              <span class="vex-pipe-num">${i + 1}</span>
              <span class="vex-pipe-text">${esc(b)}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function renderIntegration(v, color) {
    const highlight = STACK_HIGHLIGHT[v.category] || 'server';
    const layers = ['client', 'server', 'database'];
    return `
      <div class="vex-integration">
        <p class="vex-caption"><i data-lucide="layers" class="w-3.5 h-3.5"></i> Where it lives</p>
        <div class="vex-stack-diagram">
          ${layers.map((id) => {
            const m = LAYER_META[id];
            const active = id === highlight || (v.category === 'auth-security' && id === 'server');
            return `
              <div class="vex-stack-row ${active ? 'active ' + color : 'dim'}">
                <div class="vex-stack-icon"><i data-lucide="${m.icon}"></i></div>
                <div class="vex-stack-label">
                  <strong>${m.label}</strong>
                  <span>${m.sub}</span>
                </div>
                ${active ? '<span class="vex-you-are-here">← here</span>' : ''}
              </div>
              ${id !== 'database' ? '<div class="vex-stack-line">↓</div>' : ''}
            `;
          }).join('')}
        </div>
        <p class="vex-integration-note">${esc(v.title || '')} connects at the highlighted layer.</p>
      </div>`;
  }

  function renderSummary(v, color) {
    return `
      <div class="vex-summary">
        <div class="vex-def-icon ${color}"><i data-lucide="${v.icon || 'info'}"></i></div>
        <p class="vex-caption-center">${esc(v.kicker || 'Key idea')}</p>
        <ul class="vex-summary-list">
          ${(v.bullets || []).slice(0, 3).map((b) => `<li>${esc(b)}</li>`).join('')}
        </ul>
      </div>`;
  }

  function renderStack(v, color) {
    const layers = v.layers || [];
    const allLayers = ['client', 'server', 'database'];
    return `
      <div class="vex-stack-diagram vex-stack-full">
        <p class="vex-caption"><i data-lucide="layers" class="w-3.5 h-3.5"></i> Architecture layers</p>
        ${allLayers.map((id) => {
          const m = LAYER_META[id];
          const visible = layers.includes(id);
          const active = v.highlight === id || (visible && layers.length === 1);
          return `
            ${id !== 'client' ? '<div class="vex-stack-line' + (visible ? ' active' : '') + '">' + (v.roundTrip ? '⇅ data' : '↓ request') + '</div>' : ''}
            <div class="vex-stack-row ${visible ? (active ? 'active ' + color : 'visible') : 'hidden-layer'}">
              <div class="vex-stack-icon"><i data-lucide="${m.icon}"></i></div>
              <div class="vex-stack-label"><strong>${m.label}</strong><span>${m.sub}</span></div>
            </div>
          `;
        }).join('')}
        ${v.label ? `<p class="vex-flow-tag">${esc(v.label)}</p>` : ''}
      </div>`;
  }

  function renderFlow(v, color) {
    const fromMeta = LAYER_META[v.from] || { icon: 'box', label: v.from };
    const toMeta = LAYER_META[v.to] || { icon: 'box', label: v.to };
    return `
      <div class="vex-flow-diagram">
        <p class="vex-caption"><i data-lucide="arrow-right" class="w-3.5 h-3.5"></i> Data movement</p>
        <div class="vex-flow-nodes">
          <div class="vex-flow-node ${color}">
            <i data-lucide="${fromMeta.icon}"></i>
            <span>${esc(fromMeta.label || v.from)}</span>
          </div>
          <div class="vex-flow-connector">
            <div class="vex-flow-line"></div>
            <span class="vex-flow-packet">${esc(v.label || 'request')}</span>
            <i data-lucide="chevron-right" class="vex-flow-chevron"></i>
          </div>
          <div class="vex-flow-node ${color}">
            <i data-lucide="${toMeta.icon}"></i>
            <span>${esc(toMeta.label || v.to)}</span>
          </div>
        </div>
      </div>`;
  }

  function renderRoundtrip(v, color) {
    const path = v.path || [];
    return `
      <div class="vex-roundtrip">
        <p class="vex-caption"><i data-lucide="repeat" class="w-3.5 h-3.5"></i> Full round trip</p>
        <div class="vex-rt-path">
          ${path.map((p, i) => {
            const m = LAYER_META[p] || { icon: 'circle', label: p };
            const arrow = i > 0 ? `<span class="vex-rt-arrow">${i <= 2 ? '↓' : '↑'}</span>` : '';
            return `${arrow}<div class="vex-rt-node${i === 0 || i === path.length - 1 ? ' endpoint' : ''} ${color}"><i data-lucide="${m.icon}"></i>${esc(m.label || p)}</div>`;
          }).join('')}
        </div>
      </div>`;
  }

  function renderExchange(v, color) {
    const modes = {
      intro: { req: '…', res: '…', label: 'Two-way channel' },
      request: { req: 'GET /users/42', res: 'waiting…', label: 'Request sent' },
      response: { req: 'done', res: '200 OK + JSON', label: 'Response received' },
      full: { req: 'GET /orders', res: '[{...},{...}]', label: 'Request → Response' },
    };
    const m = modes[v.mode] || modes.intro;
    return `
      <div class="vex-exchange">
        <p class="vex-caption"><i data-lucide="arrow-left-right" class="w-3.5 h-3.5"></i> ${esc(v.label || m.label)}</p>
        <div class="vex-lanes">
          <div class="vex-lane request">
            <span class="vex-lane-label">Request →</span>
            <div class="vex-lane-packet">${esc(v.reqLabel || m.req)}</div>
          </div>
          <div class="vex-lane response">
            <span class="vex-lane-label">← Response</span>
            <div class="vex-lane-packet">${esc(v.resLabel || m.res)}</div>
          </div>
        </div>
      </div>`;
  }

  function renderTunnel(v, color) {
    const modes = {
      plain: { badge: 'plain', text: 'Readable text — anyone can read', secure: false },
      secure: { badge: 'secure', text: 'TLS encrypts the tunnel', secure: true },
      handshake: { badge: 'secure', text: 'Keys exchanged first', secure: true },
      transit: { badge: 'secure', text: 'Encrypted bytes in transit', secure: true },
      decrypt: { badge: 'secure', text: 'Only server decrypts', secure: true },
    };
    const m = modes[v.mode] || modes.plain;
    return `
      <div class="vex-tunnel">
        <p class="vex-caption"><i data-lucide="lock" class="w-3.5 h-3.5"></i> Connection security</p>
        <div class="vex-tunnel-diagram ${m.secure ? 'secure' : 'plain'}">
          <div class="vex-tunnel-end">Client</div>
          <div class="vex-tunnel-pipe">
            <span class="visual-badge ${m.badge}">${m.secure ? '🔒 HTTPS' : '⚠ HTTP'}</span>
            <span class="vex-tunnel-data">${m.secure ? '••••••••' : 'password=secret'}</span>
          </div>
          <div class="vex-tunnel-end">Server</div>
        </div>
        <p class="vex-tunnel-note">${m.text}</p>
      </div>`;
  }

  function renderCache(v, color) {
    const hit = ['hit', 'cdn'].includes(v.mode);
    const miss = ['miss', 'invalidate'].includes(v.mode);
    return `
      <div class="vex-cache">
        <p class="vex-caption"><i data-lucide="zap" class="w-3.5 h-3.5"></i> Cache path</p>
        ${hit ? '<span class="visual-badge hit">⚡ Cache HIT — fast</span>' : ''}
        ${miss ? '<span class="visual-badge miss">🐢 Cache MISS — slow</span>' : ''}
        ${!hit && !miss ? '<span class="vex-cache-intro">Cache sits between client and server</span>' : ''}
        <div class="vex-cache-path">
          <div class="vex-cache-node">Client</div>
          <div class="vex-cache-arrow ${hit ? 'hit' : miss ? 'miss' : ''}">→</div>
          <div class="vex-cache-node highlight">Cache</div>
          <div class="vex-cache-arrow ${miss ? 'miss' : 'dim'}">→</div>
          <div class="vex-cache-node ${miss ? 'active' : 'dim'}">Server → DB</div>
        </div>
      </div>`;
  }

  function renderFanout(v, color) {
    const modes = {
      single: { servers: 0, label: 'One server — bottleneck' },
      balancer: { servers: 0, label: 'Load balancer added' },
      pool: { servers: 3, label: 'Server pool' },
      roundrobin: { servers: 3, label: 'Round-robin distribution', active: 1 },
      health: { servers: 3, label: 'Unhealthy server skipped', skip: 2 },
    };
    const m = modes[v.mode] || modes.pool;
    const count = m.servers ?? 3;
    return `
      <div class="vex-fanout">
        <p class="vex-caption"><i data-lucide="share-2" class="w-3.5 h-3.5"></i> ${esc(m.label)}</p>
        <div class="vex-fanout-diagram">
          <div class="vex-fanout-client">Clients</div>
          <div class="vex-fanout-line">↓</div>
          <div class="vex-fanout-lb ${color}">Load Balancer</div>
          ${count > 0 ? `<div class="vex-fanout-lines">↙ ↓ ↘</div>
          <div class="vex-fanout-servers">
            ${[1, 2, 3].map((n) => `
              <div class="vex-fanout-srv${m.skip === n ? ' down' : ''}${m.active === n ? ' active' : ''}">S${n}</div>
            `).join('')}
          </div>` : '<div class="vex-fanout-single">Single Server ⚠</div>'}
        </div>
      </div>`;
  }

  function renderRealtime(v, color) {
    const modes = {
      polling: { icon: 'refresh-ccw', title: 'HTTP Polling', desc: 'Client asks repeatedly — wasteful', waves: 0 },
      connect: { icon: 'plug', title: 'WebSocket Upgrade', desc: 'One persistent connection', waves: 0 },
      multi: { icon: 'users', title: 'Multiple clients', desc: 'Each tab = one connection', waves: 0 },
      broadcast: { icon: 'megaphone', title: 'Server Push', desc: 'Instant broadcast to all', waves: 3 },
      compare: { icon: 'scale', title: 'WS vs HTTP', desc: 'Push when frequent; HTTP when rare', waves: 1 },
    };
    const m = modes[v.mode] || modes.connect;
    return `
      <div class="vex-realtime">
        <p class="vex-caption"><i data-lucide="${m.icon}" class="w-3.5 h-3.5"></i> ${esc(m.title)}</p>
        <div class="vex-rt-layout">
          <div class="vex-rt-server ${color}"><i data-lucide="server"></i>Server</div>
          ${m.waves > 0 ? '<div class="vex-rt-ripples">' + '◯ '.repeat(m.waves) + '</div>' : '<div class="vex-rt-wire">━━━━ connected ━━━━</div>'}
          <div class="vex-rt-clients">
            <span>👤</span><span>👤</span><span>👤</span>
          </div>
        </div>
        <p class="vex-tunnel-note">${esc(m.desc)}</p>
      </div>`;
  }

  function renderNodes(v, color) {
    return `
      <div class="vex-nodes">
        <p class="vex-caption"><i data-lucide="network" class="w-3.5 h-3.5"></i> Components involved</p>
        <div class="vex-node-grid">
          ${(v.nodes || []).map((n, i) => `
            <div class="vex-node-card ${color}">
              <span class="vex-node-num">${i + 1}</span>
              <i data-lucide="circle-dot"></i>
              <span>${esc(n)}</span>
            </div>
            ${i < v.nodes.length - 1 ? '<span class="vex-node-conn">→</span>' : ''}
          `).join('')}
        </div>
      </div>`;
  }

  function render(step, color, concept) {
    const v = step.visual || inferVisual(step, color, concept);
    const merged = {
      ...v,
      bullets: v.bullets || step.bullets,
      code: v.code || step.code,
      title: v.title || step.title,
      icon: v.icon || step.icon,
      kicker: v.kicker || step.kicker,
    };
    let inner = '';

    switch (merged.type) {
      case 'definition': inner = renderDefinition(merged, color); break;
      case 'mechanism': inner = renderMechanism(merged, color); break;
      case 'integration': inner = renderIntegration(merged, color); break;
      case 'summary': inner = renderSummary(merged, color); break;
      case 'stack': inner = renderStack(merged, color); break;
      case 'flow': inner = renderFlow(merged, color); break;
      case 'roundtrip': inner = renderRoundtrip(merged, color); break;
      case 'exchange': inner = renderExchange(merged, color); break;
      case 'tunnel': inner = renderTunnel(merged, color); break;
      case 'cache': inner = renderCache(merged, color); break;
      case 'fanout': inner = renderFanout(merged, color); break;
      case 'realtime': inner = renderRealtime(merged, color); break;
      case 'nodes': inner = renderNodes(merged, color); break;
      default: inner = renderSummary(merged, color);
    }

    return `<div class="doc-visual enhanced ${color}"><div class="doc-visual-inner">${inner}</div></div>`;
  }

  return { render, inferVisual };
})();
