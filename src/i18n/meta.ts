import type { HelpLanguage, LangCode, UiCode, UiKey } from './types';

/**
 * What the app needs about each help language before its pack is loaded (the packs are loaded on
 * demand, src/i18n/index.ts): the language list and the "Polski?" guess page. Picker order: the
 * largest newcomer groups first, then labour-migration languages.
 *
 * `ui` holds the strings of the guess page (the question, its two answers and what the app is), and
 * the start screen's line when a file did not load (src/components/Splash.tsx), in the default (no
 * gender chosen) form. They are
 * copies of the packs' own strings; tests/i18n.test.ts checks that they stay the same.
 */
export interface LangMeta<C extends UiCode = LangCode> {
  code: C;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  gendered: boolean;
  reviewed: boolean;
  ui: Pick<Record<UiKey, string>, 'chooseLanguage' | 'langGuessYes' | 'langGuessOther' | 'appTagline' | 'loadFailed' | 'retry' | 'routeTitle' | 'routeLearn' | 'routeRules'>;
  /**
   * A country flag beside the name in the language list, only where a flag is not sensitive (the
   * owner's choice). Left out ON PURPOSE, please keep it that way:
   *  - ar: Arabic is spoken in more than 20 countries; no one flag is "Arabic";
   *  - ti: an Eritrean (regime) flag is painful for refugees, and Tigray's is sensitive too;
   *  - fa: the Iranian flag stands for the regime many fled;
   *  - prs: the Afghan flag is contested (the Taliban flag or the old tricolour);
   *  - es, pt, fr: spoken in many countries (Spain and Latin America; Portugal, Brazil and
   *    Cape Verde; France, Belgium and much of Africa); no one flag is the language;
   *  - de: the same reason in a smaller way (Germany, Austria, Switzerland);
   *  - English (no meta here) is a bridge language, not a country.
   * Without a flag the list shows `sample` instead: a small tile with a few letters of the script.
   */
  flag?: string;
  /** Letters of the language's script on a calm tile, where there is no flag (same size). */
  sample?: string;
}

