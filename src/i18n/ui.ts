/**
 * This configures the translations for all ui text in your website. 
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */
import type { SupportedLanguage } from "src/utils/i18n";

export default {
    "en": {
        "site.title": {
            text: "Paulin Kubwira"
        },
        "site.description": {
            text: "My name is Paulin Kubwira, I'm a full stack web developer. Let's buiild something awesome together!"
        },
        "profile.description": {
            text: "My name is Paulin Kubwira, I'm a full stack web developer. Let's buiild something awesome together!"
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
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<SupportedLanguage, Record<string, UIEntry>>;

export type UIEntry = { text: string };