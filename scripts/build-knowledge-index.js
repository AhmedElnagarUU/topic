/**
 * Builds js/concepts-data.js from the Programming Knowledge Index.
 * Run: node scripts/build-knowledge-index.js
 */
const fs = require('fs');
const path = require('path');
const { explainTopic } = require('./explain-topic');
const TOPIC_SOURCES = require('./topic-sources');

const TIERS = [
  { id: 'fundamental', name: 'Fundamental', description: 'Core building blocks — programming basics, data structures, algorithms, and backend foundations. Master these first.', icon: 'blocks', color: 'cyan', order: 1 },
  { id: 'middle', name: 'Middle', description: 'Frameworks and practical skills — JavaScript deep dives, React, Next.js, databases, and tools.', icon: 'layers', color: 'amber', order: 2 },
  { id: 'advanced', name: 'Advanced', description: 'Architecture, security, performance, and engineering mindset — for production-grade systems.', icon: 'rocket', color: 'violet', order: 3 },
];

const CATEGORIES = [
  // ── Fundamental tier ──────────────────────────────────────────────────────
  { id: 'fund-core-basics', tier: 'fundamental', name: 'Core Programming Basics', description: 'Variables, data types, control flow, loops, and functions — the syntax every program is built from.', icon: 'code', color: 'cyan', order: 1 },
  { id: 'fund-logic-behavior', tier: 'fundamental', name: 'Logic & Behavior', description: 'Scope, closures, and error handling — how code behaves beyond simple statements.', icon: 'brain', color: 'teal', order: 2 },
  { id: 'fund-memory-execution', tier: 'fundamental', name: 'Memory & Execution', description: 'How programs store and run code — stack vs heap and what happens at runtime.', icon: 'cpu', color: 'emerald', order: 3 },
  { id: 'fund-backend', tier: 'fundamental', name: 'Backend Fundamentals', description: 'Express.js basics — server setup, routing, and middleware for your first API.', icon: 'server', color: 'rose', order: 4 },
  { id: 'fund-data-structures', tier: 'fundamental', name: 'Data Structures', description: 'Arrays, objects, stacks, queues, linked lists, hash maps, and sets — organizing data efficiently.', icon: 'database', color: 'sky', order: 5 },
  { id: 'fund-algorithms', tier: 'fundamental', name: 'Algorithms', description: 'Sorting, searching, recursion, and Big O — the logic patterns behind efficient code.', icon: 'git-merge', color: 'indigo', order: 6 },

  // ── Middle tier ─────────────────────────────────────────────────────────────
  { id: 'javascript', tier: 'middle', name: 'JavaScript Deep Understanding', description: 'Execution context, event loop, async, closures — critical for React and Next.js.', icon: 'file-code', color: 'amber', order: 7 },
  { id: 'typescript', tier: 'middle', name: 'TypeScript', description: 'Types, generics, narrowing — safer code for APIs and components.', icon: 'binary', color: 'violet', order: 8 },
  { id: 'react', tier: 'middle', name: 'React', description: 'Components, state, hooks, server vs client — your frontend core.', icon: 'atom', color: 'sky', order: 9 },
  { id: 'nextjs', tier: 'middle', name: 'Next.js', description: 'App Router, Server Actions, caching, auth — your main stack.', icon: 'triangle', color: 'indigo', order: 10 },
  { id: 'backend', tier: 'middle', name: 'Backend & Web Architecture', description: 'MVC, services, HTTP, client/server, scaling — how backends are built.', icon: 'server', color: 'rose', order: 11 },
  { id: 'database', tier: 'middle', name: 'Database (MongoDB & Concepts)', description: 'CRUD, schema design, indexing, aggregation — data that lasts.', icon: 'database', color: 'emerald', order: 12 },
  { id: 'forms', tier: 'middle', name: 'Forms & Data Flow', description: 'FormData, validation, uploads, API sync — moving data through your app.', icon: 'form-input', color: 'orange', order: 13 },
  { id: 'ui-ux', tier: 'middle', name: 'UI / UX & Product Thinking', description: 'Responsive design, components, accessibility, user flows.', icon: 'layout', color: 'fuchsia', order: 14 },
  { id: 'tools', tier: 'middle', name: 'Tools & Ecosystem', description: 'Git, Docker, package managers, build tools.', icon: 'wrench', color: 'slate', order: 15 },

  // ── Advanced tier ─────────────────────────────────────────────────────────
  { id: 'auth-security', tier: 'advanced', name: 'Authentication & Security', description: 'Sessions, JWT, OAuth, cookies, XSS/CSRF — protecting users and data.', icon: 'shield-check', color: 'lime', order: 16 },
  { id: 'threejs', tier: 'advanced', name: '3D & Advanced Frontend', description: 'Three.js, scenes, models, animations — interactive 3D on the web.', icon: 'box', color: 'purple', order: 17 },
  { id: 'mindset', tier: 'advanced', name: 'Software Engineering Mindset', description: 'Debugging, trade-offs, readability — junior to strong engineer.', icon: 'lightbulb', color: 'indigo', order: 18 },
];