export const languageMeta: readonly LangMeta[] = [
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', gendered: true, reviewed: false, ui: { chooseLanguage: 'اختيار لغة المساعدة', langGuessYes: 'نعم', langGuessOther: 'لغة أخرى', appTagline: 'الهولندية لمكان العمل', loadFailed: 'لم يتم التحميل. هل الإنترنت متصل؟', retry: 'إعادة المحاولة', routeTitle: 'مسار التعلّم', routeLearn: 'تعلّم الهولندية للعمل، مع مساعدة بلغتك', routeRules: 'أتكلّم الهولندية: كيف يسير العمل في هولندا وبلجيكا' }, sample: 'ع' },
  { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'ቋንቋ ሓገዝኩም ምረጹ', langGuessYes: 'እወ', langGuessOther: 'ካልእ ቋንቋ', appTagline: 'ሆላንድኛ ንቦታ ስራሕ', loadFailed: 'ኣይተጻዕነን። ኢንተርነት ኣሎ ድዩ?', retry: 'ዳግማይ ምፍታን', routeTitle: 'መንገዲ ትምህርቲ', routeLearn: 'ንስራሕ ሆላንድኛ ምምሃር፡ ምስ ቋንቋ ሓገዝ', routeRules: 'ሆላንድኛ እዛረብ እየ፡ ስራሕ ኣብ ሆላንድን ቤልጅዩምን ከመይ ይኸይድ' }, sample: 'ሀ' },
  { code: 'fa', name: 'Persian (Iran)', nativeName: 'فارسی', dir: 'rtl', gendered: false, reviewed: false, ui: { chooseLanguage: 'زبان خود را انتخاب کنید', langGuessYes: 'بله', langGuessOther: 'زبان دیگر', appTagline: 'هلندی برای محیط کار', loadFailed: 'بارگیری نشد. اینترنت وصل است؟', retry: 'دوباره امتحان کنید', routeTitle: 'چه می‌خواهید یاد بگیرید؟', routeLearn: 'یادگیری هلندی برای کار، با کمک به زبان خودتان', routeRules: 'هلندی بلدم: کار در هلند و بلژیک چطور است' }, sample: 'فا' },
  { code: 'prs', name: 'Dari (Afghanistan)', nativeName: 'دری', dir: 'rtl', gendered: false, reviewed: false, ui: { chooseLanguage: 'زبان کمکی خود را انتخاب کنید', langGuessYes: 'بلی', langGuessOther: 'زبان دیگر', appTagline: 'هالندی برای جای کار', loadFailed: 'بارگیری نشد. انترنت وصل است؟', retry: 'دوباره کوشش کنید', routeTitle: 'چه می‌خواهید یاد بگیرید؟', routeLearn: 'آموختن هالندی برای کار، با کمک به زبان خودتان', routeRules: 'هالندی را بلد هستم: کار در هالند و بلجیم چطور است' }, sample: 'دری' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Обери мову підказок', langGuessYes: 'Так', langGuessOther: 'Інша мова', appTagline: 'Нідерландська для роботи', loadFailed: 'Не завантажилося. Чи є інтернет?', retry: 'Спробувати ще раз', routeTitle: 'Що ти хочеш вивчати?', routeLearn: 'Вивчати нідерландську для роботи, з підказками твоєю мовою', routeRules: 'Я вже говорю нідерландською: як працюють у Нідерландах і Бельгії' }, flag: '🇺🇦' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', gendered: false, reviewed: false, ui: { chooseLanguage: 'Yardım dilini seç', langGuessYes: 'Evet', langGuessOther: 'Başka dil', appTagline: 'İş yeri için Hollandaca', loadFailed: 'Yüklenmedi. İnternet var mı?', retry: 'Tekrar dene', routeTitle: 'Ne öğrenmek istiyorsun?', routeLearn: 'İş için Hollandaca öğren, kendi dilinde yardımla', routeRules: 'Hollandaca biliyorum: Hollanda ve Belçika’da iş nasıl yürür' }, flag: '🇹🇷' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Wybierz język pomocy', langGuessYes: 'Tak', langGuessOther: 'Inny język', appTagline: 'Niderlandzki do pracy', loadFailed: 'Nie załadowało się. Czy jest internet?', retry: 'Spróbuj ponownie', routeTitle: 'Czego chcesz się uczyć?', routeLearn: 'Nauka niderlandzkiego do pracy, z pomocą w twoim języku', routeRules: 'Mówię już po niderlandzku: jak wygląda praca w Holandii i Belgii' }, flag: '🇵🇱' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Alege limba de ajutor', langGuessYes: 'Da', langGuessOther: 'Altă limbă', appTagline: 'Olandeză pentru locul de muncă', loadFailed: 'Nu s-a încărcat. Este internet?', retry: 'Încearcă din nou', routeTitle: 'Ce vrei să înveți?', routeLearn: 'Învață olandeză pentru muncă, cu ajutor în limba ta', routeRules: 'Vorbesc deja olandeză: cum se lucrează în Țările de Jos și Belgia' }, flag: '🇷🇴' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Избери език за помощ', langGuessYes: 'Да', langGuessOther: 'Друг език', appTagline: 'Нидерландски за работното място', loadFailed: 'Не се зареди. Има ли интернет?', retry: 'Опитай отново', routeTitle: 'Какво искаш да учиш?', routeLearn: 'Нидерландски за работа, с помощ на твоя език', routeRules: 'Вече говоря нидерландски: как се работи в Нидерландия и Белгия' }, flag: '🇧🇬' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Elige tu idioma de ayuda', langGuessYes: 'Sí', langGuessOther: 'Otro idioma', appTagline: 'Neerlandés para el trabajo', loadFailed: 'No se ha cargado. ¿Tienes internet?', retry: 'Intentar de nuevo', routeTitle: '¿Qué quieres aprender?', routeLearn: 'Aprender neerlandés para el trabajo, con ayuda en tu idioma', routeRules: 'Ya hablo neerlandés: cómo funciona el trabajo en los Países Bajos y Bélgica' }, sample: 'Ñ' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Escolhe a tua língua de ajuda', langGuessYes: 'Sim', langGuessOther: 'Outra língua', appTagline: 'Neerlandês para o trabalho', loadFailed: 'Não carregou. Tens internet?', retry: 'Tentar de novo', routeTitle: 'O que queres aprender?', routeLearn: 'Aprender neerlandês para o trabalho, com ajuda na tua língua', routeRules: 'Já falo neerlandês: como funciona o trabalho nos Países Baixos e na Bélgica' }, sample: 'Ã' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', gendered: true, reviewed: false, ui: { chooseLanguage: 'Choisis ta langue d’aide', langGuessYes: 'Oui', langGuessOther: 'Autre langue', appTagline: 'Le néerlandais pour le travail', loadFailed: 'Pas chargé. Tu as internet ?', retry: 'Réessayer', routeTitle: 'Qu’est-ce que tu veux apprendre ?', routeLearn: 'Apprendre le néerlandais pour le travail, avec de l’aide dans ta langue', routeRules: 'Je parle déjà néerlandais : comment se passe le travail aux Pays-Bas et en Belgique' }, sample: 'Ç' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', gendered: false, reviewed: false, ui: { chooseLanguage: 'Wähle deine Hilfssprache', langGuessYes: 'Ja', langGuessOther: 'Andere Sprache', appTagline: 'Niederländisch für die Arbeit', loadFailed: 'Nicht geladen. Hast du Internet?', retry: 'Erneut versuchen', routeTitle: 'Was möchtest du lernen?', routeLearn: 'Niederländisch für die Arbeit lernen, mit Hilfe in deiner Sprache', routeRules: 'Ich spreche schon Niederländisch: wie Arbeit in den Niederlanden und Belgien läuft' }, sample: 'ß' },
];

