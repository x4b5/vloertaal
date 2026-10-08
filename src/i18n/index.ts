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
  gloss: { ...l.gloss, ...culture[l.code].gloss, ...work[l.code].gloss, ...about[l.code].gloss },
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
