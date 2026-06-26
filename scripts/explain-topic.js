/**
 * Generates real explanatory documentation steps per topic.
 * No generic "how to learn" placeholders — actual concept explanations.
 */
const CATEGORY_INTROS = {
  'core-fundamentals': 'Core building blocks that every language shares. Strong fundamentals make frameworks easier to reason about.',
  javascript: 'JavaScript runtime behavior — how code executes, handles async work, and manages memory.',
  typescript: 'Static types on top of JavaScript — catching mistakes before runtime and documenting contracts.',
  react: 'React models UI as a function of state. Components re-render when data changes.',
  nextjs: 'Next.js adds routing, server rendering, and data patterns on top of React.',
  backend: 'Backend code receives requests, applies rules, talks to databases, and returns responses.',
  database: 'Databases persist data beyond a single request — design and query patterns matter.',
  forms: 'Forms move user input from the browser to your server — validation and sync are critical.',
  'auth-security': 'Authentication proves identity; security protects data and users from attacks.',
  'ui-ux': 'Good UI is usable, consistent, and accessible — not just visually polished.',
  threejs: 'Three.js renders 3D scenes in the browser using WebGL under the hood.',
  tools: 'Developer tools automate versioning, packaging, and deployment.',
  mindset: 'Engineering mindset — how to think about code quality, debugging, and trade-offs.',
};

/** @type {Record<string, { intro?: string, steps: object[], sources?: {title:string,url:string}[] }>} */
const TOPIC_OVERRIDES = {};

function explainTopic(topic, category) {
  const cat = category;
  const t = topic.title;
  const s = topic.summary;

  const steps = [
    {
      kicker: 'Definition',
      title: `What is ${t}?`,
      desc: s,
      bullets: buildDefinitionBullets(topic, cat),
      icon: topic.icon,
    },
    {
      kicker: 'How it works',
      title: `How ${t} works in practice`,
      desc: buildHowItWorksDesc(topic, cat),
      bullets: buildHowItWorksBullets(topic, cat),
      icon: 'cog',
    },
    {
      kicker: 'In your stack',
      title: `Where ${t} fits in real projects`,
      desc: buildStackDesc(topic, cat),
      bullets: buildStackBullets(topic, cat),
      icon: 'layers',
    },
  ];

  const code = buildCodeExample(topic, cat);
  if (code) steps[1].code = code;

  return {
    intro: TOPIC_OVERRIDES[topic.id]?.intro || `${s} ${CATEGORY_INTROS[cat.id] || ''}`.trim(),
    steps,
    sources: TOPIC_OVERRIDES[topic.id]?.sources || [],
  };
}

function buildDefinitionBullets(topic, cat) {
  const map = {
    'core-fundamentals': [
      'Foundation for reading and writing any programming language',
      'Shows up in every function, component, and API you build',
      `Related ideas: ${(topic.tags || []).slice(0, 3).join(', ')}`,
    ],
    javascript: [
      'Runs in browsers and Node.js — same language, different APIs',
      'Understanding runtime behavior prevents subtle async bugs',
      `Key terms: ${(topic.tags || []).join(', ')}`,
    ],
    typescript: [
      'Compile-time checks — errors caught before users see them',
      'Types document what functions expect and return',
      'Works alongside JavaScript — gradual adoption is fine',
    ],
    react: [
      'UI = f(state) — when state changes, React re-renders',
      'Components compose into trees — props flow down, events bubble up',
      'Used in your Next.js App Router pages and client components',
    ],
    nextjs: [
      'Built on React — adds file-based routing and server features',
      'App Router is the modern default (app/ directory)',
      'Server Components run on the server; Client Components use "use client"',
    ],
    backend: [
      'Sits between the client and database',
      'Handles validation, business rules, and security',
      'Your Express/Next.js API routes and Server Actions are backend code',
    ],
    database: [
      'MongoDB stores documents (JSON-like) in collections',
      'Schema design affects query speed and data consistency',
      'Indexes speed reads; aggregation pipelines transform data',
    ],
    forms: [
      'HTML forms or React controlled inputs collect user data',
      'Client validation improves UX; server validation is mandatory',
      'FormData API sends files and fields in multipart requests',
    ],
    'auth-security': [
      'Authentication = who are you; Authorization = what can you do',
      'Sessions, JWT, and OAuth solve login in different ways',
      'Always use HTTPS; protect cookies; validate on the server',
    ],
    'ui-ux': [
      'Users judge apps in seconds — clarity beats decoration',
      'Responsive layouts work on phone, tablet, and desktop',
      'Accessibility helps everyone, not just screen reader users',
    ],
    threejs: [
      'WebGL draws triangles; Three.js abstracts scenes and cameras',
      'Models load as GLTF from Blender or other 3D tools',
      'Performance matters — too many draw calls drops frame rate',
    ],
    tools: [
      'Git tracks every code change — branches isolate features',
      'npm/pnpm install packages; lockfiles pin exact versions',
      'Docker packages app + dependencies into reproducible containers',
    ],
    mindset: [
      'Code is read more than written — optimize for clarity',
      'Every architecture choice is a trade-off, not a silver bullet',
      'Debug systematically: reproduce → isolate → fix → verify',
    ],
  };
  return map[cat.id] || map['core-fundamentals'];
}

