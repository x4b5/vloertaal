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
import type { CultureTranslation } from './culture/types';
import type { HelpLanguage, LangCode, UiKey } from './types';
import { uiEn } from './types';

/** Picker order: the largest newcomer groups first, then labour-migration languages. */
const culture: Record<LangCode, CultureTranslation> = {
  ar: cAr, bg: cBg, fa: cFa, pl: cPl, prs: cPrs, ro: cRo, ti: cTi, tr: cTr, uk: cUk,
};

/** Workplace-culture texts live in their own files (src/i18n/culture); merge them in. */
const withCulture = (l: HelpLanguage): HelpLanguage => ({
  ...l,
  ui: { ...l.ui, ...culture[l.code].ui },
  gloss: { ...l.gloss, ...culture[l.code].gloss },
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
