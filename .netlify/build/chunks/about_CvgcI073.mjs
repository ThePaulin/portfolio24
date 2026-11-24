/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent, F as Fragment } from './astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$PortfolioGetInTouch } from './PortfolioGetInTouch_QuAetefl.mjs';
import { $ as $$Base } from './Base_DQdX347-.mjs';

const $$GradientBlocks = createComponent(($$result, $$props, $$slots) => {
  const blocks = [
    { opacity: 0.2, width: 1 },
    { opacity: 0.3, width: 1.5 },
    { opacity: 0.4, width: 0.8 },
    { opacity: 0.5, width: 1.2 },
    { opacity: 0.6, width: 0.7 },
    { opacity: 0.7, width: 1.3 },
    { opacity: 0.8, width: 0.9 },
    { opacity: 0.9, width: 1.1 },
    { opacity: 1, width: 1 }
  ];
  const totalWidth = blocks.reduce((sum, block) => sum + block.width, 0);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row w-full max-w-5xl mx-auto p-4 h-[300px]">  <div class="hidden md:flex h-[300px] flex-1 md:mr-4"> ${blocks.map((block, index) => renderTemplate`<div class="h-full"${addAttribute({
    backgroundColor: `#812ae4`,
    opacity: block.opacity,
    width: `${block.width / totalWidth * 100}%`
  }, "style")}></div>`)} </div>  <div class="w-full md:w-[300px] h-[300px] flex-shrink-0 mt-4 md:mt-0"> <img src="https://ik.imagekit.io/thepaulin/profile.4b2bbc9a463700b9bf98.png?updatedAt=1733003668030" alt="Square image"${addAttribute(300, "width")}${addAttribute(300, "height")} class="h-full w-full object-cover"> </div> </div>`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/components/GradientBlocks.astro", void 0);

const $$Astro$2 = createAstro("https://astro-theme-cody.netlify.app");
const $$ItemRender = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ItemRender;
  const { item } = Astro2.props;
  const pattern = /\[[a-zA-Z0-9_ ]+\]/g;
  const matchedStr = item.match(pattern);
  return renderTemplate`${maybeRenderHead()}<li> <span>${item?.replace(pattern, "")}</span> ${matchedStr?.length > 0 && renderTemplate`<span class="bg-accent font-bold text-white px-2">${matchedStr[0].slice(1, matchedStr[0].length - 1)}</span>`} </li>`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/components/ItemRender.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-cody.netlify.app");
