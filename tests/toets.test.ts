import { readFileSync } from 'fs';
import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { DURF_ANSWERS, TOETS_DURF, TOETS_FORM, TOETS_PARTS, TOETS_SPEAK, TOETS_VERSIONS, type ToetsVersion } from '../src/content/toets';
import { helpLanguageSources } from '../src/i18n/all';
import { getHelpLanguage } from '../src/i18n';
import { GENDERED_LANGS, isPlural, uiEn } from '../src/i18n/types';
import { tokenize } from '../src/lib/answers';
import { countPath } from '../src/lib/count';
import { buildSteps } from '../src/lib/exercises';
import { checkLevel } from '../src/lib/instapCheck';
import { letterSteps } from '../src/lib/letters';
import { emptyProgress, mergeBackup, parseBackup, type Progress, backupFile, replaceWithBackup } from '../src/lib/progress';
import { createRng } from '../src/lib/random';
import {
  answerMode, END_DAYS, growthOf, INSTAP_FROM_LESSONS, INSTAP_UNTIL_LESSONS, knownExact, knownOf, recordToets, resultOf, rightId, scoreOf, settingsMoment,
  speakSentence, toetsLater, toetsLine, toetsOffer, toetsQuestions, type ToetsAnswer, type ToetsQuestion, type ToetsTally,
} from '../src/lib/toets';
import { durfThenNow, readDurf, readToets, runTally, type ToetsDurf, type ToetsRun, type ToetsScore } from '../src/lib/toetsState';

const day = (y: number, m: number, d: number) => new Date(y, m - 1, d, 12);
const ids = (v: ToetsVersion) => TOETS_VERSIONS[v].flatMap((i) => [i.answer, ...i.others]);
/** The Dutch of every line a version shows or plays (a chat: the colleague's line and the three replies). */
const texts = (v: ToetsVersion) => toetsQuestions(v).flatMap((q) => {
  if (q.kind === 'build') return [q.sentence.nl];
  if (q.part === 'sentences') return [q.dialogue.prompt.nl, ...q.options.map((o) => o.nl)];
  return q.options.map((o) => o.nl);
});
const score = (l: number, w: number, s: number): ToetsScore => ({ listen: l, words: w, sentences: s });

