import { describe, expect, it } from 'vitest';
import { earnCertificates, earnedCertificates, findUnit, hasCheck, unitDone, unitEarned, unitJustDone } from '../src/lib/certificate';
import {
  CHECK_KINDS, CHECK_PASS, checkDay, checkExercises, checkLesson, checkLessons, checkLevel, checkOffered, checkPassed,
  checkTopic, recordCheck, themeFirstLessonId, undoCheck,
} from '../src/lib/instapCheck';
import { kaartData, kaartRows } from '../src/lib/kaart';
import { completeLesson, emptyProgress, mergeBackup, parseBackup, backupFile, type Progress } from '../src/lib/progress';
import { doneBlocks, homeSuggestions } from '../src/lib/route';
import type { ToetsRun } from '../src/lib/toetsState';

const today = new Date(2026, 9, 30, 12);
const run = (words: number, listen: number): ToetsRun => ({ day: '2026-10-29', version: 'A', right: { listen, words, sentences: 2 }, of: { listen: 6, words: 6, sentences: 6 } });
const learner = (words = 5, listen = 5, extra: Partial<Progress> = {}): Progress => ({
  ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'none',
  toets: { v: 1, instap: run(words, listen), start: '2026-10-29', unitsAt: 0 }, ...extra,
});
const unit = (id: string) => findUnit(id)!;
const ids = (id: string) => unit(id).lessons.map((l) => l.id);

describe('instap op niveau: who gets the check', () => {
  it('needs at least 5 of 6 in Woorden and in Listening', () => {
    expect(checkLevel(learner(5, 5))).toBe(true);
    expect(checkLevel(learner(6, 6))).toBe(true);
    expect(checkLevel(learner(4, 6))).toBe(false);
    expect(checkLevel(learner(6, 4))).toBe(false);
  });

  it('no start test: no check (and so no button)', () => {
    expect(checkLevel({ toets: undefined })).toBe(false);
    expect(checkOffered({ ...learner(), toets: undefined }, unit('u.help'))).toBe(false);
    // Only the end done (no start): no check either.
    expect(checkOffered({ ...learner(), toets: { v: 1, eind: { ...run(6, 6), version: 'B' } } }, unit('u.help'))).toBe(false);
  });

  it('is offered on the topics of Starten only', () => {
    for (const id of ['u.firstday', 'u.help', 'u.tools', 'u.data', 'u.sounds']) {
      expect(checkTopic(unit(id)), id).toBe(true);
      expect(checkOffered(learner(), unit(id)), id).toBe(true);
    }
    expect(checkTopic(unit('u.safety'))).toBe(false);
    expect(checkOffered(learner(), unit('u.safety'))).toBe(false);
  });

  it('is never offered in the work-rules track', () => {
    expect(checkOffered(learner(6, 6, { helpLang: 'nl' }), unit('u.help'))).toBe(false);
  });

  it('is not offered once the topic is done, or once it was ticked off with a check', () => {
    const done = learner(5, 5, { completed: Object.fromEntries(ids('u.help').map((id) => [id, { best: 1, times: 1 }])) });
    expect(checkOffered(done, unit('u.help'))).toBe(false);
    expect(checkOffered(recordCheck(learner(), unit('u.help'), today), unit('u.help'))).toBe(false);
  });
});

