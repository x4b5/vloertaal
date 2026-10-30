import { describe, expect, it } from 'vitest';
import { teachingLessons } from '../src/content/curriculum';
import { buildLesson, type Exercise } from '../src/lib/exercises';
import { addDays, dailyCard, dailyLesson, dailyWordIds, dueIds, type Cards } from '../src/lib/spaced';

/**
 * The language track's "Herhaal vandaag" stays exactly as it was when the work-rules track got
 * its own review (M4): a fixed progress (cards) and a fixed seed give the same review, item for
 * item. The snapshot was taken before the rules review was added. Updated on purpose (17
 * October 2026): the chat's lesson turns differently (src/lib/spaced.ts dailyLesson), only the chat
 * changed; then the sentences turn 4/3 a day instead of 1/2 (l.agency): the two sentences changed,
 * and with the other sentence to build, the chat's wrong options too. The words are the same.
 * Then, of equally weak lessons the otherwise strongest gives the chat (l.task): only the chat changed.
 * Then (18 October 2026) the sentences turn a whole turn a day again (l.arrive, l.notyet): on this
 * day it picks the same sentences, so nothing changed.
 * Then (30 October 2026) the tip of a source lesson comes back as a situation question (after the
 * words, before the match board): one item more, and with the random numbers it takes, the match
 * board has other words and the chat's options another order. The words asked, the sentence and
 * the chat are the same.
 */

const TODAY = '2026-10-15';

/** A learner six lessons in: cards in different boxes, some due, some later. The six lessons by
 *  name, as they were the first six (l.arrive came in as the third, 18 October 2026). */
const FIRST_SIX = ['l.hello', 'l.people', 'l.understand', 'l.translate', 'l.understood', 'l.keeplearning'];
function fixedCards(): Cards {
  const cards: Cards = {};
  FIRST_SIX.map((id) => teachingLessons.find((l) => l.id === id)!).forEach((l, li) => {
    l.words.forEach((w, wi) => {
      const box = 1 + ((li + wi) % 4);
      const offset = ((li * 3 + wi) % 5) - 2; // -2 … +2 days from today
      cards[w.id] = { box, due: addDays(TODAY, offset) };
    });
  });
  return cards;
}

/** An exercise in a few words: its kind and what it asks (enough to see any change). */
function brief(e: Exercise): string {
  const r = e as unknown as Record<string, unknown> & { word?: { id: string }; sentence?: { id: string }; dialogue?: { prompt: { id: string } }; words?: { id: string }[]; options?: { id?: string }[]; reverse?: boolean };
  const what = r.word?.id ?? r.sentence?.id ?? r.dialogue?.prompt.id ?? r.words?.map((w) => w.id).join('+') ?? '';
  const opts = r.options?.map((o) => o.id ?? '?').join(',');
  return [e.kind, what, opts ? `[${opts}]` : '', r.reverse ? 'reverse' : ''].filter(Boolean).join(' ');
}

describe("the language track's daily review is unchanged", () => {
  it('picks the same words, builds the same lesson and the same exercises (fixed seed)', () => {
    const cards = fixedCards();
    const ids = dailyWordIds(cards, TODAY);
    const lesson = dailyLesson(ids, cards, TODAY);
    const run = (quiet: boolean) => buildLesson(lesson, { review: true, seed: 42, quiet }).map(brief);
    expect({
      due: dueIds(cards, TODAY),
      ids,
      card: dailyCard(cards, TODAY),
      lesson: {
        id: lesson.id,
        title: lesson.title,
        words: lesson.words.map((w) => w.id),
        sentences: lesson.sentences.map((s) => s.id),
        dialogues: (lesson.dialogues ?? []).map((d) => d.prompt.id),
        boxes: lesson.boxes,
        repeat: lesson.repeat,
        tipFrom: lesson.tipFrom?.slice(0, 3),
      },
      exercises: run(false),
      quiet: run(true),
    }).toMatchSnapshot();
  });
});

describe('the number on the review card', () => {
  it('is the number the review asks, also when a short review is topped up', () => {
    const words = teachingLessons.find((l) => l.id === 'l.hello')!.words;
    const cards: Cards = {};
    words.forEach((w, i) => { cards[w.id] = { box: 2, due: addDays(TODAY, i < 2 ? 0 : 3) }; });
    expect(dueIds(cards, TODAY)).toHaveLength(2);
    expect(dailyCard(cards, TODAY)?.due).toBe(dailyWordIds(cards, TODAY).length);
    expect(dailyWordIds(cards, TODAY).length).toBeGreaterThan(2);
  });
});
