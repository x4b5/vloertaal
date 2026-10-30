import { describe, expect, it } from 'vitest';
import { GENDERED_LANGS } from '../src/i18n/types';

/**
 * "Zeg ik liever niet" (gender `x`): a gendered help-language text `{ m, f }` without an `x` falls
 * back to the masculine form, which is what that learner wanted to avoid. These checks count the
 * texts still without `x`, per language, over every translation file of that language.
 */
const files = import.meta.glob(
  [
    '../src/i18n/*.ts',
    '../src/i18n/work/*.ts',
    '../src/i18n/learn/*.ts',
    '../src/i18n/culture/*.ts',
    '../src/i18n/about/*.ts',
    '../src/i18n/sayings/*.ts',
    '../src/i18n/sounds/*.ts',
    '../src/i18n/regio/*.ts',
    '../src/i18n/kunjenu/*.ts',
  ],
  { eager: true, import: 'default' },
);

/**
 * Upper bounds for gendered texts without `x`. They may only go down. pl, uk, ro, bg, es, pt and fr
 * have an `x` everywhere. In ar and ti an `x` is only added where a neutral sentence is natural
 * (ti: the polite plural; ar: a noun, the masdar or an impersonal form); the rest uses `m`.
 */
const MAX_WITHOUT_X: Record<string, number> = {
  pl: 0,
  uk: 0,
  ro: 0,
  bg: 0,
  es: 0,
  pt: 0,
  fr: 0,
  ti: 377,
  ar: 583,
};

interface Gendered {
  m: string;
  f: string;
  x?: unknown;
}

const isGendered = (v: unknown): v is Gendered =>
  typeof v === 'object' && v !== null && typeof (v as Gendered).m === 'string' && typeof (v as Gendered).f === 'string';

/** Every `{ m, f }` text in a translation file, with where it is. */
function gendered(value: unknown, path: string, out: { path: string; text: Gendered }[] = []) {
  if (isGendered(value)) out.push({ path, text: value });
  else if (typeof value === 'object' && value !== null)
    for (const [k, v] of Object.entries(value)) gendered(v, `${path} ${k}`, out);
  return out;
}

function textsOf(lang: string) {
  return Object.entries(files)
    .filter(([file]) => file.endsWith(`/${lang}.ts`))
    .flatMap(([file, mod]) => gendered(mod, file.replace('../src/i18n/', '')));
}

const placeholders = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort().join(',');

describe('gender x: a form for "Zeg ik liever niet"', () => {
  it('has a bound for every gendered language', () => {
    expect(Object.keys(MAX_WITHOUT_X).sort()).toEqual([...GENDERED_LANGS].sort());
  });

  for (const lang of GENDERED_LANGS) {
    const texts = textsOf(lang);

    it(`${lang}: has gendered texts in its files`, () => {
      expect(texts.length).toBeGreaterThan(0);
    });

    it(`${lang}: no more texts without x than the bound (${MAX_WITHOUT_X[lang]})`, () => {
      const missing = texts.filter((t) => t.text.x === undefined).map((t) => t.path);
      expect(missing.length, missing.slice(0, 20).join('\n')).toBeLessThanOrEqual(MAX_WITHOUT_X[lang]);
    });

    it(`${lang}: every x is a non-empty text with the same placeholders as m`, () => {
      const bad = texts
        .filter((t) => t.text.x !== undefined)
        .filter((t) => typeof t.text.x !== 'string' || !t.text.x.trim() || placeholders(t.text.x) !== placeholders(t.text.m))
        .map((t) => t.path);
      expect(bad).toEqual([]);
    });
  }
});
