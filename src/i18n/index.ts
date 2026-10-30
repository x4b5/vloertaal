import { mixLessonId, relatedUnits } from '../content/review';
import { langMeta, languageMeta, langTag } from './meta';
import type { LanguagePack, RegionTextPack } from './packs/types';
import type { CultureTranslation } from './culture/types';
import type { Gender, HelpLanguage, HelpLanguageSource, LangCode, LangText, PluralCategory, PluralForms, UiCode, UiKey, UiText } from './types';
import { forGender, GENDERED_LANGS, isPlural, PLURAL_CATEGORIES, uiEn } from './types';

export { languageMeta, langMeta, langTag, languageMark, metaLanguage, LANG_CODES, NL_META, NL_MORE, type LangMeta } from './meta';

/**
 * The help languages are loaded on demand: each is its own file (src/i18n/packs), about 50 kB
 * zipped, so the first screen does not wait for all nine. ensureLanguage(code) loads one (the app
 * waits for it at start and when the language changes, showing the splash); getHelpLanguage then
 * returns it straight away. The language list and the guess page need only src/i18n/meta.ts.
 */
const loaders: Record<UiCode, () => Promise<{ default: LanguagePack }>> = {
  ar: () => import('./packs/ar'),
  ti: () => import('./packs/ti'),
  fa: () => import('./packs/fa'),
  prs: () => import('./packs/prs'),
  uk: () => import('./packs/uk'),
  tr: () => import('./packs/tr'),
  pl: () => import('./packs/pl'),
  ro: () => import('./packs/ro'),
  bg: () => import('./packs/bg'),
  es: () => import('./packs/es'),
  pt: () => import('./packs/pt'),
  fr: () => import('./packs/fr'),
  de: () => import('./packs/de'),
  // The work-rules track: the screens in plain Dutch, plus the rules course (src/lib/track.ts).
  nl: () => import('./packs/nl'),
};

/**
 * The region texts (src/i18n/regio/<lang>.ts) are a file of their own per help language, loaded
 * only while the regions are on and needed (ensureRegionTexts: a learner of a region, or the
 * Settings row "Waar woon je?"), so no language's file carries them. The Dutch track has none
 * (its screens are Dutch already).
 */
const regionLoaders: Partial<Record<UiCode, () => Promise<{ default: RegionTextPack }>>> = {
  ar: () => import('./packs/regio-ar'),
  ti: () => import('./packs/regio-ti'),
  fa: () => import('./packs/regio-fa'),
  prs: () => import('./packs/regio-prs'),
  uk: () => import('./packs/regio-uk'),
  tr: () => import('./packs/regio-tr'),
  pl: () => import('./packs/regio-pl'),
  ro: () => import('./packs/regio-ro'),
  bg: () => import('./packs/regio-bg'),
  es: () => import('./packs/regio-es'),
  pt: () => import('./packs/regio-pt'),
  fr: () => import('./packs/regio-fr'),
  de: () => import('./packs/regio-de'),
};

const packs = new Map<UiCode, LanguagePack>();
const sources = new Map<UiCode, HelpLanguageSource>();
const packUrls = new Map<UiCode, string>();
const pending = new Map<UiCode, Promise<void>>();
const regionTexts = new Map<UiCode, RegionTextPack>();
const regionPending = new Map<UiCode, Promise<void>>();
const NO_TEXTS: CultureTranslation = { ui: {}, gloss: {} };

/** Workplace-culture, work-and-rights, About, learning and (once loaded) region texts live in their own files; merge them in. */
function merge(p: LanguagePack, r: CultureTranslation = NO_TEXTS): HelpLanguageSource {
  const l = p.base;
  const mix = l.ui.mixLesson ?? uiEn.mixLesson;
  return {
    ...l,
    ui: { ...l.ui, ...p.culture.ui, ...p.work.ui, ...p.about.ui, ...p.learn.ui, ...p.sayings.ui, ...p.sounds.ui, ...p.kunJeNu.ui, ...r.ui },
    gloss: {
      ...l.gloss, ...p.culture.gloss, ...p.work.gloss, ...p.about.gloss, ...p.learn.gloss, ...p.sayings.gloss, ...p.sounds.gloss, ...p.kunJeNu.gloss, ...r.gloss,
      // Every unit's "Mixed review" lesson shares one title.
      ...Object.fromEntries(Object.keys(relatedUnits).map((id) => [mixLessonId(id), isPlural(mix) ? mix.other : mix])),
    },
  };
}

/** Puts a loaded pack in place (also used by src/i18n/all.ts, which loads every pack at once for tests). */
export function registerPack(pack: LanguagePack): void {
  const code = pack.base.code;
  packs.set(code, pack);
  packUrls.set(code, pack.url);
  rebuild(code);
}

/** Puts a help language's region texts in place (merged into its pack now, or when that loads). */
export function registerRegionTexts(pack: RegionTextPack): void {
  regionTexts.set(pack.code, pack);
  rebuild(pack.code);
}

function rebuild(code: UiCode): void {
  const pack = packs.get(code);
  if (!pack) return;
  sources.set(code, merge(pack, regionTexts.get(code)?.texts));
  for (const key of [...cache.keys()]) if (key.startsWith(`${code}:`)) cache.delete(key);
}

export function isLanguageLoaded(code: UiCode | null | undefined): boolean {
  return !code || sources.has(code);
}

/**
 * Loads a help language's pack (once; again after a failure, e.g. offline). Resolves at once for
 * English only (null) or a pack already here.
 */
