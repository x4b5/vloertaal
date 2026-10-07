/**
 * Display helpers for Dutch words. Dutch glues words together (veiligheids|schoenen), and on a
 * 320–360 px phone such a compound in a big font is wider than its bubble. Browsers only
 * hyphenate Dutch where they ship a dictionary, so the course's long compounds get a soft
 * hyphen at their seam; anything else falls back to `overflow-wrap: anywhere` in CSS.
 * Only for showing text: speech and answer checking keep using the plain string.
 */
const SEAMS: [whole: string, at: number][] = [
  ['veiligheidsschoenen', 11],
  ['veiligheidsbril', 11],
  ['leidinggevende', 7],
  ['handschoenen', 4],
  ['goedemorgen', 5],
  ['nooduitgang', 4],
  ['werkkleding', 4],
  ['samenwerken', 5],
  ['overwerken', 4],
];

const SHY = '­';

/** The text with a soft hyphen in the seam of every long compound it contains. */
export function breakable(nl: string): string {
  return nl.replace(/\p{L}{10,}/gu, (token) => {
    const seam = SEAMS.find(([whole]) => whole === token.toLowerCase());
    return seam ? token.slice(0, seam[1]) + SHY + token.slice(seam[1]) : token;
  });
}

/** Size class for a Dutch word shown big, by its longest word: len-m from 10 letters, len-l from 14. */
export function wordSize(nl: string): string {
  const longest = Math.max(...nl.split(/\s+/).map((t) => t.length));
  return longest > 13 ? 'len-l' : longest > 9 ? 'len-m' : '';
}
