# Frontend Only Template

This repo is a minimal frontend starter built with Vite, React, TypeScript, Tailwind, and shadcn/ui.

It intentionally does not include:

- React Router
- Supabase
- backend code
- auth flows
- data fetching scaffolding

What you get instead is a clean single-page starter with a placeholder landing page, a small shadcn setup, and Vite preview settings that work with hosted preview domains under `.style.dev` and `.decaspeed.dev`.

## Quick start

```bash
pnpm install
pnpm dev
```

If you are editing this template while it lives inside another `pnpm` workspace, use:

```bash
pnpm install --ignore-workspace
pnpm --ignore-workspace dev
```

## What is included

- `src/App.tsx`: placeholder landing page
- `src/components/ui/button.tsx`: shadcn button component
- `src/index.css`: Tailwind layers and theme tokens
- `vite.config.ts`: alias setup plus hosted preview allowlists

## Hosted preview domains

The Vite config explicitly allows hosted requests for:

- `.style.dev`
- `.decaspeed.dev`

That applies to both the dev server and `vite preview`.

## Build

```bash
pnpm build
pnpm preview
```

## Notes

- The dev server binds to `0.0.0.0:3000` for sandbox preview compatibility.
- This template is intentionally frontend-only.
- This repo is intended to be consumed as a git template source.
