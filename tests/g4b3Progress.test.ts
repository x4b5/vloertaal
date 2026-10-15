import { describe, expect, it } from 'vitest';
import { allDialogues, allLessons, units } from '../src/content/curriculum';
import { isMixLesson } from '../src/content/review';
import { buildLesson, PROGRESSION, unitIndexOf, type Exercise } from '../src/lib/exercises';

/** G4 b3: later units are not the same 23-step template again. */
const teaching = units.flatMap((u, at) => u.lessons.filter((l) => !isMixLesson(l)).map((l, k) => ({ l, at, k })));
const kinds = (xs: Exercise[]) => xs.map((e) => `${e.kind}${e.kind === 'build' && e.audio ? ':ear' : ''}${e.kind === 'chat' && e.reverse ? ':rev' : ''}${e.kind === 'dutch' && e.textOnly ? ':txt' : ''}`).join(' ');

describe('progression through the course', () => {
  it('the last quiz after the new words asks for the Dutch word from the fifth unit on', () => {
    for (const { l, at } of teaching) {
      const ex = buildLesson(l, { review: false, seed: 5 });
      const quiz = ex.slice(0, ex.findIndex((e) => e.kind === 'tip' || e.kind === 'match')).filter((e) => e.kind !== 'intro');
      const last = quiz[quiz.length - 1];
      if (at >= PROGRESSION.pickDutch) {
        expect(last.kind, l.id).toBe('dutch');
        if (last.kind !== 'dutch') continue;
        expect(last.textOnly).toBe(true);
        expect(last.options.filter((o) => o.id === last.word.id)).toHaveLength(1);
        expect(last.options.length).toBeLessThanOrEqual(3);
        // Only words met by then: the lesson's (all introduced) or earlier lessons'.
        expect(quiz.slice(0, -1).every((e) => e.kind === 'meaning')).toBe(true);
      } else {
        expect(quiz.every((e) => e.kind === 'meaning'), l.id).toBe(true);
      }
    }
  });

  it('a reader of another script without sound gets "what does it mean" instead (no unheard Latin cards)', () => {
    for (const { l, at } of teaching.filter(({ at }) => at >= PROGRESSION.pickDutch)) {
      const ex = buildLesson(l, { review: false, seed: 5, quiet: true, nonLatin: true });
      const quiz = ex.slice(0, ex.findIndex((e) => e.kind === 'tip' || e.kind === 'match')).filter((e) => e.kind !== 'intro');
      expect(quiz.every((e) => e.kind === 'meaning'), `${l.id} ${at}`).toBe(true);
    }
  });

  it('one sentence is built by ear from the eighth unit on, never without sound', () => {
    for (const { l, at } of teaching) {
      for (const seed of [1, 9]) {
        const loud = buildLesson(l, { review: false, seed });
        const ear = loud.filter((e) => e.kind === 'build' && e.audio);
        expect(ear, l.id).toHaveLength(at >= PROGRESSION.audioBuild ? 1 : 0);
        expect(buildLesson(l, { review: false, seed, quiet: true }).some((e) => e.kind === 'build' && e.audio)).toBe(false);
        // It is not the first sentence: the learner builds with the meaning first.
        if (ear.length) expect(loud.filter((e) => e.kind === 'build')[0]).not.toBe(ear[0]);
      }
    }
  });

  it('later units ask one chat the other way round, with only one question that fits', () => {
    let seen = 0;
    for (const lesson of allLessons) {
      const at = unitIndexOf(lesson);
      const ex = buildLesson(lesson, { review: false, seed: 3 });
      const rev = ex.filter((e): e is Extract<Exercise, { kind: 'chat' }> => e.kind === 'chat' && Boolean(e.reverse));
      if (at < PROGRESSION.reverseChat) { expect(rev, lesson.id).toHaveLength(0); continue; }
      const unit = units[at];
      const first = unit.lessons[0].id === lesson.id;
      expect(rev, lesson.id).toHaveLength(first ? 0 : 1);
      for (const c of rev) {
        seen++;
        expect(c.options.length).toBeGreaterThanOrEqual(2);
        expect(c.options.length).toBeLessThanOrEqual(3);
        expect(c.options.filter((o) => o.id === c.dialogue.prompt.id)).toHaveLength(1);
        // The chat is one the learner met: the lesson before in the unit, or the mixed review's own.
        const k = unit.lessons.findIndex((l) => l.id === lesson.id);
        const met = [...(lesson.dialogues ?? []), ...(unit.lessons[k - 1]?.dialogues ?? [])];
        expect(met).toContain(c.dialogue);
        // A wrong question's own reply starts another way than the given reply.
        const start = (s: string) => s.split(/[\s,.!?]+/)[0].toLowerCase();
        for (const o of c.options.filter((o) => o.id !== c.dialogue.prompt.id)) {
          const d = allDialogues.find((x) => x.prompt.id === o.id)!;
          expect(start(d.reply.nl), `${lesson.id}: ${o.nl}`).not.toBe(start(c.dialogue.reply.nl));
          expect(start(o.nl)).not.toBe(start(c.dialogue.prompt.nl));
        }
      }
    }
    expect(seen).toBeGreaterThan(20);
  });

  it('a unit-first lesson never asks its own chat backwards right after it', () => {
    for (const { l, k } of teaching.filter(({ at }) => at >= PROGRESSION.reverseChat)) {
      const ex = buildLesson(l, { review: false, seed: 2 });
      const rev = ex.find((e) => e.kind === 'chat' && e.reverse);
      if (k === 0) expect(rev, l.id).toBeUndefined();
      if (rev && rev.kind === 'chat') expect(l.dialogues).not.toContain(rev.dialogue);
    }
  });

  it('the lessons are no longer one template: early and late lessons differ', () => {
    const shapes = new Set(teaching.map(({ l }) => kinds(buildLesson(l, { review: false, seed: 1 })).replace(/:\w+/g, (m) => m)));
    expect(shapes.size).toBeGreaterThanOrEqual(4);
    // And never more than three answers to tap (the "at most 3" rule).
    for (const lesson of allLessons) {
      for (const e of buildLesson(lesson, { review: false, seed: 4 })) if ('options' in e && e.options) expect(e.options.length).toBeLessThanOrEqual(3);
    }
  });
});
