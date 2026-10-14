import type { LangCode } from '../i18n/types';

/**
 * The first-run guess of the help language, from the phone's own languages (navigator.languages):
 * the first one that is a help language wins. Persian set for Afghanistan (fa-AF) is Dari.
 * English, Dutch or anything else gives no guess, so the list of languages shows right away.
 */
const CODES: Record<string, LangCode> = {
  ar: 'ar',
  ti: 'ti',
  fa: 'fa',
  prs: 'prs',
  uk: 'uk',
  tr: 'tr',
  pl: 'pl',
  ro: 'ro',
  mo: 'ro',
  bg: 'bg',
};

export function guessHelpLang(languages: readonly string[] | undefined): LangCode | null {
  for (const tag of languages ?? []) {
    const [base, ...rest] = tag.toLowerCase().replace(/_/g, '-').split('-');
    if (base === 'fa' && rest.includes('af')) return 'prs';
    const code = CODES[base];
    if (code) return code;
  }
  return null;
}

/** The guess for this phone (none outside a browser). */
export function phoneHelpLang(): LangCode | null {
  if (typeof navigator === 'undefined') return null;
  return guessHelpLang(navigator.languages?.length ? navigator.languages : [navigator.language].filter(Boolean));
}
