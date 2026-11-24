/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import 'reading-time';
import { g as getAllPosts, s as sortMDByDate, f as filterByLanguage, b as getSlugFromCollectionEntry } from '../../chunks/post_z2C6prmz.mjs';
import { a as getSupportedLanguages } from '../../chunks/Footer_B0evyZPS.mjs';
import { $ as $$Base } from '../../chunks/Base_DQdX347-.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_DXcabUJM.mjs';
import { s as siteConfig } from '../../chunks/consts_BiVoTZ0k.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const getStaticPaths = () => {
  return getSupportedLanguages().map((lang) => ({ params: { lang } }));
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts, "ascending");
  const { lang } = Astro2.params;
  const postsFilteredByLanguage = filterByLanguage(
    allPostsByDate,
    lang
  );
  const getGroupsByYear = (posts) => {
    const initialValue = {};
    return posts.reduce((groups, p) => {
      const date = new Date(p.data.pubDate);
      const year = date.getFullYear().toString();
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(p);
      return groups;
    }, initialValue);
  };
  const groupArray = (posts) => {
    const groups = getGroupsByYear(posts);
    const keys = Object.keys(groups);
    return keys.map((year) => {
      return {
        year,
        posts: groups[year]
      };
    });
  };
  const archivedPosts = groupArray(
    postsFilteredByLanguage
  ).reverse();
  const dateFormat = {
    locale: "en-US",
    options: {
      month: "short",
      day: "2-digit"
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": `Archive | ${siteConfig.title}`, "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-4"> ${archivedPosts.map((group) => renderTemplate`<ul class="space-y-2"> <h2 class="title"${addAttribute(group.year, "id")}> <a${addAttribute(`#${group.year}`, "href")} class="-ml-2 cody-link"> <time${addAttribute(group.year, "datetime")}>${group.year}</time> </a> </h2> ${group.posts.map((p) => renderTemplate`<li> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": p.data.updatedDate ?? p.data.pubDate, "dateTimeOptions": dateFormat.options, "locale": dateFormat.locale })} <a class="cody-link"${addAttribute(`/${lang}/blog/${getSlugFromCollectionEntry(p)}`, "href")}> ${p.data.title} </a> </li>`)} </ul>`)} </main> ` })}`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/[lang]/archive/index.astro", void 0);

const $$file = "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/[lang]/archive/index.astro";
const $$url = "/[lang]/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