const TOPICS = [
  // ── Fundamental: Core Programming Basics ──────────────────────────────────
  { id: 'variables', title: 'Variables', category: 'fund-core-basics', icon: 'variable', summary: 'Named containers for values — const, let, and when to use each.', tags: ['variables', 'const', 'let', 'assignment'] },
  { id: 'data-types', title: 'Data Types', category: 'fund-core-basics', icon: 'hash', summary: 'Strings, numbers, booleans, null, undefined — primitives vs references.', tags: ['types', 'string', 'number', 'boolean', 'primitive'] },
  { id: 'control-flow', title: 'Control Flow', category: 'fund-core-basics', icon: 'git-branch', summary: 'if/else and switch — branching logic based on conditions.', tags: ['if', 'else', 'switch', 'conditions'] },
  { id: 'loops', title: 'Loops', category: 'fund-core-basics', icon: 'repeat', summary: 'for and while loops — repeating work without copy-pasting code.', tags: ['for', 'while', 'iteration', 'loop'] },
  { id: 'functions', title: 'Functions', category: 'fund-core-basics', icon: 'function-square', summary: 'Reusable blocks of logic with inputs (parameters) and outputs (return values).', tags: ['functions', 'parameters', 'return', 'pure'] },

  // ── Fundamental: Logic & Behavior ───────────────────────────────────────────
  { id: 'scope', title: 'Scope', category: 'fund-logic-behavior', icon: 'braces', summary: 'Where variables are visible — global, function, and block scope.', tags: ['scope', 'lexical', 'block', 'global'] },
  { id: 'closures', title: 'Closures', category: 'fund-logic-behavior', icon: 'lock', summary: 'Functions that remember variables from where they were created.', tags: ['closures', 'lexical', 'callbacks', 'important'], important: true },
  { id: 'error-handling', title: 'Error Handling', category: 'fund-logic-behavior', icon: 'alert-circle', summary: 'try/catch, throwing errors, and failing gracefully instead of crashing.', tags: ['errors', 'try', 'catch', 'exceptions'] },

  // ── Fundamental: Memory & Execution ───────────────────────────────────────
  { id: 'stack-vs-heap', title: 'Stack vs Heap', category: 'fund-memory-execution', icon: 'cpu', summary: 'How programs store primitives on the stack and objects on the heap.', tags: ['stack', 'heap', 'memory', 'allocation'] },

  // ── Fundamental: Backend Fundamentals ─────────────────────────────────────
  { id: 'express-basics', title: 'Express.js Basics', category: 'fund-backend', icon: 'server', summary: 'Node.js web framework — what Express is and why backends use it.', tags: ['express', 'node', 'backend', 'framework'] },
  { id: 'server-setup', title: 'Server Setup', category: 'fund-backend', icon: 'plug', summary: 'Creating an Express app, listening on a port, and handling requests.', tags: ['server', 'listen', 'port', 'setup'] },
  { id: 'routing', title: 'Routing', category: 'fund-backend', icon: 'route', summary: 'Mapping URLs and HTTP methods to handler functions.', tags: ['routing', 'get', 'post', 'endpoints'] },
  { id: 'middleware', title: 'Middleware', category: 'fund-backend', icon: 'filter', summary: 'Functions that run between request and response — logging, parsing, auth.', tags: ['middleware', 'express', 'next', 'pipeline'] },

  // ── Fundamental: Data Structures ──────────────────────────────────────────
  { id: 'ds-arrays', title: 'Array', category: 'fund-data-structures', icon: 'list', summary: 'Ordered collections — push, pop, map, filter, and index access.', tags: ['array', 'list', 'ordered', 'index'] },
  { id: 'ds-objects', title: 'Object', category: 'fund-data-structures', icon: 'braces', summary: 'Key-value pairs for grouping related data — the most common structure in JS.', tags: ['object', 'key-value', 'properties', 'record'] },
  { id: 'ds-stack', title: 'Stack', category: 'fund-data-structures', icon: 'layers', summary: 'Last-in, first-out (LIFO) — push and pop from the top only.', tags: ['stack', 'lifo', 'push', 'pop'] },
  { id: 'ds-queue', title: 'Queue', category: 'fund-data-structures', icon: 'list-ordered', summary: 'First-in, first-out (FIFO) — enqueue at back, dequeue from front.', tags: ['queue', 'fifo', 'enqueue', 'dequeue'] },
  { id: 'ds-linked-list', title: 'Linked List', category: 'fund-data-structures', icon: 'link', summary: 'Nodes chained by pointers — efficient insert/delete, no random access.', tags: ['linked list', 'nodes', 'pointers', 'chain'] },
  { id: 'ds-hash-map', title: 'Hash Map', category: 'fund-data-structures', icon: 'table', summary: 'Key-value store with O(1) average lookup — Map and object in JavaScript.', tags: ['hash map', 'dictionary', 'map', 'lookup'] },
  { id: 'ds-set', title: 'Set', category: 'fund-data-structures', icon: 'circle-dot', summary: 'Collection of unique values — no duplicates, fast membership checks.', tags: ['set', 'unique', 'membership', 'collection'] },

  // ── Fundamental: Algorithms ───────────────────────────────────────────────
  { id: 'sorting', title: 'Sorting', category: 'fund-algorithms', icon: 'arrow-up-down', summary: 'Arranging data in order — overview of why and when sorting matters.', tags: ['sorting', 'order', 'algorithms', 'overview'] },
  { id: 'bubble-sort', title: 'Bubble Sort', category: 'fund-algorithms', icon: 'arrow-up-narrow-wide', summary: 'Compare adjacent pairs and swap — simple but O(n²), good for learning.', tags: ['bubble sort', 'swap', 'comparison', 'o(n²)'] },
  { id: 'merge-sort', title: 'Merge Sort', category: 'fund-algorithms', icon: 'git-merge', summary: 'Divide array in half, sort each, merge — stable O(n log n) sort.', tags: ['merge sort', 'divide', 'conquer', 'o(n log n)'] },
  { id: 'quick-sort', title: 'Quick Sort', category: 'fund-algorithms', icon: 'zap', summary: 'Pick pivot, partition, recurse — fast average case O(n log n).', tags: ['quick sort', 'pivot', 'partition', 'recursion'] },
  { id: 'searching', title: 'Searching', category: 'fund-algorithms', icon: 'search', summary: 'Finding items in a collection — linear vs binary strategies.', tags: ['searching', 'find', 'lookup', 'overview'] },
  { id: 'linear-search', title: 'Linear Search', category: 'fund-algorithms', icon: 'scan', summary: 'Check every element one by one — works on any list, O(n) time.', tags: ['linear search', 'sequential', 'o(n)', 'unsorted'] },
  { id: 'binary-search', title: 'Binary Search', category: 'fund-algorithms', icon: 'binary', summary: 'Halve the search space each step — requires sorted data, O(log n).', tags: ['binary search', 'sorted', 'divide', 'o(log n)'] },
  { id: 'recursion', title: 'Recursion', category: 'fund-algorithms', icon: 'repeat', summary: 'A function that calls itself — base case + recursive case.', tags: ['recursion', 'base case', 'self-call', 'stack'] },
  { id: 'big-o', title: 'Time Complexity (Big O)', category: 'fund-algorithms', icon: 'trending-up', summary: 'How runtime grows with input size — O(1), O(n), O(n²), O(log n).', tags: ['big o', 'complexity', 'performance', 'important'], important: true },

  // ── Middle: JavaScript ──────────────────────────────────────────────────────
  { id: 'execution-context', title: 'Execution Context', category: 'javascript', icon: 'play-circle', summary: 'How JavaScript creates an environment when code runs.', tags: ['execution', 'context', 'hoisting'] },
  { id: 'call-stack', title: 'Call Stack', category: 'javascript', icon: 'layers', summary: 'The stack of functions waiting to finish — last in, first out.', tags: ['call stack', 'stack overflow', 'functions'] },
  { id: 'event-loop', title: 'Event Loop', category: 'javascript', icon: 'refresh-cw', summary: 'How async callbacks, promises, and rendering share one thread.', tags: ['event loop', 'async', 'microtasks', 'important'], important: true },
  { id: 'promises-async', title: 'Promises & async/await', category: 'javascript', icon: 'timer', summary: 'Handling future results without blocking the main thread.', tags: ['promises', 'async', 'await', 'then'] },
  { id: 'closures-deep', title: 'Closures (Deep Dive)', category: 'javascript', icon: 'lock', summary: 'Functions that close over variables — factories, privacy, and callbacks.', tags: ['closures', 'callbacks', 'private'] },
  { id: 'prototypes-inheritance', title: 'Prototypes & Inheritance', category: 'javascript', icon: 'git-merge', summary: 'How objects inherit behavior through the prototype chain.', tags: ['prototypes', 'inheritance', 'class'] },
  { id: 'this-keyword', title: 'The this Keyword', category: 'javascript', icon: 'target', summary: 'What "this" refers to — and why it changes with call site and bind.', tags: ['this', 'bind', 'call', 'apply'] },
  { id: 'modules-esm-cjs', title: 'Modules (ESM vs CommonJS)', category: 'javascript', icon: 'package', summary: 'import/export vs require — splitting code into reusable files.', tags: ['esm', 'commonjs', 'import', 'export'] },

  // 3 TypeScript
  { id: 'types-vs-interfaces', title: 'Types vs Interfaces', category: 'typescript', icon: 'file-type', summary: 'When to use type aliases vs interfaces for shapes and contracts.', tags: ['types', 'interfaces', 'typescript'] },
  { id: 'generics', title: 'Generics', category: 'typescript', icon: 'boxes', summary: 'Reusable types that work with many different values — Array<T>, Promise<T>.', tags: ['generics', 'type parameters'] },
  { id: 'utility-types', title: 'Utility Types', category: 'typescript', icon: 'wrench', summary: 'Partial, Pick, Omit, Record — built-in type transformers.', tags: ['partial', 'pick', 'omit', 'utility'] },
  { id: 'type-inference', title: 'Type Inference', category: 'typescript', icon: 'scan', summary: 'How TypeScript figures out types without you writing them.', tags: ['inference', 'implicit', 'types'] },
  { id: 'type-narrowing', title: 'Narrowing', category: 'typescript', icon: 'filter', summary: 'Refining union types inside if blocks — typeof, in, discriminated unions.', tags: ['narrowing', 'guards', 'unions'] },
  { id: 'type-safety-apis', title: 'Type Safety in APIs', category: 'typescript', icon: 'shield', summary: 'Typing request/response shapes so frontend and backend agree.', tags: ['api', 'dto', 'zod', 'validation'] },

  // 4 React
  { id: 'jsx', title: 'JSX', category: 'react', icon: 'code', summary: 'HTML-like syntax inside JavaScript for describing UI.', tags: ['jsx', 'syntax', 'components'] },
  { id: 'props', title: 'Props', category: 'react', icon: 'arrow-right-left', summary: 'Passing data from parent to child components — read-only inputs.', tags: ['props', 'parent', 'child'] },
  { id: 'state', title: 'State', category: 'react', icon: 'toggle-left', summary: 'Data that changes over time and triggers re-renders when updated.', tags: ['state', 'useState', 'reactive'] },
  { id: 'context-api', title: 'Context API', category: 'react', icon: 'share-2', summary: 'Sharing data across the tree without prop drilling.', tags: ['context', 'provider', 'consumer'] },
  { id: 'server-client-components', title: 'Server vs Client Components', category: 'react', icon: 'monitor-smartphone', summary: 'What runs on the server vs the browser in modern React apps.', tags: ['rsc', 'server components', 'client components'] },
  { id: 'rendering-behavior', title: 'Rendering Behavior', category: 'react', icon: 'eye', summary: 'When and why React re-renders — reconciliation and the virtual DOM.', tags: ['render', 'reconciliation', 'virtual dom'] },
  { id: 'rerenders-optimization', title: 'Re-renders & Optimization', category: 'react', icon: 'zap', summary: 'useMemo, useCallback, React.memo — avoiding unnecessary work.', tags: ['memo', 'usememo', 'usecallback', 'performance'] },
  { id: 'react-hooks', title: 'Hooks', category: 'react', icon: 'anchor', summary: 'useEffect, useMemo, useCallback — attaching logic to components.', tags: ['hooks', 'useeffect', 'usememo', 'usecallback'] },
  { id: 'controlled-forms', title: 'Controlled vs Uncontrolled Forms', category: 'react', icon: 'form-input', summary: 'React state drives inputs vs the DOM holds the value.', tags: ['forms', 'controlled', 'uncontrolled', 'refs'] },

  // 5 Next.js
  { id: 'app-router', title: 'App Router', category: 'nextjs', icon: 'route', summary: 'File-based routing with layouts, loading, and error boundaries.', tags: ['app router', 'routing', 'layouts'] },
  { id: 'server-actions', title: 'Server Actions', category: 'nextjs', icon: 'server', summary: 'Call server functions directly from forms and components.', tags: ['server actions', 'mutations', 'forms'] },
  { id: 'routing-layouts', title: 'Routing & Layouts', category: 'nextjs', icon: 'layout-template', summary: 'Nested routes, shared layouts, and parallel routes.', tags: ['layouts', 'nested', 'routes'] },
  { id: 'data-fetching', title: 'Data Fetching Patterns', category: 'nextjs', icon: 'download', summary: 'fetch in Server Components, loading states, and streaming.', tags: ['fetch', 'ssr', 'streaming'] },
  { id: 'caching-revalidation', title: 'Caching & Revalidation', category: 'nextjs', icon: 'hard-drive', summary: 'Next.js cache layers, ISR, and on-demand revalidation.', tags: ['cache', 'isr', 'revalidate'] },
  { id: 'nextjs-auth', title: 'Authentication in Next.js', category: 'nextjs', icon: 'key', summary: 'NextAuth, Kinde, middleware — protecting routes and sessions.', tags: ['nextauth', 'kinde', 'middleware', 'auth'] },
  { id: 'api-routes-vs-actions', title: 'API Routes vs Server Actions', category: 'nextjs', icon: 'git-compare', summary: 'When to use route handlers vs server actions for mutations.', tags: ['api routes', 'server actions', 'handlers'] },

  // 6 Backend
  { id: 'mvc-pattern', title: 'MVC Pattern', category: 'backend', icon: 'layout-grid', summary: 'Model, View, Controller — separating data, UI, and request handling.', tags: ['mvc', 'model', 'view', 'controller'] },
  { id: 'services-layer', title: 'Services Layer', category: 'backend', icon: 'cog', summary: 'Business logic isolated from HTTP — reusable across controllers.', tags: ['services', 'business logic', 'layer'] },
  { id: 'controllers', title: 'Controllers', category: 'backend', icon: 'radio', summary: 'Thin handlers that parse requests and call services.', tags: ['controllers', 'handlers', 'routes'] },
  { id: 'dtos-mappers', title: 'DTOs & Mappers', category: 'backend', icon: 'arrow-left-right', summary: 'Data Transfer Objects — shaping data between layers safely.', tags: ['dto', 'mapper', 'transform'] },
  { id: 'backend-validation', title: 'Validation', category: 'backend', icon: 'check-square', summary: 'Rejecting bad input at the boundary before it hits business logic.', tags: ['validation', 'zod', 'joi', 'schema'] },
  { id: 'backend-error-handling', title: 'Error Handling', category: 'backend', icon: 'alert-triangle', summary: 'Consistent error responses, status codes, and logging.', tags: ['errors', 'status codes', 'logging'] },
  { id: 'clean-architecture', title: 'Clean Architecture Basics', category: 'backend', icon: 'building', summary: 'Dependencies point inward — domain at the center, frameworks at the edge.', tags: ['clean architecture', 'layers', 'domain'] },
  { id: 'client-server-database', title: 'Client, Server & Database', category: 'backend', icon: 'layers', summary: 'The three layers behind every web app.', tags: ['client', 'server', 'database'], fullDoc: true },
  { id: 'http-rest', title: 'HTTP & REST APIs', category: 'backend', icon: 'globe', summary: 'GET, POST, status codes, and REST resource design.', tags: ['http', 'rest', 'api'], fullDoc: true },
  { id: 'caching', title: 'Caching', category: 'backend', icon: 'zap', summary: 'Cache hits, misses, CDNs, and invalidation.', tags: ['cache', 'redis', 'cdn'], fullDoc: true },
  { id: 'load-balancing', title: 'Load Balancing', category: 'backend', icon: 'share-2', summary: 'Distributing traffic across server pools.', tags: ['load balancer', 'scaling'], fullDoc: true },
  { id: 'websockets', title: 'WebSockets', category: 'backend', icon: 'radio', summary: 'Real-time push without polling.', tags: ['websocket', 'real-time'], fullDoc: true },

  // 7 Database
  { id: 'crud-operations', title: 'CRUD Operations', category: 'database', icon: 'pen-line', summary: 'Create, Read, Update, Delete — the four basic data operations.', tags: ['crud', 'create', 'read', 'update', 'delete'] },
  { id: 'schema-design', title: 'Schema Design', category: 'database', icon: 'table', summary: 'Structuring documents and collections for your app\'s queries.', tags: ['schema', 'mongodb', 'design'] },
  { id: 'database-relations', title: 'Relations in NoSQL', category: 'database', icon: 'link', summary: 'Embedding vs referencing — modeling relationships without SQL joins.', tags: ['relations', 'embed', 'reference'] },
  { id: 'indexing', title: 'Indexing', category: 'database', icon: 'search', summary: 'Speeding up queries with indexes — and the cost of maintaining them.', tags: ['index', 'performance', 'query'] },
  { id: 'aggregation', title: 'Aggregation Basics', category: 'database', icon: 'bar-chart', summary: 'Pipeline stages for grouping, filtering, and transforming data.', tags: ['aggregation', 'pipeline', 'mongodb'] },
  { id: 'normalization', title: 'Normalization vs Denormalization', category: 'database', icon: 'scale', summary: 'Splitting data for consistency vs duplicating for read speed.', tags: ['normalization', 'denormalization', 'trade-offs'] },

  // 8 Forms
  { id: 'formdata', title: 'FormData', category: 'forms', icon: 'file-input', summary: 'Browser API for sending forms including files and fields.', tags: ['formdata', 'forms', 'multipart'] },
  { id: 'form-validation', title: 'Validation (Client + Server)', category: 'forms', icon: 'shield-check', summary: 'Never trust the client — validate on both sides.', tags: ['validation', 'client', 'server', 'zod'] },
  { id: 'file-uploads', title: 'File Uploads', category: 'forms', icon: 'upload', summary: 'Multipart forms, storage, and size limits.', tags: ['upload', 'files', 'storage', 's3'] },
  { id: 'api-communication', title: 'API Communication', category: 'forms', icon: 'send', summary: 'fetch, axios, and handling responses from your backend.', tags: ['fetch', 'axios', 'api', 'json'] },
  { id: 'state-syncing', title: 'State Syncing', category: 'forms', icon: 'refresh-cw', summary: 'Keeping UI state aligned with server data after mutations.', tags: ['state', 'sync', 'optimistic', 'revalidate'] },

  // 9 Auth & Security
  { id: 'sessions-vs-jwt', title: 'Sessions vs JWT', category: 'auth-security', icon: 'git-compare', summary: 'Server remembers you vs client carries signed proof.', tags: ['session', 'jwt', 'cookie', 'token'] },
  { id: 'authentication', title: 'Authentication Deep Dive', category: 'auth-security', icon: 'shield-check', summary: 'Sessions, JWT, OAuth flows step by step.', tags: ['auth', 'login', 'oauth'], fullDoc: true },
  { id: 'oauth', title: 'OAuth 2.0', category: 'auth-security', icon: 'fingerprint', summary: 'Sign in with Google/GitHub — delegated identity without passwords.', tags: ['oauth', 'google', 'kinde', 'social login'] },
  { id: 'cookies', title: 'Cookies', category: 'auth-security', icon: 'cookie', summary: 'HttpOnly, Secure, SameSite — how browsers store session data.', tags: ['cookies', 'httponly', 'secure', 'samesite'] },
  { id: 'protected-routes', title: 'Protected Routes', category: 'auth-security', icon: 'lock', summary: 'Middleware and guards that block unauthenticated access.', tags: ['middleware', 'protected', 'routes', 'auth'] },
  { id: 'xss-csrf', title: 'XSS & CSRF Basics', category: 'auth-security', icon: 'shield-alert', summary: 'Cross-site scripting and request forgery — common web attacks.', tags: ['xss', 'csrf', 'security', 'attacks'] },
  { id: 'encryption', title: 'Encryption & HTTPS', category: 'auth-security', icon: 'lock', summary: 'TLS, certificates, and data in transit.', tags: ['https', 'tls', 'encryption'], fullDoc: true },

  // 10 UI/UX
  { id: 'responsive-design', title: 'Responsive Design', category: 'ui-ux', icon: 'smartphone', summary: 'Layouts that adapt from mobile to desktop.', tags: ['responsive', 'mobile', 'breakpoints', 'css'] },
  { id: 'component-design', title: 'Component Design', category: 'ui-ux', icon: 'component', summary: 'Building small, focused UI pieces with clear responsibilities.', tags: ['components', 'design', 'ui'] },
  { id: 'reusability', title: 'Reusability', category: 'ui-ux', icon: 'copy', summary: 'DRY components and design tokens across your product.', tags: ['reusable', 'dry', 'tokens'] },
  { id: 'accessibility', title: 'Accessibility Basics', category: 'ui-ux', icon: 'accessibility', summary: 'Semantic HTML, ARIA, keyboard nav — usable by everyone.', tags: ['a11y', 'aria', 'accessibility', 'wcag'] },
  { id: 'ux-flow', title: 'UX Flow', category: 'ui-ux', icon: 'map', summary: 'User journeys, onboarding, and reducing friction in your app.', tags: ['ux', 'flow', 'onboarding', 'product'] },

  // 11 Three.js
  { id: 'threejs-basics', title: 'Three.js Basics', category: 'threejs', icon: 'box', summary: 'WebGL made approachable — 3D in the browser.', tags: ['three.js', 'webgl', '3d'] },
  { id: 'scene-camera-renderer', title: 'Scene, Camera & Renderer', category: 'threejs', icon: 'camera', summary: 'The three objects every Three.js app needs.', tags: ['scene', 'camera', 'renderer'] },
  { id: 'gltf-models', title: 'Models (GLTF & Blender)', category: 'threejs', icon: 'file-box', summary: 'Loading and displaying 3D models exported from Blender.', tags: ['gltf', 'blender', 'models', 'import'] },
  { id: 'threejs-animations', title: 'Animations', category: 'threejs', icon: 'play', summary: 'Keyframes, mixers, and animating objects in the scene.', tags: ['animation', 'keyframes', 'mixer'] },
  { id: 'threejs-performance', title: 'Performance Optimization', category: 'threejs', icon: 'gauge', summary: 'LOD, instancing, and keeping 60fps with complex scenes.', tags: ['performance', 'fps', 'optimization', '3d'] },

  // 12 Tools
  { id: 'git-github', title: 'Git & GitHub', category: 'tools', icon: 'git-branch', summary: 'Version control, branches, commits, and collaboration.', tags: ['git', 'github', 'branch', 'commit'] },
  { id: 'docker', title: 'Docker', category: 'tools', icon: 'container', summary: 'Containers for consistent dev and deployment environments.', tags: ['docker', 'containers', 'images'] },
  { id: 'package-managers', title: 'npm & pnpm', category: 'tools', icon: 'package', summary: 'Installing dependencies and running scripts.', tags: ['npm', 'pnpm', 'dependencies', 'lockfile'] },
  { id: 'build-tools', title: 'Build Tools', category: 'tools', icon: 'hammer', summary: 'Vite, Webpack, Turbopack — bundling and dev servers.', tags: ['vite', 'webpack', 'bundler', 'build'] },

  // 13 Mindset
  { id: 'debugging-strategy', title: 'Debugging Strategy', category: 'mindset', icon: 'bug', summary: 'Systematic approach — reproduce, isolate, fix, verify.', tags: ['debugging', 'logs', 'breakpoints'] },
  { id: 'code-readability', title: 'Code Readability', category: 'mindset', icon: 'book-open', summary: 'Naming, structure, and writing code others (and future you) understand.', tags: ['readability', 'naming', 'clean code'] },
  { id: 'separation-of-concerns', title: 'Separation of Concerns', category: 'mindset', icon: 'split', summary: 'Each module does one job — easier to test and change.', tags: ['separation', 'modularity', 'single responsibility'] },
  { id: 'performance-thinking', title: 'Performance Thinking', category: 'mindset', icon: 'zap', summary: 'Measure first, optimize bottlenecks, avoid premature optimization.', tags: ['performance', 'profiling', 'bottleneck'] },
  { id: 'trade-offs', title: 'Trade-offs', category: 'mindset', icon: 'scale', summary: 'Every design choice has costs — speed vs simplicity, consistency vs availability.', tags: ['trade-offs', 'decisions', 'architecture'], important: true },
];

