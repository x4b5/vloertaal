import { describe, expect, it } from 'vitest';
import { buildLesson } from '../src/lib/exercises';
import { dailyLesson, type Cards } from '../src/lib/spaced';

// Ear training in today's review (voorstel 11): one sound pair a day, by ear, another voice each day.
describe('ear training', () => {
  const day = '2026-11-01';
  const known: Cards = { 'w.kl.man': { box: 2, due: day }, 'w.kl.maan': { box: 3, due: '2026-11-04' }, 'w.helm': { box: 1, due: day } };

  it('comes once both words of a sound pair are known', () => {
    const l = dailyLesson(['w.helm', 'w.kl.man'], known, day);
    expect(l.ear?.word.id).toMatch(/^w\.kl\.maa?n$/);
    expect(l.ear?.partner.id).toBe(l.ear?.word.id === 'w.kl.man' ? 'w.kl.maan' : 'w.kl.man');
  });

  it('does not come before the pair is known', () => {
    expect(dailyLesson(['w.helm'], { 'w.helm': { box: 1, due: day }, 'w.kl.man': { box: 1, due: day } }, day).ear).toBeUndefined();
  });

  it('is one picture choice by ear, with the two words of the pair, and not without sound', () => {
    const l = dailyLesson(['w.helm', 'w.kl.man'], known, day);
    const ear = buildLesson(l, { review: true, seed: 1 }).filter((e) => e.kind === 'dutch' && e.ear !== undefined);
    expect(ear).toHaveLength(1);
    const e = ear[0] as Extract<typeof ear[0], { kind: 'dutch' }>;
    expect(e.options.map((w) => w.id).sort()).toEqual(['w.kl.maan', 'w.kl.man']);
    expect(buildLesson(l, { review: true, seed: 1, quiet: true }).some((x) => x.kind === 'dutch' && x.ear !== undefined)).toBe(false);
  });

  it('turns: another word and another voice on the next day', () => {
    const a = dailyLesson(['w.helm', 'w.kl.man'], known, '2026-11-01').ear!;
    const b = dailyLesson(['w.helm', 'w.kl.man'], known, '2026-11-02').ear!;
    expect(b.turn).toBe(a.turn + 1);
    expect(b.word.id).not.toBe(a.word.id);
  });
});
