import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { GeluktLine, GeluktPage } from '../src/components/GeluktCard';
import { Milestone } from '../src/components/Milestone';
import { Route } from '../src/components/Route';
import { RulesPathNote } from '../src/components/RulesHelp';
import { ToetsHomeLine, ToetsOfferPage } from '../src/components/Toets';
import { getHelpLanguage } from '../src/i18n/all';
import { registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import { registerRulesCourse } from '../src/content/courses';
import { toCourseUnits } from '../src/content/regels/course';
import { RULES_STUB } from '../src/dev/rulesStub';
import { ui } from '../src/i18n';
import { emptyProgress, type Progress } from '../src/lib/progress';
import type { DailyCard } from '../src/lib/spaced';
import { INSTAP_UNTIL_LESSONS, toetsAfterLesson, toetsLater, toetsOffer } from '../src/lib/toets';
import { setRulesTrack } from '../src/lib/track';
import type { WorkTryLine } from '../src/lib/workTry';

/**
 * The route after the lesson (verbeterplan fase 2, 4 November 2026): the test and "Gelukt?" as
 * small lines under the next lesson (never in its place, only with room for them: at most 3 things
 * to tap), and the first day's streak with the reminder on one screen. Review first:
 * tests/reviewFirst.test.ts.
 */
const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const pl = () => getHelpLanguage('pl')!;
const nl = () => getHelpLanguage('nl')!;
const noop = () => {};
const afterFirst = (extra: Partial<Progress> = {}): Progress => ({ ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'none', completed: { 'l.hello': { best: 1, times: 1 } }, ...extra });
const card = (state: DailyCard['state'], extra = 0): DailyCard => ({ state, due: state === 'due' ? 6 : 0, tomorrow: 0, extra });
const line: WorkTryLine = { id: 's.hello.1', nl: 'Goedemorgen, ik ben nieuw.', en: 'Good morning, I am new.' };
/** The things to tap on the home (the same as the max-3 counter: buttons and the rules' summary). */
const taps = (m: string) => (m.match(/<button\b/g) ?? []).length + (m.match(/<summary\b/g) ?? []).length;
const route = (p: Progress, props: Partial<Parameters<typeof Route>[0]> = {}) =>
  html(createElement(Route, { progress: p, lang: pl(), onStart: noop, onPick: noop, onAll: noop, onDaily: noop, ...props }));
const toetsLine = { id: 'toets', node: createElement(ToetsHomeLine, { moment: 'instap', lang: pl(), onOpen: noop }) };
const geluktLine = { id: 'gelukt', node: createElement(GeluktLine, { line, lang: pl(), onOpen: noop }) };

beforeEach(() => {
  const store = new Map<string, string>();
  (globalThis as { localStorage?: unknown }).localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v), removeItem: (k: string) => void store.delete(k) };
});
beforeAll(() => {
  registerPack(nlPack);
  registerRulesCourse(toCourseUnits(RULES_STUB));
});
afterEach(() => setRulesTrack(null));

