import { describe, expect, it } from 'vitest';
// The region's own file (in the app loaded only for a learner of the region): its texts too.
import './regionLoaded';
import { helpLanguageSources } from '../src/i18n/all';
import { isPlural, PLURAL_CATEGORIES, type LangText, type UiText } from '../src/i18n/types';

/**
 * No "sam / sama" for a learner who said "Zeg ik liever niet" (gender x). A gendered text is
 * `{ m, f, x }`; the review of 28 November 2026 found x forms that were the two forms with a slash
 * ("obrigado/obrigada", "bolnav / bolnavă") instead of a neutral sentence, and plain strings (the
 * same for every learner) with such a slash where the text should have been gendered. In the
 * languages with gender forms (pl uk ro bg es pt fr ar ti):
 *  (a) no x form has a gender slash,
 *  (b) no plain string has one,
 * except the intended slashes in ALLOWED below (and the Polish polite pair pan/pani, PL_POLITE).
 *
 * A "gender slash": the words (or up to three words) on either side of a "/" are the same but for
 * one pair of words that look like two gender forms of one word: one is the other plus 1–3 letters
 * (sam/sama, bolnav/bolnavă), or they share their first three letters (obrigado/obrigada,
 * готовий/готова), or they differ only in their last letter (Tigrinya, whose syllables change the
 * vowel for a woman: ወዲቑ/ወዲቓ).
 */
const LANGS = ['pl', 'uk', 'ro', 'bg', 'es', 'pt', 'fr', 'ar', 'ti'];

const WORD = /^[\p{L}\p{M}]+$/u;
const clean = (w: string) => w.replace(/^[«"“„(]+|[»"”),.!?;:]+$/gu, '');
const letters = (w: string) => [...w.toLowerCase()];

/** Do two words look like two gender forms of one word? */
function genderPair(a: string, b: string): boolean {
  const x = letters(a);
  const y = letters(b);
  if (x.join('') === y.join('')) return false;
  const [short, long] = x.length <= y.length ? [x, y] : [y, x];
  if (short.length >= 2 && long.length - short.length <= 3 && long.slice(0, short.length).join('') === short.join('')) return true;
  if (x.length >= 3 && y.length >= 3 && x.slice(0, 3).join('') === y.slice(0, 3).join('')) return true;
  return x.length === y.length && x.length >= 2 && x.slice(0, -1).join('') === y.slice(0, -1).join('');
}

/** The gender slashes in a text, as "left/right" (the words that differ, with the words they share). */
function genderSlashes(text: string): string[] {
  const found: string[] = [];
  const parts = text.split('/');
  for (let i = 0; i + 1 < parts.length; i++) {
    // "a/b" or "a / b", not "a /b" (nor a URL's "x.be/y", whose words are not letters only).
    if (/\S$/.test(parts[i]) !== /^\S/.test(parts[i + 1])) continue;
    const left = parts[i].trimEnd().split(/\s+/);
    const right = parts[i + 1].trimStart().split(/\s+/);
    for (let k = 1; k <= 3 && k <= left.length && k <= right.length; k++) {
      const l = left.slice(-k).map(clean);
      const r = right.slice(0, k).map(clean);
      if (!WORD.test(l[k - 1]) || !WORD.test(r[0])) break;
      const differ = l.map((w, j) => [w, r[j]]).filter(([p, q]) => p.toLowerCase() !== q.toLowerCase());
      if (differ.length === 1 && differ[0].every((w) => WORD.test(w)) && genderPair(differ[0][0], differ[0][1])) {
        found.push(`${l.join(' ')}/${r.join(' ')}`);
        break;
      }
    }
  }
  return found;
}

/**
 * Polish addresses someone politely with pan (a man) or pani (a woman): a chat line in the formal
 * register (Dutch "u") to a colleague, a client or an official whose gender the line does not know
 * says "pan/pani" in any case (pana/pani, panu/pani, panem/panią, pana/panią). A deliberate choice
 * of the Polish translation in about sixty plain lines; allowed there. Not in an x form: there it is
 * allowed only where it is about someone else (ALLOWED), never for the learner.
 */
const PL_POLITE = (pair: string) => /^pan(a|u|em)?\/pani[ą]?$/u.test(pair.toLowerCase());

/** Intended slashes found on 28 November 2026: language, key, form, the slash as genderSlashes gives it, and why. */
const ALLOWED: { lang: string; key: string; form: 'x' | 'plain'; slash: string; reason: string }[] = [
  // Word glosses that give both forms of a person noun: the colleague can be a man or a woman.
  { lang: 'pl', key: 'w.collega', form: 'plain', slash: 'kolega/koleżanka', reason: 'word gloss: both forms of the person noun "collega"' },
  { lang: 'pl', key: 'w.pedagogischmedewerker', form: 'plain', slash: 'opiekun/opiekunka', reason: 'word gloss: both forms of the person noun' },
  { lang: 'fr', key: 'w.collega', form: 'plain', slash: 'le/la', reason: 'word gloss: le / la collègue, the colleague is a man or a woman' },
  { lang: 'fr', key: 'w.leidinggevende', form: 'plain', slash: 'le/la', reason: 'word gloss: le / la responsable, the supervisor is a man or a woman' },
  // Word glosses whose form depends on someone else's gender, not the learner's (as pl "upadł, upadła").
  { lang: 'ti', key: 'w.gefeliciteerd', form: 'plain', slash: 'እንቋዕ ሓጎሰካ/እንቋዕ ሓጎሰኪ', reason: 'word gloss: congratulations to a man / to a woman (the person congratulated)' },
  { lang: 'ti', key: 'w.gevallen', form: 'plain', slash: 'ወዲቑ/ወዲቓ', reason: 'word gloss: he fell / she fell (whoever fell, not the learner)' },
  // Explaining a Dutch word: "je" is ንስኻ to a man, ንስኺ to a woman.
  { lang: 'ti', key: 'c.je.b', form: 'x', slash: 'ንስኻ/ንስኺ', reason: 'the tip explains that Dutch "je" covers both Tigrinya forms of "you"' },
  // The polite pair in an x form about someone else: the care worker helps the client (pan/pani), the learner's own words are neutral.
  { lang: 'pl', key: 'c.client.p', form: 'x', slash: 'panu/pani', reason: 'pan/pani is the client, not the learner (PL_POLITE)' },
];

