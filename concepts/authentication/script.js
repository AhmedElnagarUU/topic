/**
 * Authentication Concept — Step-by-step Tutorial
 * Linear flow: Building Blocks → Two Approaches → Session → JWT
 */

const INTRO = {
  id: 'intro',
  accent: '#818cf8',
  nodes: [
    { id: 'client', label: 'Client', sublabel: 'Browser or mobile app', icon: 'monitor-smartphone', x: 18, y: 52,
      tooltip: 'The user\'s device — a web browser, phone app, or desktop program. This is where the user types their password and clicks "Log in".' },
    { id: 'server', label: 'Server', sublabel: 'Your backend application', icon: 'server', x: 50, y: 52,
      tooltip: 'The backend that runs your app logic. It receives requests, checks credentials, and decides who gets access.' },
    { id: 'database', label: 'Database', sublabel: 'Stores user data', icon: 'database', x: 82, y: 52,
      tooltip: 'Where user accounts, passwords (hashed), and session records live. Redis, PostgreSQL, MongoDB — any persistent store.' },
  ],
  connections: [
    { from: 'client', to: 'server', label: 'HTTP requests', color: '#818cf8',
      tooltip: 'The client sends requests to the server — login forms, page loads, API calls.' },
    { from: 'server', to: 'database', label: 'read / write data', color: '#8b5cf6',
      tooltip: 'The server reads and writes user data — checking passwords, saving sessions, fetching profiles.' },
  ],
  steps: [
    {
      subtitle: 'The big picture',
      title: 'What is authentication?',
      desc: 'Authentication answers one simple question: "Who is making this request?" Every time you log into a website, open a mobile app, or call an API, something needs to verify your identity. Before we look at how that works, let\'s meet the three building blocks present in every auth system.',
      bullets: [
        'Authentication = proving who you are',
        'Authorization (different topic) = what you\'re allowed to do',
        'Every auth method uses the same three players — they just pass data differently',
      ],
      watch: 'No diagram yet — we\'ll add pieces one at a time.',
      highlight: { nodes: [], connections: [] },
      showDiagram: false,
    },
    {
      subtitle: 'Player 1',
      title: 'The Client — where the user sits',
      desc: 'The client is whatever the user interacts with directly: a web browser (Chrome, Safari), a mobile app on their phone, or a desktop program. When you fill in a login form and click "Sign in", the client packages your email and password and sends them to the server.',
      bullets: [
        'Browsers, mobile apps, and desktop apps are all clients',
        'The client never stores passwords long-term (ideally)',
        'After login, the client must remember "proof" that you\'re logged in',
      ],
      watch: 'Only the Client node appears. This is where every login starts.',
      highlight: { nodes: ['client'], connections: [] },
      showDiagram: true,
    },
    {
      subtitle: 'Player 2',
      title: 'The Server — the gatekeeper',
      desc: 'The server is your backend — it could be an Express.js app, a Django server, or a cloud function. It receives requests from clients, validates credentials, and decides whether to grant access. The server is the brain of authentication: it checks passwords and issues proof of identity.',
      bullets: [
        'Runs on a remote machine (AWS, Heroku, your own server)',
        'Receives login requests and validates credentials',
        'Issues whatever "proof" the auth method uses (cookie, token, etc.)',
      ],
      watch: 'Now you see Client and Server. The arrow shows requests traveling between them.',
      highlight: { nodes: ['client', 'server'], connections: [0] },
      showDiagram: true,
    },
    {
      subtitle: 'Player 3',
      title: 'The Database — where identity lives',
      desc: 'The database stores everything persistent: user accounts, hashed passwords, session records, or API keys. When the server needs to check "is this password correct?" or "who owns session ID abc123?", it queries the database. Not every auth method uses the database on every request — but it\'s always involved at login time.',
      bullets: [
        'Stores user accounts and hashed passwords',
        'May store session records (session-based auth)',
        'Could be PostgreSQL, Redis, MongoDB, or in-memory storage',
      ],
      watch: 'All three players are connected. This is the foundation for every auth method.',
      highlight: { nodes: ['client', 'server', 'database'], connections: [0, 1] },
      showDiagram: true,
    },
  ],
};

const COMPARE = {
  id: 'compare',
  accent: '#818cf8',
  steps: [
    {
      subtitle: 'The key question',
      title: 'Where should identity be stored?',
      desc: 'Now that you know the three players, here\'s the fundamental question every auth system must answer: after the user logs in, where does the proof of identity live? There are two main answers — and they shape everything else about how your app works.',
      bullets: [
        'Option A: The server remembers you (session-based)',
        'Option B: The client carries proof (token-based / JWT)',
        'Both start the same way — user sends email + password once',
      ],
      watch: 'Read the comparison cards below to see both approaches side by side.',
      highlight: { compareFocus: null },
      showCompare: true,
    },
    {
      subtitle: 'Approach A',
      title: 'Session-based — the server remembers you',
      desc: 'Think of a coat-check at a restaurant. You hand over your coat (password), the attendant stores it in the back room (database), and gives you a small ticket number (session ID in a cookie). Every time you return, you show the ticket — the attendant looks up your coat. Your browser holds only the ticket number, never your actual identity.',
      bullets: [
        'Browser stores a small cookie with a random session ID',
        'Server stores your identity (user ID, role) in a database',
        'Every request: server looks up the session ID → finds your identity',
        'Best for: traditional websites, server-rendered pages',
      ],
      watch: 'The Session card is highlighted. Notice: identity stays on the server.',
      highlight: { compareFocus: 'session' },
      showCompare: true,
    },
    {
      subtitle: 'Approach B',
      title: 'JWT token — the client carries proof',
      desc: 'Think of a signed letter from the government. After verifying your identity once, the server writes your name and role on a letter, seals it with a secret stamp (signature), and hands it to you. You carry this letter everywhere. Any service can read it and verify the stamp — no need to call back to the issuer.',
      bullets: [
        'Client stores the full JWT token (in memory, localStorage, or cookie)',
        'Server stores nothing about the logged-in user',
        'Every request: server verifies the token\'s signature — no database lookup',
        'Best for: single-page apps (React, Vue), mobile apps, microservices',
      ],
      watch: 'The JWT card is highlighted. Notice: identity travels with the client.',
      highlight: { compareFocus: 'jwt' },
      showCompare: true,
    },
    {
      subtitle: 'Side by side',
      title: 'Quick comparison',
      desc: 'Both methods solve the same problem — keeping users logged in — but with different trade-offs. Sessions are simpler to revoke (just delete the server record). JWTs scale better across many servers (no shared database needed). In the next sections, we\'ll walk through each one step by step so you can see exactly what happens.',
      bullets: [
        'Sessions: easier to revoke, but need shared storage at scale',
        'JWT: scales horizontally, but harder to revoke instantly',
        'Next up: a full walkthrough of session-based auth',
      ],
      watch: 'Both cards are active. You\'re ready to see each approach in action.',
      highlight: { compareFocus: 'both' },
      showCompare: true,
    },
  ],
};

const TUTORIAL_PHASES = [
  {
    id: 'intro',
    title: 'Meet the Building Blocks',
    eyebrow: 'Part 1 of 4',
    description: 'Before any auth method makes sense, you need to know the three players involved in every login flow.',
    content: INTRO,
    type: 'intro',
  },
  {
    id: 'compare',
    title: 'Two Ways to Prove Identity',
    eyebrow: 'Part 2 of 4',
    description: 'Every auth system answers one question: after login, where does the proof of identity live?',
    content: COMPARE,
    type: 'compare',
  },
  {
    id: 'session',
    title: 'Session-Based Auth — Step by Step',
    eyebrow: 'Part 3 of 4',
    description: 'Watch exactly what happens when a user logs in with sessions. The server remembers you via a cookie.',
    approach: 'session',
    type: 'walkthrough',
  },
  {
    id: 'jwt',
    title: 'JWT Token Auth — Step by Step',
    eyebrow: 'Part 4 of 4',
    description: 'Now see the same login from the JWT perspective. The client carries signed proof of identity.',
    approach: 'jwt',
    type: 'walkthrough',
  },
];

