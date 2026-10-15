import { beforeAll, describe, expect, it } from 'vitest';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { courseUnits, findLessonIn, learnedItems, registerRulesCourse } from '../src/content/courses';
import { learnedWords, teachingLessons, units } from '../src/content/curriculum';
import type { RuleStep } from '../src/content/regels/types';
import type { Lesson, Unit } from '../src/content/types';
import { buildLesson, GRADED_RULE_KINDS, isGraded } from '../src/lib/exercises';
import {
  DAILY_ID, RULE_DAILY_MAX, addDays, addLessonItems, addLessonWords, applyReview, dailyCard, dailyRuleIds,
  dailyRuleLesson, dailyWordIds, dueIds, gradedStepIds, isGradedStep, strongerCount, type Cards,
} from '../src/lib/spaced';
import { CERT_NOTE, SEAL_RING, SEAL_RING_RULES, certData, certListLabel, certMeta, certRules, certSub, keyPhrases, keyRules, sealRing } from '../src/lib/certificate';
import { POCKET_SIZE, pocketPhrases } from '../src/lib/pocket';

/**
 * M4 of the work-rules track: what is counted ("{n} regels"), "Herhaal vandaag" with the
 * questions of finished lessons, the certificate and the pocket card of a rules unit.
 */

const TODAY = '2026-10-15';
beforeAll(() => registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits])));

const rc = () => courseUnits('regels');
const unit = (id: string): Unit => rc().find((u) => u.id === id)!;
const lesson = (id: string): Lesson => findLessonIn('regels', id)!.lesson;
const done = (...ids: string[]) => Object.fromEntries(ids.map((id) => [id, { best: 1, times: 1 }]));
const stepsOf = (l: Lesson): RuleStep[] => l.steps ?? [];
const allSteps = () => rc().flatMap((u) => u.lessons.flatMap(stepsOf));

describe('counts: rules learned', () => {
  it('counts the rule cards of finished rules lessons', () => {
    expect(learnedItems('regels', {})).toBe(0);
    expect(learnedItems('regels', done('r.l.loon.1'))).toBe(1);
    expect(learnedItems('regels', done(...unit('r.loon').lessons.map((l) => l.id)))).toBe(3);
    // A lesson not finished, or one of the other course, adds nothing.
    expect(learnedItems('regels', done('r.l.loon.1', 'l.hello', 'r.l.nothing'))).toBe(1);
    // Every finished rules lesson has exactly one rule card.
    const every = rc().flatMap((u) => u.lessons.map((l) => l.id));
    expect(learnedItems('regels', done(...every))).toBe(every.length);
  });

  it('keeps counting words in the language course, as before', () => {
    const ids = teachingLessons.slice(0, 4).map((l) => l.id);
    const completed = done(...ids, 'r.l.loon.1');
    expect(learnedItems('taal', completed)).toBe(learnedWords(completed).size);
    expect(learnedItems('taal', completed)).toBeGreaterThan(0);
    expect(learnedItems('taal', done('r.l.loon.1', 'r.l.loon.2'))).toBe(0);
  });
});