const TOPIC_CONTENT = {
  variables: {
    intro: 'Before loops, functions, or frameworks — you need names for values. Variables are the first concept every programmer learns.',
    steps: [
      { kicker: 'What they are', title: 'Variables name values', desc: 'A variable is a labeled box. You put a value in, read it later, or replace it. const means never reassign; let means you can change the reference.', bullets: ['const for values that won\'t be reassigned', 'let when the reference changes', 'Avoid var in modern JavaScript'], icon: 'variable' },
      { kicker: 'Declaration', title: 'Declaring variables', desc: 'const user = "Ada"; creates a binding. let count = 0; allows reassignment. Always declare before use — undeclared variables throw ReferenceError.', bullets: ['const name = value — cannot reassign', 'let name = value — can reassign', 'Naming: camelCase for variables'], icon: 'pen-line' },
      { kicker: 'Assignment', title: 'Reading and updating', desc: 'Read a variable by using its name. Update with let: count = count + 1. const objects can have properties changed — only the binding is locked.', bullets: ['const obj = {}; obj.x = 1 — allowed', 'const obj = {}; obj = {} — error', 'Destructuring: const { name } = user'], icon: 'refresh-cw' },
    ],
  },
  'data-types': {
    intro: 'Every value in a program has a type. Understanding types prevents bugs and makes code predictable.',
    steps: [
      { kicker: 'Primitives', title: 'Primitive data types', desc: 'Strings (text), numbers, booleans (true/false), null, undefined, bigint, and symbol. Primitives are copied by value.', bullets: ['string — "hello"', 'number — 42, 3.14', 'boolean — true / false', 'null vs undefined — intentional empty vs missing'], icon: 'hash' },
      { kicker: 'References', title: 'Objects and references', desc: 'Objects, arrays, and functions are reference types. Two variables can point to the same object — mutating one affects the other.', bullets: ['Objects group related data: { name, age }', 'Arrays are ordered lists', 'typeof operator checks type'], icon: 'braces' },
      { kicker: 'Coercion', title: 'Type coercion basics', desc: 'JavaScript sometimes converts types automatically: "5" + 1 = "51" (string concat). Use === for strict equality without coercion.', bullets: ['== coerces types — avoid it', '=== compares value and type', 'Number("42") explicit conversion'], icon: 'alert-triangle' },
    ],
  },
  closures: {
    intro: 'A closure is when an inner function keeps access to outer variables even after the outer function has returned. This is one of the most important concepts in JavaScript.',
    steps: [
      { kicker: 'Definition', title: 'Functions remember their birthplace', desc: 'A closure = inner function + the variables from its outer scope. The inner function "closes over" those variables.', bullets: ['Inner function + outer variables = closure', 'Variables persist after outer function returns', 'Every function in JS creates a closure'], icon: 'lock' },
      { kicker: 'Example', title: 'Closure in action', desc: 'function makeCounter() { let n = 0; return () => ++n; } — each call to the returned function remembers n.', bullets: ['Factory functions use closures', 'Event handlers capture variables', 'React hooks rely on closures'], icon: 'code' },
      { kicker: 'Gotchas', title: 'Common closure bugs', desc: 'var in a loop + setTimeout prints the same value every time. Use let (block scope) or an IIFE to capture the right value per iteration.', bullets: ['Loop + var + async = classic bug', 'Use let in for loops', 'Closures enable private state'], icon: 'bug' },
    ],
  },
  scope: {
    intro: 'Scope decides where variables are visible. Lexical scope means the structure of your code determines what each function can access.',
    steps: [
      { kicker: 'Levels', title: 'Global, function, and block scope', desc: 'Global — entire file. Function — inside a function declaration. Block — inside { } with let/const.', bullets: ['Global scope — entire file', 'Function scope — inside a function', 'Block scope — inside { } with let/const'], icon: 'braces' },
      { kicker: 'Rules', title: 'Inner sees outer, not vice versa', desc: 'Inner scopes can read variables from outer scopes. Outer scopes cannot see variables declared inside inner blocks.', bullets: ['Shadowing: inner let x hides outer x', 'const/let are block-scoped', 'var is function-scoped (legacy)'], icon: 'eye' },
      { kicker: 'Practical', title: 'Why scope matters', desc: 'Scope prevents naming collisions, enables encapsulation, and is the foundation for closures and modules.', bullets: ['Keep variables as local as possible', 'Avoid polluting global scope', 'Modules use scope for privacy'], icon: 'shield' },
    ],
  },
  'stack-vs-heap': {
    intro: 'Programs need memory. Primitives live on the stack; objects live on the heap. Understanding this explains references, garbage collection, and stack overflows.',
    steps: [
      { kicker: 'Stack', title: 'The call stack', desc: 'Stack stores primitives and function call frames. Fast, fixed-size, LIFO — last function in, first out.', bullets: ['Primitives: number, boolean, string (small)', 'Function calls push frames onto stack', 'Stack overflow = too many nested calls'], icon: 'layers' },
      { kicker: 'Heap', title: 'The heap', desc: 'Objects, arrays, and closures live on the heap. Variables on the stack hold a reference (pointer) to heap memory.', bullets: ['Objects allocated on heap', 'Stack variable holds reference', 'Garbage collector frees unused heap memory'], icon: 'cpu' },
      { kicker: 'Implications', title: 'Why this matters in JS', desc: 'Copying an object copies the reference, not the object. Two variables can point to the same heap object.', bullets: ['const a = { x: 1 }; const b = a — same object', 'Spread {...obj} creates shallow copy', 'Deep clone needed for nested objects'], icon: 'copy' },
    ],
  },
  'big-o': {
    intro: 'Big O describes how an algorithm\'s runtime or memory grows as input size increases. It\'s the language engineers use to compare solutions.',
    steps: [
      { kicker: 'Notation', title: 'What Big O means', desc: 'O(1) = constant time regardless of input size. O(n) = grows linearly. O(n²) = grows with square of input. O(log n) = halves problem each step.', bullets: ['O(1) — array index access', 'O(n) — linear search', 'O(log n) — binary search', 'O(n²) — nested loops / bubble sort'], icon: 'trending-up' },
      { kicker: 'Compare', title: 'Ranking common complexities', desc: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n). Prefer lower complexity when data grows.', bullets: ['10,000 items: O(n²) = 100M ops', 'Same data: O(n log n) ≈ 130K ops', 'Always consider worst case'], icon: 'bar-chart' },
      { kicker: 'Practice', title: 'Spot complexity in code', desc: 'Single loop = O(n). Nested loop = O(n²). Halving each step = O(log n). Hash map lookup = O(1) average.', bullets: ['Count loops and nesting depth', 'Sorting usually O(n log n) minimum', 'Space complexity counts extra memory'], icon: 'search' },
    ],
  },
  'express-basics': {
    intro: 'Express is the most popular Node.js web framework. It handles HTTP requests, routing, and middleware so you can build APIs and backends quickly.',
    steps: [
      { kicker: 'What it is', title: 'Express on Node.js', desc: 'Node.js runs JavaScript on the server. Express adds routing, middleware, and request/response helpers on top of Node\'s http module.', bullets: ['npm install express', 'Minimal API in a few lines', 'Used by millions of production apps'], icon: 'server' },
      { kicker: 'Core pieces', title: 'App, request, response', desc: 'const app = express() creates an application. Each route handler receives req (request) and res (response) objects.', bullets: ['req.params — URL parameters', 'req.body — POST JSON/form data', 'res.json() — send JSON response'], icon: 'package' },
      { kicker: 'First app', title: 'Hello World server', desc: 'const express = require("express"); const app = express(); app.get("/", (req, res) => res.send("Hello")); app.listen(3000);', bullets: ['listen(PORT) starts the server', 'Default port 3000 for development', 'Use nodemon for auto-restart'], icon: 'play' },
    ],
  },
  'event-loop': {
    intro: 'The event loop is the reason JavaScript can be non-blocking with a single thread. If this is fuzzy, async code will always feel like magic instead of logic.',
    steps: [
      { kicker: 'One thread', title: 'JavaScript runs on one call stack', desc: 'Your main code runs synchronously on the call stack. Only one function executes at a time. Long tasks block everything — including UI updates.', bullets: ['Call stack = currently running functions', 'Stack overflow = too many nested calls', 'Blocking code freezes the page'], icon: 'layers' },
      { kicker: 'Async queue', title: 'Web APIs and the task queue', desc: 'setTimeout, fetch, and DOM events are handled outside the stack. When they finish, callbacks go to the task queue (macrotasks) or microtask queue (Promises).', bullets: ['setTimeout → macrotask queue', 'Promise.then → microtask queue', 'Microtasks run before the next macrotask'], icon: 'list-ordered' },
      { kicker: 'The loop', title: 'Event loop ties it together', desc: 'When the call stack is empty, the event loop pulls the next task from the queue and pushes it onto the stack. This repeats forever — hence "event loop."', bullets: ['Stack empty → check microtasks → check macrotasks', 'Explains why Promise.then runs before setTimeout(0)', 'Foundation for async/await mental model'], icon: 'refresh-cw' },
    ],
  },
  'scope-closures': {
    intro: 'Scope decides where variables are visible. Closures let functions remember variables from where they were created — not where they were called.',
    steps: [
      { kicker: 'Scope', title: 'Lexical scope', desc: 'Variables are visible inside the block or function where they are declared. Inner scopes can see outer scopes; outer scopes cannot see inner ones.', bullets: ['Global scope — entire file', 'Function scope — inside a function', 'Block scope — inside { } with let/const'], icon: 'braces' },
      { kicker: 'Closure', title: 'Functions remember their birthplace', desc: 'A closure is when an inner function keeps access to outer variables even after the outer function has returned.', bullets: ['Inner function + outer variables = closure', 'Used in event handlers and React hooks', 'Common interview topic for good reason'], icon: 'lock' },
      { kicker: 'Practical', title: 'Why closures matter in real code', desc: 'React hooks rely on closures. Module patterns use closures for privacy. Mistakes with closures in loops (var in for) are a classic bug — use let or IIFE.', bullets: ['useState closures in React', 'Private variables in modules', 'Loop + setTimeout classic bug'], icon: 'code' },
    ],
  },
};