const APPROACHES = {
  session: {
    id: 'session',
    name: 'Session-Based Auth',
    icon: 'cookie',
    color: '#34d399',
    overview: 'Think of it like a coat-check ticket. You hand over your password once; the server stores your identity in its memory and gives you back only a random ticket number (session ID) in a cookie. Every request after that just shows the ticket — the server looks up who you are.',
    whenToUse: 'Traditional websites where the browser and server stay tightly coupled — Django, Rails, PHP, Express with server-rendered pages.',
    nodes: [
      { id: 'client', label: 'Browser', sublabel: 'Sends credentials & cookie', icon: 'monitor-smartphone', x: 12, y: 52,
        tooltip: 'The user\'s web browser. Sends login credentials once, then automatically attaches the session cookie on every future request.' },
      { id: 'server', label: 'Web Server', sublabel: 'Validates & issues cookie', icon: 'server', x: 50, y: 52,
        tooltip: 'Your backend (Express, Django, Rails). Checks passwords, creates session IDs, and reads cookies to know who is logged in.' },
      { id: 'store', label: 'Session Store', sublabel: 'Redis / DB / Memory', icon: 'database', x: 88, y: 52,
        tooltip: 'Redis, a database, or server memory. Maps session IDs → user data. The real identity lives here — not inside the cookie.' },
    ],
    connections: [
      { from: 'client', to: 'server', label: '{ email, password }', color: '#34d399',
        tooltip: 'HTTPS POST sent only at login. Password travels once — never stored in the cookie.' },
      { from: 'server', to: 'store', label: 'sid → { userId, role }', color: '#8b5cf6',
        tooltip: 'Server saves a random session ID linked to user data. Like writing a name on a coat-check ticket.' },
      { from: 'server', to: 'client', label: 'Set-Cookie: sid=abc123', color: '#fbbf24', dashed: true, curve: 22,
        tooltip: 'Response header that tells the browser to store a small cookie — only the ID, never the password or role.' },
      { from: 'client', to: 'server', label: 'Cookie: sid=abc123', color: '#22d3ee', curve: -22,
        tooltip: 'Browser silently sends the cookie on every request. Server looks up sid in the session store.' },
    ],
    steps: [
      {
        subtitle: 'The login request',
        title: 'User sends username & password',
        desc: 'The user fills a login form. The browser sends a POST request with their credentials over HTTPS. This is the only time the password travels across the network during the session.',
        bullets: [
          'Password is sent once — never stored in the cookie',
          'HTTPS encrypts the request so credentials cannot be intercepted',
          'Server will hash-compare the password against its database',
        ],
        code: 'POST /login\nContent-Type: application/json\n\n{ "email": "you@mail.com", "password": "••••••" }',
        watch: 'The Browser node lights up. No lines yet — the request is about to leave.',
      },
      {
        subtitle: 'Server-side validation',
        title: 'Server creates a session record',
        desc: 'If credentials are valid, the server generates a cryptographically random session ID (e.g. sid=abc123) and saves the user\'s data — ID, role, permissions — inside a session store. The password is discarded; only the session ID matters from here.',
        bullets: [
          'Session ID is a random string — guessing it is practically impossible',
          'User data lives on the server, not in the browser',
          'Redis is common for fast lookups across multiple servers',
        ],
        code: 'Session Store:\n  "abc123" → { userId: 42, role: "admin" }',
        watch: 'Watch the green line (credentials) hit the Web Server, then the purple line saving data to Session Store.',
      },
      {
        subtitle: 'The cookie handshake',
        title: 'Browser receives a session cookie',
        desc: 'The server responds with a Set-Cookie header. The browser stores this cookie and will automatically attach it to every future request to the same domain. Crucially, the cookie contains only the session ID — not the user\'s name, role, or password.',
        bullets: [
          'HttpOnly flag prevents JavaScript from reading the cookie (XSS protection)',
          'Secure flag ensures cookie only sent over HTTPS',
          'SameSite flag reduces CSRF attack surface',
        ],
        code: 'HTTP/1.1 200 OK\nSet-Cookie: sid=abc123; HttpOnly; Secure; SameSite=Lax',
        watch: 'The dashed amber line flows back from Web Server → Browser. That is the cookie being set.',
      },
      {
        subtitle: 'Every request after login',
        title: 'Cookie proves identity automatically',
        desc: 'When the user visits /dashboard or clicks anything, the browser silently attaches the cookie. The server reads sid=abc123, looks it up in the session store, and knows exactly who is asking — no password needed again. Logout simply deletes the session server-side.',
        bullets: [
          'Browser sends cookie automatically — developer does nothing extra',
          'Server can invalidate a session instantly (force logout)',
          'Scaling requires all servers to share the same session store',
        ],
        code: 'GET /dashboard\nCookie: sid=abc123\n\n→ Server looks up "abc123" → userId: 42 ✓',
        watch: 'All three nodes glow. The cyan line shows the cookie traveling on every request.',
      },
    ],
    pros: ['Instant session revoke', 'Sensitive data stays server-side', 'Browser handles cookie automatically'],
    cons: ['Needs shared session store at scale', 'Harder for native mobile apps', 'CSRF requires extra protection'],
  },

  jwt: {
    id: 'jwt',
    name: 'JWT Token Auth',
    icon: 'key-round',
    color: '#6366f1',
    overview: 'Instead of the server remembering you, it gives you a signed letter (JWT) that proves who you are. The letter contains your identity and an expiry date, sealed with a secret only the server knows. Any service can read and verify it without calling a database.',
    whenToUse: 'Single-page apps (React, Vue), mobile apps, and microservice architectures where multiple APIs need to verify the same user independently.',
    nodes: [
      { id: 'client', label: 'Client App', sublabel: 'SPA / Mobile / Desktop', icon: 'smartphone', x: 14, y: 72,
        tooltip: 'React, Vue, or mobile app. Stores the JWT locally and attaches it to every API call via the Authorization header.' },
      { id: 'server', label: 'Auth Server', sublabel: 'Signs & issues JWT', icon: 'shield', x: 50, y: 24,
        tooltip: 'Dedicated login service. Validates credentials once, then signs a JWT containing user claims and expiry time.' },
      { id: 'api', label: 'API Server', sublabel: 'Verifies signature only', icon: 'server', x: 86, y: 72,
        tooltip: 'Any microservice or API. Verifies the JWT signature with a shared secret — no database lookup needed.' },
    ],
    connections: [
      { from: 'client', to: 'server', label: '{ email, password }', color: '#6366f1', curve: 12,
        tooltip: 'Login request with credentials. Only happens once — the JWT replaces passwords for all future calls.' },
      { from: 'server', to: 'client', label: 'JWT token', color: '#fbbf24', curve: -12,
        tooltip: 'Signed token returned to client: header.payload.signature — a self-contained proof of identity.' },
      { from: 'client', to: 'api', label: 'Bearer eyJ...', color: '#22d3ee', curve: -20,
        tooltip: 'Every API request carries the JWT in the Authorization header. API verifies signature, not a session DB.' },
    ],
    steps: [
      {
        subtitle: 'Initial authentication',
        title: 'Client sends credentials to Auth Server',
        desc: 'Just like sessions, the user logs in once with email and password. But instead of creating a server-side record, the Auth Server will package the user\'s identity into a self-contained token.',
        bullets: [
          'Auth Server can be a dedicated service (Auth0, Keycloak) or your own /login endpoint',
          'Credentials are validated against the user database as usual',
          'This step is identical to session login — the difference is what comes back',
        ],
        code: 'POST /auth/login\n{ "email": "you@mail.com", "password": "••••••" }',
        watch: 'Client App node is active — the login request is being prepared.',
      },
      {
        subtitle: 'Token creation',
        title: 'Server builds & signs a JWT',
        desc: 'The server creates a JSON object with claims — user ID, email, role, expiration time — then signs it with a secret key (HMAC) or private key (RSA). The result is three Base64 segments joined by dots: header.payload.signature.',
        bullets: [
          'Header: algorithm used (e.g. HS256)',
          'Payload: user data + exp (expiry timestamp)',
          'Signature: proves the token was not tampered with',
        ],
        code: 'eyJhbGciOiJIUzI1NiJ9          ← header\n.eyJ1c2VySWQiOjQyfQ           ← payload { userId: 42 }\n.SflKxwRJSMeKKF2QT4fwpM...    ← signature',
        watch: 'Auth Server glows. The amber line carries the signed token back to the client.',
      },
      {
        subtitle: 'Client-side storage',
        title: 'App saves the token locally',
        desc: 'The client stores the JWT — in memory (most secure for SPAs), localStorage, or an HttpOnly cookie. No server-side session exists. The token IS the proof of identity, valid until it expires.',
        bullets: [
          'Memory storage: lost on page refresh (often paired with refresh tokens)',
          'localStorage: persists but vulnerable to XSS attacks',
          'Short expiry (15 min) + refresh token is a common secure pattern',
        ],
        code: 'localStorage.setItem("token", "eyJhbGci...")\n// or in memory: authState.token = "eyJ..."',
        watch: 'Both Client App and Auth Server are highlighted — the token just arrived.',
      },
      {
        subtitle: 'Stateless verification',
        title: 'Token sent with every API call',
        desc: 'For each request to any API server, the client adds Authorization: Bearer <token>. The API verifies the signature using the shared secret — no database call needed. If the signature is valid and exp has not passed, the request is authenticated.',
        bullets: [
          'Any microservice with the secret can verify independently',
          'No central session store — scales horizontally with ease',
          'Revoking before expiry requires a blocklist or short token lifetime',
        ],
        code: 'GET /api/orders\nAuthorization: Bearer eyJhbGci...\n\n→ API verifies signature → userId: 42 ✓',
        watch: 'The cyan line flows from Client App → API Server. No Auth Server involved in daily requests.',
      },
    ],
    pros: ['No database lookup per request', 'Works across many microservices', 'Ideal for mobile & SPA clients'],
    cons: ['Cannot revoke instantly without extra infra', 'Token size grows with more claims', 'Storing in localStorage risks XSS'],
  },

  oauth: {
    id: 'oauth',
    name: 'OAuth 2.0',
    icon: 'share-2',
    color: '#8b5cf6',
    overview: 'OAuth lets users log in through a trusted third party (Google, GitHub, Microsoft) without giving your app their password. Your app never sees the password — it only receives a permission token to access specific data on the user\'s behalf.',
    whenToUse: 'When you want "Sign in with Google/GitHub", or when your app needs to read a user\'s Google Calendar, GitHub repos, etc. without storing their credentials.',
    nodes: [
      { id: 'user', label: 'User', sublabel: 'Clicks social login', icon: 'user', x: 10, y: 76,
        tooltip: 'The real person. Logs in on Google\'s page — your app never sees or stores their password.' },
      { id: 'client', label: 'Your App', sublabel: 'Client ID registered', icon: 'layout-dashboard', x: 32, y: 76,
        tooltip: 'Your website or app. Registered with Google to get a client_id. Redirects users to Google and receives tokens back.' },
      { id: 'provider', label: 'Identity Provider', sublabel: 'Google / GitHub / Auth0', icon: 'fingerprint', x: 62, y: 18,
        tooltip: 'Google, GitHub, or Auth0. Handles login, shows consent screen, and issues access tokens on approval.' },
      { id: 'api', label: 'Resource Server', sublabel: 'Google API / Your API', icon: 'lock', x: 90, y: 76,
        tooltip: 'Google\'s API or your own backend. Accepts access tokens and returns protected data for authorized requests.' },
    ],
    connections: [
      { from: 'user', to: 'client', label: '"Sign in with Google"', color: '#8b5cf6',
        tooltip: 'User clicks the social login button. This starts the OAuth redirect flow — no password form on your site.' },
      { from: 'client', to: 'provider', label: 'Redirect + scopes', color: '#6366f1', curve: -22,
        tooltip: 'Browser redirects to Google with your client_id, requested permissions (scopes), and a redirect URI.' },
      { from: 'provider', to: 'user', label: 'Login & consent', color: '#fbbf24', dashed: true, curve: 18,
        tooltip: 'Google shows its own login page and consent screen. User approves what data your app can access.' },
      { from: 'provider', to: 'client', label: 'auth_code → token', color: '#34d399', curve: -16,
        tooltip: 'Google redirects back with a short-lived code. Your backend exchanges it for an access token (server-to-server).' },
      { from: 'client', to: 'api', label: 'Bearer access_token', color: '#22d3ee', curve: -14,
        tooltip: 'Your app calls APIs using the access token — proving Google authorized this user on your behalf.' },
    ],
    steps: [
      {
        subtitle: 'User starts the flow',
        title: 'User clicks a social login button',
        desc: 'Instead of a registration form, the user clicks "Sign in with Google." Your app does not collect a password — it kicks off a redirect dance between your app, the user\'s browser, and Google\'s servers.',
        bullets: ['Your app must be registered with Google to get a client_id', 'You define scopes: what data you want (email, profile, calendar)', 'User explicitly chooses to trust your app'],
        code: '<button>Sign in with Google</button>\n→ triggers OAuth authorization flow',
        watch: 'User and Your App nodes light up — the click originates here.',
      },
      {
        subtitle: 'Redirect to provider',
        title: 'Browser redirects to Google\'s login page',
        desc: 'Your app redirects the browser to accounts.google.com with your client_id, requested scopes, and a redirect_uri (where Google sends the user back). The user leaves your site temporarily and lands on Google\'s trusted login page.',
        bullets: ['redirect_uri must exactly match what you registered — security check', 'state parameter prevents CSRF during the redirect', 'User sees Google\'s UI, not yours — builds trust'],
        code: 'GET https://accounts.google.com/o/oauth2/v2/auth\n  ?client_id=YOUR_APP_ID\n  &redirect_uri=https://yourapp.com/callback\n  &scope=email profile\n  &response_type=code\n  &state=random_csrf_token',
        watch: 'The indigo line goes from Your App → Identity Provider. The user\'s browser follows it.',
      },
      {
        subtitle: 'Consent & approval',
        title: 'User logs in and grants permission',
        desc: 'On Google\'s page, the user enters their Google password (your app never sees this). Google shows a consent screen: "Your App wants to access your email and profile." The user approves or denies.',
        bullets: ['Password stays entirely within Google\'s infrastructure', 'User can revoke access later from their Google account settings', 'Scopes limit what your app can do — principle of least privilege'],
        code: 'Google Consent Screen:\n  "MyApp wants to:\n    ✓ View your email address\n    ✓ View your basic profile"\n  [Allow]  [Deny]',
        watch: 'The dashed amber line between Identity Provider and User — Google talks directly to the user.',
      },
      {
        subtitle: 'Authorization code exchange',
        title: 'App trades auth code for access token',
        desc: 'Google redirects back to your redirect_uri with a short-lived authorization code. Your backend (never the browser) exchanges this code + client_secret for an access_token and optionally a refresh_token. The code is single-use and expires in minutes.',
        bullets: ['Code exchange happens server-to-server — client_secret stays secret', 'Access token is what you actually use for API calls', 'Refresh token lets you get new access tokens without re-login'],
        code: 'POST https://oauth2.googleapis.com/token\n{ code: "4/0A...", client_id, client_secret }\n\n→ { access_token: "ya29...", refresh_token: "1//..." }',
        watch: 'Green line from Identity Provider → Your App. The token arrives on your backend.',
      },
      {
        subtitle: 'Authenticated API access',
        title: 'App calls APIs on user\'s behalf',
        desc: 'With the access token, your app can call Google\'s APIs (get profile, read calendar) or your own API. The token proves Google verified this user and they consented to the requested scopes.',
        bullets: ['Access token has limited lifetime (often 1 hour)', 'Use refresh_token to get a new one without bothering the user', 'Your app knows who the user is from the token\'s claims or a profile API call'],
        code: 'GET https://www.googleapis.com/oauth2/v2/userinfo\nAuthorization: Bearer ya29.a0...\n\n→ { email: "you@gmail.com", name: "You" }',
        watch: 'Cyan line from Your App → Resource Server. Daily API calls use this path.',
      },
    ],
    pros: ['Zero password liability for your app', 'Users trust familiar login providers', 'Fine-grained scope permissions'],
    cons: ['Multi-step redirect flow is complex', 'Depends on third-party uptime', 'Debugging token issues is harder'],
  },

  apikey: {
    id: 'apikey',
    name: 'API Key Auth',
    icon: 'hash',
    color: '#fbbf24',
    overview: 'An API key is a long static secret string tied to a project or account — like a password that never expires and identifies an application rather than a human user.',
    whenToUse: 'Server-to-server communication, developer tools, public APIs with rate limits (Stripe, OpenAI, weather APIs), cron jobs, and internal scripts — not for end-user login.',
    nodes: [
      { id: 'dev', label: 'Developer / Script', sublabel: 'Holds the secret key', icon: 'code', x: 14, y: 22,
        tooltip: 'A developer, cron job, or backend script. Holds the API key (usually in an environment variable) and sends it with every request.' },
      { id: 'server', label: 'API Gateway', sublabel: 'Validates & rate-limits', icon: 'shield-check', x: 50, y: 62,
        tooltip: 'Front door of the API. Checks if the key is valid, not revoked, and within rate limits before forwarding the request.' },
      { id: 'service', label: 'Backend Service', sublabel: 'Processes the request', icon: 'cog', x: 86, y: 62,
        tooltip: 'The actual microservice that processes data. Only receives requests that already passed gateway validation.' },
    ],
    connections: [
      { from: 'dev', to: 'server', label: 'X-API-Key: sk_live_...', color: '#fbbf24', curve: 16,
        tooltip: 'Every request includes the API key in a header. Like showing a permanent badge to enter a building.' },
      { from: 'server', to: 'service', label: 'Verified request', color: '#34d399',
        tooltip: 'Gateway forwards only validated requests internally. Invalid keys never reach the backend.' },
      { from: 'server', to: 'dev', label: '200 OK + JSON', color: '#22d3ee', dashed: true, curve: -16,
        tooltip: 'Response data flows back to the caller. Failed keys get 401/403 before any processing happens.' },
    ],
    steps: [
      {
        subtitle: 'Key provisioning',
        title: 'Developer generates an API key',
        desc: 'From a provider dashboard (Stripe, OpenAI, your own admin panel), the developer creates an API key. It is generated once, shown once, and mapped to permissions — read-only, full access, specific endpoints — and rate limits.',
        bullets: ['Keys often have prefixes: sk_live_ (secret), pk_test_ (public/test)', 'Different keys for dev vs production environments', 'Rotate keys periodically; delete compromised keys immediately'],
        code: 'Dashboard → API Keys → Create\n\n  sk_live_51Hx...  [Copy]  [Revoke]\n  Permissions: Full access\n  Rate limit: 100 req/min',
        watch: 'Developer node is active — the key is being created in the dashboard.',
      },
      {
        subtitle: 'Attaching the key',
        title: 'Every request includes the key',
        desc: 'The developer hardcodes or environment-variables the key into their script, backend, or CI pipeline. Each HTTP request includes it — typically in a header (preferred) or as a query parameter (less secure, appears in logs).',
        bullets: ['Never commit keys to Git — use .env files and secrets managers', 'Header is safer: X-API-Key or Authorization: Bearer sk_...', 'Query param keys appear in server logs and browser history'],
        code: 'curl https://api.example.com/v1/users \\\n  -H "X-API-Key: sk_live_51Hx8k2..." \\\n  -H "Content-Type: application/json"',
        watch: 'Amber line flows Developer → API Gateway. The key rides along in the header.',
      },
      {
        subtitle: 'Gateway validation',
        title: 'Gateway checks key & enforces limits',
        desc: 'The API Gateway looks up the key in its registry. Is it valid? Not revoked? Within rate limits? Does it have permission for this endpoint? Only then does it forward the request to the actual backend service.',
        bullets: ['Invalid key → 401 Unauthorized immediately', 'Valid key but wrong permissions → 403 Forbidden', 'Rate limit exceeded → 429 Too Many Requests'],
        code: 'Gateway checks:\n  ✓ Key exists: sk_live_51Hx...\n  ✓ Not revoked\n  ✓ 47/100 requests this minute\n  ✓ Permission: read:users → allowed',
        watch: 'API Gateway and Backend Service glow. Green line shows the verified request forwarded internally.',
      },
      {
        subtitle: 'Response delivered',
        title: 'Data returns to the caller',
        desc: 'The backend processes the request and returns data through the gateway. The developer\'s script receives JSON (or an error). The key was only used to get in the door — it does not encode user identity like a JWT.',
        bullets: ['API keys identify the application, not a specific human user', 'Combine with OAuth or JWT if you need per-user access', 'Monitor key usage in the dashboard for anomalies'],
        code: 'HTTP/1.1 200 OK\n{ "users": [ { "id": 1, "name": "Alice" } ] }\n\nX-RateLimit-Remaining: 53',
        watch: 'All nodes active. Dashed cyan line shows the response traveling back to the Developer.',
      },
    ],
    pros: ['Extremely simple to implement', 'Perfect for scripts & automation', 'Built-in rate limiting per key'],
    cons: ['If leaked, anyone can use your quota', 'No built-in user identity', 'Rotation requires updating all consumers'],
  },
};

