# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build + TypeScript check
npm run lint     # ESLint (Next.js flat config, eslint.config.mjs)
```

No test runner is configured.

## Architecture

Client-side only todo app — no backend, no API routes. All state lives in `src/components/TodoApp.tsx` and is persisted to `localStorage` under the key `todoy:todos`.

**Data flow:**
`TodoApp` (state owner) → passes filtered todos + handlers as props → `TodoInput` / `TodoList` / `TodoFilter`

**State shape** (`src/types/todo.ts`):
- `Todo`: `{ id, text, completed, createdAt }`
- `FilterType`: `'all' | 'active' | 'completed'`

**Filtering** is computed inside `TodoApp` before passing to `TodoList` — `TodoList` itself is unaware of the active filter.

**`'use client'`** directive is required on any component using hooks (`TodoApp`, `TodoInput`, `TodoItem`). Server components (`TodoList`, `TodoFilter`, `page.tsx`) need none.

## Tailwind

Uses Tailwind v4 — configured via `postcss.config.mjs` with `@tailwindcss/postcss`. No `tailwind.config.ts`. Directives live in `src/app/globals.css` as `@import "tailwindcss"`.