const FULL_DOCS = JSON.parse(fs.readFileSync(path.join(__dirname, 'full-docs-snapshot.json'), 'utf8'));

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function defaultSteps(topic, category) {
  const custom = TOPIC_CONTENT[topic.id];
  if (custom?.steps) return custom.steps;
  return explainTopic(topic, category).steps;
}

function buildConcept(topic, index) {
  const cat = CATEGORIES.find((c) => c.id === topic.category);
  const full = FULL_DOCS[topic.id];
  const custom = TOPIC_CONTENT[topic.id];
  const explained = explainTopic(topic, cat);
  const sources = TOPIC_SOURCES[topic.id] || custom?.sources || [];

  return {
    id: topic.id,
    slug: topic.id,
    num: String(index + 1).padStart(2, '0'),
    title: topic.title,
    summary: topic.summary,
    category: topic.category,
    tier: cat.tier,
    icon: topic.icon,
    color: cat.color,
    tags: topic.tags,
    important: topic.important || false,
    sources,
    intro: full?.intro || custom?.intro || explained.intro,
    ...(full?.sections ? { sections: full.sections } : {}),
    ...(full?.steps ? { steps: full.steps } : { steps: defaultSteps(topic, cat) }),
  };
}

// Assign sequential numbers per category
const concepts = [];
CATEGORIES.forEach((cat) => {
  const catTopics = TOPICS.filter((t) => t.category === cat.id);
  catTopics.forEach((topic, i) => {
    const c = buildConcept(topic, i);
    c.num = String(i + 1).padStart(2, '0');
    concepts.push(c);
  });
});

