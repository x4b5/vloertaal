import { mixLessonId, relatedUnits } from '../content/review';
import { langMeta, languageMeta } from './meta';
import type { LanguagePack } from './packs/types';
import type { Gender, HelpLanguage, HelpLanguageSource, LangCode, LangText, UiKey } from './types';
import { forGender, GENDERED_LANGS, uiEn } from './types';

export { languageMeta, langMeta, metaLanguage, LANG_CODES, type LangMeta } from './meta';

/**
 * The help languages are loaded on demand: each is its own file (src/i18n/packs), about 50 kB
 * zipped, so the first screen does not wait for all nine. ensureLanguage(code) loads one (the app
 * waits for it at start and when the language changes, showing the splash); getHelpLanguage then
 * returns it straight away. The language list and the guess page need only src/i18n/meta.ts.
 */
const loaders: Record<LangCode, () => Promise<{ default: LanguagePack }>> = {
  ar: () => import('./packs/ar'),
  ti: () => import('./packs/ti'),
  fa: () => import('./packs/fa'),
  prs: () => import('./packs/prs'),
  uk: () => import('./packs/uk'),
  tr: () => import('./packs/tr'),
  pl: () => import('./packs/pl'),
  ro: () => import('./packs/ro'),
  bg: () => import('./packs/bg'),
};

const sources = new Map<LangCode, HelpLanguageSource>();
const packUrls = new Map<LangCode, string>();
const pending = new Map<LangCode, Promise<void>>();

/** Workplace-culture, work-and-rights, About and learning texts live in their own files; merge them in. */
function merge(p: LanguagePack): HelpLanguageSource {
  const l = p.base;
  return {
    ...l,
    ui: { ...l.ui, ...p.culture.ui, ...p.work.ui, ...p.about.ui, ...p.learn.ui },
    gloss: {
      ...l.gloss, ...p.culture.gloss, ...p.work.gloss, ...p.about.gloss, ...p.learn.gloss,
      // Every unit's "Mixed review" lesson shares one title.
      ...Object.fromEntries(Object.keys(relatedUnits).map((id) => [mixLessonId(id), l.ui.mixLesson ?? uiEn.mixLesson])),
    },
  };
}

/** Puts a loaded pack in place (also used by src/i18n/all.ts, which loads every pack at once for tests). */
export function registerPack(pack: LanguagePack): void {
  const code = pack.base.code;
  sources.set(code, merge(pack));
  packUrls.set(code, pack.url);
  for (const key of [...cache.keys()]) if (key.startsWith(`${code}:`)) cache.delete(key);
}

export function isLanguageLoaded(code: LangCode | null | undefined): boolean {
  return !code || sources.has(code);
}

/**
 * Loads a help language's pack (once; again after a failure, e.g. offline). Resolves at once for
 * English only (null) or a pack already here.
 */
export function ensureLanguage(code: LangCode | null | undefined): Promise<void> {
  if (!code || sources.has(code) || !loaders[code]) return Promise.resolve();
  let p = pending.get(code);
  if (!p) {
    p = loaders[code]().then((m) => registerPack(m.default)).finally(() => pending.delete(code));
    pending.set(code, p);
  }
  return p;
}

/** The files of the packs loaded on this visit: saved with the app for offline use (src/lib/offline.ts). */
export function loadedPackUrls(): string[] {
  return [...packUrls.values()].filter((u) => /^https?:/.test(u));
}

/** The loaded help languages' sources, in picker order (checks and tests; see src/i18n/all.ts). */
export function loadedSources(): HelpLanguageSource[] {
  return languageMeta.flatMap((m) => sources.get(m.code) ?? []);
}

const resolveAll = (texts: Record<string, LangText | undefined>, gender?: Gender): Record<string, string> =>
  Object.fromEntries(Object.entries(texts).flatMap(([k, t]) => (t === undefined ? [] : [[k, forGender(t, gender)]])));