describe('instap op niveau: the check', () => {
  it('has 5 questions of fixed kinds: two word questions, a word heard, a sentence, a chat', () => {
    for (const id of ['u.firstday', 'u.help', 'u.tools', 'u.data', 'u.sounds']) {
      const ex = checkExercises(unit(id), 7);
      expect(ex.map((e) => e.kind), id).toEqual([...CHECK_KINDS]);
      // The three words differ, so no question gives another away.
      const words = ex.flatMap((e) => ('word' in e ? [e.word.nl] : []));
      expect(new Set(words).size).toBe(3);
      // The right answer is always one of the options.
      for (const e of ex) if ('options' in e && 'word' in e) expect(e.options.some((o) => o.id === e.word.id)).toBe(true);
    }
  });

  it('asks about the lessons it would tick off (not the theme\'s first lesson)', () => {
    const first = new Set(unit('u.firstday').lessons[0].words.map((w) => w.id));
    for (let seed = 1; seed < 20; seed++) {
      for (const e of checkExercises(unit('u.firstday'), seed)) if ('word' in e) expect(first.has(e.word.id)).toBe(false);
    }
  });

  it('is the same for the same seed', () => {
    expect(checkExercises(unit('u.tools'), 3)).toEqual(checkExercises(unit('u.tools'), 3));
  });

  it('without sound: the word heard becomes another meaning question', () => {
    expect(checkExercises(unit('u.help'), 1, true).map((e) => e.kind)).toEqual(['meaning', 'dutch', 'meaning', 'build', 'chat']);
  });

  it('passes with at least 4 of 5 right the first time', () => {
    expect(CHECK_PASS).toBe(4);
    expect(checkPassed(5)).toBe(true);
    expect(checkPassed(4)).toBe(true);
    expect(checkPassed(3)).toBe(false);
    expect(checkPassed(0)).toBe(false);
  });

  it('plays in a lesson named after the topic', () => {
    const l = checkLesson(unit('u.help'));
    expect(l.id).toBe('u.help');
    expect(l.title).toBe(unit('u.help').title);
    expect(l.words.length).toBeGreaterThan(0);
  });
});

describe('instap op niveau: the records, and back', () => {
  it('ticks off every lesson not done yet, with the day; the topic counts as done', () => {
    const p = recordCheck(learner(), unit('u.help'), today);
    for (const id of ids('u.help')) expect(p.completed[id]).toEqual({ best: 0, times: 0, check: '2026-10-30' });
    expect(unitDone(unit('u.help'), p.completed)).toBe(true);
    expect(hasCheck(unit('u.help'), p.completed)).toBe(true);
    expect(checkDay(unit('u.help'), p.completed)).toBe('2026-10-30');
    // Done everywhere: the route's shelf, and no longer among the suggestions.
    expect(doneBlocks('none', p.completed).map((u) => u.id)).toContain('u.help');
    expect(homeSuggestions('none', p.completed).map((u) => u.id)).not.toContain('u.help');
  });

  it('keeps lessons done before as they were', () => {
    const before = learner(5, 5, { completed: { 'l.translate': { best: 0.8, times: 2 } } });
    const p = recordCheck(before, unit('u.tools'), today);
    expect(p.completed['l.translate']).toEqual({ best: 0.8, times: 2 });
    expect(p.completed['l.understood'].check).toBe('2026-10-30');
  });

  it('"Toch de lessen doen" takes the check records away, and only those', () => {
    const before = learner(5, 5, { completed: { 'l.translate': { best: 0.8, times: 2 } } });
    const p = undoCheck(recordCheck(before, unit('u.tools'), today), unit('u.tools'));
    expect(p.completed).toEqual({ 'l.translate': { best: 0.8, times: 2 } });
    expect(unitDone(unit('u.tools'), p.completed)).toBe(false);
    expect(checkOffered(p, unit('u.tools'))).toBe(true);
    // Nothing to undo: the same object.
    expect(undoCheck(p, unit('u.tools'))).toBe(p);
  });

  it('a lesson done for real afterwards gets a normal record', () => {
    const p = completeLesson(recordCheck(learner(), unit('u.help'), today), 'l.understand', 0.9, false, today);
    expect(p.completed['l.understand']).toEqual({ best: 0.9, times: 1 });
  });
});

describe('instap op niveau: the first lesson of a theme stays open', () => {
  it('Starten\'s first lesson is Hallo', () => {
    expect(themeFirstLessonId('theme.start')).toBe('l.hello');
  });

  it('a check never ticks it off', () => {
    expect(checkLessons(unit('u.firstday'), {}).map((l) => l.id)).not.toContain('l.hello');
    const p = recordCheck(learner(), unit('u.firstday'), today);
    expect(p.completed['l.hello']).toBeUndefined();
    expect(unitDone(unit('u.firstday'), p.completed)).toBe(false);
    for (const id of ids('u.firstday').slice(1)) expect(p.completed[id]?.check).toBe('2026-10-30');
  });

  it('the other topics of the theme are ticked off whole', () => {
    expect(checkLessons(unit('u.help'), {}).map((l) => l.id)).toEqual(ids('u.help'));
  });
});

