import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, a as renderComponent, f as renderHead, e as renderSlot } from './astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$BaseHead, b as $$Header, c as $$Footer } from './Footer_B0evyZPS.mjs';
import { s as siteConfig, u as ui } from './consts_BiVoTZ0k.mjs';
import 'reading-time';
import './_astro_content_BslK9pbI.mjs';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const lang = getLangFromUrl(Astro2.url);
  const {
    title = siteConfig.title,
    description = ui[lang]["site.description"].text,
    image
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang || Astro2.currentLocale, "lang")} class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K728NKCP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ${renderComponent($$result, "Header", $$Header, {})} <main> <section class="cody-bg"> ${renderSlot($$result, $$slots["default"])} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/layouts/Base.astro", void 0);

export { $$Base as $ };
