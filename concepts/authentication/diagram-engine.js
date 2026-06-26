/**
 * Simple auth diagram — nodes + straight lines, no moving packets.
 */
(function (global) {
  const NS = 'http://www.w3.org/2000/svg';

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function lineD(from, to) {
    return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  }

  function labelPos(from, to) {
    return { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 - 6 };
  }

  class AuthDiagramEngine {
    constructor(opts) {
      this.svg = opts.svg;
      this.nodesEl = opts.nodesEl;
      this.labelsEl = opts.labelsEl;
      this.emptyEl = opts.emptyEl;
      this.data = null;
      this.loadedId = null;
    }

    showPlaceholder(show) {
      if (this.emptyEl) this.emptyEl.classList.toggle('hidden', !show);
    }

    clear() {
      if (this.nodesEl) this.nodesEl.innerHTML = '';
      if (this.svg) this.svg.innerHTML = '';
      if (this.labelsEl) this.labelsEl.innerHTML = '';
    }

    hide() {
      this.clear();
      this.data = null;
      this.loadedId = null;
      this.showPlaceholder(true);
    }

    mount(diagramData) {
      if (!diagramData) {
        this.hide();
        return;
      }
      if (this.loadedId === diagramData.id) return;

      this.loadedId = diagramData.id;
      this.data = diagramData;
      this.clear();
      this.showPlaceholder(false);
      this._build(diagramData);
      if (global.lucide) global.lucide.createIcons();
    }

    applyFrame(frame) {
      if (!this.data || !frame) return;

      const {
        visibleNodes = [],
        highlightNodes = [],
        revealedConns = [],
        activeConns = [],
      } = frame;

      const visibleSet = new Set(visibleNodes);
      const highlightSet = new Set(highlightNodes);
      const dimOthers = highlightNodes.length > 0;

      this.data.nodes.forEach((node) => {
        const el = this.nodesEl?.querySelector(`#node-${node.id}`);
        if (!el) return;
        el.classList.remove('visible', 'highlight', 'dimmed');
        if (!visibleSet.has(node.id)) return;
        el.classList.add('visible');
        if (highlightSet.has(node.id)) el.classList.add('highlight');
        else if (dimOthers) el.classList.add('dimmed');
      });

      const revealedSet = new Set(revealedConns);
      const activeSet = new Set(activeConns);

      this.data.connections.forEach((_, i) => {
        const rev = revealedSet.has(i);
        const act = activeSet.has(i);
        this.svg?.querySelector(`#conn-bg-${i}`)?.classList.toggle('revealed', rev);
        this.svg?.querySelector(`#conn-${i}`)?.classList.toggle('revealed', rev);
        this.svg?.querySelector(`#conn-${i}`)?.classList.toggle('active', act);
        this.labelsEl?.querySelector(`#label-${i}`)?.classList.toggle('revealed', rev);
        this.labelsEl?.querySelector(`#label-${i}`)?.classList.toggle('active', act);
      });
    }

    _build(data) {
      const accent = data.accent || data.color || '#818cf8';
      this.svg.setAttribute('viewBox', '0 0 100 100');
      this.svg.setAttribute('preserveAspectRatio', 'none');

      data.nodes.forEach((node) => {
        const el = document.createElement('div');
        el.className = 'node-card';
        el.id = `node-${node.id}`;
        el.style.left = `${node.x}%`;
        el.style.top = `${node.y}%`;

        el.innerHTML = `
          <div class="node-icon-wrap" style="border-color:${accent}44">
            <i data-lucide="${node.icon}" class="lucide-icon-xl" style="color:${accent}"></i>
          </div>
          <span class="node-label">${esc(node.label)}</span>
          <span class="node-sublabel">${esc(node.sublabel || '')}</span>
        `;
        this.nodesEl.appendChild(el);
      });

      data.connections.forEach((conn, i) => {
        const from = data.nodes.find((n) => n.id === conn.from);
        const to = data.nodes.find((n) => n.id === conn.to);
        if (!from || !to) return;

        const d = lineD(from, to);
        const pos = labelPos(from, to);

        const bg = document.createElementNS(NS, 'path');
        bg.setAttribute('d', d);
        bg.setAttribute('class', 'connection-line-bg');
        bg.setAttribute('id', `conn-bg-${i}`);
        bg.setAttribute('vector-effect', 'non-scaling-stroke');
        this.svg.appendChild(bg);

        const line = document.createElementNS(NS, 'path');
        line.setAttribute('d', d);
        line.setAttribute('class', 'connection-line');
        line.setAttribute('id', `conn-${i}`);
        line.setAttribute('stroke', conn.color);
        line.setAttribute('vector-effect', 'non-scaling-stroke');
        if (conn.dashed) line.setAttribute('stroke-dasharray', '4 3');
        this.svg.appendChild(line);

        const lbl = document.createElement('div');
        lbl.className = 'conn-label';
        lbl.id = `label-${i}`;
        lbl.style.left = `${pos.x}%`;
        lbl.style.top = `${pos.y}%`;
        lbl.textContent = conn.label;
        this.labelsEl.appendChild(lbl);
      });
    }
  }

  global.AuthDiagramEngine = AuthDiagramEngine;
})(window);
