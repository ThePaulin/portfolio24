import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot } from './astro/server_y2e9hd0W.mjs';
/* empty css                                                                  */
import 'clsx';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/components/HeaderLink.astro", void 0);

export { $$HeaderLink as $ };