describe('"Wat ken je al?": the items', () => {
  it('A and B share no item, no wrong option and no line', () => {
    const a = new Set(ids('A'));
    expect(ids('B').filter((id) => a.has(id))).toEqual([]);
    const at = new Set(texts('A'));
    expect(texts('B').filter((t) => at.has(t))).toEqual([]);
  });

  it('A and B: 7 questions per part (21), and question k of both is the same part and the same kind', () => {
    expect(TOETS_FORM).toBe(2);
    for (const v of ['A', 'B'] as const) {
      for (const part of TOETS_PARTS) expect(TOETS_VERSIONS[v].filter((i) => i.part === part).length, `${v} ${part}`).toBe(7);
    }
    TOETS_VERSIONS.A.forEach((a, k) => {
      const b = TOETS_VERSIONS.B[k];
      expect([b.part, b.kind], `pair ${k}`).toEqual([a.part, a.kind]);
    });
    // Each part: 5 picks of three and 2 the learner makes (built or written).
    for (const part of TOETS_PARTS) expect(TOETS_VERSIONS.A.filter((i) => i.part === part && i.kind === 'choice')).toHaveLength(5);
  });

  it('within a version no line is used twice, and the speaking sentence is in neither', () => {
    for (const v of ['A', 'B'] as const) expect(new Set(ids(v)).size).toBe(ids(v).length);
    expect([...ids('A'), ...ids('B')]).not.toContain(TOETS_SPEAK);
  });

  it('every item is a line of the course: three different options and one right answer, a sentence to build with all its words', () => {
    for (const v of ['A', 'B'] as const) {
      for (const q of toetsQuestions(v, 7)) {
        if (q.kind === 'build') {
          const tiles = q.tiles.map((t) => t.toLowerCase());
          for (const w of tokenize(q.sentence.nl)) expect(tiles, q.sentence.nl).toContain(w.toLowerCase());
          expect(q.tiles.length).toBeGreaterThan(tokenize(q.sentence.nl).length);
          expect(q.audio).toBe(q.part === 'listen');
          continue;
        }
        expect(q.options).toHaveLength(3);
        expect(new Set(q.options.map((o) => o.id)).size).toBe(3);
        expect(new Set(q.options.map((o) => o.en.toLowerCase())).size).toBe(3);
        expect(q.options.filter((o) => o.id === rightId(q))).toHaveLength(1);
      }
    }
    expect(speakSentence().nl).toBe('Kunt u dat herhalen?');
  });

  it('every line has a recording in every voice (no line still to be recorded)', () => {
    // The Dutch cast: a Flemish voice (country) records only what it is asked to.
    const voices = (JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')).voices as { country?: string; said: Record<string, string> }[]).filter((v) => !v.country);
    const plain = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');
    const lines = [...new Set([...texts('A'), ...texts('B'), speakSentence().nl])];
    for (const v of voices) {
      const said = new Set(Object.values(v.said).flatMap((t) => [t.trim(), plain(t)]));
      expect(lines.filter((t) => !said.has(t.trim()) && !said.has(plain(t)))).toEqual([]);
    }
  });

  it('every line has its translation in every help language', () => {
    const all = [...ids('A'), ...ids('B')].map((id) => toetsLine(id)?.id ?? id);
    for (const src of helpLanguageSources) {
      expect(all.filter((id) => !src.gloss[id]), src.code).toEqual([]);
    }
  });
});

/* ---- A and B as hard as each other: measured on the language, not on the topic ---- */

/** Where in the path (default order) a line is first taught: the index of its topic. */
function unitIndex(id: string): number {
  const i = units.findIndex((u) => u.lessons.some((l) => [...l.sentences, ...l.words, ...(l.dialogues ?? []).map((d) => d.prompt)].some((x) => x.id === id)));
  expect(i, id).toBeGreaterThanOrEqual(0);
  return i;
}
/** The Dutch the learner has to understand or make for a question: the sentence, the word, or the colleague's line and the reply. */
const target = (q: ToetsQuestion): string =>
  q.kind === 'build' ? q.sentence.nl : q.part === 'words' ? q.word.nl : q.part === 'listen' ? q.sentence.nl : `${q.dialogue.prompt.nl} ${q.dialogue.reply.nl}`;
const words = (t: string) => tokenize(t).length;
const letters = (t: string) => tokenize(t).join('').length;
/** A heard or built sentence that is a question ("?"). The chats are paired by hand (src/content/toets.ts): counted apart. */
const isQuestion = (q: ToetsQuestion) => (q.kind === 'build' || q.part === 'listen' ? q.sentence.nl : '').trim().endsWith('?');
const isChatQuestion = (q: ToetsQuestion) => q.kind === 'choice' && q.part === 'sentences' && q.dialogue.prompt.nl.trim().endsWith('?');

export function measure(v: ToetsVersion) {
  const qs = toetsQuestions(v);
  const items = TOETS_VERSIONS[v];
  const sum = (f: (q: ToetsQuestion, i: number) => number) => qs.reduce((n, q, i) => n + f(q, i), 0);
  return {
    words: sum((q) => words(target(q))),
    letters: sum((q) => letters(target(q))),
    perWord: sum((q) => letters(target(q))) / sum((q) => words(target(q))),
    unit: sum((_, i) => unitIndex(items[i].answer)) / qs.length,
    questions: Object.fromEntries(TOETS_PARTS.map((p) => [p, qs.filter((q) => q.part === p && isQuestion(q)).length])),
    chatQuestions: qs.filter(isChatQuestion).length,
    kinds: qs.map((q) => `${q.part}/${q.kind}`).join(','),
  };
}

describe('"Wat ken je al?": A and B are as hard as each other', () => {
  const a = measure('A');
  const b = measure('B');

  it('the same kinds of question, in the same order, and as many questions ("?") per part', () => {
    expect(b.kinds).toBe(a.kinds);
    expect(b.questions).toEqual(a.questions);
    // The colleague's line in a chat: a question in 5 of A and 4 of B ("Hoe heet je?" and "Fijne
    // avond!" are a pair on purpose: a short fixed phrase of the first day).
    expect(Math.abs(a.chatQuestions - b.chatQuestions)).toBeLessThanOrEqual(1);
  });

  it('about as many words and letters (within 10%), equally long words (within 10%)', () => {
    expect(Math.abs(a.words - b.words) / a.words).toBeLessThanOrEqual(0.1);
    expect(Math.abs(a.letters - b.letters) / a.letters).toBeLessThanOrEqual(0.1);
    expect(Math.abs(a.perWord - b.perWord) / a.perWord).toBeLessThanOrEqual(0.1);
  });

  it('each pair: a built sentence the same number of words, a heard one at most 2 apart, a word to write as long', () => {
    const qa = toetsQuestions('A');
    const qb = toetsQuestions('B');
    qa.forEach((x, k) => {
      const y = qb[k];
      const what = `pair ${k}: ${target(x)} / ${target(y)}`;
      if (x.kind === 'dictate') expect(letters(target(x)), what).toBe(letters(target(y)));
      else if (x.kind === 'build') expect(words(target(x)), what).toBe(words(target(y)));
      else if (x.part === 'listen') expect(Math.abs(words(target(x)) - words(target(y))), what).toBeLessThanOrEqual(2);
      else if (x.part === 'sentences') expect(Math.abs(words(target(x)) - words(target(y))), what).toBeLessThanOrEqual(3);
      else expect(Math.abs(letters(target(x)) - letters(target(y))), what).toBeLessThanOrEqual(7);
    });
  });

  it('from about as early in the path (the mean topic within 1.5 of each other)', () => {
    expect(Math.abs(a.unit - b.unit)).toBeLessThanOrEqual(1.5);
  });
});

/* ---- Guessing ---- */

/** Chance to build a sentence right by tapping at random: at most one place with a wrong tap. */
function buildGuess(q: Extract<ToetsQuestion, { kind: 'build' }>): number {
  const ks = buildSteps(q.sentence.nl, q.tiles, 3).map((s) => s.length);
  const none = ks.reduce((p, k) => p / k, 1);
  return none + ks.reduce((n, k) => n + (none * k) * (1 - 1 / k), 0);
}
/** Chance to write a word right with letter tiles at random: at most one wrong tile in all (the lesson's rule). */
function dictateGuess(q: Extract<ToetsQuestion, { kind: 'dictate' }>): number {
  const ks = letterSteps(q.word.nl, createRng(q.word.id.length * 7919 + q.word.nl.length)).map((s) => s.options.length);
  const none = ks.reduce((p, k) => p / k, 1); // no wrong tile at any letter
  return none + ks.reduce((n, k) => n + (none * k) * (1 / k), 0); // exactly one wrong tile at one letter
}

describe('"Wat ken je al?": guessing', () => {
  it('a built sentence is right by guessing less than 5 times in 100, a word written with tiles less than 3 in 100', () => {
    for (const v of ['A', 'B'] as const) {
      for (const q of toetsQuestions(v)) {
        if (q.kind === 'build') expect(buildGuess(q), q.sentence.nl).toBeLessThan(0.05);
        if (q.kind === 'dictate') expect(dictateGuess(q), q.word.nl).toBeLessThan(0.03);
      }
    }
  });

  it('someone who guesses everything: about 5 of 21 right (24%, the old test 33%), and after the correction about nothing', () => {
    const qs = toetsQuestions('A');
    const chance = qs.reduce((n, q) => n + (q.kind === 'choice' ? 1 / 3 : q.kind === 'build' ? buildGuess(q) : dictateGuess(q)), 0);
    expect(chance / qs.length).toBeLessThan(0.26);
    // Expected wrong picks 15·2/3 = 10: the correction takes off 5, so the expected known is what
    // building and writing give by luck (well under one question).
    const known = chance - (15 * 2) / 3 / 2;
    expect(known).toBeGreaterThanOrEqual(0);
    expect(known).toBeLessThan(0.3);
  });
});

/* ---- Answering, counting, the guessing taken out ---- */

describe('"Wat ken je al?": answering and counting', () => {
  const qs = toetsQuestions('A');
  const build = qs.find((q) => q.kind === 'build')!;
  const dictate = qs.find((q) => q.kind === 'dictate')!;

  it('a pick is right on the right option; a build with one place tapped wrong is still right, two are not', () => {
    expect(resultOf(qs[0], { correct: true, given: [rightId(qs[0])] }, true)).toBe('right');
    expect(resultOf(qs[0], { correct: false, given: ['x'] }, true)).toBe('wrong');
    expect(resultOf(build, { correct: true, missed: ['Kunt'] }, false)).toBe('right');
    expect(resultOf(build, { correct: true, missed: ['Kunt', 'het'] }, false)).toBe('wrong');
    expect(resultOf(dictate, { correct: true }, false)).toBe('right');
  });

  it('writing falls back as in the lesson: hear and pick for another script, typing for the Latin one (or letter tiles)', () => {
    expect(answerMode(qs[0], getHelpLanguage('pl'))).toEqual({ pick: true, keys: false });
    expect(answerMode(build, getHelpLanguage('ar'))).toEqual({ pick: false, keys: false });
    expect(answerMode(dictate, getHelpLanguage('ar'), false)).toEqual({ pick: true, keys: false });
    expect(answerMode(dictate, getHelpLanguage('ar'), true)).toEqual({ pick: false, keys: false }); // letter tiles
    expect(answerMode(dictate, getHelpLanguage('pl'), false)).toEqual({ pick: false, keys: true });
  });

  it('counts right, wrong picks and "Ik weet het niet" per part; a wrong build or word is no wrong pick', () => {
    const answers: (ToetsAnswer | undefined)[] = qs.map((q, i) => ({ result: i % 3 === 0 ? 'right' : i % 3 === 1 ? 'wrong' : 'idk', pick: q.kind === 'choice' }));
    const t = scoreOf(qs, answers);
    expect(t.of).toEqual(score(7, 7, 7));
    expect(t.mc).toEqual(score(5, 5, 5));
    for (const p of TOETS_PARTS) expect(t.right[p] + t.idk[p] + (t.of[p] - t.right[p] - t.idk[p])).toBe(7);
    const wrongPicks = qs.filter((q, i) => i % 3 === 1 && q.kind === 'choice');
    expect(t.wrong.listen + t.wrong.words + t.wrong.sentences).toBe(wrongPicks.length);
    // Not answered (stopped halfway would not be kept, but a gap counts as "Ik weet het niet").
    expect(scoreOf(qs, []).idk).toEqual(score(7, 7, 7));
  });

  it('takes the guessing out: right minus half the wrong picks, never below 0; "Ik weet het niet" takes nothing off', () => {
    const run = (right: ToetsScore, wrong: ToetsScore, idk: ToetsScore): ToetsRun => ({ day: '2026-11-01', version: 'A', right, of: score(7, 7, 7), form: 2, mc: score(5, 5, 5), wrong, idk });
    const r = run(score(5, 3, 1), score(1, 0, 4), score(1, 4, 0));
    expect(knownExact(r, 'listen')).toBe(4.5);
    expect(knownOf(r, 'listen')).toBe(4);
    expect(knownOf(r, 'words')).toBe(3);
    expect(knownOf(r, 'sentences')).toBe(0);
    // A run of form 1 (18 picks): every miss was a wrong pick.
    const old: ToetsRun = { day: '2026-10-01', version: 'A', right: score(2, 6, 4), of: score(6, 6, 6) };
    expect(runTally(old).wrong).toEqual(score(4, 0, 2));
    expect([knownOf(old, 'listen'), knownOf(old, 'words'), knownOf(old, 'sentences')]).toEqual([0, 6, 3]);
  });
});

/* ---- Growth only when it is more than guessing ---- */

/**
 * A run of form 2 from a learner who knows `p` of each part (the same number of questions both
 * times: only the guessing differs) and guesses the rest, or says "Ik weet het niet" (`idk`).
 */
let simQs: ToetsQuestion[] | undefined;
function simulate(rng: () => number, p: number, idk: number): ToetsRun {
  const qs = (simQs ??= toetsQuestions('A'));
  const seen = { listen: 0, words: 0, sentences: 0 };
  const answers: ToetsAnswer[] = qs.map((q) => {
    const pick = q.kind === 'choice';
    const n = seen[q.part]++;
    if (n < Math.round(p * 7)) return { result: 'right', pick };
    if (rng() < idk) return { result: 'idk', pick };
    const lucky = pick ? rng() < 1 / 3 : rng() < 0.03;
    return { result: lucky ? 'right' : 'wrong', pick };
  });
  const t: ToetsTally = scoreOf(qs, answers);
  return { day: '2026-11-01', version: 'A', right: t.right, of: t.of, form: 2, mc: t.mc, wrong: t.wrong, idk: t.idk };
}

describe('"Wat ken je al?": then and now', () => {
  it('two runs of someone who learned nothing (only the guesses differ): "Meer dan toen" at most 5 times in 100 (a part or all)', () => {
    const rng = createRng(42);
    for (const knows of [0, 0.3, 0.6]) {
      let up = 0;
      let upAll = 0;
      const n = 1000;
      for (let i = 0; i < n; i++) {
        const a = simulate(rng, knows, 0);
        const b = simulate(rng, knows, 0);
        if (growthOf(a, b, 'listen') === 'up') up += 1;
        if (growthOf(a, b) === 'up') upAll += 1;
      }
      expect(up / n, `knows ${knows}, a part`).toBeLessThan(0.05);
      expect(upAll / n, `knows ${knows}, all`).toBeLessThan(0.05);
    }
  });

  it('someone who learned a lot (from 2 to 5 of 7 known in every part): "Meer dan toen" over the whole test nearly always', () => {
    const rng = createRng(7);
    let up = 0;
    let upHonest = 0;
    for (let i = 0; i < 500; i++) {
      if (growthOf(simulate(rng, 2 / 7, 0), simulate(rng, 5 / 7, 0)) === 'up') up += 1;
      if (growthOf(simulate(rng, 2 / 7, 0.8), simulate(rng, 5 / 7, 0.8)) === 'up') upHonest += 1;
    }
    expect(up / 500).toBeGreaterThan(0.9);
    expect(upHonest / 500).toBeGreaterThan(0.98);
  });

  it('a step of 1 or 2 questions in a part is "ongeveer gelijk"; with honest answers 3 is "Meer dan toen", with many guesses it is not', () => {
    const r = (right: number, wrong: number): ToetsRun => ({ day: '2026-11-01', version: 'A', right: score(right, right, right), of: score(7, 7, 7), form: 2, mc: score(5, 5, 5), wrong: score(wrong, wrong, wrong), idk: score(7 - right - wrong, 7 - right - wrong, 7 - right - wrong) });
    expect(growthOf(r(2, 0), r(3, 0), 'listen')).toBe('same');
    expect(growthOf(r(2, 0), r(4, 0), 'listen')).toBe('same');
    expect(growthOf(r(2, 0), r(5, 0), 'listen')).toBe('up');
    // The same step, with many wrong picks both times: within what guessing gives.
    expect(growthOf(r(2, 4), r(5, 2), 'listen')).toBe('same');
    expect(growthOf(r(5, 0), r(1, 0), 'listen')).toBe('down');
    // Over the whole test (21 questions) a step of 3 is enough with honest answers.
    expect(growthOf(r(2, 0), r(3, 0))).toBe('up');
  });

  it('a start of form 1 (6 picks a part) and an end of form 2 compare by share, with the guessing taken out of both', () => {
    const old: ToetsRun = { day: '2026-10-01', version: 'A', right: score(2, 2, 2), of: score(6, 6, 6) }; // what guessing gives: known 0
    const now: ToetsRun = { day: '2026-11-01', version: 'B', right: score(6, 6, 6), of: score(7, 7, 7), form: 2, mc: score(5, 5, 5), wrong: score(0, 0, 0), idk: score(1, 1, 1) };
    expect(growthOf(old, now)).toBe('up');
    expect(growthOf(old, old)).toBe('same');
  });
});

describe('"Wat ken je al?": when it is offered', () => {
  const taal: Progress = { ...emptyProgress, onboarded: true, helpLang: 'pl' };
  const lessons = (n: number) => Object.fromEntries(['l.hello', 'l.people', 'l.arrive', 'l.understand'].slice(0, n).map((id) => [id, { best: 1, times: 1 }]));
  const tally: ToetsTally = { right: score(2, 3, 1), of: score(7, 7, 7), mc: score(5, 5, 5), wrong: score(1, 1, 2), idk: score(4, 3, 4) };

  it('offers the start after the first lesson, not before it, not after a few lessons, not in the work-rules track', () => {
    // The very first home: lesson 1.1 with Start, no test yet.
    expect(INSTAP_FROM_LESSONS).toBe(1);
    expect(toetsOffer(taal, day(2026, 10, 30), 0)).toBeNull();
    expect(toetsOffer({ ...taal, completed: lessons(1) }, day(2026, 10, 30), 0)).toBe('instap');
    expect(toetsOffer({ ...taal, completed: lessons(INSTAP_UNTIL_LESSONS - 1) }, day(2026, 10, 30), 0)).toBe('instap');
    expect(toetsOffer({ ...taal, completed: lessons(INSTAP_UNTIL_LESSONS) }, day(2026, 10, 30), 0)).toBeNull();
    expect(toetsOffer({ ...taal, helpLang: 'nl' }, day(2026, 10, 30), 0)).toBeNull();
  });

  it('"Later" passes the start over; the end then still comes', () => {
    const later = toetsLater(taal, 'instap', day(2026, 10, 1), 0);
    expect(later.toets?.skipped).toBe('2026-10-01');
    expect(toetsOffer(later, day(2026, 10, 2), 0)).toBeNull();
    expect(toetsOffer(later, day(2026, 10, 29), 0)).toBe('eind');
  });

  it('offers the end after 28 days or 3 more topics, whichever comes first; keeps the counts of form 2', () => {
    const done = recordToets(taal, 'instap', tally, day(2026, 10, 1), 1);
    expect(done.toets?.instap).toEqual({ day: '2026-10-01', version: 'A', ...tally, form: 2 });
    expect(toetsOffer(done, day(2026, 10, 1 + END_DAYS - 1), 1)).toBeNull();
    expect(toetsOffer(done, day(2026, 10, 1 + END_DAYS), 1)).toBe('eind');
    expect(toetsOffer(done, day(2026, 10, 10), 3)).toBeNull();
    expect(toetsOffer(done, day(2026, 10, 10), 4)).toBe('eind');
    // "Later" on the end: a week.
    const wait = toetsLater(done, 'eind', day(2026, 10, 10), 4);
    expect(toetsOffer(wait, day(2026, 10, 16), 4)).toBeNull();
    expect(toetsOffer(wait, day(2026, 10, 17), 4)).toBe('eind');
    // Done: never again by itself; Settings offers the end (version B).
    const end = recordToets(done, 'eind', tally, day(2026, 10, 29), 4);
    expect(end.toets?.eind?.version).toBe('B');
    expect(end.toets?.instap).toEqual(done.toets?.instap);
    expect(toetsOffer(end, day(2026, 12, 1), 9)).toBeNull();
    expect(settingsMoment(end, day(2026, 12, 1), 9)).toBe('eind');
    expect(settingsMoment(taal, day(2026, 12, 1), 0)).toBe('instap');
  });

  it('the check of Starten (instapCheck): a start of form 2 needs the same share with the guessing out, 6 of 7', () => {
    const run = (words: number, wrong: number): ToetsRun => ({ day: '2026-10-29', version: 'A', right: score(6, words, 2), of: score(7, 7, 7), form: 2, mc: score(5, 5, 5), wrong: score(0, wrong, 0), idk: score(1, 7 - words - wrong, 5) });
    const with_ = (r: ToetsRun) => ({ toets: { v: 1 as const, instap: r } });
    expect(checkLevel(with_(run(6, 0)))).toBe(true);
    expect(checkLevel(with_(run(6, 1)))).toBe(false); // 6 right, but one wrong pick: 5.5 known
    expect(checkLevel(with_(run(5, 0)))).toBe(false);
  });
});

describe('"Wat ken je al?": what is kept', () => {
  const run = { day: '2026-10-01', version: 'A', right: { listen: 2, words: 3, sentences: 1 }, of: { listen: 6, words: 6, sentences: 6 } };
  const run2 = { day: '2026-11-01', version: 'A', right: score(2, 3, 1), of: score(7, 7, 7), form: 2, mc: score(5, 5, 5), wrong: score(1, 1, 2), idk: score(4, 3, 4) };

  it('reads its own version only, and drops what it cannot read', () => {
    expect(readToets({ v: 1, instap: run, start: '2026-10-01', unitsAt: 2 })).toEqual({ v: 1, instap: run, start: '2026-10-01', unitsAt: 2 });
    expect(readToets({ v: 2, instap: run })).toBeUndefined();
    expect(readToets('x')).toBeUndefined();
    // A broken run (more right than asked, a bad day) is left out, the rest stays.
    expect(readToets({ v: 1, instap: { ...run, right: { ...run.right, listen: 9 } }, skipped: '2026-10-01' })).toEqual({ v: 1, skipped: '2026-10-01' });
    expect(readToets({ v: 1, eind: { ...run, day: 'gisteren' } })).toEqual({ v: 1 });
  });

  it('reads a run of form 2 with its counts; counts that do not add up are dropped (the run reads as form 1)', () => {
    expect(readToets({ v: 1, instap: run2 })).toEqual({ v: 1, instap: run2 });
    const bad = (x: object) => readToets({ v: 1, instap: { ...run2, ...x } })?.instap;
    expect(bad({ wrong: score(6, 1, 2) })).toEqual({ day: run2.day, version: 'A', right: run2.right, of: run2.of }); // more wrong picks than picks
    expect(bad({ idk: score(7, 3, 4) })).toEqual({ day: run2.day, version: 'A', right: run2.right, of: run2.of }); // more than asked
    expect(bad({ form: 'twee' })).toEqual({ day: run2.day, version: 'A', right: run2.right, of: run2.of });
    expect(bad({ mc: undefined })).toEqual({ day: run2.day, version: 'A', right: run2.right, of: run2.of });
  });

  it('an older app reads a run of form 2 as a run (its day, version, right and of)', () => {
    // What the reader of form 1 checked: these four fields, nothing else.
    const r = readToets({ v: 1, instap: run2 })!.instap!;
    expect([r.day, r.version, r.right, r.of]).toEqual([run2.day, 'A', run2.right, run2.of]);
  });

  it('loads an old save without the test as before, and a save with it', async () => {
    const store = new Map<string, string>();
    (globalThis as { localStorage?: unknown }).localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };
    const { loadProgress } = await import('../src/lib/progress');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, helpLang: 'pl', themeVersion: 2, completed: { 'l.hello': { best: 1, times: 1 } } }));
    const old = loadProgress();
    expect(old.toets).toBeUndefined();
    expect(old.completed['l.hello']).toEqual({ best: 1, times: 1 });
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, completed: {}, toets: { v: 1, instap: run } }));
    expect(loadProgress().toets).toEqual({ v: 1, instap: run });
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, completed: {}, toets: { v: 1, instap: run, eind: { ...run2, version: 'B' } } }));
    expect(loadProgress().toets?.eind).toEqual({ ...run2, version: 'B' });
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, completed: {}, toets: { v: 99 } }));
    expect('toets' in loadProgress()).toBe(false);
  });

  it('goes along in the backup, and adding a backup keeps both moments', () => {
    const p: Progress = { ...emptyProgress, toets: { v: 1, instap: run as never } };
    const back = parseBackup(backupFile(p, new Date()));
    expect(back?.toets).toEqual(p.toets);
    expect(replaceWithBackup(emptyProgress, back!).toets).toEqual(p.toets);
    const end = { ...run2, day: '2026-10-29', version: 'B' };
    const merged = mergeBackup({ ...emptyProgress, toets: { v: 1, eind: end as never } }, back!);
    expect(merged.toets?.instap).toEqual(run);
    expect(merged.toets?.eind).toEqual(end);
  });
});

