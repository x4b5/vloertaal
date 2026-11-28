import type { CultureTranslation } from '../culture/types';

/**
 * "Er is iets veranderd" in Polish (src/content/updates.ts, Notice): the card's three texts, and
 * under `gloss` each notice of UPDATES as `notice.<id>` (src/lib/notice.ts noticeGlossId).
 * tests/notice.test.ts checks that every notice is here, in all 13 languages.
 */
const t: CultureTranslation = {
  ui: {
    noticeTitle: 'Coś się zmieniło', // nieuw, nalezen // nagelezen AI 28 nov
    noticeMore: 'Czytaj więcej', // nieuw, nalezen // nagelezen AI 28 nov
    noticeOk: 'OK', // nieuw, nalezen // nagelezen AI 28 nov
  },
  gloss: {
    // Nog geen meldingen.
  },
};
export default t;