// ─── State ───────────────────────────────────────────────────────────────────
let currentPhaseIndex = 0;
let currentStep = 0;
let isPlaying = false;
let playInterval = null;
let isComplete = false;
let advancedApproach = null;
let advancedStep = 0;
let renderedPhaseKey = null;
let currentDiagramData = null;
let packetAnimRunning = false;
let packetAnimFrames = [];

// DOM refs
let canvas, svgLayer, nodesContainer, labelsContainer, packetsContainer, diagramTooltip, stepBar;

// ─── Init ────────────────────────────────────────────────────────────────────
function init() {
  canvas = document.getElementById('diagram-canvas');
  svgLayer = document.getElementById('connection-layer');
  nodesContainer = document.getElementById('nodes-container');
  labelsContainer = document.getElementById('connection-labels');
  packetsContainer = document.getElementById('packets-container');
  diagramTooltip = document.getElementById('diagram-tooltip');
  stepBar = document.getElementById('step-bar');

  document.getElementById('prev-step').addEventListener('click', () => goToStep(currentStep - 1));
  document.getElementById('next-step').addEventListener('click', () => goToStep(currentStep + 1));
  document.getElementById('play-btn').addEventListener('click', togglePlay);
  document.getElementById('phase-continue').addEventListener('click', onPhaseContinue);
  document.getElementById('phase-back').addEventListener('click', onPhaseBack);
  document.getElementById('restart-btn').addEventListener('click', restartTutorial);

  document.querySelectorAll('.phase-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.dataset.phase, 10);
      if (idx <= getMaxUnlockedPhase()) goToPhase(idx);
    });
  });

  document.querySelectorAll('.advanced-card').forEach(card => {
    card.addEventListener('click', () => openAdvanced(card.dataset.approach));
  });
  document.getElementById('back-to-complete').addEventListener('click', closeAdvanced);
  document.getElementById('adv-prev').addEventListener('click', () => goToAdvancedStep(advancedStep - 1));
  document.getElementById('adv-next').addEventListener('click', () => goToAdvancedStep(advancedStep + 1));

  renderPhase();
  lucide.createIcons();
}

