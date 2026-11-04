import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { Route } from '../src/components/Route';
import { registerRulesCourse } from '../src/content/courses';
import { toCourseUnits } from '../src/content/regels/course';
import { isMixLesson } from '../src/content/review';
import { mainLessons } from '../src/content/sectors';
import { RULES_STUB } from '../src/dev/rulesStub';
import { registerPack, ui } from '../src/i18n';
import { getHelpLanguage } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { uiEn } from '../src/i18n/types';
import { REVIEW_FIRST_ABOVE, reviewFirst } from '../src/lib/pace';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { createRng } from '../src/lib/random';
import {
  DAILY_MAX, addDays, addLessonSentences, addLessonWords, applyReview, dailyCard, dailyIds, dayNumber, dueIds,
  isSentenceCard, isSpeakCard, reviewResults, speakCardId, type Cards, type DailyCard,
} from '../src/lib/spaced';
import { setRulesTrack } from '../src/lib/track';

/**
 * "Eerst herhalen, dan pas iets nieuws" (src/lib/pace.ts reviewFirst; verbeterplan fase 2, V1).
 * The simulation of the evaluation (scratchpad/evaluatie/didactiek/scripts/sim.ts) with the app's
 * own functions: the weekplan's 3 sessions a week (Monday, Wednesday, Friday), every 4th session a
 * mixed review instead of a new lesson, 90% right in reviews and 85% in lessons. Each session
 * starts with today's review; then the home's choice: with reviewFirst the learner takes its
 * first choice, "Extra ronde", instead of the new lesson. Simpler than sim.ts: every word of a
 * review gets one answer (no buildLesson), and about half of the right words were written (made).
 */
interface Run {
  words: number;
  /** Words due the day after the last session. */
  dueAfter: number;
  /** Days from a new word's lesson to its first review (median). */
  firstBack: number;
  /** Days from a wrong answer to the word's next review (median). */
  wrongBack: number;
  /** Words in box 4 or higher at the end. */
  strong: number;
  extraRounds: number;
  /** The most words due right after a session's review, over the last 4 weeks. */
  peakAfterReview: number;
}

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length ? s[Math.floor((s.length - 1) / 2)] : NaN;
};