const h3ClassNames = "text-base mb-2";
const $$PortfolioProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioProjectCard;
  const listItemClassNames = "ml-0 xl:ml-12 flex flex-col justify-start xl:max-w-[600px]";
  const linkSectionClassNames = "flex gap-x-6 mt-2 text-accent";
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(listItemClassNames, "class")}> <h3${addAttribute(h3ClassNames, "class")}> <strong class="text-accent">${project.title.name}</strong> - <span>${project.title.desc}</span> </h3> <p>${project.fullDesc}</p> <span${addAttribute(linkSectionClassNames, "class")}> <a class="font-bold underline" target="_blank"${addAttribute(project.siteUrl, "href")}>View website</a> ${project.gitUrl ? renderTemplate`<a class="font-bold underline" target="_blank"${addAttribute(project.gitUrl, "href")}>View on Github</a>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`} </span> </li>`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/components/PortfolioProjectCard.astro", void 0);

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const titleClassNames = "title my-8";
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const projects = [
    {
      title: {
        name: "CribsKGL",
        desc: "Real Estate Website"
      },
      fullDesc: "Designed and developed using Figma and Next.js respectively. Uses Sanity.io, MongoDB and Next Auth 13. Built with highly re-usable, accessible and responsive components.",
      siteUrl: "https://cribskgl.vercel.app/",
      gitUrl: "https://github.com/ThePaulin/real-estate-site"
    },
    {
      title: {
        name: "Rare Finds Leather Bags",
        desc: "E-Commerce Website"
      },
      fullDesc: "Fully functional e-commerce website. Developed using Next.js and Sanity.io. Uses Stripe inrtegration to process payments in a secure and straight forward process.",
      siteUrl: "https://e-commerce-sanity-stripe-thepaulin.vercel.app/",
      gitUrl: "https://github.com/ThePaulin/e_commerce-sanity-stripe"
    }
  ];
  const bixlersJobDescriptions = [
    "Architect, develop, and maintain high-performance, scalable Shopify eCommerce applications using modern front-end (React.js with Shopify Hydrogen) and back-end (Node.js) technologies.",
    "Partner with cross-functional teams to elicit requirements, translating them into robust technical solutions with a focus on scalability and maintainability.",
    "Design and implement responsive, accessible, and intuitive user interfaces, adhering to WCAG standards and optimizing for cross-device compatibility.",
    "Leverage Agile methodologies (Jira) and SonarCloud to enhance development workflows, driving 85% improvement in code quality metrics and accelerating delivery timelines.",
    "Proactively diagnose and resolve complex technical issues, ensuring minimal impact on project milestones and production stability.",
    "Conduct rigorous testing, debugging, and seamless integration of third-party services via REST and GraphQL APIs, ensuring system reliability and performance.",
    "Lead and contribute to code reviews, enforcing coding standards, improving maintainability, and fostering a culture of technical excellence.",
    "Stay ahead of industry trends, evaluating and adopting emerging web development technologies to maintain a competitive edge."
  ];
  const skills = [
    "JavaScript/TypeScript, Python, Go, C#, PHP, Java, C/C++ [LANGUAGES]",
    "HTML, CSS [WEB SPECIFIC]",
    "React, Remix, Next.js, Astro, Angular [JAVASCRIPT FRAMEWORKS]",
    "Node.js (Express), C#(ASP.NET), Go (Gin), Python (Flask) [BACKEND FRAMEWORKS]",
    "Unit & E2E testing (Vite test, Jest, Cypress) [TESTING]",
    "AWS, GCP, Azule, Shopify Oxygen, Netlify, Vercel [CLOUD PLATFORMS]"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "About Me", "description": "My name is Paulin, I'm a full stack web developer. Let's build something awesome together!", "image": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GradientBlocks", $$GradientBlocks, {})} ${maybeRenderHead()}<h1${addAttribute(titleClassNames, "class")}>ABOUT ME</h1> <p>
Hi!👋 My name is <strong>Paulin Kubwira</strong>,  as a seasoned Full Stack Web Developer with over four years of experience, I have successfully delivered a wide range of innovative and high-impact projects. My expertise spans both front-end and back-end development, complemented by strong skills in collaboration, communication, and project management. I thrive in dynamic, fast-paced environments, consistently leveraging my technical proficiency and strategic problem-solving to drive exceptional outcomes for complex, cross-functional initiatives.
</p> ${renderComponent($$result2, "PortfolioGetInTouch", $$PortfolioGetInTouch, { "language": "en" })} <a class="text-accent underline" href="https://ik.imagekit.io/thepaulin/CV%20-25%20-%20Paulin%20Kubwira.pdf" target="_blank">View & download my Resumé</a> <h2${addAttribute(titleClassNames, "class")}>PROJECTS</h2> <ul class="list-inside list-disc flex flex-col gap-y-12"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "PortfolioProjectCard", $$PortfolioProjectCard, { "project": project })}`)} </ul> <h2${addAttribute(titleClassNames, "class")}>SKILLS</h2> <ul class="list-inside list-disc pl-6"> ${skills?.map((el) => renderTemplate`${renderComponent($$result2, "ItemRender", $$ItemRender, { "item": el })}`)} </ul> <h2${addAttribute(titleClassNames, "class")}>WORK</h2> <ul class="list-inside list-disc"> <li class="flex flex-col pl-6"> <h3${addAttribute(h3ClassNames, "class")}><strong class="text-accent">Bixlers</strong> - Full Stack Web developer (<a class="underline text-accent" href="https://www.bixlers.com" target="_blank">bixlers.com</a>, <a class="underline text-accent" href="https://www.perrywinkles.com" target="_blank">perrywinkles.com</a>)</h3> <ul class="ist-inside list-disc pl-6 flex flex-col gap-2"> ${bixlersJobDescriptions?.map((el) => renderTemplate`${renderComponent($$result2, "ItemRender", $$ItemRender, { "item": el })}`)} </ul> </li> </ul>   ` })}`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/en/about.astro", void 0);

const $$file = "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/en/about.astro";
const $$url = "/en/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  titleClassNames,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$GradientBlocks as $, _page as _, $$PortfolioProjectCard as a, $$ItemRender as b, h3ClassNames as h, titleClassNames as t };
