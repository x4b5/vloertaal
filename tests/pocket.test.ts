import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { isMixLesson } from '../src/content/review';
import { helpLanguages } from '../src/i18n';
import { POCKET_SIZE, pocketPhrases, pocketPicks } from '../src/lib/pocket';

const teaching = (u: (typeof units)[number]) => u.lessons.filter((l) => !isMixLesson(l));

describe('pocket card phrases', () => {
  it('gives every unit five different phrases of its own', () => {
    for (const unit of units) {
      const phrases = pocketPhrases(unit);
      expect(phrases, unit.id).toHaveLength(POCKET_SIZE);
      expect(new Set(phrases.map((p) => p.nl.toLowerCase())).size, unit.id).toBe(POCKET_SIZE);
      const own = new Set(teaching(unit).flatMap((l) => [...l.words, ...l.sentences].map((x) => x.id)));
      for (const p of phrases) expect(own.has(p.id), `${unit.id}: ${p.id}`).toBe(true);
    }
  });

  it('prefers sentences, short ones, from every lesson in turn', () => {
    for (const unit of units) {
      if (pocketPicks[unit.id]) continue;
      const phrases = pocketPhrases(unit);
      const sentences = teaching(unit).flatMap((l) => l.sentences);
      if (sentences.length >= POCKET_SIZE) expect(phrases.every((p) => p.id.startsWith('s.')), unit.id).toBe(true);
      for (const p of phrases) expect(p.nl.length, p.nl).toBeLessThanOrEqual(40);
      const lessonsCovered = new Set(phrases.map((p) => teaching(unit).find((l) => l.sentences.some((s) => s.id === p.id))?.id));
      expect(lessonsCovered.size, unit.id).toBeGreaterThanOrEqual(Math.min(2, teaching(unit).length));
    }
  });

  it('puts the hand-picked lines first, in their order', () => {
    for (const [unitId, ids] of Object.entries(pocketPicks)) {
      const unit = units.find((u) => u.id === unitId)!;
      expect(pocketPhrases(unit).map((p) => p.id)).toEqual(ids.slice(0, POCKET_SIZE));
    }
  });

  it('gives a picture where the sentence names a pictured word', () => {
    const safety = pocketPhrases(units.find((u) => u.id === 'u.safety')!);
    expect(safety.find((p) => p.id === 's.gear.1')?.picture?.id).toBe('w.helm');
    // Most phrases across the course come with a picture.
    const all = units.flatMap((u) => pocketPhrases(u));
    expect(all.filter((p) => p.picture).length / all.length).toBeGreaterThan(0.6);
  });

  it('has every phrase translated in every help language', () => {
    for (const unit of units)
      for (const p of pocketPhrases(unit))
        for (const lang of helpLanguages) expect(lang.gloss[p.id]?.trim(), `${lang.code} ${p.id}`).toBeTruthy();
  });
});