describe('instap op niveau: no certificate via the check', () => {
  it('a topic ticked off with a check earns none', () => {
    const p = recordCheck(learner(), unit('u.help'), today);
    expect(unitEarned(unit('u.help'), p.completed)).toBe(false);
    expect(earnCertificates(p, today)).toBe(p);
    expect(earnedCertificates(p, today, 'taal')).toEqual([]);
  });

  it('the first lesson done for real after a check of Eerste werkdag: still no certificate', () => {
    const checked = recordCheck(learner(), unit('u.firstday'), today);
    const after = completeLesson(checked, 'l.hello', 1, false, today);
    expect(unitDone(unit('u.firstday'), after.completed)).toBe(true);
    expect(unitJustDone(checked.completed, after.completed, 'l.hello', checked.certs)).toBeUndefined();
    expect(earnCertificates(after, today).certs?.['u.firstday']).toBeUndefined();
  });

  it('comes once every lesson "via check" was done for real', () => {
    let p = recordCheck(learner(), unit('u.help'), today);
    const [a, b] = ids('u.help');
    const before = completeLesson(p, a, 1, false, today);
    expect(unitJustDone(p.completed, before.completed, a)).toBeUndefined();
    p = completeLesson(before, b, 1, false, today);
    expect(unitJustDone(before.completed, p.completed, b)?.id).toBe('u.help');
    expect(earnCertificates(p, today).certs?.['u.help']).toBe('2026-10-30');
  });
});

describe('instap op niveau: the backup', () => {
  const file = (p: Progress) => parseBackup(backupFile(p, today))!;

  it('keeps the check records', () => {
    const p = recordCheck(learner(), unit('u.help'), today);
    expect(file(p).completed).toEqual(p.completed);
  });

  it('drops a broken check, and a check on a lesson done for real', () => {
    const text = JSON.stringify({ app: 'vloertaal', version: 2, progress: { completed: {
      'l.understand': { best: 0, times: 0, check: 'gisteren' },
      'l.help.mix': { best: 1, times: 2, check: '2026-10-30' },
    } } });
    expect(parseBackup(text)!.completed).toEqual({ 'l.understand': { best: 0, times: 0 }, 'l.help.mix': { best: 1, times: 2 } });
  });

  it('adding a backup: a lesson done for real wins over a check, on either side', () => {
    const checked = recordCheck(learner(), unit('u.help'), today);
    const real = learner(5, 5, { completed: { 'l.understand': { best: 0.7, times: 1 } } });
    expect(mergeBackup(checked, file(real)).completed['l.understand']).toEqual({ best: 0.7, times: 1 });
    expect(mergeBackup(real, file(checked)).completed['l.understand']).toEqual({ best: 0.7, times: 1 });
    // The other lesson stays ticked off.
    expect(mergeBackup(real, file(checked)).completed['l.help.mix'].check).toBe('2026-10-30');
  });

  it('two checks: the later day', () => {
    const early = recordCheck(learner(), unit('u.help'), new Date(2026, 9, 20));
    const late = recordCheck(learner(), unit('u.help'), today);
    expect(mergeBackup(early, file(late)).completed['l.understand'].check).toBe('2026-10-30');
    expect(mergeBackup(late, file(early)).completed['l.understand'].check).toBe('2026-10-30');
  });
});

describe('instap op niveau: the coach card', () => {
  it('counts a topic ticked off with a check as done, and says "via check"', () => {
    const p = [unit('u.help'), unit('u.tools')].reduce((x, u) => recordCheck(x, u, today), learner());
    const d = kaartData(p, '', today);
    expect(d.unitsDone).toBe(2);
    expect(d.viaCheck).toBe(2);
    expect(d.lastUnits.every((t) => t.endsWith('(via check)'))).toBe(true);
    // "Wat kun je nu?" is about certificates: none here.
    expect(d.kunZinnen).toBe(0);
    const row = kaartRows(d).find((r) => r.label === 'Onderwerpen af')!;
    expect(row.more?.join(' ')).toContain('Via check: 2');
  });

  it('a card without a check is as before', () => {
    const p = learner(5, 5, { completed: Object.fromEntries(ids('u.help').map((id) => [id, { best: 1, times: 1 }])), certs: { 'u.help': '2026-10-28' } });
    const d = kaartData(p, '', today);
    expect(d.viaCheck).toBe(0);
    expect(d.lastUnits).toEqual([unit('u.help').titleNl]);
    expect(kaartRows(d).find((r) => r.label === 'Onderwerpen af')!.more).toEqual([unit('u.help').titleNl]);
  });
});
