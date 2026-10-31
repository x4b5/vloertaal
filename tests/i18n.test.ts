import { describe, expect, it } from 'vitest';
import { allLessons, teachingLessons, phrasebookExtras, phrasebookIds, findItem, units } from '../src/content/curriculum';
import { aboutIds } from '../src/content/about';
import { cultureIds, cultureTips } from '../src/content/culture';
import { workIds } from '../src/content/work';
import { sayingsIds } from '../src/content/sayings';
import { chatWhyIds } from '../src/content/chatWhy';
import { getHelpLanguage, gloss, hasGender, helpLanguageSources, helpLanguages, ui } from '../src/i18n/all';
import { allForms, forGender, GENDERED_LANGS, isPlural, PLURAL_CATEGORIES, uiEn, type LangText } from '../src/i18n/types';
import { mixLessonFor } from '../src/content/review';
import { THEMES } from '../src/content/themes';
import { regionIds } from '../src/content/regio';
import { kunGlossIds } from '../src/content/kunJeNu';
import { beTaalIds } from '../src/content/taalBe';
// The region's own file (in the app loaded only for a learner of the region): its units, tips and map.
import './regionLoaded';

const contentIds = [
  ...units.map((u) => u.id),
  // Mixed-review lessons only repeat items of other lessons; their titles are checked below.
  ...teachingLessons.flatMap((l) => [
    l.id,
    ...l.words.map((w) => w.id),
    ...l.sentences.map((s) => s.id),
    ...(l.dialogues ?? []).flatMap((d) => [d.prompt.id, d.reply.id]),
  ]),
  // Workplace-culture tips (src/content/culture.ts).
  ...cultureIds,
  // Tips of the work-and-rights units (src/content/work.ts).
  ...workIds,
  // Sayings (src/content/sayings.ts): what their words say, and the sayings in later lessons.
  ...sayingsIds,
  // The About page (src/content/about.ts).
  ...aboutIds,
  // Why a chat's right reply fits (src/content/chatWhy.ts).
  ...chatWhyIds,
  // Phrasebook-only emergency lines.
  ...phrasebookExtras.map((p) => p.id),
  // Theme names (src/content/themes.ts): the headers of All topics and the home's theme label.
  ...THEMES.map((t) => t.id),
  // The regions (src/content/regio): their lessons and tips, and the Sociale kaart's categories.
  ...regionIds(),
  // "Wat kun je nu?" (src/content/kunJeNu.ts): the can-do sentences of the themes translated so far.
  ...kunGlossIds(),
  // The language track in Belgium (src/content/taalBe, docs/taal-belgie.md): its units, lines, tips and shared texts.
  ...beTaalIds(),
];

