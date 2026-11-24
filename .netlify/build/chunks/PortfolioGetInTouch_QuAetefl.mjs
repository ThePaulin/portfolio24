import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import { a as $$SocialMediaLinks } from './SocialMediaLinks_ChShESZo.mjs';

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const $$PortfolioGetInTouch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortfolioGetInTouch;
  const { language } = Astro2.props;
  const title = {
    fr: "Construisons ensemble quelque chose de g\xE9nial!\u{1F680}",
    en: "Let's build something awesome together!\u{1F680}"
  };
  return renderTemplate`${maybeRenderHead()}<div class="my-8 w-full flex justify-center"> <div class="flex flex-col items-center justify-center gap-y-4"> <span>${title[language]}</span> ${renderComponent($$result, "SocialMediaLinks", $$SocialMediaLinks, {})} </div> </div>`;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/components/PortfolioGetInTouch.astro", void 0);

export { $$PortfolioGetInTouch as $ };
