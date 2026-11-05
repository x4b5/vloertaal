import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { snapColleague } from '../src/components/Characters';
import { setChoicePickForTest, setSnapStepForTest, SnapExercise } from '../src/components/Exercises';
import { LessonPlayer } from '../src/components/LessonPlayer';
import { exerciseLines } from '../src/components/lessonLines';
import { findLesson, teachingLessons } from '../src/content/curriculum';
import { getHelpLanguage, helpLanguages } from '../src/i18n/all';
import { hasClip, setRecordedIndex, type ElevenIndex } from '../src/lib/audio';
import { buildLesson, comesBack, isGraded, needsAudio, snapExercise, type Exercise } from '../src/lib/exercises';
import { offerSkipSound } from '../src/lib/skipSound';
import { addDays, ASK_AGAIN_ID, askAgainLine, dailyLesson, dayNumber, isSnapDay, SNAP_EVERY, snapLines, type Cards } from '../src/lib/spaced';
import { voiceFor } from '../src/lib/voices';
import { hasName } from '../src/lib/workTry';
import index from '../public/audio-el/voices.json';

/**
 * "Snap je het?" in today's review (the owner's request, 5 November 2026): a known sentence at the
 * real pace, then "Ja, oké." or "Kunt u dat herhalen?", then what it means.
 */

type Snap = Extract<Exercise, { kind: 'snap' }>;
const snapsOf = (list: Exercise[]) => list.filter((e): e is Snap => e.kind === 'snap');

/** A learner through the first lessons: every word and every sentence of them has a card. */
const FIRST = ['l.hello', 'l.people', 'l.understand', 'l.translate', 'l.understood', 'l.gear', 'l.shift'];
function cardsAfter(lessonIds: readonly string[], day: string): Cards {
  const cards: Cards = {};
  for (const id of lessonIds) {
    const l = teachingLessons.find((x) => x.id === id)!;
    for (const w of l.words) cards[w.id] = { box: 1, due: day };
    for (const s of l.sentences) cards[s.id] = { box: 2, due: addDays(day, 3) };
  }
  return cards;
}
const wordIds = (cards: Cards) => Object.keys(cards).filter((id) => id.startsWith('w.'));

/** The first day from `from` on that is (or is not) a "Snap je het?" day. */
function dayWhere(snap: boolean, from = '2026-11-05'): string {
  let d = from;
  while (isSnapDay(d) !== snap) d = addDays(d, 1);
  return d;
}

afterEach(() => {
  setSnapStepForTest(null);
  setChoicePickForTest(null);
});

describe('when it comes', () => {
  it('on one day of every three, by the date alone', () => {
    let d = '2026-11-01';
    for (let i = 0; i < 60; i += SNAP_EVERY) {
      const window = [0, 1, 2].map((k) => addDays(d, k));
      expect(window.filter(isSnapDay), window.join(' ')).toHaveLength(1);
      d = addDays(d, SNAP_EVERY);
    }
    expect(isSnapDay('2026-11-05')).toBe(dayNumber('2026-11-05') % 3 === 0);
  });

  it('in the review of a snap day, not on the other days, and not in an extra round', () => {
    const yes = dayWhere(true);
    const no = dayWhere(false);
    const cards = cardsAfter(FIRST, yes);
    expect(dailyLesson(wordIds(cards), cards, yes).snap).toBeDefined();
    expect(dailyLesson(wordIds(cards), cards, no).snap).toBeUndefined();
    expect(dailyLesson(wordIds(cards), cards, yes, { extra: true }).snap).toBeUndefined();
    // Without a day (as some callers do): never.
    expect(dailyLesson(wordIds(cards), cards).snap).toBeUndefined();
  });

  it('only with sentences of finished lessons: none before a sentence card exists', () => {
    const day = dayWhere(true);
    const wordsOnly = Object.fromEntries(Object.entries(cardsAfter(FIRST, day)).filter(([id]) => id.startsWith('w.')));
    expect(snapLines(wordsOnly, day)).toBeUndefined();
    const cards = cardsAfter(FIRST, day);
    const snap = snapLines(cards, day)!;
    for (const s of [...snap.lines, ...snap.others]) expect(cards[s.id], s.id).toBeDefined();
  });

  it('never twice in a review, whatever the seed or the day; never without sound', () => {
    let seen = 0;
    for (let k = 0; k < 30; k++) {
      const day = addDays('2026-11-01', k);
      const cards = cardsAfter(FIRST, day);
      const lesson = dailyLesson(wordIds(cards), cards, day);
      for (const seed of [1, 2, 3]) {
        const list = buildLesson(lesson, { review: true, seed, speak: true });
        const snaps = snapsOf(list);
        expect(snaps.length, `${day} seed ${seed}`).toBe(isSnapDay(day) ? 1 : 0);
        seen += snaps.length;
        expect(snapsOf(buildLesson(lesson, { review: true, seed, quiet: true }))).toHaveLength(0);
      }
    }
    expect(seen).toBe(30);
  });

  it('a lesson of the course itself never has one', () => {
    for (const l of teachingLessons.slice(0, 20)) {
      for (const review of [false, true]) expect(snapsOf(buildLesson(l, { review, seed: 1 }))).toHaveLength(0);
    }
  });
});