describe('content and translations', () => {
  it('has one culture tip per lesson, each with exactly one best option', () => {
    const lessonIds = new Set(allLessons.map((l) => l.id));
    for (const t of cultureTips) {
      expect(lessonIds.has(t.lessonId), t.id).toBe(true);
      expect(t.options.filter((o) => o.best)).toHaveLength(1);
    }
    expect(new Set(cultureTips.map((t) => t.lessonId)).size).toBe(cultureTips.length);
  });

  it('has unique ids', () => {
    expect(new Set(contentIds).size).toBe(contentIds.length);
  });

  it('every unit ends with a mixed review of items taught before, with a translated title', () => {
    const allDone = Object.fromEntries(teachingLessons.map((l) => [l.id, {}]));
    const taught = new Set(teachingLessons.flatMap((l) => [...l.words, ...l.sentences, ...(l.dialogues ?? []).map((d) => d.reply)].map((x) => x.id)));
    for (const u of units) {
      const mix = u.lessons[u.lessons.length - 1];
      expect(mix.id, u.id).toBe(`l.${u.id.slice(2)}.mix`);
      expect(mix.words.length, u.id).toBeGreaterThanOrEqual(5);
      expect(mix.sentences.length, u.id).toBeGreaterThanOrEqual(2);
      expect(mix.dialogues?.length, u.id).toBeGreaterThanOrEqual(1);
      for (const x of [...mix.words, ...mix.sentences, ...(mix.dialogues ?? []).map((d) => d.reply)]) expect(taught.has(x.id), `${mix.id}: ${x.id}`).toBe(true);
      // Once the related units are played, some of it comes from them: repetition across topics
      // (src/content/review.ts; before that it only uses this unit's own items).
      const own = new Set(u.lessons.slice(0, -1).flatMap((l) => l.words.map((w) => w.id)));
      expect(mixLessonFor(u, units, allDone).words.some((w) => !own.has(w.id)), u.id).toBe(true);
      for (const lang of helpLanguages) expect(lang.gloss[mix.id]?.trim(), `${lang.code} ${mix.id}`).toBeTruthy();
    }
  });

  it('every lesson has a workplace chat', () => {
    for (const l of allLessons) expect(l.dialogues?.length, l.id).toBeGreaterThan(0);
  });

  it('phrasebook points at existing items', () => {
    for (const id of phrasebookIds) expect(findItem(id), id).toBeDefined();
  });

  /** Every form of a text is filled in (a gendered text has an m and an f, both non-empty). */
  const filled = (t: LangText | undefined) => allForms(t).length > 0 && allForms(t).every((x) => x.trim());
  const placeholders = (x: string) => [...x.matchAll(/\{\w+\}/g)].map((m) => m[0]).sort();
  /** The Arabic dual (يومان "two days") says the number itself: that one form leaves {n} out (tests/plural.test.ts). */
  const dualWithoutN = (code: string, c?: string) => code === 'ar' && c === 'two';

  for (const lang of helpLanguageSources) {
    it(`${lang.code} translates every UI string and every lesson item`, () => {
      const missingUi = Object.keys(uiEn).filter((k) => !filled(lang.ui[k as keyof typeof uiEn]));
      const missingGloss = contentIds.filter((id) => !filled(lang.gloss[id]));
      expect(missingUi).toEqual([]);
      // Templates keep their placeholders, or the number/word would vanish (in every gender form).
      for (const [key, ph] of [['practiseMistakes', '{n}'], ['wordsLearnedN', '{n}'], ['streakGrew', '{n}'], ['whichOneIs', '{word}']] as const) {
        const t = lang.ui[key];
        const forms = isPlural(t) ? PLURAL_CATEGORIES.flatMap((c) => (dualWithoutN(lang.code, c) ? [] : allForms(t[c]))) : allForms(t);
        for (const form of forms) expect(form, `${lang.code} ${key}`).toContain(ph);
      }
      expect(missingGloss).toEqual([]);
      expect(Object.keys(lang.gloss).filter((id) => !contentIds.includes(id) && !id.endsWith('.mix'))).toEqual([]);
    });

    it(`${lang.code} gender forms keep the same placeholders and only appear where gender matters`, () => {
      // A plural text (src/i18n/types.ts PluralText) is checked form by form: each may be gendered.
      const texts: [string, LangText | undefined, string?][] = [
        ...Object.entries(lang.ui).flatMap(([k, t]): [string, LangText | undefined, string?][] =>
          isPlural(t) ? PLURAL_CATEGORIES.map((c) => [k, t[c], c]) : [[k, t]]),
        ...Object.entries(lang.gloss),
      ];
      for (const [key, t, category] of texts) {
        if (t === undefined || typeof t === 'string') continue;
        // Only languages with grammatical gender carry gendered texts.
        expect(hasGender(lang.code), `${lang.code} ${key}`).toBe(true);
        expect(t.m.trim() && t.f.trim(), `${lang.code} ${key}`).toBeTruthy();
        // A gendered text with the same m and f is just a string.
        expect(t.m, `${lang.code} ${key}`).not.toBe(t.f);
        // Every form keeps the English placeholders ({n}, {word}): m, f and x alike.
        const en = placeholders(uiEn[key as keyof typeof uiEn] ?? '').filter((p) => !(p === '{n}' && dualWithoutN(lang.code, category)));
        for (const form of allForms(t)) expect(placeholders(form), `${lang.code} ${key}`).toEqual(placeholders(t.m));
        if (key in uiEn) expect(placeholders(t.m), `${lang.code} ${key}`).toEqual(en);
      }
    });
  }

  it('resolves a gendered text by gender: f, m, then the both-forms x, then m', () => {
    const t = { m: 'Sunt rănit.', f: 'Sunt rănită.', x: 'Sunt rănit / rănită.' };
    expect(forGender(t, 'f')).toBe('Sunt rănită.');
    expect(forGender(t, 'm')).toBe('Sunt rănit.');
    expect(forGender(t, 'x')).toBe('Sunt rănit / rănită.');
    expect(forGender(t, undefined)).toBe('Sunt rănit / rănită.');
    expect(forGender({ m: 'chory', f: 'chora' }, 'x')).toBe('chory');
    expect(forGender('plain', 'f')).toBe('plain');
    expect(forGender(undefined, 'f')).toBeUndefined();
  });

  it('a chosen gender reaches every lookup: lang.gloss, lang.ui, gloss() and ui()', () => {
    for (const code of GENDERED_LANGS) {
      const src = helpLanguageSources.find((l) => l.code === code)!;
      const f = getHelpLanguage(code, 'f')!;
      const m = getHelpLanguage(code, 'm')!;
      const gendered = Object.entries(src.gloss).filter(([, t]) => typeof t !== 'string');
      expect(gendered.length, code).toBeGreaterThan(0);
      for (const [id, t] of gendered) {
        expect(f.gloss[id]).toBe((t as { f: string }).f);
        expect(m.gloss[id]).toBe((t as { m: string }).m);
        expect(gloss(id, 'en', f).help).toBe((t as { f: string }).f);
      }
      // Every resolved text is a plain string.
      for (const l of [f, m, getHelpLanguage(code)!]) {
        for (const v of [...Object.values(l.ui), ...Object.values(l.gloss)]) expect(typeof v).toBe('string');
      }
    }
    expect(helpLanguages.every((l) => Object.values(l.gloss).every((v) => typeof v === 'string'))).toBe(true);
    // Examples from the brief: "not sure yet" in Arabic, "are you sick?", "I am hurt".
    expect(ui('notSureYet', getHelpLanguage('ar', 'f')).help).toBe('لست متأكدة بعد');
    expect(ui('notSureYet', getHelpLanguage('ar', 'm')).help).toBe('لست متأكداً بعد');
    expect(getHelpLanguage('pl', 'f')!.gloss['c.sick.q']).toBe('Jesteś chora?');
    expect(getHelpLanguage('ro', 'x')!.gloss['p.hurt']).toBe('Sunt rănit / rănită.');
    expect(getHelpLanguage('ro', 'f')!.gloss['p.hurt']).toBe('Sunt rănită.');
    // Languages without grammatical gender give the same text for everyone.
    for (const code of ['fa', 'prs', 'tr'] as const) {
      expect(hasGender(code)).toBe(false);
      expect(getHelpLanguage(code, 'f')!.gloss).toEqual(getHelpLanguage(code, 'm')!.gloss);
    }
  });
});