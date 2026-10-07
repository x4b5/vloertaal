import { allLessons, allWords } from '../content/curriculum';
import type { Lesson, Sentence, Word } from '../content/types';
import { tokenize } from './answers';
import { createRng, sample, shuffle } from './random';

export type Exercise =
  | { kind: 'intro'; word: Word }
  | { kind: 'meaning'; word: Word; options: Word[] }
  | { kind: 'dutch'; word: Word; options: Word[] }
  | { kind: 'listen'; word: Word; options: Word[] }
  | { kind: 'match'; words: Word[] }
  | { kind: 'build'; sentence: Sentence; tiles: string[] }
  | { kind: 'type'; word: Word };

/** Intros only teach; every other exercise is graded. */
export function isGraded(ex: Exercise): boolean {
  return ex.kind !== 'intro';
}

function distractors(word: Word, lesson: Lesson, n: number, rng: () => number): Word[] {
  const clash = (w: Word) => w.id === word.id || w.nl === word.nl || w.en === word.en || w.emoji === word.emoji;
  const local = lesson.words.filter((w) => !clash(w));
  const picked = sample(local, n, rng);
  if (picked.length < n) {
    const ids = new Set(picked.map((w) => w.id));
    const rest = allWords.filter((w) => !clash(w) && !ids.has(w.id));
    picked.push(...sample(rest, n - picked.length, rng));
  }
  return picked;
}

function options(word: Word, lesson: Lesson, rng: () => number, n = 3): Word[] {
  return shuffle([word, ...distractors(word, lesson, n - 1, rng)], rng);
}

/** Word tiles for a sentence: the real words plus a few plausible extras. */
export function buildTiles(sentence: Sentence, lesson: Lesson, rng: () => number): string[] {
  const real = tokenize(sentence.nl);
  const realSet = new Set(real.map((t) => t.toLowerCase()));
  const pool = [
    ...lesson.sentences.filter((s) => s.id !== sentence.id).flatMap((s) => tokenize(s.nl)),
    ...lesson.words.flatMap((w) => tokenize(w.nl)),
  ].filter((t) => !realSet.has(t.toLowerCase()));
  const unique = [...new Map(pool.map((t) => [t.toLowerCase(), t])).values()];
  const extra = sample(unique, Math.min(3, Math.max(2, Math.ceil(real.length / 2))), rng);
  return shuffle([...real, ...extra], rng);
}

/**
 * Builds the exercise queue for a lesson.
 * First time: introduce each word, check it right away, then mix and apply.
 * Review: skip the intros and practise everything.
 */
export function buildLesson(lesson: Lesson, opts: { review: boolean; seed?: number }): Exercise[] {
  const rng = createRng(opts.seed ?? Date.now());
  const words = lesson.words;
  const out: Exercise[] = [];

  if (!opts.review) {
    words.forEach((word, i) => {
      out.push({ kind: 'intro', word });
      // After every second new word, quiz one of the two just learned.
      if (i % 2 === 1) {
        const target = words[i - Math.floor(rng() * 2)];
        out.push({ kind: 'meaning', word: target, options: options(target, lesson, rng) });
      }
    });
  } else {
    for (const word of sample(words, 3, rng)) {
      out.push({ kind: 'meaning', word, options: options(word, lesson, rng) });
    }
  }

  out.push({ kind: 'match', words: sample(words, Math.min(5, words.length), rng) });

  const [l1, l2, d1, t1] = shuffle(words, rng);
  out.push({ kind: 'listen', word: l1, options: options(l1, lesson, rng) });
  out.push({ kind: 'dutch', word: d1, options: options(d1, lesson, rng, 4) });

  for (const sentence of lesson.sentences) {
    out.push({ kind: 'build', sentence, tiles: buildTiles(sentence, lesson, rng) });
  }

  out.push({ kind: 'listen', word: l2, options: options(l2, lesson, rng) });
  out.push({ kind: 'type', word: t1 });
  return out;
}

/** Lessons unlock in order: a lesson is open when the previous one is done. */
export function isUnlocked(lessonId: string, completed: Record<string, unknown>): boolean {
  const index = allLessons.findIndex((l) => l.id === lessonId);
  if (index <= 0) return index === 0;
  return Boolean(completed[allLessons[index - 1].id]);
}
