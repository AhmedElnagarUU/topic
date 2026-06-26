/**
 * Concept Lab — Programming Knowledge Index
 * Auto-generated from scripts/build-knowledge-index.js
 * 86 topics across 13 categories
 */
const CONCEPT_CATEGORIES = [
  {
    "id": "core-fundamentals",
    "name": "Core Programming Fundamentals",
    "description": "Variables, functions, scope, memory — the thinking skills behind every language.",
    "icon": "brain",
    "color": "cyan",
    "order": 1
  },
  {
    "id": "javascript",
    "name": "JavaScript Deep Understanding",
    "description": "Execution context, event loop, async, closures — critical for React and Next.js.",
    "icon": "file-code",
    "color": "amber",
    "order": 2
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "description": "Types, generics, narrowing — safer code for APIs and components.",
    "icon": "binary",
    "color": "violet",
    "order": 3
  },
  {
    "id": "react",
    "name": "React",
    "description": "Components, state, hooks, server vs client — your frontend core.",
    "icon": "atom",
    "color": "sky",
    "order": 4
  },
  {
    "id": "nextjs",
    "name": "Next.js",
    "description": "App Router, Server Actions, caching, auth — your main stack.",
    "icon": "triangle",
    "color": "indigo",
    "order": 5
  },
  {
    "id": "backend",
    "name": "Backend & Web Architecture",
    "description": "MVC, services, HTTP, client/server, scaling — how backends are built.",
    "icon": "server",
    "color": "rose",
    "order": 6
  },
  {
    "id": "database",
    "name": "Database (MongoDB & Concepts)",
    "description": "CRUD, schema design, indexing, aggregation — data that lasts.",
    "icon": "database",
    "color": "emerald",
    "order": 7
  },
  {
    "id": "forms",
    "name": "Forms & Data Flow",
    "description": "FormData, validation, uploads, API sync — moving data through your app.",
    "icon": "form-input",
    "color": "orange",
    "order": 8
  },
  {
    "id": "auth-security",
    "name": "Authentication & Security",
    "description": "Sessions, JWT, OAuth, cookies, XSS/CSRF — protecting users and data.",
    "icon": "shield-check",
    "color": "lime",
    "order": 9
  },
  {
    "id": "ui-ux",
    "name": "UI / UX & Product Thinking",
    "description": "Responsive design, components, accessibility, user flows.",
    "icon": "layout",
    "color": "fuchsia",
    "order": 10
  },
  {
    "id": "threejs",
    "name": "3D & Advanced Frontend",
    "description": "Three.js, scenes, models, animations — interactive 3D on the web.",
    "icon": "box",
    "color": "purple",
    "order": 11
  },
  {
    "id": "tools",
    "name": "Tools & Ecosystem",
    "description": "Git, Docker, package managers, build tools.",
    "icon": "wrench",
    "color": "slate",
    "order": 12
  },
  {
    "id": "mindset",
    "name": "Software Engineering Mindset",
    "description": "Debugging, trade-offs, readability — junior to strong engineer.",
    "icon": "lightbulb",
    "color": "indigo",
    "order": 13
  }
];

