import type { CultureTranslation } from '../culture/types';

/**
 * "Er is iets veranderd" in French (src/content/updates.ts, Notice): the card's three texts, and
 * under `gloss` each notice of UPDATES as `notice.<id>` (src/lib/notice.ts noticeGlossId).
 * tests/notice.test.ts checks that every notice is here, in all 13 languages.
 */
const t: CultureTranslation = {
  ui: {
    noticeTitle: 'Quelque chose a changé', // nieuw, nalezen // nagelezen AI 28 nov
    noticeMore: 'Lire la suite', // nieuw, nalezen // nagelezen AI 28 nov
    noticeOk: 'D’accord', // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Nog geen meldingen.
  },
};
export default t;
