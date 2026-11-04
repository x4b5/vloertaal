import { isMixLesson } from '../src/content/review';
import { mainLessons } from '../src/content/sectors';
import { buildLesson } from '../src/lib/exercises';
import { createRng } from '../src/lib/random';
import {
  addDays, addLessonSentences, addLessonWords, applyReview, dailyLesson, dailySentenceIds, dailySpeakIds, dailyWordIds,
  dayNumber, dueIds, isSentenceCard, reviewResults, speakCardId, DAILY_MAX, type Cards,
} from '../src/lib/spaced';

/**
 * A learner over weeks, with the app's own functions (lib/spaced.ts, buildLesson): the simulation
 * of the didactics review (3 November 2026), as a helper for tests/weakFirst.test.ts and
 * tests/writtenWrong.test.ts.
 *
 * The week plan (docs/weekplan.md): 3 sessions a week (Monday, Wednesday, Friday), each today's
 * review first and then a new lesson, every 4th session a mixed review instead (no new words).
 * The path of Logistiek. In a lesson 85% of the words and sentences are right; in the review 90%
 * of the recognition questions (meaning, picture, what you hear) and 70% of the dictations. No
 * forgetting is modelled: the chance to be right does not drop while a word waits (the numbers
 * show when words come back and how they move through the boxes, not how much stays).
 */
export interface SimOptions {
  /** The words of today's review (default: the app's dailyWordIds). */
  pick?: (cards: Cards, today: string) => string[];
  seed?: number;
  days?: number;
  /** Days of the week with a session (0 = the first day). */
  practiceDays?: readonly number[];
  /** Pass the words wrong only in writing to applyReview, as the lesson player does (LessonResult.written). */
  written?: boolean;
  /** "Eerst herhalen, dan nieuw" in its simplest form: with more than this many words still due
   *  after the review, a second review round takes the place of the new lesson. */
  reviewFirst?: number;
}

export interface SimResult {
  /** Days from a word's lesson to its first review. */
  firstBack: number[];
  /** Days from a word answered wrong in a review to the next review that asks it. */
  wrongBack: number[];
  /** The cards after the last day. */
  cards: Cards;
  /** Mistakes in a review on a word of box 3 or higher, and how many of them sent it back to box 1. */
  strongWrong: number;
  strongToBox1: number;
  /** Per review with a backlog and at least WEAK_PLACES weak words due: the share of weak words picked. */
  weakShare: number[];
}

/** The old pick (before 4 November 2026): the DAILY_MAX oldest due words, topped up to 4 with the next ones. */
export function oldestFirst(cards: Cards, today: string): string[] {
  const due = dueIds(cards, today).slice(0, DAILY_MAX);
  if (!due.length || due.length >= 4) return due;
  const soon = Object.entries(cards)
    .filter(([id, c]) => c.due > today && !isSentenceCard(id) && !id.startsWith('be.'))
    .sort(([, a], [, b]) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.box - b.box))
    .map(([id]) => id);
  return [...due, ...soon].slice(0, 4);
}

export function simulate(opts: SimOptions = {}): SimResult {
  const { pick = dailyWordIds, seed = 12345, days = 56, practiceDays = [0, 2, 4], written = true, reviewFirst } = opts;
  const rng = createRng(seed);
  const order = mainLessons('logistics', 'taal').filter((l) => !isMixLesson(l));
  const start = '2026-01-05';
  const gap = (from: string, to: string) => dayNumber(to) - dayNumber(from);
  let cards: Cards = {};
  let next = 0;
  let sessions = 0;
  const learned = new Map<string, string>();
  const wrong = new Map<string, string>();
  const res: SimResult = { firstBack: [], wrongBack: [], cards, strongWrong: 0, strongToBox1: 0, weakShare: [] };

  /** Today's review (round 0, or a second round): the answers drawn, the cards moved. */
  const review = (d: number, today: string, round: number) => {
    const words = pick(cards, today);
    const ids = words.length ? [...words, ...dailySentenceIds(cards, today), ...dailySpeakIds(cards, today)] : [];
    if (!ids.length) return;
    const due = dueIds(cards, today);
    const weakDue = due.filter((id) => cards[id].box <= 2).length;
    if (due.length > DAILY_MAX && weakDue >= DAILY_MAX / 2) res.weakShare.push(words.filter((id) => cards[id].box <= 2).length / words.length);
    for (const id of ids) {
      if (learned.has(id)) { res.firstBack.push(gap(learned.get(id)!, today)); learned.delete(id); }
      if (wrong.has(id)) { res.wrongBack.push(gap(wrong.get(id)!, today)); wrong.delete(id); }
    }
    const results: Record<string, boolean> = {};
    const made: string[] = [];
    const typedWrong = new Set<string>();
    const otherWrong = new Set<string>();
    for (const e of buildLesson(dailyLesson(ids, cards, today), { review: true, seed: d * 7 + round, speak: true })) {
      if (e.kind === 'meaning' || e.kind === 'dutch' || e.kind === 'listen' || e.kind === 'type') {
        // The ear training (two pictures by ear) asks a word that is not one of today's cards.
        if (e.kind === 'dutch' && e.ear !== undefined) continue;
        const ok = rng() < (e.kind === 'type' ? 0.7 : 0.9);
        results[e.word.id] = (results[e.word.id] ?? true) && ok;
        if (ok && e.kind === 'type') made.push(e.word.id);
        if (!ok) (e.kind === 'type' ? typedWrong : otherWrong).add(e.word.id);
      } else if (e.kind === 'build') {
        const ok = rng() < 0.9;
        results[e.sentence.id] = ok;
        if (ok) made.push(e.sentence.id);
      } else if (e.kind === 'speak' && !e.turn) {
        results[speakCardId(e.item.id)] = true;
        made.push(speakCardId(e.item.id));
      }
    }
    const own = reviewResults(results, ids);
    const before = cards;
    cards = applyReview(cards, own, today, made, undefined, written ? [...typedWrong].filter((id) => !otherWrong.has(id)) : undefined);
    for (const [id, ok] of Object.entries(own)) {
      if (ok || isSentenceCard(id)) continue;
      wrong.set(id, today);
      if ((before[id]?.box ?? 1) >= 3) {
        res.strongWrong++;
        if (cards[id].box === 1) res.strongToBox1++;
      }
    }
  };

  for (let d = 0; d < days; d++) {
    if (!practiceDays.includes(d % 7)) continue;
    const today = addDays(start, d);
    review(d, today, 0);
    const extra = reviewFirst !== undefined && dueIds(cards, today).length > reviewFirst;
    if (extra) review(d, today, 1);
    sessions++;
    if (extra || sessions % 4 === 0 || next >= order.length) continue;
    const lesson = order[next++];
    const results: Record<string, boolean> = {};
    for (const w of lesson.words) {
      results[w.id] = rng() < 0.85;
      if (!cards[w.id]) learned.set(w.id, today);
    }
    for (const s of lesson.sentences) results[s.id] = rng() < 0.85;
    results[speakCardId(lesson.sentences[0].id)] = true;
    cards = addLessonSentences(addLessonWords(cards, lesson.words, results, today), lesson.sentences, results, today);
  }
  res.cards = cards;
  return res;
}

export const median = (xs: readonly number[]): number => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length ? s[Math.floor((s.length - 1) / 2)] : NaN;
};

export const mean = (xs: readonly number[]): number => xs.reduce((a, b) => a + b, 0) / xs.length;

/** Word cards (no sentence cards) in box 4 or higher. */
export const strongWords = (cards: Cards): number => Object.entries(cards).filter(([id, c]) => !isSentenceCard(id) && c.box >= 4).length;
