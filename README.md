# TSX Renderer

A minimal boilerplate template with the most essential setup to render a root App.tsx file using Bun runtime.

## Purpose

This template provides the absolute minimum setup required to:
- Render a single `App.tsx` file in the browser
- Use TypeScript with React
- Apply basic styling with Tailwind CSS
- Serve everything with Bun's built-in server

Nothing more, nothing less.

## Features

- 🎯 **Single Purpose** - Render App.tsx, that's it
- 🚀 **Bun Runtime** - Fast execution and built-in TypeScript support
- ⚛️ **React 18** - For component rendering
- 🔷 **TypeScript** - Type safety out of the box
- 🎨 **Tailwind CSS** - Minimal styling setup included
- 📦 **Zero Build Tools** - No webpack, no vite, just Bun

## Prerequisites

- [Bun](https://bun.sh) installed on your system

## Quick Start

```bash
# Clone
git clone <repository-url> my-app
cd my-app

# Install
bun install

# Run
bun run dev

# Open http://localhost:3000
```

That's it. Your App.tsx is now rendering.

## What's Included

```
├── App.tsx            # Your React component goes here
├── client.tsx         # Entry point (don't touch)
├── index.tsx          # Bun server (don't touch)
├── index.html         # HTML shell (don't touch)
├── tailwind.css       # Tailwind styles
├── tailwind.config.js # Tailwind config
├── tsconfig.json      # TypeScript config
└── package.json       # Dependencies
```

## Usage

1. **Edit App.tsx** - This is your playground
2. **Save** - Hot reload takes care of the rest
3. **Build** - There is no build step

## Why This Template?

Sometimes you just want to:
- Test a React component idea
- Prototype something quickly  
- Learn React/TypeScript without tooling complexity
- Have a clean starting point

This template is exactly that - the minimum viable setup to render TSX in a browser.

## Under the Hood

- Bun server transpiles `App.tsx` on each request
- No bundling, no build artifacts
- Direct TSX → JS transpilation via `Bun.build()`
- Tailwind CSS is pre-compiled and ready to use

## Customization

Want to change something?

- **Port**: Edit `port: 3000` in `index.tsx`
- **TypeScript**: Modify `tsconfig.json`
- **Tailwind**: Update `tailwind.config.js`
- **Styling**: Edit `tailwind.css`

## Not Included

- Router
- State management
- Testing
- Linting
- Building/bundling
- Deploy configuration

This is intentional. Add what you need, when you need it.

## License

MIT - Do whatever you want with this

---

**TSX Renderer** - The simplest way to render App.tsx with Bun