function buildHowItWorksDesc(topic, cat) {
  const id = topic.id;
  const specific = {
    'control-flow': 'Programs branch based on conditions. if/else runs one path or another. switch matches a value against multiple cases — cleaner than long if chains when comparing one variable.',
    loops: 'Loops repeat a block until a condition is false (while) or for a set count (for). for...of iterates arrays; for...in iterates object keys. break exits early; continue skips to the next iteration.',
    functions: 'A function takes inputs (parameters), runs logic, and returns an output. Pure functions always return the same output for the same input and cause no side effects. Impure functions read/write external state — database calls, DOM updates, etc.',
    'promises-async': 'A Promise represents a value that will exist later. .then() runs on success; .catch() on failure. async/await is syntactic sugar — await pauses the function until the Promise settles, without blocking the main thread.',
    jsx: 'JSX looks like HTML but compiles to JavaScript function calls: React.createElement(type, props, children). You must close tags, use className instead of class, and wrap multiple elements in a fragment <>...</>.',
    props: 'Props are read-only inputs passed from parent to child. <UserCard name="Ada" age={42} /> — the child receives { name: "Ada", age: 42 }. Changing props in the child does not affect the parent.',
    state: 'useState returns [value, setValue]. Calling setValue triggers a re-render with the new value. State updates are asynchronous and batched — never mutate state directly; always use the setter.',
    'app-router': 'Files in app/ define routes. page.tsx is the UI; layout.tsx wraps children; loading.tsx shows while fetching. Folders create URL segments — app/blog/[slug]/page.tsx matches /blog/hello.',
    'server-actions': 'A Server Action is an async function marked "use server". Forms can call it directly via action={fn}. It runs on the server — safe for database writes and secrets. No API route boilerplate needed.',
    formdata: 'new FormData(formElement) collects all named inputs. Append files with formData.append("avatar", file). Send via fetch with method POST — browser sets Content-Type: multipart/form-data automatically.',
    'sessions-vs-jwt': 'Sessions: server stores user data, client holds only a session ID cookie. JWT: server signs a token containing claims; client sends it on every request; server verifies signature without a database lookup.',
    'crud-operations': 'Create: insertOne / insertMany. Read: find / findOne. Update: updateOne with $set. Delete: deleteOne. In REST: POST=create, GET=read, PUT/PATCH=update, DELETE=delete.',
    docker: 'A Dockerfile lists steps to build an image. docker build creates the image; docker run starts a container from it. Containers share the host kernel but have isolated filesystems and networks.',
    'trade-offs': 'Caching speeds reads but risks stale data. JWT scales horizontally but is hard to revoke. SQL joins are flexible; NoSQL embeds are fast but duplicate data. No option is free — pick based on constraints.',
  };
  if (specific[id]) return specific[id];
  return `${topic.title} works by applying clear rules in code. ${topic.summary} The mechanics depend on your language and framework, but the underlying idea stays the same across projects.`;
}

