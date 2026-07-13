# EAE Design System Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimal Astro documentation product that demonstrates the EADL design language, information architecture, visual system, and two complete concept pages.

**Architecture:** Astro generates a static documentation site. A single layout owns navigation, theme, reading width, and typography. Seven content components—Hero, Question, Diagram, Principle, Case, Decision, Takeaway—define the entire reading rhythm. Content is organized by Concepts, Patterns, Recipes, Case Studies, and Reference rather than chapters.

**Tech Stack:** Astro 5, TypeScript, plain CSS design tokens, Mermaid loaded only on pages containing diagrams, GitHub Pages Actions.

## Global Constraints

- Use one accent color only: blue.
- Use an 8-point spacing grid.
- Use system sans-serif text and system monospace code to avoid shipping font files.
- No right-hand table of contents.
- No comments, likes, ads, pop-ups, or decorative motion.
- Every page uses at most seven content block types.
- Framework names belong in Recipes, not Concepts.
- Every new component must justify its existence.

---

### Task 1: Project shell and quality scripts
- [ ] Create Astro project metadata, TypeScript config, and validation scripts.
- [ ] Verify the project structure without installing hidden global dependencies.

### Task 2: EADL design tokens and base layout
- [ ] Create one visual language for light/dark modes, spacing, typography, content width, navigation, and focus states.
- [ ] Create the global documentation shell and mobile navigation.

### Task 3: Seven content blocks
- [ ] Implement Hero, Question, Diagram, Principle, Case, Decision, and Takeaway components.
- [ ] Ensure each component has one responsibility and no visual variants beyond semantic necessity.

### Task 4: Information architecture and landing page
- [ ] Create Concepts, Patterns, Recipes, Case Studies, Reference navigation.
- [ ] Build a restrained landing page that explains EADL and offers a reading path.

### Task 5: Concept pages
- [ ] Build Conceptual Integrity and Decision vs Execution pages.
- [ ] Keep code examples short and use the Enterprise Bid Agent as the sole case study.

### Task 6: Secondary index pages and GitHub deployment
- [ ] Add minimal index pages for Patterns, Recipes, Case Studies, and Reference.
- [ ] Add GitHub Pages workflow and deployment documentation.

### Task 7: Verification
- [ ] Run structural checks for missing files, forbidden extra component types, and broken internal links.
- [ ] Build the site if Node dependencies are available.
