/**
 * Concept Lab — Documentation data
 * Categories sorted from fundamentals → advanced topics.
 */
const CONCEPT_CATEGORIES = [
  {
    id: 'fundamentals',
    name: 'Programming Fundamentals',
    description: 'Start here — the building blocks every web application is built on.',
    icon: 'layers',
    color: 'cyan',
    order: 1,
  },
  {
    id: 'security',
    name: 'Security & Identity',
    description: 'How apps prove who you are and protect data in transit.',
    icon: 'shield-check',
    color: 'emerald',
    order: 2,
  },
  {
    id: 'performance',
    name: 'Performance & Scaling',
    description: 'Speed up responses and handle growing traffic.',
    icon: 'zap',
    color: 'amber',
    order: 3,
  },
  {
    id: 'realtime',
    name: 'Real-Time Systems',
    description: 'Push updates instantly instead of asking repeatedly.',
    icon: 'radio',
    color: 'sky',
    order: 4,
  },
];

const CONCEPTS = [
  {
    id: 'client-server-database',
    slug: 'client-server-database',
    num: '01',
    title: 'Client, Server & Database',
    summary: 'The three layers behind every web app — who does what when you open a website.',
    category: 'fundamentals',
    icon: 'layers',
    color: 'cyan',
    tags: ['client', 'server', 'database', 'architecture', 'http', 'foundation'],
    intro: 'Before authentication, APIs, or caching — you need to understand who does what when you open a website. Every app you use follows this same three-layer pattern.',
    steps: [
      {
        kicker: 'The big picture',
        title: 'Every web app has three layers',
        desc: 'When you use Instagram, Gmail, or any website, three separate pieces work together. The client shows the UI, the server runs the logic, and the database remembers everything.',
        bullets: ['Client = what you see and click', 'Server = business rules & security', 'Database = users, posts, orders'],
        icon: 'boxes',
        visual: { type: 'stack', layers: ['client', 'server', 'database'] },
      },
      {
        kicker: 'Layer 1',
        title: 'The Client — your device',
        desc: 'The client is the browser or mobile app on your phone. It renders buttons and forms, captures clicks, and sends requests over the internet. It never stores the master copy of your data.',
        bullets: ['Chrome, Safari, React Native apps are all clients', 'Runs on the user\'s machine', 'Asks the server for data and sends user actions'],
        icon: 'monitor-smartphone',
        visual: { type: 'stack', layers: ['client'], highlight: 'client' },
      },
      {
        kicker: 'Layer 2',
        title: 'The Server — the brain',
        desc: 'The server receives requests, validates them, applies business rules ("is this user allowed?"), and talks to the database. It\'s a program running on a remote machine — not on your laptop.',
        bullets: ['Node.js, Django, Rails, Go APIs', 'Never expose database directly to users', 'Returns JSON or HTML back to the client'],
        icon: 'server',
        visual: { type: 'flow', from: 'client', to: 'server', label: 'GET /profile' },
      },
      {
        kicker: 'Layer 3',
        title: 'The Database — long-term memory',
        desc: 'The database stores users, passwords (hashed), posts, and settings. The server reads and writes here. Clients should never connect to the database directly — that would be a security disaster.',
        bullets: ['PostgreSQL, MySQL, MongoDB, Redis', 'Data survives server restarts', 'Only the server has database credentials'],
        icon: 'database',
        visual: { type: 'flow', from: 'server', to: 'database', label: 'SELECT * FROM users' },
      },
      {
        kicker: 'Full round trip',
        title: 'Request down, response back up',
        desc: 'A typical flow: Client asks Server → Server queries Database → Server formats the answer → Client displays it. This pattern repeats billions of times per day across the internet.',
        bullets: ['Request travels down the stack', 'Response travels back up', 'Same pattern for login, search, checkout'],
        icon: 'repeat',
        visual: { type: 'roundtrip', path: ['client', 'server', 'database', 'server', 'client'] },
      },
    ],
  },
  {
    id: 'http-rest',
    slug: 'http-rest',
    num: '02',
    title: 'HTTP & REST APIs',
    summary: 'How clients and servers talk — methods, status codes, and the REST pattern.',
    category: 'fundamentals',
    icon: 'globe',
    color: 'violet',
    tags: ['http', 'rest', 'api', 'get', 'post', 'json', 'status codes'],
    intro: 'HTTP is the language of the web. Every click, form submit, and API call uses it. REST organizes that language into predictable patterns most modern apps rely on.',
    steps: [
      {
        kicker: 'Foundation',
        title: 'HTTP is the delivery protocol',
        desc: 'Every click, form submit, and API call uses HTTP. The client sends a request with a method (GET, POST, etc.) and URL. The server replies with a status code and body.',
        bullets: ['GET = read data', 'POST = create/send data', 'Status 200 = success, 404 = not found'],
        icon: 'send',
        visual: { type: 'exchange', mode: 'intro' },
      },
      {
        kicker: 'Reading data',
        title: 'GET request — fetch a resource',
        desc: 'When you visit /api/users/42, the client sends GET /api/users/42. The server looks up user 42 and returns JSON. GET requests should not change data.',
        bullets: ['Idempotent — safe to repeat', 'No request body needed', 'Cached by browsers and CDNs'],
        icon: 'download',
        visual: { type: 'exchange', mode: 'request', label: 'GET /users/42' },
      },
      {
        kicker: 'Server replies',
        title: 'Response comes back on its own lane',
        desc: 'The server responds with HTTP 200 OK and a JSON body. Responses travel separately from requests — think of two one-way streets instead of one confused road.',
        bullets: ['Status line: HTTP/1.1 200 OK', 'Headers: Content-Type: application/json', 'Body: { "id": 42, "name": "Ada" }'],
        icon: 'reply',
        visual: { type: 'exchange', mode: 'response', label: '200 { id: 42 }' },
      },
      {
        kicker: 'Writing data',
        title: 'POST request — create something new',
        desc: 'Signing up, placing an order, or posting a comment uses POST. The client sends data in the body. The server validates it, saves to the database, and returns the created resource.',
        bullets: ['POST /api/orders with JSON body', 'Server returns 201 Created', 'Not cached — changes state'],
        icon: 'upload',
        visual: { type: 'exchange', mode: 'request', label: 'POST { item: "book" }' },
      },
      {
        kicker: 'REST pattern',
        title: 'Resources + HTTP methods = REST API',
        desc: 'REST organizes APIs around nouns (users, orders) not verbs. GET /users, POST /users, PUT /users/1, DELETE /users/1 — predictable URLs with standard HTTP semantics.',
        bullets: ['Nouns in URLs, verbs in HTTP methods', 'Stateless — each request is independent', 'Foundation for most modern APIs'],
        icon: 'route',
        visual: { type: 'exchange', mode: 'full', reqLabel: 'GET /orders', resLabel: '[ {...}, {...} ]' },
      },
    ],
  },
  {
    id: 'authentication',
    slug: 'authentication',
    num: '03',
    title: 'Authentication',
    summary: 'Sessions, JWT, OAuth & API keys — how apps prove who you are.',
    category: 'security',
    icon: 'shield-check',
    color: 'emerald',
    tags: ['auth', 'session', 'jwt', 'oauth', 'cookie', 'token', 'login'],
    intro: 'Authentication answers one question: "Who is making this request?" After login, the real design choice is where that proof lives — on the server or with the client.',
    sections: [
      {
        id: 'overview',
        title: 'Two Ways to Prove Identity',
        icon: 'git-compare',
        steps: [
          {
            kicker: 'The big picture',
            title: 'What is authentication?',
            desc: 'Authentication answers one simple question: "Who is making this request?" Every time you log into a website, open a mobile app, or call an API, something needs to verify your identity.',
            bullets: ['Authentication = proving who you are', 'Authorization = what you\'re allowed to do', 'Session-based: server remembers you', 'Token-based (JWT): client carries proof'],
            icon: 'help-circle',
          },
          {
            kicker: 'Approach A',
            title: 'Session-based — the server remembers you',
            desc: 'Think of a coat-check at a restaurant. You hand over your coat (password), the attendant stores it in the back room (database), and gives you a small ticket number (session ID in a cookie).',
            bullets: ['Browser stores a cookie with a random session ID', 'Server stores your identity in a database', 'Every request: server looks up the session ID', 'Best for: traditional websites, server-rendered pages'],
            icon: 'cookie',
            visual: { type: 'nodes', nodes: ['Browser', 'Web Server', 'Session Store'] },
          },
          {
            kicker: 'Approach B',
            title: 'JWT token — the client carries proof',
            desc: 'Think of a signed letter from the government. After verifying your identity once, the server writes your name and role on a letter, seals it with a secret stamp, and hands it to you.',
            bullets: ['Client stores the full JWT token', 'Server stores nothing about the logged-in user', 'Every request: server verifies the signature', 'Best for: SPAs, mobile apps, microservices'],
            icon: 'key-round',
            visual: { type: 'nodes', nodes: ['Client App', 'Auth Server', 'API Server'] },
          },
        ],
      },
      {
        id: 'session',
        title: 'Session-Based Auth Walkthrough',
        icon: 'cookie',
        steps: [
          {
            kicker: 'Login request',
            title: 'User sends username & password',
            desc: 'The user fills a login form. The browser sends a POST request with credentials over HTTPS. This is the only time the password travels during the session.',
            bullets: ['Password sent once — never stored in the cookie', 'HTTPS encrypts the request', 'Server hash-compares against its database'],
            icon: 'log-in',
            code: 'POST /login\n{ "email": "you@mail.com", "password": "••••••" }',
          },
          {
            kicker: 'Validation',
            title: 'Server creates a session record',
            desc: 'If credentials are valid, the server generates a random session ID and saves user data in a session store. The password is discarded; only the session ID matters from here.',
            bullets: ['Session ID is cryptographically random', 'User data lives on the server', 'Redis is common for fast lookups'],
            icon: 'database',
            code: 'Session Store:\n  "abc123" → { userId: 42, role: "admin" }',
          },
          {
            kicker: 'Cookie handshake',
            title: 'Browser receives a session cookie',
            desc: 'The server responds with Set-Cookie. The browser stores it and attaches it to every future request. The cookie contains only the session ID — not the password.',
            bullets: ['HttpOnly prevents JavaScript reading the cookie', 'Secure flag = HTTPS only', 'SameSite reduces CSRF risk'],
            icon: 'cookie',
            code: 'Set-Cookie: sid=abc123; HttpOnly; Secure; SameSite=Lax',
          },
          {
            kicker: 'After login',
            title: 'Cookie proves identity automatically',
            desc: 'On every visit, the browser silently attaches the cookie. The server looks up the session and knows who is asking — no password needed again.',
            bullets: ['Browser sends cookie automatically', 'Server can invalidate instantly (force logout)', 'Scaling requires shared session store'],
            icon: 'shield',
            code: 'GET /dashboard\nCookie: sid=abc123\n→ userId: 42 ✓',
          },
        ],
      },
      {
        id: 'jwt',
        title: 'JWT Token Auth Walkthrough',
        icon: 'key-round',
        steps: [
          {
            kicker: 'Initial auth',
            title: 'Client sends credentials to Auth Server',
            desc: 'The user logs in once with email and password. Instead of a server-side record, the Auth Server packages identity into a self-contained token.',
            bullets: ['Auth Server can be dedicated or your /login endpoint', 'Credentials validated as usual', 'Difference is what comes back'],
            icon: 'log-in',
            code: 'POST /auth/login\n{ "email": "you@mail.com", "password": "••••••" }',
          },
          {
            kicker: 'Token creation',
            title: 'Server builds & signs a JWT',
            desc: 'The server creates a JSON object with claims — user ID, role, expiry — then signs it. Result: header.payload.signature.',
            bullets: ['Header: algorithm (HS256)', 'Payload: user data + exp', 'Signature: proves no tampering'],
            icon: 'file-signature',
            code: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQyfQ.SflKxw...',
          },
          {
            kicker: 'Storage',
            title: 'App saves the token locally',
            desc: 'The client stores the JWT in memory, localStorage, or an HttpOnly cookie. No server-side session exists. The token IS the proof until it expires.',
            bullets: ['Memory: lost on refresh (often + refresh tokens)', 'localStorage: persists but XSS risk', 'Short expiry + refresh token is common'],
            icon: 'save',
            code: 'localStorage.setItem("token", "eyJhbGci...")',
          },
          {
            kicker: 'Verification',
            title: 'Token sent with every API call',
            desc: 'Each request adds Authorization: Bearer <token>. The API verifies the signature — no database call needed.',
            bullets: ['Any service with the secret can verify', 'No central session store', 'Revoking requires blocklist or short lifetime'],
            icon: 'badge-check',
            code: 'GET /api/orders\nAuthorization: Bearer eyJhbGci...',
          },
        ],
      },
    ],
  },
  {
    id: 'encryption',
    slug: 'encryption',
    num: '04',
    title: 'Encryption & HTTPS',
    summary: 'How TLS protects passwords and data as they cross the internet.',
    category: 'security',
    icon: 'lock',
    color: 'lime',
    tags: ['https', 'tls', 'ssl', 'encryption', 'security', 'certificate'],
    intro: 'Without encryption, anyone on the network can read your passwords and cookies. HTTPS wraps HTTP inside TLS so data stays private between client and server.',
    steps: [
      {
        kicker: 'Plain HTTP',
        title: 'Data travels in readable text',
        desc: 'Without encryption, HTTP sends headers and body as plain text. Anyone on the same Wi‑Fi — or any router along the path — can read passwords, cookies, and personal data.',
        bullets: ['URL and body visible on the network', 'No lock icon in the browser', 'Never send passwords over plain HTTP'],
        icon: 'eye',
        visual: { type: 'tunnel', mode: 'plain' },
      },
      {
        kicker: 'HTTPS',
        title: 'TLS wraps the connection',
        desc: 'HTTPS = HTTP inside TLS. The browser and server negotiate keys, then all traffic is encrypted. The URL path is still visible, but the body and cookies are protected.',
        bullets: ['Padlock icon in the address bar', 'Uses port 443 instead of 80', 'Certificates prove server identity'],
        icon: 'lock',
        visual: { type: 'tunnel', mode: 'secure' },
      },
      {
        kicker: 'Handshake',
        title: 'TLS handshake establishes keys',
        desc: 'Before data flows, client and server perform a handshake: agree on cipher suites, verify the certificate, and exchange session keys.',
        bullets: ['Client Hello → Server Hello → Certificate', 'Session keys are symmetric (fast)', 'Happens once per connection'],
        icon: 'handshake',
        visual: { type: 'tunnel', mode: 'handshake' },
      },
      {
        kicker: 'In transit',
        title: 'Encrypted bytes cross the internet',
        desc: 'The encrypted payload travels through ISPs and routers. Without the private key, attackers only see random-looking bytes.',
        bullets: ['End-to-end encryption between client & server', 'Forward secrecy with TLS 1.3', 'HSTS forces HTTPS in browsers'],
        icon: 'shield-off',
        visual: { type: 'tunnel', mode: 'transit' },
      },
      {
        kicker: 'Decrypted',
        title: 'Server reads the original request',
        desc: 'Only the server with the matching private key decrypts the request, processes it, and encrypts the response. The round trip stays protected.',
        bullets: ['Encrypt outbound, decrypt inbound', 'Same tunnel for request and response', 'Foundation of all secure web apps'],
        icon: 'unlock',
        visual: { type: 'tunnel', mode: 'decrypt' },
      },
    ],
  },
  {
    id: 'caching',
    slug: 'caching',
    num: '05',
    title: 'Caching',
    summary: 'Store copies of answers so repeated requests finish in milliseconds.',
    category: 'performance',
    icon: 'zap',
    color: 'amber',
    tags: ['cache', 'redis', 'cdn', 'hit', 'miss', 'ttl', 'performance'],
    intro: 'Fetching the same data from the database every time is slow and expensive. Caching stores a copy of the answer so identical requests finish almost instantly.',
    steps: [
      {
        kicker: 'Why cache?',
        title: 'Repeated work is wasteful',
        desc: 'Fetching the same product page from the database every time is slow and expensive. Caching stores a copy of the answer so the next identical request finishes in milliseconds.',
        bullets: ['RAM is 100× faster than disk', 'Reduces database load', 'Used in browsers, CDNs, Redis'],
        icon: 'timer',
        visual: { type: 'cache', mode: 'overview' },
      },
      {
        kicker: 'Cache HIT',
        title: 'Fast path — answer already stored',
        desc: 'The client asks for /products/1. The cache already has that response. It returns immediately — the server and database are never touched.',
        bullets: ['Typical latency: 1–5 ms', 'Green path = cache hit', 'Happens on popular, repeated requests'],
        icon: 'check-circle',
        visual: { type: 'cache', mode: 'hit' },
      },
      {
        kicker: 'Cache MISS',
        title: 'Slow path — must fetch from origin',
        desc: 'First visit or expired entry: cache has nothing. Request falls through to the server, which queries the database, builds the response, and the cache stores a copy.',
        bullets: ['Orange path = cache miss', 'Slower but populates cache', 'TTL decides when entry expires'],
        icon: 'x-circle',
        visual: { type: 'cache', mode: 'miss' },
      },
      {
        kicker: 'CDN edge',
        title: 'Cache closer to users',
        desc: 'A CDN puts cache servers in cities worldwide. A user in Tokyo gets cached images from Tokyo — not from a server in Virginia.',
        bullets: ['Geographic distribution', 'Great for static assets (images, JS)', 'Cloudflare, Fastly, Akamai'],
        icon: 'map-pin',
        visual: { type: 'cache', mode: 'cdn' },
      },
      {
        kicker: 'Invalidation',
        title: 'Stale data is dangerous',
        desc: 'When product price changes, you must invalidate or update the cache. Strategies: TTL expiry, explicit delete on write, or cache-aside pattern.',
        bullets: ['Cache-aside: app reads cache, on miss loads DB', 'Write-through: update cache + DB together', 'Choose TTL based on freshness needs'],
        icon: 'refresh-cw',
        visual: { type: 'cache', mode: 'invalidate' },
      },
    ],
  },
  {
    id: 'load-balancing',
    slug: 'load-balancing',
    num: '06',
    title: 'Load Balancing',
    summary: 'Distribute traffic across multiple servers so no single machine gets overwhelmed.',
    category: 'performance',
    icon: 'share-2',
    color: 'rose',
    tags: ['load balancer', 'scaling', 'nginx', 'round robin', 'health check', 'horizontal'],
    intro: 'A viral post or Black Friday sale can send thousands of requests per second. Load balancers spread that traffic across a pool of servers so your app stays fast and available.',
    steps: [
      {
        kicker: 'The problem',
        title: 'Traffic spikes overwhelm one server',
        desc: 'A viral post or Black Friday sale can send thousands of requests per second. A single server has limited CPU and memory — it will slow down or crash under load.',
        bullets: ['Vertical scaling has limits', 'Single point of failure', 'Need horizontal scaling'],
        icon: 'alert-triangle',
        visual: { type: 'fanout', mode: 'single' },
      },
      {
        kicker: 'The solution',
        title: 'Load balancer as traffic director',
        desc: 'A load balancer sits between clients and servers. Clients only know one address. The balancer forwards each request to a healthy backend server.',
        bullets: ['AWS ALB, NGINX, HAProxy', 'Hides multiple servers behind one URL', 'Enables zero-downtime deploys'],
        icon: 'git-branch',
        visual: { type: 'fanout', mode: 'balancer' },
      },
      {
        kicker: 'Server pool',
        title: 'Multiple identical servers',
        desc: 'You run 3, 10, or 100 copies of the same app. Each handles requests independently. If one dies, others keep serving.',
        bullets: ['Stateless servers scale easily', 'Auto-scaling adds/removes instances', 'Same code, shared database'],
        icon: 'server',
        visual: { type: 'fanout', mode: 'pool' },
      },
      {
        kicker: 'Round robin',
        title: 'Distribute requests evenly',
        desc: 'Round robin sends request 1 to Server 1, request 2 to Server 2, request 3 to Server 3, then back to Server 1. Simple and fair for equal-capacity servers.',
        bullets: ['Request N goes to server (N % 3)', 'Other algorithms: least connections, IP hash', 'Fair distribution across pool'],
        icon: 'shuffle',
        visual: { type: 'fanout', mode: 'roundrobin' },
      },
      {
        kicker: 'Health checks',
        title: 'Only send traffic to healthy servers',
        desc: 'The balancer pings each server every few seconds. If Server 2 stops responding, it\'s removed from the pool automatically. When it recovers, traffic returns.',
        bullets: ['HTTP /health endpoint', 'Prevents cascading failures', 'Enables rolling deployments'],
        icon: 'heart-pulse',
        visual: { type: 'fanout', mode: 'health' },
      },
    ],
  },
  {
    id: 'websockets',
    slug: 'websockets',
    num: '07',
    title: 'WebSockets',
    summary: 'Persistent two-way connections for chat, games, and live dashboards.',
    category: 'realtime',
    icon: 'radio',
    color: 'sky',
    tags: ['websocket', 'real-time', 'polling', 'push', 'chat', 'broadcast'],
    intro: 'Plain HTTP makes the client ask "any updates?" over and over. WebSockets open a persistent channel so the server can push events the moment they happen.',
    steps: [
      {
        kicker: 'The problem',
        title: 'Polling wastes requests',
        desc: 'With plain HTTP, a chat app must ask "any new messages?" every second. Thousands of users × constant polling = huge server load and delayed updates.',
        bullets: ['Client repeatedly sends GET /messages', 'Most responses are empty', 'Battery and bandwidth drain on mobile'],
        icon: 'refresh-ccw',
        visual: { type: 'realtime', mode: 'polling' },
      },
      {
        kicker: 'Upgrade',
        title: 'WebSocket opens a persistent channel',
        desc: 'The client sends an HTTP Upgrade request. If the server agrees, the TCP connection stays open and switches to the WebSocket protocol — a two-way pipe.',
        bullets: ['Starts as HTTP, upgrades to WS', 'Connection stays open for hours', 'ws:// or wss:// (secure) URLs'],
        icon: 'plug',
        visual: { type: 'realtime', mode: 'connect' },
      },
      {
        kicker: 'More clients',
        title: 'Many clients, one server',
        desc: 'Each browser or app opens its own WebSocket to the server. The server tracks every open connection in memory (or Redis pub/sub at scale).',
        bullets: ['Each tab = one connection', 'Server maps connection → user ID', 'Heartbeats detect dead connections'],
        icon: 'users',
        visual: { type: 'realtime', mode: 'multi' },
      },
      {
        kicker: 'Push',
        title: 'Server broadcasts instantly',
        desc: 'When someone sends a chat message, the server pushes the event to every connected client immediately — no waiting for the next poll.',
        bullets: ['Zero polling delay', 'Perfect for chat, games, live dashboards', 'One event → N clients'],
        icon: 'megaphone',
        visual: { type: 'realtime', mode: 'broadcast' },
      },
      {
        kicker: 'vs HTTP',
        title: 'When to use WebSockets',
        desc: 'Use WebSockets when the server needs to push frequently. Stick with HTTP/REST for CRUD pages, file uploads, and rare updates — simpler and cache-friendly.',
        bullets: ['WebSockets: chat, live sports, collaborative docs', 'HTTP: forms, REST APIs, page loads', 'Often both in the same app'],
        icon: 'scale',
        visual: { type: 'realtime', mode: 'compare' },
      },
    ],
  },
];

