import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { courseUnits, registerRulesCourse } from '../src/content/courses';
import { rulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { emptyProgress, loadProgress, switchTrack, type Progress } from '../src/lib/progress';
import { dailyCard, isGradedStep } from '../src/lib/spaced';
import { setRulesTrack } from '../src/lib/track';

/*
 * The two tracks (the language course and the work rules, src/lib/track.ts) share one progress.
 * Each keeps its own block, its day of "Herhaal vandaag" and its one-time pointer: switching the
 * help language to "Nederlands" and back must not lose the learner's chosen topic.
 */
beforeAll(() => registerRulesCourse(toCourseUnits(rulesUnits)));
beforeEach(() => setRulesTrack(true));
afterEach(() => setRulesTrack(null));

const taal: Progress = { ...emptyProgress, onboarded: true, helpLang: 'pl', currentUnit: 'u.pay', reviewDay: '2026-10-29', phrasesShown: true };

describe('each track keeps its own place', () => {
  it('to Nederlands and back: the chosen block, the review day and the pointer come back', () => {
    const rules = switchTrack(taal, 'nl');
    expect(rules).toMatchObject({ helpLang: 'nl', currentUnit: undefined, reviewDay: undefined, phrasesShown: undefined });
    const busy = { ...rules, currentUnit: 'r.ziek', reviewDay: '2026-10-28' };
    const back = switchTrack(busy, 'pl');
    expect(back).toMatchObject({ helpLang: 'pl', currentUnit: 'u.pay', reviewDay: '2026-10-29', phrasesShown: true });
    expect(switchTrack(back, 'nl')).toMatchObject({ currentUnit: 'r.ziek', reviewDay: '2026-10-28' });
  });

  it('another language of the same track changes nothing else', () => {
    expect(switchTrack(taal, 'ar')).toEqual({ ...taal, helpLang: 'ar' });
    expect(switchTrack(taal, null)).toEqual({ ...taal, helpLang: null });
  });

  it("the language review done today does not mark the rules track's review done", () => {
    const rules = switchTrack(taal, 'nl');
    const step = courseUnits('regels').flatMap((u) => u.lessons).flatMap((l) => l.steps ?? []).find(isGradedStep)!;
    const card = dailyCard({ [step.id]: { box: 1, due: '2026-10-29' } }, '2026-10-29', rules.reviewDay, 'regels');
    expect(card?.state).toBe('due');
    // Before: one review day for both tracks, so this said "done".
    expect(dailyCard({ [step.id]: { box: 1, due: '2026-10-29' } }, '2026-10-29', taal.reviewDay, 'regels')?.state).toBe('done');
    expect(card?.state).toBe('due');
  });

  it('keeps the parked place across a reload, and drops anything malformed', () => {
    const store = new Map<string, string>();
    globalThis.localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v), removeItem: (k: string) => void store.delete(k) } as Storage;
    store.set('vloertaal:v1', JSON.stringify(switchTrack(taal, 'nl')));
    expect(loadProgress().parked).toEqual({ currentUnit: 'u.pay', reviewDay: '2026-10-29', phrasesShown: true });
    store.set('vloertaal:v1', JSON.stringify({ ...taal, parked: { currentUnit: 3, reviewDay: 'gisteren' } }));
    expect(loadProgress().parked).toEqual({});
  });
});
