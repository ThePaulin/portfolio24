/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DQdX347-.mjs';
import { $ as $$GradientBlocks, t as titleClassNames, a as $$PortfolioProjectCard, b as $$ItemRender, h as h3ClassNames } from '../../chunks/about_CvgcI073.mjs';
import { $ as $$PortfolioGetInTouch } from '../../chunks/PortfolioGetInTouch_QuAetefl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const projects = [
    {
      title: {
        name: "CribsKGL",
        desc: "Site immobilier"
      },
      fullDesc: "Con\xE7u et d\xE9velopp\xE9 en utilisant respectivement Figma et Next.js. Utilise Sanity.io, MongoDB et Next Auth 13. Construit avec des composants hautement r\xE9utilisables, accessibles et r\xE9actifs.",
      siteUrl: "https://cribskgl.vercel.app/",
      gitUrl: "https://github.com/ThePaulin/real-estate-site"
    },
    {
      title: {
        name: "Rare Finds Leather Bags",
        desc: "Site Web de commerce \xE9lectronique"
      },
      fullDesc: "Site e-commerce enti\xE8rement fonctionnel. D\xE9velopp\xE9 avec Next.js et Sanity.io. Utilise l'int\xE9gration de Stripe pour traiter les paiements de mani\xE8re s\xE9curis\xE9e et simple.",
      siteUrl: "https://e-commerce-sanity-stripe-thepaulin.vercel.app/",
      gitUrl: "https://github.com/ThePaulin/e_commerce-sanity-stripe"
    }
  ];
  const bixlersJobDescriptions = [
    "Concevoir, d\xE9velopper et maintenir des applications eCommerce Shopify performantes et \xE9volutives en utilisant des technologies front-end modernes (React.js avec le framework Shopify Hydrogen) et back-end (Node.js).",
    "Collaborer avec des \xE9quipes pluridisciplinaires pour recueillir les exigences et les traduire en solutions techniques robustes, en mettant l'accent sur l'\xE9volutivit\xE9 et la maintenabilit\xE9.",
    "Concevoir et impl\xE9menter des interfaces utilisateur responsives, accessibles et intuitives, conformes aux normes WCAG et optimis\xE9es pour une compatibilit\xE9 multi-appareils.",
    "Exploiter les m\xE9thodologies Agile (Jira) et SonarCloud pour optimiser les flux de d\xE9veloppement, am\xE9liorant la qualit\xE9 du code de 85 % et acc\xE9l\xE9rant les d\xE9lais de livraison.",
    "Diagnostiquer et r\xE9soudre proactivement des probl\xE8mes techniques complexes, minimisant l'impact sur les jalons du projet et la stabilit\xE9 en production.",
    "Effectuer des tests rigoureux, d\xE9boguer et int\xE9grer de mani\xE8re fluide des services tiers via des API REST et GraphQL, garantissant fiabilit\xE9 et performance du syst\xE8me.",
    "Diriger et participer aux revues de code, en appliquant les normes de codage, am\xE9liorant la maintenabilit\xE9 et promouvant une culture d'excellence technique.",
    "Rester \xE0 la pointe des tendances de l'industrie, \xE9valuer et adopter les technologies \xE9mergentes de d\xE9veloppement web pour maintenir un avantage concurrentiel."
  ];
  const skills = [
    "JavaScript/TypeScript, Python, Go, C#, PHP, Java, C/C++ [LANGUAGES]",
    "HTML, CSS [SP\xC9CIFIQUE AU WEB]",
    "React, Remix, Next.js, Astro, Angular [JAVASCRIPT FRAMEWORKS]",
    "Node.js (Express), C#(ASP.NET), Go (Gin), Python (Flask) [BACKEND FRAMEWORKS]",
    "Testes unitaire et E2E (Vite test, Jest, Cypress) [TESTING]",
    "AWS, GCP, Azule, Shopify Oxygen, Netlify, Vercel [CLOUD PLATFORMS]"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "About Me", "description": "Je m'appel Paulin. Je suis developeur de logiciel full stack. Construisons quelque chose de g\xE9nial ensemble!", "image": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GradientBlocks", $$GradientBlocks, {})} ${maybeRenderHead()}<h1${addAttribute(titleClassNames, "class")}>À PROPOS</h1> <p>
Salut! Je m'appelle <strong>Paulin Kubwira</strong>, en tant que développeur web full stack expérimenté avec plus de quatre ans d'expérience, j'ai livré avec succès une vaste gamme de projets innovants et à fort impact. Mon expertise couvre le développement front-end et back-end, complétée par de solides compétences en collaboration, communication et gestion de projets. Je m'épanouis dans des environnements dynamiques et rapides, en tirant parti de ma maîtrise technique et de mes compétences en résolution de problèmes stratégiques pour obtenir des résultats exceptionnels dans des initiatives complexes et transversales.
</p> ${renderComponent($$result2, "PortfolioGetInTouch", $$PortfolioGetInTouch, { "language": "fr" })} <a class="text-accent underline" href="https://ik.imagekit.io/thepaulin/CV%20-25%20-%20FR%20-%20Paulin%20Kubwira.pdf" target="_blank">Voir et télécharger mon CV</a> <h2${addAttribute(titleClassNames, "class")}>PROJETS</h2> <ul class="list-inside list-disc flex flex-col gap-y-12"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "PortfolioProjectCard", $$PortfolioProjectCard, { "project": project })}`)} </ul> <h2${addAttribute(titleClassNames, "class")}>COMPÉTENCES</h2> <ul class="list-inside list-disc pl-6"> ${skills?.map((el) => renderTemplate`${renderComponent($$result2, "ItemRender", $$ItemRender, { "item": el })}`)} </ul> <h2${addAttribute(titleClassNames, "class")}>TRAVAIL</h2> <ul class="list-inside list-disc"> <li class="flex flex-col pl-6"> <h3${addAttribute(h3ClassNames, "class")}><strong class="text-accent">Bixlers</strong> - Full Stack Web developer (<a class="underline text-accent" href="https://www.bixlers.com" target="_blank">bixlers.com</a>, <a class="underline text-accent" href="https://www.perrywinkles.com" target="_blank">perrywinkles.com</a>)</h3> <ul class="ist-inside list-disc pl-6 flex flex-col gap-2"> ${bixlersJobDescriptions?.map((el) => renderTemplate`${renderComponent($$result2, "ItemRender", $$ItemRender, { "item": el })}`)} </ul> </li> </ul> ` })}`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/fr/about.astro", void 0);

const $$file = "/Users/paulinkubwira/Documents/projects/portfolio24/src/pages/fr/about.astro";
const $$url = "/fr/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
