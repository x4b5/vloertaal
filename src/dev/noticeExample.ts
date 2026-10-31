import type { Update } from '../content/updates';
import type { HelpLanguage, LangCode, LangText } from '../i18n/types';
import { forGender } from '../i18n/types';
import { noticeGlossId } from '../lib/notice';

/**
 * A made-up notice, ONLY for tests and screenshots (/?shot=melding, tests/notice.test.ts): it is
 * not in UPDATES and never shows in the app. Its translations are here too (a real notice's go in
 * src/i18n/notices/<lang>.ts), so the packs carry no example text.
 */
export const EXAMPLE_NOTICE_UPDATE: Update = {
  date: '2026-10-30',
  items: ['VOORBEELD: het minimumloon gaat omhoog.'],
  notice: {
    id: 'voorbeeld-minimumloon',
    country: 'nl',
    track: 'both',
    nl: 'Het minimumloon gaat omhoog. Kijk op je loonstrook of je genoeg krijgt.',
    en: 'The minimum wage is going up. Check your payslip to see if you get enough.',
  },
};

/** The example's text in the 13 help languages. */
export const EXAMPLE_NOTICE_TEXTS: Record<LangCode, LangText> = {
  ar: {
    m: 'الحد الأدنى للأجور يرتفع. تحقّق في قسيمة راتبك من أنك تحصل على ما يكفي.',
    f: 'الحد الأدنى للأجور يرتفع. تحقّقي في قسيمة راتبكِ من أنكِ تحصلين على ما يكفي.',
    x: 'الحد الأدنى للأجور يرتفع. من المهم التحقق في قسيمة الراتب من الحصول على ما يكفي.',
  },
  ti: {
    m: 'ዝተሓተ ደሞዝ ይውስኽ ኣሎ። ኣብ ወረቐት ደሞዝካ እኹል ከም እትረክብ ርአ።',
    f: 'ዝተሓተ ደሞዝ ይውስኽ ኣሎ። ኣብ ወረቐት ደሞዝኪ እኹል ከም እትረኽቢ ርኣዪ።',
    x: 'ዝተሓተ ደሞዝ ይውስኽ ኣሎ። ኣብ ወረቐት ደሞዝኩም እኹል ከም እትረኽቡ ርኣዩ።',
  },
  fa: 'حداقل دستمزد بالا می‌رود. در فیش حقوقی خود ببینید که به اندازهٔ کافی می‌گیرید.',
  prs: 'حد اقل معاش بلند می‌رود. در ورق معاش خود ببینید که به اندازهٔ کافی می‌گیرید.',
  uk: 'Мінімальна зарплата зростає. Перевір у розрахунковому листку, чи ти отримуєш достатньо.',
  tr: 'Asgari ücret artıyor. Bordronda yeterince alıp almadığına bak.',
  pl: 'Płaca minimalna rośnie. Sprawdź na pasku wypłaty, czy dostajesz wystarczająco.',
  ro: 'Salariul minim crește. Verifică pe fluturașul de salariu dacă primești destul.',
  bg: 'Минималната заплата се увеличава. Провери във фиша за заплата дали получаваш достатъчно.',
  es: 'El salario mínimo sube. Mira en tu nómina si recibes lo suficiente.',
  pt: 'O salário mínimo vai subir. Vê no teu recibo de vencimento se recebes o suficiente.',
  fr: 'Le salaire minimum augmente. Vérifie sur ta fiche de paie que tu reçois assez.',
  de: 'Der Mindestlohn steigt. Schau auf deiner Lohnabrechnung, ob du genug bekommst.',
};

/** A help language with the example's translation in it (as a real notice's would be, from its pack). */
export function withExampleNotice(lang: HelpLanguage | undefined): HelpLanguage | undefined {
  if (!lang || lang.code === 'nl') return lang;
  const t = EXAMPLE_NOTICE_TEXTS[lang.code];
  return { ...lang, gloss: { ...lang.gloss, [noticeGlossId(EXAMPLE_NOTICE_UPDATE.notice!.id)]: forGender(t, lang.gender) } };
}
