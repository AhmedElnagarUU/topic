/**
 * Authentication Concept — Step-by-step Tutorial
 * Linear flow: Two Approaches → Session → JWT
 */

const COMPARE = {
  id: 'compare',
  accent: '#818cf8',
  steps: [
    {
      subtitle: 'The big picture',
      title: 'What is authentication?',
      desc: 'Authentication answers one simple question: "Who is making this request?" Every time you log into a website, open a mobile app, or call an API, something needs to verify your identity. After login succeeds, the real design choice is where that proof lives — and there are two main answers.',
      bullets: [
        'Authentication = proving who you are',
        'Authorization (different topic) = what you\'re allowed to do',
        'Option A: the server remembers you (session-based)',
        'Option B: the client carries proof (token-based / JWT)',
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
    id: 'compare',
    title: 'Two Ways to Prove Identity',
    eyebrow: 'Part 1 of 3',
    description: 'Every auth system answers one question: after login, where does the proof of identity live?',
    content: COMPARE,
    type: 'compare',
  },
  {
    id: 'session',
    title: 'Session-Based Auth — Step by Step',
    eyebrow: 'Part 2 of 3',
    description: 'Watch exactly what happens when a user logs in with sessions. The server remembers you via a cookie.',
    approach: 'session',
    type: 'walkthrough',
  },
  {
    id: 'jwt',
    title: 'JWT Token Auth — Step by Step',
    eyebrow: 'Part 3 of 3',
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
      { id: 'client', label: 'Browser', sublabel: 'Sends credentials & cookie', icon: 'monitor-smartphone', x: 15, y: 55,
        tooltip: 'The user\'s web browser. Sends login credentials once, then automatically attaches the session cookie on every future request.' },
      { id: 'server', label: 'Web Server', sublabel: 'Validates & issues cookie', icon: 'server', x: 50, y: 55,
        tooltip: 'Your backend (Express, Django, Rails). Checks passwords, creates session IDs, and reads cookies to know who is logged in.' },
      { id: 'store', label: 'Session Store', sublabel: 'Redis / DB / Memory', icon: 'database', x: 85, y: 55,
        tooltip: 'Redis, a database, or server memory. Maps session IDs → user data. The real identity lives here — not inside the cookie.' },
    ],
    connections: [
      { from: 'client', to: 'server', label: '{ email, password }', color: '#34d399' },
      { from: 'server', to: 'store', label: 'sid → { userId, role }', color: '#8b5cf6' },
      { from: 'server', to: 'client', label: 'Set-Cookie: sid=abc123', color: '#fbbf24', dashed: true },
      { from: 'client', to: 'server', label: 'Cookie: sid=abc123', color: '#22d3ee' },
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
      { id: 'client', label: 'Client App', sublabel: 'SPA / Mobile', icon: 'smartphone', x: 15, y: 55 },
      { id: 'server', label: 'Auth Server', sublabel: 'Signs JWT', icon: 'shield', x: 50, y: 55 },
      { id: 'api', label: 'API Server', sublabel: 'Verifies token', icon: 'server', x: 85, y: 55 },
    ],
    connections: [
      { from: 'client', to: 'server', label: '{ email, password }', color: '#6366f1' },
      { from: 'server', to: 'client', label: 'JWT token', color: '#fbbf24', dashed: true },
      { from: 'client', to: 'api', label: 'Bearer eyJ...', color: '#22d3ee' },
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
let diagram = null;
let stepBar;

// ─── Init ────────────────────────────────────────────────────────────────────
function init() {
  diagram = new AuthDiagramEngine({
    svg: document.getElementById('connection-layer'),
    nodesEl: document.getElementById('nodes-container'),
    labelsEl: document.getElementById('connection-labels'),
    emptyEl: document.getElementById('diagram-empty'),
  });
  stepBar = document.getElementById('step-bar');

  document.getElementById('prev-step')?.addEventListener('click', onSidePrev);
  document.getElementById('next-step')?.addEventListener('click', onSideNext);
  document.getElementById('prev-step-side')?.addEventListener('click', onSidePrev);
  document.getElementById('next-step-side')?.addEventListener('click', onSideNext);
  document.getElementById('play-btn')?.addEventListener('click', togglePlay);
  document.getElementById('phase-continue')?.addEventListener('click', onPhaseContinue);
  document.getElementById('phase-back')?.addEventListener('click', onPhaseBack);
  document.getElementById('restart-btn')?.addEventListener('click', restartTutorial);

  document.querySelectorAll('.phase-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.dataset.phase, 10);
      if (!Number.isNaN(idx)) goToPhase(idx);
    });
  });

  document.querySelectorAll('.advanced-card').forEach(card => {
    card.addEventListener('click', () => openAdvanced(card.dataset.approach));
  });
  document.getElementById('back-to-complete').addEventListener('click', closeAdvanced);
  document.getElementById('adv-prev').addEventListener('click', () => onAdvancedSidePrev());
  document.getElementById('adv-next').addEventListener('click', () => onAdvancedSideNext());
  document.getElementById('adv-prev-side')?.addEventListener('click', () => onAdvancedSidePrev());
  document.getElementById('adv-next-side')?.addEventListener('click', () => onAdvancedSideNext());

  renderPhase();
  lucide.createIcons();
  if (window.AnimTooltips) AnimTooltips.refresh();
}

function onSidePrev() {
  if (currentStep > 0) {
    goToStep(currentStep - 1);
  } else {
    onPhaseBack();
  }
}

function onSideNext() {
  const phase = TUTORIAL_PHASES[currentPhaseIndex];
  const steps = getPhaseSteps(phase);
  if (currentStep < steps.length - 1) {
    goToStep(currentStep + 1);
  } else {
    onPhaseContinue();
  }
}

function updateSideNavButtons() {
  const prevBtns = [document.getElementById('prev-step'), document.getElementById('prev-step-side')];
  const nextBtns = [document.getElementById('next-step'), document.getElementById('next-step-side')];
  const atFirst = currentPhaseIndex === 0 && currentStep === 0;

  prevBtns.forEach((btn) => { if (btn) btn.disabled = atFirst; });
  nextBtns.forEach((btn) => { if (btn) btn.disabled = false; });
}

function onAdvancedSidePrev() {
  if (advancedStep > 0) goToAdvancedStep(advancedStep - 1);
}

function onAdvancedSideNext() {
  const approach = APPROACHES[advancedApproach];
  if (!approach) return;
  if (advancedStep < approach.steps.length - 1) {
    goToAdvancedStep(advancedStep + 1);
  }
}

function updateAdvancedSideNav() {
  const approach = APPROACHES[advancedApproach];
  if (!approach) return;
  const prev = document.getElementById('adv-prev-side');
  const next = document.getElementById('adv-next-side');
  if (prev) prev.disabled = advancedStep === 0;
  if (next) next.disabled = advancedStep >= approach.steps.length - 1;
}

// ─── Phase navigation ────────────────────────────────────────────────────────
function goToPhase(index) {
  if (index < 0 || index >= TUTORIAL_PHASES.length) return;
  stopPlay();
  diagram.hide();
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
  if (phase.type === 'compare') return phase.content.steps;
  return APPROACHES[phase.approach].steps;
}

function getPhaseDiagramData(phase) {
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
    pill.classList.remove('locked');
  });
  document.querySelectorAll('.phase-connector').forEach((conn, i) => {
    conn.classList.toggle('done', i < currentPhaseIndex || isComplete);
  });

  // Compare view — hide animation area during comparison phase
  const compareView = document.getElementById('compare-view');
  const isCompare = phase.type === 'compare';
  const step = steps[currentStep];
  const showVisual = !isCompare && phase.type === 'walkthrough';
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

  syncDiagram(phase);
  if (isCompare) updateCompareHighlight(step);
  updateStepUI(phase, steps);
  updateSideNavButtons();
  lucide.createIcons();
}

