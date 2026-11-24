/* empty css                                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../../chunks/astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../chunks/Base_DQdX347-.mjs';
import { $ as $$PostPreviewA } from '../../../../chunks/PostPreviewA_Ddk3qXdU.mjs';
import { g as getCollection } from '../../../../chunks/_astro_content_BslK9pbI.mjs';
import { s as siteConfig } from '../../../../chunks/consts_BiVoTZ0k.mjs';
import 'reading-time';
import { f as filterByLanguage } from '../../../../chunks/post_z2C6prmz.mjs';
import { a as getSupportedLanguages } from '../../../../chunks/Footer_B0evyZPS.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  const allProjects = await getCollection("project", ({ data }) => {
    return data.draft !== true ;
  });
  const sortedByDateProjects = allProjects.sort((a, b) => {
    const aDate = new Date(a.data.pubDate).valueOf();
    const bDate = new Date(b.data.pubDate).valueOf();
    return bDate - aDate;
  });
  const sortedByPinned = sortedByDateProjects.sort((a, b) => {
    const aOrder = a.data.order ?? 100;
    const bOrder = b.data.order ?? 100;
    return aOrder - bOrder;
  });
  return getSupportedLanguages().flatMap((lang) => {
    const projects = filterByLanguage(
      sortedByPinned,
      lang
    );
    return paginate(projects, {
      params: { lang },
      pageSize: siteConfig.settings.paginationSize
    });
  });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h2 class="title">Projects</h2> <ul role="list" class="space-y-2 sm:space-y-4"> ${page.data.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewA, { "post": p, "withDesc": true })}`)} </ul> </section> ` })}`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/[lang]/projects/pages/[page].astro", void 0);
const $$file = "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/[lang]/projects/pages/[page].astro";
const $$url = "/[lang]/projects/pages/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