// ─── Phase navigation ────────────────────────────────────────────────────────
function getMaxUnlockedPhase() {
  if (isComplete) return TUTORIAL_PHASES.length - 1;
  return currentPhaseIndex;
}

function goToPhase(index) {
  if (index < 0 || index >= TUTORIAL_PHASES.length) return;
  stopPlay();
  renderedPhaseKey = null;
  currentDiagramData = null;
  stopPacketAnimations();
  currentPhaseIndex = index;
  currentStep = 0;
  isComplete = false;
  hideCompleteView();
  hideAdvancedPanel();
  renderPhase();
}

function onPhaseContinue() {
  const phase = TUTORIAL_PHASES[currentPhaseIndex];
  const steps = getPhaseSteps(phase);
  if (currentStep < steps.length - 1) {
    goToStep(currentStep + 1);
    return;
  }
  if (currentPhaseIndex < TUTORIAL_PHASES.length - 1) {
    goToPhase(currentPhaseIndex + 1);
    return;
  }
  showCompleteView();
}

function onPhaseBack() {
  if (currentStep > 0) {
    goToStep(currentStep - 1);
    return;
  }
  if (currentPhaseIndex > 0) {
    const prevPhase = TUTORIAL_PHASES[currentPhaseIndex - 1];
    const prevSteps = getPhaseSteps(prevPhase);
    currentPhaseIndex -= 1;
    currentStep = prevSteps.length - 1;
    stopPlay();
    renderPhase();
  }
}

