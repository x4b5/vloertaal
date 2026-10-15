import { afterEach, describe, expect, it, vi } from 'vitest';
import { allDialogues, allLessons, teachingLessons } from '../src/content/curriculum';
import { chatWhy } from '../src/content/chatWhy';
import { tokenize } from '../src/lib/answers';
import {
  buildLesson, buildSteps, buildTiles, forRetry, MATCH_ASKED, MATCH_PAIRS, nearMiss, reviewKind, wordsInSentence, type Exercise,
} from '../src/lib/exercises';
import { matchStart, matchTap } from '../src/lib/lessonRun';
import { createRng } from '../src/lib/random';
import { dailyLesson } from '../src/lib/spaced';
import { micBlocked, resetMicForLesson, setMicBlocked, speakMode, speakSkipped } from '../src/lib/speaking';

const sentences = teachingLessons.flatMap((lesson) => lesson.sentences.map((sentence) => ({ lesson, sentence })));

describe('build word by word: wrong words that make the learner think', () => {
  it('offers a later word of the same sentence as a wrong one whenever one fits', () => {
    for (const { lesson, sentence } of sentences) {
      const tiles = buildTiles(sentence, lesson, createRng(1));
      const real = tokenize(sentence.nl);
      buildSteps(sentence.nl, tiles).forEach((step, i) => {
        const word = real[i];
        const later = real.slice(i + 1).filter((w) => w.toLowerCase() !== word.toLowerCase() && !nearMiss(w, word));
        if (!later.length) return;
        const wrong = step.filter((t) => t !== word).map((t) => t.toLowerCase());
        expect(wrong.some((t) => later.some((w) => w.toLowerCase() === t)), `${sentence.nl} step ${i}: ${step.join('/')}`).toBe(true);
      });
    }
  });

  it('never offers a near-miss, and every step has the right word and at most two wrong ones', () => {
    for (const { lesson, sentence } of sentences) {
      const real = tokenize(sentence.nl);
      for (const salt of [0, 1, 2]) {
        buildSteps(sentence.nl, buildTiles(sentence, lesson, createRng(7)), 3, salt).forEach((step, i) => {
          expect(step).toContain(real[i]);
          expect(step.length).toBeLessThanOrEqual(3);
          const wrong = step.filter((t) => t !== real[i]);
          for (const t of wrong) expect(nearMiss(t, real[i]), `${sentence.nl}: ${t} / ${real[i]}`).toBe(false);
        });
      }
    }
  });

  it('rotates the extra words from step to step (the wrong ones keep changing)', () => {
    let checked = 0;
    for (const { lesson, sentence } of sentences) {
      const real = tokenize(sentence.nl);
      const tiles = buildTiles(sentence, lesson, createRng(3));
      const realSet = new Set(real.map((w) => w.toLowerCase()));
      const extras = new Set(tiles.map((t) => t.toLowerCase()).filter((t) => !realSet.has(t)));
      if (real.length < 3 || extras.size < 2) continue;
      const steps = buildSteps(sentence.nl, tiles);
      const extrasPerStep = steps.map((s) => s.map((t) => t.toLowerCase()).filter((t) => extras.has(t)).sort().join('|'));
      expect(new Set(extrasPerStep).size, `${sentence.nl}: ${steps.map((s) => s.join('/')).join(' · ')}`).toBeGreaterThan(1);
      checked++;
    }
    expect(checked).toBeGreaterThan(20);
  });

  it('is seeded: the same sentence gives the same steps, a retry (salt) other ones', () => {
    const { lesson, sentence } = sentences[0];
    const tiles = buildTiles(sentence, lesson, createRng(1));
    expect(buildSteps(sentence.nl, tiles)).toEqual(buildSteps(sentence.nl, tiles));
    const differ = sentences.some(({ lesson: l, sentence: s }) => {
      const t = buildTiles(s, l, createRng(1));
      return JSON.stringify(buildSteps(s.nl, t, 3, 0)) !== JSON.stringify(buildSteps(s.nl, t, 3, 1));
    });
    expect(differ).toBe(true);
  });
});

