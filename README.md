# Enterprise Agent Engineering

**Good agent systems are designed, not assembled.**

A restrained Astro documentation product built on EADL — Enterprise Agent Design Language.

## What is included

- One-accent visual system with light and dark modes
- Concepts / Patterns / Recipes / Case Studies / Reference information architecture
- Seven content blocks only: Hero, Question, Diagram, Principle, Case, Decision, Takeaway
- Two complete concept pages
- GitHub Pages deployment workflow

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Verify and build

```bash
npm run verify
npm run build
```

## GitHub Pages

1. Replace `site` and, when necessary, `base` in `astro.config.mjs`.
2. Push to the `main` branch.
3. In GitHub repository settings, select **Pages → Source → GitHub Actions**.

## Design constraint

Before adding a component, remove or reuse an existing one. Every new component must justify its existence.