function restartTutorial() {
  isComplete = false;
  hideCompleteView();
  hideAdvancedPanel();
  goToPhase(0);
}

function showCompleteView() {
  isComplete = true;
  document.getElementById('complete-view').classList.remove('hidden');
  document.getElementById('walkthrough-panel').classList.add('hidden');
  document.getElementById('phase-nav').classList.add('hidden');
  document.getElementById('phase-header').classList.add('hidden');
  document.getElementById('compare-view').classList.add('hidden');
  lucide.createIcons();
}

function hideCompleteView() {
  document.getElementById('complete-view').classList.add('hidden');
  document.getElementById('walkthrough-panel').classList.remove('hidden');
  document.getElementById('phase-nav').classList.remove('hidden');
  document.getElementById('phase-header').classList.remove('hidden');
}

// ─── Render phase ────────────────────────────────────────────────────────────
function getPhaseSteps(phase) {
  if (phase.type === 'intro') return phase.content.steps;
  if (phase.type === 'compare') return phase.content.steps;
  return APPROACHES[phase.approach].steps;
}

function getPhaseDiagramData(phase) {
  if (phase.type === 'intro') return phase.content;
  if (phase.type === 'walkthrough') return APPROACHES[phase.approach];
  return null;
}

function renderPhase() {
  const phase = TUTORIAL_PHASES[currentPhaseIndex];
  const steps = getPhaseSteps(phase);
  document.getElementById('phase-eyebrow').textContent = phase.eyebrow;
  document.getElementById('phase-title').textContent = phase.title;
  document.getElementById('phase-desc').textContent = phase.description;

  // Phase pills
  document.querySelectorAll('.phase-pill').forEach((pill, i) => {
    pill.classList.toggle('active', i === currentPhaseIndex);
    pill.classList.toggle('done', i < currentPhaseIndex || isComplete);
    pill.classList.toggle('locked', i > getMaxUnlockedPhase());
  });
  document.querySelectorAll('.phase-connector').forEach((conn, i) => {
    conn.classList.toggle('done', i < currentPhaseIndex || isComplete);
  });

  // Compare view — hide animation area during comparison phase
  const compareView = document.getElementById('compare-view');
  const isCompare = phase.type === 'compare';
  const step = steps[currentStep];
  const showVisual = !isCompare && (phase.type === 'walkthrough' || (phase.type === 'intro' && step.showDiagram === true));
  compareView.classList.toggle('hidden', !isCompare);
  document.getElementById('tutorial-visual').classList.toggle('hidden', !showVisual);

  // Approach summary
  const summaryEl = document.getElementById('approach-summary');
  if (phase.type === 'walkthrough') {
    const approach = APPROACHES[phase.approach];
    summaryEl.classList.remove('hidden');
    document.getElementById('approach-name').textContent = approach.name;
    document.getElementById('approach-overview').textContent = approach.overview;
  } else {
    summaryEl.classList.add('hidden');
  }

  // Play button — only for walkthrough phases
  const playBtn = document.getElementById('play-btn');
  playBtn.classList.toggle('hidden', phase.type !== 'walkthrough');

  // Phase back button
  document.getElementById('phase-back').classList.toggle('hidden', currentPhaseIndex === 0 && currentStep === 0);

  // Continue button label
  const continueBtn = document.getElementById('phase-continue');
  const isLastStep = currentStep >= steps.length - 1;
  const isLastPhase = currentPhaseIndex >= TUTORIAL_PHASES.length - 1;
  if (isLastStep && isLastPhase) {
    continueBtn.innerHTML = 'Finish <i data-lucide="check" class="w-4 h-4"></i>';
  } else if (isLastStep) {
    continueBtn.innerHTML = `Next: ${TUTORIAL_PHASES[currentPhaseIndex + 1].title.split('—')[0].trim()} <i data-lucide="arrow-right" class="w-4 h-4"></i>`;
  } else {
    continueBtn.innerHTML = 'Continue <i data-lucide="arrow-right" class="w-4 h-4"></i>';
  }

  renderDiagram(phase);
  if (isCompare) updateCompareHighlight(step);
  updateStepUI(phase, steps);
  lucide.createIcons();
}

// ─── Diagram rendering ───────────────────────────────────────────────────────
function renderDiagram(phase) {
  const phaseKey = `${currentPhaseIndex}-${phase.id}`;
  const steps = getPhaseSteps(phase);
  const step = steps[currentStep];

  if (renderedPhaseKey === phaseKey && currentDiagramData && phase.type !== 'compare') {
    updateDiagramHighlights(phase, step);
    return;
  }

  renderedPhaseKey = phaseKey;
  stopPacketAnimations();
  currentDiagramData = getPhaseDiagramData(phase);

  const emptyEl = document.getElementById('diagram-empty');
  nodesContainer.innerHTML = '';
  svgLayer.innerHTML = '';
  if (labelsContainer) labelsContainer.innerHTML = '';
  if (packetsContainer) packetsContainer.innerHTML = '';
  hideDiagramTooltip();

  const showDiagram = phase.type === 'walkthrough' || (phase.type === 'intro' && step.showDiagram === true);
  emptyEl.classList.toggle('hidden', showDiagram || phase.type === 'compare');
  if (phase.type === 'compare') return;

  const diagramData = currentDiagramData;
  if (!diagramData || !showDiagram) return;

  const accent = diagramData.accent || diagramData.color || '#818cf8';
  ensureArrowMarker(accent);

  diagramData.nodes.forEach(node => {
    const el = document.createElement('div');
    el.className = 'node-card';
    el.id = `node-${node.id}`;
    el.style.left = `${node.x}%`;
    el.style.top = `${node.y}%`;
    if (node.y < 35) el.classList.add('popup-below');

    const popupHtml = node.tooltip ? `
      <div class="node-popup">
        <strong>${escapeHtml(node.label)}</strong>
        <p>${escapeHtml(node.tooltip)}</p>
      </div>
    ` : '';

    el.innerHTML = `
      ${popupHtml}
      <div class="node-icon-wrap relative" style="border-color: ${accent}33">
        <i data-lucide="${node.icon}" class="lucide-icon-xl" style="color: ${accent}"></i>
      </div>
      <span class="node-label">${node.label}</span>
      <span class="node-sublabel">${node.sublabel}</span>
    `;
    nodesContainer.appendChild(el);
  });

  const svgNS = 'http://www.w3.org/2000/svg';
  diagramData.connections.forEach((conn, i) => {
    const fromNode = diagramData.nodes.find(n => n.id === conn.from);
    const toNode = diagramData.nodes.find(n => n.id === conn.to);
    if (!fromNode || !toNode) return;

    const path = computePath(fromNode, toNode, conn, i);

    const bgLine = document.createElementNS(svgNS, 'path');
    bgLine.setAttribute('d', path);
    bgLine.setAttribute('class', 'connection-line-bg');
    bgLine.setAttribute('id', `conn-bg-${i}`);
    svgLayer.appendChild(bgLine);

    const hitLine = document.createElementNS(svgNS, 'path');
    hitLine.setAttribute('d', path);
    hitLine.setAttribute('class', 'connection-hit');
    if (conn.tooltip) {
      hitLine.addEventListener('mouseenter', (e) => showDiagramTooltip(e, conn.label, conn.tooltip));
      hitLine.addEventListener('mousemove', moveDiagramTooltip);
      hitLine.addEventListener('mouseleave', hideDiagramTooltip);
    }
    svgLayer.appendChild(hitLine);

    const line = document.createElementNS(svgNS, 'path');
    line.setAttribute('d', path);
    line.setAttribute('class', 'connection-line');
    line.setAttribute('id', `conn-${i}`);
    line.setAttribute('stroke', conn.color);
    if (conn.dashed) line.setAttribute('stroke-dasharray', '6 4');
    svgLayer.appendChild(line);

    const particle = document.createElementNS(svgNS, 'path');
    particle.setAttribute('d', path);
    particle.setAttribute('class', 'flow-particle');
    particle.setAttribute('id', `particle-${i}`);
    particle.setAttribute('stroke', conn.color);
    svgLayer.appendChild(particle);

    const labelPos = getLabelPosition(fromNode, toNode, conn, i);
    if (labelsContainer) {
      const labelEl = document.createElement('div');
      labelEl.className = 'conn-label';
      labelEl.id = `label-${i}`;
      labelEl.style.left = `${labelPos.x}%`;
      labelEl.style.top = `${labelPos.y}%`;
      labelEl.textContent = conn.label;
      if (conn.tooltip) {
        labelEl.addEventListener('mouseenter', (e) => showDiagramTooltip(e, conn.label, conn.tooltip));
        labelEl.addEventListener('mousemove', moveDiagramTooltip);
        labelEl.addEventListener('mouseleave', hideDiagramTooltip);
      }
      labelsContainer.appendChild(labelEl);
    }
  });

  lucide.createIcons();
  requestAnimationFrame(() => updateDiagramHighlights(phase, step));
}

