import type { CultureTip, SituationAsk } from '../culture';
import type { Lesson, Unit } from '../types';

/**
 * Small helpers for a Belgian C unit, as in src/content/work.ts, with the "be." ids: lesson slug
 * "x" gives be.l.x, be.s.x.1-3, be.c.x.q/a, and the tip be.c.x (options be.c.x.o1-3, the first is
 * the best one; shuffled when shown). Word ids are be.w.<id>.
 */

/** A word: id, Dutch, English, emoji, and `false` for an abstract word (no picture). */
export type BeWordRow = [id: string, nl: string, en: string, emoji: string, picture?: false];
type Pair = [nl: string, en: string];
/** A sentence; `alt`: other word orders that are also right when building it. */
type SentenceRow = [nl: string, en: string, alt?: string[]];

export const beLesson = (slug: string, title: string, words: BeWordRow[], sentences: SentenceRow[], [q, a]: [Pair, Pair]): Lesson => ({
  id: `be.l.${slug}`,
  title,
  words: words.map(([id, nl, en, emoji, picture]) => ({ id: `be.w.${id}`, nl, en, emoji, ...(picture === false ? { picture } : {}) })),
  sentences: sentences.map(([nl, en, alt], i) => ({ id: `be.s.${slug}.${i + 1}`, nl, en, ...(alt ? { alt } : {}) })),
  dialogues: [{ prompt: { id: `be.c.${slug}.q`, nl: q[0], en: q[1] }, reply: { id: `be.c.${slug}.a`, nl: a[0], en: a[1] } }],
});

export const beUnit = (slug: string, title: string, titleNl: string, emoji: string, color: string, lessons: Lesson[]): Unit => ({
  id: `be.u.${slug}`,
  title,
  titleNl,
  emoji,
  color,
  lessons,
});

/**
 * A tip, with the "be." ids. `lessonId`: the lesson it belongs to ("be.l.council" in a C unit, the
 * Dutch "l.payslip" for a B change). `nl`: the Dutch quoted in the situation (a speaker plays it).
 */
export function beTip(t: {
  slug: string;
  lessonId: string;
  emoji: string;
  title: string;
  body: string;
  phrase: Pair;
  situation: string;
  ask?: SituationAsk;
  nl?: string;
  options: [best: string, worse: string, worse2: string];
  why: string;
}): CultureTip {
  const id = `be.c.${t.slug}`;
  return {
    id,
    lessonId: t.lessonId,
    emoji: t.emoji,
    title: t.title,
    body: t.body,
    phrase: { id: `${id}.p`, nl: t.phrase[0], en: t.phrase[1] },
    situation: { id: `${id}.s`, en: t.situation, ...(t.nl ? { nl: t.nl } : {}), ...(t.ask ? { ask: t.ask } : {}) },
    options: t.options.map((o, i) => ({ id: `${id}.o${i + 1}`, en: o, best: i === 0 })),
    why: { id: `${id}.w`, en: t.why },
  };
}
