/**
 * Concept Lab — Programming Knowledge Index
 * Auto-generated from scripts/build-knowledge-index.js
 * 108 topics across 18 categories in 3 tiers
 */
const KNOWLEDGE_TIERS = [
  {
    "id": "fundamental",
    "name": "Fundamental",
    "description": "Core building blocks — programming basics, data structures, algorithms, and backend foundations. Master these first.",
    "icon": "blocks",
    "color": "cyan",
    "order": 1
  },
  {
    "id": "middle",
    "name": "Middle",
    "description": "Frameworks and practical skills — JavaScript deep dives, React, Next.js, databases, and tools.",
    "icon": "layers",
    "color": "amber",
    "order": 2
  },
  {
    "id": "advanced",
    "name": "Advanced",
    "description": "Architecture, security, performance, and engineering mindset — for production-grade systems.",
    "icon": "rocket",
    "color": "violet",
    "order": 3
  }
];

const CONCEPT_CATEGORIES = [
  {
    "id": "fund-core-basics",
    "tier": "fundamental",
    "name": "Core Programming Basics",
    "description": "Variables, data types, control flow, loops, and functions — the syntax every program is built from.",
    "icon": "code",
    "color": "cyan",
    "order": 1
  },
  {
    "id": "fund-logic-behavior",
    "tier": "fundamental",
    "name": "Logic & Behavior",
    "description": "Scope, closures, and error handling — how code behaves beyond simple statements.",
    "icon": "brain",
    "color": "teal",
    "order": 2
  },
  {
    "id": "fund-memory-execution",
    "tier": "fundamental",
    "name": "Memory & Execution",
    "description": "How programs store and run code — stack vs heap and what happens at runtime.",
    "icon": "cpu",
    "color": "emerald",
    "order": 3
  },
  {
    "id": "fund-backend",
    "tier": "fundamental",
    "name": "Backend Fundamentals",
    "description": "Express.js basics — server setup, routing, and middleware for your first API.",
    "icon": "server",
    "color": "rose",
    "order": 4
  },
  {
    "id": "fund-data-structures",
    "tier": "fundamental",
    "name": "Data Structures",
    "description": "Arrays, objects, stacks, queues, linked lists, hash maps, and sets — organizing data efficiently.",
    "icon": "database",
    "color": "sky",
    "order": 5
  },
  {
    "id": "fund-algorithms",
    "tier": "fundamental",
    "name": "Algorithms",
    "description": "Sorting, searching, recursion, and Big O — the logic patterns behind efficient code.",
    "icon": "git-merge",
    "color": "indigo",
    "order": 6
  },
  {
    "id": "javascript",
    "tier": "middle",
    "name": "JavaScript Deep Understanding",
    "description": "Execution context, event loop, async, closures — critical for React and Next.js.",
    "icon": "file-code",
    "color": "amber",
    "order": 7
  },
  {
    "id": "typescript",
    "tier": "middle",
    "name": "TypeScript",
    "description": "Types, generics, narrowing — safer code for APIs and components.",
    "icon": "binary",
    "color": "violet",
    "order": 8
  },
  {
    "id": "react",
    "tier": "middle",
    "name": "React",
    "description": "Components, state, hooks, server vs client — your frontend core.",
    "icon": "atom",
    "color": "sky",
    "order": 9
  },
  {
    "id": "nextjs",
    "tier": "middle",
    "name": "Next.js",
    "description": "App Router, Server Actions, caching, auth — your main stack.",
    "icon": "triangle",
    "color": "indigo",
    "order": 10
  },
  {
    "id": "backend",
    "tier": "middle",
    "name": "Backend & Web Architecture",
    "description": "MVC, services, HTTP, client/server, scaling — how backends are built.",
    "icon": "server",
    "color": "rose",
    "order": 11
  },
  {
    "id": "database",
    "tier": "middle",
    "name": "Database (MongoDB & Concepts)",
    "description": "CRUD, schema design, indexing, aggregation — data that lasts.",
    "icon": "database",
    "color": "emerald",
    "order": 12
  },
  {
    "id": "forms",
    "tier": "middle",
    "name": "Forms & Data Flow",
    "description": "FormData, validation, uploads, API sync — moving data through your app.",
    "icon": "form-input",
    "color": "orange",
    "order": 13
  },
  {
    "id": "ui-ux",
    "tier": "middle",
    "name": "UI / UX & Product Thinking",
    "description": "Responsive design, components, accessibility, user flows.",
    "icon": "layout",
    "color": "fuchsia",
    "order": 14
  },
  {
    "id": "tools",
    "tier": "middle",
    "name": "Tools & Ecosystem",
    "description": "Git, Docker, package managers, build tools.",
    "icon": "wrench",
    "color": "slate",
    "order": 15
  },
  {
    "id": "auth-security",
    "tier": "advanced",
    "name": "Authentication & Security",
    "description": "Sessions, JWT, OAuth, cookies, XSS/CSRF — protecting users and data.",
    "icon": "shield-check",
    "color": "lime",
    "order": 16
  },
  {
    "id": "threejs",
    "tier": "advanced",
    "name": "3D & Advanced Frontend",
    "description": "Three.js, scenes, models, animations — interactive 3D on the web.",
    "icon": "box",
    "color": "purple",
    "order": 17
  },
  {
    "id": "mindset",
    "tier": "advanced",
    "name": "Software Engineering Mindset",
    "description": "Debugging, trade-offs, readability — junior to strong engineer.",
    "icon": "lightbulb",
    "color": "indigo",
    "order": 18
  }
];