describe('daily review of the rules track', () => {
  it('gives the questions of a finished lesson a card, keyed by step id (only graded steps)', () => {
    const l = lesson('r.l.loon.2');
    const ids = gradedStepIds(l);
    expect(ids.length).toBeGreaterThanOrEqual(2);
    for (const id of ids) expect(GRADED_RULE_KINDS).toContain(stepsOf(l).find((s) => s.id === id)!.kind);
    // No story, rule card or model sentence in the box.
    expect(ids.some((id) => /\.(sc|ru|mo)\d+$/.test(id))).toBe(false);
    const cards = addLessonItems({}, ids, {}, TODAY);
    for (const id of ids) expect(cards[id]).toEqual({ box: 1, due: addDays(TODAY, 1) });
    // Wrong in a later run: back to box 1; right (or not asked): it keeps its place.
    const later = { ...cards, [ids[0]]: { box: 4, due: '2026-11-01' }, [ids[1]]: { box: 3, due: '2026-10-25' } };
    const again = addLessonItems(later, ids, { [ids[0]]: false, [ids[1]]: true }, TODAY);
    expect(again[ids[0]]).toEqual({ box: 1, due: addDays(TODAY, 1) });
    expect(again[ids[1]]).toEqual(later[ids[1]]);
  });

  it('keeps addLessonWords as the same thing for words', () => {
    const words = teachingLessons[2].words;
    const results = { [words[0].id]: false };
    const start: Cards = { [words[0].id]: { box: 3, due: '2026-10-20' }, [words[1].id]: { box: 2, due: '2026-10-18' } };
    expect(addLessonWords(start, words, results, TODAY)).toEqual(addLessonItems(start, words.map((w) => w.id), results, TODAY));
  });

  it('asks at most 6 due questions, oldest first, then the lowest box; nothing that is not due', () => {
    const ids = rc().slice(0, 4).flatMap((u) => u.lessons.flatMap(gradedStepIds));
    expect(ids.length).toBeGreaterThan(RULE_DAILY_MAX * 2);
    const cards: Cards = Object.fromEntries(ids.map((id, i) => [id, { box: 1 + (i % 3), due: addDays(TODAY, i < 10 ? -(i % 4) : 2) }]));
    const due = dueIds(cards, TODAY, 'regels');
    expect(due).toHaveLength(10);
    const picked = dailyRuleIds(cards, TODAY);
    expect(picked).toHaveLength(RULE_DAILY_MAX);
    expect(picked).toEqual(due.slice(0, RULE_DAILY_MAX));
    // Oldest due date first, and within a day the lowest box first.
    for (let i = 1; i < picked.length; i++) {
      const [a, b] = [cards[picked[i - 1]], cards[picked[i]]];
      expect(a.due < b.due || (a.due === b.due && a.box <= b.box)).toBe(true);
    }
    // Only two due: two questions, not topped up with tomorrow's.
    const few: Cards = { [ids[0]]: { box: 1, due: TODAY }, [ids[1]]: { box: 2, due: addDays(TODAY, -1) }, [ids[2]]: { box: 1, due: addDays(TODAY, 1) } };
    expect(dailyRuleIds(few, TODAY)).toEqual([ids[1], ids[0]]);
    expect(dailyRuleIds({ [ids[0]]: { box: 1, due: addDays(TODAY, 1) } }, TODAY)).toEqual([]);
  });

  it('builds a review of questions only (no story, no rule card, no model sentence), at most 6', () => {
    // Every step of a whole unit, stories and rule cards included: only the questions stay.
    const everything = unit('r.zoeken').lessons.flatMap((l) => stepsOf(l).map((s) => s.id));
    const review = dailyRuleLesson(everything);
    expect(review.id).toBe(DAILY_ID);
    expect(review.words).toEqual([]);
    expect(review.steps!.length).toBe(RULE_DAILY_MAX);
    for (const s of review.steps!) expect(isGradedStep(s)).toBe(true);
    const ex = buildLesson(review, { review: true, seed: 3 });
    expect(ex).toHaveLength(RULE_DAILY_MAX);
    for (const e of ex) {
      expect(['scene', 'rule', 'model']).not.toContain(e.kind);
      expect(isGraded(e)).toBe(true);
    }
    // The order given is kept; unknown ids and words are left out.
    const two = gradedStepIds(lesson('r.l.loon.1')).slice(0, 2).reverse();
    expect(dailyRuleLesson([two[0], 'w.hallo', 'r.l.nothing.tf1', two[1]]).steps!.map((s) => s.id)).toEqual(two);
  });

  it('moves a rules question through the boxes like a word', () => {
    const [a, b] = gradedStepIds(lesson('r.l.ziek.1'));
    let cards: Cards = { [a]: { box: 1, due: TODAY }, [b]: { box: 3, due: TODAY } };
    const after = applyReview(cards, { [a]: true, [b]: false }, TODAY);
    expect(after[a]).toEqual({ box: 2, due: addDays(TODAY, 2) });
    expect(after[b]).toEqual({ box: 1, due: addDays(TODAY, 1) });
    expect(strongerCount(cards, after)).toBe(1);
    cards = applyReview({ [a]: { box: 6, due: TODAY } }, { [a]: true }, TODAY);
    expect(cards[a]).toEqual({ box: 6, due: addDays(TODAY, 30) });
  });

  it('keeps the two tracks apart in the one box of cards', () => {
    const words = teachingLessons[0].words.map((w) => w.id);
    const steps = gradedStepIds(lesson('r.l.start.1'));
    const cards: Cards = Object.fromEntries([...words, ...steps].map((id) => [id, { box: 1, due: TODAY }]));
    expect(dueIds(cards, TODAY, 'regels').sort()).toEqual([...steps].sort());
    expect(dueIds(cards, TODAY).sort()).toEqual([...words].sort());
    expect(dailyWordIds(cards, TODAY).every((id) => id.startsWith('w.'))).toBe(true);
    // The home's card: the rules track counts its questions (at most 6 a day).
    expect(dailyCard(cards, TODAY, undefined, 'regels')).toEqual({ state: 'due', due: Math.min(steps.length, RULE_DAILY_MAX), tomorrow: Math.min(steps.length, RULE_DAILY_MAX), extra: 0 });
    // Only words in the box: no card in the rules track (and the other way round).
    expect(dailyCard(Object.fromEntries(words.map((id) => [id, { box: 1, due: TODAY }])), TODAY, undefined, 'regels')).toBeNull();
    expect(dailyCard(Object.fromEntries(steps.map((id) => [id, { box: 1, due: TODAY }])), TODAY)).toBeNull();
    // Many questions due: the card says 6, the rest wait.
    const many = rc().flatMap((u) => u.lessons.flatMap(gradedStepIds)).slice(0, 20);
    const c = dailyCard(Object.fromEntries(many.map((id) => [id, { box: 1, due: TODAY }])), TODAY, undefined, 'regels')!;
    expect(c.due).toBe(RULE_DAILY_MAX);
    expect(dailyCard(Object.fromEntries(many.map((id) => [id, { box: 1, due: TODAY }])), TODAY, TODAY, 'regels')).toMatchObject({ state: 'done', extra: 20 });
  });

  it('uses the same graded kinds as the lesson player', () => {
    for (const s of allSteps()) expect(isGradedStep(s), s.id).toBe(GRADED_RULE_KINDS.includes(s.kind));
  });
});

