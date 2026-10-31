import type { CultureTranslation } from '../culture/types';

/**
 * "Er is iets veranderd" in Romanian (src/content/updates.ts, Notice): the card's three texts, and
 * under `gloss` each notice of UPDATES as `notice.<id>` (src/lib/notice.ts noticeGlossId).
 * tests/notice.test.ts checks that every notice is here, in all 13 languages.
 */
const t: CultureTranslation = {
  ui: {
    noticeTitle: 'S-a schimbat ceva', // nieuw, nalezen
    noticeMore: 'Citește mai mult', // nieuw, nalezen
    noticeOk: 'Bine', // nieuw, nalezen
  },
  gloss: {
    // Nog geen meldingen.
  },
};
export default t;
