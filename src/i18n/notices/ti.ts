import type { CultureTranslation } from '../culture/types';

/**
 * "Er is iets veranderd" in Tigrinya (src/content/updates.ts, Notice): the card's three texts, and
 * under `gloss` each notice of UPDATES as `notice.<id>` (src/lib/notice.ts noticeGlossId).
 * tests/notice.test.ts checks that every notice is here, in all 13 languages.
 */
const t: CultureTranslation = {
  ui: {
    noticeTitle: 'ገለ ነገር ተቐይሩ ኣሎ', // nieuw, nalezen
    noticeMore: { m: 'ተወሳኺ ኣንብብ', f: 'ተወሳኺ ኣንብቢ', x: 'ተወሳኺ ኣንብቡ' }, // nieuw, nalezen
    noticeOk: 'ሕራይ', // nieuw, nalezen
  },
  gloss: {
    // Nog geen meldingen.
  },
};
export default t;