const CONCEPTS = [
  {
    "id": "variables-data-types",
    "slug": "variables-data-types",
    "num": "01",
    "title": "Variables & Data Types",
    "summary": "Names for values — strings, numbers, booleans, objects, and how they behave.",
    "category": "core-fundamentals",
    "icon": "variable",
    "color": "cyan",
    "tags": [
      "variables",
      "types",
      "string",
      "number",
      "boolean"
    ],
    "important": false,
    "intro": "Before loops, functions, or frameworks — you store and manipulate values. Understanding data types is the first mental model every programmer needs.",
    "steps": [
      {
        "kicker": "What they are",
        "title": "Variables name values",
        "desc": "A variable is a labeled box. You put a value in, read it later, or replace it. const means never reassign; let means you can change the reference.",
        "bullets": [
          "const for values that won't be reassigned",
          "let when the reference changes",
          "Avoid var in modern JavaScript"
        ],
        "icon": "variable"
      },
      {
        "kicker": "Primitives",
        "title": "Primitive data types",
        "desc": "Strings (text), numbers, booleans (true/false), null, undefined, bigint, and symbol. Primitives are copied by value — changing a copy doesn't affect the original.",
        "bullets": [
          "string — \"hello\"",
          "number — 42, 3.14",
          "boolean — true / false",
          "null vs undefined — intentional empty vs missing"
        ],
        "icon": "hash"
      },
      {
        "kicker": "Objects",
        "title": "Objects and references",
        "desc": "Objects, arrays, and functions are reference types. Two variables can point to the same object — mutating one affects the other.",
        "bullets": [
          "Objects group related data: { name, age }",
          "Arrays are ordered lists",
          "References matter when passing to functions"
        ],
        "icon": "braces"
      }
    ]
  },
  {
    "id": "control-flow",
    "slug": "control-flow",
    "num": "02",
    "title": "Control Flow",
    "summary": "if/else and switch — branching logic based on conditions.",
    "category": "core-fundamentals",
    "icon": "git-branch",
    "color": "cyan",
    "tags": [
      "if",
      "else",
      "switch",
      "conditions"
    ],
    "important": false,
    "intro": "if/else and switch — branching logic based on conditions. Part of your Programming Knowledge Index — Core Programming Fundamentals.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Control Flow",
        "desc": "if/else and switch — branching logic based on conditions. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Core Programming Fundamentals",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "git-branch"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Control Flow connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "loops",
    "slug": "loops",
    "num": "03",
    "title": "Loops",
    "summary": "for and while loops — repeating work without copy-pasting code.",
    "category": "core-fundamentals",
    "icon": "repeat",
    "color": "cyan",
    "tags": [
      "for",
      "while",
      "iteration",
      "loop"
    ],
    "important": false,
    "intro": "for and while loops — repeating work without copy-pasting code. Part of your Programming Knowledge Index — Core Programming Fundamentals.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Loops",
        "desc": "for and while loops — repeating work without copy-pasting code. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Core Programming Fundamentals",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "repeat"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Loops connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "functions",
    "slug": "functions",
    "num": "04",
    "title": "Functions",
    "summary": "Pure vs impure functions — reusable blocks of logic with inputs and outputs.",
    "category": "core-fundamentals",
    "icon": "function-square",
    "color": "cyan",
    "tags": [
      "functions",
      "pure",
      "impure",
      "parameters"
    ],
    "important": false,
    "intro": "Pure vs impure functions — reusable blocks of logic with inputs and outputs. Part of your Programming Knowledge Index — Core Programming Fundamentals.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Functions",
        "desc": "Pure vs impure functions — reusable blocks of logic with inputs and outputs. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Core Programming Fundamentals",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "function-square"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Functions connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "scope-closures",
    "slug": "scope-closures",
    "num": "05",
    "title": "Scope & Closures",
    "summary": "Where variables live and how inner functions remember outer variables.",
    "category": "core-fundamentals",
    "icon": "braces",
    "color": "cyan",
    "tags": [
      "scope",
      "closures",
      "lexical",
      "important"
    ],
    "important": true,
    "intro": "Scope decides where variables are visible. Closures let functions remember variables from where they were created — not where they were called.",
    "steps": [
      {
        "kicker": "Scope",
        "title": "Lexical scope",
        "desc": "Variables are visible inside the block or function where they are declared. Inner scopes can see outer scopes; outer scopes cannot see inner ones.",
        "bullets": [
          "Global scope — entire file",
          "Function scope — inside a function",
          "Block scope — inside { } with let/const"
        ],
        "icon": "braces"
      },
      {
        "kicker": "Closure",
        "title": "Functions remember their birthplace",
        "desc": "A closure is when an inner function keeps access to outer variables even after the outer function has returned. That's how callbacks, factories, and private state work.",
        "bullets": [
          "Inner function + outer variables = closure",
          "Used in event handlers and React hooks",
          "Common interview topic for good reason"
        ],
        "icon": "lock"
      },
      {
        "kicker": "Practical",
        "title": "Why closures matter in real code",
        "desc": "React hooks rely on closures. Module patterns use closures for privacy. Mistakes with closures in loops (var in for) are a classic bug — use let or IIFE.",
        "bullets": [
          "useState closures in React",
          "Private variables in modules",
          "Loop + setTimeout classic bug"
        ],
        "icon": "code"
      }
    ]
  },
  {
    "id": "memory-basics",
    "slug": "memory-basics",
    "num": "06",
    "title": "Memory Basics",
    "summary": "Stack vs heap — how programs store values and objects in memory.",
    "category": "core-fundamentals",
    "icon": "cpu",
    "color": "cyan",
    "tags": [
      "stack",
      "heap",
      "memory",
      "allocation"
    ],
    "important": false,
    "intro": "Stack vs heap — how programs store values and objects in memory. Part of your Programming Knowledge Index — Core Programming Fundamentals.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Memory Basics",
        "desc": "Stack vs heap — how programs store values and objects in memory. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Core Programming Fundamentals",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "cpu"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Memory Basics connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "error-handling",
    "slug": "error-handling",
    "num": "07",
    "title": "Error Handling",
    "summary": "try/catch, throwing errors, and failing gracefully instead of crashing.",
    "category": "core-fundamentals",
    "icon": "alert-circle",
    "color": "cyan",
    "tags": [
      "errors",
      "try",
      "catch",
      "exceptions"
    ],
    "important": false,
    "intro": "try/catch, throwing errors, and failing gracefully instead of crashing. Part of your Programming Knowledge Index — Core Programming Fundamentals.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Error Handling",
        "desc": "try/catch, throwing errors, and failing gracefully instead of crashing. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Core Programming Fundamentals",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "alert-circle"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Error Handling connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "execution-context",
    "slug": "execution-context",
    "num": "01",
    "title": "Execution Context",
    "summary": "How JavaScript creates an environment when code runs.",
    "category": "javascript",
    "icon": "play-circle",
    "color": "amber",
    "tags": [
      "execution",
      "context",
      "hoisting"
    ],
    "important": false,
    "intro": "How JavaScript creates an environment when code runs. Part of your Programming Knowledge Index — JavaScript Deep Understanding.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Execution Context",
        "desc": "How JavaScript creates an environment when code runs. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: JavaScript Deep Understanding",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "play-circle"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Execution Context connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "call-stack",
    "slug": "call-stack",
    "num": "02",
    "title": "Call Stack",
    "summary": "The stack of functions waiting to finish — last in, first out.",
    "category": "javascript",
    "icon": "layers",
    "color": "amber",
    "tags": [
      "call stack",
      "stack overflow",
      "functions"
    ],
    "important": false,
    "intro": "The stack of functions waiting to finish — last in, first out. Part of your Programming Knowledge Index — JavaScript Deep Understanding.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Call Stack",
        "desc": "The stack of functions waiting to finish — last in, first out. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: JavaScript Deep Understanding",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "layers"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Call Stack connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "event-loop",
    "slug": "event-loop",
    "num": "03",
    "title": "Event Loop",
    "summary": "How async callbacks, promises, and rendering share one thread.",
    "category": "javascript",
    "icon": "refresh-cw",
    "color": "amber",
    "tags": [
      "event loop",
      "async",
      "microtasks",
      "important"
    ],
    "important": true,
    "intro": "The event loop is the reason JavaScript can be non-blocking with a single thread. If this is fuzzy, async code will always feel like magic instead of logic.",
    "steps": [
      {
        "kicker": "One thread",
        "title": "JavaScript runs on one call stack",
        "desc": "Your main code runs synchronously on the call stack. Only one function executes at a time. Long tasks block everything — including UI updates.",
        "bullets": [
          "Call stack = currently running functions",
          "Stack overflow = too many nested calls",
          "Blocking code freezes the page"
        ],
        "icon": "layers"
      },
      {
        "kicker": "Async queue",
        "title": "Web APIs and the task queue",
        "desc": "setTimeout, fetch, and DOM events are handled outside the stack. When they finish, callbacks go to the task queue (macrotasks) or microtask queue (Promises).",
        "bullets": [
          "setTimeout → macrotask queue",
          "Promise.then → microtask queue",
          "Microtasks run before the next macrotask"
        ],
        "icon": "list-ordered"
      },
      {
        "kicker": "The loop",
        "title": "Event loop ties it together",
        "desc": "When the call stack is empty, the event loop pulls the next task from the queue and pushes it onto the stack. This repeats forever — hence \"event loop.\"",
        "bullets": [
          "Stack empty → check microtasks → check macrotasks",
          "Explains why Promise.then runs before setTimeout(0)",
          "Foundation for async/await mental model"
        ],
        "icon": "refresh-cw"
      }
    ]
  },
  {
    "id": "promises-async",
    "slug": "promises-async",
    "num": "04",
    "title": "Promises & async/await",
    "summary": "Handling future results without blocking the main thread.",
    "category": "javascript",
    "icon": "timer",
    "color": "amber",
    "tags": [
      "promises",
      "async",
      "await",
      "then"
    ],
    "important": false,
    "intro": "Handling future results without blocking the main thread. Part of your Programming Knowledge Index — JavaScript Deep Understanding.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Promises & async/await",
        "desc": "Handling future results without blocking the main thread. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: JavaScript Deep Understanding",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "timer"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Promises & async/await connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "closures-deep",
    "slug": "closures-deep",
    "num": "05",
    "title": "Closures (Deep Dive)",
    "summary": "Functions that close over variables — factories, privacy, and callbacks.",
    "category": "javascript",
    "icon": "lock",
    "color": "amber",
    "tags": [
      "closures",
      "callbacks",
      "private"
    ],
    "important": false,
    "intro": "Functions that close over variables — factories, privacy, and callbacks. Part of your Programming Knowledge Index — JavaScript Deep Understanding.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Closures (Deep Dive)",
        "desc": "Functions that close over variables — factories, privacy, and callbacks. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: JavaScript Deep Understanding",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "lock"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Closures (Deep Dive) connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "prototypes-inheritance",
    "slug": "prototypes-inheritance",
    "num": "06",
    "title": "Prototypes & Inheritance",
    "summary": "How objects inherit behavior through the prototype chain.",
    "category": "javascript",
    "icon": "git-merge",
    "color": "amber",
    "tags": [
      "prototypes",
      "inheritance",
      "class"
    ],
    "important": false,
    "intro": "How objects inherit behavior through the prototype chain. Part of your Programming Knowledge Index — JavaScript Deep Understanding.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Prototypes & Inheritance",
        "desc": "How objects inherit behavior through the prototype chain. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: JavaScript Deep Understanding",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "git-merge"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Prototypes & Inheritance connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "this-keyword",
    "slug": "this-keyword",
    "num": "07",
    "title": "The this Keyword",
    "summary": "What \"this\" refers to — and why it changes with call site and bind.",
    "category": "javascript",
    "icon": "target",
    "color": "amber",
    "tags": [
      "this",
      "bind",
      "call",
      "apply"
    ],
    "important": false,
    "intro": "What \"this\" refers to — and why it changes with call site and bind. Part of your Programming Knowledge Index — JavaScript Deep Understanding.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding The this Keyword",
        "desc": "What \"this\" refers to — and why it changes with call site and bind. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: JavaScript Deep Understanding",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "target"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. The this Keyword connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "modules-esm-cjs",
    "slug": "modules-esm-cjs",
    "num": "08",
    "title": "Modules (ESM vs CommonJS)",
    "summary": "import/export vs require — splitting code into reusable files.",
    "category": "javascript",
    "icon": "package",
    "color": "amber",
    "tags": [
      "esm",
      "commonjs",
      "import",
      "export"
    ],
    "important": false,
    "intro": "import/export vs require — splitting code into reusable files. Part of your Programming Knowledge Index — JavaScript Deep Understanding.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Modules (ESM vs CommonJS)",
        "desc": "import/export vs require — splitting code into reusable files. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: JavaScript Deep Understanding",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "package"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Modules (ESM vs CommonJS) connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "types-vs-interfaces",
    "slug": "types-vs-interfaces",
    "num": "01",
    "title": "Types vs Interfaces",
    "summary": "When to use type aliases vs interfaces for shapes and contracts.",
    "category": "typescript",
    "icon": "file-type",
    "color": "violet",
    "tags": [
      "types",
      "interfaces",
      "typescript"
    ],
    "important": false,
    "intro": "When to use type aliases vs interfaces for shapes and contracts. Part of your Programming Knowledge Index — TypeScript.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Types vs Interfaces",
        "desc": "When to use type aliases vs interfaces for shapes and contracts. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: TypeScript",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "file-type"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Types vs Interfaces connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "generics",
    "slug": "generics",
    "num": "02",
    "title": "Generics",
    "summary": "Reusable types that work with many different values — Array<T>, Promise<T>.",
    "category": "typescript",
    "icon": "boxes",
    "color": "violet",
    "tags": [
      "generics",
      "type parameters"
    ],
    "important": false,
    "intro": "Reusable types that work with many different values — Array<T>, Promise<T>. Part of your Programming Knowledge Index — TypeScript.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Generics",
        "desc": "Reusable types that work with many different values — Array<T>, Promise<T>. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: TypeScript",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "boxes"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Generics connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "utility-types",
    "slug": "utility-types",
    "num": "03",
    "title": "Utility Types",
    "summary": "Partial, Pick, Omit, Record — built-in type transformers.",
    "category": "typescript",
    "icon": "wrench",
    "color": "violet",
    "tags": [
      "partial",
      "pick",
      "omit",
      "utility"
    ],
    "important": false,
    "intro": "Partial, Pick, Omit, Record — built-in type transformers. Part of your Programming Knowledge Index — TypeScript.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Utility Types",
        "desc": "Partial, Pick, Omit, Record — built-in type transformers. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: TypeScript",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "wrench"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Utility Types connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "type-inference",
    "slug": "type-inference",
    "num": "04",
    "title": "Type Inference",
    "summary": "How TypeScript figures out types without you writing them.",
    "category": "typescript",
    "icon": "scan",
    "color": "violet",
    "tags": [
      "inference",
      "implicit",
      "types"
    ],
    "important": false,
    "intro": "How TypeScript figures out types without you writing them. Part of your Programming Knowledge Index — TypeScript.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Type Inference",
        "desc": "How TypeScript figures out types without you writing them. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: TypeScript",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "scan"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Type Inference connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "type-narrowing",
    "slug": "type-narrowing",
    "num": "05",
    "title": "Narrowing",
    "summary": "Refining union types inside if blocks — typeof, in, discriminated unions.",
    "category": "typescript",
    "icon": "filter",
    "color": "violet",
    "tags": [
      "narrowing",
      "guards",
      "unions"
    ],
    "important": false,
    "intro": "Refining union types inside if blocks — typeof, in, discriminated unions. Part of your Programming Knowledge Index — TypeScript.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Narrowing",
        "desc": "Refining union types inside if blocks — typeof, in, discriminated unions. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: TypeScript",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "filter"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Narrowing connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "type-safety-apis",
    "slug": "type-safety-apis",
    "num": "06",
    "title": "Type Safety in APIs",
    "summary": "Typing request/response shapes so frontend and backend agree.",
    "category": "typescript",
    "icon": "shield",
    "color": "violet",
    "tags": [
      "api",
      "dto",
      "zod",
      "validation"
    ],
    "important": false,
    "intro": "Typing request/response shapes so frontend and backend agree. Part of your Programming Knowledge Index — TypeScript.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Type Safety in APIs",
        "desc": "Typing request/response shapes so frontend and backend agree. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: TypeScript",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "shield"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Type Safety in APIs connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "jsx",
    "slug": "jsx",
    "num": "01",
    "title": "JSX",
    "summary": "HTML-like syntax inside JavaScript for describing UI.",
    "category": "react",
    "icon": "code",
    "color": "sky",
    "tags": [
      "jsx",
      "syntax",
      "components"
    ],
    "important": false,
    "intro": "HTML-like syntax inside JavaScript for describing UI. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding JSX",
        "desc": "HTML-like syntax inside JavaScript for describing UI. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "code"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. JSX connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "props",
    "slug": "props",
    "num": "02",
    "title": "Props",
    "summary": "Passing data from parent to child components — read-only inputs.",
    "category": "react",
    "icon": "arrow-right-left",
    "color": "sky",
    "tags": [
      "props",
      "parent",
      "child"
    ],
    "important": false,
    "intro": "Passing data from parent to child components — read-only inputs. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Props",
        "desc": "Passing data from parent to child components — read-only inputs. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "arrow-right-left"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Props connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "state",
    "slug": "state",
    "num": "03",
    "title": "State",
    "summary": "Data that changes over time and triggers re-renders when updated.",
    "category": "react",
    "icon": "toggle-left",
    "color": "sky",
    "tags": [
      "state",
      "useState",
      "reactive"
    ],
    "important": false,
    "intro": "Data that changes over time and triggers re-renders when updated. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding State",
        "desc": "Data that changes over time and triggers re-renders when updated. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "toggle-left"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. State connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "context-api",
    "slug": "context-api",
    "num": "04",
    "title": "Context API",
    "summary": "Sharing data across the tree without prop drilling.",
    "category": "react",
    "icon": "share-2",
    "color": "sky",
    "tags": [
      "context",
      "provider",
      "consumer"
    ],
    "important": false,
    "intro": "Sharing data across the tree without prop drilling. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Context API",
        "desc": "Sharing data across the tree without prop drilling. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "share-2"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Context API connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "server-client-components",
    "slug": "server-client-components",
    "num": "05",
    "title": "Server vs Client Components",
    "summary": "What runs on the server vs the browser in modern React apps.",
    "category": "react",
    "icon": "monitor-smartphone",
    "color": "sky",
    "tags": [
      "rsc",
      "server components",
      "client components"
    ],
    "important": false,
    "intro": "What runs on the server vs the browser in modern React apps. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Server vs Client Components",
        "desc": "What runs on the server vs the browser in modern React apps. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "monitor-smartphone"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Server vs Client Components connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "rendering-behavior",
    "slug": "rendering-behavior",
    "num": "06",
    "title": "Rendering Behavior",
    "summary": "When and why React re-renders — reconciliation and the virtual DOM.",
    "category": "react",
    "icon": "eye",
    "color": "sky",
    "tags": [
      "render",
      "reconciliation",
      "virtual dom"
    ],
    "important": false,
    "intro": "When and why React re-renders — reconciliation and the virtual DOM. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Rendering Behavior",
        "desc": "When and why React re-renders — reconciliation and the virtual DOM. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "eye"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Rendering Behavior connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "rerenders-optimization",
    "slug": "rerenders-optimization",
    "num": "07",
    "title": "Re-renders & Optimization",
    "summary": "useMemo, useCallback, React.memo — avoiding unnecessary work.",
    "category": "react",
    "icon": "zap",
    "color": "sky",
    "tags": [
      "memo",
      "usememo",
      "usecallback",
      "performance"
    ],
    "important": false,
    "intro": "useMemo, useCallback, React.memo — avoiding unnecessary work. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Re-renders & Optimization",
        "desc": "useMemo, useCallback, React.memo — avoiding unnecessary work. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "zap"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Re-renders & Optimization connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "react-hooks",
    "slug": "react-hooks",
    "num": "08",
    "title": "Hooks",
    "summary": "useEffect, useMemo, useCallback — attaching logic to components.",
    "category": "react",
    "icon": "anchor",
    "color": "sky",
    "tags": [
      "hooks",
      "useeffect",
      "usememo",
      "usecallback"
    ],
    "important": false,
    "intro": "useEffect, useMemo, useCallback — attaching logic to components. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Hooks",
        "desc": "useEffect, useMemo, useCallback — attaching logic to components. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "anchor"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Hooks connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "controlled-forms",
    "slug": "controlled-forms",
    "num": "09",
    "title": "Controlled vs Uncontrolled Forms",
    "summary": "React state drives inputs vs the DOM holds the value.",
    "category": "react",
    "icon": "form-input",
    "color": "sky",
    "tags": [
      "forms",
      "controlled",
      "uncontrolled",
      "refs"
    ],
    "important": false,
    "intro": "React state drives inputs vs the DOM holds the value. Part of your Programming Knowledge Index — React.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Controlled vs Uncontrolled Forms",
        "desc": "React state drives inputs vs the DOM holds the value. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: React",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "form-input"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Controlled vs Uncontrolled Forms connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "app-router",
    "slug": "app-router",
    "num": "01",
    "title": "App Router",
    "summary": "File-based routing with layouts, loading, and error boundaries.",
    "category": "nextjs",
    "icon": "route",
    "color": "indigo",
    "tags": [
      "app router",
      "routing",
      "layouts"
    ],
    "important": false,
    "intro": "File-based routing with layouts, loading, and error boundaries. Part of your Programming Knowledge Index — Next.js.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding App Router",
        "desc": "File-based routing with layouts, loading, and error boundaries. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Next.js",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "route"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. App Router connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "server-actions",
    "slug": "server-actions",
    "num": "02",
    "title": "Server Actions",
    "summary": "Call server functions directly from forms and components.",
    "category": "nextjs",
    "icon": "server",
    "color": "indigo",
    "tags": [
      "server actions",
      "mutations",
      "forms"
    ],
    "important": false,
    "intro": "Call server functions directly from forms and components. Part of your Programming Knowledge Index — Next.js.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Server Actions",
        "desc": "Call server functions directly from forms and components. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Next.js",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "server"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Server Actions connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "routing-layouts",
    "slug": "routing-layouts",
    "num": "03",
    "title": "Routing & Layouts",
    "summary": "Nested routes, shared layouts, and parallel routes.",
    "category": "nextjs",
    "icon": "layout-template",
    "color": "indigo",
    "tags": [
      "layouts",
      "nested",
      "routes"
    ],
    "important": false,
    "intro": "Nested routes, shared layouts, and parallel routes. Part of your Programming Knowledge Index — Next.js.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Routing & Layouts",
        "desc": "Nested routes, shared layouts, and parallel routes. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Next.js",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "layout-template"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Routing & Layouts connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "data-fetching",
    "slug": "data-fetching",
    "num": "04",
    "title": "Data Fetching Patterns",
    "summary": "fetch in Server Components, loading states, and streaming.",
    "category": "nextjs",
    "icon": "download",
    "color": "indigo",
    "tags": [
      "fetch",
      "ssr",
      "streaming"
    ],
    "important": false,
    "intro": "fetch in Server Components, loading states, and streaming. Part of your Programming Knowledge Index — Next.js.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Data Fetching Patterns",
        "desc": "fetch in Server Components, loading states, and streaming. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Next.js",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "download"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Data Fetching Patterns connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "caching-revalidation",
    "slug": "caching-revalidation",
    "num": "05",
    "title": "Caching & Revalidation",
    "summary": "Next.js cache layers, ISR, and on-demand revalidation.",
    "category": "nextjs",
    "icon": "hard-drive",
    "color": "indigo",
    "tags": [
      "cache",
      "isr",
      "revalidate"
    ],
    "important": false,
    "intro": "Next.js cache layers, ISR, and on-demand revalidation. Part of your Programming Knowledge Index — Next.js.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Caching & Revalidation",
        "desc": "Next.js cache layers, ISR, and on-demand revalidation. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Next.js",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "hard-drive"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Caching & Revalidation connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "nextjs-auth",
    "slug": "nextjs-auth",
    "num": "06",
    "title": "Authentication in Next.js",
    "summary": "NextAuth, Kinde, middleware — protecting routes and sessions.",
    "category": "nextjs",
    "icon": "key",
    "color": "indigo",
    "tags": [
      "nextauth",
      "kinde",
      "middleware",
      "auth"
    ],
    "important": false,
    "intro": "NextAuth, Kinde, middleware — protecting routes and sessions. Part of your Programming Knowledge Index — Next.js.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Authentication in Next.js",
        "desc": "NextAuth, Kinde, middleware — protecting routes and sessions. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Next.js",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "key"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Authentication in Next.js connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "api-routes-vs-actions",
    "slug": "api-routes-vs-actions",
    "num": "07",
    "title": "API Routes vs Server Actions",
    "summary": "When to use route handlers vs server actions for mutations.",
    "category": "nextjs",
    "icon": "git-compare",
    "color": "indigo",
    "tags": [
      "api routes",
      "server actions",
      "handlers"
    ],
    "important": false,
    "intro": "When to use route handlers vs server actions for mutations. Part of your Programming Knowledge Index — Next.js.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding API Routes vs Server Actions",
        "desc": "When to use route handlers vs server actions for mutations. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Next.js",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "git-compare"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. API Routes vs Server Actions connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "mvc-pattern",
    "slug": "mvc-pattern",
    "num": "01",
    "title": "MVC Pattern",
    "summary": "Model, View, Controller — separating data, UI, and request handling.",
    "category": "backend",
    "icon": "layout-grid",
    "color": "rose",
    "tags": [
      "mvc",
      "model",
      "view",
      "controller"
    ],
    "important": false,
    "intro": "Model, View, Controller — separating data, UI, and request handling. Part of your Programming Knowledge Index — Backend & Web Architecture.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding MVC Pattern",
        "desc": "Model, View, Controller — separating data, UI, and request handling. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Backend & Web Architecture",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "layout-grid"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. MVC Pattern connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "services-layer",
    "slug": "services-layer",
    "num": "02",
    "title": "Services Layer",
    "summary": "Business logic isolated from HTTP — reusable across controllers.",
    "category": "backend",
    "icon": "cog",
    "color": "rose",
    "tags": [
      "services",
      "business logic",
      "layer"
    ],
    "important": false,
    "intro": "Business logic isolated from HTTP — reusable across controllers. Part of your Programming Knowledge Index — Backend & Web Architecture.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Services Layer",
        "desc": "Business logic isolated from HTTP — reusable across controllers. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Backend & Web Architecture",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "cog"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Services Layer connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "controllers",
    "slug": "controllers",
    "num": "03",
    "title": "Controllers",
    "summary": "Thin handlers that parse requests and call services.",
    "category": "backend",
    "icon": "radio",
    "color": "rose",
    "tags": [
      "controllers",
      "handlers",
      "routes"
    ],
    "important": false,
    "intro": "Thin handlers that parse requests and call services. Part of your Programming Knowledge Index — Backend & Web Architecture.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Controllers",
        "desc": "Thin handlers that parse requests and call services. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Backend & Web Architecture",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "radio"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Controllers connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "dtos-mappers",
    "slug": "dtos-mappers",
    "num": "04",
    "title": "DTOs & Mappers",
    "summary": "Data Transfer Objects — shaping data between layers safely.",
    "category": "backend",
    "icon": "arrow-left-right",
    "color": "rose",
    "tags": [
      "dto",
      "mapper",
      "transform"
    ],
    "important": false,
    "intro": "Data Transfer Objects — shaping data between layers safely. Part of your Programming Knowledge Index — Backend & Web Architecture.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding DTOs & Mappers",
        "desc": "Data Transfer Objects — shaping data between layers safely. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Backend & Web Architecture",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "arrow-left-right"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. DTOs & Mappers connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "backend-validation",
    "slug": "backend-validation",
    "num": "05",
    "title": "Validation",
    "summary": "Rejecting bad input at the boundary before it hits business logic.",
    "category": "backend",
    "icon": "check-square",
    "color": "rose",
    "tags": [
      "validation",
      "zod",
      "joi",
      "schema"
    ],
    "important": false,
    "intro": "Rejecting bad input at the boundary before it hits business logic. Part of your Programming Knowledge Index — Backend & Web Architecture.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Validation",
        "desc": "Rejecting bad input at the boundary before it hits business logic. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Backend & Web Architecture",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "check-square"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Validation connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "backend-error-handling",
    "slug": "backend-error-handling",
    "num": "06",
    "title": "Error Handling",
    "summary": "Consistent error responses, status codes, and logging.",
    "category": "backend",
    "icon": "alert-triangle",
    "color": "rose",
    "tags": [
      "errors",
      "status codes",
      "logging"
    ],
    "important": false,
    "intro": "Consistent error responses, status codes, and logging. Part of your Programming Knowledge Index — Backend & Web Architecture.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Error Handling",
        "desc": "Consistent error responses, status codes, and logging. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Backend & Web Architecture",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "alert-triangle"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Error Handling connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "clean-architecture",
    "slug": "clean-architecture",
    "num": "07",
    "title": "Clean Architecture Basics",
    "summary": "Dependencies point inward — domain at the center, frameworks at the edge.",
    "category": "backend",
    "icon": "building",
    "color": "rose",
    "tags": [
      "clean architecture",
      "layers",
      "domain"
    ],
    "important": false,
    "intro": "Dependencies point inward — domain at the center, frameworks at the edge. Part of your Programming Knowledge Index — Backend & Web Architecture.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Clean Architecture Basics",
        "desc": "Dependencies point inward — domain at the center, frameworks at the edge. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Backend & Web Architecture",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "building"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Clean Architecture Basics connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "client-server-database",
    "slug": "client-server-database",
    "num": "08",
    "title": "Client, Server & Database",
    "summary": "The three layers behind every web app.",
    "category": "backend",
    "icon": "layers",
    "color": "rose",
    "tags": [
      "client",
      "server",
      "database"
    ],
    "important": false,
    "intro": "Before authentication, APIs, or caching — you need to understand who does what when you open a website. Every app you use follows this same three-layer pattern.",
    "steps": [
      {
        "kicker": "The big picture",
        "title": "Every web app has three layers",
        "desc": "When you use Instagram, Gmail, or any website, three separate pieces work together. The client shows the UI, the server runs the logic, and the database remembers everything.",
        "bullets": [
          "Client = what you see and click",
          "Server = business rules & security",
          "Database = users, posts, orders"
        ],
        "icon": "boxes",
        "visual": {
          "type": "stack",
          "layers": [
            "client",
            "server",
            "database"
          ]
        }
      },
      {
        "kicker": "Layer 1",
        "title": "The Client — your device",
        "desc": "The client is the browser or mobile app on your phone. It renders buttons and forms, captures clicks, and sends requests over the internet. It never stores the master copy of your data.",
        "bullets": [
          "Chrome, Safari, React Native apps are all clients",
          "Runs on the user's machine",
          "Asks the server for data and sends user actions"
        ],
        "icon": "monitor-smartphone",
        "visual": {
          "type": "stack",
          "layers": [
            "client"
          ],
          "highlight": "client"
        }
      },
      {
        "kicker": "Layer 2",
        "title": "The Server — the brain",
        "desc": "The server receives requests, validates them, applies business rules (\"is this user allowed?\"), and talks to the database. It's a program running on a remote machine — not on your laptop.",
        "bullets": [
          "Node.js, Django, Rails, Go APIs",
          "Never expose database directly to users",
          "Returns JSON or HTML back to the client"
        ],
        "icon": "server",
        "visual": {
          "type": "flow",
          "from": "client",
          "to": "server",
          "label": "GET /profile"
        }
      },
      {
        "kicker": "Layer 3",
        "title": "The Database — long-term memory",
        "desc": "The database stores users, passwords (hashed), posts, and settings. The server reads and writes here. Clients should never connect to the database directly — that would be a security disaster.",
        "bullets": [
          "PostgreSQL, MySQL, MongoDB, Redis",
          "Data survives server restarts",
          "Only the server has database credentials"
        ],
        "icon": "database",
        "visual": {
          "type": "flow",
          "from": "server",
          "to": "database",
          "label": "SELECT * FROM users"
        }
      },
      {
        "kicker": "Full round trip",
        "title": "Request down, response back up",
        "desc": "A typical flow: Client asks Server → Server queries Database → Server formats the answer → Client displays it. This pattern repeats billions of times per day across the internet.",
        "bullets": [
          "Request travels down the stack",
          "Response travels back up",
          "Same pattern for login, search, checkout"
        ],
        "icon": "repeat",
        "visual": {
          "type": "roundtrip",
          "path": [
            "client",
            "server",
            "database",
            "server",
            "client"
          ]
        }
      }
    ]
  },
  {
    "id": "http-rest",
    "slug": "http-rest",
    "num": "09",
    "title": "HTTP & REST APIs",
    "summary": "GET, POST, status codes, and REST resource design.",
    "category": "backend",
    "icon": "globe",
    "color": "rose",
    "tags": [
      "http",
      "rest",
      "api"
    ],
    "important": false,
    "intro": "HTTP is the language of the web. Every click, form submit, and API call uses it. REST organizes that language into predictable patterns most modern apps rely on.",
    "steps": [
      {
        "kicker": "Foundation",
        "title": "HTTP is the delivery protocol",
        "desc": "Every click, form submit, and API call uses HTTP. The client sends a request with a method (GET, POST, etc.) and URL. The server replies with a status code and body.",
        "bullets": [
          "GET = read data",
          "POST = create/send data",
          "Status 200 = success, 404 = not found"
        ],
        "icon": "send",
        "visual": {
          "type": "exchange",
          "mode": "intro"
        }
      },
      {
        "kicker": "Reading data",
        "title": "GET request — fetch a resource",
        "desc": "When you visit /api/users/42, the client sends GET /api/users/42. The server looks up user 42 and returns JSON. GET requests should not change data.",
        "bullets": [
          "Idempotent — safe to repeat",
          "No request body needed",
          "Cached by browsers and CDNs"
        ],
        "icon": "download",
        "visual": {
          "type": "exchange",
          "mode": "request",
          "label": "GET /users/42"
        }
      },
      {
        "kicker": "Server replies",
        "title": "Response comes back on its own lane",
        "desc": "The server responds with HTTP 200 OK and a JSON body. Responses travel separately from requests — think of two one-way streets instead of one confused road.",
        "bullets": [
          "Status line: HTTP/1.1 200 OK",
          "Headers: Content-Type: application/json",
          "Body: { \"id\": 42, \"name\": \"Ada\" }"
        ],
        "icon": "reply",
        "visual": {
          "type": "exchange",
          "mode": "response",
          "label": "200 { id: 42 }"
        }
      },
      {
        "kicker": "Writing data",
        "title": "POST request — create something new",
        "desc": "Signing up, placing an order, or posting a comment uses POST. The client sends data in the body. The server validates it, saves to the database, and returns the created resource.",
        "bullets": [
          "POST /api/orders with JSON body",
          "Server returns 201 Created",
          "Not cached — changes state"
        ],
        "icon": "upload",
        "visual": {
          "type": "exchange",
          "mode": "request",
          "label": "POST { item: \"book\" }"
        }
      },
      {
        "kicker": "REST pattern",
        "title": "Resources + HTTP methods = REST API",
        "desc": "REST organizes APIs around nouns (users, orders) not verbs. GET /users, POST /users, PUT /users/1, DELETE /users/1 — predictable URLs with standard HTTP semantics.",
        "bullets": [
          "Nouns in URLs, verbs in HTTP methods",
          "Stateless — each request is independent",
          "Foundation for most modern APIs"
        ],
        "icon": "route",
        "visual": {
          "type": "exchange",
          "mode": "full",
          "reqLabel": "GET /orders",
          "resLabel": "[ {...}, {...} ]"
        }
      }
    ]
  },
  {
    "id": "caching",
    "slug": "caching",
    "num": "10",
    "title": "Caching",
    "summary": "Cache hits, misses, CDNs, and invalidation.",
    "category": "backend",
    "icon": "zap",
    "color": "rose",
    "tags": [
      "cache",
      "redis",
      "cdn"
    ],
    "important": false,
    "intro": "Fetching the same data from the database every time is slow and expensive. Caching stores a copy of the answer so identical requests finish almost instantly.",
    "steps": [
      {
        "kicker": "Why cache?",
        "title": "Repeated work is wasteful",
        "desc": "Fetching the same product page from the database every time is slow and expensive. Caching stores a copy of the answer so the next identical request finishes in milliseconds.",
        "bullets": [
          "RAM is 100× faster than disk",
          "Reduces database load",
          "Used in browsers, CDNs, Redis"
        ],
        "icon": "timer",
        "visual": {
          "type": "cache",
          "mode": "overview"
        }
      },
      {
        "kicker": "Cache HIT",
        "title": "Fast path — answer already stored",
        "desc": "The client asks for /products/1. The cache already has that response. It returns immediately — the server and database are never touched.",
        "bullets": [
          "Typical latency: 1–5 ms",
          "Green path = cache hit",
          "Happens on popular, repeated requests"
        ],
        "icon": "check-circle",
        "visual": {
          "type": "cache",
          "mode": "hit"
        }
      },
      {
        "kicker": "Cache MISS",
        "title": "Slow path — must fetch from origin",
        "desc": "First visit or expired entry: cache has nothing. Request falls through to the server, which queries the database, builds the response, and the cache stores a copy.",
        "bullets": [
          "Orange path = cache miss",
          "Slower but populates cache",
          "TTL decides when entry expires"
        ],
        "icon": "x-circle",
        "visual": {
          "type": "cache",
          "mode": "miss"
        }
      },
      {
        "kicker": "CDN edge",
        "title": "Cache closer to users",
        "desc": "A CDN puts cache servers in cities worldwide. A user in Tokyo gets cached images from Tokyo — not from a server in Virginia.",
        "bullets": [
          "Geographic distribution",
          "Great for static assets (images, JS)",
          "Cloudflare, Fastly, Akamai"
        ],
        "icon": "map-pin",
        "visual": {
          "type": "cache",
          "mode": "cdn"
        }
      },
      {
        "kicker": "Invalidation",
        "title": "Stale data is dangerous",
        "desc": "When product price changes, you must invalidate or update the cache. Strategies: TTL expiry, explicit delete on write, or cache-aside pattern.",
        "bullets": [
          "Cache-aside: app reads cache, on miss loads DB",
          "Write-through: update cache + DB together",
          "Choose TTL based on freshness needs"
        ],
        "icon": "refresh-cw",
        "visual": {
          "type": "cache",
          "mode": "invalidate"
        }
      }
    ]
  },
  {
    "id": "load-balancing",
    "slug": "load-balancing",
    "num": "11",
    "title": "Load Balancing",
    "summary": "Distributing traffic across server pools.",
    "category": "backend",
    "icon": "share-2",
    "color": "rose",
    "tags": [
      "load balancer",
      "scaling"
    ],
    "important": false,
    "intro": "A viral post or Black Friday sale can send thousands of requests per second. Load balancers spread that traffic across a pool of servers so your app stays fast and available.",
    "steps": [
      {
        "kicker": "The problem",
        "title": "Traffic spikes overwhelm one server",
        "desc": "A viral post or Black Friday sale can send thousands of requests per second. A single server has limited CPU and memory — it will slow down or crash under load.",
        "bullets": [
          "Vertical scaling has limits",
          "Single point of failure",
          "Need horizontal scaling"
        ],
        "icon": "alert-triangle",
        "visual": {
          "type": "fanout",
          "mode": "single"
        }
      },
      {
        "kicker": "The solution",
        "title": "Load balancer as traffic director",
        "desc": "A load balancer sits between clients and servers. Clients only know one address. The balancer forwards each request to a healthy backend server.",
        "bullets": [
          "AWS ALB, NGINX, HAProxy",
          "Hides multiple servers behind one URL",
          "Enables zero-downtime deploys"
        ],
        "icon": "git-branch",
        "visual": {
          "type": "fanout",
          "mode": "balancer"
        }
      },
      {
        "kicker": "Server pool",
        "title": "Multiple identical servers",
        "desc": "You run 3, 10, or 100 copies of the same app. Each handles requests independently. If one dies, others keep serving.",
        "bullets": [
          "Stateless servers scale easily",
          "Auto-scaling adds/removes instances",
          "Same code, shared database"
        ],
        "icon": "server",
        "visual": {
          "type": "fanout",
          "mode": "pool"
        }
      },
      {
        "kicker": "Round robin",
        "title": "Distribute requests evenly",
        "desc": "Round robin sends request 1 to Server 1, request 2 to Server 2, request 3 to Server 3, then back to Server 1. Simple and fair for equal-capacity servers.",
        "bullets": [
          "Request N goes to server (N % 3)",
          "Other algorithms: least connections, IP hash",
          "Fair distribution across pool"
        ],
        "icon": "shuffle",
        "visual": {
          "type": "fanout",
          "mode": "roundrobin"
        }
      },
      {
        "kicker": "Health checks",
        "title": "Only send traffic to healthy servers",
        "desc": "The balancer pings each server every few seconds. If Server 2 stops responding, it's removed from the pool automatically. When it recovers, traffic returns.",
        "bullets": [
          "HTTP /health endpoint",
          "Prevents cascading failures",
          "Enables rolling deployments"
        ],
        "icon": "heart-pulse",
        "visual": {
          "type": "fanout",
          "mode": "health"
        }
      }
    ]
  },
  {
    "id": "websockets",
    "slug": "websockets",
    "num": "12",
    "title": "WebSockets",
    "summary": "Real-time push without polling.",
    "category": "backend",
    "icon": "radio",
    "color": "rose",
    "tags": [
      "websocket",
      "real-time"
    ],
    "important": false,
    "intro": "Plain HTTP makes the client ask \"any updates?\" over and over. WebSockets open a persistent channel so the server can push events the moment they happen.",
    "steps": [
      {
        "kicker": "The problem",
        "title": "Polling wastes requests",
        "desc": "With plain HTTP, a chat app must ask \"any new messages?\" every second. Thousands of users × constant polling = huge server load and delayed updates.",
        "bullets": [
          "Client repeatedly sends GET /messages",
          "Most responses are empty",
          "Battery and bandwidth drain on mobile"
        ],
        "icon": "refresh-ccw",
        "visual": {
          "type": "realtime",
          "mode": "polling"
        }
      },
      {
        "kicker": "Upgrade",
        "title": "WebSocket opens a persistent channel",
        "desc": "The client sends an HTTP Upgrade request. If the server agrees, the TCP connection stays open and switches to the WebSocket protocol — a two-way pipe.",
        "bullets": [
          "Starts as HTTP, upgrades to WS",
          "Connection stays open for hours",
          "ws:// or wss:// (secure) URLs"
        ],
        "icon": "plug",
        "visual": {
          "type": "realtime",
          "mode": "connect"
        }
      },
      {
        "kicker": "More clients",
        "title": "Many clients, one server",
        "desc": "Each browser or app opens its own WebSocket to the server. The server tracks every open connection in memory (or Redis pub/sub at scale).",
        "bullets": [
          "Each tab = one connection",
          "Server maps connection → user ID",
          "Heartbeats detect dead connections"
        ],
        "icon": "users",
        "visual": {
          "type": "realtime",
          "mode": "multi"
        }
      },
      {
        "kicker": "Push",
        "title": "Server broadcasts instantly",
        "desc": "When someone sends a chat message, the server pushes the event to every connected client immediately — no waiting for the next poll.",
        "bullets": [
          "Zero polling delay",
          "Perfect for chat, games, live dashboards",
          "One event → N clients"
        ],
        "icon": "megaphone",
        "visual": {
          "type": "realtime",
          "mode": "broadcast"
        }
      },
      {
        "kicker": "vs HTTP",
        "title": "When to use WebSockets",
        "desc": "Use WebSockets when the server needs to push frequently. Stick with HTTP/REST for CRUD pages, file uploads, and rare updates — simpler and cache-friendly.",
        "bullets": [
          "WebSockets: chat, live sports, collaborative docs",
          "HTTP: forms, REST APIs, page loads",
          "Often both in the same app"
        ],
        "icon": "scale",
        "visual": {
          "type": "realtime",
          "mode": "compare"
        }
      }
    ]
  },
  {
    "id": "crud-operations",
    "slug": "crud-operations",
    "num": "01",
    "title": "CRUD Operations",
    "summary": "Create, Read, Update, Delete — the four basic data operations.",
    "category": "database",
    "icon": "pen-line",
    "color": "emerald",
    "tags": [
      "crud",
      "create",
      "read",
      "update",
      "delete"
    ],
    "important": false,
    "intro": "Create, Read, Update, Delete — the four basic data operations. Part of your Programming Knowledge Index — Database (MongoDB & Concepts).",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding CRUD Operations",
        "desc": "Create, Read, Update, Delete — the four basic data operations. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Database (MongoDB & Concepts)",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "pen-line"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. CRUD Operations connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "schema-design",
    "slug": "schema-design",
    "num": "02",
    "title": "Schema Design",
    "summary": "Structuring documents and collections for your app's queries.",
    "category": "database",
    "icon": "table",
    "color": "emerald",
    "tags": [
      "schema",
      "mongodb",
      "design"
    ],
    "important": false,
    "intro": "Structuring documents and collections for your app's queries. Part of your Programming Knowledge Index — Database (MongoDB & Concepts).",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Schema Design",
        "desc": "Structuring documents and collections for your app's queries. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Database (MongoDB & Concepts)",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "table"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Schema Design connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "database-relations",
    "slug": "database-relations",
    "num": "03",
    "title": "Relations in NoSQL",
    "summary": "Embedding vs referencing — modeling relationships without SQL joins.",
    "category": "database",
    "icon": "link",
    "color": "emerald",
    "tags": [
      "relations",
      "embed",
      "reference"
    ],
    "important": false,
    "intro": "Embedding vs referencing — modeling relationships without SQL joins. Part of your Programming Knowledge Index — Database (MongoDB & Concepts).",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Relations in NoSQL",
        "desc": "Embedding vs referencing — modeling relationships without SQL joins. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Database (MongoDB & Concepts)",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "link"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Relations in NoSQL connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "indexing",
    "slug": "indexing",
    "num": "04",
    "title": "Indexing",
    "summary": "Speeding up queries with indexes — and the cost of maintaining them.",
    "category": "database",
    "icon": "search",
    "color": "emerald",
    "tags": [
      "index",
      "performance",
      "query"
    ],
    "important": false,
    "intro": "Speeding up queries with indexes — and the cost of maintaining them. Part of your Programming Knowledge Index — Database (MongoDB & Concepts).",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Indexing",
        "desc": "Speeding up queries with indexes — and the cost of maintaining them. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Database (MongoDB & Concepts)",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "search"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Indexing connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "aggregation",
    "slug": "aggregation",
    "num": "05",
    "title": "Aggregation Basics",
    "summary": "Pipeline stages for grouping, filtering, and transforming data.",
    "category": "database",
    "icon": "bar-chart",
    "color": "emerald",
    "tags": [
      "aggregation",
      "pipeline",
      "mongodb"
    ],
    "important": false,
    "intro": "Pipeline stages for grouping, filtering, and transforming data. Part of your Programming Knowledge Index — Database (MongoDB & Concepts).",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Aggregation Basics",
        "desc": "Pipeline stages for grouping, filtering, and transforming data. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Database (MongoDB & Concepts)",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "bar-chart"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Aggregation Basics connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "normalization",
    "slug": "normalization",
    "num": "06",
    "title": "Normalization vs Denormalization",
    "summary": "Splitting data for consistency vs duplicating for read speed.",
    "category": "database",
    "icon": "scale",
    "color": "emerald",
    "tags": [
      "normalization",
      "denormalization",
      "trade-offs"
    ],
    "important": false,
    "intro": "Splitting data for consistency vs duplicating for read speed. Part of your Programming Knowledge Index — Database (MongoDB & Concepts).",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Normalization vs Denormalization",
        "desc": "Splitting data for consistency vs duplicating for read speed. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Database (MongoDB & Concepts)",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "scale"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Normalization vs Denormalization connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "formdata",
    "slug": "formdata",
    "num": "01",
    "title": "FormData",
    "summary": "Browser API for sending forms including files and fields.",
    "category": "forms",
    "icon": "file-input",
    "color": "orange",
    "tags": [
      "formdata",
      "forms",
      "multipart"
    ],
    "important": false,
    "intro": "Browser API for sending forms including files and fields. Part of your Programming Knowledge Index — Forms & Data Flow.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding FormData",
        "desc": "Browser API for sending forms including files and fields. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Forms & Data Flow",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "file-input"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. FormData connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "form-validation",
    "slug": "form-validation",
    "num": "02",
    "title": "Validation (Client + Server)",
    "summary": "Never trust the client — validate on both sides.",
    "category": "forms",
    "icon": "shield-check",
    "color": "orange",
    "tags": [
      "validation",
      "client",
      "server",
      "zod"
    ],
    "important": false,
    "intro": "Never trust the client — validate on both sides. Part of your Programming Knowledge Index — Forms & Data Flow.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Validation (Client + Server)",
        "desc": "Never trust the client — validate on both sides. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Forms & Data Flow",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "shield-check"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Validation (Client + Server) connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "file-uploads",
    "slug": "file-uploads",
    "num": "03",
    "title": "File Uploads",
    "summary": "Multipart forms, storage, and size limits.",
    "category": "forms",
    "icon": "upload",
    "color": "orange",
    "tags": [
      "upload",
      "files",
      "storage",
      "s3"
    ],
    "important": false,
    "intro": "Multipart forms, storage, and size limits. Part of your Programming Knowledge Index — Forms & Data Flow.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding File Uploads",
        "desc": "Multipart forms, storage, and size limits. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Forms & Data Flow",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "upload"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. File Uploads connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "api-communication",
    "slug": "api-communication",
    "num": "04",
    "title": "API Communication",
    "summary": "fetch, axios, and handling responses from your backend.",
    "category": "forms",
    "icon": "send",
    "color": "orange",
    "tags": [
      "fetch",
      "axios",
      "api",
      "json"
    ],
    "important": false,
    "intro": "fetch, axios, and handling responses from your backend. Part of your Programming Knowledge Index — Forms & Data Flow.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding API Communication",
        "desc": "fetch, axios, and handling responses from your backend. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Forms & Data Flow",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "send"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. API Communication connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "state-syncing",
    "slug": "state-syncing",
    "num": "05",
    "title": "State Syncing",
    "summary": "Keeping UI state aligned with server data after mutations.",
    "category": "forms",
    "icon": "refresh-cw",
    "color": "orange",
    "tags": [
      "state",
      "sync",
      "optimistic",
      "revalidate"
    ],
    "important": false,
    "intro": "Keeping UI state aligned with server data after mutations. Part of your Programming Knowledge Index — Forms & Data Flow.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding State Syncing",
        "desc": "Keeping UI state aligned with server data after mutations. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Forms & Data Flow",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "refresh-cw"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. State Syncing connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "sessions-vs-jwt",
    "slug": "sessions-vs-jwt",
    "num": "01",
    "title": "Sessions vs JWT",
    "summary": "Server remembers you vs client carries signed proof.",
    "category": "auth-security",
    "icon": "git-compare",
    "color": "lime",
    "tags": [
      "session",
      "jwt",
      "cookie",
      "token"
    ],
    "important": false,
    "intro": "Server remembers you vs client carries signed proof. Part of your Programming Knowledge Index — Authentication & Security.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Sessions vs JWT",
        "desc": "Server remembers you vs client carries signed proof. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Authentication & Security",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "git-compare"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Sessions vs JWT connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "authentication",
    "slug": "authentication",
    "num": "02",
    "title": "Authentication Deep Dive",
    "summary": "Sessions, JWT, OAuth flows step by step.",
    "category": "auth-security",
    "icon": "shield-check",
    "color": "lime",
    "tags": [
      "auth",
      "login",
      "oauth"
    ],
    "important": false,
    "intro": "Authentication answers one question: \"Who is making this request?\" After login, the real design choice is where that proof lives — on the server or with the client.",
    "sections": [
      {
        "id": "overview",
        "title": "Two Ways to Prove Identity",
        "icon": "git-compare",
        "steps": [
          {
            "kicker": "The big picture",
            "title": "What is authentication?",
            "desc": "Authentication answers one simple question: \"Who is making this request?\" Every time you log into a website, open a mobile app, or call an API, something needs to verify your identity.",
            "bullets": [
              "Authentication = proving who you are",
              "Authorization = what you're allowed to do",
              "Session-based: server remembers you",
              "Token-based (JWT): client carries proof"
            ],
            "icon": "help-circle"
          },
          {
            "kicker": "Approach A",
            "title": "Session-based — the server remembers you",
            "desc": "Think of a coat-check at a restaurant. You hand over your coat (password), the attendant stores it in the back room (database), and gives you a small ticket number (session ID in a cookie).",
            "bullets": [
              "Browser stores a cookie with a random session ID",
              "Server stores your identity in a database",
              "Every request: server looks up the session ID",
              "Best for: traditional websites, server-rendered pages"
            ],
            "icon": "cookie",
            "visual": {
              "type": "nodes",
              "nodes": [
                "Browser",
                "Web Server",
                "Session Store"
              ]
            }
          },
          {
            "kicker": "Approach B",
            "title": "JWT token — the client carries proof",
            "desc": "Think of a signed letter from the government. After verifying your identity once, the server writes your name and role on a letter, seals it with a secret stamp, and hands it to you.",
            "bullets": [
              "Client stores the full JWT token",
              "Server stores nothing about the logged-in user",
              "Every request: server verifies the signature",
              "Best for: SPAs, mobile apps, microservices"
            ],
            "icon": "key-round",
            "visual": {
              "type": "nodes",
              "nodes": [
                "Client App",
                "Auth Server",
                "API Server"
              ]
            }
          }
        ]
      },
      {
        "id": "session",
        "title": "Session-Based Auth Walkthrough",
        "icon": "cookie",
        "steps": [
          {
            "kicker": "Login request",
            "title": "User sends username & password",
            "desc": "The user fills a login form. The browser sends a POST request with credentials over HTTPS. This is the only time the password travels during the session.",
            "bullets": [
              "Password sent once — never stored in the cookie",
              "HTTPS encrypts the request",
              "Server hash-compares against its database"
            ],
            "icon": "log-in",
            "code": "POST /login\n{ \"email\": \"you@mail.com\", \"password\": \"••••••\" }"
          },
          {
            "kicker": "Validation",
            "title": "Server creates a session record",
            "desc": "If credentials are valid, the server generates a random session ID and saves user data in a session store. The password is discarded; only the session ID matters from here.",
            "bullets": [
              "Session ID is cryptographically random",
              "User data lives on the server",
              "Redis is common for fast lookups"
            ],
            "icon": "database",
            "code": "Session Store:\n  \"abc123\" → { userId: 42, role: \"admin\" }"
          },
          {
            "kicker": "Cookie handshake",
            "title": "Browser receives a session cookie",
            "desc": "The server responds with Set-Cookie. The browser stores it and attaches it to every future request. The cookie contains only the session ID — not the password.",
            "bullets": [
              "HttpOnly prevents JavaScript reading the cookie",
              "Secure flag = HTTPS only",
              "SameSite reduces CSRF risk"
            ],
            "icon": "cookie",
            "code": "Set-Cookie: sid=abc123; HttpOnly; Secure; SameSite=Lax"
          },
          {
            "kicker": "After login",
            "title": "Cookie proves identity automatically",
            "desc": "On every visit, the browser silently attaches the cookie. The server looks up the session and knows who is asking — no password needed again.",
            "bullets": [
              "Browser sends cookie automatically",
              "Server can invalidate instantly (force logout)",
              "Scaling requires shared session store"
            ],
            "icon": "shield",
            "code": "GET /dashboard\nCookie: sid=abc123\n→ userId: 42 ✓"
          }
        ]
      },
      {
        "id": "jwt",
        "title": "JWT Token Auth Walkthrough",
        "icon": "key-round",
        "steps": [
          {
            "kicker": "Initial auth",
            "title": "Client sends credentials to Auth Server",
            "desc": "The user logs in once with email and password. Instead of a server-side record, the Auth Server packages identity into a self-contained token.",
            "bullets": [
              "Auth Server can be dedicated or your /login endpoint",
              "Credentials validated as usual",
              "Difference is what comes back"
            ],
            "icon": "log-in",
            "code": "POST /auth/login\n{ \"email\": \"you@mail.com\", \"password\": \"••••••\" }"
          },
          {
            "kicker": "Token creation",
            "title": "Server builds & signs a JWT",
            "desc": "The server creates a JSON object with claims — user ID, role, expiry — then signs it. Result: header.payload.signature.",
            "bullets": [
              "Header: algorithm (HS256)",
              "Payload: user data + exp",
              "Signature: proves no tampering"
            ],
            "icon": "file-signature",
            "code": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjQyfQ.SflKxw..."
          },
          {
            "kicker": "Storage",
            "title": "App saves the token locally",
            "desc": "The client stores the JWT in memory, localStorage, or an HttpOnly cookie. No server-side session exists. The token IS the proof until it expires.",
            "bullets": [
              "Memory: lost on refresh (often + refresh tokens)",
              "localStorage: persists but XSS risk",
              "Short expiry + refresh token is common"
            ],
            "icon": "save",
            "code": "localStorage.setItem(\"token\", \"eyJhbGci...\")"
          },
          {
            "kicker": "Verification",
            "title": "Token sent with every API call",
            "desc": "Each request adds Authorization: Bearer <token>. The API verifies the signature — no database call needed.",
            "bullets": [
              "Any service with the secret can verify",
              "No central session store",
              "Revoking requires blocklist or short lifetime"
            ],
            "icon": "badge-check",
            "code": "GET /api/orders\nAuthorization: Bearer eyJhbGci..."
          }
        ]
      }
    ],
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Authentication Deep Dive",
        "desc": "Sessions, JWT, OAuth flows step by step. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Authentication & Security",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "shield-check"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Authentication Deep Dive connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "oauth",
    "slug": "oauth",
    "num": "03",
    "title": "OAuth 2.0",
    "summary": "Sign in with Google/GitHub — delegated identity without passwords.",
    "category": "auth-security",
    "icon": "fingerprint",
    "color": "lime",
    "tags": [
      "oauth",
      "google",
      "kinde",
      "social login"
    ],
    "important": false,
    "intro": "Sign in with Google/GitHub — delegated identity without passwords. Part of your Programming Knowledge Index — Authentication & Security.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding OAuth 2.0",
        "desc": "Sign in with Google/GitHub — delegated identity without passwords. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Authentication & Security",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "fingerprint"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. OAuth 2.0 connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "cookies",
    "slug": "cookies",
    "num": "04",
    "title": "Cookies",
    "summary": "HttpOnly, Secure, SameSite — how browsers store session data.",
    "category": "auth-security",
    "icon": "cookie",
    "color": "lime",
    "tags": [
      "cookies",
      "httponly",
      "secure",
      "samesite"
    ],
    "important": false,
    "intro": "HttpOnly, Secure, SameSite — how browsers store session data. Part of your Programming Knowledge Index — Authentication & Security.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Cookies",
        "desc": "HttpOnly, Secure, SameSite — how browsers store session data. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Authentication & Security",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "cookie"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Cookies connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "protected-routes",
    "slug": "protected-routes",
    "num": "05",
    "title": "Protected Routes",
    "summary": "Middleware and guards that block unauthenticated access.",
    "category": "auth-security",
    "icon": "lock",
    "color": "lime",
    "tags": [
      "middleware",
      "protected",
      "routes",
      "auth"
    ],
    "important": false,
    "intro": "Middleware and guards that block unauthenticated access. Part of your Programming Knowledge Index — Authentication & Security.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Protected Routes",
        "desc": "Middleware and guards that block unauthenticated access. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Authentication & Security",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "lock"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Protected Routes connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "xss-csrf",
    "slug": "xss-csrf",
    "num": "06",
    "title": "XSS & CSRF Basics",
    "summary": "Cross-site scripting and request forgery — common web attacks.",
    "category": "auth-security",
    "icon": "shield-alert",
    "color": "lime",
    "tags": [
      "xss",
      "csrf",
      "security",
      "attacks"
    ],
    "important": false,
    "intro": "Cross-site scripting and request forgery — common web attacks. Part of your Programming Knowledge Index — Authentication & Security.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding XSS & CSRF Basics",
        "desc": "Cross-site scripting and request forgery — common web attacks. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Authentication & Security",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "shield-alert"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. XSS & CSRF Basics connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "encryption",
    "slug": "encryption",
    "num": "07",
    "title": "Encryption & HTTPS",
    "summary": "TLS, certificates, and data in transit.",
    "category": "auth-security",
    "icon": "lock",
    "color": "lime",
    "tags": [
      "https",
      "tls",
      "encryption"
    ],
    "important": false,
    "intro": "Without encryption, anyone on the network can read your passwords and cookies. HTTPS wraps HTTP inside TLS so data stays private between client and server.",
    "steps": [
      {
        "kicker": "Plain HTTP",
        "title": "Data travels in readable text",
        "desc": "Without encryption, HTTP sends headers and body as plain text. Anyone on the same Wi‑Fi — or any router along the path — can read passwords, cookies, and personal data.",
        "bullets": [
          "URL and body visible on the network",
          "No lock icon in the browser",
          "Never send passwords over plain HTTP"
        ],
        "icon": "eye",
        "visual": {
          "type": "tunnel",
          "mode": "plain"
        }
      },
      {
        "kicker": "HTTPS",
        "title": "TLS wraps the connection",
        "desc": "HTTPS = HTTP inside TLS. The browser and server negotiate keys, then all traffic is encrypted. The URL path is still visible, but the body and cookies are protected.",
        "bullets": [
          "Padlock icon in the address bar",
          "Uses port 443 instead of 80",
          "Certificates prove server identity"
        ],
        "icon": "lock",
        "visual": {
          "type": "tunnel",
          "mode": "secure"
        }
      },
      {
        "kicker": "Handshake",
        "title": "TLS handshake establishes keys",
        "desc": "Before data flows, client and server perform a handshake: agree on cipher suites, verify the certificate, and exchange session keys.",
        "bullets": [
          "Client Hello → Server Hello → Certificate",
          "Session keys are symmetric (fast)",
          "Happens once per connection"
        ],
        "icon": "handshake",
        "visual": {
          "type": "tunnel",
          "mode": "handshake"
        }
      },
      {
        "kicker": "In transit",
        "title": "Encrypted bytes cross the internet",
        "desc": "The encrypted payload travels through ISPs and routers. Without the private key, attackers only see random-looking bytes.",
        "bullets": [
          "End-to-end encryption between client & server",
          "Forward secrecy with TLS 1.3",
          "HSTS forces HTTPS in browsers"
        ],
        "icon": "shield-off",
        "visual": {
          "type": "tunnel",
          "mode": "transit"
        }
      },
      {
        "kicker": "Decrypted",
        "title": "Server reads the original request",
        "desc": "Only the server with the matching private key decrypts the request, processes it, and encrypts the response. The round trip stays protected.",
        "bullets": [
          "Encrypt outbound, decrypt inbound",
          "Same tunnel for request and response",
          "Foundation of all secure web apps"
        ],
        "icon": "unlock",
        "visual": {
          "type": "tunnel",
          "mode": "decrypt"
        }
      }
    ]
  },
  {
    "id": "responsive-design",
    "slug": "responsive-design",
    "num": "01",
    "title": "Responsive Design",
    "summary": "Layouts that adapt from mobile to desktop.",
    "category": "ui-ux",
    "icon": "smartphone",
    "color": "fuchsia",
    "tags": [
      "responsive",
      "mobile",
      "breakpoints",
      "css"
    ],
    "important": false,
    "intro": "Layouts that adapt from mobile to desktop. Part of your Programming Knowledge Index — UI / UX & Product Thinking.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Responsive Design",
        "desc": "Layouts that adapt from mobile to desktop. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: UI / UX & Product Thinking",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "smartphone"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Responsive Design connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "component-design",
    "slug": "component-design",
    "num": "02",
    "title": "Component Design",
    "summary": "Building small, focused UI pieces with clear responsibilities.",
    "category": "ui-ux",
    "icon": "component",
    "color": "fuchsia",
    "tags": [
      "components",
      "design",
      "ui"
    ],
    "important": false,
    "intro": "Building small, focused UI pieces with clear responsibilities. Part of your Programming Knowledge Index — UI / UX & Product Thinking.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Component Design",
        "desc": "Building small, focused UI pieces with clear responsibilities. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: UI / UX & Product Thinking",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "component"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Component Design connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "reusability",
    "slug": "reusability",
    "num": "03",
    "title": "Reusability",
    "summary": "DRY components and design tokens across your product.",
    "category": "ui-ux",
    "icon": "copy",
    "color": "fuchsia",
    "tags": [
      "reusable",
      "dry",
      "tokens"
    ],
    "important": false,
    "intro": "DRY components and design tokens across your product. Part of your Programming Knowledge Index — UI / UX & Product Thinking.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Reusability",
        "desc": "DRY components and design tokens across your product. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: UI / UX & Product Thinking",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "copy"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Reusability connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "accessibility",
    "slug": "accessibility",
    "num": "04",
    "title": "Accessibility Basics",
    "summary": "Semantic HTML, ARIA, keyboard nav — usable by everyone.",
    "category": "ui-ux",
    "icon": "accessibility",
    "color": "fuchsia",
    "tags": [
      "a11y",
      "aria",
      "accessibility",
      "wcag"
    ],
    "important": false,
    "intro": "Semantic HTML, ARIA, keyboard nav — usable by everyone. Part of your Programming Knowledge Index — UI / UX & Product Thinking.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Accessibility Basics",
        "desc": "Semantic HTML, ARIA, keyboard nav — usable by everyone. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: UI / UX & Product Thinking",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "accessibility"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Accessibility Basics connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "ux-flow",
    "slug": "ux-flow",
    "num": "05",
    "title": "UX Flow",
    "summary": "User journeys, onboarding, and reducing friction in your app.",
    "category": "ui-ux",
    "icon": "map",
    "color": "fuchsia",
    "tags": [
      "ux",
      "flow",
      "onboarding",
      "product"
    ],
    "important": false,
    "intro": "User journeys, onboarding, and reducing friction in your app. Part of your Programming Knowledge Index — UI / UX & Product Thinking.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding UX Flow",
        "desc": "User journeys, onboarding, and reducing friction in your app. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: UI / UX & Product Thinking",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "map"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. UX Flow connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "threejs-basics",
    "slug": "threejs-basics",
    "num": "01",
    "title": "Three.js Basics",
    "summary": "WebGL made approachable — 3D in the browser.",
    "category": "threejs",
    "icon": "box",
    "color": "purple",
    "tags": [
      "three.js",
      "webgl",
      "3d"
    ],
    "important": false,
    "intro": "WebGL made approachable — 3D in the browser. Part of your Programming Knowledge Index — 3D & Advanced Frontend.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Three.js Basics",
        "desc": "WebGL made approachable — 3D in the browser. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: 3D & Advanced Frontend",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "box"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Three.js Basics connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "scene-camera-renderer",
    "slug": "scene-camera-renderer",
    "num": "02",
    "title": "Scene, Camera & Renderer",
    "summary": "The three objects every Three.js app needs.",
    "category": "threejs",
    "icon": "camera",
    "color": "purple",
    "tags": [
      "scene",
      "camera",
      "renderer"
    ],
    "important": false,
    "intro": "The three objects every Three.js app needs. Part of your Programming Knowledge Index — 3D & Advanced Frontend.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Scene, Camera & Renderer",
        "desc": "The three objects every Three.js app needs. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: 3D & Advanced Frontend",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "camera"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Scene, Camera & Renderer connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "gltf-models",
    "slug": "gltf-models",
    "num": "03",
    "title": "Models (GLTF & Blender)",
    "summary": "Loading and displaying 3D models exported from Blender.",
    "category": "threejs",
    "icon": "file-box",
    "color": "purple",
    "tags": [
      "gltf",
      "blender",
      "models",
      "import"
    ],
    "important": false,
    "intro": "Loading and displaying 3D models exported from Blender. Part of your Programming Knowledge Index — 3D & Advanced Frontend.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Models (GLTF & Blender)",
        "desc": "Loading and displaying 3D models exported from Blender. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: 3D & Advanced Frontend",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "file-box"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Models (GLTF & Blender) connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "threejs-animations",
    "slug": "threejs-animations",
    "num": "04",
    "title": "Animations",
    "summary": "Keyframes, mixers, and animating objects in the scene.",
    "category": "threejs",
    "icon": "play",
    "color": "purple",
    "tags": [
      "animation",
      "keyframes",
      "mixer"
    ],
    "important": false,
    "intro": "Keyframes, mixers, and animating objects in the scene. Part of your Programming Knowledge Index — 3D & Advanced Frontend.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Animations",
        "desc": "Keyframes, mixers, and animating objects in the scene. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: 3D & Advanced Frontend",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "play"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Animations connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "threejs-performance",
    "slug": "threejs-performance",
    "num": "05",
    "title": "Performance Optimization",
    "summary": "LOD, instancing, and keeping 60fps with complex scenes.",
    "category": "threejs",
    "icon": "gauge",
    "color": "purple",
    "tags": [
      "performance",
      "fps",
      "optimization",
      "3d"
    ],
    "important": false,
    "intro": "LOD, instancing, and keeping 60fps with complex scenes. Part of your Programming Knowledge Index — 3D & Advanced Frontend.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Performance Optimization",
        "desc": "LOD, instancing, and keeping 60fps with complex scenes. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: 3D & Advanced Frontend",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "gauge"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Performance Optimization connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "git-github",
    "slug": "git-github",
    "num": "01",
    "title": "Git & GitHub",
    "summary": "Version control, branches, commits, and collaboration.",
    "category": "tools",
    "icon": "git-branch",
    "color": "slate",
    "tags": [
      "git",
      "github",
      "branch",
      "commit"
    ],
    "important": false,
    "intro": "Version control, branches, commits, and collaboration. Part of your Programming Knowledge Index — Tools & Ecosystem.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Git & GitHub",
        "desc": "Version control, branches, commits, and collaboration. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Tools & Ecosystem",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "git-branch"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Git & GitHub connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "docker",
    "slug": "docker",
    "num": "02",
    "title": "Docker",
    "summary": "Containers for consistent dev and deployment environments.",
    "category": "tools",
    "icon": "container",
    "color": "slate",
    "tags": [
      "docker",
      "containers",
      "images"
    ],
    "important": false,
    "intro": "Containers for consistent dev and deployment environments. Part of your Programming Knowledge Index — Tools & Ecosystem.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Docker",
        "desc": "Containers for consistent dev and deployment environments. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Tools & Ecosystem",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "container"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Docker connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "package-managers",
    "slug": "package-managers",
    "num": "03",
    "title": "npm & pnpm",
    "summary": "Installing dependencies and running scripts.",
    "category": "tools",
    "icon": "package",
    "color": "slate",
    "tags": [
      "npm",
      "pnpm",
      "dependencies",
      "lockfile"
    ],
    "important": false,
    "intro": "Installing dependencies and running scripts. Part of your Programming Knowledge Index — Tools & Ecosystem.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding npm & pnpm",
        "desc": "Installing dependencies and running scripts. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Tools & Ecosystem",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "package"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. npm & pnpm connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "build-tools",
    "slug": "build-tools",
    "num": "04",
    "title": "Build Tools",
    "summary": "Vite, Webpack, Turbopack — bundling and dev servers.",
    "category": "tools",
    "icon": "hammer",
    "color": "slate",
    "tags": [
      "vite",
      "webpack",
      "bundler",
      "build"
    ],
    "important": false,
    "intro": "Vite, Webpack, Turbopack — bundling and dev servers. Part of your Programming Knowledge Index — Tools & Ecosystem.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Build Tools",
        "desc": "Vite, Webpack, Turbopack — bundling and dev servers. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Tools & Ecosystem",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "hammer"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Build Tools connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "debugging-strategy",
    "slug": "debugging-strategy",
    "num": "01",
    "title": "Debugging Strategy",
    "summary": "Systematic approach — reproduce, isolate, fix, verify.",
    "category": "mindset",
    "icon": "bug",
    "color": "indigo",
    "tags": [
      "debugging",
      "logs",
      "breakpoints"
    ],
    "important": false,
    "intro": "Systematic approach — reproduce, isolate, fix, verify. Part of your Programming Knowledge Index — Software Engineering Mindset.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Debugging Strategy",
        "desc": "Systematic approach — reproduce, isolate, fix, verify. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Software Engineering Mindset",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "bug"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Debugging Strategy connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "code-readability",
    "slug": "code-readability",
    "num": "02",
    "title": "Code Readability",
    "summary": "Naming, structure, and writing code others (and future you) understand.",
    "category": "mindset",
    "icon": "book-open",
    "color": "indigo",
    "tags": [
      "readability",
      "naming",
      "clean code"
    ],
    "important": false,
    "intro": "Naming, structure, and writing code others (and future you) understand. Part of your Programming Knowledge Index — Software Engineering Mindset.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Code Readability",
        "desc": "Naming, structure, and writing code others (and future you) understand. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Software Engineering Mindset",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "book-open"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Code Readability connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "separation-of-concerns",
    "slug": "separation-of-concerns",
    "num": "03",
    "title": "Separation of Concerns",
    "summary": "Each module does one job — easier to test and change.",
    "category": "mindset",
    "icon": "split",
    "color": "indigo",
    "tags": [
      "separation",
      "modularity",
      "single responsibility"
    ],
    "important": false,
    "intro": "Each module does one job — easier to test and change. Part of your Programming Knowledge Index — Software Engineering Mindset.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Separation of Concerns",
        "desc": "Each module does one job — easier to test and change. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Software Engineering Mindset",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "split"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Separation of Concerns connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "performance-thinking",
    "slug": "performance-thinking",
    "num": "04",
    "title": "Performance Thinking",
    "summary": "Measure first, optimize bottlenecks, avoid premature optimization.",
    "category": "mindset",
    "icon": "zap",
    "color": "indigo",
    "tags": [
      "performance",
      "profiling",
      "bottleneck"
    ],
    "important": false,
    "intro": "Measure first, optimize bottlenecks, avoid premature optimization. Part of your Programming Knowledge Index — Software Engineering Mindset.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Performance Thinking",
        "desc": "Measure first, optimize bottlenecks, avoid premature optimization. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Software Engineering Mindset",
          "Read the steps, then try explaining it out loud",
          "Build a small example in your own project"
        ],
        "icon": "zap"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Performance Thinking connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  },
  {
    "id": "trade-offs",
    "slug": "trade-offs",
    "num": "05",
    "title": "Trade-offs",
    "summary": "Every design choice has costs — speed vs simplicity, consistency vs availability.",
    "category": "mindset",
    "icon": "scale",
    "color": "indigo",
    "tags": [
      "trade-offs",
      "decisions",
      "architecture"
    ],
    "important": true,
    "intro": "Every design choice has costs — speed vs simplicity, consistency vs availability. Part of your Programming Knowledge Index — Software Engineering Mindset.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Understanding Trade-offs",
        "desc": "Every design choice has costs — speed vs simplicity, consistency vs availability. This is a core topic in your learning path — understand the idea before memorizing syntax.",
        "bullets": [
          "Part of: Software Engineering Mindset",
          "Read the steps, then try explaining it out loud",
          "⚠️ Marked as especially important"
        ],
        "icon": "scale"
      },
      {
        "kicker": "Why it matters",
        "title": "Why you need this",
        "desc": "Weak mental models here make everything built on top harder. Trade-offs connects to real work in Next.js, MongoDB, and backend projects you're already building.",
        "bullets": [
          "Strong engineers explain concepts clearly",
          "Interviewers test fundamentals, not just frameworks",
          "Deep understanding beats copy-paste solutions"
        ],
        "icon": "lightbulb"
      },
      {
        "kicker": "Next step",
        "title": "How to learn it deeply",
        "desc": "Pick one resource, build one tiny example, then explain it without looking at notes — like a mock interview.",
        "bullets": [
          "Step 1: Read and take notes",
          "Step 2: Code a minimal example",
          "Step 3: Explain out loud in English"
        ],
        "icon": "target"
      }
    ]
  }
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

function getKnowledgeStats() {
  const topicCount = CONCEPTS.length;
  const categoryCount = CONCEPT_CATEGORIES.length;
  const stepCount = CONCEPTS.reduce((n, c) => {
    if (c.steps) return n + c.steps.length;
    if (c.sections) return n + c.sections.reduce((s, sec) => s + sec.steps.length, 0);
    return n;
  }, 0);
  return { topicCount, categoryCount, stepCount };
}