const output = `/**
 * Concept Lab — Programming Knowledge Index
 * Auto-generated from scripts/build-knowledge-index.js
 * ${concepts.length} topics across ${CATEGORIES.length} categories in ${TIERS.length} tiers
 */
const KNOWLEDGE_TIERS = ${JSON.stringify(TIERS, null, 2)};

const CONCEPT_CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};

const CONCEPTS = ${JSON.stringify(concepts, null, 2)};

/** Flatten all steps for search indexing */
function getSearchIndex() {
  const items = [];
  CONCEPTS.forEach((concept) => {
    const cat = CONCEPT_CATEGORIES.find((c) => c.id === concept.category);
    const tier = KNOWLEDGE_TIERS.find((t) => t.id === cat?.tier);
    const base = {
      conceptId: concept.id,
      conceptTitle: concept.title,
      conceptSlug: concept.slug,
      category: cat?.name || '',
      categoryId: concept.category,
      tier: tier?.name || '',
      tierId: cat?.tier || '',
      color: concept.color,
      icon: concept.icon,
      summary: concept.summary,
      tags: concept.tags || [],
    };

    items.push({
      ...base,
      type: 'concept',
      title: concept.title,
      desc: concept.summary,
      searchText: [concept.title, concept.summary, concept.intro, ...(concept.tags || [])].join(' ').toLowerCase(),
    });

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

function getCategoriesByTier(tierId) {
  return CONCEPT_CATEGORIES.filter((c) => c.tier === tierId).sort((a, b) => a.order - b.order);
}

function getConceptsByTier(tierId) {
  const catIds = new Set(getCategoriesByTier(tierId).map((c) => c.id));
  return CONCEPTS.filter((c) => catIds.has(c.category));
}

function getKnowledgeStats() {
  const topicCount = CONCEPTS.length;
  const categoryCount = CONCEPT_CATEGORIES.length;
  const tierCount = KNOWLEDGE_TIERS.length;
  const fundamentalCount = getConceptsByTier('fundamental').length;
  const stepCount = CONCEPTS.reduce((n, c) => {
    if (c.steps) return n + c.steps.length;
    if (c.sections) return n + c.sections.reduce((s, sec) => s + sec.steps.length, 0);
    return n;
  }, 0);
  return { topicCount, categoryCount, tierCount, fundamentalCount, stepCount };
}
`;