function ensureArrowMarker(color) {
  const svgNS = 'http://www.w3.org/2000/svg';
  let defs = svgLayer.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS(svgNS, 'defs');
    svgLayer.prepend(defs);
  }
  if (!defs.querySelector('#arrow-marker')) {
    const marker = document.createElementNS(svgNS, 'marker');
    marker.setAttribute('id', 'arrow-marker');
    marker.setAttribute('viewBox', '0 0 10 10');
    marker.setAttribute('refX', '8');
    marker.setAttribute('refY', '5');
    marker.setAttribute('markerWidth', '5');
    marker.setAttribute('markerHeight', '5');
    marker.setAttribute('orient', 'auto');
    const arrowPath = document.createElementNS(svgNS, 'path');
    arrowPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
    arrowPath.setAttribute('fill', color);
    marker.appendChild(arrowPath);
    defs.appendChild(marker);
  }
}

function getHighlightForStep(phase, step, stepIndex) {
  if (phase.type === 'intro') {
    return step.highlight || { nodes: [], connections: [] };
  }
  if (phase.type === 'walkthrough') {
    const map = getStepHighlightMap(phase.approach);
    return map[stepIndex] || { nodes: [], connections: [] };
  }
  return { nodes: [], connections: [] };
}

function getRevealedConnections(phase, stepIndex) {
  const revealed = new Set();
  const steps = getPhaseSteps(phase);
  for (let i = 0; i <= stepIndex && i < steps.length; i++) {
    const h = getHighlightForStep(phase, steps[i], i);
    (h.connections || []).forEach(c => revealed.add(c));
  }
  return revealed;
}

function updateDiagramHighlights(phase, step, stepIndexOverride) {
  const diagramData = currentDiagramData || getPhaseDiagramData(phase);
  if (!diagramData) return;

  const stepIndex = stepIndexOverride ?? currentStep;
  const highlight = getHighlightForStep(phase, step, stepIndex);
  const revealed = getRevealedConnections(phase, stepIndex);
  const visibleNodes = highlight.nodes.length > 0
    ? highlight.nodes
    : (phase.type === 'intro' ? [] : diagramData.nodes.map(n => n.id));

  removePulseRings();

  diagramData.nodes.forEach((node, i) => {
    const el = document.getElementById(`node-${node.id}`);
    if (!el) return;
    el.classList.remove('highlight', 'dimmed', 'sending', 'visible');

    if (visibleNodes.includes(node.id)) {
      setTimeout(() => el.classList.add('visible'), phase.type === 'intro' ? i * 120 : 0);
      if (highlight.nodes.includes(node.id)) {
        el.classList.add('highlight');
      } else if (highlight.nodes.length > 0) {
        el.classList.add('dimmed');
      }
    }
  });

  const sendingNodes = new Set();
  (highlight.connections || []).forEach(i => {
    const conn = diagramData.connections[i];
    if (conn) sendingNodes.add(conn.from);
  });
  sendingNodes.forEach(id => {
    const el = document.getElementById(`node-${id}`);
    if (el) {
      el.classList.add('sending');
      addPulseRing(el, diagramData);
    }
  });

  const totalConns = diagramData.connections.length;
  const activeConns = highlight.connections || [];
  for (let i = 0; i < totalConns; i++) {
    const isRevealed = revealed.has(i);
    const isActive = activeConns.includes(i);
    const connEl = document.getElementById(`conn-${i}`);

    document.getElementById(`conn-bg-${i}`)?.classList.toggle('revealed', isRevealed);
    connEl?.classList.toggle('revealed', isRevealed);
    connEl?.classList.toggle('active', isActive);
    if (isActive) {
      connEl?.setAttribute('marker-end', 'url(#arrow-marker)');
    } else {
      connEl?.removeAttribute('marker-end');
    }
    document.getElementById(`particle-${i}`)?.classList.toggle('active', isActive);
    document.getElementById(`label-${i}`)?.classList.toggle('revealed', isRevealed);
    document.getElementById(`label-${i}`)?.classList.toggle('active', isActive);
  }

  updateFlowLegend(step, highlight, diagramData);
  stopPacketAnimations();
  if (activeConns.length > 0) {
    activeConns.forEach((connIdx, order) => {
      setTimeout(() => startPacketAnimation(connIdx), order * 350);
    });
  }

  if (phase.type === 'compare') updateCompareHighlight(step);
}

function updateCompareHighlight(step) {
  const focus = step.highlight?.compareFocus;
  document.getElementById('compare-session').classList.toggle('active', focus === 'session' || focus === 'both');
  document.getElementById('compare-jwt').classList.toggle('active', focus === 'jwt' || focus === 'both');
  document.getElementById('compare-session').classList.toggle('dimmed', focus === 'jwt');
  document.getElementById('compare-jwt').classList.toggle('dimmed', focus === 'session');
}

function updateFlowLegend(step, highlight, diagramData) {
  const legend = document.getElementById('flow-legend');
  const text = document.getElementById('flow-legend-text');
  if (!legend || !text) return;

  const hasFlow = step.watch || (highlight.connections && highlight.connections.length > 0);
  if (!hasFlow) {
    legend.classList.add('hidden');
    return;
  }

  legend.classList.remove('hidden');
  if (step.watch) {
    text.textContent = step.watch;
  } else if (highlight.connections?.length) {
    const parts = highlight.connections.map((i, order) => {
      const conn = diagramData.connections[i];
      const from = diagramData.nodes.find(n => n.id === conn.from)?.label || conn.from;
      const to = diagramData.nodes.find(n => n.id === conn.to)?.label || conn.to;
      const prefix = highlight.connections.length > 1 ? `${order + 1}. ` : '';
      return `${prefix}${from} → ${to} (${conn.label})`;
    });
    text.textContent = parts.join('  ·  ');
  }
  lucide.createIcons();
}

function stopPacketAnimations() {
  packetAnimRunning = false;
  packetAnimFrames.forEach(id => cancelAnimationFrame(id));
  packetAnimFrames = [];
  if (packetsContainer) packetsContainer.innerHTML = '';
}

function startPacketAnimation(connIndex) {
  const pathEl = document.getElementById(`conn-${connIndex}`);
  if (!pathEl || !packetsContainer || !currentDiagramData) return;

  const conn = currentDiagramData.connections[connIndex];
  if (!conn) return;

  packetAnimRunning = true;
  const packet = document.createElement('div');
  packet.className = 'data-packet';
  packet.textContent = shortenLabel(conn.label);
  packet.style.background = `${conn.color}22`;
  packet.style.border = `1px solid ${conn.color}99`;
  packet.style.color = conn.color;
  packetsContainer.appendChild(packet);
  requestAnimationFrame(() => packet.classList.add('show'));

  const duration = 2600;
  const length = pathEl.getTotalLength();
  let startTime = null;

  function tick(timestamp) {
    if (!packetAnimRunning || !packet.parentElement) return;
    if (!startTime) startTime = timestamp;
    const progress = ((timestamp - startTime) % duration) / duration;
    const point = pathEl.getPointAtLength(progress * length);
    const containerRect = packetsContainer.getBoundingClientRect();
    const svgPoint = svgLayer.createSVGPoint();
    svgPoint.x = point.x;
    svgPoint.y = point.y;
    const ctm = pathEl.getScreenCTM();
    if (!ctm) return;
    const screen = svgPoint.matrixTransform(ctm);
    packet.style.left = `${screen.x - containerRect.left}px`;
    packet.style.top = `${screen.y - containerRect.top}px`;
    const id = requestAnimationFrame(tick);
    packetAnimFrames.push(id);
  }
  packetAnimFrames.push(requestAnimationFrame(tick));
}

