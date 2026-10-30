import type { Word } from '../content/types';

/**
 * Which words are shown with a picture. Abstract words (`picture: false`: rights, rules, times,
 * feelings) have none: they are taught with the word, its sound and the gloss only.
 * Every other word has a drawing (src/pictures) or, until it is drawn, its emoji.
 */
export function hasPicture(word: Pick<Word, 'picture'>): boolean {
  return word.picture !== false;
}

/**
 * Emoji that look (nearly) the same at card size. Two words whose pictures share a group are
 * never offered side by side in a picture choice.
 */
const LOOKALIKES: readonly string[][] = [
  ['📷', '📸'],
  ['🌴', '🏝️'],
  ['🧑‍⚕️', '👩‍⚕️', '👨‍⚕️'],
  ['✉️', '📨', '📩', '📧', '💌'],
  ['📋', '🗒️', '📝'],
  ['💶', '💵', '💷', '💴'],
  ['📞', '☎️'],
  ['🗣️', '💬', '🗨️'],
  ['🏢', '🏬', '🏣'],
  ['🔍', '🔎'],
  ['🛑', '⛔', '🚫'],
  ['❌', '✖️', '❎'],
  ['✅', '✔️', '☑️'],
  ['🆘', '🚨'],
  ['☕', '🍵'],
  // Drawn: "het schap" (a shop shelf) and "vakken vullen" (someone at that shelf).
  ['🗃️', '🥫'],
  ['🧑‍🔧', '👨‍🔧', '👩‍🔧'],
  // Drawn (group26): "slijpen" (a grinder throwing sparks) next to "de vonk"; also keeps the
  // sparks away from "de machine" (⚙️).
  ['⚙️', '🎇'],
  // Drawn (group26): "de kabel" (a coiled cable) and "de stekker" (a plug on its cable).
  ['➰', '🔌'],
  // Drawn (group26): "lek" (a flat tyre) and "de band" (the tyre).
  ['💧', '🛞'],
];

/**
 * Look-alike groups with a name, which a word's own `look` can name as its family (see lookKey).
 * "kalender": a calendar page (today, tomorrow, the date, the roster, the shift).
 */
const NAMED: Readonly<Record<string, readonly string[]>> = {
  kalender: ['📆', '📅', '🗓️'],
};

/** Emoji without the invisible variation selector, so "⚠" and "⚠️" compare equal. */
const bare = (emoji: string) => emoji.replace(/\uFE0F/g, '');

const groupOf = new Map<string, string>();
LOOKALIKES.forEach((group, i) => group.forEach((e) => groupOf.set(bare(e), `look:${i}`)));
Object.entries(NAMED).forEach(([name, group]) => group.forEach((e) => groupOf.set(bare(e), name)));

/**
 * A key for what a word's picture looks like: equal keys = the same or a near-identical picture.
 * A word's own `look` comes first ("kalender/maandag"); else the emoji decides, which drawn words
 * keep too (a drawing replaces the emoji it was made for, so this also keeps a drawing away from
 * an emoji of the same thing).
 */
export function lookKey(word: Pick<Word, 'emoji' | 'look'>): string {
  if (word.look) return word.look;
  const e = bare(word.emoji);
  return groupOf.get(e) ?? `emoji:${e}`;
}

/**
 * Whether two words' pictures look (nearly) the same, so they never stand side by side in a
 * picture choice: the same key, or one key inside the other's family. "kalender/maandag" and
 * "kalender/zaterdag" (two week strips, another day marked) differ, but each looks like a plain
 * calendar page ("kalender": the date, the roster, today).
 */
export function looksAlike(a: Pick<Word, 'emoji' | 'look'>, b: Pick<Word, 'emoji' | 'look'>): boolean {
  const ka = lookKey(a);
  const kb = lookKey(b);
  return ka === kb || ka.startsWith(`${kb}/`) || kb.startsWith(`${ka}/`);
}

/**
 * Whether two words show the same picture: the same own `look` when both have one (two week
 * strips may share an emoji, but each is drawn with its own day), else the same emoji.
 */
export function samePicture(a: Pick<Word, 'emoji' | 'look'>, b: Pick<Word, 'emoji' | 'look'>): boolean {
  return a.look && b.look ? a.look === b.look : a.emoji === b.emoji;
}
