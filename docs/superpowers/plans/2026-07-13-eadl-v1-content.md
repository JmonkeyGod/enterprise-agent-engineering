# EADL v1 Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the v0.1 design-system preview into a coherent EADL v1 knowledge foundation without adding new visual component types.

**Architecture:** Keep the existing Astro layout and seven content components. Add content-first routes grouped as Concepts, Patterns, Recipes, Case Studies, and Reference. Treat every page as a composition of the same seven blocks and validate route presence, component count, accent-color discipline, and required EADL vocabulary through `scripts/verify.mjs`.

**Tech Stack:** Astro 5, TypeScript, existing CSS design tokens, Mermaid loaded only by Diagram.

## Global Constraints

- Exactly seven Astro content components remain allowed.
- One accent color only: `--blue`.
- No comments, likes, banners, modal overlays, right-side table of contents, or decorative animation.
- Concepts are framework-independent; framework-specific material belongs in Recipes.
- Each concept page ends with one concise Key Takeaway.
- New pages must use existing components rather than introducing an eighth component.

---

### Task 1: Strengthen structural verification

**Files:**
- Modify: `scripts/verify.mjs`

- [ ] Require all EADL v1 route files.
- [ ] Require the core vocabulary strings in the reference page.
- [ ] Run `npm run verify` and confirm failure because the pages do not yet exist.

### Task 2: Add Concepts foundation

**Files:**
- Create: `src/pages/concepts/index.astro`
- Create: `src/pages/concepts/state.astro`
- Create: `src/pages/concepts/memory-truth.astro`
- Create: `src/pages/concepts/tool-capability.astro`
- Create: `src/pages/concepts/evaluation-trust.astro`

- [ ] Compose pages from the existing seven components.
- [ ] Keep each page focused on one design question.
- [ ] Include the Enterprise Bid Agent as the continuing case.

### Task 3: Add Patterns, Recipes, and Case Study

**Files:**
- Create: `src/pages/patterns/index.astro`
- Create: `src/pages/patterns/workflow-agent.astro`
- Create: `src/pages/patterns/human-in-control.astro`
- Create: `src/pages/recipes/index.astro`
- Create: `src/pages/recipes/langgraph-explicit-state.astro`
- Create: `src/pages/case-studies/index.astro`
- Create: `src/pages/case-studies/enterprise-bid-agent.astro`

- [ ] Separate stable patterns from technology-specific recipes.
- [ ] Explain why each added component exists and what was deliberately omitted.

### Task 4: Add EADL reference and navigation

**Files:**
- Create: `src/pages/reference/index.astro`
- Modify: `src/layouts/DocsLayout.astro`
- Modify: `src/pages/index.astro`
- Modify: `README.md`

- [ ] Publish the EADL vocabulary, principles, content taxonomy, and DDR format.
- [ ] Add navigation links to the core concepts and patterns.
- [ ] Update version and local/GitHub deployment guidance.

### Task 5: Verify and package

- [ ] Run `npm run verify`.
- [ ] Run `npm install` and `npm run build` when dependency access is available.
- [ ] Create a versioned ZIP containing the full repository.
