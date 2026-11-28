import { afterAll, beforeAll, describe, expect, it } from 'vitest';
// The region's own file (in the app loaded only for a learner of the region): its tips too.
import './regionLoaded';
import { cultureTips, type CultureTip } from '../src/content/culture';
import { beTaalTips } from '../src/content/taalBe';
import { setBeTaal } from '../src/content/taalBe/live';
import { setRulesCountry } from '../src/content/rulesCourse';
import { allRegionTips } from '../src/content/regio';
import { lessonSayings, sayingQuestion, sayingsTips } from '../src/content/sayings';
import { chatWhy, chatWhyIds } from '../src/content/chatWhy';
import { aboutIds } from '../src/content/about';
import { translationPending } from '../src/content/translationPending';
import { getHelpLanguage, helpLanguageSources } from '../src/i18n/all';
import { GENDERED_LANGS, type Gender, type LangCode } from '../src/i18n/types';
import { sentences } from '../src/lib/dutch';
import { tipBody } from '../src/lib/tipText';

/**
 * The app shows a tip's help text one sentence per line and pairs it with the English sentence by
 * sentence (src/components/Exercises.tsx shortTip, TipBody): a translation with one sentence more or
 * fewer than the English shifts every line after it, and a lesson's lead then picks other sentences.
 * The review of 28 November 2026 found such texts by hand. This test counts the sentences, with the
 * app's own splitter (sentences() in src/lib/dutch.ts), of every text whose key ends in
 *  - `.b`   a tip's body,
 *  - `.s`   a tip's (or a saying's) situation,
 *  - `.w`   why the best option of a tip (or a saying) works,
 *  - `.why` why the right reply of a chat fits (src/content/chatWhy.ts),
 * in every help language and every gender form (m, f and x where the language has them), and in the
 * Belgian course the way the app shows a tip there (tipBody: the Dutch closing line swapped for the
 * Belgian one; a Belgian tip's own body carries its Belgian line already, src/i18n/be/units end()).
 * The count must be the English one. Keys still in translationPending are left out.
 */

/** The English of every text checked, by its translation key. */
const english = new Map<string, string>();
const addTip = (t: CultureTip, body = true) => {
  if (body) english.set(`${t.id}.b`, t.body);
  english.set(t.situation.id, t.situation.en);
  english.set(t.why.id, t.why.en);
};
for (const t of [...cultureTips, ...sayingsTips, ...beTaalTips, ...allRegionTips()]) addTip(t);
// A saying in a later lesson is asked like a tip (situation, options, why); its "body" is its meaning (`.m`).
for (const s of lessonSayings) addTip(sayingQuestion(s), false);
for (const id of chatWhyIds) english.set(id, chatWhy(id.slice(0, -'.why'.length))!.en);

const SUFFIX = /\.(b|s|w|why)$/;
/** Keys with such an ending that are no tip text: the About page's sections (shown as a whole, not paired). */
const NOT_PAIRED = new Set(aboutIds);

/** The forms a learner can see: m, f and x in a gendered language, else the one text. */
const formsOf = (code: string): (Gender | undefined)[] => (GENDERED_LANGS.includes(code as LangCode) ? ['m', 'f', 'x'] : [undefined]);

const count = (text: string) => sentences(text).length;

describe('sentence counts: every tip text has as many sentences as the English', () => {
  it('knows the English of every key ending in .b, .s, .w or .why that the help languages translate', () => {
    const unknown = new Set<string>();
    for (const src of helpLanguageSources) {
      for (const key of Object.keys(src.gloss)) if (SUFFIX.test(key) && !english.has(key) && !NOT_PAIRED.has(key)) unknown.add(key);
    }
    expect([...unknown], 'keys without an English source: add their content to this test').toEqual([]);
    expect(english.size).toBeGreaterThan(1000);
  });

  for (const src of helpLanguageSources) {
    it(`${src.code}: the same number of sentences as the English, in every gender form`, () => {
      const off: string[] = [];
      let checked = 0;
      for (const g of formsOf(src.code)) {
        const lang = getHelpLanguage(src.code, g)!;
        for (const [key, en] of english) {
          if (translationPending(key)) continue;
          const help = lang.gloss[key];
          if (help === undefined) continue; // a missing translation is tests/i18n.test.ts's business
          checked++;
          const [h, e] = [count(help), count(en)];
          if (h !== e) off.push(`${src.code} ${g ?? '-'} ${key}: ${h} sentences, English ${e}`);
        }
      }
      expect(checked).toBeGreaterThan(1000);
      expect(off).toEqual([]);
    });
  }
});

describe('sentence counts in the Belgian course (the tips as shown there, with the Belgian closing line)', () => {
  beforeAll(() => {
    setRulesCountry('be');
    setBeTaal(true);
  });
  afterAll(() => {
    setRulesCountry('nl');
    setBeTaal(null);
  });

  for (const src of helpLanguageSources) {
    it(`${src.code}: every tip body as shown in Belgium has as many sentences as its English`, () => {
      const off: string[] = [];
      for (const g of formsOf(src.code)) {
        const lang = getHelpLanguage(src.code, g)!;
        for (const t of [...cultureTips, ...beTaalTips]) {
          if (translationPending(`${t.id}.b`)) continue;
          const text = tipBody(t, lang);
          if (text.help === undefined) continue;
          const [h, e] = [count(text.help), count(text.en)];
          if (h !== e) off.push(`${src.code} ${g ?? '-'} ${t.id}.b (Belgian course): ${h} sentences, English ${e}`);
        }
      }
      expect(off).toEqual([]);
    });
  }

  it('really shows the Belgian closing line here', () => {
    const t = cultureTips.find((x) => x.lessonId === 'l.site')!;
    expect(tipBody(t).en).toMatch(/justitiehuis/);
    const pl = getHelpLanguage('pl')!;
    expect(tipBody(t, pl).help).toContain(pl.gloss['be.closing.advice']);
  });
});