const CONCEPTS = [
  {
    "id": "variables",
    "slug": "variables",
    "num": "01",
    "title": "Variables",
    "summary": "Named containers for values — const, let, and when to use each.",
    "category": "fund-core-basics",
    "tier": "fundamental",
    "icon": "variable",
    "color": "cyan",
    "tags": [
      "variables",
      "const",
      "let",
      "assignment"
    ],
    "important": false,
    "sources": [
      {
        "title": "MDN — Variables",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations"
      }
    ],
    "intro": "Before loops, functions, or frameworks — you need names for values. Variables are the first concept every programmer learns.",
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
        "kicker": "Declaration",
        "title": "Declaring variables",
        "desc": "const user = \"Ada\"; creates a binding. let count = 0; allows reassignment. Always declare before use — undeclared variables throw ReferenceError.",
        "bullets": [
          "const name = value — cannot reassign",
          "let name = value — can reassign",
          "Naming: camelCase for variables"
        ],
        "icon": "pen-line"
      },
      {
        "kicker": "Assignment",
        "title": "Reading and updating",
        "desc": "Read a variable by using its name. Update with let: count = count + 1. const objects can have properties changed — only the binding is locked.",
        "bullets": [
          "const obj = {}; obj.x = 1 — allowed",
          "const obj = {}; obj = {} — error",
          "Destructuring: const { name } = user"
        ],
        "icon": "refresh-cw"
      }
    ]
  },
  {
    "id": "data-types",
    "slug": "data-types",
    "num": "02",
    "title": "Data Types",
    "summary": "Strings, numbers, booleans, null, undefined — primitives vs references.",
    "category": "fund-core-basics",
    "tier": "fundamental",
    "icon": "hash",
    "color": "cyan",
    "tags": [
      "types",
      "string",
      "number",
      "boolean",
      "primitive"
    ],
    "important": false,
    "sources": [
      {
        "title": "MDN — JavaScript data types",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
      }
    ],
    "intro": "Every value in a program has a type. Understanding types prevents bugs and makes code predictable.",
    "steps": [
      {
        "kicker": "Primitives",
        "title": "Primitive data types",
        "desc": "Strings (text), numbers, booleans (true/false), null, undefined, bigint, and symbol. Primitives are copied by value.",
        "bullets": [
          "string — \"hello\"",
          "number — 42, 3.14",
          "boolean — true / false",
          "null vs undefined — intentional empty vs missing"
        ],
        "icon": "hash"
      },
      {
        "kicker": "References",
        "title": "Objects and references",
        "desc": "Objects, arrays, and functions are reference types. Two variables can point to the same object — mutating one affects the other.",
        "bullets": [
          "Objects group related data: { name, age }",
          "Arrays are ordered lists",
          "typeof operator checks type"
        ],
        "icon": "braces"
      },
      {
        "kicker": "Coercion",
        "title": "Type coercion basics",
        "desc": "JavaScript sometimes converts types automatically: \"5\" + 1 = \"51\" (string concat). Use === for strict equality without coercion.",
        "bullets": [
          "== coerces types — avoid it",
          "=== compares value and type",
          "Number(\"42\") explicit conversion"
        ],
        "icon": "alert-triangle"
      }
    ]
  },
  {
    "id": "control-flow",
    "slug": "control-flow",
    "num": "03",
    "title": "Control Flow",
    "summary": "if/else and switch — branching logic based on conditions.",
    "category": "fund-core-basics",
    "tier": "fundamental",
    "icon": "git-branch",
    "color": "cyan",
    "tags": [
      "if",
      "else",
      "switch",
      "conditions"
    ],
    "important": false,
    "sources": [],
    "intro": "if/else and switch — branching logic based on conditions. Core building blocks that every language shares. Strong fundamentals make frameworks easier to reason about.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Control Flow?",
        "desc": "if/else and switch — branching logic based on conditions.",
        "bullets": [
          "Foundation for reading and writing any programming language",
          "Shows up in every function, component, and API you build",
          "Related ideas: if, else, switch"
        ],
        "icon": "git-branch",
        "visual": {
          "type": "definition",
          "icon": "git-branch",
          "title": "Control Flow",
          "bullets": [
            "Foundation for reading and writing any programming language",
            "Shows up in every function, component, and API you build",
            "Related ideas: if, else, switch"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Control Flow works in practice",
        "desc": "Programs branch based on conditions. if/else runs one path or another. switch matches a value against multiple cases — cleaner than long if chains when comparing one variable.",
        "bullets": [
          "if (condition) { } else { }",
          "switch (value) { case x: break; default: }",
          "Truthy/falsy: 0, \"\", null, undefined, NaN are falsy"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "if (score >= 60) {\n  console.log(\"Pass\");\n} else {\n  console.log(\"Fail\");\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where Control Flow fits in real projects",
        "desc": "In your Next.js + MongoDB projects, control flow connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-core-basics",
          "title": "Control Flow"
        }
      }
    ]
  },
  {
    "id": "loops",
    "slug": "loops",
    "num": "04",
    "title": "Loops",
    "summary": "for and while loops — repeating work without copy-pasting code.",
    "category": "fund-core-basics",
    "tier": "fundamental",
    "icon": "repeat",
    "color": "cyan",
    "tags": [
      "for",
      "while",
      "iteration",
      "loop"
    ],
    "important": false,
    "sources": [],
    "intro": "for and while loops — repeating work without copy-pasting code. Core building blocks that every language shares. Strong fundamentals make frameworks easier to reason about.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Loops?",
        "desc": "for and while loops — repeating work without copy-pasting code.",
        "bullets": [
          "Foundation for reading and writing any programming language",
          "Shows up in every function, component, and API you build",
          "Related ideas: for, while, iteration"
        ],
        "icon": "repeat",
        "visual": {
          "type": "definition",
          "icon": "repeat",
          "title": "Loops",
          "bullets": [
            "Foundation for reading and writing any programming language",
            "Shows up in every function, component, and API you build",
            "Related ideas: for, while, iteration"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Loops works in practice",
        "desc": "Loops repeat a block until a condition is false (while) or for a set count (for). for...of iterates arrays; for...in iterates object keys. break exits early; continue skips to the next iteration.",
        "bullets": [
          "for (let i = 0; i < n; i++) — classic counted loop",
          "while (condition) — runs until condition is false",
          "for (const item of array) — iterate values safely"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "for (const item of items) {\n  console.log(item);\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where Loops fits in real projects",
        "desc": "In your Next.js + MongoDB projects, loops connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-core-basics",
          "title": "Loops"
        }
      }
    ]
  },
  {
    "id": "functions",
    "slug": "functions",
    "num": "05",
    "title": "Functions",
    "summary": "Reusable blocks of logic with inputs (parameters) and outputs (return values).",
    "category": "fund-core-basics",
    "tier": "fundamental",
    "icon": "function-square",
    "color": "cyan",
    "tags": [
      "functions",
      "parameters",
      "return",
      "pure"
    ],
    "important": false,
    "sources": [],
    "intro": "Reusable blocks of logic with inputs (parameters) and outputs (return values). Core building blocks that every language shares. Strong fundamentals make frameworks easier to reason about.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Functions?",
        "desc": "Reusable blocks of logic with inputs (parameters) and outputs (return values).",
        "bullets": [
          "Foundation for reading and writing any programming language",
          "Shows up in every function, component, and API you build",
          "Related ideas: functions, parameters, return"
        ],
        "icon": "function-square",
        "visual": {
          "type": "definition",
          "icon": "function-square",
          "title": "Functions",
          "bullets": [
            "Foundation for reading and writing any programming language",
            "Shows up in every function, component, and API you build",
            "Related ideas: functions, parameters, return"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Functions works in practice",
        "desc": "A function takes inputs (parameters), runs logic, and returns an output. Pure functions always return the same output for the same input and cause no side effects. Impure functions read/write external state — database calls, DOM updates, etc.",
        "bullets": [
          "function add(a, b) { return a + b; }",
          "Arrow: const add = (a, b) => a + b",
          "Return early to reduce nesting"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "function greet(name) {\n  return `Hello, ${name}`;\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where Functions fits in real projects",
        "desc": "In your Next.js + MongoDB projects, functions connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-core-basics",
          "title": "Functions"
        }
      }
    ]
  },
  {
    "id": "scope",
    "slug": "scope",
    "num": "01",
    "title": "Scope",
    "summary": "Where variables are visible — global, function, and block scope.",
    "category": "fund-logic-behavior",
    "tier": "fundamental",
    "icon": "braces",
    "color": "teal",
    "tags": [
      "scope",
      "lexical",
      "block",
      "global"
    ],
    "important": false,
    "sources": [
      {
        "title": "MDN — Scope",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
      }
    ],
    "intro": "Scope decides where variables are visible. Lexical scope means the structure of your code determines what each function can access.",
    "steps": [
      {
        "kicker": "Levels",
        "title": "Global, function, and block scope",
        "desc": "Global — entire file. Function — inside a function declaration. Block — inside { } with let/const.",
        "bullets": [
          "Global scope — entire file",
          "Function scope — inside a function",
          "Block scope — inside { } with let/const"
        ],
        "icon": "braces"
      },
      {
        "kicker": "Rules",
        "title": "Inner sees outer, not vice versa",
        "desc": "Inner scopes can read variables from outer scopes. Outer scopes cannot see variables declared inside inner blocks.",
        "bullets": [
          "Shadowing: inner let x hides outer x",
          "const/let are block-scoped",
          "var is function-scoped (legacy)"
        ],
        "icon": "eye"
      },
      {
        "kicker": "Practical",
        "title": "Why scope matters",
        "desc": "Scope prevents naming collisions, enables encapsulation, and is the foundation for closures and modules.",
        "bullets": [
          "Keep variables as local as possible",
          "Avoid polluting global scope",
          "Modules use scope for privacy"
        ],
        "icon": "shield"
      }
    ]
  },
  {
    "id": "closures",
    "slug": "closures",
    "num": "02",
    "title": "Closures",
    "summary": "Functions that remember variables from where they were created.",
    "category": "fund-logic-behavior",
    "tier": "fundamental",
    "icon": "lock",
    "color": "teal",
    "tags": [
      "closures",
      "lexical",
      "callbacks",
      "important"
    ],
    "important": true,
    "sources": [
      {
        "title": "MDN — Closures",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
      }
    ],
    "intro": "A closure is when an inner function keeps access to outer variables even after the outer function has returned. This is one of the most important concepts in JavaScript.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "Functions remember their birthplace",
        "desc": "A closure = inner function + the variables from its outer scope. The inner function \"closes over\" those variables.",
        "bullets": [
          "Inner function + outer variables = closure",
          "Variables persist after outer function returns",
          "Every function in JS creates a closure"
        ],
        "icon": "lock"
      },
      {
        "kicker": "Example",
        "title": "Closure in action",
        "desc": "function makeCounter() { let n = 0; return () => ++n; } — each call to the returned function remembers n.",
        "bullets": [
          "Factory functions use closures",
          "Event handlers capture variables",
          "React hooks rely on closures"
        ],
        "icon": "code"
      },
      {
        "kicker": "Gotchas",
        "title": "Common closure bugs",
        "desc": "var in a loop + setTimeout prints the same value every time. Use let (block scope) or an IIFE to capture the right value per iteration.",
        "bullets": [
          "Loop + var + async = classic bug",
          "Use let in for loops",
          "Closures enable private state"
        ],
        "icon": "bug"
      }
    ]
  },
  {
    "id": "error-handling",
    "slug": "error-handling",
    "num": "03",
    "title": "Error Handling",
    "summary": "try/catch, throwing errors, and failing gracefully instead of crashing.",
    "category": "fund-logic-behavior",
    "tier": "fundamental",
    "icon": "alert-circle",
    "color": "teal",
    "tags": [
      "errors",
      "try",
      "catch",
      "exceptions"
    ],
    "important": false,
    "sources": [],
    "intro": "try/catch, throwing errors, and failing gracefully instead of crashing. How code behaves beyond simple statements — visibility, memory of scope, and handling failures.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Error Handling?",
        "desc": "try/catch, throwing errors, and failing gracefully instead of crashing.",
        "bullets": [
          "Explains why code behaves unexpectedly when scope or errors are mishandled",
          "Closures are the foundation for callbacks, hooks, and modules",
          "Key terms: errors, try, catch, exceptions"
        ],
        "icon": "alert-circle",
        "visual": {
          "type": "definition",
          "icon": "alert-circle",
          "title": "Error Handling",
          "bullets": [
            "Explains why code behaves unexpectedly when scope or errors are mishandled",
            "Closures are the foundation for callbacks, hooks, and modules",
            "Key terms: errors, try, catch, exceptions"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Error Handling works in practice",
        "desc": "Error Handling works by applying clear rules in code. try/catch, throwing errors, and failing gracefully instead of crashing. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind error handling",
          "Common in logic & behavior work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Error Handling fits in real projects",
        "desc": "In your Next.js + MongoDB projects, error handling connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-logic-behavior",
          "title": "Error Handling"
        }
      }
    ]
  },
  {
    "id": "stack-vs-heap",
    "slug": "stack-vs-heap",
    "num": "01",
    "title": "Stack vs Heap",
    "summary": "How programs store primitives on the stack and objects on the heap.",
    "category": "fund-memory-execution",
    "tier": "fundamental",
    "icon": "cpu",
    "color": "emerald",
    "tags": [
      "stack",
      "heap",
      "memory",
      "allocation"
    ],
    "important": false,
    "sources": [
      {
        "title": "MDN — Memory Management",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management"
      }
    ],
    "intro": "Programs need memory. Primitives live on the stack; objects live on the heap. Understanding this explains references, garbage collection, and stack overflows.",
    "steps": [
      {
        "kicker": "Stack",
        "title": "The call stack",
        "desc": "Stack stores primitives and function call frames. Fast, fixed-size, LIFO — last function in, first out.",
        "bullets": [
          "Primitives: number, boolean, string (small)",
          "Function calls push frames onto stack",
          "Stack overflow = too many nested calls"
        ],
        "icon": "layers"
      },
      {
        "kicker": "Heap",
        "title": "The heap",
        "desc": "Objects, arrays, and closures live on the heap. Variables on the stack hold a reference (pointer) to heap memory.",
        "bullets": [
          "Objects allocated on heap",
          "Stack variable holds reference",
          "Garbage collector frees unused heap memory"
        ],
        "icon": "cpu"
      },
      {
        "kicker": "Implications",
        "title": "Why this matters in JS",
        "desc": "Copying an object copies the reference, not the object. Two variables can point to the same heap object.",
        "bullets": [
          "const a = { x: 1 }; const b = a — same object",
          "Spread {...obj} creates shallow copy",
          "Deep clone needed for nested objects"
        ],
        "icon": "copy"
      }
    ]
  },
  {
    "id": "express-basics",
    "slug": "express-basics",
    "num": "01",
    "title": "Express.js Basics",
    "summary": "Node.js web framework — what Express is and why backends use it.",
    "category": "fund-backend",
    "tier": "fundamental",
    "icon": "server",
    "color": "rose",
    "tags": [
      "express",
      "node",
      "backend",
      "framework"
    ],
    "important": false,
    "sources": [
      {
        "title": "Express — Getting started",
        "url": "https://expressjs.com/en/starter/installing.html"
      }
    ],
    "intro": "Express is the most popular Node.js web framework. It handles HTTP requests, routing, and middleware so you can build APIs and backends quickly.",
    "steps": [
      {
        "kicker": "What it is",
        "title": "Express on Node.js",
        "desc": "Node.js runs JavaScript on the server. Express adds routing, middleware, and request/response helpers on top of Node's http module.",
        "bullets": [
          "npm install express",
          "Minimal API in a few lines",
          "Used by millions of production apps"
        ],
        "icon": "server"
      },
      {
        "kicker": "Core pieces",
        "title": "App, request, response",
        "desc": "const app = express() creates an application. Each route handler receives req (request) and res (response) objects.",
        "bullets": [
          "req.params — URL parameters",
          "req.body — POST JSON/form data",
          "res.json() — send JSON response"
        ],
        "icon": "package"
      },
      {
        "kicker": "First app",
        "title": "Hello World server",
        "desc": "const express = require(\"express\"); const app = express(); app.get(\"/\", (req, res) => res.send(\"Hello\")); app.listen(3000);",
        "bullets": [
          "listen(PORT) starts the server",
          "Default port 3000 for development",
          "Use nodemon for auto-restart"
        ],
        "icon": "play"
      }
    ]
  },
  {
    "id": "server-setup",
    "slug": "server-setup",
    "num": "02",
    "title": "Server Setup",
    "summary": "Creating an Express app, listening on a port, and handling requests.",
    "category": "fund-backend",
    "tier": "fundamental",
    "icon": "plug",
    "color": "rose",
    "tags": [
      "server",
      "listen",
      "port",
      "setup"
    ],
    "important": false,
    "sources": [],
    "intro": "Creating an Express app, listening on a port, and handling requests. Your first backend — Node.js and Express handle HTTP so your app can serve APIs and data.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Server Setup?",
        "desc": "Creating an Express app, listening on a port, and handling requests.",
        "bullets": [
          "Express is the standard starting point for Node.js APIs",
          "Every web app needs a server to handle HTTP requests",
          "Routing and middleware are patterns you will use in every backend"
        ],
        "icon": "plug",
        "visual": {
          "type": "definition",
          "icon": "plug",
          "title": "Server Setup",
          "bullets": [
            "Express is the standard starting point for Node.js APIs",
            "Every web app needs a server to handle HTTP requests",
            "Routing and middleware are patterns you will use in every backend"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Server Setup works in practice",
        "desc": "Server Setup works by applying clear rules in code. Creating an Express app, listening on a port, and handling requests. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind server setup",
          "Common in backend fundamentals work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Server Setup fits in real projects",
        "desc": "In your Next.js + MongoDB projects, server setup connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-backend",
          "title": "Server Setup"
        }
      }
    ]
  },
  {
    "id": "routing",
    "slug": "routing",
    "num": "03",
    "title": "Routing",
    "summary": "Mapping URLs and HTTP methods to handler functions.",
    "category": "fund-backend",
    "tier": "fundamental",
    "icon": "route",
    "color": "rose",
    "tags": [
      "routing",
      "get",
      "post",
      "endpoints"
    ],
    "important": false,
    "sources": [
      {
        "title": "Express — Routing",
        "url": "https://expressjs.com/en/guide/routing.html"
      }
    ],
    "intro": "Mapping URLs and HTTP methods to handler functions. Your first backend — Node.js and Express handle HTTP so your app can serve APIs and data.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Routing?",
        "desc": "Mapping URLs and HTTP methods to handler functions.",
        "bullets": [
          "Express is the standard starting point for Node.js APIs",
          "Every web app needs a server to handle HTTP requests",
          "Routing and middleware are patterns you will use in every backend"
        ],
        "icon": "route",
        "visual": {
          "type": "definition",
          "icon": "route",
          "title": "Routing",
          "bullets": [
            "Express is the standard starting point for Node.js APIs",
            "Every web app needs a server to handle HTTP requests",
            "Routing and middleware are patterns you will use in every backend"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Routing works in practice",
        "desc": "app.get(\"/users\", handler) maps GET /users to a function. app.post(\"/users\", handler) handles POST. Route params: /users/:id captures id in req.params.id.",
        "bullets": [
          "Core mechanism behind routing",
          "Common in backend fundamentals work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "app.get(\"/api/users/:id\", (req, res) => {\n  res.json({ id: req.params.id });\n});"
      },
      {
        "kicker": "In your stack",
        "title": "Where Routing fits in real projects",
        "desc": "In your Next.js + MongoDB projects, routing connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-backend",
          "title": "Routing"
        }
      }
    ]
  },
  {
    "id": "middleware",
    "slug": "middleware",
    "num": "04",
    "title": "Middleware",
    "summary": "Functions that run between request and response — logging, parsing, auth.",
    "category": "fund-backend",
    "tier": "fundamental",
    "icon": "filter",
    "color": "rose",
    "tags": [
      "middleware",
      "express",
      "next",
      "pipeline"
    ],
    "important": false,
    "sources": [
      {
        "title": "Express — Middleware",
        "url": "https://expressjs.com/en/guide/using-middleware.html"
      }
    ],
    "intro": "Functions that run between request and response — logging, parsing, auth. Your first backend — Node.js and Express handle HTTP so your app can serve APIs and data.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Middleware?",
        "desc": "Functions that run between request and response — logging, parsing, auth.",
        "bullets": [
          "Express is the standard starting point for Node.js APIs",
          "Every web app needs a server to handle HTTP requests",
          "Routing and middleware are patterns you will use in every backend"
        ],
        "icon": "filter",
        "visual": {
          "type": "definition",
          "icon": "filter",
          "title": "Middleware",
          "bullets": [
            "Express is the standard starting point for Node.js APIs",
            "Every web app needs a server to handle HTTP requests",
            "Routing and middleware are patterns you will use in every backend"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Middleware works in practice",
        "desc": "Middleware functions run in order: (req, res, next) => { ...; next(); }. express.json() parses JSON bodies. Custom middleware can log requests, check auth, or handle errors.",
        "bullets": [
          "Core mechanism behind middleware",
          "Common in backend fundamentals work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "app.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});"
      },
      {
        "kicker": "In your stack",
        "title": "Where Middleware fits in real projects",
        "desc": "In your Next.js + MongoDB projects, middleware connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-backend",
          "title": "Middleware"
        }
      }
    ]
  },
  {
    "id": "ds-arrays",
    "slug": "ds-arrays",
    "num": "01",
    "title": "Array",
    "summary": "Ordered collections — push, pop, map, filter, and index access.",
    "category": "fund-data-structures",
    "tier": "fundamental",
    "icon": "list",
    "color": "sky",
    "tags": [
      "array",
      "list",
      "ordered",
      "index"
    ],
    "important": false,
    "sources": [],
    "intro": "Ordered collections — push, pop, map, filter, and index access. Ways to organize data — each structure trades speed, memory, and simplicity differently.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Array?",
        "desc": "Ordered collections — push, pop, map, filter, and index access.",
        "bullets": [
          "Choosing the right structure affects speed and code clarity",
          "Arrays and objects are built into JavaScript; others you implement or use from libraries",
          "Structure: Array — array, list"
        ],
        "icon": "list",
        "visual": {
          "type": "definition",
          "icon": "list",
          "title": "Array",
          "bullets": [
            "Choosing the right structure affects speed and code clarity",
            "Arrays and objects are built into JavaScript; others you implement or use from libraries",
            "Structure: Array — array, list"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Array works in practice",
        "desc": "Array works by applying clear rules in code. Ordered collections — push, pop, map, filter, and index access. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind array",
          "Common in data structures work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "const nums = [1, 2, 3];\nnums.push(4);\nconst doubled = nums.map(n => n * 2);"
      },
      {
        "kicker": "In your stack",
        "title": "Where Array fits in real projects",
        "desc": "In your Next.js + MongoDB projects, array connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-data-structures",
          "title": "Array"
        }
      }
    ]
  },
  {
    "id": "ds-objects",
    "slug": "ds-objects",
    "num": "02",
    "title": "Object",
    "summary": "Key-value pairs for grouping related data — the most common structure in JS.",
    "category": "fund-data-structures",
    "tier": "fundamental",
    "icon": "braces",
    "color": "sky",
    "tags": [
      "object",
      "key-value",
      "properties",
      "record"
    ],
    "important": false,
    "sources": [],
    "intro": "Key-value pairs for grouping related data — the most common structure in JS. Ways to organize data — each structure trades speed, memory, and simplicity differently.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Object?",
        "desc": "Key-value pairs for grouping related data — the most common structure in JS.",
        "bullets": [
          "Choosing the right structure affects speed and code clarity",
          "Arrays and objects are built into JavaScript; others you implement or use from libraries",
          "Structure: Object — object, key-value"
        ],
        "icon": "braces",
        "visual": {
          "type": "definition",
          "icon": "braces",
          "title": "Object",
          "bullets": [
            "Choosing the right structure affects speed and code clarity",
            "Arrays and objects are built into JavaScript; others you implement or use from libraries",
            "Structure: Object — object, key-value"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Object works in practice",
        "desc": "Object works by applying clear rules in code. Key-value pairs for grouping related data — the most common structure in JS. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind object",
          "Common in data structures work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Object fits in real projects",
        "desc": "In your Next.js + MongoDB projects, object connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-data-structures",
          "title": "Object"
        }
      }
    ]
  },
  {
    "id": "ds-stack",
    "slug": "ds-stack",
    "num": "03",
    "title": "Stack",
    "summary": "Last-in, first-out (LIFO) — push and pop from the top only.",
    "category": "fund-data-structures",
    "tier": "fundamental",
    "icon": "layers",
    "color": "sky",
    "tags": [
      "stack",
      "lifo",
      "push",
      "pop"
    ],
    "important": false,
    "sources": [],
    "intro": "Last-in, first-out (LIFO) — push and pop from the top only. Ways to organize data — each structure trades speed, memory, and simplicity differently.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Stack?",
        "desc": "Last-in, first-out (LIFO) — push and pop from the top only.",
        "bullets": [
          "Choosing the right structure affects speed and code clarity",
          "Arrays and objects are built into JavaScript; others you implement or use from libraries",
          "Structure: Stack — stack, lifo"
        ],
        "icon": "layers",
        "visual": {
          "type": "definition",
          "icon": "layers",
          "title": "Stack",
          "bullets": [
            "Choosing the right structure affects speed and code clarity",
            "Arrays and objects are built into JavaScript; others you implement or use from libraries",
            "Structure: Stack — stack, lifo"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Stack works in practice",
        "desc": "Stack operations: push (add to top), pop (remove from top), peek (view top). JavaScript arrays work as stacks with push/pop. Used for undo, browser history, call stack.",
        "bullets": [
          "Core mechanism behind stack",
          "Common in data structures work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Stack fits in real projects",
        "desc": "In your Next.js + MongoDB projects, stack connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-data-structures",
          "title": "Stack"
        }
      }
    ]
  },
  {
    "id": "ds-queue",
    "slug": "ds-queue",
    "num": "04",
    "title": "Queue",
    "summary": "First-in, first-out (FIFO) — enqueue at back, dequeue from front.",
    "category": "fund-data-structures",
    "tier": "fundamental",
    "icon": "list-ordered",
    "color": "sky",
    "tags": [
      "queue",
      "fifo",
      "enqueue",
      "dequeue"
    ],
    "important": false,
    "sources": [],
    "intro": "First-in, first-out (FIFO) — enqueue at back, dequeue from front. Ways to organize data — each structure trades speed, memory, and simplicity differently.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Queue?",
        "desc": "First-in, first-out (FIFO) — enqueue at back, dequeue from front.",
        "bullets": [
          "Choosing the right structure affects speed and code clarity",
          "Arrays and objects are built into JavaScript; others you implement or use from libraries",
          "Structure: Queue — queue, fifo"
        ],
        "icon": "list-ordered",
        "visual": {
          "type": "definition",
          "icon": "list-ordered",
          "title": "Queue",
          "bullets": [
            "Choosing the right structure affects speed and code clarity",
            "Arrays and objects are built into JavaScript; others you implement or use from libraries",
            "Structure: Queue — queue, fifo"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Queue works in practice",
        "desc": "Queue operations: enqueue (add to back), dequeue (remove from front). Implement with array (shift is O(n)) or linked list (O(1)). Used for task scheduling, BFS traversal.",
        "bullets": [
          "Core mechanism behind queue",
          "Common in data structures work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Queue fits in real projects",
        "desc": "In your Next.js + MongoDB projects, queue connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-data-structures",
          "title": "Queue"
        }
      }
    ]
  },
  {
    "id": "ds-linked-list",
    "slug": "ds-linked-list",
    "num": "05",
    "title": "Linked List",
    "summary": "Nodes chained by pointers — efficient insert/delete, no random access.",
    "category": "fund-data-structures",
    "tier": "fundamental",
    "icon": "link",
    "color": "sky",
    "tags": [
      "linked list",
      "nodes",
      "pointers",
      "chain"
    ],
    "important": false,
    "sources": [],
    "intro": "Nodes chained by pointers — efficient insert/delete, no random access. Ways to organize data — each structure trades speed, memory, and simplicity differently.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Linked List?",
        "desc": "Nodes chained by pointers — efficient insert/delete, no random access.",
        "bullets": [
          "Choosing the right structure affects speed and code clarity",
          "Arrays and objects are built into JavaScript; others you implement or use from libraries",
          "Structure: Linked List — linked list, nodes"
        ],
        "icon": "link",
        "visual": {
          "type": "definition",
          "icon": "link",
          "title": "Linked List",
          "bullets": [
            "Choosing the right structure affects speed and code clarity",
            "Arrays and objects are built into JavaScript; others you implement or use from libraries",
            "Structure: Linked List — linked list, nodes"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Linked List works in practice",
        "desc": "Each node holds a value and a next pointer. Insert/delete at known position is O(1). No random access — finding element is O(n). Foundation for stacks, queues, and trees.",
        "bullets": [
          "Core mechanism behind linked list",
          "Common in data structures work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Linked List fits in real projects",
        "desc": "In your Next.js + MongoDB projects, linked list connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-data-structures",
          "title": "Linked List"
        }
      }
    ]
  },
  {
    "id": "ds-hash-map",
    "slug": "ds-hash-map",
    "num": "06",
    "title": "Hash Map",
    "summary": "Key-value store with O(1) average lookup — Map and object in JavaScript.",
    "category": "fund-data-structures",
    "tier": "fundamental",
    "icon": "table",
    "color": "sky",
    "tags": [
      "hash map",
      "dictionary",
      "map",
      "lookup"
    ],
    "important": false,
    "sources": [],
    "intro": "Key-value store with O(1) average lookup — Map and object in JavaScript. Ways to organize data — each structure trades speed, memory, and simplicity differently.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Hash Map?",
        "desc": "Key-value store with O(1) average lookup — Map and object in JavaScript.",
        "bullets": [
          "Choosing the right structure affects speed and code clarity",
          "Arrays and objects are built into JavaScript; others you implement or use from libraries",
          "Structure: Hash Map — hash map, dictionary"
        ],
        "icon": "table",
        "visual": {
          "type": "definition",
          "icon": "table",
          "title": "Hash Map",
          "bullets": [
            "Choosing the right structure affects speed and code clarity",
            "Arrays and objects are built into JavaScript; others you implement or use from libraries",
            "Structure: Hash Map — hash map, dictionary"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Hash Map works in practice",
        "desc": "Maps keys to values using a hash function. Average O(1) get/set/delete. JavaScript: Map for any key type, Object for string keys. Used for caches, indexes, frequency counts.",
        "bullets": [
          "Core mechanism behind hash map",
          "Common in data structures work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "const map = new Map();\nmap.set(\"name\", \"Ada\");\nmap.get(\"name\"); // \"Ada\""
      },
      {
        "kicker": "In your stack",
        "title": "Where Hash Map fits in real projects",
        "desc": "In your Next.js + MongoDB projects, hash map connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-data-structures",
          "title": "Hash Map"
        }
      }
    ]
  },
  {
    "id": "ds-set",
    "slug": "ds-set",
    "num": "07",
    "title": "Set",
    "summary": "Collection of unique values — no duplicates, fast membership checks.",
    "category": "fund-data-structures",
    "tier": "fundamental",
    "icon": "circle-dot",
    "color": "sky",
    "tags": [
      "set",
      "unique",
      "membership",
      "collection"
    ],
    "important": false,
    "sources": [],
    "intro": "Collection of unique values — no duplicates, fast membership checks. Ways to organize data — each structure trades speed, memory, and simplicity differently.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Set?",
        "desc": "Collection of unique values — no duplicates, fast membership checks.",
        "bullets": [
          "Choosing the right structure affects speed and code clarity",
          "Arrays and objects are built into JavaScript; others you implement or use from libraries",
          "Structure: Set — set, unique"
        ],
        "icon": "circle-dot",
        "visual": {
          "type": "definition",
          "icon": "circle-dot",
          "title": "Set",
          "bullets": [
            "Choosing the right structure affects speed and code clarity",
            "Arrays and objects are built into JavaScript; others you implement or use from libraries",
            "Structure: Set — set, unique"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Set works in practice",
        "desc": "Stores unique values only. add, has, delete are O(1) average. Use when you need fast membership checks or deduplication. JavaScript Set preserves insertion order.",
        "bullets": [
          "Core mechanism behind set",
          "Common in data structures work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Set fits in real projects",
        "desc": "In your Next.js + MongoDB projects, set connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-data-structures",
          "title": "Set"
        }
      }
    ]
  },
  {
    "id": "sorting",
    "slug": "sorting",
    "num": "01",
    "title": "Sorting",
    "summary": "Arranging data in order — overview of why and when sorting matters.",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "arrow-up-down",
    "color": "indigo",
    "tags": [
      "sorting",
      "order",
      "algorithms",
      "overview"
    ],
    "important": false,
    "sources": [],
    "intro": "Arranging data in order — overview of why and when sorting matters. Step-by-step procedures for solving problems — sorting, searching, and measuring efficiency.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Sorting?",
        "desc": "Arranging data in order — overview of why and when sorting matters.",
        "bullets": [
          "Interview staples and real-world performance decisions",
          "Big O lets you compare solutions before writing code",
          "Algorithm: Sorting — sorting, order"
        ],
        "icon": "arrow-up-down",
        "visual": {
          "type": "definition",
          "icon": "arrow-up-down",
          "title": "Sorting",
          "bullets": [
            "Interview staples and real-world performance decisions",
            "Big O lets you compare solutions before writing code",
            "Algorithm: Sorting — sorting, order"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Sorting works in practice",
        "desc": "Sorting works by applying clear rules in code. Arranging data in order — overview of why and when sorting matters. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind sorting",
          "Common in algorithms work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Sorting fits in real projects",
        "desc": "In your Next.js + MongoDB projects, sorting connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-algorithms",
          "title": "Sorting"
        }
      }
    ]
  },
  {
    "id": "bubble-sort",
    "slug": "bubble-sort",
    "num": "02",
    "title": "Bubble Sort",
    "summary": "Compare adjacent pairs and swap — simple but O(n²), good for learning.",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "arrow-up-narrow-wide",
    "color": "indigo",
    "tags": [
      "bubble sort",
      "swap",
      "comparison",
      "o(n²)"
    ],
    "important": false,
    "sources": [],
    "intro": "Compare adjacent pairs and swap — simple but O(n²), good for learning. Step-by-step procedures for solving problems — sorting, searching, and measuring efficiency.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Bubble Sort?",
        "desc": "Compare adjacent pairs and swap — simple but O(n²), good for learning.",
        "bullets": [
          "Interview staples and real-world performance decisions",
          "Big O lets you compare solutions before writing code",
          "Algorithm: Bubble Sort — bubble sort, swap"
        ],
        "icon": "arrow-up-narrow-wide",
        "visual": {
          "type": "definition",
          "icon": "arrow-up-narrow-wide",
          "title": "Bubble Sort",
          "bullets": [
            "Interview staples and real-world performance decisions",
            "Big O lets you compare solutions before writing code",
            "Algorithm: Bubble Sort — bubble sort, swap"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Bubble Sort works in practice",
        "desc": "Walk through the array comparing adjacent pairs. If left > right, swap them. After one pass, the largest element bubbles to the end. Repeat for n-1 passes. Simple to code but O(n²) — too slow for large datasets.",
        "bullets": [
          "Core mechanism behind bubble sort",
          "Common in algorithms work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "for (let i = 0; i < arr.length; i++) {\n  for (let j = 0; j < arr.length - i - 1; j++) {\n    if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];\n  }\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where Bubble Sort fits in real projects",
        "desc": "In your Next.js + MongoDB projects, bubble sort connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-algorithms",
          "title": "Bubble Sort"
        }
      }
    ]
  },
  {
    "id": "merge-sort",
    "slug": "merge-sort",
    "num": "03",
    "title": "Merge Sort",
    "summary": "Divide array in half, sort each, merge — stable O(n log n) sort.",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "git-merge",
    "color": "indigo",
    "tags": [
      "merge sort",
      "divide",
      "conquer",
      "o(n log n)"
    ],
    "important": false,
    "sources": [],
    "intro": "Divide array in half, sort each, merge — stable O(n log n) sort. Step-by-step procedures for solving problems — sorting, searching, and measuring efficiency.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Merge Sort?",
        "desc": "Divide array in half, sort each, merge — stable O(n log n) sort.",
        "bullets": [
          "Interview staples and real-world performance decisions",
          "Big O lets you compare solutions before writing code",
          "Algorithm: Merge Sort — merge sort, divide"
        ],
        "icon": "git-merge",
        "visual": {
          "type": "definition",
          "icon": "git-merge",
          "title": "Merge Sort",
          "bullets": [
            "Interview staples and real-world performance decisions",
            "Big O lets you compare solutions before writing code",
            "Algorithm: Merge Sort — merge sort, divide"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Merge Sort works in practice",
        "desc": "Split the array in half recursively until single elements. Merge sorted halves back together comparing heads. Always O(n log n) but needs extra memory for the temporary arrays.",
        "bullets": [
          "Core mechanism behind merge sort",
          "Common in algorithms work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Merge Sort fits in real projects",
        "desc": "In your Next.js + MongoDB projects, merge sort connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-algorithms",
          "title": "Merge Sort"
        }
      }
    ]
  },
  {
    "id": "quick-sort",
    "slug": "quick-sort",
    "num": "04",
    "title": "Quick Sort",
    "summary": "Pick pivot, partition, recurse — fast average case O(n log n).",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "zap",
    "color": "indigo",
    "tags": [
      "quick sort",
      "pivot",
      "partition",
      "recursion"
    ],
    "important": false,
    "sources": [],
    "intro": "Pick pivot, partition, recurse — fast average case O(n log n). Step-by-step procedures for solving problems — sorting, searching, and measuring efficiency.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Quick Sort?",
        "desc": "Pick pivot, partition, recurse — fast average case O(n log n).",
        "bullets": [
          "Interview staples and real-world performance decisions",
          "Big O lets you compare solutions before writing code",
          "Algorithm: Quick Sort — quick sort, pivot"
        ],
        "icon": "zap",
        "visual": {
          "type": "definition",
          "icon": "zap",
          "title": "Quick Sort",
          "bullets": [
            "Interview staples and real-world performance decisions",
            "Big O lets you compare solutions before writing code",
            "Algorithm: Quick Sort — quick sort, pivot"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Quick Sort works in practice",
        "desc": "Pick a pivot element. Partition: smaller elements left, larger right. Recursively sort each partition. Average O(n log n), worst O(n²) if pivot choice is bad.",
        "bullets": [
          "Core mechanism behind quick sort",
          "Common in algorithms work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Quick Sort fits in real projects",
        "desc": "In your Next.js + MongoDB projects, quick sort connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-algorithms",
          "title": "Quick Sort"
        }
      }
    ]
  },
  {
    "id": "searching",
    "slug": "searching",
    "num": "05",
    "title": "Searching",
    "summary": "Finding items in a collection — linear vs binary strategies.",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "search",
    "color": "indigo",
    "tags": [
      "searching",
      "find",
      "lookup",
      "overview"
    ],
    "important": false,
    "sources": [],
    "intro": "Finding items in a collection — linear vs binary strategies. Step-by-step procedures for solving problems — sorting, searching, and measuring efficiency.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Searching?",
        "desc": "Finding items in a collection — linear vs binary strategies.",
        "bullets": [
          "Interview staples and real-world performance decisions",
          "Big O lets you compare solutions before writing code",
          "Algorithm: Searching — searching, find"
        ],
        "icon": "search",
        "visual": {
          "type": "definition",
          "icon": "search",
          "title": "Searching",
          "bullets": [
            "Interview staples and real-world performance decisions",
            "Big O lets you compare solutions before writing code",
            "Algorithm: Searching — searching, find"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Searching works in practice",
        "desc": "Searching works by applying clear rules in code. Finding items in a collection — linear vs binary strategies. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind searching",
          "Common in algorithms work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Searching fits in real projects",
        "desc": "In your Next.js + MongoDB projects, searching connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-algorithms",
          "title": "Searching"
        }
      }
    ]
  },
  {
    "id": "linear-search",
    "slug": "linear-search",
    "num": "06",
    "title": "Linear Search",
    "summary": "Check every element one by one — works on any list, O(n) time.",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "scan",
    "color": "indigo",
    "tags": [
      "linear search",
      "sequential",
      "o(n)",
      "unsorted"
    ],
    "important": false,
    "sources": [],
    "intro": "Check every element one by one — works on any list, O(n) time. Step-by-step procedures for solving problems — sorting, searching, and measuring efficiency.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Linear Search?",
        "desc": "Check every element one by one — works on any list, O(n) time.",
        "bullets": [
          "Interview staples and real-world performance decisions",
          "Big O lets you compare solutions before writing code",
          "Algorithm: Linear Search — linear search, sequential"
        ],
        "icon": "scan",
        "visual": {
          "type": "definition",
          "icon": "scan",
          "title": "Linear Search",
          "bullets": [
            "Interview staples and real-world performance decisions",
            "Big O lets you compare solutions before writing code",
            "Algorithm: Linear Search — linear search, sequential"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Linear Search works in practice",
        "desc": "Start at index 0, compare each element to the target. Move forward until found or end of list. Works on unsorted data. Time: O(n) — every element might need checking.",
        "bullets": [
          "Core mechanism behind linear search",
          "Common in algorithms work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Linear Search fits in real projects",
        "desc": "In your Next.js + MongoDB projects, linear search connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-algorithms",
          "title": "Linear Search"
        }
      }
    ]
  },
  {
    "id": "binary-search",
    "slug": "binary-search",
    "num": "07",
    "title": "Binary Search",
    "summary": "Halve the search space each step — requires sorted data, O(log n).",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "binary",
    "color": "indigo",
    "tags": [
      "binary search",
      "sorted",
      "divide",
      "o(log n)"
    ],
    "important": false,
    "sources": [
      {
        "title": "MDN — Binary search",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
      }
    ],
    "intro": "Halve the search space each step — requires sorted data, O(log n). Step-by-step procedures for solving problems — sorting, searching, and measuring efficiency.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Binary Search?",
        "desc": "Halve the search space each step — requires sorted data, O(log n).",
        "bullets": [
          "Interview staples and real-world performance decisions",
          "Big O lets you compare solutions before writing code",
          "Algorithm: Binary Search — binary search, sorted"
        ],
        "icon": "binary",
        "visual": {
          "type": "definition",
          "icon": "binary",
          "title": "Binary Search",
          "bullets": [
            "Interview staples and real-world performance decisions",
            "Big O lets you compare solutions before writing code",
            "Algorithm: Binary Search — binary search, sorted"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Binary Search works in practice",
        "desc": "Requires a sorted array. Compare target to middle element. If too small, search left half; if too large, search right half. Repeat until found or range is empty. Time: O(log n).",
        "bullets": [
          "Core mechanism behind binary search",
          "Common in algorithms work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "function search(arr, target) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where Binary Search fits in real projects",
        "desc": "In your Next.js + MongoDB projects, binary search connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-algorithms",
          "title": "Binary Search"
        }
      }
    ]
  },
  {
    "id": "recursion",
    "slug": "recursion",
    "num": "08",
    "title": "Recursion",
    "summary": "A function that calls itself — base case + recursive case.",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "repeat",
    "color": "indigo",
    "tags": [
      "recursion",
      "base case",
      "self-call",
      "stack"
    ],
    "important": false,
    "sources": [],
    "intro": "A function that calls itself — base case + recursive case. Step-by-step procedures for solving problems — sorting, searching, and measuring efficiency.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Recursion?",
        "desc": "A function that calls itself — base case + recursive case.",
        "bullets": [
          "Interview staples and real-world performance decisions",
          "Big O lets you compare solutions before writing code",
          "Algorithm: Recursion — recursion, base case"
        ],
        "icon": "repeat",
        "visual": {
          "type": "definition",
          "icon": "repeat",
          "title": "Recursion",
          "bullets": [
            "Interview staples and real-world performance decisions",
            "Big O lets you compare solutions before writing code",
            "Algorithm: Recursion — recursion, base case"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Recursion works in practice",
        "desc": "A recursive function solves a problem by calling itself on a smaller subproblem. Every recursion needs a base case (stop condition) and a recursive case (smaller input). Risk: stack overflow if base case is missing.",
        "bullets": [
          "Core mechanism behind recursion",
          "Common in algorithms work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "function factorial(n) {\n  if (n <= 1) return 1; // base case\n  return n * factorial(n - 1);\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where Recursion fits in real projects",
        "desc": "In your Next.js + MongoDB projects, recursion connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "fund-algorithms",
          "title": "Recursion"
        }
      }
    ]
  },
  {
    "id": "big-o",
    "slug": "big-o",
    "num": "09",
    "title": "Time Complexity (Big O)",
    "summary": "How runtime grows with input size — O(1), O(n), O(n²), O(log n).",
    "category": "fund-algorithms",
    "tier": "fundamental",
    "icon": "trending-up",
    "color": "indigo",
    "tags": [
      "big o",
      "complexity",
      "performance",
      "important"
    ],
    "important": true,
    "sources": [
      {
        "title": "Big-O Cheat Sheet",
        "url": "https://www.bigocheatsheet.com/"
      }
    ],
    "intro": "Big O describes how an algorithm's runtime or memory grows as input size increases. It's the language engineers use to compare solutions.",
    "steps": [
      {
        "kicker": "Notation",
        "title": "What Big O means",
        "desc": "O(1) = constant time regardless of input size. O(n) = grows linearly. O(n²) = grows with square of input. O(log n) = halves problem each step.",
        "bullets": [
          "O(1) — array index access",
          "O(n) — linear search",
          "O(log n) — binary search",
          "O(n²) — nested loops / bubble sort"
        ],
        "icon": "trending-up"
      },
      {
        "kicker": "Compare",
        "title": "Ranking common complexities",
        "desc": "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n). Prefer lower complexity when data grows.",
        "bullets": [
          "10,000 items: O(n²) = 100M ops",
          "Same data: O(n log n) ≈ 130K ops",
          "Always consider worst case"
        ],
        "icon": "bar-chart"
      },
      {
        "kicker": "Practice",
        "title": "Spot complexity in code",
        "desc": "Single loop = O(n). Nested loop = O(n²). Halving each step = O(log n). Hash map lookup = O(1) average.",
        "bullets": [
          "Count loops and nesting depth",
          "Sorting usually O(n log n) minimum",
          "Space complexity counts extra memory"
        ],
        "icon": "search"
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
    "tier": "middle",
    "icon": "play-circle",
    "color": "amber",
    "tags": [
      "execution",
      "context",
      "hoisting"
    ],
    "important": false,
    "sources": [],
    "intro": "How JavaScript creates an environment when code runs. JavaScript runtime behavior — how code executes, handles async work, and manages memory.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Execution Context?",
        "desc": "How JavaScript creates an environment when code runs.",
        "bullets": [
          "Runs in browsers and Node.js — same language, different APIs",
          "Understanding runtime behavior prevents subtle async bugs",
          "Key terms: execution, context, hoisting"
        ],
        "icon": "play-circle",
        "visual": {
          "type": "definition",
          "icon": "play-circle",
          "title": "Execution Context",
          "bullets": [
            "Runs in browsers and Node.js — same language, different APIs",
            "Understanding runtime behavior prevents subtle async bugs",
            "Key terms: execution, context, hoisting"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Execution Context works in practice",
        "desc": "Execution Context works by applying clear rules in code. How JavaScript creates an environment when code runs. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind execution context",
          "Common in javascript deep understanding work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Execution Context fits in real projects",
        "desc": "In your Next.js + MongoDB projects, execution context connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "javascript",
          "title": "Execution Context"
        }
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
    "tier": "middle",
    "icon": "layers",
    "color": "amber",
    "tags": [
      "call stack",
      "stack overflow",
      "functions"
    ],
    "important": false,
    "sources": [],
    "intro": "The stack of functions waiting to finish — last in, first out. JavaScript runtime behavior — how code executes, handles async work, and manages memory.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Call Stack?",
        "desc": "The stack of functions waiting to finish — last in, first out.",
        "bullets": [
          "Runs in browsers and Node.js — same language, different APIs",
          "Understanding runtime behavior prevents subtle async bugs",
          "Key terms: call stack, stack overflow, functions"
        ],
        "icon": "layers",
        "visual": {
          "type": "definition",
          "icon": "layers",
          "title": "Call Stack",
          "bullets": [
            "Runs in browsers and Node.js — same language, different APIs",
            "Understanding runtime behavior prevents subtle async bugs",
            "Key terms: call stack, stack overflow, functions"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Call Stack works in practice",
        "desc": "Call Stack works by applying clear rules in code. The stack of functions waiting to finish — last in, first out. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind call stack",
          "Common in javascript deep understanding work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Call Stack fits in real projects",
        "desc": "In your Next.js + MongoDB projects, call stack connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "javascript",
          "title": "Call Stack"
        }
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
    "tier": "middle",
    "icon": "refresh-cw",
    "color": "amber",
    "tags": [
      "event loop",
      "async",
      "microtasks",
      "important"
    ],
    "important": true,
    "sources": [
      {
        "title": "MDN — Event Loop",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop"
      },
      {
        "title": "Loupe — Event loop visualizer",
        "url": "http://latentflip.com/loupe/"
      }
    ],
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
    "tier": "middle",
    "icon": "timer",
    "color": "amber",
    "tags": [
      "promises",
      "async",
      "await",
      "then"
    ],
    "important": false,
    "sources": [
      {
        "title": "MDN — async/await",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
      }
    ],
    "intro": "Handling future results without blocking the main thread. JavaScript runtime behavior — how code executes, handles async work, and manages memory.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Promises & async/await?",
        "desc": "Handling future results without blocking the main thread.",
        "bullets": [
          "Runs in browsers and Node.js — same language, different APIs",
          "Understanding runtime behavior prevents subtle async bugs",
          "Key terms: promises, async, await, then"
        ],
        "icon": "timer",
        "visual": {
          "type": "definition",
          "icon": "timer",
          "title": "Promises & async/await",
          "bullets": [
            "Runs in browsers and Node.js — same language, different APIs",
            "Understanding runtime behavior prevents subtle async bugs",
            "Key terms: promises, async, await, then"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Promises & async/await works in practice",
        "desc": "A Promise represents a value that will exist later. .then() runs on success; .catch() on failure. async/await is syntactic sugar — await pauses the function until the Promise settles, without blocking the main thread.",
        "bullets": [
          "Core mechanism behind promises & async/await",
          "Common in javascript deep understanding work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "async function fetchUser(id) {\n  const res = await fetch(`/api/users/${id}`);\n  return res.json();\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where Promises & async/await fits in real projects",
        "desc": "In your Next.js + MongoDB projects, promises & async/await connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "javascript",
          "title": "Promises & async/await"
        }
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
    "tier": "middle",
    "icon": "lock",
    "color": "amber",
    "tags": [
      "closures",
      "callbacks",
      "private"
    ],
    "important": false,
    "sources": [],
    "intro": "Functions that close over variables — factories, privacy, and callbacks. JavaScript runtime behavior — how code executes, handles async work, and manages memory.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Closures (Deep Dive)?",
        "desc": "Functions that close over variables — factories, privacy, and callbacks.",
        "bullets": [
          "Runs in browsers and Node.js — same language, different APIs",
          "Understanding runtime behavior prevents subtle async bugs",
          "Key terms: closures, callbacks, private"
        ],
        "icon": "lock",
        "visual": {
          "type": "definition",
          "icon": "lock",
          "title": "Closures (Deep Dive)",
          "bullets": [
            "Runs in browsers and Node.js — same language, different APIs",
            "Understanding runtime behavior prevents subtle async bugs",
            "Key terms: closures, callbacks, private"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Closures (Deep Dive) works in practice",
        "desc": "Closures (Deep Dive) works by applying clear rules in code. Functions that close over variables — factories, privacy, and callbacks. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind closures (deep dive)",
          "Common in javascript deep understanding work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Closures (Deep Dive) fits in real projects",
        "desc": "In your Next.js + MongoDB projects, closures (deep dive) connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "javascript",
          "title": "Closures (Deep Dive)"
        }
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
    "tier": "middle",
    "icon": "git-merge",
    "color": "amber",
    "tags": [
      "prototypes",
      "inheritance",
      "class"
    ],
    "important": false,
    "sources": [],
    "intro": "How objects inherit behavior through the prototype chain. JavaScript runtime behavior — how code executes, handles async work, and manages memory.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Prototypes & Inheritance?",
        "desc": "How objects inherit behavior through the prototype chain.",
        "bullets": [
          "Runs in browsers and Node.js — same language, different APIs",
          "Understanding runtime behavior prevents subtle async bugs",
          "Key terms: prototypes, inheritance, class"
        ],
        "icon": "git-merge",
        "visual": {
          "type": "definition",
          "icon": "git-merge",
          "title": "Prototypes & Inheritance",
          "bullets": [
            "Runs in browsers and Node.js — same language, different APIs",
            "Understanding runtime behavior prevents subtle async bugs",
            "Key terms: prototypes, inheritance, class"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Prototypes & Inheritance works in practice",
        "desc": "Prototypes & Inheritance works by applying clear rules in code. How objects inherit behavior through the prototype chain. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind prototypes & inheritance",
          "Common in javascript deep understanding work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Prototypes & Inheritance fits in real projects",
        "desc": "In your Next.js + MongoDB projects, prototypes & inheritance connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "javascript",
          "title": "Prototypes & Inheritance"
        }
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
    "tier": "middle",
    "icon": "target",
    "color": "amber",
    "tags": [
      "this",
      "bind",
      "call",
      "apply"
    ],
    "important": false,
    "sources": [],
    "intro": "What \"this\" refers to — and why it changes with call site and bind. JavaScript runtime behavior — how code executes, handles async work, and manages memory.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is The this Keyword?",
        "desc": "What \"this\" refers to — and why it changes with call site and bind.",
        "bullets": [
          "Runs in browsers and Node.js — same language, different APIs",
          "Understanding runtime behavior prevents subtle async bugs",
          "Key terms: this, bind, call, apply"
        ],
        "icon": "target",
        "visual": {
          "type": "definition",
          "icon": "target",
          "title": "The this Keyword",
          "bullets": [
            "Runs in browsers and Node.js — same language, different APIs",
            "Understanding runtime behavior prevents subtle async bugs",
            "Key terms: this, bind, call, apply"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How The this Keyword works in practice",
        "desc": "The this Keyword works by applying clear rules in code. What \"this\" refers to — and why it changes with call site and bind. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind the this keyword",
          "Common in javascript deep understanding work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where The this Keyword fits in real projects",
        "desc": "In your Next.js + MongoDB projects, the this keyword connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "javascript",
          "title": "The this Keyword"
        }
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
    "tier": "middle",
    "icon": "package",
    "color": "amber",
    "tags": [
      "esm",
      "commonjs",
      "import",
      "export"
    ],
    "important": false,
    "sources": [],
    "intro": "import/export vs require — splitting code into reusable files. JavaScript runtime behavior — how code executes, handles async work, and manages memory.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Modules (ESM vs CommonJS)?",
        "desc": "import/export vs require — splitting code into reusable files.",
        "bullets": [
          "Runs in browsers and Node.js — same language, different APIs",
          "Understanding runtime behavior prevents subtle async bugs",
          "Key terms: esm, commonjs, import, export"
        ],
        "icon": "package",
        "visual": {
          "type": "definition",
          "icon": "package",
          "title": "Modules (ESM vs CommonJS)",
          "bullets": [
            "Runs in browsers and Node.js — same language, different APIs",
            "Understanding runtime behavior prevents subtle async bugs",
            "Key terms: esm, commonjs, import, export"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Modules (ESM vs CommonJS) works in practice",
        "desc": "Modules (ESM vs CommonJS) works by applying clear rules in code. import/export vs require — splitting code into reusable files. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind modules (esm vs commonjs)",
          "Common in javascript deep understanding work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Modules (ESM vs CommonJS) fits in real projects",
        "desc": "In your Next.js + MongoDB projects, modules (esm vs commonjs) connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "javascript",
          "title": "Modules (ESM vs CommonJS)"
        }
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
    "tier": "middle",
    "icon": "file-type",
    "color": "violet",
    "tags": [
      "types",
      "interfaces",
      "typescript"
    ],
    "important": false,
    "sources": [],
    "intro": "When to use type aliases vs interfaces for shapes and contracts. Static types on top of JavaScript — catching mistakes before runtime and documenting contracts.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Types vs Interfaces?",
        "desc": "When to use type aliases vs interfaces for shapes and contracts.",
        "bullets": [
          "Compile-time checks — errors caught before users see them",
          "Types document what functions expect and return",
          "Works alongside JavaScript — gradual adoption is fine"
        ],
        "icon": "file-type",
        "visual": {
          "type": "definition",
          "icon": "file-type",
          "title": "Types vs Interfaces",
          "bullets": [
            "Compile-time checks — errors caught before users see them",
            "Types document what functions expect and return",
            "Works alongside JavaScript — gradual adoption is fine"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Types vs Interfaces works in practice",
        "desc": "Types vs Interfaces works by applying clear rules in code. When to use type aliases vs interfaces for shapes and contracts. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind types vs interfaces",
          "Common in typescript work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "interface User { id: string; name: string; }\ntype Role = \"admin\" | \"user\";"
      },
      {
        "kicker": "In your stack",
        "title": "Where Types vs Interfaces fits in real projects",
        "desc": "In your Next.js + MongoDB projects, types vs interfaces connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "typescript",
          "title": "Types vs Interfaces"
        }
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
    "tier": "middle",
    "icon": "boxes",
    "color": "violet",
    "tags": [
      "generics",
      "type parameters"
    ],
    "important": false,
    "sources": [],
    "intro": "Reusable types that work with many different values — Array<T>, Promise<T>. Static types on top of JavaScript — catching mistakes before runtime and documenting contracts.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Generics?",
        "desc": "Reusable types that work with many different values — Array<T>, Promise<T>.",
        "bullets": [
          "Compile-time checks — errors caught before users see them",
          "Types document what functions expect and return",
          "Works alongside JavaScript — gradual adoption is fine"
        ],
        "icon": "boxes",
        "visual": {
          "type": "definition",
          "icon": "boxes",
          "title": "Generics",
          "bullets": [
            "Compile-time checks — errors caught before users see them",
            "Types document what functions expect and return",
            "Works alongside JavaScript — gradual adoption is fine"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Generics works in practice",
        "desc": "Generics works by applying clear rules in code. Reusable types that work with many different values — Array<T>, Promise<T>. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "function identity<T>(arg: T): T { return arg; }",
          "Array<string> means array of strings",
          "Generics keep types flexible without using any"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "type ApiResponse<T> = { data: T; error?: string };"
      },
      {
        "kicker": "In your stack",
        "title": "Where Generics fits in real projects",
        "desc": "In your Next.js + MongoDB projects, generics connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "typescript",
          "title": "Generics"
        }
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
    "tier": "middle",
    "icon": "wrench",
    "color": "violet",
    "tags": [
      "partial",
      "pick",
      "omit",
      "utility"
    ],
    "important": false,
    "sources": [],
    "intro": "Partial, Pick, Omit, Record — built-in type transformers. Static types on top of JavaScript — catching mistakes before runtime and documenting contracts.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Utility Types?",
        "desc": "Partial, Pick, Omit, Record — built-in type transformers.",
        "bullets": [
          "Compile-time checks — errors caught before users see them",
          "Types document what functions expect and return",
          "Works alongside JavaScript — gradual adoption is fine"
        ],
        "icon": "wrench",
        "visual": {
          "type": "definition",
          "icon": "wrench",
          "title": "Utility Types",
          "bullets": [
            "Compile-time checks — errors caught before users see them",
            "Types document what functions expect and return",
            "Works alongside JavaScript — gradual adoption is fine"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Utility Types works in practice",
        "desc": "Utility Types works by applying clear rules in code. Partial, Pick, Omit, Record — built-in type transformers. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind utility types",
          "Common in typescript work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Utility Types fits in real projects",
        "desc": "In your Next.js + MongoDB projects, utility types connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "typescript",
          "title": "Utility Types"
        }
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
    "tier": "middle",
    "icon": "scan",
    "color": "violet",
    "tags": [
      "inference",
      "implicit",
      "types"
    ],
    "important": false,
    "sources": [],
    "intro": "How TypeScript figures out types without you writing them. Static types on top of JavaScript — catching mistakes before runtime and documenting contracts.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Type Inference?",
        "desc": "How TypeScript figures out types without you writing them.",
        "bullets": [
          "Compile-time checks — errors caught before users see them",
          "Types document what functions expect and return",
          "Works alongside JavaScript — gradual adoption is fine"
        ],
        "icon": "scan",
        "visual": {
          "type": "definition",
          "icon": "scan",
          "title": "Type Inference",
          "bullets": [
            "Compile-time checks — errors caught before users see them",
            "Types document what functions expect and return",
            "Works alongside JavaScript — gradual adoption is fine"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Type Inference works in practice",
        "desc": "Type Inference works by applying clear rules in code. How TypeScript figures out types without you writing them. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind type inference",
          "Common in typescript work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Type Inference fits in real projects",
        "desc": "In your Next.js + MongoDB projects, type inference connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "typescript",
          "title": "Type Inference"
        }
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
    "tier": "middle",
    "icon": "filter",
    "color": "violet",
    "tags": [
      "narrowing",
      "guards",
      "unions"
    ],
    "important": false,
    "sources": [],
    "intro": "Refining union types inside if blocks — typeof, in, discriminated unions. Static types on top of JavaScript — catching mistakes before runtime and documenting contracts.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Narrowing?",
        "desc": "Refining union types inside if blocks — typeof, in, discriminated unions.",
        "bullets": [
          "Compile-time checks — errors caught before users see them",
          "Types document what functions expect and return",
          "Works alongside JavaScript — gradual adoption is fine"
        ],
        "icon": "filter",
        "visual": {
          "type": "definition",
          "icon": "filter",
          "title": "Narrowing",
          "bullets": [
            "Compile-time checks — errors caught before users see them",
            "Types document what functions expect and return",
            "Works alongside JavaScript — gradual adoption is fine"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Narrowing works in practice",
        "desc": "Narrowing works by applying clear rules in code. Refining union types inside if blocks — typeof, in, discriminated unions. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind narrowing",
          "Common in typescript work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Narrowing fits in real projects",
        "desc": "In your Next.js + MongoDB projects, narrowing connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "typescript",
          "title": "Narrowing"
        }
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
    "tier": "middle",
    "icon": "shield",
    "color": "violet",
    "tags": [
      "api",
      "dto",
      "zod",
      "validation"
    ],
    "important": false,
    "sources": [],
    "intro": "Typing request/response shapes so frontend and backend agree. Static types on top of JavaScript — catching mistakes before runtime and documenting contracts.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Type Safety in APIs?",
        "desc": "Typing request/response shapes so frontend and backend agree.",
        "bullets": [
          "Compile-time checks — errors caught before users see them",
          "Types document what functions expect and return",
          "Works alongside JavaScript — gradual adoption is fine"
        ],
        "icon": "shield",
        "visual": {
          "type": "definition",
          "icon": "shield",
          "title": "Type Safety in APIs",
          "bullets": [
            "Compile-time checks — errors caught before users see them",
            "Types document what functions expect and return",
            "Works alongside JavaScript — gradual adoption is fine"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Type Safety in APIs works in practice",
        "desc": "Type Safety in APIs works by applying clear rules in code. Typing request/response shapes so frontend and backend agree. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind type safety in apis",
          "Common in typescript work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Type Safety in APIs fits in real projects",
        "desc": "In your Next.js + MongoDB projects, type safety in apis connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "typescript",
          "title": "Type Safety in APIs"
        }
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
    "tier": "middle",
    "icon": "code",
    "color": "sky",
    "tags": [
      "jsx",
      "syntax",
      "components"
    ],
    "important": false,
    "sources": [],
    "intro": "HTML-like syntax inside JavaScript for describing UI. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is JSX?",
        "desc": "HTML-like syntax inside JavaScript for describing UI.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "code",
        "visual": {
          "type": "definition",
          "icon": "code",
          "title": "JSX",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How JSX works in practice",
        "desc": "JSX looks like HTML but compiles to JavaScript function calls: React.createElement(type, props, children). You must close tags, use className instead of class, and wrap multiple elements in a fragment <>...</>.",
        "bullets": [
          "Core mechanism behind jsx",
          "Common in react work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "function Card({ title }) {\n  return <div className=\"card\"><h2>{title}</h2></div>;\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where JSX fits in real projects",
        "desc": "In your Next.js + MongoDB projects, jsx connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "JSX"
        }
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
    "tier": "middle",
    "icon": "arrow-right-left",
    "color": "sky",
    "tags": [
      "props",
      "parent",
      "child"
    ],
    "important": false,
    "sources": [],
    "intro": "Passing data from parent to child components — read-only inputs. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Props?",
        "desc": "Passing data from parent to child components — read-only inputs.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "arrow-right-left",
        "visual": {
          "type": "definition",
          "icon": "arrow-right-left",
          "title": "Props",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Props works in practice",
        "desc": "Props are read-only inputs passed from parent to child. <UserCard name=\"Ada\" age={42} /> — the child receives { name: \"Ada\", age: 42 }. Changing props in the child does not affect the parent.",
        "bullets": [
          "Core mechanism behind props",
          "Common in react work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "<Button label=\"Save\" onClick={handleSave} />"
      },
      {
        "kicker": "In your stack",
        "title": "Where Props fits in real projects",
        "desc": "In your Next.js + MongoDB projects, props connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "Props"
        }
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
    "tier": "middle",
    "icon": "toggle-left",
    "color": "sky",
    "tags": [
      "state",
      "useState",
      "reactive"
    ],
    "important": false,
    "sources": [],
    "intro": "Data that changes over time and triggers re-renders when updated. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is State?",
        "desc": "Data that changes over time and triggers re-renders when updated.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "toggle-left",
        "visual": {
          "type": "definition",
          "icon": "toggle-left",
          "title": "State",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How State works in practice",
        "desc": "useState returns [value, setValue]. Calling setValue triggers a re-render with the new value. State updates are asynchronous and batched — never mutate state directly; always use the setter.",
        "bullets": [
          "Core mechanism behind state",
          "Common in react work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "const [count, setCount] = useState(0);\nsetCount(count + 1);"
      },
      {
        "kicker": "In your stack",
        "title": "Where State fits in real projects",
        "desc": "In your Next.js + MongoDB projects, state connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "State"
        }
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
    "tier": "middle",
    "icon": "share-2",
    "color": "sky",
    "tags": [
      "context",
      "provider",
      "consumer"
    ],
    "important": false,
    "sources": [],
    "intro": "Sharing data across the tree without prop drilling. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Context API?",
        "desc": "Sharing data across the tree without prop drilling.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "share-2",
        "visual": {
          "type": "definition",
          "icon": "share-2",
          "title": "Context API",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Context API works in practice",
        "desc": "Context API works by applying clear rules in code. Sharing data across the tree without prop drilling. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "createContext(defaultValue) defines the context",
          "<Provider value={data}> wraps the tree",
          "useContext(ctx) reads the value in any descendant"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Context API fits in real projects",
        "desc": "In your Next.js + MongoDB projects, context api connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "Context API"
        }
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
    "tier": "middle",
    "icon": "monitor-smartphone",
    "color": "sky",
    "tags": [
      "rsc",
      "server components",
      "client components"
    ],
    "important": false,
    "sources": [],
    "intro": "What runs on the server vs the browser in modern React apps. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Server vs Client Components?",
        "desc": "What runs on the server vs the browser in modern React apps.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "monitor-smartphone",
        "visual": {
          "type": "definition",
          "icon": "monitor-smartphone",
          "title": "Server vs Client Components",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Server vs Client Components works in practice",
        "desc": "Server vs Client Components works by applying clear rules in code. What runs on the server vs the browser in modern React apps. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind server vs client components",
          "Common in react work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Server vs Client Components fits in real projects",
        "desc": "In your Next.js + MongoDB projects, server vs client components connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "Server vs Client Components"
        }
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
    "tier": "middle",
    "icon": "eye",
    "color": "sky",
    "tags": [
      "render",
      "reconciliation",
      "virtual dom"
    ],
    "important": false,
    "sources": [],
    "intro": "When and why React re-renders — reconciliation and the virtual DOM. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Rendering Behavior?",
        "desc": "When and why React re-renders — reconciliation and the virtual DOM.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "eye",
        "visual": {
          "type": "definition",
          "icon": "eye",
          "title": "Rendering Behavior",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Rendering Behavior works in practice",
        "desc": "Rendering Behavior works by applying clear rules in code. When and why React re-renders — reconciliation and the virtual DOM. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind rendering behavior",
          "Common in react work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Rendering Behavior fits in real projects",
        "desc": "In your Next.js + MongoDB projects, rendering behavior connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "Rendering Behavior"
        }
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
    "tier": "middle",
    "icon": "zap",
    "color": "sky",
    "tags": [
      "memo",
      "usememo",
      "usecallback",
      "performance"
    ],
    "important": false,
    "sources": [],
    "intro": "useMemo, useCallback, React.memo — avoiding unnecessary work. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Re-renders & Optimization?",
        "desc": "useMemo, useCallback, React.memo — avoiding unnecessary work.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "zap",
        "visual": {
          "type": "definition",
          "icon": "zap",
          "title": "Re-renders & Optimization",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Re-renders & Optimization works in practice",
        "desc": "Re-renders & Optimization works by applying clear rules in code. useMemo, useCallback, React.memo — avoiding unnecessary work. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind re-renders & optimization",
          "Common in react work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Re-renders & Optimization fits in real projects",
        "desc": "In your Next.js + MongoDB projects, re-renders & optimization connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "Re-renders & Optimization"
        }
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
    "tier": "middle",
    "icon": "anchor",
    "color": "sky",
    "tags": [
      "hooks",
      "useeffect",
      "usememo",
      "usecallback"
    ],
    "important": false,
    "sources": [],
    "intro": "useEffect, useMemo, useCallback — attaching logic to components. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Hooks?",
        "desc": "useEffect, useMemo, useCallback — attaching logic to components.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "anchor",
        "visual": {
          "type": "definition",
          "icon": "anchor",
          "title": "Hooks",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Hooks works in practice",
        "desc": "Hooks works by applying clear rules in code. useEffect, useMemo, useCallback — attaching logic to components. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind hooks",
          "Common in react work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Hooks fits in real projects",
        "desc": "In your Next.js + MongoDB projects, hooks connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "Hooks"
        }
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
    "tier": "middle",
    "icon": "form-input",
    "color": "sky",
    "tags": [
      "forms",
      "controlled",
      "uncontrolled",
      "refs"
    ],
    "important": false,
    "sources": [],
    "intro": "React state drives inputs vs the DOM holds the value. React models UI as a function of state. Components re-render when data changes.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Controlled vs Uncontrolled Forms?",
        "desc": "React state drives inputs vs the DOM holds the value.",
        "bullets": [
          "UI = f(state) — when state changes, React re-renders",
          "Components compose into trees — props flow down, events bubble up",
          "Used in your Next.js App Router pages and client components"
        ],
        "icon": "form-input",
        "visual": {
          "type": "definition",
          "icon": "form-input",
          "title": "Controlled vs Uncontrolled Forms",
          "bullets": [
            "UI = f(state) — when state changes, React re-renders",
            "Components compose into trees — props flow down, events bubble up",
            "Used in your Next.js App Router pages and client components"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Controlled vs Uncontrolled Forms works in practice",
        "desc": "Controlled vs Uncontrolled Forms works by applying clear rules in code. React state drives inputs vs the DOM holds the value. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind controlled vs uncontrolled forms",
          "Common in react work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Controlled vs Uncontrolled Forms fits in real projects",
        "desc": "In your Next.js + MongoDB projects, controlled vs uncontrolled forms connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Used in every component you write",
          "Pairs with Next.js App Router",
          "Hooks replace class lifecycle methods"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "react",
          "title": "Controlled vs Uncontrolled Forms"
        }
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
    "tier": "middle",
    "icon": "route",
    "color": "indigo",
    "tags": [
      "app router",
      "routing",
      "layouts"
    ],
    "important": false,
    "sources": [
      {
        "title": "Next.js — App Router",
        "url": "https://nextjs.org/docs/app"
      }
    ],
    "intro": "File-based routing with layouts, loading, and error boundaries. Next.js adds routing, server rendering, and data patterns on top of React.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is App Router?",
        "desc": "File-based routing with layouts, loading, and error boundaries.",
        "bullets": [
          "Built on React — adds file-based routing and server features",
          "App Router is the modern default (app/ directory)",
          "Server Components run on the server; Client Components use \"use client\""
        ],
        "icon": "route",
        "visual": {
          "type": "definition",
          "icon": "route",
          "title": "App Router",
          "bullets": [
            "Built on React — adds file-based routing and server features",
            "App Router is the modern default (app/ directory)",
            "Server Components run on the server; Client Components use \"use client\""
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How App Router works in practice",
        "desc": "Files in app/ define routes. page.tsx is the UI; layout.tsx wraps children; loading.tsx shows while fetching. Folders create URL segments — app/blog/[slug]/page.tsx matches /blog/hello.",
        "bullets": [
          "Core mechanism behind app router",
          "Common in next.js work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where App Router fits in real projects",
        "desc": "In your Next.js + MongoDB projects, app router connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Your main framework for full-stack apps",
          "Combines with Kinde/NextAuth for login",
          "Server Actions replace many API routes"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "nextjs",
          "title": "App Router"
        }
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
    "tier": "middle",
    "icon": "server",
    "color": "indigo",
    "tags": [
      "server actions",
      "mutations",
      "forms"
    ],
    "important": false,
    "sources": [
      {
        "title": "Next.js — Server Actions",
        "url": "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
      }
    ],
    "intro": "Call server functions directly from forms and components. Next.js adds routing, server rendering, and data patterns on top of React.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Server Actions?",
        "desc": "Call server functions directly from forms and components.",
        "bullets": [
          "Built on React — adds file-based routing and server features",
          "App Router is the modern default (app/ directory)",
          "Server Components run on the server; Client Components use \"use client\""
        ],
        "icon": "server",
        "visual": {
          "type": "definition",
          "icon": "server",
          "title": "Server Actions",
          "bullets": [
            "Built on React — adds file-based routing and server features",
            "App Router is the modern default (app/ directory)",
            "Server Components run on the server; Client Components use \"use client\""
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Server Actions works in practice",
        "desc": "A Server Action is an async function marked \"use server\". Forms can call it directly via action={fn}. It runs on the server — safe for database writes and secrets. No API route boilerplate needed.",
        "bullets": [
          "Core mechanism behind server actions",
          "Common in next.js work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "\"use server\"\nexport async function createPost(formData) {\n  await db.posts.insertOne({ title: formData.get(\"title\") });\n}"
      },
      {
        "kicker": "In your stack",
        "title": "Where Server Actions fits in real projects",
        "desc": "In your Next.js + MongoDB projects, server actions connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Your main framework for full-stack apps",
          "Combines with Kinde/NextAuth for login",
          "Server Actions replace many API routes"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "nextjs",
          "title": "Server Actions"
        }
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
    "tier": "middle",
    "icon": "layout-template",
    "color": "indigo",
    "tags": [
      "layouts",
      "nested",
      "routes"
    ],
    "important": false,
    "sources": [],
    "intro": "Nested routes, shared layouts, and parallel routes. Next.js adds routing, server rendering, and data patterns on top of React.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Routing & Layouts?",
        "desc": "Nested routes, shared layouts, and parallel routes.",
        "bullets": [
          "Built on React — adds file-based routing and server features",
          "App Router is the modern default (app/ directory)",
          "Server Components run on the server; Client Components use \"use client\""
        ],
        "icon": "layout-template",
        "visual": {
          "type": "definition",
          "icon": "layout-template",
          "title": "Routing & Layouts",
          "bullets": [
            "Built on React — adds file-based routing and server features",
            "App Router is the modern default (app/ directory)",
            "Server Components run on the server; Client Components use \"use client\""
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Routing & Layouts works in practice",
        "desc": "Routing & Layouts works by applying clear rules in code. Nested routes, shared layouts, and parallel routes. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind routing & layouts",
          "Common in next.js work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Routing & Layouts fits in real projects",
        "desc": "In your Next.js + MongoDB projects, routing & layouts connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Your main framework for full-stack apps",
          "Combines with Kinde/NextAuth for login",
          "Server Actions replace many API routes"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "nextjs",
          "title": "Routing & Layouts"
        }
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
    "tier": "middle",
    "icon": "download",
    "color": "indigo",
    "tags": [
      "fetch",
      "ssr",
      "streaming"
    ],
    "important": false,
    "sources": [],
    "intro": "fetch in Server Components, loading states, and streaming. Next.js adds routing, server rendering, and data patterns on top of React.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Data Fetching Patterns?",
        "desc": "fetch in Server Components, loading states, and streaming.",
        "bullets": [
          "Built on React — adds file-based routing and server features",
          "App Router is the modern default (app/ directory)",
          "Server Components run on the server; Client Components use \"use client\""
        ],
        "icon": "download",
        "visual": {
          "type": "definition",
          "icon": "download",
          "title": "Data Fetching Patterns",
          "bullets": [
            "Built on React — adds file-based routing and server features",
            "App Router is the modern default (app/ directory)",
            "Server Components run on the server; Client Components use \"use client\""
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Data Fetching Patterns works in practice",
        "desc": "Data Fetching Patterns works by applying clear rules in code. fetch in Server Components, loading states, and streaming. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind data fetching patterns",
          "Common in next.js work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Data Fetching Patterns fits in real projects",
        "desc": "In your Next.js + MongoDB projects, data fetching patterns connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Your main framework for full-stack apps",
          "Combines with Kinde/NextAuth for login",
          "Server Actions replace many API routes"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "nextjs",
          "title": "Data Fetching Patterns"
        }
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
    "tier": "middle",
    "icon": "hard-drive",
    "color": "indigo",
    "tags": [
      "cache",
      "isr",
      "revalidate"
    ],
    "important": false,
    "sources": [],
    "intro": "Next.js cache layers, ISR, and on-demand revalidation. Next.js adds routing, server rendering, and data patterns on top of React.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Caching & Revalidation?",
        "desc": "Next.js cache layers, ISR, and on-demand revalidation.",
        "bullets": [
          "Built on React — adds file-based routing and server features",
          "App Router is the modern default (app/ directory)",
          "Server Components run on the server; Client Components use \"use client\""
        ],
        "icon": "hard-drive",
        "visual": {
          "type": "definition",
          "icon": "hard-drive",
          "title": "Caching & Revalidation",
          "bullets": [
            "Built on React — adds file-based routing and server features",
            "App Router is the modern default (app/ directory)",
            "Server Components run on the server; Client Components use \"use client\""
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Caching & Revalidation works in practice",
        "desc": "Caching & Revalidation works by applying clear rules in code. Next.js cache layers, ISR, and on-demand revalidation. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind caching & revalidation",
          "Common in next.js work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Caching & Revalidation fits in real projects",
        "desc": "In your Next.js + MongoDB projects, caching & revalidation connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Your main framework for full-stack apps",
          "Combines with Kinde/NextAuth for login",
          "Server Actions replace many API routes"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "nextjs",
          "title": "Caching & Revalidation"
        }
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
    "tier": "middle",
    "icon": "key",
    "color": "indigo",
    "tags": [
      "nextauth",
      "kinde",
      "middleware",
      "auth"
    ],
    "important": false,
    "sources": [],
    "intro": "NextAuth, Kinde, middleware — protecting routes and sessions. Next.js adds routing, server rendering, and data patterns on top of React.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Authentication in Next.js?",
        "desc": "NextAuth, Kinde, middleware — protecting routes and sessions.",
        "bullets": [
          "Built on React — adds file-based routing and server features",
          "App Router is the modern default (app/ directory)",
          "Server Components run on the server; Client Components use \"use client\""
        ],
        "icon": "key",
        "visual": {
          "type": "definition",
          "icon": "key",
          "title": "Authentication in Next.js",
          "bullets": [
            "Built on React — adds file-based routing and server features",
            "App Router is the modern default (app/ directory)",
            "Server Components run on the server; Client Components use \"use client\""
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Authentication in Next.js works in practice",
        "desc": "Authentication in Next.js works by applying clear rules in code. NextAuth, Kinde, middleware — protecting routes and sessions. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind authentication in next.js",
          "Common in next.js work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Authentication in Next.js fits in real projects",
        "desc": "In your Next.js + MongoDB projects, authentication in next.js connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Your main framework for full-stack apps",
          "Combines with Kinde/NextAuth for login",
          "Server Actions replace many API routes"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "nextjs",
          "title": "Authentication in Next.js"
        }
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
    "tier": "middle",
    "icon": "git-compare",
    "color": "indigo",
    "tags": [
      "api routes",
      "server actions",
      "handlers"
    ],
    "important": false,
    "sources": [],
    "intro": "When to use route handlers vs server actions for mutations. Next.js adds routing, server rendering, and data patterns on top of React.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is API Routes vs Server Actions?",
        "desc": "When to use route handlers vs server actions for mutations.",
        "bullets": [
          "Built on React — adds file-based routing and server features",
          "App Router is the modern default (app/ directory)",
          "Server Components run on the server; Client Components use \"use client\""
        ],
        "icon": "git-compare",
        "visual": {
          "type": "definition",
          "icon": "git-compare",
          "title": "API Routes vs Server Actions",
          "bullets": [
            "Built on React — adds file-based routing and server features",
            "App Router is the modern default (app/ directory)",
            "Server Components run on the server; Client Components use \"use client\""
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How API Routes vs Server Actions works in practice",
        "desc": "API Routes vs Server Actions works by applying clear rules in code. When to use route handlers vs server actions for mutations. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind api routes vs server actions",
          "Common in next.js work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where API Routes vs Server Actions fits in real projects",
        "desc": "In your Next.js + MongoDB projects, api routes vs server actions connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Your main framework for full-stack apps",
          "Combines with Kinde/NextAuth for login",
          "Server Actions replace many API routes"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "nextjs",
          "title": "API Routes vs Server Actions"
        }
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
    "tier": "middle",
    "icon": "layout-grid",
    "color": "rose",
    "tags": [
      "mvc",
      "model",
      "view",
      "controller"
    ],
    "important": false,
    "sources": [],
    "intro": "Model, View, Controller — separating data, UI, and request handling. Backend code receives requests, applies rules, talks to databases, and returns responses.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is MVC Pattern?",
        "desc": "Model, View, Controller — separating data, UI, and request handling.",
        "bullets": [
          "Sits between the client and database",
          "Handles validation, business rules, and security",
          "Your Express/Next.js API routes and Server Actions are backend code"
        ],
        "icon": "layout-grid",
        "visual": {
          "type": "definition",
          "icon": "layout-grid",
          "title": "MVC Pattern",
          "bullets": [
            "Sits between the client and database",
            "Handles validation, business rules, and security",
            "Your Express/Next.js API routes and Server Actions are backend code"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How MVC Pattern works in practice",
        "desc": "MVC Pattern works by applying clear rules in code. Model, View, Controller — separating data, UI, and request handling. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Model: data + business rules",
          "View: what the user sees (HTML/React)",
          "Controller: receives input, updates model, picks view"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where MVC Pattern fits in real projects",
        "desc": "In your Next.js + MongoDB projects, mvc pattern connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "backend",
          "title": "MVC Pattern"
        }
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
    "tier": "middle",
    "icon": "cog",
    "color": "rose",
    "tags": [
      "services",
      "business logic",
      "layer"
    ],
    "important": false,
    "sources": [],
    "intro": "Business logic isolated from HTTP — reusable across controllers. Backend code receives requests, applies rules, talks to databases, and returns responses.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Services Layer?",
        "desc": "Business logic isolated from HTTP — reusable across controllers.",
        "bullets": [
          "Sits between the client and database",
          "Handles validation, business rules, and security",
          "Your Express/Next.js API routes and Server Actions are backend code"
        ],
        "icon": "cog",
        "visual": {
          "type": "definition",
          "icon": "cog",
          "title": "Services Layer",
          "bullets": [
            "Sits between the client and database",
            "Handles validation, business rules, and security",
            "Your Express/Next.js API routes and Server Actions are backend code"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Services Layer works in practice",
        "desc": "Services Layer works by applying clear rules in code. Business logic isolated from HTTP — reusable across controllers. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind services layer",
          "Common in backend & web architecture work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Services Layer fits in real projects",
        "desc": "In your Next.js + MongoDB projects, services layer connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "backend",
          "title": "Services Layer"
        }
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
    "tier": "middle",
    "icon": "radio",
    "color": "rose",
    "tags": [
      "controllers",
      "handlers",
      "routes"
    ],
    "important": false,
    "sources": [],
    "intro": "Thin handlers that parse requests and call services. Backend code receives requests, applies rules, talks to databases, and returns responses.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Controllers?",
        "desc": "Thin handlers that parse requests and call services.",
        "bullets": [
          "Sits between the client and database",
          "Handles validation, business rules, and security",
          "Your Express/Next.js API routes and Server Actions are backend code"
        ],
        "icon": "radio",
        "visual": {
          "type": "definition",
          "icon": "radio",
          "title": "Controllers",
          "bullets": [
            "Sits between the client and database",
            "Handles validation, business rules, and security",
            "Your Express/Next.js API routes and Server Actions are backend code"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Controllers works in practice",
        "desc": "Controllers works by applying clear rules in code. Thin handlers that parse requests and call services. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind controllers",
          "Common in backend & web architecture work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Controllers fits in real projects",
        "desc": "In your Next.js + MongoDB projects, controllers connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "backend",
          "title": "Controllers"
        }
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
    "tier": "middle",
    "icon": "arrow-left-right",
    "color": "rose",
    "tags": [
      "dto",
      "mapper",
      "transform"
    ],
    "important": false,
    "sources": [],
    "intro": "Data Transfer Objects — shaping data between layers safely. Backend code receives requests, applies rules, talks to databases, and returns responses.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is DTOs & Mappers?",
        "desc": "Data Transfer Objects — shaping data between layers safely.",
        "bullets": [
          "Sits between the client and database",
          "Handles validation, business rules, and security",
          "Your Express/Next.js API routes and Server Actions are backend code"
        ],
        "icon": "arrow-left-right",
        "visual": {
          "type": "definition",
          "icon": "arrow-left-right",
          "title": "DTOs & Mappers",
          "bullets": [
            "Sits between the client and database",
            "Handles validation, business rules, and security",
            "Your Express/Next.js API routes and Server Actions are backend code"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How DTOs & Mappers works in practice",
        "desc": "DTOs & Mappers works by applying clear rules in code. Data Transfer Objects — shaping data between layers safely. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind dtos & mappers",
          "Common in backend & web architecture work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where DTOs & Mappers fits in real projects",
        "desc": "In your Next.js + MongoDB projects, dtos & mappers connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "backend",
          "title": "DTOs & Mappers"
        }
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
    "tier": "middle",
    "icon": "check-square",
    "color": "rose",
    "tags": [
      "validation",
      "zod",
      "joi",
      "schema"
    ],
    "important": false,
    "sources": [],
    "intro": "Rejecting bad input at the boundary before it hits business logic. Backend code receives requests, applies rules, talks to databases, and returns responses.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Validation?",
        "desc": "Rejecting bad input at the boundary before it hits business logic.",
        "bullets": [
          "Sits between the client and database",
          "Handles validation, business rules, and security",
          "Your Express/Next.js API routes and Server Actions are backend code"
        ],
        "icon": "check-square",
        "visual": {
          "type": "definition",
          "icon": "check-square",
          "title": "Validation",
          "bullets": [
            "Sits between the client and database",
            "Handles validation, business rules, and security",
            "Your Express/Next.js API routes and Server Actions are backend code"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Validation works in practice",
        "desc": "Validation works by applying clear rules in code. Rejecting bad input at the boundary before it hits business logic. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind validation",
          "Common in backend & web architecture work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Validation fits in real projects",
        "desc": "In your Next.js + MongoDB projects, validation connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "backend",
          "title": "Validation"
        }
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
    "tier": "middle",
    "icon": "alert-triangle",
    "color": "rose",
    "tags": [
      "errors",
      "status codes",
      "logging"
    ],
    "important": false,
    "sources": [],
    "intro": "Consistent error responses, status codes, and logging. Backend code receives requests, applies rules, talks to databases, and returns responses.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Error Handling?",
        "desc": "Consistent error responses, status codes, and logging.",
        "bullets": [
          "Sits between the client and database",
          "Handles validation, business rules, and security",
          "Your Express/Next.js API routes and Server Actions are backend code"
        ],
        "icon": "alert-triangle",
        "visual": {
          "type": "definition",
          "icon": "alert-triangle",
          "title": "Error Handling",
          "bullets": [
            "Sits between the client and database",
            "Handles validation, business rules, and security",
            "Your Express/Next.js API routes and Server Actions are backend code"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Error Handling works in practice",
        "desc": "Error Handling works by applying clear rules in code. Consistent error responses, status codes, and logging. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind error handling",
          "Common in backend & web architecture work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Error Handling fits in real projects",
        "desc": "In your Next.js + MongoDB projects, error handling connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "backend",
          "title": "Error Handling"
        }
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
    "tier": "middle",
    "icon": "building",
    "color": "rose",
    "tags": [
      "clean architecture",
      "layers",
      "domain"
    ],
    "important": false,
    "sources": [],
    "intro": "Dependencies point inward — domain at the center, frameworks at the edge. Backend code receives requests, applies rules, talks to databases, and returns responses.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Clean Architecture Basics?",
        "desc": "Dependencies point inward — domain at the center, frameworks at the edge.",
        "bullets": [
          "Sits between the client and database",
          "Handles validation, business rules, and security",
          "Your Express/Next.js API routes and Server Actions are backend code"
        ],
        "icon": "building",
        "visual": {
          "type": "definition",
          "icon": "building",
          "title": "Clean Architecture Basics",
          "bullets": [
            "Sits between the client and database",
            "Handles validation, business rules, and security",
            "Your Express/Next.js API routes and Server Actions are backend code"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Clean Architecture Basics works in practice",
        "desc": "Clean Architecture Basics works by applying clear rules in code. Dependencies point inward — domain at the center, frameworks at the edge. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind clean architecture basics",
          "Common in backend & web architecture work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Clean Architecture Basics fits in real projects",
        "desc": "In your Next.js + MongoDB projects, clean architecture basics connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "backend",
          "title": "Clean Architecture Basics"
        }
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
    "tier": "middle",
    "icon": "layers",
    "color": "rose",
    "tags": [
      "client",
      "server",
      "database"
    ],
    "important": false,
    "sources": [],
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
    "tier": "middle",
    "icon": "globe",
    "color": "rose",
    "tags": [
      "http",
      "rest",
      "api"
    ],
    "important": false,
    "sources": [
      {
        "title": "MDN — HTTP methods",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
      }
    ],
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
    "tier": "middle",
    "icon": "zap",
    "color": "rose",
    "tags": [
      "cache",
      "redis",
      "cdn"
    ],
    "important": false,
    "sources": [],
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
    "tier": "middle",
    "icon": "share-2",
    "color": "rose",
    "tags": [
      "load balancer",
      "scaling"
    ],
    "important": false,
    "sources": [],
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
    "tier": "middle",
    "icon": "radio",
    "color": "rose",
    "tags": [
      "websocket",
      "real-time"
    ],
    "important": false,
    "sources": [],
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
    "tier": "middle",
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
    "sources": [
      {
        "title": "MongoDB — CRUD",
        "url": "https://www.mongodb.com/docs/manual/crud/"
      }
    ],
    "intro": "Create, Read, Update, Delete — the four basic data operations. Databases persist data beyond a single request — design and query patterns matter.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is CRUD Operations?",
        "desc": "Create, Read, Update, Delete — the four basic data operations.",
        "bullets": [
          "MongoDB stores documents (JSON-like) in collections",
          "Schema design affects query speed and data consistency",
          "Indexes speed reads; aggregation pipelines transform data"
        ],
        "icon": "pen-line",
        "visual": {
          "type": "definition",
          "icon": "pen-line",
          "title": "CRUD Operations",
          "bullets": [
            "MongoDB stores documents (JSON-like) in collections",
            "Schema design affects query speed and data consistency",
            "Indexes speed reads; aggregation pipelines transform data"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How CRUD Operations works in practice",
        "desc": "Create: insertOne / insertMany. Read: find / findOne. Update: updateOne with $set. Delete: deleteOne. In REST: POST=create, GET=read, PUT/PATCH=update, DELETE=delete.",
        "bullets": [
          "Core mechanism behind crud operations",
          "Common in database (mongodb & concepts) work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "await db.users.insertOne({ name: \"Ada\" });\nawait db.users.findOne({ email: \"a@b.com\" });"
      },
      {
        "kicker": "In your stack",
        "title": "Where CRUD Operations fits in real projects",
        "desc": "In your Next.js + MongoDB projects, crud operations connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "MongoDB Atlas or local mongod",
          "Mongoose or native driver in Node",
          "Schema matches how you query in the app"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "database",
          "title": "CRUD Operations"
        }
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
    "tier": "middle",
    "icon": "table",
    "color": "emerald",
    "tags": [
      "schema",
      "mongodb",
      "design"
    ],
    "important": false,
    "sources": [],
    "intro": "Structuring documents and collections for your app's queries. Databases persist data beyond a single request — design and query patterns matter.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Schema Design?",
        "desc": "Structuring documents and collections for your app's queries.",
        "bullets": [
          "MongoDB stores documents (JSON-like) in collections",
          "Schema design affects query speed and data consistency",
          "Indexes speed reads; aggregation pipelines transform data"
        ],
        "icon": "table",
        "visual": {
          "type": "definition",
          "icon": "table",
          "title": "Schema Design",
          "bullets": [
            "MongoDB stores documents (JSON-like) in collections",
            "Schema design affects query speed and data consistency",
            "Indexes speed reads; aggregation pipelines transform data"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Schema Design works in practice",
        "desc": "Schema Design works by applying clear rules in code. Structuring documents and collections for your app's queries. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind schema design",
          "Common in database (mongodb & concepts) work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Schema Design fits in real projects",
        "desc": "In your Next.js + MongoDB projects, schema design connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "MongoDB Atlas or local mongod",
          "Mongoose or native driver in Node",
          "Schema matches how you query in the app"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "database",
          "title": "Schema Design"
        }
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
    "tier": "middle",
    "icon": "link",
    "color": "emerald",
    "tags": [
      "relations",
      "embed",
      "reference"
    ],
    "important": false,
    "sources": [],
    "intro": "Embedding vs referencing — modeling relationships without SQL joins. Databases persist data beyond a single request — design and query patterns matter.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Relations in NoSQL?",
        "desc": "Embedding vs referencing — modeling relationships without SQL joins.",
        "bullets": [
          "MongoDB stores documents (JSON-like) in collections",
          "Schema design affects query speed and data consistency",
          "Indexes speed reads; aggregation pipelines transform data"
        ],
        "icon": "link",
        "visual": {
          "type": "definition",
          "icon": "link",
          "title": "Relations in NoSQL",
          "bullets": [
            "MongoDB stores documents (JSON-like) in collections",
            "Schema design affects query speed and data consistency",
            "Indexes speed reads; aggregation pipelines transform data"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Relations in NoSQL works in practice",
        "desc": "Relations in NoSQL works by applying clear rules in code. Embedding vs referencing — modeling relationships without SQL joins. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind relations in nosql",
          "Common in database (mongodb & concepts) work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Relations in NoSQL fits in real projects",
        "desc": "In your Next.js + MongoDB projects, relations in nosql connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "MongoDB Atlas or local mongod",
          "Mongoose or native driver in Node",
          "Schema matches how you query in the app"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "database",
          "title": "Relations in NoSQL"
        }
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
    "tier": "middle",
    "icon": "search",
    "color": "emerald",
    "tags": [
      "index",
      "performance",
      "query"
    ],
    "important": false,
    "sources": [],
    "intro": "Speeding up queries with indexes — and the cost of maintaining them. Databases persist data beyond a single request — design and query patterns matter.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Indexing?",
        "desc": "Speeding up queries with indexes — and the cost of maintaining them.",
        "bullets": [
          "MongoDB stores documents (JSON-like) in collections",
          "Schema design affects query speed and data consistency",
          "Indexes speed reads; aggregation pipelines transform data"
        ],
        "icon": "search",
        "visual": {
          "type": "definition",
          "icon": "search",
          "title": "Indexing",
          "bullets": [
            "MongoDB stores documents (JSON-like) in collections",
            "Schema design affects query speed and data consistency",
            "Indexes speed reads; aggregation pipelines transform data"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Indexing works in practice",
        "desc": "Indexing works by applying clear rules in code. Speeding up queries with indexes — and the cost of maintaining them. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "db.collection.createIndex({ email: 1 }) — ascending",
          "Compound index: { userId: 1, createdAt: -1 }",
          "Queries without matching indexes scan every document"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Indexing fits in real projects",
        "desc": "In your Next.js + MongoDB projects, indexing connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "MongoDB Atlas or local mongod",
          "Mongoose or native driver in Node",
          "Schema matches how you query in the app"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "database",
          "title": "Indexing"
        }
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
    "tier": "middle",
    "icon": "bar-chart",
    "color": "emerald",
    "tags": [
      "aggregation",
      "pipeline",
      "mongodb"
    ],
    "important": false,
    "sources": [],
    "intro": "Pipeline stages for grouping, filtering, and transforming data. Databases persist data beyond a single request — design and query patterns matter.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Aggregation Basics?",
        "desc": "Pipeline stages for grouping, filtering, and transforming data.",
        "bullets": [
          "MongoDB stores documents (JSON-like) in collections",
          "Schema design affects query speed and data consistency",
          "Indexes speed reads; aggregation pipelines transform data"
        ],
        "icon": "bar-chart",
        "visual": {
          "type": "definition",
          "icon": "bar-chart",
          "title": "Aggregation Basics",
          "bullets": [
            "MongoDB stores documents (JSON-like) in collections",
            "Schema design affects query speed and data consistency",
            "Indexes speed reads; aggregation pipelines transform data"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Aggregation Basics works in practice",
        "desc": "Aggregation Basics works by applying clear rules in code. Pipeline stages for grouping, filtering, and transforming data. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind aggregation basics",
          "Common in database (mongodb & concepts) work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Aggregation Basics fits in real projects",
        "desc": "In your Next.js + MongoDB projects, aggregation basics connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "MongoDB Atlas or local mongod",
          "Mongoose or native driver in Node",
          "Schema matches how you query in the app"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "database",
          "title": "Aggregation Basics"
        }
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
    "tier": "middle",
    "icon": "scale",
    "color": "emerald",
    "tags": [
      "normalization",
      "denormalization",
      "trade-offs"
    ],
    "important": false,
    "sources": [],
    "intro": "Splitting data for consistency vs duplicating for read speed. Databases persist data beyond a single request — design and query patterns matter.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Normalization vs Denormalization?",
        "desc": "Splitting data for consistency vs duplicating for read speed.",
        "bullets": [
          "MongoDB stores documents (JSON-like) in collections",
          "Schema design affects query speed and data consistency",
          "Indexes speed reads; aggregation pipelines transform data"
        ],
        "icon": "scale",
        "visual": {
          "type": "definition",
          "icon": "scale",
          "title": "Normalization vs Denormalization",
          "bullets": [
            "MongoDB stores documents (JSON-like) in collections",
            "Schema design affects query speed and data consistency",
            "Indexes speed reads; aggregation pipelines transform data"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Normalization vs Denormalization works in practice",
        "desc": "Normalization vs Denormalization works by applying clear rules in code. Splitting data for consistency vs duplicating for read speed. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind normalization vs denormalization",
          "Common in database (mongodb & concepts) work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Normalization vs Denormalization fits in real projects",
        "desc": "In your Next.js + MongoDB projects, normalization vs denormalization connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "MongoDB Atlas or local mongod",
          "Mongoose or native driver in Node",
          "Schema matches how you query in the app"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "database",
          "title": "Normalization vs Denormalization"
        }
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
    "tier": "middle",
    "icon": "file-input",
    "color": "orange",
    "tags": [
      "formdata",
      "forms",
      "multipart"
    ],
    "important": false,
    "sources": [],
    "intro": "Browser API for sending forms including files and fields. Forms move user input from the browser to your server — validation and sync are critical.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is FormData?",
        "desc": "Browser API for sending forms including files and fields.",
        "bullets": [
          "HTML forms or React controlled inputs collect user data",
          "Client validation improves UX; server validation is mandatory",
          "FormData API sends files and fields in multipart requests"
        ],
        "icon": "file-input",
        "visual": {
          "type": "definition",
          "icon": "file-input",
          "title": "FormData",
          "bullets": [
            "HTML forms or React controlled inputs collect user data",
            "Client validation improves UX; server validation is mandatory",
            "FormData API sends files and fields in multipart requests"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How FormData works in practice",
        "desc": "new FormData(formElement) collects all named inputs. Append files with formData.append(\"avatar\", file). Send via fetch with method POST — browser sets Content-Type: multipart/form-data automatically.",
        "bullets": [
          "Core mechanism behind formdata",
          "Common in forms & data flow work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        },
        "code": "const fd = new FormData(form);\nawait fetch(\"/api/upload\", { method: \"POST\", body: fd });"
      },
      {
        "kicker": "In your stack",
        "title": "Where FormData fits in real projects",
        "desc": "In your Next.js + MongoDB projects, formdata connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "forms",
          "title": "FormData"
        }
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
    "tier": "middle",
    "icon": "shield-check",
    "color": "orange",
    "tags": [
      "validation",
      "client",
      "server",
      "zod"
    ],
    "important": false,
    "sources": [],
    "intro": "Never trust the client — validate on both sides. Forms move user input from the browser to your server — validation and sync are critical.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Validation (Client + Server)?",
        "desc": "Never trust the client — validate on both sides.",
        "bullets": [
          "HTML forms or React controlled inputs collect user data",
          "Client validation improves UX; server validation is mandatory",
          "FormData API sends files and fields in multipart requests"
        ],
        "icon": "shield-check",
        "visual": {
          "type": "definition",
          "icon": "shield-check",
          "title": "Validation (Client + Server)",
          "bullets": [
            "HTML forms or React controlled inputs collect user data",
            "Client validation improves UX; server validation is mandatory",
            "FormData API sends files and fields in multipart requests"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Validation (Client + Server) works in practice",
        "desc": "Validation (Client + Server) works by applying clear rules in code. Never trust the client — validate on both sides. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind validation (client + server)",
          "Common in forms & data flow work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Validation (Client + Server) fits in real projects",
        "desc": "In your Next.js + MongoDB projects, validation (client + server) connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "forms",
          "title": "Validation (Client + Server)"
        }
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
    "tier": "middle",
    "icon": "upload",
    "color": "orange",
    "tags": [
      "upload",
      "files",
      "storage",
      "s3"
    ],
    "important": false,
    "sources": [],
    "intro": "Multipart forms, storage, and size limits. Forms move user input from the browser to your server — validation and sync are critical.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is File Uploads?",
        "desc": "Multipart forms, storage, and size limits.",
        "bullets": [
          "HTML forms or React controlled inputs collect user data",
          "Client validation improves UX; server validation is mandatory",
          "FormData API sends files and fields in multipart requests"
        ],
        "icon": "upload",
        "visual": {
          "type": "definition",
          "icon": "upload",
          "title": "File Uploads",
          "bullets": [
            "HTML forms or React controlled inputs collect user data",
            "Client validation improves UX; server validation is mandatory",
            "FormData API sends files and fields in multipart requests"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How File Uploads works in practice",
        "desc": "File Uploads works by applying clear rules in code. Multipart forms, storage, and size limits. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind file uploads",
          "Common in forms & data flow work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where File Uploads fits in real projects",
        "desc": "In your Next.js + MongoDB projects, file uploads connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "forms",
          "title": "File Uploads"
        }
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
    "tier": "middle",
    "icon": "send",
    "color": "orange",
    "tags": [
      "fetch",
      "axios",
      "api",
      "json"
    ],
    "important": false,
    "sources": [],
    "intro": "fetch, axios, and handling responses from your backend. Forms move user input from the browser to your server — validation and sync are critical.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is API Communication?",
        "desc": "fetch, axios, and handling responses from your backend.",
        "bullets": [
          "HTML forms or React controlled inputs collect user data",
          "Client validation improves UX; server validation is mandatory",
          "FormData API sends files and fields in multipart requests"
        ],
        "icon": "send",
        "visual": {
          "type": "definition",
          "icon": "send",
          "title": "API Communication",
          "bullets": [
            "HTML forms or React controlled inputs collect user data",
            "Client validation improves UX; server validation is mandatory",
            "FormData API sends files and fields in multipart requests"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How API Communication works in practice",
        "desc": "API Communication works by applying clear rules in code. fetch, axios, and handling responses from your backend. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind api communication",
          "Common in forms & data flow work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where API Communication fits in real projects",
        "desc": "In your Next.js + MongoDB projects, api communication connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "forms",
          "title": "API Communication"
        }
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
    "tier": "middle",
    "icon": "refresh-cw",
    "color": "orange",
    "tags": [
      "state",
      "sync",
      "optimistic",
      "revalidate"
    ],
    "important": false,
    "sources": [],
    "intro": "Keeping UI state aligned with server data after mutations. Forms move user input from the browser to your server — validation and sync are critical.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is State Syncing?",
        "desc": "Keeping UI state aligned with server data after mutations.",
        "bullets": [
          "HTML forms or React controlled inputs collect user data",
          "Client validation improves UX; server validation is mandatory",
          "FormData API sends files and fields in multipart requests"
        ],
        "icon": "refresh-cw",
        "visual": {
          "type": "definition",
          "icon": "refresh-cw",
          "title": "State Syncing",
          "bullets": [
            "HTML forms or React controlled inputs collect user data",
            "Client validation improves UX; server validation is mandatory",
            "FormData API sends files and fields in multipart requests"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How State Syncing works in practice",
        "desc": "State Syncing works by applying clear rules in code. Keeping UI state aligned with server data after mutations. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind state syncing",
          "Common in forms & data flow work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where State Syncing fits in real projects",
        "desc": "In your Next.js + MongoDB projects, state syncing connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "forms",
          "title": "State Syncing"
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
    "tier": "middle",
    "icon": "smartphone",
    "color": "fuchsia",
    "tags": [
      "responsive",
      "mobile",
      "breakpoints",
      "css"
    ],
    "important": false,
    "sources": [],
    "intro": "Layouts that adapt from mobile to desktop. Good UI is usable, consistent, and accessible — not just visually polished.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Responsive Design?",
        "desc": "Layouts that adapt from mobile to desktop.",
        "bullets": [
          "Users judge apps in seconds — clarity beats decoration",
          "Responsive layouts work on phone, tablet, and desktop",
          "Accessibility helps everyone, not just screen reader users"
        ],
        "icon": "smartphone",
        "visual": {
          "type": "definition",
          "icon": "smartphone",
          "title": "Responsive Design",
          "bullets": [
            "Users judge apps in seconds — clarity beats decoration",
            "Responsive layouts work on phone, tablet, and desktop",
            "Accessibility helps everyone, not just screen reader users"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Responsive Design works in practice",
        "desc": "Responsive Design works by applying clear rules in code. Layouts that adapt from mobile to desktop. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind responsive design",
          "Common in ui / ux & product thinking work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Responsive Design fits in real projects",
        "desc": "In your Next.js + MongoDB projects, responsive design connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "ui-ux",
          "title": "Responsive Design"
        }
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
    "tier": "middle",
    "icon": "component",
    "color": "fuchsia",
    "tags": [
      "components",
      "design",
      "ui"
    ],
    "important": false,
    "sources": [],
    "intro": "Building small, focused UI pieces with clear responsibilities. Good UI is usable, consistent, and accessible — not just visually polished.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Component Design?",
        "desc": "Building small, focused UI pieces with clear responsibilities.",
        "bullets": [
          "Users judge apps in seconds — clarity beats decoration",
          "Responsive layouts work on phone, tablet, and desktop",
          "Accessibility helps everyone, not just screen reader users"
        ],
        "icon": "component",
        "visual": {
          "type": "definition",
          "icon": "component",
          "title": "Component Design",
          "bullets": [
            "Users judge apps in seconds — clarity beats decoration",
            "Responsive layouts work on phone, tablet, and desktop",
            "Accessibility helps everyone, not just screen reader users"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Component Design works in practice",
        "desc": "Component Design works by applying clear rules in code. Building small, focused UI pieces with clear responsibilities. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind component design",
          "Common in ui / ux & product thinking work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Component Design fits in real projects",
        "desc": "In your Next.js + MongoDB projects, component design connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "ui-ux",
          "title": "Component Design"
        }
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
    "tier": "middle",
    "icon": "copy",
    "color": "fuchsia",
    "tags": [
      "reusable",
      "dry",
      "tokens"
    ],
    "important": false,
    "sources": [],
    "intro": "DRY components and design tokens across your product. Good UI is usable, consistent, and accessible — not just visually polished.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Reusability?",
        "desc": "DRY components and design tokens across your product.",
        "bullets": [
          "Users judge apps in seconds — clarity beats decoration",
          "Responsive layouts work on phone, tablet, and desktop",
          "Accessibility helps everyone, not just screen reader users"
        ],
        "icon": "copy",
        "visual": {
          "type": "definition",
          "icon": "copy",
          "title": "Reusability",
          "bullets": [
            "Users judge apps in seconds — clarity beats decoration",
            "Responsive layouts work on phone, tablet, and desktop",
            "Accessibility helps everyone, not just screen reader users"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Reusability works in practice",
        "desc": "Reusability works by applying clear rules in code. DRY components and design tokens across your product. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind reusability",
          "Common in ui / ux & product thinking work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Reusability fits in real projects",
        "desc": "In your Next.js + MongoDB projects, reusability connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "ui-ux",
          "title": "Reusability"
        }
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
    "tier": "middle",
    "icon": "accessibility",
    "color": "fuchsia",
    "tags": [
      "a11y",
      "aria",
      "accessibility",
      "wcag"
    ],
    "important": false,
    "sources": [],
    "intro": "Semantic HTML, ARIA, keyboard nav — usable by everyone. Good UI is usable, consistent, and accessible — not just visually polished.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Accessibility Basics?",
        "desc": "Semantic HTML, ARIA, keyboard nav — usable by everyone.",
        "bullets": [
          "Users judge apps in seconds — clarity beats decoration",
          "Responsive layouts work on phone, tablet, and desktop",
          "Accessibility helps everyone, not just screen reader users"
        ],
        "icon": "accessibility",
        "visual": {
          "type": "definition",
          "icon": "accessibility",
          "title": "Accessibility Basics",
          "bullets": [
            "Users judge apps in seconds — clarity beats decoration",
            "Responsive layouts work on phone, tablet, and desktop",
            "Accessibility helps everyone, not just screen reader users"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Accessibility Basics works in practice",
        "desc": "Accessibility Basics works by applying clear rules in code. Semantic HTML, ARIA, keyboard nav — usable by everyone. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind accessibility basics",
          "Common in ui / ux & product thinking work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Accessibility Basics fits in real projects",
        "desc": "In your Next.js + MongoDB projects, accessibility basics connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "ui-ux",
          "title": "Accessibility Basics"
        }
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
    "tier": "middle",
    "icon": "map",
    "color": "fuchsia",
    "tags": [
      "ux",
      "flow",
      "onboarding",
      "product"
    ],
    "important": false,
    "sources": [],
    "intro": "User journeys, onboarding, and reducing friction in your app. Good UI is usable, consistent, and accessible — not just visually polished.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is UX Flow?",
        "desc": "User journeys, onboarding, and reducing friction in your app.",
        "bullets": [
          "Users judge apps in seconds — clarity beats decoration",
          "Responsive layouts work on phone, tablet, and desktop",
          "Accessibility helps everyone, not just screen reader users"
        ],
        "icon": "map",
        "visual": {
          "type": "definition",
          "icon": "map",
          "title": "UX Flow",
          "bullets": [
            "Users judge apps in seconds — clarity beats decoration",
            "Responsive layouts work on phone, tablet, and desktop",
            "Accessibility helps everyone, not just screen reader users"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How UX Flow works in practice",
        "desc": "UX Flow works by applying clear rules in code. User journeys, onboarding, and reducing friction in your app. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind ux flow",
          "Common in ui / ux & product thinking work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where UX Flow fits in real projects",
        "desc": "In your Next.js + MongoDB projects, ux flow connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "ui-ux",
          "title": "UX Flow"
        }
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
    "tier": "middle",
    "icon": "git-branch",
    "color": "slate",
    "tags": [
      "git",
      "github",
      "branch",
      "commit"
    ],
    "important": false,
    "sources": [
      {
        "title": "GitHub Docs — Git",
        "url": "https://docs.github.com/en/get-started/using-git"
      }
    ],
    "intro": "Version control, branches, commits, and collaboration. Developer tools automate versioning, packaging, and deployment.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Git & GitHub?",
        "desc": "Version control, branches, commits, and collaboration.",
        "bullets": [
          "Git tracks every code change — branches isolate features",
          "npm/pnpm install packages; lockfiles pin exact versions",
          "Docker packages app + dependencies into reproducible containers"
        ],
        "icon": "git-branch",
        "visual": {
          "type": "definition",
          "icon": "git-branch",
          "title": "Git & GitHub",
          "bullets": [
            "Git tracks every code change — branches isolate features",
            "npm/pnpm install packages; lockfiles pin exact versions",
            "Docker packages app + dependencies into reproducible containers"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Git & GitHub works in practice",
        "desc": "Git & GitHub works by applying clear rules in code. Version control, branches, commits, and collaboration. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "git init → git add → git commit -m \"msg\"",
          "git branch feature → git checkout feature",
          "git push origin feature → open Pull Request on GitHub"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Git & GitHub fits in real projects",
        "desc": "In your Next.js + MongoDB projects, git & github connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "GitHub for your topic repo",
          "pnpm for faster installs",
          "Docker for consistent deploy environments"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "tools",
          "title": "Git & GitHub"
        }
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
    "tier": "middle",
    "icon": "container",
    "color": "slate",
    "tags": [
      "docker",
      "containers",
      "images"
    ],
    "important": false,
    "sources": [
      {
        "title": "Docker — Get started",
        "url": "https://docs.docker.com/get-started/"
      }
    ],
    "intro": "Containers for consistent dev and deployment environments. Developer tools automate versioning, packaging, and deployment.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Docker?",
        "desc": "Containers for consistent dev and deployment environments.",
        "bullets": [
          "Git tracks every code change — branches isolate features",
          "npm/pnpm install packages; lockfiles pin exact versions",
          "Docker packages app + dependencies into reproducible containers"
        ],
        "icon": "container",
        "visual": {
          "type": "definition",
          "icon": "container",
          "title": "Docker",
          "bullets": [
            "Git tracks every code change — branches isolate features",
            "npm/pnpm install packages; lockfiles pin exact versions",
            "Docker packages app + dependencies into reproducible containers"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Docker works in practice",
        "desc": "A Dockerfile lists steps to build an image. docker build creates the image; docker run starts a container from it. Containers share the host kernel but have isolated filesystems and networks.",
        "bullets": [
          "Core mechanism behind docker",
          "Common in tools & ecosystem work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Docker fits in real projects",
        "desc": "In your Next.js + MongoDB projects, docker connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "GitHub for your topic repo",
          "pnpm for faster installs",
          "Docker for consistent deploy environments"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "tools",
          "title": "Docker"
        }
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
    "tier": "middle",
    "icon": "package",
    "color": "slate",
    "tags": [
      "npm",
      "pnpm",
      "dependencies",
      "lockfile"
    ],
    "important": false,
    "sources": [],
    "intro": "Installing dependencies and running scripts. Developer tools automate versioning, packaging, and deployment.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is npm & pnpm?",
        "desc": "Installing dependencies and running scripts.",
        "bullets": [
          "Git tracks every code change — branches isolate features",
          "npm/pnpm install packages; lockfiles pin exact versions",
          "Docker packages app + dependencies into reproducible containers"
        ],
        "icon": "package",
        "visual": {
          "type": "definition",
          "icon": "package",
          "title": "npm & pnpm",
          "bullets": [
            "Git tracks every code change — branches isolate features",
            "npm/pnpm install packages; lockfiles pin exact versions",
            "Docker packages app + dependencies into reproducible containers"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How npm & pnpm works in practice",
        "desc": "npm & pnpm works by applying clear rules in code. Installing dependencies and running scripts. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind npm & pnpm",
          "Common in tools & ecosystem work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where npm & pnpm fits in real projects",
        "desc": "In your Next.js + MongoDB projects, npm & pnpm connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "GitHub for your topic repo",
          "pnpm for faster installs",
          "Docker for consistent deploy environments"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "tools",
          "title": "npm & pnpm"
        }
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
    "tier": "middle",
    "icon": "hammer",
    "color": "slate",
    "tags": [
      "vite",
      "webpack",
      "bundler",
      "build"
    ],
    "important": false,
    "sources": [],
    "intro": "Vite, Webpack, Turbopack — bundling and dev servers. Developer tools automate versioning, packaging, and deployment.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Build Tools?",
        "desc": "Vite, Webpack, Turbopack — bundling and dev servers.",
        "bullets": [
          "Git tracks every code change — branches isolate features",
          "npm/pnpm install packages; lockfiles pin exact versions",
          "Docker packages app + dependencies into reproducible containers"
        ],
        "icon": "hammer",
        "visual": {
          "type": "definition",
          "icon": "hammer",
          "title": "Build Tools",
          "bullets": [
            "Git tracks every code change — branches isolate features",
            "npm/pnpm install packages; lockfiles pin exact versions",
            "Docker packages app + dependencies into reproducible containers"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Build Tools works in practice",
        "desc": "Build Tools works by applying clear rules in code. Vite, Webpack, Turbopack — bundling and dev servers. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind build tools",
          "Common in tools & ecosystem work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Build Tools fits in real projects",
        "desc": "In your Next.js + MongoDB projects, build tools connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "GitHub for your topic repo",
          "pnpm for faster installs",
          "Docker for consistent deploy environments"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "tools",
          "title": "Build Tools"
        }
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
    "tier": "advanced",
    "icon": "git-compare",
    "color": "lime",
    "tags": [
      "session",
      "jwt",
      "cookie",
      "token"
    ],
    "important": false,
    "sources": [],
    "intro": "Server remembers you vs client carries signed proof. Authentication proves identity; security protects data and users from attacks.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Sessions vs JWT?",
        "desc": "Server remembers you vs client carries signed proof.",
        "bullets": [
          "Authentication = who are you; Authorization = what can you do",
          "Sessions, JWT, and OAuth solve login in different ways",
          "Always use HTTPS; protect cookies; validate on the server"
        ],
        "icon": "git-compare",
        "visual": {
          "type": "definition",
          "icon": "git-compare",
          "title": "Sessions vs JWT",
          "bullets": [
            "Authentication = who are you; Authorization = what can you do",
            "Sessions, JWT, and OAuth solve login in different ways",
            "Always use HTTPS; protect cookies; validate on the server"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Sessions vs JWT works in practice",
        "desc": "Sessions: server stores user data, client holds only a session ID cookie. JWT: server signs a token containing claims; client sends it on every request; server verifies signature without a database lookup.",
        "bullets": [
          "Core mechanism behind sessions vs jwt",
          "Common in authentication & security work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Sessions vs JWT fits in real projects",
        "desc": "In your Next.js + MongoDB projects, sessions vs jwt connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Kinde OAuth for social login",
          "Middleware protects /dashboard routes",
          "Cookies store session tokens securely"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "auth-security",
          "title": "Sessions vs JWT"
        }
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
    "tier": "advanced",
    "icon": "shield-check",
    "color": "lime",
    "tags": [
      "auth",
      "login",
      "oauth"
    ],
    "important": false,
    "sources": [],
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
        "kicker": "Definition",
        "title": "What is Authentication Deep Dive?",
        "desc": "Sessions, JWT, OAuth flows step by step.",
        "bullets": [
          "Authentication = who are you; Authorization = what can you do",
          "Sessions, JWT, and OAuth solve login in different ways",
          "Always use HTTPS; protect cookies; validate on the server"
        ],
        "icon": "shield-check",
        "visual": {
          "type": "definition",
          "icon": "shield-check",
          "title": "Authentication Deep Dive",
          "bullets": [
            "Authentication = who are you; Authorization = what can you do",
            "Sessions, JWT, and OAuth solve login in different ways",
            "Always use HTTPS; protect cookies; validate on the server"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Authentication Deep Dive works in practice",
        "desc": "Authentication Deep Dive works by applying clear rules in code. Sessions, JWT, OAuth flows step by step. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind authentication deep dive",
          "Common in authentication & security work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Authentication Deep Dive fits in real projects",
        "desc": "In your Next.js + MongoDB projects, authentication deep dive connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Kinde OAuth for social login",
          "Middleware protects /dashboard routes",
          "Cookies store session tokens securely"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "auth-security",
          "title": "Authentication Deep Dive"
        }
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
    "tier": "advanced",
    "icon": "fingerprint",
    "color": "lime",
    "tags": [
      "oauth",
      "google",
      "kinde",
      "social login"
    ],
    "important": false,
    "sources": [
      {
        "title": "OAuth 2.0 — Simplified",
        "url": "https://oauth.net/2/"
      }
    ],
    "intro": "Sign in with Google/GitHub — delegated identity without passwords. Authentication proves identity; security protects data and users from attacks.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is OAuth 2.0?",
        "desc": "Sign in with Google/GitHub — delegated identity without passwords.",
        "bullets": [
          "Authentication = who are you; Authorization = what can you do",
          "Sessions, JWT, and OAuth solve login in different ways",
          "Always use HTTPS; protect cookies; validate on the server"
        ],
        "icon": "fingerprint",
        "visual": {
          "type": "definition",
          "icon": "fingerprint",
          "title": "OAuth 2.0",
          "bullets": [
            "Authentication = who are you; Authorization = what can you do",
            "Sessions, JWT, and OAuth solve login in different ways",
            "Always use HTTPS; protect cookies; validate on the server"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How OAuth 2.0 works in practice",
        "desc": "OAuth 2.0 works by applying clear rules in code. Sign in with Google/GitHub — delegated identity without passwords. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "User clicks \"Sign in with Google\"",
          "Redirect to provider → login + consent",
          "Provider redirects back with code → exchange for access token"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where OAuth 2.0 fits in real projects",
        "desc": "In your Next.js + MongoDB projects, oauth 2.0 connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Kinde OAuth for social login",
          "Middleware protects /dashboard routes",
          "Cookies store session tokens securely"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "auth-security",
          "title": "OAuth 2.0"
        }
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
    "tier": "advanced",
    "icon": "cookie",
    "color": "lime",
    "tags": [
      "cookies",
      "httponly",
      "secure",
      "samesite"
    ],
    "important": false,
    "sources": [],
    "intro": "HttpOnly, Secure, SameSite — how browsers store session data. Authentication proves identity; security protects data and users from attacks.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Cookies?",
        "desc": "HttpOnly, Secure, SameSite — how browsers store session data.",
        "bullets": [
          "Authentication = who are you; Authorization = what can you do",
          "Sessions, JWT, and OAuth solve login in different ways",
          "Always use HTTPS; protect cookies; validate on the server"
        ],
        "icon": "cookie",
        "visual": {
          "type": "definition",
          "icon": "cookie",
          "title": "Cookies",
          "bullets": [
            "Authentication = who are you; Authorization = what can you do",
            "Sessions, JWT, and OAuth solve login in different ways",
            "Always use HTTPS; protect cookies; validate on the server"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Cookies works in practice",
        "desc": "Cookies works by applying clear rules in code. HttpOnly, Secure, SameSite — how browsers store session data. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind cookies",
          "Common in authentication & security work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Cookies fits in real projects",
        "desc": "In your Next.js + MongoDB projects, cookies connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Kinde OAuth for social login",
          "Middleware protects /dashboard routes",
          "Cookies store session tokens securely"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "auth-security",
          "title": "Cookies"
        }
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
    "tier": "advanced",
    "icon": "lock",
    "color": "lime",
    "tags": [
      "middleware",
      "protected",
      "routes",
      "auth"
    ],
    "important": false,
    "sources": [],
    "intro": "Middleware and guards that block unauthenticated access. Authentication proves identity; security protects data and users from attacks.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Protected Routes?",
        "desc": "Middleware and guards that block unauthenticated access.",
        "bullets": [
          "Authentication = who are you; Authorization = what can you do",
          "Sessions, JWT, and OAuth solve login in different ways",
          "Always use HTTPS; protect cookies; validate on the server"
        ],
        "icon": "lock",
        "visual": {
          "type": "definition",
          "icon": "lock",
          "title": "Protected Routes",
          "bullets": [
            "Authentication = who are you; Authorization = what can you do",
            "Sessions, JWT, and OAuth solve login in different ways",
            "Always use HTTPS; protect cookies; validate on the server"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Protected Routes works in practice",
        "desc": "Protected Routes works by applying clear rules in code. Middleware and guards that block unauthenticated access. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind protected routes",
          "Common in authentication & security work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Protected Routes fits in real projects",
        "desc": "In your Next.js + MongoDB projects, protected routes connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Kinde OAuth for social login",
          "Middleware protects /dashboard routes",
          "Cookies store session tokens securely"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "auth-security",
          "title": "Protected Routes"
        }
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
    "tier": "advanced",
    "icon": "shield-alert",
    "color": "lime",
    "tags": [
      "xss",
      "csrf",
      "security",
      "attacks"
    ],
    "important": false,
    "sources": [],
    "intro": "Cross-site scripting and request forgery — common web attacks. Authentication proves identity; security protects data and users from attacks.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is XSS & CSRF Basics?",
        "desc": "Cross-site scripting and request forgery — common web attacks.",
        "bullets": [
          "Authentication = who are you; Authorization = what can you do",
          "Sessions, JWT, and OAuth solve login in different ways",
          "Always use HTTPS; protect cookies; validate on the server"
        ],
        "icon": "shield-alert",
        "visual": {
          "type": "definition",
          "icon": "shield-alert",
          "title": "XSS & CSRF Basics",
          "bullets": [
            "Authentication = who are you; Authorization = what can you do",
            "Sessions, JWT, and OAuth solve login in different ways",
            "Always use HTTPS; protect cookies; validate on the server"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How XSS & CSRF Basics works in practice",
        "desc": "XSS & CSRF Basics works by applying clear rules in code. Cross-site scripting and request forgery — common web attacks. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind xss & csrf basics",
          "Common in authentication & security work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where XSS & CSRF Basics fits in real projects",
        "desc": "In your Next.js + MongoDB projects, xss & csrf basics connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Kinde OAuth for social login",
          "Middleware protects /dashboard routes",
          "Cookies store session tokens securely"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "auth-security",
          "title": "XSS & CSRF Basics"
        }
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
    "tier": "advanced",
    "icon": "lock",
    "color": "lime",
    "tags": [
      "https",
      "tls",
      "encryption"
    ],
    "important": false,
    "sources": [],
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
    "id": "threejs-basics",
    "slug": "threejs-basics",
    "num": "01",
    "title": "Three.js Basics",
    "summary": "WebGL made approachable — 3D in the browser.",
    "category": "threejs",
    "tier": "advanced",
    "icon": "box",
    "color": "purple",
    "tags": [
      "three.js",
      "webgl",
      "3d"
    ],
    "important": false,
    "sources": [
      {
        "title": "Three.js — Documentation",
        "url": "https://threejs.org/docs/"
      }
    ],
    "intro": "WebGL made approachable — 3D in the browser. Three.js renders 3D scenes in the browser using WebGL under the hood.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Three.js Basics?",
        "desc": "WebGL made approachable — 3D in the browser.",
        "bullets": [
          "WebGL draws triangles; Three.js abstracts scenes and cameras",
          "Models load as GLTF from Blender or other 3D tools",
          "Performance matters — too many draw calls drops frame rate"
        ],
        "icon": "box",
        "visual": {
          "type": "definition",
          "icon": "box",
          "title": "Three.js Basics",
          "bullets": [
            "WebGL draws triangles; Three.js abstracts scenes and cameras",
            "Models load as GLTF from Blender or other 3D tools",
            "Performance matters — too many draw calls drops frame rate"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Three.js Basics works in practice",
        "desc": "Three.js Basics works by applying clear rules in code. WebGL made approachable — 3D in the browser. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind three.js basics",
          "Common in 3d & advanced frontend work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Three.js Basics fits in real projects",
        "desc": "In your Next.js + MongoDB projects, three.js basics connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "React Three Fiber wraps Three.js in components",
          "Load GLTF models from /public folder",
          "Use useFrame for animation loops"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "threejs",
          "title": "Three.js Basics"
        }
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
    "tier": "advanced",
    "icon": "camera",
    "color": "purple",
    "tags": [
      "scene",
      "camera",
      "renderer"
    ],
    "important": false,
    "sources": [],
    "intro": "The three objects every Three.js app needs. Three.js renders 3D scenes in the browser using WebGL under the hood.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Scene, Camera & Renderer?",
        "desc": "The three objects every Three.js app needs.",
        "bullets": [
          "WebGL draws triangles; Three.js abstracts scenes and cameras",
          "Models load as GLTF from Blender or other 3D tools",
          "Performance matters — too many draw calls drops frame rate"
        ],
        "icon": "camera",
        "visual": {
          "type": "definition",
          "icon": "camera",
          "title": "Scene, Camera & Renderer",
          "bullets": [
            "WebGL draws triangles; Three.js abstracts scenes and cameras",
            "Models load as GLTF from Blender or other 3D tools",
            "Performance matters — too many draw calls drops frame rate"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Scene, Camera & Renderer works in practice",
        "desc": "Scene, Camera & Renderer works by applying clear rules in code. The three objects every Three.js app needs. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind scene, camera & renderer",
          "Common in 3d & advanced frontend work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Scene, Camera & Renderer fits in real projects",
        "desc": "In your Next.js + MongoDB projects, scene, camera & renderer connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "React Three Fiber wraps Three.js in components",
          "Load GLTF models from /public folder",
          "Use useFrame for animation loops"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "threejs",
          "title": "Scene, Camera & Renderer"
        }
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
    "tier": "advanced",
    "icon": "file-box",
    "color": "purple",
    "tags": [
      "gltf",
      "blender",
      "models",
      "import"
    ],
    "important": false,
    "sources": [],
    "intro": "Loading and displaying 3D models exported from Blender. Three.js renders 3D scenes in the browser using WebGL under the hood.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Models (GLTF & Blender)?",
        "desc": "Loading and displaying 3D models exported from Blender.",
        "bullets": [
          "WebGL draws triangles; Three.js abstracts scenes and cameras",
          "Models load as GLTF from Blender or other 3D tools",
          "Performance matters — too many draw calls drops frame rate"
        ],
        "icon": "file-box",
        "visual": {
          "type": "definition",
          "icon": "file-box",
          "title": "Models (GLTF & Blender)",
          "bullets": [
            "WebGL draws triangles; Three.js abstracts scenes and cameras",
            "Models load as GLTF from Blender or other 3D tools",
            "Performance matters — too many draw calls drops frame rate"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Models (GLTF & Blender) works in practice",
        "desc": "Models (GLTF & Blender) works by applying clear rules in code. Loading and displaying 3D models exported from Blender. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind models (gltf & blender)",
          "Common in 3d & advanced frontend work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Models (GLTF & Blender) fits in real projects",
        "desc": "In your Next.js + MongoDB projects, models (gltf & blender) connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "React Three Fiber wraps Three.js in components",
          "Load GLTF models from /public folder",
          "Use useFrame for animation loops"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "threejs",
          "title": "Models (GLTF & Blender)"
        }
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
    "tier": "advanced",
    "icon": "play",
    "color": "purple",
    "tags": [
      "animation",
      "keyframes",
      "mixer"
    ],
    "important": false,
    "sources": [],
    "intro": "Keyframes, mixers, and animating objects in the scene. Three.js renders 3D scenes in the browser using WebGL under the hood.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Animations?",
        "desc": "Keyframes, mixers, and animating objects in the scene.",
        "bullets": [
          "WebGL draws triangles; Three.js abstracts scenes and cameras",
          "Models load as GLTF from Blender or other 3D tools",
          "Performance matters — too many draw calls drops frame rate"
        ],
        "icon": "play",
        "visual": {
          "type": "definition",
          "icon": "play",
          "title": "Animations",
          "bullets": [
            "WebGL draws triangles; Three.js abstracts scenes and cameras",
            "Models load as GLTF from Blender or other 3D tools",
            "Performance matters — too many draw calls drops frame rate"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Animations works in practice",
        "desc": "Animations works by applying clear rules in code. Keyframes, mixers, and animating objects in the scene. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind animations",
          "Common in 3d & advanced frontend work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Animations fits in real projects",
        "desc": "In your Next.js + MongoDB projects, animations connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "React Three Fiber wraps Three.js in components",
          "Load GLTF models from /public folder",
          "Use useFrame for animation loops"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "threejs",
          "title": "Animations"
        }
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
    "tier": "advanced",
    "icon": "gauge",
    "color": "purple",
    "tags": [
      "performance",
      "fps",
      "optimization",
      "3d"
    ],
    "important": false,
    "sources": [],
    "intro": "LOD, instancing, and keeping 60fps with complex scenes. Three.js renders 3D scenes in the browser using WebGL under the hood.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Performance Optimization?",
        "desc": "LOD, instancing, and keeping 60fps with complex scenes.",
        "bullets": [
          "WebGL draws triangles; Three.js abstracts scenes and cameras",
          "Models load as GLTF from Blender or other 3D tools",
          "Performance matters — too many draw calls drops frame rate"
        ],
        "icon": "gauge",
        "visual": {
          "type": "definition",
          "icon": "gauge",
          "title": "Performance Optimization",
          "bullets": [
            "WebGL draws triangles; Three.js abstracts scenes and cameras",
            "Models load as GLTF from Blender or other 3D tools",
            "Performance matters — too many draw calls drops frame rate"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Performance Optimization works in practice",
        "desc": "Performance Optimization works by applying clear rules in code. LOD, instancing, and keeping 60fps with complex scenes. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind performance optimization",
          "Common in 3d & advanced frontend work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Performance Optimization fits in real projects",
        "desc": "In your Next.js + MongoDB projects, performance optimization connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "React Three Fiber wraps Three.js in components",
          "Load GLTF models from /public folder",
          "Use useFrame for animation loops"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "threejs",
          "title": "Performance Optimization"
        }
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
    "tier": "advanced",
    "icon": "bug",
    "color": "indigo",
    "tags": [
      "debugging",
      "logs",
      "breakpoints"
    ],
    "important": false,
    "sources": [],
    "intro": "Systematic approach — reproduce, isolate, fix, verify. Engineering mindset — how to think about code quality, debugging, and trade-offs.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Debugging Strategy?",
        "desc": "Systematic approach — reproduce, isolate, fix, verify.",
        "bullets": [
          "Code is read more than written — optimize for clarity",
          "Every architecture choice is a trade-off, not a silver bullet",
          "Debug systematically: reproduce → isolate → fix → verify"
        ],
        "icon": "bug",
        "visual": {
          "type": "definition",
          "icon": "bug",
          "title": "Debugging Strategy",
          "bullets": [
            "Code is read more than written — optimize for clarity",
            "Every architecture choice is a trade-off, not a silver bullet",
            "Debug systematically: reproduce → isolate → fix → verify"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Debugging Strategy works in practice",
        "desc": "Debugging Strategy works by applying clear rules in code. Systematic approach — reproduce, isolate, fix, verify. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind debugging strategy",
          "Common in software engineering mindset work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Debugging Strategy fits in real projects",
        "desc": "In your Next.js + MongoDB projects, debugging strategy connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "mindset",
          "title": "Debugging Strategy"
        }
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
    "tier": "advanced",
    "icon": "book-open",
    "color": "indigo",
    "tags": [
      "readability",
      "naming",
      "clean code"
    ],
    "important": false,
    "sources": [],
    "intro": "Naming, structure, and writing code others (and future you) understand. Engineering mindset — how to think about code quality, debugging, and trade-offs.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Code Readability?",
        "desc": "Naming, structure, and writing code others (and future you) understand.",
        "bullets": [
          "Code is read more than written — optimize for clarity",
          "Every architecture choice is a trade-off, not a silver bullet",
          "Debug systematically: reproduce → isolate → fix → verify"
        ],
        "icon": "book-open",
        "visual": {
          "type": "definition",
          "icon": "book-open",
          "title": "Code Readability",
          "bullets": [
            "Code is read more than written — optimize for clarity",
            "Every architecture choice is a trade-off, not a silver bullet",
            "Debug systematically: reproduce → isolate → fix → verify"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Code Readability works in practice",
        "desc": "Code Readability works by applying clear rules in code. Naming, structure, and writing code others (and future you) understand. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind code readability",
          "Common in software engineering mindset work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Code Readability fits in real projects",
        "desc": "In your Next.js + MongoDB projects, code readability connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "mindset",
          "title": "Code Readability"
        }
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
    "tier": "advanced",
    "icon": "split",
    "color": "indigo",
    "tags": [
      "separation",
      "modularity",
      "single responsibility"
    ],
    "important": false,
    "sources": [],
    "intro": "Each module does one job — easier to test and change. Engineering mindset — how to think about code quality, debugging, and trade-offs.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Separation of Concerns?",
        "desc": "Each module does one job — easier to test and change.",
        "bullets": [
          "Code is read more than written — optimize for clarity",
          "Every architecture choice is a trade-off, not a silver bullet",
          "Debug systematically: reproduce → isolate → fix → verify"
        ],
        "icon": "split",
        "visual": {
          "type": "definition",
          "icon": "split",
          "title": "Separation of Concerns",
          "bullets": [
            "Code is read more than written — optimize for clarity",
            "Every architecture choice is a trade-off, not a silver bullet",
            "Debug systematically: reproduce → isolate → fix → verify"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Separation of Concerns works in practice",
        "desc": "Separation of Concerns works by applying clear rules in code. Each module does one job — easier to test and change. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind separation of concerns",
          "Common in software engineering mindset work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Separation of Concerns fits in real projects",
        "desc": "In your Next.js + MongoDB projects, separation of concerns connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "mindset",
          "title": "Separation of Concerns"
        }
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
    "tier": "advanced",
    "icon": "zap",
    "color": "indigo",
    "tags": [
      "performance",
      "profiling",
      "bottleneck"
    ],
    "important": false,
    "sources": [],
    "intro": "Measure first, optimize bottlenecks, avoid premature optimization. Engineering mindset — how to think about code quality, debugging, and trade-offs.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Performance Thinking?",
        "desc": "Measure first, optimize bottlenecks, avoid premature optimization.",
        "bullets": [
          "Code is read more than written — optimize for clarity",
          "Every architecture choice is a trade-off, not a silver bullet",
          "Debug systematically: reproduce → isolate → fix → verify"
        ],
        "icon": "zap",
        "visual": {
          "type": "definition",
          "icon": "zap",
          "title": "Performance Thinking",
          "bullets": [
            "Code is read more than written — optimize for clarity",
            "Every architecture choice is a trade-off, not a silver bullet",
            "Debug systematically: reproduce → isolate → fix → verify"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Performance Thinking works in practice",
        "desc": "Performance Thinking works by applying clear rules in code. Measure first, optimize bottlenecks, avoid premature optimization. The mechanics depend on your language and framework, but the underlying idea stays the same across projects.",
        "bullets": [
          "Core mechanism behind performance thinking",
          "Common in software engineering mindset work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Performance Thinking fits in real projects",
        "desc": "In your Next.js + MongoDB projects, performance thinking connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "mindset",
          "title": "Performance Thinking"
        }
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
    "tier": "advanced",
    "icon": "scale",
    "color": "indigo",
    "tags": [
      "trade-offs",
      "decisions",
      "architecture"
    ],
    "important": true,
    "sources": [],
    "intro": "Every design choice has costs — speed vs simplicity, consistency vs availability. Engineering mindset — how to think about code quality, debugging, and trade-offs.",
    "steps": [
      {
        "kicker": "Definition",
        "title": "What is Trade-offs?",
        "desc": "Every design choice has costs — speed vs simplicity, consistency vs availability.",
        "bullets": [
          "Code is read more than written — optimize for clarity",
          "Every architecture choice is a trade-off, not a silver bullet",
          "Debug systematically: reproduce → isolate → fix → verify"
        ],
        "icon": "scale",
        "visual": {
          "type": "definition",
          "icon": "scale",
          "title": "Trade-offs",
          "bullets": [
            "Code is read more than written — optimize for clarity",
            "Every architecture choice is a trade-off, not a silver bullet",
            "Debug systematically: reproduce → isolate → fix → verify"
          ]
        }
      },
      {
        "kicker": "How it works",
        "title": "How Trade-offs works in practice",
        "desc": "Caching speeds reads but risks stale data. JWT scales horizontally but is hard to revoke. SQL joins are flexible; NoSQL embeds are fast but duplicate data. No option is free — pick based on constraints.",
        "bullets": [
          "Core mechanism behind trade-offs",
          "Common in software engineering mindset work",
          "See code example below when applicable"
        ],
        "icon": "cog",
        "visual": {
          "type": "mechanism"
        }
      },
      {
        "kicker": "In your stack",
        "title": "Where Trade-offs fits in real projects",
        "desc": "In your Next.js + MongoDB projects, trade-offs connects to features you build daily — API routes, React components, auth flows, and database queries. Recognizing the pattern helps you debug faster and design cleaner modules.",
        "bullets": [
          "Applies across frontend and backend code",
          "Shows up when building real features, not toy examples",
          "Combine with other topics in this index for full picture"
        ],
        "icon": "layers",
        "visual": {
          "type": "integration",
          "category": "mindset",
          "title": "Trade-offs"
        }
      }
    ]
  }
];

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
