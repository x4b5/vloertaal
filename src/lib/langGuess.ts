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
  es: 'es',
  pt: 'pt',
  fr: 'fr',
  de: 'de',
  so: 'so',
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

/**
 * The language a page asked for: vloertaal.nl/?taal=pl, the button on a language's own page
 * (vloertaal.nl/pl, src/lib/langPages.ts). Only a help language's code counts.
 */
export function askedHelpLang(search: string): LangCode | null {
  const asked = new URLSearchParams(search).get('taal')?.toLowerCase();
  return asked ? (Object.values(CODES).find((c) => c === asked) ?? null) : null;
}

/**
 * Does the phone put Dutch first, before any help language? Then the first run asks "Spreek je
 * Nederlands?" before the help languages (src/components/Screens.tsx Onboarding): a learner who
 * speaks Dutch no longer meets an English page first (review, 9 November 2026). English and other
 * languages the app has no help for are passed over, as in guessHelpLang. A newcomer whose phone
 * is set to Dutch answers "Nee" and goes on to the guess or the list.
 */
export function dutchFirst(languages: readonly string[] | undefined): boolean {
  for (const tag of languages ?? []) {
    const base = tag.toLowerCase().replace(/_/g, '-').split('-')[0];
    if (base === 'nl') return true;
    if (CODES[base]) return false;
  }
  return false;
}

/**
 * The Dutch question for this phone: vloertaal.nl/?taal=nl asks it (the link on the Dutch page and
 * the Dutch dag-1 note), another ?taal= never does, else the phone's own languages decide.
 */
export function phoneDutchFirst(): boolean {
  if (typeof location !== 'undefined') {
    const asked = new URLSearchParams(location.search).get('taal')?.toLowerCase();
    if (asked === 'nl') return true;
    if (askedHelpLang(location.search)) return false;
  }
  if (typeof navigator === 'undefined') return false;
  return dutchFirst(navigator.languages?.length ? navigator.languages : [navigator.language].filter(Boolean));
}

/** The guess for this phone (none outside a browser): the language a page asked for, else the phone's. */
export function phoneHelpLang(): LangCode | null {
  if (typeof location !== 'undefined') {
    const asked = askedHelpLang(location.search);
    if (asked) return asked;
  }
  if (typeof navigator === 'undefined') return null;
  return guessHelpLang(navigator.languages?.length ? navigator.languages : [navigator.language].filter(Boolean));
}