fs.writeFileSync(path.join(__dirname, '../js/concepts-data.js'), output);
console.log(`Generated ${concepts.length} concepts in ${CATEGORIES.length} categories`);

// Generate concept HTML pages (no sidebar — list is index only)
const template = (id, title) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Concept Lab</title>
  <script>
    (function () {
      if (localStorage.getItem('concept-lab-theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  </script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="../../css/shared.css">
  <link rel="stylesheet" href="../../css/theme.css">
  <link rel="stylesheet" href="../../css/docs.css">
  <script>tailwind.config = { theme: { extend: { colors: { deep: '#0a0a0f' } } } };</script>
</head>
<body class="bg-deep text-white" data-concept-id="${id}">
  <div class="ambient-bg"></div>
  <div class="grid-overlay"></div>
  <div class="relative z-10 min-h-screen">
    <header class="border-b border-white/5 backdrop-blur-sm bg-deep/80 sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <a href="../../index.html" class="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm no-underline">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to index
        </a>
        <div class="flex items-center gap-3">
          <div id="header-search" class="header-search search-wrap">
            <i data-lucide="search" class="search-icon"></i>
            <input type="search" class="search-input" placeholder="Search…" aria-label="Search concepts" autocomplete="off">
            <div class="search-results" role="listbox"></div>
          </div>
          <button type="button" class="theme-toggle" data-theme-toggle aria-label="Switch theme">
            <i data-theme-icon data-lucide="sun"></i><span data-theme-label>Light</span>
          </button>
        </div>
      </div>
    </header>
    <div class="doc-layout doc-layout-page">
      <aside id="doc-toc"></aside>
      <div id="doc-article" class="doc-article"></div>
    </div>
    <footer class="border-t border-white/5 py-8 mt-8">
      <div class="max-w-5xl mx-auto px-6 text-xs text-white/25">Concept Lab — ${title}</div>
    </footer>
  </div>
  <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
  <script src="../../js/concepts-data.js"></script>
  <script src="../../js/visual-engine.js"></script>
  <script src="../../js/search.js"></script>
  <script src="../../js/doc-page.js"></script>
  <script src="../../js/theme.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const el = document.getElementById('header-search');
      if (el) ConceptSearch.init(el, { basePath: '../../' });
    });
  </script>
</body>
</html>`;

concepts.forEach((c) => {
  const dir = path.join(__dirname, '../concepts', c.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), template(c.id, c.title));
});

console.log(`Generated ${concepts.length} concept pages`);
