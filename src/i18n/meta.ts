import type { HelpLanguage, LangCode, UiKey } from './types';

/**
 * What the app needs about each help language before its pack is loaded (the packs are loaded on
 * demand, src/i18n/index.ts): the language list and the "Polski?" guess page. Picker order: the
 * largest newcomer groups first, then labour-migration languages.
 *
 * `ui` holds the strings of the guess page (the question, its two answers and what the app is), in
 * the default (no gender chosen) form. They are
 * copies of the packs' own strings; tests/i18n.test.ts checks that they stay the same.
 */
export interface LangMeta {
  code: LangCode;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  gendered: boolean;
  reviewed: boolean;
  ui: Pick<Record<UiKey, string>, 'chooseLanguage' | 'langGuessYes' | 'langGuessOther' | 'appTagline'>;
}

export const languageMeta: readonly LangMeta[] = [
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', gendered: true, reviewed: false, ui: { chooseLanguage: 'اختر لغة المساعدة', langGuessYes: 'نعم', langGuessOther: 'لغة أخرى', appTagline: 'الهولندية لمكان العمل' } },
  { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'ቋንቋ ሓገዝካ ምረጽ', langGuessYes: 'እወ', langGuessOther: 'ካልእ ቋንቋ', appTagline: 'ሆላንድኛ ንቦታ ስራሕ' } },
  { code: 'fa', name: 'Persian (Iran)', nativeName: 'فارسی', dir: 'rtl', gendered: false, reviewed: false, ui: { chooseLanguage: 'زبان کمکی خود را انتخاب کنید', langGuessYes: 'بله', langGuessOther: 'زبان دیگر', appTagline: 'هلندی برای محیط کار' } },
  { code: 'prs', name: 'Dari (Afghanistan)', nativeName: 'دری', dir: 'rtl', gendered: false, reviewed: false, ui: { chooseLanguage: 'زبان کمکی خود را انتخاب کنید', langGuessYes: 'بلی', langGuessOther: 'زبان دیگر', appTagline: 'هالندی برای جای کار' } },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Обери мову підказок', langGuessYes: 'Так', langGuessOther: 'Інша мова', appTagline: 'Нідерландська для роботи' } },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', gendered: false, reviewed: false, ui: { chooseLanguage: 'Yardım dilini seç', langGuessYes: 'Evet', langGuessOther: 'Başka dil', appTagline: 'İş yeri için Hollandaca' } },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Wybierz język pomocy', langGuessYes: 'Tak', langGuessOther: 'Inny język', appTagline: 'Niderlandzki do pracy' } },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Alege limba de ajutor', langGuessYes: 'Da', langGuessOther: 'Altă limbă', appTagline: 'Olandeză pentru locul de muncă' } },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Избери език за помощ', langGuessYes: 'Да', langGuessOther: 'Друг език', appTagline: 'Нидерландски за работното място' } },
];

export const LANG_CODES: readonly LangCode[] = languageMeta.map((l) => l.code);

export function langMeta(code: LangCode | null | undefined): LangMeta | undefined {
  return languageMeta.find((l) => l.code === code);
}

/** A stand-in help language with only the guess page's strings (before the pack has loaded). */
export function metaLanguage(meta: LangMeta): HelpLanguage {
  return { code: meta.code, name: meta.name, nativeName: meta.nativeName, dir: meta.dir, reviewed: meta.reviewed, ui: { ...meta.ui }, gloss: {} };
}
