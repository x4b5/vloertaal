import ar from './ar';
import bg from './bg';
import fa from './fa';
import pl from './pl';
import prs from './prs';
import ro from './ro';
import ti from './ti';
import tr from './tr';
import uk from './uk';
import cAr from './culture/ar';
import cBg from './culture/bg';
import cFa from './culture/fa';
import cPl from './culture/pl';
import cPrs from './culture/prs';
import cRo from './culture/ro';
import cTi from './culture/ti';
import cTr from './culture/tr';
import cUk from './culture/uk';
import aAr from './about/ar';
import aBg from './about/bg';
import aFa from './about/fa';
import aPl from './about/pl';
import aPrs from './about/prs';
import aRo from './about/ro';
import aTi from './about/ti';
import aTr from './about/tr';
import aUk from './about/uk';
import wAr from './work/ar';
import wBg from './work/bg';
import wFa from './work/fa';
import wPl from './work/pl';
import wPrs from './work/prs';
import wRo from './work/ro';
import wTi from './work/ti';
import wTr from './work/tr';
import wUk from './work/uk';
import lAr from './learn/ar';
import lBg from './learn/bg';
import lFa from './learn/fa';
import lPl from './learn/pl';
import lPrs from './learn/prs';
import lRo from './learn/ro';
import lTi from './learn/ti';
import lTr from './learn/tr';
import lUk from './learn/uk';
import type { CultureTranslation } from './culture/types';
import { mixLessonId, relatedUnits } from '../content/review';
import type { Gender, HelpLanguage, HelpLanguageSource, LangCode, LangText, UiKey } from './types';
import { forGender, GENDERED_LANGS, uiEn } from './types';

/** Picker order: the largest newcomer groups first, then labour-migration languages. */
const culture: Record<LangCode, CultureTranslation> = {
  ar: cAr, bg: cBg, fa: cFa, pl: cPl, prs: cPrs, ro: cRo, ti: cTi, tr: cTr, uk: cUk,
};

const about: Record<LangCode, CultureTranslation> = {
  ar: aAr, bg: aBg, fa: aFa, pl: aPl, prs: aPrs, ro: aRo, ti: aTi, tr: aTr, uk: aUk,
};

/** Work-and-rights units (src/content/work.ts). TODO: still English placeholders. */
const work: Record<LangCode, CultureTranslation> = {
  ar: wAr, bg: wBg, fa: wFa, pl: wPl, prs: wPrs, ro: wRo, ti: wTi, tr: wTr, uk: wUk,
};

/** Learning mechanics: speaking without a microphone, picture choice, build feedback, why a chat reply fits. */
const learn: Record<LangCode, CultureTranslation> = {
  ar: lAr, bg: lBg, fa: lFa, pl: lPl, prs: lPrs, ro: lRo, ti: lTi, tr: lTr, uk: lUk,
};

/** Workplace-culture, work-and-rights and About texts live in their own files (src/i18n/culture, src/i18n/work, src/i18n/about); merge them in. */
const withCulture = (l: HelpLanguageSource): HelpLanguageSource => ({
  ...l,
  ui: { ...l.ui, ...culture[l.code].ui, ...work[l.code].ui, ...about[l.code].ui, ...learn[l.code].ui },
  gloss: {
    ...l.gloss, ...culture[l.code].gloss, ...work[l.code].gloss, ...about[l.code].gloss, ...learn[l.code].gloss,
    // Every unit's "Mixed review" lesson shares one title.
    ...Object.fromEntries(Object.keys(relatedUnits).map((id) => [mixLessonId(id), l.ui.mixLesson ?? uiEn.mixLesson])),
  },
});

/** Every help language as written, texts by gender where they differ (checks and tests). */
export const helpLanguageSources: HelpLanguageSource[] = [ar, ti, fa, prs, uk, tr, pl, ro, bg].map(withCulture);

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

/** The help languages with the default form (no gender chosen): the language picker and checks. */
export const helpLanguages: HelpLanguage[] = helpLanguageSources.map((src) => getHelpLanguage(src.code)!);

/** Does the help language change "I am sick" / "you are new" for a woman or a man? */
export function hasGender(code: LangCode | null | undefined): boolean {
  return Boolean(code && GENDERED_LANGS.includes(code));
}

export function getHelpLanguage(code: LangCode | null | undefined, gender?: Gender | null): HelpLanguage | undefined {
  const src = helpLanguageSources.find((l) => l.code === code);
  if (!src) return undefined;
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
