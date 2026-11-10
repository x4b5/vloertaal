import type { KlankId } from '../content/klankMond';

/**
 * Which hard Dutch sound a word has, for the small mouth on its word card (the owner's request,
 * 10 November 2026): a tap opens the card of that sound ("Hoe zeg je het?", src/components/
 * KlankCard.tsx), with the mouth that shows how to make it. Only the sounds many learners find
 * hard and that have a card: ui, eu, uu, ij/ei, ou/au, oe. One per word (the first by HARD's
 * order), so the card keeps one thing to tap. Most words get none.
 *
 * Read from the spelling, left to right, the longest letter group first ("moeilijk" is m-oei-l-ijk,
 * not m-o-ei-…): Dutch spelling says a vowel quite reliably, except in loanwords. Those are in
 * SPELLED_OTHERWISE (the sound they really have, or none).
 */
export const HARD: readonly KlankId[] = ['ui', 'eu', 'uu', 'ij', 'ou', 'oe'];

/** Letter groups, longest first, and the hard sound each one is (null: a vowel group without one). */
const GROUPS: readonly [string, KlankId | null][] = [
  ['eeuw', null], ['ieuw', null],
  ['ouw', 'ou'], ['auw', 'ou'], ['oei', 'oe'], ['ooi', null], ['aai', null], ['uw', null],
  ['ui', 'ui'], ['eu', 'eu'], ['uu', 'uu'], ['ij', 'ij'], ['ei', 'ij'], ['ou', 'ou'], ['au', 'ou'], ['oe', 'oe'],
  ['aa', null], ['ee', null], ['oo', null], ['ie', null],
];

/**
 * Parts of words whose spelling says another sound (loanwords, also inside a compound such as
 * "vluchtroute"): the sound they have, or null for none. French ou is oe (route, douche), eau is
 * oo (bureau, niveau); "account" and "automatisch" are said in more than one way, so no card.
 */
export const SPELLED_OTHERWISE: readonly [part: string, sound: KlankId | null][] = [
  ['route', 'oe'],
  ['douche', 'oe'],
  ['journa', 'oe'],
  ['eau', null],
  ['museum', null],
  ['account', null],
  ['automat', null],
  ['team', null],
  ['mail', null],
  ['computer', null],
  ['laptop', null],
  ['manager', null],
  ['router', null],
  ['outlook', null],
  ['okay', null],
];

/** The hard sounds of one word, in order (a loan part's sound first). */
function soundsOf(word: string): KlankId[] {
  const out: KlankId[] = [];
  let rest = word;
  for (const [part, sound] of SPELLED_OTHERWISE) {
    if (!rest.includes(part)) continue;
    if (sound) out.push(sound);
    rest = rest.split(part).join(' ');
  }
  for (let i = 0; i < rest.length;) {
    const g = GROUPS.find(([letters]) => rest.startsWith(letters, i));
    if (g) {
      if (g[1]) out.push(g[1]);
      i += g[0].length;
    } else i += 1;
  }
  return out;
}

/** The hard sound to show for a Dutch word or phrase, or undefined. */
export function hardKlank(nl: string): KlankId | undefined {
  const words = nl.toLowerCase().normalize('NFC').split(/[^a-zà-ÿ-]+/).filter(Boolean);
  const found = new Set(words.flatMap(soundsOf));
  return HARD.find((k) => found.has(k));
}
