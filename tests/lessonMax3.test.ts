import { describe, expect, it } from 'vitest';
import { allLessons, allWords } from '../src/content/curriculum';
import { tokenize } from '../src/lib/answers';
import { buildLesson, buildSteps, buildTiles, courseNames, MATCH_PAIRS, nearMiss } from '../src/lib/exercises';
import { letterSteps } from '../src/lib/letters';
import { BUILD_FORGIVEN_TAPS, matchStart, matchTap, stepGrade } from '../src/lib/lessonRun';
import { createRng } from '../src/lib/random';

/** The "at most 3" rule inside a lesson: never more than three answers to tap. */
describe('at most three answers per exercise', () => {
  for (const lesson of allLessons) {
    it(`${lesson.id}`, () => {
      for (const review of [false, true]) {
        for (const ex of buildLesson(lesson, { review, seed: 7 })) {
          if ('options' in ex && ex.options) expect(ex.options.length, `${lesson.id} ${ex.kind}`).toBeLessThanOrEqual(3);
          if (ex.kind === 'match') expect(ex.words.length).toBeLessThanOrEqual(MATCH_PAIRS);
        }
      }
    });
  }
});

describe('build word by word', () => {
  it('offers the right word and at most two others for every place, never near-identical', () => {
    for (const lesson of allLessons) {
      for (const sentence of lesson.sentences) {
        const tiles = buildTiles(sentence, lesson, createRng(3));
        const steps = buildSteps(sentence.nl, tiles);
        const words = tokenize(sentence.nl);
        expect(steps).toHaveLength(words.length);
        steps.forEach((options, i) => {
          expect(options.length, sentence.nl).toBeGreaterThanOrEqual(1);
          expect(options.length, sentence.nl).toBeLessThanOrEqual(3);
          // The right word is there exactly once.
          expect(options.filter((o) => o === words[i]), sentence.nl).toHaveLength(1);
          const wrong = options.filter((o) => o !== words[i]);
          for (const w of wrong) expect(nearMiss(w, words[i]), `${sentence.nl}: ${w} / ${words[i]}`).toBe(false);
          if (wrong.length === 2) expect(nearMiss(wrong[0], wrong[1]), `${sentence.nl}: ${wrong.join(' / ')}`).toBe(false);
          // At the start every option has a capital, so the capital gives nothing away (the screen
          // writes them all small: tileLabel, tests/dutchBreak.test.ts).
          if (i === 0) for (const o of options) expect(o[0], sentence.nl).toBe(o[0].toUpperCase());
        });
      }
    }
  });

  it('most places get the full three choices', () => {
    let full = 0;
    let all = 0;
    for (const lesson of allLessons) {
      for (const sentence of lesson.sentences) {
        for (const options of buildSteps(sentence.nl, buildTiles(sentence, lesson, createRng(1)))) {
          all++;
          if (options.length === 3) full++;
        }
      }
    }
    expect(full / all).toBeGreaterThan(0.9);
  });

  it('knows the names of the course', () => {
    expect(courseNames().has('Ali')).toBe(true);
    expect(courseNames().has('Ik')).toBe(false);
  });

  it('never writes a name in lower case ("Ali", not "ali")', () => {
    const lower = new Map([...courseNames()].map((n) => [n.toLowerCase(), n]));
    for (const lesson of allLessons) {
      for (const s of lesson.sentences) {
        for (let seed = 1; seed <= 5; seed++) {
          const steps = buildSteps(s.nl, buildTiles(s, lesson, createRng(seed)));
          for (const w of steps.flat()) {
            const name = lower.get(w.toLowerCase());
            if (name) expect(w, `${s.nl}`).toBe(name);
          }
        }
      }
    }
  });

  it('is the same every time for the same sentence', () => {
    const lesson = allLessons.find((l) => l.sentences.length)!;
    const s = lesson.sentences[0];
    const tiles = buildTiles(s, lesson, createRng(5));
    expect(buildSteps(s.nl, tiles)).toEqual(buildSteps(s.nl, tiles));
  });

  it('forgives one stray wrong tap; two or more are a mistake (build, match and letters alike)', () => {
    expect(stepGrade(0)).toEqual({ correct: true, almost: false });
    expect(stepGrade(1)).toEqual({ correct: true, almost: false });
    expect(stepGrade(2).correct).toBe(false);
    expect(stepGrade(3).correct).toBe(false);
    // A built sentence forgives two (more tiles, more taps).
    expect(stepGrade(2, BUILD_FORGIVEN_TAPS).correct).toBe(true);
    expect(stepGrade(3, BUILD_FORGIVEN_TAPS).correct).toBe(false);
  });
});