function shortenLabel(label) {
  if (label.length <= 28) return label;
  return label.slice(0, 26) + '…';
}

function addPulseRing(nodeEl, diagramData) {
  const wrap = nodeEl?.querySelector('.node-icon-wrap');
  if (!wrap || wrap.querySelector('.pulse-ring')) return;
  const ring = document.createElement('div');
  ring.className = 'pulse-ring';
  ring.style.color = diagramData.color || diagramData.accent || '#6366f1';
  wrap.appendChild(ring);
}

function removePulseRings() {
  document.querySelectorAll('.pulse-ring').forEach(r => r.remove());
}

function getStepHighlightMap(approachId) {
  const maps = {
    session: [
      { nodes: ['client'], connections: [] },
      { nodes: ['server', 'store'], connections: [0, 1] },
      { nodes: ['server', 'client'], connections: [2] },
      { nodes: ['client', 'server', 'store'], connections: [3] },
    ],
    jwt: [
      { nodes: ['client'], connections: [] },
      { nodes: ['server'], connections: [0] },
      { nodes: ['client', 'server'], connections: [1] },
      { nodes: ['client', 'api'], connections: [2] },
    ],
    oauth: [
      { nodes: ['user', 'client'], connections: [0] },
      { nodes: ['client', 'provider'], connections: [1] },
      { nodes: ['provider', 'user'], connections: [2] },
      { nodes: ['provider', 'client'], connections: [3] },
      { nodes: ['client', 'api'], connections: [4] },
    ],
    apikey: [
      { nodes: ['dev'], connections: [] },
      { nodes: ['dev', 'server'], connections: [0] },
      { nodes: ['server', 'service'], connections: [1] },
      { nodes: ['dev', 'server', 'service'], connections: [0, 1, 2] },
    ],
  };
  return maps[approachId] || [];
}

// ─── Step UI ─────────────────────────────────────────────────────────────────
function goToStep(step) {
  const phase = TUTORIAL_PHASES[currentPhaseIndex];
  const steps = getPhaseSteps(phase);
  if (step < 0 || step > steps.length - 1) {
    if (step > steps.length - 1 && isPlaying) stopPlay();
    return;
  }
  currentStep = step;
  renderPhase();
}

function updateStepUI(phase, steps) {
  const step = steps[currentStep];

  const fadeEls = [
    document.getElementById('step-title'),
    document.getElementById('step-desc'),
    document.getElementById('step-subtitle'),
    document.getElementById('step-bullets'),
    document.getElementById('step-code'),
    document.getElementById('step-watch'),
  ];
  fadeEls.forEach(el => { if (el) el.style.opacity = '0'; });

  document.getElementById('step-num').textContent = currentStep + 1;
  document.getElementById('step-total').textContent = steps.length;

  setTimeout(() => {
    const set = (id, text, prop = 'textContent') => {
      const el = document.getElementById(id);
      if (el) { el[prop] = text; el.style.opacity = '1'; }
    };

    set('step-subtitle', step.subtitle || '');
    set('step-title', step.title);
    set('step-desc', step.desc);

    const bullets = document.getElementById('step-bullets');
    if (bullets) {
      bullets.innerHTML = (step.bullets || []).map(b => `<li>${b}</li>`).join('');
      bullets.style.opacity = '1';
    }

    const codeBlock = document.getElementById('step-code');
    if (codeBlock) {
      if (step.code) {
        codeBlock.classList.remove('hidden');
        codeBlock.innerHTML = `<span class="code-label">Example</span>${escapeHtml(step.code)}`;
        codeBlock.style.opacity = '1';
      } else {
        codeBlock.classList.add('hidden');
      }
    }

    const watchBlock = document.getElementById('step-watch');
    const watchText = document.getElementById('step-watch-text');
    const diagramVisible = phase.type === 'walkthrough' || (phase.type === 'intro' && step.showDiagram === true);
    if (watchBlock && watchText) {
      if (step.watch && !diagramVisible) {
        watchBlock.classList.remove('hidden');
        watchText.textContent = step.watch;
        watchBlock.style.opacity = '1';
      } else {
        watchBlock.classList.add('hidden');
      }
    }
  }, 200);

  // Step bar
  stepBar.innerHTML = '';
  steps.forEach((_, i) => {
    if (i > 0) {
      const lineWrap = document.createElement('div');
      lineWrap.className = 'step-line';
      const fill = document.createElement('div');
      fill.className = 'step-line-fill' + (i <= currentStep ? ' filled' : '');
      lineWrap.appendChild(fill);
      stepBar.appendChild(lineWrap);
    }
    const dot = document.createElement('div');
    dot.className = 'step-dot';
    if (i < currentStep) dot.classList.add('done');
    if (i === currentStep) dot.classList.add('active');
    dot.addEventListener('click', () => { stopPlay(); goToStep(i); });
    stepBar.appendChild(dot);
  });
}

// ─── Play ────────────────────────────────────────────────────────────────────
function togglePlay() {
  isPlaying ? stopPlay() : startPlay();
}

function startPlay() {
  const phase = TUTORIAL_PHASES[currentPhaseIndex];
  if (phase.type !== 'walkthrough') return;

  isPlaying = true;
  const btn = document.getElementById('play-btn');
  btn.classList.add('playing');
  btn.innerHTML = '<i data-lucide="pause" class="w-4 h-4"></i> Pause';
  lucide.createIcons();

  const steps = getPhaseSteps(phase);
  if (currentStep >= steps.length - 1) {
    currentStep = 0;
    renderPhase();
  }

  playInterval = setInterval(() => {
    const max = steps.length - 1;
    if (currentStep < max) {
      goToStep(currentStep + 1);
    } else {
      stopPlay();
    }
  }, 5000);
}

function stopPlay() {
  isPlaying = false;
  clearInterval(playInterval);
  const btn = document.getElementById('play-btn');
  if (!btn) return;
  btn.classList.remove('playing');
  btn.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i> Play Flow';
  lucide.createIcons();
}

// ─── Advanced (OAuth / API Key) ───────────────────────────────────────────────
function openAdvanced(approachId) {
  if (!APPROACHES[approachId]) return;
  advancedApproach = approachId;
  advancedStep = 0;

  document.getElementById('complete-view').classList.add('hidden');
  document.getElementById('walkthrough-panel').classList.add('hidden');
  document.getElementById('advanced-panel').classList.remove('hidden');
  document.getElementById('tutorial-visual').classList.remove('hidden');
  document.getElementById('step-controls').classList.add('hidden');
  document.getElementById('adv-step-controls').classList.remove('hidden');

  const approach = APPROACHES[approachId];
  document.getElementById('advanced-name').textContent = approach.name;
  document.getElementById('advanced-overview').textContent = approach.overview;
  document.getElementById('advanced-when').innerHTML = `<strong>When to use:</strong> ${approach.whenToUse}`;

  document.getElementById('adv-pros-list').innerHTML = approach.pros.map(p =>
    `<span class="tag tag-pro"><i data-lucide="check" class="w-3 h-3"></i>${p}</span>`
  ).join('');
  document.getElementById('adv-cons-list').innerHTML = approach.cons.map(c =>
    `<span class="tag tag-con"><i data-lucide="x" class="w-3 h-3"></i>${c}</span>`
  ).join('');

  // Move animation below advanced explanation
  const visual = document.getElementById('tutorial-visual');
  const advancedPanel = document.getElementById('advanced-panel');
  advancedPanel.insertAdjacentElement('afterend', visual);

  renderAdvancedDiagram();
  updateAdvancedStepUI();
  lucide.createIcons();
}

