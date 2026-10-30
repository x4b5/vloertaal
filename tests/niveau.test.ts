import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Result } from '../src/components/Screens';
import { teachingLessons, units } from '../src/content/curriculum';
import { getHelpLanguage, LANG_CODES } from '../src/i18n/all';
import { buildLesson, type Exercise } from '../src/lib/exercises';
import { EASE_MIN, FLAWLESS_RUN, fasterOn, lessonPace, paceAfterLesson, readPace, reviewSoon, setFaster } from '../src/lib/pace';
import { emptyProgress, loadProgress, parseBackup, backupFile } from '../src/lib/progress';
import {
  SENTENCE_DAILY_MAX, addDays, addLessonSentences, addLessonWords, applyReview, dailyCard, dailyIds, dailyLesson,
  dailySentenceIds, dailySpeakIds, isSentenceCard, reviewResults, seedSentenceCards, speakCardId, strongerCount, wordResultCount, type Cards,
} from '../src/lib/spaced';

const TODAY = '2026-10-30';
const first = teachingLessons[0];
const second = teachingLessons[1];
const kinds = (ex: Exercise[]) => ex.map((e) => e.kind);

describe('Herhaal vandaag: zinnen en de spreekzin in de kaartenbak', () => {
  it('gives the sentences a lesson built a card, and the sentence that was said', () => {
    const results = { [first.sentences[0].id]: true, [first.sentences[1].id]: false, [speakCardId(first.sentences[2].id)]: true };
    const cards = addLessonSentences({}, first.sentences, results, TODAY);
    expect(cards[first.sentences[0].id]).toEqual({ box: 1, due: addDays(TODAY, 1) });
    expect(cards[first.sentences[1].id]).toEqual({ box: 1, due: addDays(TODAY, 1) });
    // Not built (a shorter lesson): no card yet.
    expect(cards[first.sentences[2].id]).toBeUndefined();
    expect(cards[speakCardId(first.sentences[2].id)]).toEqual({ box: 1, due: addDays(TODAY, 1) });
    // A sentence answered wrong later goes back to box 1, like a word.
    const later = { ...cards, [first.sentences[0].id]: { box: 4, due: addDays(TODAY, 9) } };
    expect(addLessonSentences(later, first.sentences, { [first.sentences[0].id]: false }, TODAY)[first.sentences[0].id]).toEqual({ box: 1, due: addDays(TODAY, 1) });
  });

  it('brings at most 2 sentences and 1 spoken sentence a day, only with words', () => {
    const due = (ids: string[]): Cards => Object.fromEntries(ids.map((id, i) => [id, { box: 1, due: addDays(TODAY, -1 - i) }]));
    const sentences = [...first.sentences, ...second.sentences].map((s) => s.id);
    const said = sentences.slice(0, 3).map(speakCardId);
    const words = first.words.map((w) => w.id);
    const cards = { ...due(words), ...due(sentences), ...due(said) };
    expect(dailySentenceIds(cards, TODAY)).toHaveLength(SENTENCE_DAILY_MAX);
    expect(dailySpeakIds(cards, TODAY)).toHaveLength(1);
    const ids = dailyIds(cards, TODAY);
    expect(ids.filter((id) => !isSentenceCard(id))).toEqual(expect.arrayContaining(words));
    expect(ids.filter(isSentenceCard)).toHaveLength(3);
    // No word due: no review (the sentences wait for the next one).
    expect(dailyIds({ ...due(sentences), ...due(said) }, TODAY)).toEqual([]);
    // The home card counts words, as before.
    expect(dailyCard(cards, TODAY)?.due).toBe(dailyIds(cards, TODAY).filter((id) => !isSentenceCard(id)).length);
  });

  it('builds the due sentences and says the spoken sentence in today review', () => {
    const ids = [...first.words.map((w) => w.id), second.sentences[1].id, first.sentences[0].id, speakCardId(second.sentences[0].id)];
    const lesson = dailyLesson(ids, {}, TODAY);
    expect(lesson.cardSentences).toBe(2);
    expect(lesson.sentences.slice(0, 2).map((s) => s.id)).toEqual([second.sentences[1].id, first.sentences[0].id]);
    expect(lesson.say?.id).toBe(second.sentences[0].id);
    const ex = buildLesson(lesson, { review: true, seed: 3, speak: true });
    const built = ex.filter((e): e is Extract<Exercise, { kind: 'build' }> => e.kind === 'build').map((e) => e.sentence.id);
    expect(built).toEqual([second.sentences[1].id, first.sentences[0].id]);
    const spoken = ex.filter((e): e is Extract<Exercise, { kind: 'speak' }> => e.kind === 'speak');
    expect(spoken).toHaveLength(1);
    expect(spoken[0].item.id).toBe(second.sentences[0].id);
    // Without sound nothing is said.
    expect(kinds(buildLesson(lesson, { review: true, seed: 3, speak: true, quiet: true }))).not.toContain('speak');
  });

  it('works as before for a box without sentence cards (older saves)', () => {
    const lesson = dailyLesson(first.words.map((w) => w.id), {}, TODAY);
    expect(lesson.cardSentences).toBeUndefined();
    expect(lesson.say).toBeUndefined();
    expect(kinds(buildLesson(lesson, { review: true, seed: 3 })).filter((k) => k === 'build')).toHaveLength(1);
  });

  it('moves sentence cards with the review, but counts only words as stronger or practised', () => {
    const s = first.sentences[0].id;
    const w = first.words[0].id;
    const before: Cards = { [s]: { box: 2, due: TODAY }, [w]: { box: 2, due: TODAY } };
    const results = { [s]: true, [w]: true, [speakCardId(s)]: true, [first.sentences[1].id]: false };
    // Only the review's own cards: a sentence picked without a card stays out.
    const own = reviewResults(results, [w, s]);
    expect(own).toEqual({ [s]: true, [w]: true });
    const after = applyReview(before, own, TODAY);
    expect(after[s]).toEqual({ box: 3, due: addDays(TODAY, 4) });
    expect(after[first.sentences[1].id]).toBeUndefined();
    expect(strongerCount(before, after)).toBe(1);
    expect(wordResultCount(results)).toBe(1);
  });

  it('seeds sentence cards once for learners from before, 2 a day', () => {
    const completed = Object.fromEntries(teachingLessons.slice(0, 4).map((l) => [l.id, { best: 1, times: 1 }]));
    const words = teachingLessons.slice(0, 4).flatMap((l) => l.words).map((w) => w.id);
    const old: Cards = Object.fromEntries(words.map((id) => [id, { box: 3, due: addDays(TODAY, 2) }]));
    const seeded = seedSentenceCards(old, completed, TODAY);
    const ids = Object.keys(seeded).filter(isSentenceCard);
    expect(ids.length).toBe(teachingLessons.slice(0, 4).reduce((a, l) => a + l.sentences.length, 0));
    for (let d = 1; d <= 3; d++) expect(ids.filter((id) => seeded[id].due === addDays(TODAY, d))).toHaveLength(SENTENCE_DAILY_MAX);
    // The words keep their places, and a second run adds nothing.
    for (const id of words) expect(seeded[id]).toEqual(old[id]);
    expect(seedSentenceCards(seeded, completed, TODAY)).toBe(seeded);
    expect(seedSentenceCards({}, {}, TODAY)).toEqual({});
  });

  it('keeps sentence cards in the backup', () => {
    const cards = addLessonSentences(addLessonWords({}, first.words, {}, TODAY), first.sentences, { [first.sentences[0].id]: true, [speakCardId(first.sentences[0].id)]: true }, TODAY);
    const back = parseBackup(backupFile({ ...emptyProgress, cards, completed: { [first.id]: { best: 1, times: 1 } } }, new Date(2026, 9, 30)));
    expect(back?.cards?.[first.sentences[0].id]).toEqual(cards[first.sentences[0].id]);
    expect(back?.cards?.[speakCardId(first.sentences[0].id)]).toEqual(cards[speakCardId(first.sentences[0].id)]);
  });
});