const allowed = (lang: string, key: string, form: 'x' | 'plain', slash: string) =>
  (form === 'plain' && lang === 'pl' && PL_POLITE(slash)) || ALLOWED.some((a) => a.lang === lang && a.key === key && a.form === form && a.slash === slash);

interface Found {
  lang: string;
  key: string;
  form: 'x' | 'plain';
  slash: string;
  text: string;
}

/** Every gender slash in an x form or a plain string of the language's ui and gloss texts (plural forms too). */
function scan(): Found[] {
  const out: Found[] = [];
  for (const src of helpLanguageSources.filter((s) => LANGS.includes(s.code))) {
    const visit = (key: string, t: UiText | LangText | undefined) => {
      if (t === undefined) return;
      if (typeof t === 'string') {
        for (const slash of genderSlashes(t)) out.push({ lang: src.code, key, form: 'plain', slash, text: t });
      } else if (isPlural(t)) {
        for (const c of PLURAL_CATEGORIES) visit(`${key}[${c}]`, t[c]);
      } else if (t.x !== undefined) {
        for (const slash of genderSlashes(t.x)) out.push({ lang: src.code, key, form: 'x', slash, text: t.x });
      }
    };
    for (const [key, t] of Object.entries(src.ui)) visit(`ui.${key}`, t as UiText | undefined);
    for (const [key, t] of Object.entries(src.gloss)) visit(key, t);
  }
  return out;
}

const found = scan();
const keyOf = (f: Found) => f.key.replace(/^ui\./, '');

describe('gender slash: the finder', () => {
  it('finds the slashes of the review of 28 November', () => {
    expect(genderSlashes('Jestem sam / sama.')).toEqual(['sam/sama']);
    expect(genderSlashes('Não, obrigado/obrigada.')).toEqual(['obrigado/obrigada']);
    expect(genderSlashes('Sunt bolnav / bolnavă azi.')).toEqual(['bolnav/bolnavă']);
    expect(genderSlashes('Я готовий/готова.')).toEqual(['готовий/готова']);
    expect(genderSlashes('Je suis prêt / prête.')).toEqual(['prêt/prête']);
    expect(genderSlashes('أنا مريض/مريضة.')).toEqual(['مريض/مريضة']);
    expect(genderSlashes('ወዲቑ / ወዲቓ')).toEqual(['ወዲቑ/ወዲቓ']);
    expect(genderSlashes('Não, obrigado / Não, obrigada.')).toEqual(['Não obrigado/Não obrigada']);
  });

  it('leaves other slashes alone', () => {
    expect(genderSlashes('Ailleurs / je préfère ne pas le dire')).toEqual([]);
    expect(genderSlashes('جاهز / انتهى')).toEqual([]);
    expect(genderSlashes('o médico / a médica do trabalho')).toEqual([]);
    expect(genderSlashes('werk.belgie.be/nl/werk')).toEqual([]);
    expect(genderSlashes('24/7, 1/2')).toEqual([]);
  });
});

describe('gender slash: an x form is a neutral sentence, a plain string has no two forms', () => {
  for (const lang of LANGS) {
    it(`${lang}: no gender slash in an x form`, () => {
      const bad = found.filter((f) => f.lang === lang && f.form === 'x' && !allowed(f.lang, keyOf(f), f.form, f.slash));
      expect(bad.map((f) => `${f.lang} x ${f.key}: "${f.slash}" in "${f.text}"`)).toEqual([]);
    });

    it(`${lang}: no gender slash in a plain string (a text without m/f/x)`, () => {
      const bad = found.filter((f) => f.lang === lang && f.form === 'plain' && !allowed(f.lang, keyOf(f), f.form, f.slash));
      expect(bad.map((f) => `${f.lang} plain ${f.key}: "${f.slash}" in "${f.text}"`)).toEqual([]);
    });
  }

  it('has no allowlist entry that is no longer needed', () => {
    const stale = ALLOWED.filter((a) => !found.some((f) => f.lang === a.lang && keyOf(f) === a.key && f.form === a.form && f.slash === a.slash));
    expect(stale.map((a) => `${a.lang} ${a.form} ${a.key}: ${a.slash}`)).toEqual([]);
    for (const a of ALLOWED) expect(a.reason.trim(), a.key).toBeTruthy();
  });

  it('still sees the Polish polite pair (so PL_POLITE is no dead rule)', () => {
    expect(found.filter((f) => f.lang === 'pl' && f.form === 'plain' && PL_POLITE(f.slash)).length).toBeGreaterThan(0);
  });
});
