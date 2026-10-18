import { describe, expect, it } from 'vitest';
import { allLessons, teachingLessons, units } from '../src/content/curriculum';
import { buildLesson, chatOptions, forRetry, isGraded, MIX_MAX_BUILDS, REVIEW_KIND_SHARE, similarLength, type Exercise } from '../src/lib/exercises';
import { createRng } from '../src/lib/random';
import { dailyLesson, DAILY_ID } from '../src/lib/spaced';

type Chat = Extract<Exercise, { kind: 'chat' }>;
const lessonOfReply = (id: string) => teachingLessons.findIndex((l) => l.dialogues?.some((d) => d.reply.id === id));
const unitOf = (lessonId: string) => units.find((u) => u.lessons.some((l) => l.id === lessonId))?.id;

describe('chat replies stay at the learner\'s level', () => {
  /** A wrong reply is fair when it is taught already, of the same unit, or from a lesson close by. */
  const near = (replyId: string, at: number, lessonId: string) => {
    const from = lessonOfReply(replyId);
    // Within 7 lessons: since l.arrive (18 October 2026) Protective gear is 7 lessons after Say hello.
    return from <= at || unitOf(teachingLessons[from].id) === unitOf(lessonId) || Math.abs(from - at) <= 7;
  };

  it('lesson 1.1 offers short replies of its own unit and the next lessons (no far-off long lines)', () => {
    const hello = teachingLessons[0];
    const d = hello.dialogues![0];
    for (let seed = 1; seed <= 30; seed++) {
      const opts = chatOptions(d, createRng(seed), 3, hello);
      const wrong = opts.filter((o) => o.id !== d.reply.id);
      expect(wrong).toHaveLength(2);
      for (const w of wrong) {
        // Lessons 1.1 to 4.1 (Protective gear) at most: the first chats of the course.
        expect(lessonOfReply(w.id), `${seed}: ${w.nl}`).toBeLessThanOrEqual(7);
        expect(w.nl.length, `${seed}: ${w.nl}`).toBeLessThanOrEqual(25);
        expect(w.nl).not.toBe('Die geef ik niet. Ik hang op.');
      }
      // Its own unit's other reply ("Ik heet Sara.") comes first.
      expect(wrong.some((w) => unitOf(teachingLessons[lessonOfReply(w.id)].id) === 'u.firstday'), `${seed}`).toBe(true);
    }
  });

  it('every lesson: wrong replies are taught, of the unit, or from a lesson close by; never the same meaning', () => {
    for (const [at, lesson] of teachingLessons.entries()) {
      for (const d of lesson.dialogues ?? []) {
        for (let seed = 1; seed <= 6; seed++) {
          const opts = chatOptions(d, createRng(seed), 3, lesson);
          expect(opts.filter((o) => o.id === d.reply.id)).toHaveLength(1);
          for (const w of opts.filter((o) => o.id !== d.reply.id)) {
            expect(near(w.id, at, lesson.id), `${lesson.id}: ${w.nl}`).toBe(true);
            expect(w.en.toLowerCase().replace(/[^a-z ]/g, ''), `${lesson.id}: ${w.nl}`).not.toBe(d.reply.en.toLowerCase().replace(/[^a-z ]/g, ''));
          }
        }
      }
    }
  });

  it('prefers replies about as long as the right one where the level has them', () => {
    let similar = 0, all = 0;
    for (const lesson of teachingLessons) {
      for (const d of lesson.dialogues ?? []) {
        for (const w of chatOptions(d, createRng(3), 3, lesson).filter((o) => o.id !== d.reply.id)) {
          all++;
          if (similarLength(w.nl, d.reply.nl)) similar++;
        }
      }
    }
    expect(similar / all).toBeGreaterThan(0.85);
  });

  it('a retry of a chat brings a new wrong reply from the same level (lesson 1.1 and today\'s review)', () => {
    const hello = teachingLessons[0];
    for (let seed = 1; seed <= 12; seed++) {
      const ex = buildLesson(hello, { review: false, seed }).find((e): e is Chat => e.kind === 'chat')!;
      const again = forRetry(ex, hello, seed + 9) as Chat;
      expect(again.options.map((o) => o.id)).toContain(ex.dialogue.reply.id);
      for (const w of again.options.filter((o) => o.id !== ex.dialogue.reply.id)) expect(lessonOfReply(w.id), w.nl).toBeLessThanOrEqual(7);
      expect(again.options.some((o) => !ex.options.some((x) => x.id === o.id)), `seed ${seed}`).toBe(true);
    }
    const words = teachingLessons.slice(0, 2).flatMap((l) => l.words).slice(0, 8);
    const daily = dailyLesson(words.map((w) => w.id));
    for (let seed = 1; seed <= 6; seed++) {
      const ex = buildLesson(daily, { review: true, seed }).find((e): e is Chat => e.kind === 'chat')!;
      const from = lessonOfReply(ex.dialogue.reply.id);
      for (const w of [...ex.options, ...(forRetry(ex, daily, seed) as Chat).options]) expect(Math.abs(lessonOfReply(w.id) - from), w.nl).toBeLessThanOrEqual(6);
    }
  });
});

describe('reviews mix their questions evenly', () => {
  const tally = (list: Exercise[]) => {
    const m: Record<string, number> = {};
    for (const e of list.filter(isGraded)) m[e.kind] = (m[e.kind] ?? 0) + 1;
    return m;
  };
  const cap = (list: Exercise[]) => Math.max(2, Math.floor(list.filter(isGraded).length * REVIEW_KIND_SHARE));

  it("today's review: no kind above ~30%, one build and one chat, the same for the same seed", () => {
    const words = teachingLessons.slice(0, 5).flatMap((l) => l.words.slice(0, 2)).slice(0, 10);
    // Every word new (box 1), half of them known (box 3): the r3 case had 4 of 13 picture cards.
    for (const boxes of [() => 1, (i: number) => (i % 2 ? 3 : 1), (i: number) => (i < 3 ? 2 : 1)]) {
      const cards = Object.fromEntries(words.map((w, i) => [w.id, { box: boxes(i), due: '2026-01-01' }]));
      const lesson = dailyLesson(words.map((w) => w.id), cards);
      expect(lesson.id).toBe(DAILY_ID);
      for (const nonLatin of [false, true]) {
        for (let seed = 1; seed <= 8; seed++) {
          const list = buildLesson(lesson, { review: true, seed, nonLatin });
          const t = tally(list);
          for (const [kind, n] of Object.entries(t)) expect(n, `${kind} seed ${seed} ${JSON.stringify(t)}`).toBeLessThanOrEqual(cap(list));
          expect(t.build ?? 0).toBeLessThanOrEqual(1);
          expect(t.chat ?? 0).toBeLessThanOrEqual(1);
          expect(buildLesson(lesson, { review: true, seed, nonLatin })).toEqual(list);
        }
      }
    }
  });

  it('a mixed review: at most 2 builds and no kind above ~30%', () => {
    for (const lesson of allLessons.filter((l) => l.id.endsWith('.mix'))) {
      for (let seed = 1; seed <= 4; seed++) {
        const list = buildLesson(lesson, { review: false, seed });
        const t = tally(list);
        expect(t.build ?? 0, lesson.id).toBeLessThanOrEqual(MIX_MAX_BUILDS);
        for (const [kind, n] of Object.entries(t)) expect(n, `${lesson.id} ${kind} ${JSON.stringify(t)}`).toBeLessThanOrEqual(cap(list));
        expect(buildLesson(lesson, { review: false, seed })).toEqual(list);
      }
    }
  });
});
