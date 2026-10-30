import { describe, expect, it } from 'vitest';
import { allLessons, teachingLessons } from '../src/content/curriculum';
import { isMixLesson } from '../src/content/review';
import { ANY_LINE_REPLIES, buildLesson, chatOptions, forRetry, type Exercise } from '../src/lib/exercises';
import { createRng } from '../src/lib/random';

/**
 * Wrong options come from what the learner has seen: the lesson and the lessons before it. Only
 * where that runs out (the first lessons of the course) something still to come fills in, from
 * the nearest lessons. Found in a check "through the learner's eyes" (30 October 2026): l.payslip
 * showed the picture of "het vakantiegeld" (next lesson), l.hello, l.people and l.arrive offered
 * "Wacht even, ik vertaal het." (unit 3), a reply that could answer their questions too.
 */

/** The teaching lesson each word and chat line is taught in (its first one). */
const wordAt = new Map<string, number>();
const lineAt = new Map<string, number>();
teachingLessons.forEach((l, i) => {
  for (const w of l.words) if (!wordAt.has(w.id)) wordAt.set(w.id, i);
  for (const d of l.dialogues ?? []) for (const c of [d.prompt, d.reply]) if (!lineAt.has(c.id)) lineAt.set(c.id, i);
});

/** The last teaching lesson the learner has seen in this lesson (in a mixed review: the one before it). */
function seenUpTo(lessonId: string): number {
  const at = allLessons.findIndex((l) => l.id === lessonId);
  const last = allLessons.slice(0, at + 1).filter((l) => !isMixLesson(l)).pop();
  return teachingLessons.findIndex((l) => l.id === last?.id);
}

type Choice = Extract<Exercise, { options?: readonly { id: string }[] }>;
/** Wrong options of a question, with how many lessons after the seen ones they are taught (0: seen). */
function wrongOptions(ex: Exercise, upTo: number): { nl: string; ahead: number }[] {
  if (!('options' in ex) || !ex.options || ex.kind === 'situation') return [];
  const answer = ex.kind === 'chat' ? (ex.reverse ? ex.dialogue.prompt.id : ex.dialogue.reply.id) : (ex as { word: { id: string } }).word.id;
  return (ex as Choice).options!.filter((o) => o.id !== answer).map((o) => {
    const at = ex.kind === 'chat' ? lineAt.get(o.id)! : wordAt.get(o.id)!;
    return { nl: (o as { nl: string }).nl, ahead: Math.max(0, at - upTo) };
  });
}

const lessons = allLessons.filter((l) => !l.steps?.length && l.words.length);
const FIRST_CHATS = new Set(['l.hello', 'l.people', 'l.arrive', 'l.firstday.mix']);

describe('wrong options come from what the learner has seen', () => {
  it('every word, picture and chat of the course, first time and as a review (and its retry)', { timeout: 30000 }, () => {
    for (const lesson of lessons) {
      const upTo = seenUpTo(lesson.id);
      for (const seed of [1, 2, 3, 7, 42]) {
        for (const review of [false, true]) {
          const list = buildLesson(lesson, { review, seed });
          for (const [i, ex] of [...list, ...list.map((e, i) => forRetry(e, lesson, seed + i))].entries()) {
            const retry = i >= list.length;
            for (const o of wrongOptions(ex, upTo)) {
              const where = `${lesson.id} seed ${seed} ${review ? 'review' : 'first'} #${i} ${ex.kind}: ${o.nl}`;
              // Only the first chats of the course have too few replies seen; the nearest fill in.
              // A retry needs a wrong reply not offered before, so in the first lessons it can reach
              // a little further: within 7 lessons (as in g4r4Mix).
              if (ex.kind === 'chat' && retry) expect(o.ahead, where).toBeLessThanOrEqual(7);
              else if (ex.kind === 'chat' && FIRST_CHATS.has(lesson.id)) expect(o.ahead, where).toBeLessThanOrEqual(3);
              else expect(o.ahead, where).toBe(0);
            }
          }
        }
      }
    }
  });

  it('l.payslip: the picture choice never shows a word of the next lesson ("het vakantiegeld")', () => {
    const payslip = teachingLessons.find((l) => l.id === 'l.payslip')!;
    const next = new Set(teachingLessons[teachingLessons.indexOf(payslip) + 1].words.map((w) => w.id));
    for (let seed = 1; seed <= 40; seed++) {
      for (const ex of buildLesson(payslip, { review: false, seed })) {
        if (ex.kind === 'dutch') for (const o of ex.options) expect(next.has(o.id), `seed ${seed}: ${o.nl}`).toBe(false);
      }
    }
  });

  it('the first chats: the seen replies first, then the nearest one still to come', () => {
    const lesson = (id: string) => teachingLessons.find((l) => l.id === id)!;
    const wrong = (id: string, seed: number) => {
      const l = lesson(id);
      const d = l.dialogues![0];
      return chatOptions(d, createRng(seed), 3, l).filter((o) => o.id !== d.reply.id).map((o) => o.nl).sort();
    };
    for (let seed = 1; seed <= 20; seed++) {
      // "Hoe heet je?": "Tot morgen!" (seen), then l.understand ("Ik ben nieuw." starts like the answer).
      expect(wrong('l.people', seed)).toEqual(['Nee, nog een keer graag.', 'Tot morgen!']);
      // "Goedemorgen, waar komt u voor?": "Tot morgen!" (seen; "Ik heet Sara." starts like the answer), then the next lesson's.
      expect(wrong('l.arrive', seed)).toEqual(['Nee, nog een keer graag.', 'Tot morgen!']);
      // The very first chat: nothing seen yet, so the nearest lessons.
      expect(wrong('l.hello', seed)).toEqual(['Ik heet Sara.', 'Nee, nog een keer graag.']);
    }
  });
});

describe('a wrong chat reply is never a fair answer too', () => {
  it('replies that answer almost any line ("Wacht even, ik vertaal het.") are only the right reply of their own chat', () => {
    expect([...ANY_LINE_REPLIES].every((id) => lineAt.has(id))).toBe(true);
    for (const lesson of lessons) {
      for (const seed of [1, 2, 3]) {
        const list = buildLesson(lesson, { review: false, seed });
        for (const ex of [...list, ...list.map((e, i) => forRetry(e, lesson, seed + i))]) {
          if (ex.kind !== 'chat' || ex.reverse) continue;
          for (const o of ex.options) {
            if (o.id !== ex.dialogue.reply.id) expect(ANY_LINE_REPLIES.has(o.id), `${lesson.id}: ${ex.dialogue.prompt.nl} / ${o.nl}`).toBe(false);
          }
        }
      }
    }
  });
});
