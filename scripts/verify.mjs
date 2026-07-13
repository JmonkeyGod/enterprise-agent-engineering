import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const required = [
  'src/layouts/DocsLayout.astro','src/styles/global.css','src/pages/index.astro',
  'src/pages/concepts/conceptual-integrity.astro','src/pages/concepts/decision-execution.astro',
  '.github/workflows/deploy.yml',
  'src/pages/concepts/index.astro',
  'src/pages/concepts/state.astro',
  'src/pages/concepts/memory-truth.astro',
  'src/pages/concepts/tool-capability.astro',
  'src/pages/concepts/evaluation-trust.astro',
  'src/pages/patterns/index.astro',
  'src/pages/patterns/workflow-agent.astro',
  'src/pages/patterns/human-in-control.astro',
  'src/pages/recipes/index.astro',
  'src/pages/recipes/langgraph-explicit-state.astro',
  'src/pages/case-studies/index.astro',
  'src/pages/case-studies/enterprise-bid-agent.astro',
  'src/pages/reference/index.astro'
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

const reference = readFileSync(join(root, 'src/pages/reference/index.astro'), 'utf8');
const vocabulary = ['Decision', 'Execution', 'State', 'Memory', 'Knowledge', 'Tool', 'Evaluation', 'Safety', 'Evolution'];
for (const term of vocabulary) {
  if (!reference.includes(term)) throw new Error(`Missing EADL vocabulary term: ${term}`);
}