describe('Wil je sneller? en een kortere les na veel fouten', () => {
  it('asks once, after 3 lessons in a row without a mistake', () => {
    let pace = undefined as ReturnType<typeof paceAfterLesson>['pace'] | undefined;
    for (let i = 1; i < FLAWLESS_RUN; i++) {
      const r = paceAfterLesson(pace, 12, 12, TODAY);
      expect(r.ask).toBe(false);
      pace = r.pace;
    }
    // A mistake starts the count again.
    const miss = paceAfterLesson(pace, 11, 12, TODAY);
    expect(miss.pace.run).toBe(0);
    pace = miss.pace;
    for (let i = 1; i < FLAWLESS_RUN; i++) pace = paceAfterLesson(pace, 10, 10, TODAY).pace;
    const third = paceAfterLesson(pace, 10, 10, TODAY);
    expect(third.ask).toBe(true);
    expect(third.pace.asked).toBe(TODAY);
    // Never again by itself.
    expect(paceAfterLesson(third.pace, 10, 10, TODAY).ask).toBe(false);
  });

  it('Ja: less introduction and tempo Normaal; Settings turns it off and the tempo goes back', () => {
    const p = { ...emptyProgress, tempo: 'calm' as const };
    const on = setFaster(p, true, TODAY);
    expect(on.tempo).toBe('normal');
    expect(fasterOn(on)).toBe(true);
    expect(lessonPace(on)).toEqual({ fast: true, easy: false });
    const off = setFaster(on, false);
    expect(off.tempo).toBe('calm');
    expect(fasterOn(off)).toBe(false);
    // A learner who had chosen Normaal keeps it.
    expect(setFaster(setFaster({ ...p, tempo: 'normal' as const }, true), false).tempo).toBe('normal');
    // Nee: nothing changes, and it is not asked again.
    const no = setFaster(p, false, TODAY);
    expect(no.tempo).toBe('calm');
    expect(no.pace?.asked).toBe(TODAY);
  });

  it('after many mistakes (under 60% of at least 6): the next lesson is shorter, then normal again', () => {
    expect(paceAfterLesson(undefined, 5, 10, TODAY)).toMatchObject({ easier: true, ask: false, pace: { ease: true, run: 0 } });
    expect(paceAfterLesson(undefined, 6, 10, TODAY).easier).toBe(false);
    expect(paceAfterLesson(undefined, 2, EASE_MIN - 1, TODAY).easier).toBe(false);
    const after = paceAfterLesson({ ease: true, faster: true }, 9, 10, TODAY);
    expect(after.pace.ease).toBeUndefined();
    // A shorter lesson keeps all its introduction, also with "sneller" on.
    expect(lessonPace({ pace: { ease: true, faster: true } })).toEqual({ fast: false, easy: true });
  });

  it('brings what went wrong back in today review', () => {
    const w = first.words[0].id;
    const s = first.sentences[0].id;
    const cards: Cards = { [w]: { box: 1, due: addDays(TODAY, 1) }, [s]: { box: 1, due: addDays(TODAY, 1) }, [first.words[1].id]: { box: 1, due: addDays(TODAY, 1) } };
    const soon = reviewSoon(cards, { [w]: false, [s]: false, [first.words[1].id]: true, 'w.unknown': false }, TODAY);
    expect(soon[w].due).toBe(TODAY);
    expect(soon[s].due).toBe(TODAY);
    expect(soon[first.words[1].id].due).toBe(addDays(TODAY, 1));
    expect(soon['w.unknown']).toBeUndefined();
  });

  it('sneller: every word keeps its card, with one check after them', () => {
    const lesson = units[2].lessons[0];
    const normal = buildLesson(lesson, { review: false, seed: 7 });
    const fast = buildLesson(lesson, { review: false, seed: 7, fast: true });
    const intro = (ex: Exercise[]) => ex.findIndex((e) => e.kind === 'tip' || e.kind === 'situation' || e.kind === 'match');
    expect(kinds(fast).filter((k) => k === 'intro')).toHaveLength(lesson.words.length);
    expect(intro(fast)).toBe(lesson.words.length + 1);
    expect(intro(normal)).toBeGreaterThan(intro(fast));
    // A review is the same either way.
    expect(kinds(buildLesson(lesson, { review: true, seed: 7, fast: true }))).toEqual(kinds(buildLesson(lesson, { review: true, seed: 7 })));
  });

  it('a shorter lesson: one sentence fewer, no extra question at the end, all the introduction', () => {
    const late = teachingLessons[teachingLessons.length - 10];
    const normal = buildLesson(late, { review: false, seed: 7, sayings: true });
    const easy = buildLesson(late, { review: false, seed: 7, sayings: true, easy: true });
    expect(easy.length).toBeLessThan(normal.length);
    expect(kinds(easy).filter((k) => k === 'intro')).toHaveLength(late.words.length);
    expect(kinds(easy).filter((k) => k === 'build')).toHaveLength(late.sentences.length - 1);
    expect(easy.some((e) => e.kind === 'build' && e.audio)).toBe(false);
    expect(kinds(easy)).not.toContain('saying');
  });

  it('reads the pace in a save, and leaves out what it cannot read', () => {
    expect(readPace({ run: 2, faster: true, tempoBefore: 'calm', asked: TODAY, ease: true, other: 1 })).toEqual({ run: 2, faster: true, tempoBefore: 'calm', asked: TODAY, ease: true });
    expect(readPace({ run: -1, faster: 'yes', tempoBefore: 'fast', asked: 'x' })).toEqual({});
    expect(readPace('x')).toBeUndefined();
    const store = new Map<string, string>();
    const ls = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => { store.set(k, v); }, removeItem: (k: string) => { store.delete(k); } };
    const g = globalThis as unknown as { localStorage?: unknown };
    const was = g.localStorage;
    g.localStorage = ls;
    try {
      store.set('vloertaal:v1', JSON.stringify({ ...emptyProgress, themeVersion: 2, pace: [1] }));
      expect(loadProgress().pace).toBeUndefined();
      store.set('vloertaal:v1', JSON.stringify({ ...emptyProgress, themeVersion: 2 }));
      expect(loadProgress().pace).toBeUndefined();
      store.set('vloertaal:v1', JSON.stringify({ ...emptyProgress, themeVersion: 2, pace: { faster: true } }));
      expect(loadProgress().pace).toEqual({ faster: true });
    } finally {
      g.localStorage = was;
    }
  });

  it('the result asks with Ja and Nee in place of Continue, in every help language', () => {
    for (const code of [undefined, ...LANG_CODES]) {
      const lang = code ? getHelpLanguage(code) : undefined;
      const html = renderToStaticMarkup(createElement(Result, { right: 10, total: 10, newWords: 6, words: 30, lang, onDone: () => {}, onFaster: () => {} }));
      expect(html).toContain('Wil je sneller?');
      expect(html).toContain('result-faster-yes');
      expect(html).toContain('result-faster-no');
      expect(html).not.toContain('result-go');
      const easier = renderToStaticMarkup(createElement(Result, { right: 4, total: 10, newWords: 6, words: 30, lang, onDone: () => {}, easier: true }));
      expect(easier).toContain('De volgende les is wat korter.');
      expect(easier).toContain('result-go');
    }
  });
});
