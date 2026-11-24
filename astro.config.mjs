import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

import tailwind from "@astrojs/tailwind";

// import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel/static';

// astro-icon@0.8 re-exports a TypeScript type as a runtime value, which modern
// Rollup/Vite versions reject during bundling. Patch those components to use a
// type-only export before Astro compiles them.
const patchAstroIconTypeExport = () => ({
  name: 'patch-astro-icon-type-export',
  enforce: 'pre',
  load(id) {
    const normalizedId = id.replace(/\\/g, '/');
    if (normalizedId.includes('/astro-icon/lib/') && normalizedId.endsWith('.astro')) {
      return readFileSync(id, 'utf8').replace('export { Props }', 'export type { Props }');
    }
  },
});

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [patchAstroIconTypeExport()],
  },
  site: 'https://thepaulin.com',
  integrations: [mdx(), sitemap(), tailwind()],

  // NOTE: Make sure this matches your supported languages in the file: src/consts.ts
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"]
  },

  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      themes: {
        light: 'catppuccin-mocha',
        dark: 'catppuccin-latte',
      },
    }
  },

  output: 'static',
  // adapter: netlify(),
  adapter: vercel(),
});