describe('the test and "Gelukt?" under the lesson, not in its place', () => {
  it('after the first lesson: lesson 1.2 is the yellow card, the test a line under it (3 things to tap)', () => {
    const m = route(afterFirst(), { daily: card('first'), lines: [toetsLine] });
    expect(m).not.toContain('home-offer');
    expect(m).toMatch(/<button type="button" class="bay-card" aria-label="1\.2 [^"]+ · Start"/);
    expect(m).toContain('bay-char');
    expect(m.indexOf('rb-current')).toBeLessThan(m.indexOf('toets-line-home'));
    expect(m.indexOf('toets-line-home')).toBeLessThan(m.indexOf('rb-other'));
    expect(m).toContain('Wat ken je al?');
    expect(m).toContain('10 min');
    expect(taps(m)).toBe(3);
  });

  it('fills only what is left of the three, the most important first; with words due nothing is left', () => {
    const both = route(afterFirst(), { lines: [geluktLine, toetsLine] });
    expect(both).toContain('gelukt-line');
    expect(both).not.toContain('toets-line-home');
    expect(taps(both)).toBe(3);
    const due = route(afterFirst(), { daily: card('due'), lines: [geluktLine, toetsLine] });
    expect(due).not.toContain('gelukt-line');
    expect(due).not.toContain('toets-line-home');
    expect(taps(due)).toBe(3);
  });

  it('a card in the block\'s place (two buttons) leaves no room for a line', () => {
    const offer = createElement('section', { className: 'notice-card' }, createElement('button', { type: 'button' }, 'a'), createElement('button', { type: 'button' }, 'b'));
    const m = route(afterFirst(), { offer, lines: [geluktLine, toetsLine] });
    expect(m).toContain('home-offer');
    expect(m).not.toContain('gelukt-line');
    expect(m).not.toContain('toets-line-home');
    expect(taps(m)).toBe(3);
  });

  it('Werkregels: "Over deze regels" is the last line, so it makes room for "Gelukt?" and for "Herhaal vandaag"', () => {
    setRulesTrack(true);
    const p = { ...afterFirst(), helpLang: 'nl' as const, completed: { 'r.l.start.1': { best: 1, times: 1 } } };
    const rules = { id: 'rules', node: createElement(RulesPathNote, { lang: nl() }) };
    const gelukt = { id: 'gelukt', node: createElement(GeluktLine, { line: { ...line, en: '' }, lang: nl(), onOpen: noop }) };
    const plain = route(p, { lang: nl(), lines: [rules] });
    expect(plain).toContain('Over deze regels');
    expect(taps(plain)).toBe(3);
    const withGelukt = route(p, { lang: nl(), lines: [gelukt, rules] });
    expect(withGelukt).toContain('gelukt-line');
    expect(withGelukt).not.toContain('Over deze regels');
    expect(taps(withGelukt)).toBe(3);
    // Before: 4 things ("Herhaal vandaag", the lesson, "Over deze regels", "Ander onderwerp").
    const due = route(p, { lang: nl(), daily: card('due'), lines: [rules] });
    expect(due).not.toContain('Over deze regels');
    expect(taps(due)).toBe(3);
  });

  it('their pages: the card under a back arrow, the help language and the Dutch', () => {
    const t = html(createElement(ToetsOfferPage, { moment: 'instap', lang: pl(), onBack: noop, onDo: noop, onLater: noop }));
    expect(t).toContain('chrome-back');
    expect(t).toContain('Doe de toets');
    expect(t).toContain('toets-later');
    const g = html(createElement(GeluktPage, { line, lang: pl(), onBack: noop, onAnswer: noop }));
    expect(g).toContain('chrome-back');
    expect(g).toContain('Goedemorgen, ik ben nieuw.');
    expect(g).toContain('notice-ok');
    // The line says the sentence it asks about, in Dutch.
    const l = html(createElement(GeluktLine, { line, lang: pl(), onOpen: noop }));
    expect(l).toContain('Heb je dit op je werk gezegd?');
    expect(l).toContain(ui('geluktAsk', pl()).help as string);
    expect(l).toContain('Goedemorgen, ik ben nieuw.');
  });
});

describe('"Wat ken je al?" left on its line', () => {
  const taal: Progress = { ...emptyProgress, onboarded: true, helpLang: 'pl' };
  const lessons = (n: number) => Object.fromEntries(['l.hello', 'l.people', 'l.arrive', 'l.understand'].slice(0, n).map((id) => [id, { best: 1, times: 1 }]));
  const day = new Date(2026, 10, 4, 12);

  it('a lesson that takes it past its last day on offer passes it over, as "Later": the end still comes', () => {
    const before = { ...taal, completed: lessons(INSTAP_UNTIL_LESSONS - 1) };
    const after = { ...taal, completed: lessons(INSTAP_UNTIL_LESSONS) };
    expect(toetsOffer(before, day)).toBe('instap');
    const passed = toetsAfterLesson(before, after, day);
    expect(passed.toets?.skipped).toBe('2026-11-04');
    expect(passed.toets).toEqual(toetsLater(after, 'instap', day).toets);
    expect(toetsOffer(passed, new Date(2026, 11, 2, 12))).toBe('eind');
  });

  it('leaves everything else as it is', () => {
    // Still on offer after the lesson.
    const one = { ...taal, completed: lessons(1) };
    const two = { ...taal, completed: lessons(2) };
    expect(toetsAfterLesson(one, two, day)).toBe(two);
    // Not on offer before (done, put off, or a learner from before the test with many lessons).
    const many = { ...taal, completed: lessons(4) };
    expect(toetsAfterLesson(many, many, day)).toBe(many);
    const later = toetsLater(two, 'instap', day);
    const later3 = { ...later, completed: lessons(3) };
    expect(toetsAfterLesson(later, later3, day)).toBe(later3);
  });
});

describe('after the first lesson: the streak and the reminder on one screen', () => {
  it('day 1: the streak with "Je reeks is begonnen" above the reminder\'s three answers, no Verder', () => {
    const m = html(createElement(Milestone, { streak: 1, lang: pl(), onDone: noop }));
    expect(m).toContain('keep-streak');
    expect(m).toContain(ui('streakStarted', pl()).help as string);
    expect(m).toContain('keep-yes');
    expect(m).toContain('keep-other');
    expect(m).toContain('keep-no');
    expect(m).not.toContain('milestone-foot');
    expect(m).not.toContain('streak-hero');
    expect(taps(m)).toBe(3);
  });

  it('once: the reminder offered before (or later days), the milestone with Verder as before', () => {
    localStorage.setItem('vloertaal.keepOffered', '1');
    const first = html(createElement(Milestone, { streak: 1, lang: pl(), onDone: noop }));
    expect(first).toContain('milestone-foot');
    expect(first).not.toContain('keep-streak');
    localStorage.removeItem('vloertaal.keepOffered');
    const seven = html(createElement(Milestone, { streak: 7, lang: pl(), onDone: noop }));
    expect(seven).toContain('milestone-foot');
    expect(seven).not.toContain('keep-yes');
  });
});
