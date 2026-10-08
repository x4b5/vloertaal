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
import type { CultureTranslation } from './culture/types';
import { mixLessonId, relatedUnits } from '../content/review';
import type { HelpLanguage, LangCode, UiKey } from './types';
import { uiEn } from './types';

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

/** Workplace-culture, work-and-rights and About texts live in their own files (src/i18n/culture, src/i18n/work, src/i18n/about); merge them in. */
const withCulture = (l: HelpLanguage): HelpLanguage => ({
  ...l,
  ui: { ...l.ui, ...culture[l.code].ui, ...work[l.code].ui, ...about[l.code].ui },
  gloss: {
    ...l.gloss, ...culture[l.code].gloss, ...work[l.code].gloss, ...about[l.code].gloss,
    // Every unit's "Mixed review" lesson shares one title.
    ...Object.fromEntries(Object.keys(relatedUnits).map((id) => [mixLessonId(id), l.ui.mixLesson ?? uiEn.mixLesson])),
  },
});

export const helpLanguages: HelpLanguage[] = [ar, ti, fa, prs, uk, tr, pl, ro, bg].map(withCulture);

export function getHelpLanguage(code: LangCode | null | undefined): HelpLanguage | undefined {
  return helpLanguages.find((l) => l.code === code);
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
