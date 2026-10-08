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
  ['📆', '📅', '🗓️'],
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
];

/** Emoji without the invisible variation selector, so "⚠" and "⚠️" compare equal. */
const bare = (emoji: string) => emoji.replace(/\uFE0F/g, '');

const groupOf = new Map<string, string>();
LOOKALIKES.forEach((group, i) => group.forEach((e) => groupOf.set(bare(e), `look:${i}`)));

/**
 * A key for what a word's picture looks like: equal keys = the same or a near-identical picture.
 * Based on the emoji, which drawn words keep too (a drawing replaces the emoji it was made for,
 * so this also keeps a drawing away from an emoji of the same thing).
 */
export function lookKey(word: Pick<Word, 'emoji'>): string {
  const e = bare(word.emoji);
  return groupOf.get(e) ?? `emoji:${e}`;
}
