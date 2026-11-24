const ui = {
  "en": {
    "site.title": {
      text: "Paulin Kubwira"
    },
    "site.description": {
      text: "My name is Paulin Kubwira, I'm a full stack web developer. Let's build something awesome together!"
    },
    "profile.description": {
      text: "My name is Paulin Kubwira, I'm a full stack web developer. Let's build something awesome together!"
    },
    "blog.lastUpdated": {
      text: "Last updated:"
    },
    "sidebar.tableOfContents": {
      text: "Table of Contents"
    },
    "project.platform": {
      text: "PLATFORM"
    },
    "project.stack": {
      text: "STACK"
    },
    "project.website": {
      text: "WEBSITE"
    }
  },
  "fr": {
    "site.title": {
      text: "Paulin Kubwira"
    },
    "site.description": {
      text: "Je m'appelle Paulin Kubwira, je suis développeur web full stack. Bâtissons ensemble quelque chose de génial !"
    },
    "profile.description": {
      text: "Je m'appelle Paulin Kubwira, je suis développeur web full stack. Bâtissons ensemble quelque chose de génial !"
    },
    "blog.lastUpdated": {
      text: "Dernièrement mis à jour:"
    },
    "sidebar.tableOfContents": {
      text: "Table des matières"
    },
    "project.platform": {
      text: "PLATFORME"
    },
    "project.stack": {
      text: "STACK"
    },
    "project.website": {
      text: "SITE WEB"
    }
  }
};

const SUPPORTED_LANGUAGES = {
  "en": "en",
  "fr": "fr"
};
const DEFAULT_LANG = SUPPORTED_LANGUAGES.en;
const siteConfig = {
  title: ui[DEFAULT_LANG]["site.title"].text,
  description: ui[DEFAULT_LANG]["site.description"].text,
  lang: DEFAULT_LANG,
  profile: {
    author: "Paulin Kubwira",
    description: ui[DEFAULT_LANG]["profile.description"].text
  },
  settings: {
    paginationSize: 10
  }
};
const SOCIAL_LINKS = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/ThePaulin"
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/paulin-kubwira-249489228/"
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:kubwirapaulin@gmail.com"
  }
  // {
  //   icon: "mdi:rss",
  //   friendlyName: "rss",
  //   link: "/rss.xml"
  // }
];
const NAV_LINKS = [
  "home",
  "about",
  "blog"
  // "projects", 
  // "archive"
];

export { DEFAULT_LANG as D, NAV_LINKS as N, SOCIAL_LINKS as S, SUPPORTED_LANGUAGES as a, siteConfig as s, ui as u };
