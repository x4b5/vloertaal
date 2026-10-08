import { describe, expect, it } from 'vitest';
import { allLessons, phrasebookExtras, phrasebookIds, findItem, units } from '../src/content/curriculum';
import { aboutIds } from '../src/content/about';
import { cultureIds, cultureTips } from '../src/content/culture';
import { workIds } from '../src/content/work';
import { helpLanguages } from '../src/i18n';
import { uiEn } from '../src/i18n/types';

const contentIds = [
  ...units.map((u) => u.id),
  ...allLessons.flatMap((l) => [
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
      expect(Object.keys(lang.gloss).filter((id) => !contentIds.includes(id))).toEqual([]);
    });
  }
});
