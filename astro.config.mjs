import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.github.io',
  base: '/enterprise-agent-engineering',
  output: 'static',
  trailingSlash: 'always'
});
