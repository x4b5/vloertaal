import { shuffle } from './random';

/** One tap-able piece of a typed answer: a letter, a space, or a whole article ("de "). */
export interface LetterTile {
  /** What a tap adds to the answer. */
  text: string;
  /** What the tile shows. */
  label: string;
  kind: 'letter' | 'space' | 'article' | 'extra';
}

const ARTICLES = new Set(['de', 'het', 'een']);
/** Common Dutch letters, for the extra tiles that are not in the word. */
const COMMON = 'eantrodislgkmvhubpwjzc';

/** Help languages not written in the Latin script: letter tiles are the default there. */
export const NON_LATIN_HELP = new Set(['ti', 'ar', 'fa', 'prs', 'uk', 'bg']);

/**
 * The tiles for typing `nl` without a keyboard: every letter of the word once, a space tile
 * between words, an article as one tile ("de"), plus 2 or 3 extra letters that are not in the
 * word, all shuffled. Tapping the right tiles in order spells exactly `nl` (lowercase, no
 * punctuation), which checkTyped grades like typed text.
 */
export function letterTiles(nl: string, rng: () => number): LetterTile[] {
  const words = nl
    .toLowerCase()
    .replace(/[^\p{L}\s]/gu, '')
    .split(/\s+/)
    .filter(Boolean);
  const tiles: LetterTile[] = [];
  words.forEach((w, i) => {
    const last = i === words.length - 1;
    if (i === 0 && !last && ARTICLES.has(w)) {
      // "de " in one tap: the article and its space.
      tiles.push({ text: `${w} `, label: w, kind: 'article' });
      return;
    }
    for (const ch of w) tiles.push({ text: ch, label: ch, kind: 'letter' });
    if (!last) tiles.push({ text: ' ', label: '␣', kind: 'space' });
  });
  const inWord = new Set(words.join(''));
  const letters = tiles.filter((t) => t.kind === 'letter').length;
  const free = shuffle([...COMMON].filter((c) => !inWord.has(c)), rng);
  for (const c of free.slice(0, letters >= 5 ? 3 : 2)) tiles.push({ text: c, label: c, kind: 'extra' });
  return shuffle(tiles, rng);
}

/** One place in a word spelled with letter tiles: the tile that goes there and the choices. */
export interface LetterStep {
  answer: LetterTile;
  /** The answer and (at most) two wrong tiles, shuffled. */
  options: LetterTile[];
}

/**
 * Spelling with letter tiles, one place at a time: for each next letter (or the article, or the
 * space between two words) three tiles, the right one and two others, so a screen never offers
 * more than three. An article is chosen among de / het / een; a letter among letters of the word
 * and common Dutch letters; a space among two letters. Spelled out, the answers make exactly
 * the word (lower case, no punctuation), as letterTiles does.
 */
export function letterSteps(nl: string, rng: () => number, n = 3): LetterStep[] {
  const words = nl
    .toLowerCase()
    .replace(/[^\p{L}\s]/gu, '')
    .split(/\s+/)
    .filter(Boolean);
  const answers: LetterTile[] = [];
  words.forEach((w, i) => {
    const last = i === words.length - 1;
    if (i === 0 && !last && ARTICLES.has(w)) {
      answers.push({ text: `${w} `, label: w, kind: 'article' });
      return;
    }
    for (const ch of w) answers.push({ text: ch, label: ch, kind: 'letter' });
    if (!last) answers.push({ text: ' ', label: '␣', kind: 'space' });
  });
  const inWord = [...new Set(words.join('').replace(/\s/g, ''))];
  return answers.map((answer) => {
    let pool: LetterTile[];
    if (answer.kind === 'article') {
      pool = [...ARTICLES].filter((a) => `${a} ` !== answer.text).map((a) => ({ text: `${a} `, label: a, kind: 'article' as const }));
    } else {
      const letters = answer.kind === 'space' ? [...COMMON] : [...shuffle(inWord, rng), ...shuffle([...COMMON], rng)];
      pool = [...new Set(letters)].filter((c) => c !== answer.text).map((c) => ({ text: c, label: c, kind: 'extra' as const }));
    }
    const wrong = shuffle(pool, rng).slice(0, n - 1);
    return { answer, options: shuffle([answer, ...wrong], rng) };
  });
}