function simulate(gate: boolean, weeks = 8, seed = 12345): Run {
  const rng = createRng(seed);
  const order = mainLessons('logistics', 'taal').filter((l) => !isMixLesson(l));
  const start = '2026-01-05'; // a Monday
  const practice = [0, 2, 4];
  let cards: Cards = {};
  let next = 0;
  let sessions = 0;
  let extraRounds = 0;
  let peakAfterReview = 0;
  const learned = new Map<string, string>();
  const failed = new Map<string, string>();
  const firstBack: number[] = [];
  const wrongBack: number[] = [];
  const days = (a: string, b: string) => dayNumber(b) - dayNumber(a);
  let last = start;

  const review = (today: string) => {
    const ids = dailyIds(cards, today);
    if (!ids.length) return;
    const results: Record<string, boolean> = {};
    const made: string[] = [];
    for (const id of ids) {
      if (learned.has(id)) { firstBack.push(days(learned.get(id)!, today)); learned.delete(id); }
      if (failed.has(id)) { wrongBack.push(days(failed.get(id)!, today)); failed.delete(id); }
      const right = isSpeakCard(id) || rng() < 0.9;
      results[id] = right;
      if (right && (isSentenceCard(id) || rng() < 0.5)) made.push(id);
    }
    const own = reviewResults(results, ids);
    for (const [id, ok] of Object.entries(own)) if (!ok) failed.set(id, today);
    cards = applyReview(cards, own, today, made);
  };

  for (let d = 0; d < weeks * 7; d++) {
    if (!practice.includes(d % 7)) continue;
    const today = addDays(start, d);
    last = today;
    sessions++;
    review(today);
    // The home after today's review (App.tsx: reviewDay is today now).
    const card = dailyCard(cards, today, today, 'taal');
    if (d >= (weeks - 4) * 7) peakAfterReview = Math.max(peakAfterReview, card?.extra ?? 0);
    if (gate && reviewFirst(card, 'taal')) {
      review(today);
      extraRounds++;
      continue;
    }
    if (sessions % 4 === 0 || next >= order.length) continue;
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
  const words = Object.entries(cards).filter(([id]) => !isSentenceCard(id));
  return {
    words: words.length,
    dueAfter: dueIds(cards, addDays(last, 1)).length,
    firstBack: median(firstBack),
    wrongBack: median(wrongBack),
    strong: words.filter(([, c]) => c.box >= 4).length,
    extraRounds,
    peakAfterReview,
  };
}

describe('review first, then something new (3 sessions a week)', () => {
  const without = simulate(false);
  const withGate = simulate(true);

  // (4 November 2026, seed 12345: without it 108 words, 90 due, a new word first back after 7
  // days and a wrong one after 7; with it 60 words, 13 due, both back after 2 days, 40 words in
  // box 4 or higher against 21, 12 extra rounds. The evaluation's sim.ts: 97 of 108 due, 7 and 10
  // days; with the gate 21 of 60 due, 2 and 3 days.) Only the pile is asserted for the run without:
  // the order within a review (src/lib/spaced.ts dueIds) may change, the pile grows either way (3
  // reviews of 10 a week cannot keep up with 2 or 3 lessons of 6 new words that each need about 4
  // reviews in their first two weeks).
  it('without it, the pile of words grows: most words are overdue after 8 weeks', () => {
    expect(without.dueAfter / without.words).toBeGreaterThan(0.6);
    expect(without.peakAfterReview).toBeGreaterThan(REVIEW_FIRST_ABOVE + 2 * DAILY_MAX);
  });

  it('with it, the pile stays small and words come back in time', () => {
    expect(withGate.extraRounds).toBeGreaterThan(0);
    // After a session's review never much more than the threshold plus a lesson waits.
    expect(withGate.peakAfterReview).toBeLessThanOrEqual(REVIEW_FIRST_ABOVE + 2 * DAILY_MAX);
    expect(withGate.dueAfter / withGate.words).toBeLessThan(0.5);
    // A new word comes back at the next session or the one after; a wrong one too.
    expect(withGate.firstBack).toBeLessThanOrEqual(3);
    expect(withGate.wrongBack).toBeLessThanOrEqual(4);
    expect(withGate.firstBack).toBeLessThanOrEqual(without.firstBack);
    expect(withGate.wrongBack).toBeLessThanOrEqual(without.wrongBack);
  });

  it('costs new words, but more of them stay', () => {
    // Fewer words met (the price: about 45% fewer in the evaluation) ...
    expect(withGate.words).toBeLessThan(without.words);
    expect(withGate.words).toBeGreaterThan(without.words * 0.4);
    // ... and more words in box 4 or higher, also in number.
    expect(withGate.strong / withGate.words).toBeGreaterThan(2 * (without.strong / without.words));
    expect(withGate.strong).toBeGreaterThan(without.strong);
  });

  it('holds for other learners too (other random answers)', () => {
    for (const seed of [1, 7, 42]) {
      const a = simulate(false, 8, seed);
      const b = simulate(true, 8, seed);
      expect(b.dueAfter / b.words, `seed ${seed}`).toBeLessThan(a.dueAfter / a.words);
      expect(b.strong / b.words, `seed ${seed}`).toBeGreaterThan(a.strong / a.words);
      expect(b.firstBack, `seed ${seed}`).toBeLessThanOrEqual(3);
    }
  });
});

describe('reviewFirst', () => {
  const card = (state: 'due' | 'done' | 'first', extra: number) => ({ state, due: state === 'due' ? 10 : 0, tomorrow: 0, extra });
  it('only after today\'s review, with more than the threshold still due', () => {
    expect(reviewFirst(card('done', REVIEW_FIRST_ABOVE + 1), 'taal')).toBe(true);
    expect(reviewFirst(card('done', REVIEW_FIRST_ABOVE), 'taal')).toBe(false);
    expect(reviewFirst(card('done', 0), 'taal')).toBe(false);
    // Before today's review "Herhaal vandaag" is on the home already.
    expect(reviewFirst(card('due', 40), 'taal')).toBe(false);
    expect(reviewFirst(card('first', 0), 'taal')).toBe(false);
    expect(reviewFirst(null, 'taal')).toBe(false);
  });
  it('not in the work-rules track (its questions, not words)', () => {
    expect(reviewFirst(card('done', 40), 'regels')).toBe(false);
  });
  it('is the number on the card the review takes from: words, not sentence cards', () => {
    const today = '2026-03-02';
    const cards: Cards = {};
    const words = mainLessons('logistics', 'taal').flatMap((l) => l.words).slice(0, REVIEW_FIRST_ABOVE + 1);
    for (const w of words) cards[w.id] = { box: 1, due: today };
    for (const s of mainLessons('logistics', 'taal').flatMap((l) => l.sentences).slice(0, 20)) cards[s.id] = { box: 1, due: today };
    expect(reviewFirst(dailyCard(cards, today, today, 'taal'), 'taal')).toBe(true);
    delete cards[words[0].id];
    expect(reviewFirst(dailyCard(cards, today, today, 'taal'), 'taal')).toBe(false);
  });
});

/* ---- The home (src/components/Route.tsx) ---- */
const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const pl = () => getHelpLanguage('pl')!;
const nl = () => getHelpLanguage('nl')!;
const noop = () => {};
const afterFirst = (extra: Partial<Progress> = {}): Progress => ({ ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'none', completed: { 'l.hello': { best: 1, times: 1 } }, ...extra });
const daily = (state: DailyCard['state'], extra = 0): DailyCard => ({ state, due: state === 'due' ? 6 : 0, tomorrow: 0, extra });
/** The things to tap on the home (as the max-3 counter: buttons and the rules' summary). */
const taps = (m: string) => (m.match(/<button\b/g) ?? []).length + (m.match(/<summary\b/g) ?? []).length;
const route = (p: Progress, props: Partial<Parameters<typeof Route>[0]> = {}) =>
  html(createElement(Route, { progress: p, lang: pl(), onStart: noop, onPick: noop, onAll: noop, onDaily: noop, ...props }));
beforeAll(() => {
  registerPack(nlPack);
  registerRulesCourse(toCourseUnits(RULES_STUB));
});
afterEach(() => setRulesTrack(null));

describe('review first, then something new (the home)', () => {
  it('more than the threshold left after today\'s review: "Extra ronde" is the first, yellow card, the lesson the second', () => {
    const m = route(afterFirst(), { daily: daily('done', REVIEW_FIRST_ABOVE + 5) });
    expect(m).toContain('daily-lead');
    expect(m.indexOf('daily-lead')).toBeLessThan(m.indexOf('rb-current'));
    expect(m).toMatch(/class="rb-current [^"]*rb-second/);
    // The round's words (at most a review's) and why, in the help language.
    expect(m).toMatch(/<span class="daily-n" aria-hidden="true">10<\/span>/);
    expect(m).toContain(ui('reviewFirstHint', pl()).help as string);
    // The lesson does not lock: still a button with Start; Bram only by the yellow card.
    expect(m).toMatch(/<button type="button" class="bay-card" aria-label="1\.2 [^"]+ · Start"/);
    expect(m).not.toContain('bay-char');
    expect(taps(m)).toBe(3);
  });

  it('a few words left: the small "Extra ronde" button as before, the lesson yellow', () => {
    for (const extra of [1, REVIEW_FIRST_ABOVE]) {
      const m = route(afterFirst(), { daily: daily('done', extra) });
      expect(m).not.toContain('daily-lead');
      expect(m).toContain('daily-extra');
      expect(m).not.toContain('rb-second');
      expect(m).toContain('bay-char');
    }
  });

  it('before today\'s review "Herhaal vandaag" is first, as before; not in the work-rules track', () => {
    expect(route(afterFirst(), { daily: daily('due') })).not.toContain('daily-lead');
    setRulesTrack(true);
    const rules = route({ ...afterFirst(), helpLang: 'nl', completed: { 'r.l.start.1': { best: 1, times: 1 } } }, { lang: nl(), daily: daily('done', 40) });
    expect(rules).not.toContain('daily-lead');
    expect(rules).toContain('daily-extra');
  });
  // (A lesson stopped halfway next to it, [Extra ronde] [Continue] [Ander onderwerp]: the max-3
  // counter's route:extra-first-resume, with a real save.)
});

describe('the new line\'s text', () => {
  it('is short, in English and in every help language (Arabic and Tigrinya by gender)', async () => {
    expect(uiEn.reviewFirstHint).toBe('First review. Then you remember more.');
    for (const code of ['pl', 'ro', 'bg', 'uk', 'ar', 'ti', 'fa', 'prs', 'tr', 'es', 'pt', 'fr', 'de'] as const) {
      const src = (await import(`../src/i18n/${code}.ts`)).default as { ui: Record<string, unknown> };
      const t = src.ui.reviewFirstHint;
      expect(t, code).toBeTruthy();
      if (code === 'ar' || code === 'ti') expect(Object.keys(t as object).sort(), code).toEqual(['f', 'm', 'x']);
    }
  });
});