describe('mixed and daily review rotate the kind of question', () => {
  const mixes = allLessons.filter((l) => l.id.endsWith('.mix'));

  it('asks every word once, with more than one kind of question', () => {
    for (const lesson of mixes) {
      const list = buildLesson(lesson, { review: false, seed: 11 });
      const first = list.slice(0, lesson.words.length);
      expect(new Set(first.map((e) => e.kind)).size, lesson.id).toBeGreaterThanOrEqual(Math.min(3, lesson.words.length));
      // The same seed builds the same review.
      expect(buildLesson(lesson, { review: false, seed: 11 })).toEqual(list);
    }
  });

  it('rotates meaning, listen, help language → Dutch and writing; box 2 and up only the harder ones', () => {
    expect([0, 1, 2, 3].map((i) => reviewKind(i))).toEqual(['meaning', 'listen', 'dutch', 'type']);
    for (let i = 0; i < 6; i++) expect(['dutch', 'listen', 'type']).toContain(reviewKind(i, 2));
    for (let i = 0; i < 6; i++) expect(['meaning', 'dutch']).toContain(reviewKind(i, 1, true));
  });

  it('today\'s review gives words that were right before the harder direction', () => {
    const words = teachingLessons.slice(2, 4).flatMap((l) => l.words).slice(0, 8);
    const cards = Object.fromEntries(words.map((w, i) => [w.id, { box: i % 2 ? 3 : 1, due: '2026-01-01' }]));
    const lesson = dailyLesson(words.map((w) => w.id), cards);
    for (const seed of [1, 2, 3]) {
      for (const quiet of [false, true]) {
        const first = buildLesson(lesson, { review: true, seed, quiet }).slice(0, words.length) as (Exercise & { word: { id: string } })[];
        for (const ex of first) {
          if (cards[ex.word.id].box >= 2) {
            expect(ex.kind === 'meaning', `${ex.word.id} box ${cards[ex.word.id].box}`).toBe(false);
            if (ex.kind === 'dutch') expect(ex.textOnly).toBe(true);
          }
          // Without sound nothing needs to be heard.
          if (quiet) expect(['listen', 'type']).not.toContain(ex.kind);
        }
      }
    }
  });
});

describe('a mistake comes back in a new form', () => {
  const lesson = teachingLessons[3];
  const list = buildLesson(lesson, { review: false, seed: 5 });
  const ids = (xs: { id: string }[]) => xs.map((x) => x.id).join('|');

  it('reorders the options and moves the answer', () => {
    for (const ex of list) {
      if (!('options' in ex) || !ex.options || ex.options.length < 2) continue;
      for (const seed of [1, 2, 3, 4]) {
        const again = forRetry(ex, lesson, seed) as typeof ex;
        expect(ids(again.options!), ex.kind).not.toBe(ids(ex.options));
        const answer = ex.kind === 'chat' ? ex.dialogue.reply.id : ex.kind === 'situation' ? ex.tip.options.find((o) => o.best)!.id : (ex as { word: { id: string } }).word.id;
        const at = (xs: { id: string }[]) => xs.findIndex((o) => o.id === answer);
        expect(at(again.options!), ex.kind).not.toBe(at(ex.options));
        expect(again.options!.map((o) => o.id)).toContain(answer);
      }
    }
  });

  it('gives "What does it mean?" other wrong options where the lesson has them', () => {
    const meaning = list.find((e) => e.kind === 'meaning') as Extract<Exercise, { kind: 'meaning' }>;
    const fresh = [1, 2, 3, 4, 5].some((seed) => {
      const again = forRetry(meaning, lesson, seed) as typeof meaning;
      return again.options.some((o) => !meaning.options.some((m) => m.id === o.id));
    });
    expect(fresh).toBe(true);
  });

  it('builds a sentence with other words and asks a match in another order', () => {
    const build = list.find((e) => e.kind === 'build') as Extract<Exercise, { kind: 'build' }>;
    expect((forRetry(build, lesson, 1) as typeof build).salt).toBe(1);
    const match = list.find((e) => e.kind === 'match') as Extract<Exercise, { kind: 'match' }>;
    const again = forRetry(match, lesson, 1) as typeof match;
    expect(ids(again.words)).not.toBe(ids(match.words));
    expect(new Set(again.words.map((w) => w.id))).toEqual(new Set(match.words.map((w) => w.id)));
  });
});

