import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_y2e9hd0W.mjs';
import 'kleur/colors';
import { $ as $$FormattedDate } from './FormattedDate_DXcabUJM.mjs';
import 'reading-time';
import { b as getSlugFromCollectionEntry } from './post_z2C6prmz.mjs';
import { g as getLangFromUrl } from './Footer_B0evyZPS.mjs';
/* empty css                          */

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const $$PostPreviewA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreviewA;
  const { post, withDesc = false } = Astro2.props;
  const postDate = post.data.updatedDate ?? post.data.pubDate;
  const lang = getLangFromUrl(Astro2.url);
  const slug = getSlugFromCollectionEntry(post);
  const pinned = !!post.data.order;
  const urlBasePath = post.collection === "project" ? "projects" : post.collection;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-b4gyc6eq> <span data-astro-cid-b4gyc6eq> <a${addAttribute(`/${lang}/${urlBasePath}/${slug}`, "href")} class="post-item" data-astro-cid-b4gyc6eq> <h4 class="cody-link inline font-bold" data-astro-cid-b4gyc6eq>${post.data.title}</h4> </a> ${pinned && renderTemplate`<!-- <Icon -->
				<!-- 	class="h-5 w-5 inline text-accent rotate-45 -ml-1" -->
				<!-- 	name="mdi:pin" -->
				<!-- 	aria-hidden="true" -->
				<!-- 	focusable="false" -->
        <!-- /> -->

        <!--?xml version="1.0" encoding="utf-8"?-->
        <!-- License: MIT. Made by Microsoft: https://github.com/microsoft/vscode-codicons -->
      <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" data-astro-cid-b4gyc6eq><path d="M14 5v7h-.278c-.406 0-.778-.086-1.117-.258A2.528 2.528 0 0 1 11.73 11H8.87a3.463 3.463 0 0 1-.546.828 3.685 3.685 0 0 1-.735.633c-.27.177-.565.31-.882.398a3.875 3.875 0 0 1-.985.141h-.5V9H2l-1-.5L2 8h3.222V4h.5c.339 0 .664.047.977.14.312.094.607.227.883.4A3.404 3.404 0 0 1 8.87 6h2.859a2.56 2.56 0 0 1 .875-.734c.338-.172.71-.26 1.117-.266H14zm-.778 1.086a1.222 1.222 0 0 0-.32.156 1.491 1.491 0 0 0-.43.461L12.285 7H8.183l-.117-.336a2.457 2.457 0 0 0-.711-1.047C7.027 5.331 6.427 5.09 6 5v7c.427-.088 1.027-.33 1.355-.617.328-.287.565-.636.71-1.047L8.184 10h4.102l.18.297c.057.094.122.177.195.25.073.073.153.143.242.21.088.069.195.12.32.157V6.086z" data-astro-cid-b4gyc6eq></path></svg>`}</span> <p class="date pr-2 mt-1" data-astro-cid-b4gyc6eq> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": postDate, "data-astro-cid-b4gyc6eq": true })} </p>
{withDesc && <p class="italic" data-astro-cid-b4gyc6eq>${post.data.description}</p>}
</li> `;
}, "/Users/paulinkubwira/Documents/projects/portfolio24/src/components/blog/PostPreviewA.astro", void 0);

export { $$PostPreviewA as $ };
