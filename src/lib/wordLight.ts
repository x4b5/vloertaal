/**
 * Word by word light (the owner's request, 17 November 2026): while a Dutch line is said, the word
 * being said lights up, so a learner can say it along.
 *
 * This file is the arithmetic only. It knows no card, no screen and no sound: give it a text and how
 * long that text sounds, and it says when each word starts and ends. Every place that shows a Dutch
 * line can use it. A recording has no time per word, so the time is shared out by how many beats
 * each word has: a short word ("de") gets less than a long one ("proeftijd"), and a word before a
 * comma or full stop stays lit a little longer, because the voice pauses there.
 */

import { tokenize } from './answers';

/** One word of a line, with the moment (in ms from the start of the sound) it is said. */
export interface WordTime {
  /** The word as written, punctuation kept ("contract?"). */
  readonly text: string;
  readonly start: number;
  readonly end: number;
}

/** A run of vowels is one beat: ij and oe and aa count once ("mijn" 1, "proeftijd" 2). */
const VOWEL_RUN = /[aeiouyáàâäéèêëíìîïóòôöúùûü]+/giu;

/** A word before one of these is followed by a pause of the voice. */
const PAUSE_AFTER = /[,.;:!?…]$/u;

/** How long that pause is, in beats (a word is at least one beat). */
const PAUSE_BEATS = 0.5;

/** The beats of one word: its vowel runs (at least 1, so "3" and "st" count) plus the pause after it. */
function beatsOf(word: string): number {
  const runs = word.match(VOWEL_RUN)?.length ?? 0;
  return Math.max(1, runs) + (PAUSE_AFTER.test(word) ? PAUSE_BEATS : 0);
}

/** The words of a line, as they are lit: split on spaces, punctuation kept on the word. */
export function wordsOf(text: string): readonly string[] {
  return text.split(/\s+/u).filter(Boolean);
}

/** One beat in ms, when nothing reports how long a line sounds (the phone's voice at its calm rate). */
const BEAT_MS = 300;

/** The turtle is this much slower than that. */
const SLOW_FACTOR = 1.7;

/**
 * About how long a line sounds, in ms, when nothing says (the phone's own voice reports no length,
 * a recording does: src/lib/clipTime.ts). A guess, so the light still moves along.
 */
export function guessMs(text: string, slow: boolean): number {
  const beats = wordsOf(text).reduce((sum, word) => sum + beatsOf(word), 0);
  return beats * BEAT_MS * (slow ? SLOW_FACTOR : 1);
}

/**
 * When each word of `text` is said, if the whole line sounds `totalMs`. Words follow each other
 * without a gap, the first starts at 0 and the last ends at `totalMs`. An empty line has no words.
 */
export function wordTimes(text: string, totalMs: number): readonly WordTime[] {
  const words = wordsOf(text);
  if (!words.length) return [];
  const beats = words.map(beatsOf);
  const all = beats.reduce((sum, b) => sum + b, 0);
  const perBeat = totalMs / all;
  let before = 0;
  return words.map((word, i) => {
    const start = before * perBeat;
    before += beats[i];
    // The last word ends exactly at the total (no rounding drift).
    const end = i === words.length - 1 ? totalMs : before * perBeat;
    return { text: word, start, end };
  });
}

/**
 * Do the tiles of a built sentence (written without punctuation: src/lib/answers.ts tokenize) follow
 * the words of the line that is said, one for one? Then the lit word of the line is the tile at the
 * same place. Another order of the same words (an `alt`), another number of words, or a lone sign in
 * the line (it counts as a word here but is no tile) do not match: then nothing lights, rather than
 * the wrong tile.
 */
export function tilesMatchLine(tiles: readonly string[], line: string): boolean {
  const own = tokenize(line);
  return tiles.length > 0
    && wordsOf(line).length === tiles.length
    && own.length === tiles.length
    && own.every((word, i) => word === tiles[i]);
}

/** The index of the word that is said at `ms`, or -1 before the first word and after the last. */
export function wordAt(times: readonly WordTime[], ms: number): number {
  return times.findIndex((w) => ms >= w.start && ms < w.end);
}