describe('"Wat ken je al?": counting and texts', () => {
  it('counts only that it started and ended, with the version, never a score', () => {
    expect(countPath('toets-start', { lesson: 'a' })).toBe('/e/toets-start/a');
    expect(countPath('toets-done', { lesson: 'b' })).toBe('/e/toets-done/b');
  });

  it('every new text has its x form in the languages with gender', () => {
    const keys = Object.keys(uiEn).filter((k) => k.startsWith('toets'));
    expect(keys.length).toBeGreaterThan(15);
    for (const src of helpLanguageSources.filter((s) => GENDERED_LANGS.includes(s.code as never))) {
      for (const k of keys) {
        const t = src.ui[k as keyof typeof uiEn];
        expect(t, `${src.code} ${k}`).toBeTruthy();
        if (typeof t === 'object' && !isPlural(t)) expect(t.x, `${src.code} ${k}`).toBeTruthy();
      }
    }
  });

  it('every help language has "Ik weet het niet" and the words for then and now', () => {
    for (const src of helpLanguageSources) {
      for (const k of ['toetsIdk', 'toetsMore', 'toetsSame', 'toetsMoreAll', 'toetsSameAll', 'toetsNotSure'] as const) expect(src.ui[k], `${src.code} ${k}`).toBeTruthy();
    }
    // The hint no longer says "just pick one".
    expect(uiEn.toetsNotSure).not.toMatch(/pick one/i);
  });
});

