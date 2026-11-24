/* empty css                                 */
import { b as createAstro, c as createComponent } from '../chunks/astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import 'clsx';
import { D as DEFAULT_LANG } from '../chunks/consts_BiVoTZ0k.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect(`/${DEFAULT_LANG}/`);
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/index.astro", void 0);

const $$file = "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
