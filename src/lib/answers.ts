/** Lowercase, drop accents and punctuation, collapse spaces. */
export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’‘ʼ'`]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const ARTICLES = /^(de|het|een) /;

export function levenshtein(a: string, b: string): number {
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
}

export type TypedResult = 'correct' | 'almost' | 'wrong';

/**
 * Forgiving check for typed answers. Beginners should not fail on a capital
 * letter, a missing article or one typo; those count as "almost" (still correct,
 * but we show the right spelling). A *wrong* article ("het tafel" for "de tafel")
 * is a mistake: de or het is part of the word to learn. `others`: words the learner could mix it up with
 * (the other word of a sound pair, "man" for "maan"): typing one of those is wrong,
 * even when it is only a letter away.
 */
export function checkTyped(input: string, expected: string, others: readonly string[] = []): TypedResult {
  const got = normalize(input);
  const want = normalize(expected);
  if (!got) return 'wrong';
  if (got === want) return 'correct';
  const wantArticle = ARTICLES.exec(want)?.[1];
  const gotArticle = ARTICLES.exec(got)?.[1];
  if (wantArticle && gotArticle && wantArticle !== gotArticle) return 'wrong';
  const wantBare = want.replace(ARTICLES, '');
  const gotBare = got.replace(ARTICLES, '');
  if (gotBare === wantBare) return 'almost';
  if (others.some((o) => normalize(o).replace(ARTICLES, '') === gotBare)) return 'wrong';
  const allowed = wantBare.length >= 4 ? 1 : 0;
  if (levenshtein(gotBare, wantBare) <= allowed) return 'almost';
  return 'wrong';
}

/** Split a sentence into word tiles, dropping punctuation. */
export function tokenize(sentence: string): string[] {
  return sentence
    .split(/\s+/)
    .map((t) => t.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''))
    .filter(Boolean);
}

/** The same tiles (written small), whatever their order. */
const sameTiles = (a: readonly string[], b: readonly string[]) => {
  const key = (t: readonly string[]) => t.map((w) => w.toLowerCase()).sort().join(' ');
  return key(a) === key(b);
};

/**
 * Every right order of a sentence as tiles: its own first, then its `alt` orders (only those
 * made of exactly the same tiles; anything else is never offered by the builder).
 */
export function sentenceOrders(sentence: { nl: string; alt?: readonly string[] }): string[][] {
  const own = tokenize(sentence.nl);
  const alts = (sentence.alt ?? []).map(tokenize).filter((t) => sameTiles(t, own));
  return [own, ...alts];
}

/**
 * Building word by word: is `word` right as the next tile after `placed`, and in which order
 * (an index of sentenceOrders) does the sentence then go on? The order already followed wins;
 * else the first one that starts with these words. -1: wrong here in every order.
 */
export function nextTileOrder(orders: readonly (readonly string[])[], placed: readonly string[], word: string, current = 0): number {
  const fits = (o: readonly string[]) =>
    o.length > placed.length && [...placed, word].every((w, i) => w.toLowerCase() === o[i].toLowerCase());
  if (orders[current] && fits(orders[current])) return current;
  return orders.findIndex(fits);
}

export function checkTiles(chosen: string[], sentence: string | { nl: string; alt?: readonly string[] }): boolean {
  const orders = typeof sentence === 'string' ? [tokenize(sentence)] : sentenceOrders(sentence);
  return orders.some((o) => normalize(chosen.join(' ')) === normalize(o.join(' ')));
}

/**
 * The right sentence as tiles, each marked whether the learner had that word in that place
 * (a plain position diff of the tiles they laid against the solution). A word put somewhere
 * else, or left out, is `ok: false` and gets a red underline in the feedback label.
 */
export function tileDiff(given: string[], sentence: string): { word: string; ok: boolean }[] {
  return tokenize(sentence).map((word, i) => ({ word, ok: given[i] !== undefined && normalize(given[i]) === normalize(word) }));
}