describe('speaking never disappears for a missing microphone', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    resetMicForLesson();
  });
  const withRecorder = () => {
    vi.stubGlobal('window', { MediaRecorder: function MediaRecorder() {} });
    vi.stubGlobal('navigator', { mediaDevices: { getUserMedia: () => Promise.reject(new Error('no')) } });
  };

  it('records when it can, and falls back to "say it out loud" (never skipped)', () => {
    withRecorder();
    expect(speakMode()).toBe('record');
    setMicBlocked(true);
    expect(speakMode()).toBe('aloud');
    expect(speakSkipped(false)).toBe(false);
    expect(speakSkipped(true)).toBe(true);
  });

  it('a new lesson tries the microphone again', () => {
    withRecorder();
    setMicBlocked(true);
    resetMicForLesson();
    expect(micBlocked()).toBe(false);
    expect(speakMode()).toBe('record');
  });

  it('without any recorder the step stays, as "say it out loud"', () => {
    expect(speakMode()).toBe('aloud');
  });

  it('every lesson has one speaking step, and a production step (build or speak)', () => {
    for (const lesson of allLessons) {
      const list = buildLesson(lesson, { review: false, seed: 9, speak: true });
      expect(list.filter((e) => e.kind === 'speak'), lesson.id).toHaveLength(1);
      expect(list.some((e) => e.kind === 'build'), lesson.id).toBe(true);
    }
  });
});

describe('guided match ends without a forced tap', () => {
  it('asks fewer words than there are cards', () => {
    expect(MATCH_ASKED).toBeLessThan(MATCH_PAIRS);
    for (const lesson of teachingLessons) {
      const match = buildLesson(lesson, { review: false, seed: 4 }).find((e) => e.kind === 'match') as Extract<Exercise, { kind: 'match' }>;
      expect(match.words.length).toBeGreaterThan(Math.min(MATCH_ASKED, match.words.length - 1));
    }
  });

  it('finishes after the asked words, and the unused card is a wrong tap', () => {
    const [a, b, c] = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    const asked = [a, b];
    let r = matchTap(asked, matchStart, 'c');
    expect(r.hit).toBe(false);
    expect(r.state.wrong).toBe(1);
    r = matchTap(asked, r.state, 'a');
    expect(r.finished).toBe(false);
    r = matchTap(asked, r.state, 'b');
    expect(r.finished).toBe(true);
    expect(r.state.done).not.toContain(c.id);
  });
});

describe('mistakes feed the review cards, and chats explain the reply', () => {
  it('finds the lesson words behind the words of a sentence', () => {
    const words = [
      { id: 'w.helm', nl: 'de helm', en: 'helmet', emoji: '⛑️' },
      { id: 'w.draag', nl: 'dragen', en: 'wear', emoji: '' },
    ];
    expect(wordsInSentence(['helm'], words).map((w) => w.id)).toEqual(['w.helm']);
    expect(wordsInSentence(['de'], words)).toEqual([]);
  });

  it('every chat has a short reason why its reply fits', () => {
    for (const d of allDialogues) {
      const why = chatWhy(d.reply.id);
      expect(why, d.reply.id).toBeDefined();
      expect(why!.en.length, d.reply.id).toBeLessThanOrEqual(70);
    }
  });
});