// ─── Diagram (AuthDiagramEngine) ─────────────────────────────────────────────
function getHighlightForStep(phase, step, stepIndex) {
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
    (h.connections || []).forEach((c) => revealed.add(c));
  }
  return revealed;
}

function buildFrame(phase, step, stepIndex) {
  const diagramData = phase.approach
    ? APPROACHES[phase.approach]
    : getPhaseDiagramData(phase);
  const highlight = getHighlightForStep(phase, step, stepIndex);
  const revealed = getRevealedConnections(phase, stepIndex);
  const allNodeIds = diagramData?.nodes.map((n) => n.id) || [];

  const visibleNodes = allNodeIds;
  const highlightNodes = highlight.nodes.length > 0 ? highlight.nodes : allNodeIds;

  return {
    visibleNodes,
    highlightNodes,
    revealedConns: [...revealed],
    activeConns: highlight.connections || [],
  };
}

function syncDiagram(phase, stepIndexOverride) {
  const idx = stepIndexOverride ?? currentStep;
  const steps = getPhaseSteps(phase);
  const step = steps[idx];
  const showDiagram = phase.type === 'walkthrough';

  if (phase.type === 'compare' || !showDiagram) {
    diagram.hide();
    return;
  }

  const raw = getPhaseDiagramData(phase);
  if (!raw) {
    diagram.hide();
    return;
  }

  diagram.mount({ ...raw, id: raw.id || phase.id });
  diagram.applyFrame(buildFrame(phase, step, idx));
}

function syncAdvancedDiagram() {
  const approach = APPROACHES[advancedApproach];
  if (!approach) return;
  const step = approach.steps[advancedStep];
  const phase = { type: 'walkthrough', approach: advancedApproach };
  diagram.mount({ ...approach, id: approach.id });
  diagram.applyFrame(buildFrame(phase, step, advancedStep));
}

function updateCompareHighlight(step) {
  const focus = step.highlight?.compareFocus;
  document.getElementById('compare-session').classList.toggle('active', focus === 'session' || focus === 'both');
  document.getElementById('compare-jwt').classList.toggle('active', focus === 'jwt' || focus === 'both');
  document.getElementById('compare-session').classList.toggle('dimmed', focus === 'jwt');
  document.getElementById('compare-jwt').classList.toggle('dimmed', focus === 'session');
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
    const diagramVisible = phase.type === 'walkthrough';
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
  diagram.hide();

  const visual = document.getElementById('tutorial-visual');
  const phaseActions = document.querySelector('#walkthrough-panel .phase-actions');
  if (phaseActions) phaseActions.insertAdjacentElement('beforebegin', visual);
}

function renderAdvancedDiagram() {
  syncAdvancedDiagram();
}

function goToAdvancedStep(step) {
  const approach = APPROACHES[advancedApproach];
  if (step < 0 || step > approach.steps.length - 1) return;
  advancedStep = step;
  syncAdvancedDiagram();
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

  updateAdvancedSideNav();
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.addEventListener('DOMContentLoaded', init);
