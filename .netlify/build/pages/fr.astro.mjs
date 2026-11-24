/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DQdX347-.mjs';
import { $ as $$PostPreviewB } from '../chunks/PostPreviewB_DjjH7FNG.mjs';
import 'reading-time';
import { g as getAllPosts, s as sortMDByDate, a as sortMDByPinned, f as filterByLanguage } from '../chunks/post_z2C6prmz.mjs';
import '../chunks/consts_BiVoTZ0k.mjs';
import { $ as $$PortfolioGetInTouch } from '../chunks/PortfolioGetInTouch_QuAetefl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const allPostsByPinned = sortMDByPinned(allPostsByDate);
  const filteredPostsByLanguage = filterByLanguage(allPostsByPinned, "fr").slice(0, MAX_POSTS);
  const tech = [
    {
      title: "Astro",
      desc: "Cr\xE9ez des sites Web rapides, plus rapidement.",
      href: "https://astro.build"
    },
    {
      title: "Astro Assets",
      desc: "Prise en charge des ressources optimis\xE9es int\xE9gr\xE9e.",
      href: "https://docs.astro.build/en/guides/assets/"
    },
    {
      title: "Tailwind CSS",
      desc: "Cr\xE9ez rapidement des sites Web modernes sans jamais quitter votre HTML.",
      href: "https://tailwindcss.com"
    },
    {
      title: "Markdown",
      desc: "Langage de balisage simple et facile \xE0 utiliser.",
      href: "https://www.markdownguide.org/"
    },
    {
      title: "MDX",
      desc: "Markdown pour l'\xE8re des composants.",
      href: "https://mdxjs.com/"
    },
    {
      title: "Astro Icon",
      desc: "Un composant d'ic\xF4ne facile \xE0 utiliser pour Astro.",
      href: "https://github.com/natemoo-re/astro-icon#readme"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title">Hello World</h1> <p class="mb-4 sm:mb-8">
Salut! Je m'appelle <strong>Paulin Kubwira</strong>, en tant que développeur web full stack expérimenté avec plus de quatre ans d'expérience, j'ai livré avec succès une vaste gamme de projets innovants et à fort impact. Mon expertise couvre le développement front-end et back-end, complétée par de solides compétences en collaboration, communication et gestion de projets. Je m'épanouis dans des environnements dynamiques et rapides, en tirant parti de ma maîtrise technique et de mes compétences en résolution de problèmes stratégiques pour obtenir des résultats exceptionnels dans des initiatives complexes et transversales.
</p> ${renderComponent($$result2, "PortfolioGetInTouch", $$PortfolioGetInTouch, { "language": "fr" })} </section> <section class="mt-8 sm:mt-16"> <h2 class="title">Lectures Géniales👇</h2> <ul class="space-y-4 sm:space-y-2"> ${filteredPostsByLanguage.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewB, { "post": p })}`)} </ul> </section> <section class="mt-16 mb-4"> <h2 class="title">Technologies</h2> <ul class="space-y-4 sm:space-y-2"> ${tech.map(({ href, title, desc }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="cody-link inline-block"> ${title} </a>
: <p class="inline-block sm:mt-2">${desc}</p> </li>`)} </ul> </section>  ` })}`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/fr/index.astro", void 0);

const $$file = "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/fr/index.astro";
const $$url = "/fr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