describe('certificate of a rules unit', () => {
  it('lists the key rules of a unit with two or more of them', () => {
    const zoeken = unit('r.zoeken');
    expect(keyRules(zoeken)).toEqual(['Echt werk kost jou nooit geld.', 'Eerst lezen, dan tekenen.']);
    expect(certRules(zoeken)).toEqual(keyRules(zoeken));
    expect(certRules(unit('r.rechten'))).toEqual(['Je paspoort en je bankpas geef je nooit af.', 'Teken nooit iets over ontslag zonder advies.']);
  });

  it("lists the lessons' Onthoud lines when a unit has fewer than two key rules", () => {
    const loon = unit('r.loon');
    expect(keyRules(loon)).toHaveLength(1);
    expect(certRules(loon)).toEqual(loon.lessons.map((l) => l.rule!.remember));
    // A sector unit has no key rule at all.
    const build = unit('r.build');
    expect(keyRules(build)).toEqual([]);
    expect(certRules(build)).toEqual(build.lessons.map((l) => l.rule!.remember));
    // Every rules unit gets at least two lines.
    for (const u of rc()) expect(certRules(u).length, u.id).toBeGreaterThanOrEqual(2);
  });

  it('says it is about the rules of work, in Dutch, and keeps the title "Oefencertificaat"', () => {
    const d = certData(unit('r.loon'), '2026-10-08', 'Fatima', undefined, 'none');
    expect(d.rules).toBe(true);
    expect(d.phrases).toEqual(certRules(unit('r.loon')));
    expect(d.titleNl).toBe('Loon en loonstrook');
    expect(d.titleEn).toBe('');
    expect(d.date).toBe('8 oktober 2026');
    expect(d.words).toBe(3);
    expect(certSub(d)).toBe('Werken in Nederland');
    expect(certListLabel(d)).toBe('Belangrijkste regels');
    expect(certMeta(d)).toBe('Werken in Nederland · 3 lessen · 3 regels');
    expect(sealRing(d)).toBe(SEAL_RING_RULES);
    expect(CERT_NOTE).toMatch(/^Oefencertificaat/);
    // Nothing on it is about learning Dutch.
    for (const text of [certSub(d), certListLabel(d), certMeta(d), sealRing(d), ...d.phrases]) {
      expect(text).not.toMatch(/Nederlands|woord|Kernwoorden/);
    }
    // The ring is as long as the language course's, so it fills the seal the same way.
    expect(SEAL_RING_RULES.length).toBe(SEAL_RING.length);
  });

  it('leaves the language course certificate as it was', () => {
    const d = certData(units[0], '2026-10-08', '');
    expect(d.rules).toBeUndefined();
    expect(d.phrases).toEqual(keyPhrases(units[0], 8));
    expect(certSub(d)).toBe('Nederlands voor het werk');
    expect(certListLabel(d)).toBe('Kernwoorden');
    expect(certMeta(d)).toMatch(/^Nederlands voor het werk · \d+ lessen · \d+ woorden$/);
    expect(sealRing(d)).toBe(SEAL_RING);
  });
});