export const LANG_CODES: readonly LangCode[] = languageMeta.map((l) => l.code);

/**
 * "Nederlands – ik spreek al Nederlands": the work-rules track (src/lib/track.ts). Not a help
 * language, so not in languageMeta (or LANG_CODES): the language list shows it as its own option,
 * only while RULES_TRACK is on, and the phone's languages never guess it (many learners have
 * a Dutch phone).
 */
export const NL_META: LangMeta<'nl'> = {
  code: 'nl',
  name: 'ik spreek al Nederlands',
  nativeName: 'Nederlands',
  dir: 'ltr',
  gendered: false,
  reviewed: true,
  ui: { chooseLanguage: 'Kies je taal', langGuessYes: 'Ja', langGuessOther: 'Andere taal', appTagline: 'Werken in Nederland: zo gaat het', loadFailed: 'Niet geladen. Is er internet?', retry: 'Opnieuw proberen', routeTitle: 'Wat wil je leren?', routeLearn: 'Nederlands leren voor je werk, met hulp in je eigen taal', routeRules: 'Ik spreek al Nederlands: hoe werken in Nederland en België gaat' },
  flag: '🇳🇱',
};

/** Under "Nederlands – ik spreek al Nederlands" in the language list: what that track teaches (not
 *  the language, the work: src/content/regels), so a learner who speaks Dutch knows to go there. */
export const NL_MORE = 'Leer meer over werk: regels, rechten en geld.';

/** "English only" in the language list: a bridge language, not a country, so no flag (see LangMeta.flag). */
export const ENGLISH_SAMPLE = 'Aa';

/** What the language list shows beside a name: a flag, or a tile with letters of the script. null = English. */
export function languageMark(code: UiCode | null): { flag: string } | { sample: string } {
  if (code === null) return { sample: ENGLISH_SAMPLE };
  const m = langMeta(code);
  return m?.flag ? { flag: m.flag } : { sample: m?.sample ?? '' };
}

export function langMeta(code: LangCode | null | undefined): LangMeta | undefined;
export function langMeta(code: UiCode | null | undefined): LangMeta<UiCode> | undefined;
export function langMeta(code: UiCode | null | undefined): LangMeta<UiCode> | undefined {
  if (code === 'nl') return NL_META;
  return languageMeta.find((l) => l.code === code);
}

/** A stand-in help language with only the guess page's strings (before the pack has loaded). */
export function metaLanguage(meta: LangMeta<UiCode>): HelpLanguage {
  return { code: meta.code, name: meta.name, nativeName: meta.nativeName, dir: meta.dir, reviewed: meta.reviewed, ui: { ...meta.ui }, gloss: {} };
}

/** A help language's code as a `lang` attribute: Dari ("prs") as "fa-AF", which phones' voices
 *  and screen readers know (as for its dates and plurals). */
export function langTag(code: string): string {
  return code === 'prs' ? 'fa-AF' : code;
}