/**
 * A help language for one learner: every gendered text resolved once, for their gender
 * (fallback: their form, then the both-forms `x`, then the masculine). Every lookup (ui, gloss,
 * lang.ui.x, lang.gloss[id]) then reads plain strings in the right form.
 */
function resolve(src: HelpLanguageSource, gender?: Gender): HelpLanguage {
  return { ...src, gender, ui: resolveAll(src.ui, gender), gloss: resolveAll(src.gloss, gender) };
}

const cache = new Map<string, HelpLanguage>();

/** Does the help language change "I am sick" / "you are new" for a woman or a man? */
export function hasGender(code: LangCode | null | undefined): boolean {
  return Boolean(code && GENDERED_LANGS.includes(code));
}

/**
 * The help language, resolved for the learner's gender. Undefined for English only, and also
 * while its pack has not loaded yet (call ensureLanguage first; the app shows its splash meanwhile).
 */
export function getHelpLanguage(code: LangCode | null | undefined, gender?: Gender | null): HelpLanguage | undefined {
  const src = code ? sources.get(code) : undefined;
  if (!src || !langMeta(code)) return undefined;
  const g = gender ?? undefined;
  const key = `${src.code}:${g ?? ''}`;
  let lang = cache.get(key);
  if (!lang) {
    lang = resolve(src, g);
    cache.set(key, lang);
  }
  return lang;
}

/** An English string plus, when available, the same string in the help language. */
export interface Bilingual {
  en: string;
  help?: string;
  lang?: HelpLanguage;
}

export function ui(key: UiKey, lang?: HelpLanguage): Bilingual {
  return { en: uiEn[key], help: lang?.ui[key], lang };
}

export function gloss(id: string, en: string, lang?: HelpLanguage): Bilingual {
  return { en, help: lang?.gloss[id], lang };
}

/** Fills {n} in both languages of a UI string. */
export function fillN(text: Bilingual, n: number): Bilingual {
  return { ...text, en: text.en.replace('{n}', String(n)), help: text.help?.replace('{n}', String(n)) };
}

/** A {n} string without its number, for places that show the number big on its own
 *  ("3" + "in a row"): no "label: n" punctuation to wrap or reorder in right-to-left text. */
export function withoutN(text: Bilingual): Bilingual {
  const drop = (s: string) => s.replace(/\s*\{n\}\s*/, ' ').replace(/\s+/g, ' ').trim();
  return { ...text, en: drop(text.en), help: text.help && drop(text.help) };
}

/** Strings with a count that have their own singular form ("1 day", not "1 days"). */
const SINGULAR: Partial<Record<UiKey, UiKey>> = {
  daysUnit: 'daysUnitOne',
  wordsUnit: 'wordsUnitOne',
  wordsLearnedN: 'wordsLearnedOne',
  tomorrowN: 'tomorrowOne',
  wordsStrongerN: 'wordsStrongerOne',
  recordN: 'recordOne',
  streakStopped: 'streakStoppedOne',
  lessonsUnit: 'lessonsUnitOne',
};

/** A UI string for a count of `n`: the singular form when n is 1 (in every language). */
export function uiCount(key: UiKey, n: number, lang?: HelpLanguage): Bilingual {
  return ui(n === 1 ? SINGULAR[key] ?? key : key, lang);
}

/** uiCount with the number filled in. */
export function fillCount(key: UiKey, n: number, lang?: HelpLanguage): Bilingual {
  return fillN(uiCount(key, n, lang), n);
}

/**
 * What a screen reader says for a text (aria-label, title, sr-only): the help language when
 * there is one, English only without it. English is hidden from help-language users on screen,
 * so it is not read out to them either.
 */
export function said(text: Bilingual): string {
  return text.help ?? text.en;
}

/** The `lang` attribute for said(text): the help language's code, or English. */
export function saidLang(text: Bilingual): string {
  return text.help && text.lang ? text.lang.code : 'en';
}