describe('pocket card of a rules unit', () => {
  it('puts the key rules first, then the Onthoud lines, then sentences to say; five rows', () => {
    const zoeken = unit('r.zoeken');
    const rows = pocketPhrases(zoeken);
    expect(rows).toHaveLength(POCKET_SIZE);
    expect(rows.slice(0, 2).map((r) => r.nl)).toEqual(keyRules(zoeken));
    const remember = zoeken.lessons.map((l) => l.rule!.remember).filter((r) => !keyRules(zoeken).includes(r));
    expect(rows.slice(2, 2 + remember.length).map((r) => r.nl)).toEqual(remember);
    expect(rows.slice(2 + remember.length).every((r) => r.rule === 'say')).toBe(true);
  });

  it('fills every rules card with its own lines, never twice, in Dutch only', () => {
    for (const u of rc()) {
      const rows = pocketPhrases(u);
      // Five rows at most (a short sector unit of two lessons has its 2 rules and 2 sentences).
      const models = u.lessons.flatMap((l) => stepsOf(l).filter((s) => s.kind === 'model'));
      expect(rows.length, u.id).toBe(Math.min(POCKET_SIZE, new Set([...keyRules(u), ...u.lessons.map((l) => l.rule!.remember)]).size + models.length));
      expect(new Set(rows.map((r) => r.nl.toLowerCase())).size, u.id).toBe(rows.length);
      const own = new Set(u.lessons.flatMap((l) => [l.rule!.remember, ...stepsOf(l).flatMap((s) => (s.kind === 'rule' ? [s.title] : s.kind === 'model' ? [s.nl] : []))]));
      for (const r of rows) {
        expect(own.has(r.nl), `${u.id}: ${r.nl}`).toBe(true);
        expect(r.en, r.id).toBe('');
        expect(r.rule).toMatch(/^(rule|say)$/);
      }
      // The order: rules (key ones first), then the sentences to say.
      const kinds = rows.map((r) => r.rule);
      expect(kinds.indexOf('say') === -1 || kinds.slice(kinds.indexOf('say')).every((k) => k === 'say'), u.id).toBe(true);
      const keys = keyRules(u);
      expect(rows.slice(0, keys.length).map((r) => r.nl), u.id).toEqual(keys.slice(0, POCKET_SIZE));
      // Every lesson's Onthoud line is on it, as far as five rows go.
      const lines = [...new Set([...keys, ...u.lessons.map((l) => l.rule!.remember)])];
      expect(rows.slice(0, Math.min(lines.length, POCKET_SIZE)).map((r) => r.nl), u.id).toEqual(lines.slice(0, POCKET_SIZE));
    }
  });

  it('gives each row its own id and an emoji, and leaves the language cards as they were', () => {
    const rows = pocketPhrases(unit('r.veilig'));
    expect(new Set(rows.map((r) => r.id)).size).toBe(rows.length);
    for (const r of rows) expect(r.picture?.emoji.length, r.id).toBeGreaterThan(0);
    // The two recorded model sentences of r.veilig are on its card.
    expect(rows.map((r) => r.nl)).toContain('Stop! Dit is niet veilig.');
    for (const u of units) for (const p of pocketPhrases(u)) expect(p.rule, `${u.id} ${p.id}`).toBeUndefined();
  });
});