describe('the sentence', () => {
  it('never has a name in it, is never "Kunt u dat herhalen?" itself, and turns from time to time', () => {
    // Every lesson of the course finished: every sentence has a card.
    const all = teachingLessons.map((l) => l.id);
    const asked = new Set<string>();
    for (let k = 0; k < 120; k++) {
      const day = addDays('2026-11-01', k);
      if (!isSnapDay(day)) continue;
      const snap = snapLines(cardsAfter(all, day), day)!;
      for (const s of [...snap.lines, ...snap.others]) {
        expect(hasName(s.nl), s.nl).toBe(false);
        expect(s.id).not.toBe(ASK_AGAIN_ID);
      }
      asked.add(snap.lines[0].id);
    }
    // Another sentence each time (40 snap days in 120).
    expect(asked.size).toBeGreaterThan(30);
  });

  it('is one that can be heard on this phone (a recording in the colleague\'s voice) and has a translation', () => {
    setRecordedIndex(index as ElevenIndex, null);
    const pl = getHelpLanguage('pl')!;
    // As the lesson player asks it (LessonPlayer, snapFitsAtStart).
    const fits = (s: { id: string; nl: string }) => hasClip(s.nl, voiceFor(snapColleague(s.id))) && Boolean(pl.gloss[s.id]);
    const all = teachingLessons.map((l) => l.id);
    for (let k = 0; k < 60; k++) {
      const day = addDays('2026-11-01', k);
      if (!isSnapDay(day)) continue;
      const cards = cardsAfter(all, day);
      const ex = snapExercise(dailyLesson(wordIds(cards).slice(0, 10), cards, day), () => 0.5, fits);
      expect(ex, day).toBeDefined();
      expect(fits(ex!.sentence)).toBe(true);
    }
    // Nothing recorded: no "Snap je het?" (never a guess at a silent speaker).
    const day = dayWhere(true);
    const cards = cardsAfter(FIRST, day);
    expect(snapExercise(dailyLesson(wordIds(cards), cards, day), () => 0.5, () => false)).toBeUndefined();
  });

  it('every sentence it can ask has a meaning in all 13 help languages', () => {
    const all = teachingLessons.map((l) => l.id);
    const day = dayWhere(true);
    for (let k = 0; k < 90; k += SNAP_EVERY) {
      const snap = snapLines(cardsAfter(all, addDays(day, k)), addDays(day, k))!;
      for (const s of [...snap.lines, ...snap.others]) {
        for (const l of helpLanguages) expect(l.gloss[s.id], `${l.code} ${s.id}`).toBeTruthy();
      }
    }
  });

  it('has three meanings to pick from, the right one among them, all different', () => {
    const day = dayWhere(true);
    const cards = cardsAfter(FIRST, day);
    const ex = snapsOf(buildLesson(dailyLesson(wordIds(cards), cards, day), { review: true, seed: 5 }))[0];
    expect(ex.options).toHaveLength(3);
    expect(ex.options.map((o) => o.id)).toContain(ex.sentence.id);
    expect(new Set(ex.options.map((o) => o.en)).size).toBe(3);
    expect(ex.ask).toEqual(askAgainLine());
    expect(ex.ask.nl).toBe('Kunt u dat herhalen?');
  });
});

describe('how it counts', () => {
  const gear = findLesson('l.gear')!.lesson;
  const ex: Snap = { kind: 'snap', sentence: gear.sentences[0], options: [gear.sentences[0], gear.sentences[1], gear.sentences[2]], ask: askAgainLine()! };

  it('the meaning counts as a question; a wrong one does not come back at the end', () => {
    expect(isGraded(ex)).toBe(true);
    expect(comesBack(ex)).toBe(false);
    expect(comesBack({ kind: 'meaning', word: gear.words[0], options: gear.words.slice(0, 3) })).toBe(true);
  });

  it('can only be done by hearing: left out without sound, with "Ik kan nu niet luisteren" under it', () => {
    expect(needsAudio(ex)).toBe(true);
    expect(offerSkipSound(ex, { checked: false, soundOff: false })).toBe(true);
  });

  it('fetches the sentence in the colleague\'s voice and "Kunt u dat herhalen?" in yours', () => {
    const lines = exerciseLines(ex, 'f');
    expect(lines.map((l) => l.text)).toEqual([ex.sentence.nl, 'Kunt u dat herhalen?']);
    expect(lines[0].voice).toBe(voiceFor(snapColleague(ex.sentence.id)));
  });
});

