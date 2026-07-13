import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const required = [
  'src/layouts/DocsLayout.astro','src/styles/global.css','src/pages/index.astro',
  'src/pages/concepts/conceptual-integrity.astro','src/pages/concepts/decision-execution.astro',
  '.github/workflows/deploy.yml'
];
for (const file of required) {
  try { statSync(join(root, file)); } catch { throw new Error(`Missing required file: ${file}`); }
}
const components = readdirSync(join(root, 'src/components')).filter(f => f.endsWith('.astro'));
const allowed = ['Hero.astro','Question.astro','Diagram.astro','Principle.astro','CaseBlock.astro','Decision.astro','Takeaway.astro'];
const extra = components.filter(c => !allowed.includes(c));
if (extra.length) throw new Error(`Unexpected component types: ${extra.join(', ')}`);
const css = readFileSync(join(root, 'src/styles/global.css'), 'utf8');
if (css.includes('#7c3aed') || css.includes('orange') || css.includes('purple')) throw new Error('Multiple accent colors detected');
console.log(`Verified ${required.length} required files and ${components.length} allowed components.`);
