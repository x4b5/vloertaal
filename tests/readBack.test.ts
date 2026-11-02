import { describe, expect, it } from 'vitest';
import { buildLesson, buildRuleLesson, isReadPage, readBackAt, type Exercise } from '../src/lib/exercises';
import { toCourseUnits } from '../src/content/regels/course';
import { rulesUnits } from '../src/content/regels';
import { courseUnits } from '../src/content/courses';

/** Read it again: a question in parts on more pages has a way back (owner's request, 2 November 2026). */
describe('readBackAt', () => {
  const lessons = courseUnits('taal').flatMap((u) => u.lessons);

  it('a tip: from "Zeg het zo" back to "Zo werkt het hier", not from the exercise after it', () => {
    let seen = 0;
    for (const lesson of lessons) {
      const q = buildLesson(lesson, { review: false, seed: 1 });
      q.forEach((e, i) => {
        if (e.kind === 'tip' && e.part === 'say') {
          expect(readBackAt(q, i, q.length)).toBe(i - 1);
          if (q[i + 1]) expect(readBackAt(q, i + 1, q.length)).toBeNull();
          seen += 1;
        }
      });
    }
    expect(seen).toBeGreaterThan(10);
  });

  it('a saying: from its question back to the saying', () => {
    const lesson = lessons.find((l) => buildLesson(l, { review: false, seed: 1, sayings: true }).some((e) => e.kind === 'saying'));
    expect(lesson).toBeDefined();
    const q = buildLesson(lesson!, { review: false, seed: 1, sayings: true });
    const at = q.findIndex((e) => e.kind === 'saying');
    expect(q[at + 1].kind).toBe('situation');
    expect(readBackAt(q, at + 1, q.length)).toBe(at);
  });

  it('Werkregels: from the step after a story or a rule card, never after a question', () => {
    const all = toCourseUnits(rulesUnits).flatMap((u) => u.lessons);
    expect(all.length).toBeGreaterThan(20);
    let backs = 0;
    for (const lesson of all) {
      const q = buildRuleLesson(lesson, { seed: 1 }) as Exercise[];
      q.forEach((e, i) => {
        const want = i > 0 && isReadPage(q[i - 1]) ? i - 1 : null;
        expect(readBackAt(q, i, q.length)).toBe(want);
        if (want !== null) backs += 1;
      });
    }
    expect(backs).toBeGreaterThan(20);
  });

  it('not on the first page, and not for a mistake coming back at the end', () => {
    const q = buildLesson(lessons[0], { review: false, seed: 1 });
    expect(readBackAt(q, 0, q.length)).toBeNull();
    const tipSay = q.findIndex((e) => e.kind === 'tip' && e.part === 'say');
    if (tipSay > 0) expect(readBackAt(q, tipSay, tipSay)).toBeNull();
  });
});