describe('"Wat ken je al?": the screens', () => {
  it('every question has "Ik weet het niet"; building and writing are the lessons\' own; the end says then against now', async () => {
    const { createElement } = await import('react');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { ToetsPlayer, ToetsResult } = await import('../src/components/Toets');
    const noop = () => {};
    const at = (startAt: number, code: 'pl' | 'ar') => renderToStaticMarkup(createElement(ToetsPlayer, { moment: 'instap', lang: getHelpLanguage(code), seed: 1, startAt, onQuit: noop, onDone: noop }));
    for (let i = 0; i < TOETS_VERSIONS.A.length; i++) expect(at(i, 'pl'), `question ${i}`).toContain('toets-idk');
    expect(at(5, 'pl')).toContain('build-steps');
    expect(at(19, 'pl')).toContain('build-steps');
    expect(at(12, 'pl')).toContain('type-input'); // the keyboard (Latin script)
    expect(at(12, 'ar')).toContain('hear-pick'); // hear and pick (another script)
    expect(at(TOETS_VERSIONS.A.length, 'pl')).not.toContain('toets-idk'); // speaking: not scored
    const run = (right: ToetsScore, version: 'A' | 'B'): ToetsRun => ({ day: '2026-11-01', version, right, of: score(7, 7, 7), form: 2, mc: score(5, 5, 5), wrong: score(0, 0, 0), idk: score(0, 0, 0) });
    const lang = getHelpLanguage('pl');
    const html = renderToStaticMarkup(createElement(ToetsResult, { moment: 'eind', now: run(score(6, 3, 1), 'B'), before: run(score(1, 3, 1), 'A'), lang, onDone: noop }));
    expect(html).toContain('Meer dan toen');
    expect(html).toContain('Ongeveer gelijk');
    expect(html).toContain('Alles samen: je kent nu meer dan toen.');
    // After the start: no then and now.
    expect(renderToStaticMarkup(createElement(ToetsResult, { moment: 'instap', now: run(score(1, 3, 1), 'A'), lang, onDone: noop }))).not.toContain('toets-growth');
  });
});

