/**
 * The ids of the Belgian language track (docs/taal-belgie.md, "De id's"). A Belgian unit, lesson,
 * word, sentence, chat line or tip has the id of its Dutch twin with "be." in front:
 *
 *   unit      u.society        → be.u.society
 *   lesson    l.council        → be.l.council
 *   word      w.stemmen        → be.w.stemmen
 *   tip       c.council        → be.c.council (and be.c.council.b, .p, .s, .o1 …)
 *
 * So a Belgian item never clashes with a Dutch one: progress, today's review, the certificates,
 * the recordings and the translations keep the two apart. The work rules use "r.be." (they start
 * with "r."): the two never clash either. Kept free of imports.
 */
export const TAAL_BE_PREFIX = 'be.';

/** Is this an id of the Belgian language track? */
export const isTaalBeId = (id: string): boolean => id.startsWith(TAAL_BE_PREFIX);

/** The Belgian id of a Dutch language-track id ("w.loon" → "be.w.loon"); a Belgian id stays as it is. */
export const taalBeId = (id: string): string => (isTaalBeId(id) ? id : `${TAAL_BE_PREFIX}${id}`);

/** The Dutch id of a Belgian one ("be.l.council" → "l.council"); any other id stays as it is. */
export const taalNlId = (id: string): string => (isTaalBeId(id) ? id.slice(TAAL_BE_PREFIX.length) : id);

/**
 * Belgian words that keep the drawing of their Dutch twin (BeLine `picture: 'same'`: "de refter"
 * is the same room as "de kantine"). Filled by src/content/taalBe/index.ts; read by WordPicture.
 */
const samePicture = new Map<string, string>([
  // Words of the Belgian units themselves (be.u.society) that show the same thing as a Dutch
  // word's drawing: the police officer, the ID card with a photo. ("stemmen" keeps its own id:
  // src/pictures/group32.tsx gives it the ballot box of w.stemmen.)
  ['be.w.wijkagent', 'w.agent'],
  ['be.w.identiteitskaart', 'w.identiteitsbewijs'],
]);

export function setSamePicture(beWordId: string, nlWordId: string): void {
  samePicture.set(beWordId, nlWordId);
}

/** The picture id for a word: its own, or the Dutch twin's when the Belgian word keeps that drawing. */
export const pictureIdOf = (id: string): string => samePicture.get(id) ?? id;
