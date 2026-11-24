import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D_UxCnrZ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/en/about.astro.mjs');
const _page3 = () => import('./pages/en.astro.mjs');
const _page4 = () => import('./pages/fr/about.astro.mjs');
const _page5 = () => import('./pages/fr.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/_lang_/archive.astro.mjs');
const _page8 = () => import('./pages/_lang_/blog/pages/_page_.astro.mjs');
const _page9 = () => import('./pages/_lang_/blog/_slug_.astro.mjs');
const _page10 = () => import('./pages/_lang_/projects/pages/_page_.astro.mjs');
const _page11 = () => import('./pages/_lang_/projects/_slug_.astro.mjs');
const _page12 = () => import('./pages/_lang_/series/_series_/_---page_.astro.mjs');
const _page13 = () => import('./pages/_lang_/series.astro.mjs');
const _page14 = () => import('./pages/_lang_/tags/_tag_/_---page_.astro.mjs');
const _page15 = () => import('./pages/_lang_/tags.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/en/about.astro", _page2],
    ["src/pages/en/index.astro", _page3],
    ["src/pages/fr/about.astro", _page4],
    ["src/pages/fr/index.astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/[lang]/archive/index.astro", _page7],
    ["src/pages/[lang]/blog/pages/[page].astro", _page8],
    ["src/pages/[lang]/blog/[slug].astro", _page9],
    ["src/pages/[lang]/projects/pages/[page].astro", _page10],
    ["src/pages/[lang]/projects/[slug].astro", _page11],
    ["src/pages/[lang]/series/[series]/[...page].astro", _page12],
    ["src/pages/[lang]/series/index.astro", _page13],
    ["src/pages/[lang]/tags/[tag]/[...page].astro", _page14],
    ["src/pages/[lang]/tags/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d76bb710-0222-4b07-8f56-2d6ae88d980a"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