function buildHowItWorksBullets(topic, cat) {
  const id = topic.id;
  const specific = {
    'control-flow': ['if (condition) { } else { }', 'switch (value) { case x: break; default: }', 'Truthy/falsy: 0, "", null, undefined, NaN are falsy'],
    loops: ['for (let i = 0; i < n; i++) — classic counted loop', 'while (condition) — runs until condition is false', 'for (const item of array) — iterate values safely'],
    functions: ['function add(a, b) { return a + b; }', 'Arrow: const add = (a, b) => a + b', 'Return early to reduce nesting'],
    'event-loop': ['Synchronous code runs on the call stack top to bottom', 'Async callbacks queue up; event loop drains when stack is empty', 'Promise.then = microtask (runs before next macrotask)'],
    generics: ['function identity<T>(arg: T): T { return arg; }', 'Array<string> means array of strings', 'Generics keep types flexible without using any'],
    'context-api': ['createContext(defaultValue) defines the context', '<Provider value={data}> wraps the tree', 'useContext(ctx) reads the value in any descendant'],
    'mvc-pattern': ['Model: data + business rules', 'View: what the user sees (HTML/React)', 'Controller: receives input, updates model, picks view'],
    indexing: ['db.collection.createIndex({ email: 1 }) — ascending', 'Compound index: { userId: 1, createdAt: -1 }', 'Queries without matching indexes scan every document'],
    oauth: ['User clicks "Sign in with Google"', 'Redirect to provider → login + consent', 'Provider redirects back with code → exchange for access token'],
    'git-github': ['git init → git add → git commit -m "msg"', 'git branch feature → git checkout feature', 'git push origin feature → open Pull Request on GitHub'],
  };
  if (specific[id]) return specific[id];
  return [
    `Core mechanism behind ${topic.title.toLowerCase()}`,
    `Common in ${cat.name.toLowerCase()} work`,
    'See code example below when applicable',
  ];
}

function buildStackDesc(topic, cat) {
  return `In your Next.js + MongoDB projects, ${topic.title.toLowerCase()} connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.`;
}

function buildStackBullets(topic, cat) {
  const stacks = {
    react: ['Used in every component you write', 'Pairs with Next.js App Router', 'Hooks replace class lifecycle methods'],
    nextjs: ['Your main framework for full-stack apps', 'Combines with Kinde/NextAuth for login', 'Server Actions replace many API routes'],
    database: ['MongoDB Atlas or local mongod', 'Mongoose or native driver in Node', 'Schema matches how you query in the app'],
    'auth-security': ['Kinde OAuth for social login', 'Middleware protects /dashboard routes', 'Cookies store session tokens securely'],
    threejs: ['React Three Fiber wraps Three.js in components', 'Load GLTF models from /public folder', 'Use useFrame for animation loops'],
    tools: ['GitHub for your topic repo', 'pnpm for faster installs', 'Docker for consistent deploy environments'],
  };
  return stacks[cat.id] || [
    'Applies across frontend and backend code',
    'Shows up when building real features, not toy examples',
    'Combine with other topics in this index for full picture',
  ];
}

function buildCodeExample(topic, cat) {
  const examples = {
    'variables-data-types': 'const name = "Ada";\nlet count = 0;\nconst user = { id: 1, role: "admin" };',
    'control-flow': 'if (score >= 60) {\n  console.log("Pass");\n} else {\n  console.log("Fail");\n}',
    loops: 'for (const item of items) {\n  console.log(item);\n}',
    functions: 'function greet(name) {\n  return `Hello, ${name}`;\n}',
    'promises-async': 'async function fetchUser(id) {\n  const res = await fetch(`/api/users/${id}`);\n  return res.json();\n}',
    jsx: 'function Card({ title }) {\n  return <div className="card"><h2>{title}</h2></div>;\n}',
    props: '<Button label="Save" onClick={handleSave} />',
    state: 'const [count, setCount] = useState(0);\nsetCount(count + 1);',
    'server-actions': '"use server"\nexport async function createPost(formData) {\n  await db.posts.insertOne({ title: formData.get("title") });\n}',
    formdata: 'const fd = new FormData(form);\nawait fetch("/api/upload", { method: "POST", body: fd });',
    'crud-operations': 'await db.users.insertOne({ name: "Ada" });\nawait db.users.findOne({ email: "a@b.com" });',
    generics: 'type ApiResponse<T> = { data: T; error?: string };',
    'types-vs-interfaces': 'interface User { id: string; name: string; }\ntype Role = "admin" | "user";',
  };
  return examples[topic.id] || null;
}

module.exports = { explainTopic, TOPIC_OVERRIDES, CATEGORY_INTROS };
