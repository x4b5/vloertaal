/**
 * The ids of the Belgian work rules (docs/werkregels-belgie.md, "De id's"). A Belgian unit, lesson
 * or step has the id of its Dutch twin with "r.be." in place of "r.":
 *
 *   unit    r.loon            → r.be.loon
 *   lesson  r.l.loon.2        → r.be.l.loon.2
 *   step    r.l.loon.2.ps1    → r.be.l.loon.2.ps1
 *
 * So a Belgian id still starts with "r." (src/lib/track.ts trackOfId: the work-rules track), never
 * clashes with a Dutch one (progress, certificates, today's review and zegHet keep the two apart),
 * and maps back to its Dutch twin in one step (themes, sectors, "Wat kun je nu?", coach links).
 * Kept free of imports: the route, the themes and the sectors use it.
 */
export const BE_PREFIX = 'r.be.';

/** Is this a Belgian work-rules id (a unit, lesson or step)? */
export const isBeId = (id: string): boolean => id.startsWith(BE_PREFIX);

/** The Belgian id of a Dutch work-rules id ("r.loon" → "r.be.loon"); a Belgian id stays as it is. */
export const beId = (id: string): string => (isBeId(id) || !id.startsWith('r.') ? id : `${BE_PREFIX}${id.slice(2)}`);

/**
 * The Dutch id of a Belgian one ("r.be.l.loon.2" → "r.l.loon.2"); any other id stays as it is.
 * The Belgian language track's ids too ("be.u.society" → "u.society", src/content/taalBe/ids.ts):
 * so the themes, the sectors and the route find the Dutch twin of either track the same way.
 */
export const nlId = (id: string): string => (isBeId(id) ? `r.${id.slice(BE_PREFIX.length)}` : id.startsWith('be.') ? id.slice(3) : id);