describe('guided match', () => {
  const words = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  it('a right tap makes the pair and brings on the next word', () => {
    const r = matchTap(words, matchStart, 'a');
    expect(r.hit).toBe(true);
    expect(r.state.step).toBe(1);
    expect(r.state.done).toEqual(['a']);
    expect(r.finished).toBe(false);
  });
  it('a wrong tap keeps the word on and counts', () => {
    const r = matchTap(words, matchStart, 'b');
    expect(r.hit).toBe(false);
    expect(r.state.step).toBe(0);
    expect(r.state.wrong).toBe(1);
  });
  it('a matched meaning is no choice any more', () => {
    const one = matchTap(words, matchStart, 'a').state;
    const again = matchTap(words, one, 'a');
    expect(again.state).toBe(one);
    expect(again.hit).toBe(false);
  });
  it('is graded like a built sentence: one wrong tap forgiven, two a mistake', () => {
    const play = (taps: string[]) => {
      let s = matchStart;
      let finished = false;
      for (const id of taps) ({ state: s, finished } = matchTap(words, s, id));
      expect(finished).toBe(true);
      return stepGrade(s.wrong).correct;
    };
    expect(play(['a', 'b', 'c'])).toBe(true);
    expect(play(['c', 'a', 'b', 'c'])).toBe(true);
    expect(play(['c', 'a', 'c', 'b', 'c'])).toBe(false);
  });
  it('finishes after the last pair', () => {
    let s = matchStart;
    let finished = false;
    for (const id of ['a', 'b', 'c']) ({ state: s, finished } = matchTap(words, s, id));
    expect(finished).toBe(true);
    expect(s.done).toEqual(['a', 'b', 'c']);
  });
});

describe('dictation with letter tiles, three at a time', () => {
  it('spells every word exactly, with the right tile among at most three', () => {
    for (const w of allWords) {
      const steps = letterSteps(w.nl, createRng(w.id.length));
      const spelled = steps.map((s) => s.answer.text).join('');
      expect(spelled, w.nl).toBe(w.nl.toLowerCase().replace(/[^\p{L}\s]/gu, '').replace(/\s+/g, ' ').trim());
      for (const s of steps) {
        expect(s.options.length, w.nl).toBeLessThanOrEqual(3);
        expect(s.options.length, w.nl).toBeGreaterThanOrEqual(2);
        expect(s.options.filter((o) => o.text === s.answer.text), w.nl).toHaveLength(1);
      }
    }
  });
  it('an article is chosen among de / het / een', () => {
    const [first] = letterSteps('de helm', createRng(1));
    expect(first.answer.text).toBe('de ');
    for (const o of first.options) expect(['de ', 'het ', 'een ']).toContain(o.text);
  });
});

describe('dictation input (Settings writing setting)', () => {
  it('defaults to letter tiles for another script, the keyboard for the Latin one', async () => {
    const { writingInput } = await import('../src/lib/writing');
    const { getHelpLanguage } = await import('../src/i18n/all');
    expect(writingInput(getHelpLanguage('ar'))).toBe('tiles');
    expect(writingInput(getHelpLanguage('pl'))).toBe('keys');
    expect(writingInput(undefined)).toBe('keys');
  });
});