export function ensureLanguage(code: UiCode | null | undefined): Promise<void> {
  if (!code || sources.has(code) || !loaders[code]) return Promise.resolve();
  let p = pending.get(code);
  if (!p) {
    p = loaders[code]().then((m) => registerPack(m.default)).finally(() => pending.delete(code));
    pending.set(code, p);
  }
  return p;
}

/** Are a help language's region texts here (or does it have none: English only, the Dutch track)? */
export function isRegionTextsLoaded(code: UiCode | null | undefined): boolean {
  return !code || !regionLoaders[code] || regionTexts.has(code);
}

/**
 * Loads a help language's region texts (once; again after a failure). The caller decides that they
 * are needed (src/lib/region.ts): never while the regions are off, so nothing is fetched then.
 */
export function ensureRegionTexts(code: UiCode | null | undefined): Promise<void> {
  const load = code ? regionLoaders[code] : undefined;
  if (!code || !load || regionTexts.has(code)) return Promise.resolve();
  let p = regionPending.get(code);
  if (!p) {
    p = load().then((m) => registerRegionTexts(m.default)).finally(() => regionPending.delete(code));
    regionPending.set(code, p);
  }
  return p;
}

/** The files of the packs loaded on this visit: saved with the app for offline use (src/lib/offline.ts).
 *  The region texts loaded on this visit too (each is a file of its own). */
export function loadedPackUrls(): string[] {
  return [...packUrls.values(), ...[...regionTexts.values()].map((r) => r.url)].filter((u) => /^https?:/.test(u));
}

/** The loaded help languages' sources, in picker order (checks and tests; see src/i18n/all.ts). */
export function loadedSources(): HelpLanguageSource[] {
  return languageMeta.flatMap((m) => sources.get(m.code) ?? []);
}

const resolveAll = (texts: Record<string, LangText | undefined>, gender?: Gender): Record<string, string> =>
  Object.fromEntries(Object.entries(texts).flatMap(([k, t]) => (t === undefined ? [] : [[k, forGender(t, gender)]])));

/** A plural object's forms for one gender (only the categories it has; `other` always). */
const pluralFor = (t: Extract<UiText, { other: LangText }>, gender?: Gender): PluralForms =>
  Object.fromEntries(PLURAL_CATEGORIES.flatMap((c) => (t[c] === undefined ? [] : [[c, forGender(t[c], gender)]]))) as PluralForms;

/**
 * A help language for one learner: every gendered text resolved once, for their gender
 * (fallback: their form, then the both-forms `x`, then the masculine). Every lookup (ui, gloss,
 * lang.ui.x, lang.gloss[id]) then reads plain strings in the right form.
 */
function resolve(src: HelpLanguageSource, gender?: Gender): HelpLanguage {
  const plural: Partial<Record<UiKey, PluralForms>> = {};
  const ui: Record<string, string> = {};
  for (const [k, t] of Object.entries(src.ui) as [UiKey, UiText | undefined][]) {
    if (t === undefined) continue;
    if (isPlural(t)) {
      plural[k] = pluralFor(t, gender);
      ui[k] = plural[k].other;
    } else ui[k] = forGender(t, gender);
  }
  return { ...src, gender, ui, plural, gloss: resolveAll(src.gloss, gender) };
}

const cache = new Map<string, HelpLanguage>();

/** Does the help language change "I am sick" / "you are new" for a woman or a man? */
export function hasGender(code: UiCode | null | undefined): boolean {
  return Boolean(code && GENDERED_LANGS.includes(code as LangCode));
}

/**
 * The help language, resolved for the learner's gender. Undefined for English only, and also
 * while its pack has not loaded yet (call ensureLanguage first; the app shows its splash meanwhile).
 */
export function getHelpLanguage(code: UiCode | null | undefined, gender?: Gender | null): HelpLanguage | undefined {
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
  topicsUnit: 'topicsUnitOne',
  bramDueN: 'bramDueOne',
  backupFileN: 'backupFileOne',
  backupPhoneN: 'backupPhoneOne',
};

/** Intl.PluralRules per language (Dari follows Persian; an unknown code falls back to the device's language). */
const PLURAL_LOCALE: Partial<Record<UiCode, string>> = { prs: 'fa' };
const pluralRules = new Map<string, Intl.PluralRules>();

/** The CLDR plural category of `n` in a language: "one", "few", "many", … (English: "en"). */
export function pluralCategory(code: UiCode | 'en', n: number): PluralCategory {
  const locale = (code !== 'en' && PLURAL_LOCALE[code]) || code;
  let rules = pluralRules.get(locale);
  if (!rules) {
    // Very old WebViews have no Intl.PluralRules: 1 and the rest ("other" is always there).
    try {
      rules = new Intl.PluralRules(locale);
    } catch {
      return n === 1 ? 'one' : 'other';
    }
    pluralRules.set(locale, rules);
  }
  return rules.select(n) as PluralCategory;
}

/**
 * A UI string for a count of `n`. The help language picks its plural form when it has a plural
 * object for the key (Polish 1 dzień, 2 dni, 5 dni; Arabic zero/one/two/few/many/other); without
 * one, and in English, the old pair: the singular "XxxOne" key when n is 1, else the key itself.
 */
export function uiCount(key: UiKey, n: number, lang?: HelpLanguage): Bilingual {
  const pair = n === 1 ? SINGULAR[key] ?? key : key;
  const forms = lang?.plural?.[key];
  const help = forms ? forms[pluralCategory(lang!.code, n)] ?? forms.other : lang?.ui[pair];
  return { en: uiEn[pair], help, lang };
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
  return text.help && text.lang ? langTag(text.lang.code) : 'en';
}
