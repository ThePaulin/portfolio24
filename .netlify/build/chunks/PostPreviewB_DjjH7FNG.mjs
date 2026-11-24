import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from './astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import { $ as $$FormattedDate } from './FormattedDate_DXcabUJM.mjs';
import { $ as $$Icon } from './SocialMediaLinks_ChShESZo.mjs';
import 'reading-time';
import { b as getSlugFromCollectionEntry } from './post_z2C6prmz.mjs';
import { g as getLangFromUrl } from './Footer_B0evyZPS.mjs';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const $$PostPreviewB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreviewB;
  const { post, withDesc = false } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const slug = getSlugFromCollectionEntry(post);
  const urlBasePath = post.collection === "project" ? "projects" : post.collection;
  const postDate = post.data.updatedDate ?? post.data.pubDate;
  const pinned = !!post.data.order;
  return renderTemplate`${maybeRenderHead()}<li> <div class="flex flex-col gap-x-0 sm:flex-row sm:divide-x sm:divide-accent"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": postDate, "class": "min-w-[125px] text-gray-600 dark:text-gray-400" })} <span class="sm:before:ml-4"> <a${addAttribute(`/${lang}/${urlBasePath}/${slug}`, "href")} class="cody-link" data-astro-prefetch> ${post.data.title} </a> ${pinned && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5 inline text-accent rotate-45 ml-1", "name": "mdi:pin", "aria-hidden": "true", "focusable": "false" })}`} </span> </div> ${withDesc && renderTemplate`<p class="italic">${post.data.description}</p>`} </li>`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/components/blog/PostPreviewB.astro", void 0);

export { $$PostPreviewB as $ };
