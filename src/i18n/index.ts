import ar from './ar';
import bg from './bg';
import fa from './fa';
import pl from './pl';
import prs from './prs';
import ro from './ro';
import ti from './ti';
import tr from './tr';
import uk from './uk';
import type { HelpLanguage, LangCode, UiKey } from './types';
import { uiEn } from './types';

/** Picker order: the largest newcomer groups first, then labour-migration languages. */
export const helpLanguages: HelpLanguage[] = [ar, ti, fa, prs, uk, tr, pl, ro, bg];

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