describe('the two ways (drawn)', () => {
  const gear = findLesson('l.gear')!.lesson;
  const ex: Snap = { kind: 'snap', sentence: gear.sentences[0], options: [gear.sentences[0], gear.sentences[1], gear.sentences[2]], ask: askAgainLine()! };
  const pl = getHelpLanguage('pl')!;
  const draw = (props: Partial<Parameters<typeof SnapExercise>[0]> = {}) =>
    renderToStaticMarkup(createElement(SnapExercise, { ex, lang: pl, locked: false, onAnswer: () => {}, ...props }));
  const taps = (html: string) => (html.match(/<button/g) ?? []).length;

  it('first: "Snap je het?" with two answers in Dutch and Polish, without the text and without a speaker', () => {
    const html = draw();
    expect(html).toContain('Snap je het?');
    expect(html).toContain(pl.ui.snapQuestion);
    expect(html).toContain('Ja, oké.');
    expect(html).toContain(pl.ui.snapYes);
    expect(html).toContain('Kunt u dat herhalen?');
    expect(html).toContain(pl.gloss[ASK_AGAIN_ID]);
    expect(html).not.toContain(ex.sentence.nl);
    expect(html).not.toContain('speak-glyph');
    expect(taps(html)).toBe(2);
  });

  it('"Ja, oké.": straight to the three meanings, no speaker to hear it again', () => {
    setSnapStepForTest('ok');
    const html = draw();
    expect(html).toContain(pl.ui.whatDoesThisMean);
    expect(html).not.toContain(ex.sentence.nl);
    expect(html).not.toContain(pl.ui.snapGoodAsk);
    expect(taps(html)).toBe(3);
  });

  it('"Ja, oké." and right: a short "Goed verstaan!", the sentence and its meaning shown', () => {
    setSnapStepForTest('ok');
    setChoicePickForTest(ex.sentence.id);
    const html = draw({ locked: true, verdict: 'right' });
    expect(html).toContain('Goed verstaan!');
    expect(html).toContain(ex.sentence.nl);
    expect(html).not.toContain('Even vragen was beter');
  });

  it('"Ja, oké." and wrong: "Zie je? Even vragen was beter.", with the text, the meaning and a slow speaker', () => {
    setSnapStepForTest('ok');
    setChoicePickForTest(gear.sentences[1].id);
    const html = draw({ locked: true, verdict: 'wrong' });
    expect(html).toContain('Zie je? Even vragen was beter.');
    expect(html).toContain(pl.ui.snapAskBetter);
    expect(html).toContain(ex.sentence.nl);
    expect(html).toContain(pl.gloss[ex.sentence.id]);
    expect(html).toContain('speak-glyph');
    // No STRAKS WEER: it does not come back.
    expect(html).not.toContain('stamp');
  });

  it('"Kunt u dat herhalen?": "Goed dat je het vraagt!", a slow speaker (the text still hidden), then the meanings', () => {
    setSnapStepForTest('asked');
    const html = draw();
    expect(html).toContain('Goed dat je het vraagt!');
    expect(html).toContain(pl.ui.snapGoodAsk);
    expect(html).toContain('Kunt u dat herhalen?');
    expect(html).not.toContain(`>${ex.sentence.nl}<`);
    expect(html).toContain(pl.ui.whatDoesThisMean);
    // Three meanings plus the speaker (a speaker is not one of the three to tap).
    expect(taps(html)).toBe(4);
    expect((html.match(/class="choice /g) ?? []).length).toBe(3);
  });

  it('draws in the lesson player, right to left too', () => {
    for (const code of ['pl', 'ar', 'ti'] as const) {
      const html = renderToStaticMarkup(createElement(LessonPlayer, { lesson: gear, review: true, lang: getHelpLanguage(code), exercises: [ex], onQuit: () => {}, onFinish: () => {} }));
      expect(html).toContain('Snap je het?');
      if (code === 'ar') expect(html).toContain('dir="rtl"');
    }
  });
});