describe('"Wat ken je al?": "Durf je dit?" (5 November 2026)', () => {
  const durfIds = TOETS_DURF.map((d) => d.id);
  const run = (version: 'A' | 'B', durf?: ToetsDurf): ToetsRun => ({ day: version === 'A' ? '2026-10-02' : '2026-10-30', version, right: score(2, 2, 2), of: score(7, 7, 7), form: 2, mc: score(5, 5, 5), wrong: score(1, 1, 1), idk: score(2, 2, 2), ...(durf ? { durf } : {}) });

  it('five questions, the agreed ones, none about calling in sick; three answers', () => {
    expect(TOETS_DURF.map((d) => d.nl)).toEqual([
      'Zeggen dat je iets niet begrijpt',
      'Iets vragen aan je leidinggevende',
      'Om hulp vragen',
      'Zeggen dat iets niet veilig is',
      'Even praten met een collega in de pauze',
    ]);
    expect(new Set(durfIds).size).toBe(5);
    expect(TOETS_DURF.some((d) => /ziek/i.test(d.nl) || /sick/i.test(uiEn[d.key]))).toBe(false);
    expect(DURF_ANSWERS).toEqual([0, 1, 2]);
  });

  it('every question has a drawn picture of the course (never an emoji) and its Dutch is the Dutch of its key', async () => {
    const { default: drawn } = await import('../src/pictures/words');
    const { uiNl } = await import('../src/i18n/nl');
    for (const d of TOETS_DURF) {
      expect(drawn[d.picture], d.picture).toBeTypeOf('function');
      expect(uiNl[d.key], d.key).toBe(d.nl);
    }
  });

  it('every new text in every help language, with an x form in the gendered ones', () => {
    const keys = ['toetsDurfIntro', 'toetsDurfAsk', 'toetsDurfNotYet', 'toetsDurfABit', 'toetsDurfYes', 'toetsDurfAgain', ...TOETS_DURF.map((d) => d.key)] as const;
    for (const src of helpLanguageSources) {
      for (const k of keys) {
        const t = src.ui[k];
        expect(t, `${src.code} ${k}`).toBeTruthy();
        if (typeof t === 'object' && !isPlural(t)) expect(t.x, `${src.code} ${k}`).toBeTruthy();
      }
    }
    // Arabic and Tigrinya address the learner: "Durf je dit?" has its forms for man, woman and x.
    for (const code of ['ar', 'ti'] as const) {
      const t = helpLanguageSources.find((s) => s.code === code)!.ui.toetsDurfAsk;
      expect(typeof t === 'object' && 'm' in t && 'f' in t && 'x' in t, code).toBe(true);
    }
  });

  it('is kept with the run (recordToets), at both moments, never in the score', () => {
    const answers: ToetsDurf = { understand: 0, boss: 1, help: 2, unsafe: 1, break: 0 };
    const tally: ToetsTally = { right: score(2, 2, 2), of: score(7, 7, 7), mc: score(5, 5, 5), wrong: score(1, 1, 1), idk: score(2, 2, 2) };
    const p = { ...emptyProgress, helpLang: 'pl', themeVersion: 2 } as Progress;
    const start = recordToets(p, 'instap', tally, day(2026, 10, 2), 0, answers);
    expect(start.toets?.instap?.durf).toEqual(answers);
    expect(knownOf(start.toets!.instap!, 'listen')).toBe(1);
    const end = recordToets(start, 'eind', tally, day(2026, 10, 30), 3, { ...answers, understand: 2 });
    expect(end.toets?.eind?.durf?.understand).toBe(2);
    expect(end.toets?.instap?.durf).toEqual(answers);
    // Without answers (a test from before), as before: no durf.
    expect('durf' in recordToets(p, 'instap', tally, day(2026, 10, 2), 0).toets!.instap!).toBe(false);
    expect('durf' in recordToets(p, 'instap', tally, day(2026, 10, 2), 0, {}).toets!.instap!).toBe(false);
  });

  it('reads what it can: known questions with 0, 1 or 2; the rest is left out, and the run stays', () => {
    expect(readDurf({ understand: 0, boss: 2 })).toEqual({ understand: 0, boss: 2 });
    expect(readDurf({ understand: 3, boss: '1', ziek: 1, help: 1.5, unsafe: -1 })).toBeUndefined();
    expect(readDurf({ understand: 1, onbekend: 2 })).toEqual({ understand: 1 });
    expect(readDurf([0, 1, 2])).toBeUndefined();
    expect(readDurf('ja')).toBeUndefined();
    const r = run('A', { understand: 0, boss: 1, help: 2, unsafe: 1, break: 0 });
    expect(readToets({ v: 1, instap: r })?.instap).toEqual(r);
    expect(readToets({ v: 1, instap: { ...r, durf: { understand: 9 } } })?.instap).toEqual(run('A'));
  });

  it('goes along in the backup, and adding a backup keeps each moment\'s answers', () => {
    const p: Progress = { ...emptyProgress, toets: { v: 1, instap: run('A', { understand: 0, help: 1 }) } };
    const back = parseBackup(backupFile(p, new Date()));
    expect(back?.toets?.instap?.durf).toEqual({ understand: 0, help: 1 });
    const merged = mergeBackup({ ...emptyProgress, toets: { v: 1, eind: run('B', { understand: 2, help: 2 }) } }, back!);
    expect(merged.toets?.instap?.durf).toEqual({ understand: 0, help: 1 });
    expect(merged.toets?.eind?.durf).toEqual({ understand: 2, help: 2 });
  });

  it('then and now: each question answered at both moments, in order; nothing when the start has none', () => {
    const a = run('A', { understand: 0, boss: 0, unsafe: 1, break: 2 });
    const b = run('B', { break: 2, understand: 1, boss: 2, help: 2, unsafe: 1 });
    expect(durfThenNow(a, b)).toEqual([
      { id: 'understand', then: 0, now: 1 },
      { id: 'boss', then: 0, now: 2 },
      { id: 'unsafe', then: 1, now: 1 },
      { id: 'break', then: 2, now: 2 },
    ]);
    expect(durfThenNow(run('A'), b)).toEqual([]);
    expect(durfThenNow(undefined, b)).toEqual([]);
    expect(durfThenNow(a, run('B'))).toEqual([]);
  });

  it('is never counted: the count still has only the start and the end, with the version', () => {
    expect(readFileSync('src/lib/count.ts', 'utf8')).not.toMatch(/durf/i);
    const app = readFileSync('src/App.tsx', 'utf8');
    const counts = app.split('\n').filter((l) => /count\('toets-/.test(l));
    expect(counts.length).toBe(2);
    for (const line of counts) expect(line).not.toMatch(/durf/i);
  });

  it('the privacy texts say the answers stay on the phone and are not counted', async () => {
    const { PRIVACY } = await import('../src/lib/privacyPage');
    const all = PRIVACY.flatMap((s) => s.paras).join(' ');
    expect(all).toContain('je antwoorden op de vragen “Durf je dit?”');
    expect(all).toContain('Niet de uitslag van de toets, en niet je antwoorden op “Durf je dit?”.');
    const { aboutSections } = await import('../src/content/about');
    const free = aboutSections.find((s) => s.id === 'a.free')!;
    expect(free.nl?.body).toContain('je antwoorden op “Durf je dit?”');
    expect(free.body).toContain('your answers to “Do you dare?”');
  });
});

describe('"Wat ken je al?": the screens of "Durf je dit?"', () => {
  const noop = () => {};
  const render = async (props: Record<string, unknown>, code: 'pl' | 'ar' = 'pl', gender?: 'm' | 'f' | 'x') => {
    const { createElement } = await import('react');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { ToetsPlayer } = await import('../src/components/Toets');
    return renderToStaticMarkup(createElement(ToetsPlayer, { moment: 'instap', lang: getHelpLanguage(code, gender), seed: 1, onQuit: noop, onDone: noop, ...props }));
  };
  const faces = (html: string) => (html.match(/class="toets-durf-face[ "]/g) ?? []).length;

  it('the test starts with it: the line about it, "Durf je dit?", the Dutch with a speaker, three faces, no "Ik weet het niet"', async () => {
    const html = await render({});
    expect(html).toContain('toets-durf-intro');
    expect(html).toContain('Eerst 5 vragen over jou. Er is geen goed of fout.');
    expect(html).toContain('Najpierw 5 pytań o ciebie.');
    expect(html).toContain('Durf je dit?');
    expect(html).toContain('Zeggen dat je iets niet begrijpt');
    expect(html).toContain('Powiedzieć, że czegoś nie rozumiesz');
    expect(faces(html)).toBe(3);
    for (const t of ['Nog niet', 'Een beetje', 'Ja', 'Jeszcze nie', 'Trochę', 'Tak']) expect(html).toContain(`>${t}<`);
    expect(html).not.toContain('toets-idk');
    // Counted with the test: 5 + 21 + 1 steps.
    expect(html).toContain(`1 / ${TOETS_DURF.length + TOETS_VERSIONS.A.length + 1}`);
  });

  it('one screen per question; only the first has the line; the first question of the test then has its hint', async () => {
    for (let i = 0; i < TOETS_DURF.length; i++) {
      const html = await render({ durfAt: i });
      expect(html, `durf ${i}`).toContain(TOETS_DURF[i].nl);
      expect(faces(html), `durf ${i}`).toBe(3);
      expect(html.includes('toets-durf-intro'), `durf ${i}`).toBe(i === 0);
    }
    const first = await render({ startAt: 0 });
    expect(first).not.toContain('toets-durf');
    expect(first).toContain('toets-idk');
    expect(first).toContain('Nie wiesz?');
    expect(first).toContain(`${TOETS_DURF.length + 1} / `);
  });

  it('Arabic: the forms for a woman and for x', async () => {
    expect(await render({}, 'ar', 'f')).toContain('هل تجرئين على هذا؟');
    expect(await render({}, 'ar', 'x')).toContain('هل يمكن فعل هذا بثقة؟');
  });

  it('the result: after the end then and now per question; after the start one line; an end without a start\'s answers: nothing', async () => {
    const { createElement } = await import('react');
    const { renderToStaticMarkup } = await import('react-dom/server');
    const { ToetsResult } = await import('../src/components/Toets');
    const lang = getHelpLanguage('pl');
    const base = { right: score(2, 2, 2), of: score(7, 7, 7), form: 2, mc: score(5, 5, 5), wrong: score(0, 0, 0), idk: score(5, 5, 5) };
    const a: ToetsRun = { day: '2026-10-02', version: 'A', ...base, durf: { understand: 0, boss: 0, help: 1, unsafe: 1, break: 2 } };
    const b: ToetsRun = { day: '2026-10-30', version: 'B', ...base, durf: { understand: 1, boss: 0, help: 2, unsafe: 2, break: 2 } };
    const end = renderToStaticMarkup(createElement(ToetsResult, { moment: 'eind', now: b, before: a, lang, onDone: noop }));
    expect((end.match(/class="toets-durf-row"/g) ?? []).length).toBe(5);
    expect(end).toContain('durf-face-0');
    expect(end).toContain('Ty wtedy: Jeszcze nie. Ty teraz: Trochę.');
    expect(end).not.toMatch(/<button[^>]*toets-durf/); // nothing to tap: only Continue
    const old = renderToStaticMarkup(createElement(ToetsResult, { moment: 'eind', now: b, before: { ...a, durf: undefined }, lang, onDone: noop }));
    expect(old).not.toContain('toets-durf');
    const start = renderToStaticMarkup(createElement(ToetsResult, { moment: 'instap', now: a, lang, onDone: noop }));
    expect(start).toContain('Durf je dit? Na een paar weken vragen we het nog een keer.');
    expect(start).not.toContain('toets-durf-row');
  });
});
