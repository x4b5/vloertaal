import { describe, expect, it } from 'vitest';
import { allLessons, phrasebookIds, findItem, units } from '../src/content/curriculum';
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
];

describe('content and translations', () => {
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
      expect(lang.ui.inARow).toContain('{n}');
      expect(lang.ui.whichOneIs).toContain('{word}');
      expect(missingGloss).toEqual([]);
      expect(Object.keys(lang.gloss).filter((id) => !contentIds.includes(id))).toEqual([]);
    });
  }
});
