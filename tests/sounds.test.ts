import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { soundLessons } from '../src/content/sounds';
import { themeOf } from '../src/content/themes';
import { buildLesson } from '../src/lib/exercises';
import { routeOrder } from '../src/lib/route';

const words = soundLessons.flatMap((l) => l.words);
const byId = new Map(words.map((w) => [w.id, w]));

describe('Klanken (src/content/sounds.ts)', () => {
  it('is in the theme Starten, and in the path right after "Tijd en rooster" (Safety stays early)', () => {
    expect(themeOf('u.sounds')?.id).toBe('theme.start');
    const order = routeOrder(undefined).map((u) => u.id);
    expect(order[order.indexOf('u.time') + 1]).toBe('u.sounds');
    expect(order.indexOf('u.safety')).toBeLessThan(order.indexOf('u.sounds'));
    expect(units.find((u) => u.id === 'u.sounds')?.lessons.map((l) => l.id)).toEqual([...soundLessons.map((l) => l.id), 'l.sounds.mix']);
  });

  it('teaches word pairs: every word has a partner in its lesson, and they point at each other', () => {
    for (const l of soundLessons) {
      expect(l.words).toHaveLength(6);
      for (const w of l.words) {
        const p = byId.get(w.pair ?? '');
        expect(p, w.id).toBeDefined();
        expect(p!.pair, w.id).toBe(w.id);
        expect(l.words.includes(p!), w.id).toBe(true);
        expect(p!.nl, w.id).not.toBe(w.nl);
        expect(p!.en, w.id).not.toBe(w.en);
        expect(w.picture, w.id).toBeUndefined();
      }
    }
  });

  it('always offers the partner in a choice about a word, so the difference must be heard', () => {
    let asked = 0;
    for (const l of soundLessons) {
      for (const seed of [1, 2, 3, 4, 5]) {
        for (const quiet of [false, true]) {
          for (const e of buildLesson(l, { review: false, seed, quiet })) {
            if (e.kind !== 'listen' && e.kind !== 'meaning' && e.kind !== 'dutch') continue;
            if (!e.word.pair) continue;
            asked++;
            const ids = e.options.map((o) => o.id);
            expect(ids, `${l.id} ${e.kind} ${e.word.id}`).toContain(e.word.pair);
            expect(ids, `${l.id} ${e.kind} ${e.word.id}`).toContain(e.word.id);
            expect(new Set(ids).size).toBe(ids.length);
          }
        }
      }
    }
    expect(asked).toBeGreaterThan(40);
  });
});
