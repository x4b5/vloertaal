/** Lowercase, drop accents and punctuation, collapse spaces. */
export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’'`]/g, '')
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
 * but we show the right spelling).
 */
export function checkTyped(input: string, expected: string): TypedResult {
  const got = normalize(input);
  const want = normalize(expected);
  if (!got) return 'wrong';
  if (got === want) return 'correct';
  const wantBare = want.replace(ARTICLES, '');
  const gotBare = got.replace(ARTICLES, '');
  if (gotBare === wantBare) return 'almost';
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

export function checkTiles(chosen: string[], sentence: string): boolean {
  return normalize(chosen.join(' ')) === normalize(tokenize(sentence).join(' '));
}