function closeAdvanced() {
  advancedApproach = null;
  hideAdvancedPanel();
  showCompleteView();
}

function hideAdvancedPanel() {
  document.getElementById('advanced-panel').classList.add('hidden');
  document.getElementById('tutorial-visual').classList.add('hidden');
  document.getElementById('adv-step-controls').classList.add('hidden');
  document.getElementById('step-controls').classList.remove('hidden');
  renderedPhaseKey = null;
  currentDiagramData = null;
  stopPacketAnimations();

  // Restore animation inside walkthrough panel
  const visual = document.getElementById('tutorial-visual');
  const phaseActions = document.querySelector('#walkthrough-panel .phase-actions');
  if (phaseActions) phaseActions.insertAdjacentElement('beforebegin', visual);
}

function renderAdvancedDiagram() {
  const approach = APPROACHES[advancedApproach];
  const step = approach.steps[advancedStep];
  const phaseKey = `advanced-${advancedApproach}`;

  if (renderedPhaseKey === phaseKey && currentDiagramData) {
    updateDiagramHighlights({ type: 'walkthrough', approach: advancedApproach }, step, advancedStep);
    return;
  }

  renderedPhaseKey = phaseKey;
  stopPacketAnimations();
  currentDiagramData = approach;

  nodesContainer.innerHTML = '';
  svgLayer.innerHTML = '';
  if (labelsContainer) labelsContainer.innerHTML = '';
  if (packetsContainer) packetsContainer.innerHTML = '';

  const accent = approach.color || '#818cf8';
  ensureArrowMarker(accent);

  approach.nodes.forEach(node => {
    const el = document.createElement('div');
    el.className = 'node-card';
    el.id = `node-${node.id}`;
    el.style.left = `${node.x}%`;
    el.style.top = `${node.y}%`;
    if (node.y < 35) el.classList.add('popup-below');
    el.innerHTML = `
      <div class="node-icon-wrap relative" style="border-color: ${accent}33">
        <i data-lucide="${node.icon}" class="lucide-icon-xl" style="color: ${accent}"></i>
      </div>
      <span class="node-label">${node.label}</span>
      <span class="node-sublabel">${node.sublabel}</span>
    `;
    nodesContainer.appendChild(el);
  });

  const svgNS = 'http://www.w3.org/2000/svg';
  approach.connections.forEach((conn, i) => {
    const fromNode = approach.nodes.find(n => n.id === conn.from);
    const toNode = approach.nodes.find(n => n.id === conn.to);
    if (!fromNode || !toNode) return;
    const path = computePath(fromNode, toNode, conn, i);

    const bgLine = document.createElementNS(svgNS, 'path');
    bgLine.setAttribute('d', path);
    bgLine.setAttribute('class', 'connection-line-bg');
    bgLine.setAttribute('id', `conn-bg-${i}`);
    svgLayer.appendChild(bgLine);

    const line = document.createElementNS(svgNS, 'path');
    line.setAttribute('d', path);
    line.setAttribute('class', 'connection-line');
    line.setAttribute('id', `conn-${i}`);
    line.setAttribute('stroke', conn.color);
    if (conn.dashed) line.setAttribute('stroke-dasharray', '6 4');
    svgLayer.appendChild(line);

    const particle = document.createElementNS(svgNS, 'path');
    particle.setAttribute('d', path);
    particle.setAttribute('class', 'flow-particle');
    particle.setAttribute('id', `particle-${i}`);
    particle.setAttribute('stroke', conn.color);
    svgLayer.appendChild(particle);

    const labelPos = getLabelPosition(fromNode, toNode, conn, i);
    if (labelsContainer) {
      const labelEl = document.createElement('div');
      labelEl.className = 'conn-label';
      labelEl.id = `label-${i}`;
      labelEl.style.left = `${labelPos.x}%`;
      labelEl.style.top = `${labelPos.y}%`;
      labelEl.textContent = conn.label;
      labelsContainer.appendChild(labelEl);
    }
  });

  lucide.createIcons();
  requestAnimationFrame(() => {
    updateDiagramHighlights({ type: 'walkthrough', approach: advancedApproach }, step, advancedStep);
  });
}

function goToAdvancedStep(step) {
  const approach = APPROACHES[advancedApproach];
  if (step < 0 || step > approach.steps.length - 1) return;
  advancedStep = step;
  renderAdvancedDiagram();
  updateAdvancedStepUI();
}

function updateAdvancedStepUI() {
  const approach = APPROACHES[advancedApproach];
  const step = approach.steps[advancedStep];

  document.getElementById('adv-step-num').textContent = advancedStep + 1;
  document.getElementById('adv-step-total').textContent = approach.steps.length;
  document.getElementById('adv-step-subtitle').textContent = step.subtitle || '';
  document.getElementById('adv-step-title').textContent = step.title;
  document.getElementById('adv-step-desc').textContent = step.desc;
  document.getElementById('adv-step-bullets').innerHTML = (step.bullets || []).map(b => `<li>${b}</li>`).join('');

  const codeBlock = document.getElementById('adv-step-code');
  if (step.code) {
    codeBlock.classList.remove('hidden');
    codeBlock.innerHTML = `<span class="code-label">Example</span>${escapeHtml(step.code)}`;
  } else {
    codeBlock.classList.add('hidden');
  }

  const bar = document.getElementById('adv-step-bar');
  bar.innerHTML = '';
  approach.steps.forEach((_, i) => {
    if (i > 0) {
      const lineWrap = document.createElement('div');
      lineWrap.className = 'step-line';
      const fill = document.createElement('div');
      fill.className = 'step-line-fill' + (i <= advancedStep ? ' filled' : '');
      lineWrap.appendChild(fill);
      bar.appendChild(lineWrap);
    }
    const dot = document.createElement('div');
    dot.className = 'step-dot' + (i < advancedStep ? ' done' : '') + (i === advancedStep ? ' active' : '');
    dot.addEventListener('click', () => goToAdvancedStep(i));
    bar.appendChild(dot);
  });
}

// ─── SVG helpers ─────────────────────────────────────────────────────────────
function getLabelPosition(from, to, conn, index) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const curve = conn.curve ?? (index % 2 === 0 ? -10 : 10);
  if (Math.abs(from.y - to.y) < 12) return { x: mx, y: my + curve * 0.6 };
  return { x: mx + curve * 0.5, y: my + curve * 0.3 };
}

function computePath(from, to, conn, index) {
  const fx = from.x, fy = from.y, tx = to.x, ty = to.y;
  const mx = (fx + tx) / 2, my = (fy + ty) / 2;
  const curve = conn.curve ?? (index % 2 === 0 ? -14 : 14);
  const cy = my + curve;
  if (Math.abs(fy - ty) < 8) return `M ${fx}% ${fy}% Q ${mx}% ${cy}% ${tx}% ${ty}%`;
  return `M ${fx}% ${fy}% C ${fx}% ${cy}%, ${tx}% ${cy}%, ${tx}% ${ty}%`;
}

function showDiagramTooltip(e, title, text) {
  if (!diagramTooltip) return;
  diagramTooltip.innerHTML = `<strong>${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p>`;
  diagramTooltip.classList.remove('hidden');
  diagramTooltip.classList.add('visible');
  moveDiagramTooltip(e);
}

function moveDiagramTooltip(e) {
  if (!diagramTooltip) return;
  const pad = 16;
  let x = e.clientX + pad, y = e.clientY + pad;
  const rect = diagramTooltip.getBoundingClientRect();
  if (x + rect.width > window.innerWidth - pad) x = e.clientX - rect.width - pad;
  if (y + rect.height > window.innerHeight - pad) y = e.clientY - rect.height - pad;
  diagramTooltip.style.left = `${x}px`;
  diagramTooltip.style.top = `${y}px`;
}

function hideDiagramTooltip() {
  if (!diagramTooltip) return;
  diagramTooltip.classList.add('hidden');
  diagramTooltip.classList.remove('visible');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.addEventListener('DOMContentLoaded', init);
