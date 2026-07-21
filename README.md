# Doodle Playground Page Builder

A static React, TypeScript, and Vite shuffle tool for the Doodle Playground art course. It recreates the printable deck experience by generating playful art journal page recipes from local strategy, grid, color mood, creative mood, doodle, and wild card data.

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Typecheck

```bash
npm run typecheck
```

## Build

```bash
npm run build
```

The production files are written to `dist/`.

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Vercel should detect Vite automatically. The included `vercel.json` sets:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Editing Deck Content

Deck content lives in `src/data/`:

- `strategies.ts`
- `grids.ts`
- `colorMoods.ts`
- `creativeMoods.ts`
- `doodles.ts`
- `wildCards.ts`

Each item is a plain object. Image paths are optional. Leave an image path empty to use the built-in placeholder treatment.

Images live in the top-level `assets/` folder. Vite is configured to publish that folder directly, so an image saved at `assets/Doodles/Geometric/echo-x.png` should be referenced in data as `/Doodles/Geometric/echo-x.png`.

## Iframe Notes

The app is a static front-end with no backend, authentication, database, or external APIs. The layout avoids fixed-height traps and horizontal overflow so it can be embedded inside a Teachery iframe with normal responsive behavior.
