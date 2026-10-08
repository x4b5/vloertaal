import { describe, expect, it } from 'vitest';
import { allLessons, teachingLessons, phrasebookExtras, phrasebookIds, findItem, units } from '../src/content/curriculum';
import { aboutIds } from '../src/content/about';
import { cultureIds, cultureTips } from '../src/content/culture';
import { workIds } from '../src/content/work';
import { helpLanguages } from '../src/i18n';
import { uiEn } from '../src/i18n/types';
import { mixLessonFor } from '../src/content/review';

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
  // The About page (src/content/about.ts).
  ...aboutIds,
  // Phrasebook-only emergency lines.
  ...phrasebookExtras.map((p) => p.id),
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

  for (const lang of helpLanguages) {
    it(`${lang.code} translates every UI string and every lesson item`, () => {
      const missingUi = Object.keys(uiEn).filter((k) => !lang.ui[k as keyof typeof uiEn]?.trim());
      const missingGloss = contentIds.filter((id) => !lang.gloss[id]?.trim());
      expect(missingUi).toEqual([]);
      // Templates keep their placeholders, or the number/word would vanish.
      expect(lang.ui.practiseMistakes).toContain('{n}');
      expect(lang.ui.wordsLearnedN).toContain('{n}');
      expect(lang.ui.streakGrew).toContain('{n}');
      expect(lang.ui.whichOneIs).toContain('{word}');
      expect(missingGloss).toEqual([]);
      expect(Object.keys(lang.gloss).filter((id) => !contentIds.includes(id) && !id.endsWith('.mix'))).toEqual([]);
    });
  }
});