/** Flatten all steps for search indexing */
function getSearchIndex() {
  const items = [];
  CONCEPTS.forEach((concept) => {
    const cat = CONCEPT_CATEGORIES.find((c) => c.id === concept.category);
    const base = {
      conceptId: concept.id,
      conceptTitle: concept.title,
      conceptSlug: concept.slug,
      category: cat?.name || '',
      categoryId: concept.category,
      color: concept.color,
      icon: concept.icon,
      summary: concept.summary,
      tags: concept.tags || [],
    };

    if (concept.steps) {
      concept.steps.forEach((step, i) => {
        items.push({
          ...base,
          type: 'step',
          stepIndex: i,
          title: step.title,
          kicker: step.kicker,
          desc: step.desc,
          bullets: step.bullets || [],
          searchText: [step.title, step.kicker, step.desc, ...(step.bullets || []), ...(concept.tags || [])].join(' ').toLowerCase(),
        });
      });
    }

    if (concept.sections) {
      concept.sections.forEach((section) => {
        section.steps.forEach((step, i) => {
          items.push({
            ...base,
            type: 'section-step',
            sectionId: section.id,
            sectionTitle: section.title,
            stepIndex: i,
            title: step.title,
            kicker: step.kicker,
            desc: step.desc,
            bullets: step.bullets || [],
            searchText: [section.title, step.title, step.kicker, step.desc, ...(step.bullets || []), ...(concept.tags || [])].join(' ').toLowerCase(),
          });
        });
      });
    }
  });
  return items;
}

function getConceptById(id) {
  return CONCEPTS.find((c) => c.id === id);
}

function getConceptsByCategory(categoryId) {
  return CONCEPTS.filter((c) => c.category === categoryId);
}
