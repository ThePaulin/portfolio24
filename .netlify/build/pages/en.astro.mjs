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
  const filteredPostsByLanguage = filterByLanguage(allPostsByPinned, "en").slice(0, MAX_POSTS);
  const tech = [
    {
      title: "Astro",
      desc: "Build fast websites, faster.",
      href: "https://astro.build"
    },
    {
      title: "Astro Assets",
      desc: "Built-in optimized asset support.",
      href: "https://docs.astro.build/en/guides/assets/"
    },
    {
      title: "Tailwind CSS",
      desc: "Rapidly build modern websites without ever leaving your HTML.",
      href: "https://tailwindcss.com"
    },
    {
      title: "Markdown",
      desc: "Simple and easy-to-use markup language.",
      href: "https://www.markdownguide.org/"
    },
    {
      title: "MDX",
      desc: "Markdown for the component era.",
      href: "https://mdxjs.com/"
    },
    {
      title: "Astro Icon",
      desc: "An easy to use Icon component for Astro.",
      href: "https://github.com/natemoo-re/astro-icon#readme"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title">Hello World</h1> <p class="mb-4 sm:mb-8">
Hi!👋 My name is <strong>Paulin Kubwira</strong>, as a seasoned Full Stack Web Developer with over four years of experience, I have successfully delivered a wide range of innovative and high-impact projects. My expertise spans both front-end and back-end development, complemented by strong skills in collaboration, communication, and project management. I thrive in dynamic, fast-paced environments, consistently leveraging my technical proficiency and strategic problem-solving to drive exceptional outcomes for complex, cross-functional initiatives.
</p> ${renderComponent($$result2, "PortfolioGetInTouch", $$PortfolioGetInTouch, { "language": "en" })} </section> <section class="mt-8 sm:mt-16"> <h2 class="title">Awesome Reads👇</h2> <ul class="space-y-4 sm:space-y-2"> ${filteredPostsByLanguage.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewB, { "post": p })}`)} </ul> </section> <section class="mt-16"> <h2 class="title">Technologies</h2> <ul class="space-y-4 sm:space-y-2"> ${tech.map(({ href, title, desc }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="cody-link inline-block"> ${title} </a>
: <p class="inline-block sm:mt-2">${desc}</p> </li>`)} </ul> </section> ` })}`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/en/index.astro", void 0);

const $$file = "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
