import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { ASK_WHO } from '../src/content/regels/askWho';
import { cardSpeech, toCourseUnits } from '../src/content/regels/course';
import { RULES_ABUSE, RULES_ADVICE, RULES_CIVIC } from '../src/content/regels/disclaimer';
import type { AskWho } from '../src/content/regels/types';
import { registerRulesCourse } from '../src/content/courses';
import { LessonPlayer } from '../src/components/LessonPlayer';
import { CardStep, cardTag, PayslipStep, RULE_KIND_TAG, RuleCard, RuleFeedbackBody, ruleAnnouncement, ruleVerdict, TF_OPTIONS, WhoAsk } from '../src/components/RuleSteps';
import { getHelpLanguage, registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import { buildLesson, buildRuleLesson, forRetry, GRADED_RULE_KINDS, isGraded, isRuleExercise, RULE_KINDS, type Exercise, type RuleExercise } from '../src/lib/exercises';
import { kindsOf, makeSave, restoreSave } from '../src/lib/resume';

/**
 * The work-rules track's step kinds as the player builds and shows them (M3): at most three
 * answers and exactly one best, a why on every question, a seeded build (resume), a review
 * without the story and the rule card, and kinds that never clash in a saved run's fingerprint.
 */

const units = toCourseUnits([...rulesUnits, ...sectorRulesUnits]);
const lessons = units.flatMap((u) => u.lessons);
const SEEDS = [1, 7, 42, 999];

beforeAll(() => {
  registerPack(nlPack);
  registerRulesCourse(units);
});

/** The answer options of a graded step, as the learner sees them. */
function optionsOf(ex: RuleExercise): { id: string; best: boolean }[] {
  switch (ex.kind) {
    case 'truefalse': return TF_OPTIONS.map((o) => ({ id: o.id, best: (o.id === 'waar') === ex.step.answer }));
    case 'whatdo':
    case 'whoask':
    case 'payslip':
    case 'card': return ex.step.options;
    default: return [];
  }
}

describe('buildRuleLesson', () => {
  it('the course has rules lessons with every kind of step', () => {
    expect(lessons.length).toBeGreaterThan(20);
    const kinds = new Set(lessons.flatMap((l) => (l.steps ?? []).map((s) => s.kind)));
    for (const k of RULE_KINDS) expect(kinds.has(k), k).toBe(true);
  });

  for (const lesson of lessons) {
    it(`${lesson.id}: at most 3 options, exactly one best, a why on every question`, () => {
      for (const seed of SEEDS) {
        const list = buildRuleLesson(lesson, { seed });
        expect(list).toHaveLength(lesson.steps!.length);
        for (const ex of list) {
          expect(isRuleExercise(ex)).toBe(true);
          const r = ex as RuleExercise;
          if (!isGraded(ex)) continue;
          const opts = optionsOf(r);
          expect(opts.length, r.step.id).toBeGreaterThanOrEqual(2);
          expect(opts.length, r.step.id).toBeLessThanOrEqual(r.kind === 'truefalse' ? 2 : 3);
          expect(opts.filter((o) => o.best), r.step.id).toHaveLength(1);
          expect(new Set(opts.map((o) => o.id)).size, r.step.id).toBe(opts.length);
          expect('why' in r.step && r.step.why.trim().length > 0, r.step.id).toBe(true);
          // The same options as written, only in another order.
          if (r.kind !== 'truefalse') {
            const written = lesson.steps!.find((s) => s.id === r.step.id)!;
            expect(new Set(opts.map((o) => o.id))).toEqual(new Set(('options' in written ? written.options : []).map((o) => o.id)));
          }
        }
      }
    });
  }

  it('the same seed builds the same lesson; buildLesson hands a lesson with steps to it', () => {
    for (const lesson of lessons) {
      for (const seed of SEEDS) {
        expect(buildRuleLesson(lesson, { seed })).toEqual(buildRuleLesson(lesson, { seed }));
        expect(buildLesson(lesson, { review: false, seed })).toEqual(buildRuleLesson(lesson, { seed }));
        expect(buildLesson(lesson, { review: true, seed, quiet: true, speak: true })).toEqual(buildRuleLesson(lesson, { seed, review: true }));
      }
    }
    // The options really are shuffled (by the seed): not every seed gives the written order.
    const orders = new Set(SEEDS.flatMap((seed) => lessons.flatMap((l) => buildRuleLesson(l, { seed })
      .filter((e) => e.kind === 'whatdo').map((e) => (e as Extract<Exercise, { kind: 'whatdo' }>).step.options.map((o) => o.id).join('')))));
    expect(orders.size).toBeGreaterThan(1);
  });

  it('a review leaves out the story and the rule card, and keeps the rest in order', () => {
    for (const lesson of lessons) {
      const full = buildRuleLesson(lesson, { seed: 3 });
      const review = buildRuleLesson(lesson, { seed: 3, review: true });
      expect(review.some((e) => e.kind === 'scene' || e.kind === 'rule')).toBe(false);
      expect(review.map((e) => (e as RuleExercise).step.id)).toEqual(
        full.filter((e) => e.kind !== 'scene' && e.kind !== 'rule').map((e) => (e as RuleExercise).step.id));
    }
  });

  it('true/false, what do you do, who do you ask, the payslip and the card are graded; the rest goes on', () => {
    expect([...GRADED_RULE_KINDS].sort()).toEqual(['card', 'payslip', 'truefalse', 'whatdo', 'whoask']);
    for (const lesson of lessons) {
      for (const ex of buildRuleLesson(lesson, { seed: 1 })) {
        expect(isGraded(ex), ex.kind).toBe(GRADED_RULE_KINDS.includes(ex.kind as never));
      }
    }
  });

  it('a mistake comes back with the same options, the best one on another place', () => {
    for (const lesson of lessons) {
      for (const ex of buildRuleLesson(lesson, { seed: 5 })) {
        if (ex.kind !== 'whatdo' && ex.kind !== 'whoask' && ex.kind !== 'payslip' && ex.kind !== 'card') continue;
        const again = forRetry(ex, lesson, 11) as typeof ex;
        const ids = (e: typeof ex) => e.step.options.map((o) => o.id);
        expect(new Set(ids(again))).toEqual(new Set(ids(ex)));
        const best = (e: typeof ex) => e.step.options.findIndex((o) => o.best);
        expect(best(again), ex.step.id).not.toBe(best(ex));
      }
    }
  });
});

describe('kindsOf (resume)', () => {
  const LANGUAGE_KINDS = ['intro', 'meaning', 'dutch', 'listen', 'match', 'build', 'type', 'chat', 'tip', 'situation', 'speak'];

  it('every kind has its own two letters', () => {
    const keys = [...LANGUAGE_KINDS, ...RULE_KINDS].map((kind) => kindsOf([{ kind }]));
    expect(keys.every((k) => k.length === 2)).toBe(true);
    expect(new Set(keys).size).toBe(keys.length);
    expect(kindsOf([{ kind: 'whatdo' }, { kind: 'whoask' }])).toBe('whwi');
    expect(kindsOf([{ kind: 'card' }, { kind: 'payslip' }])).toBe('capa');
  });

  it('the language course keeps its old fingerprint (saved runs still restore)', () => {
    for (const kind of LANGUAGE_KINDS) expect(kindsOf([{ kind }])).toBe(kind.slice(0, 2));
  });

  it('a rules lesson stopped halfway resumes from its seed', () => {
    const lesson = lessons.find((l) => l.id === 'r.l.loon.2')!;
    const initial = buildLesson(lesson, { review: false, seed: 77 });
    const queue = [...initial, initial[2]];
    const save = makeSave({ lessonId: lesson.id, review: false, quiet: false, seed: 77, initial, queue, index: 4, right: 1, total: 2, words: {}, run: 1, misses: 0, now: 1 })!;
    const back = restoreSave(save, buildLesson(lesson, { review: false, seed: 77 }))!;
    expect(back.index).toBe(4);
    expect(back.queue).toEqual(queue);
    // A list built another way (a review has no story or rule card) does not match: fresh start.
    expect(restoreSave(save, buildLesson(lesson, { review: true, seed: 77 }))).toBeNull();
  });
});

describe('rule steps on screen', () => {
  const nl = () => getHelpLanguage('nl')!;
  const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&quot;/g, '"').replace(/&amp;/g, '&');

  it('every place to go for help has a Dutch name and a picture', () => {
    const used = new Set(lessons.flatMap((l) => (l.steps ?? []).flatMap((s) => (s.kind === 'whoask' ? s.options.map((o) => o.who) : []))));
    for (const who of used) {
      expect(ASK_WHO[who as AskWho].label.length, who).toBeGreaterThan(2);
      expect(ASK_WHO[who as AskWho].emoji.length, who).toBeGreaterThan(0);
    }
    expect(ASK_WHO.juridischloket.label).toBe('Het Juridisch Loket');
    expect(ASK_WHO.leidinggevende.label).toBe('Je leidinggevende');
  });

  it('every place to go for help says in at most 6 words what it is, under its name on the card', () => {
    const words = (s: string) => s.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;
    for (const [who, a] of Object.entries(ASK_WHO)) {
      expect(a.what.trim().length, who).toBeGreaterThan(0);
      expect(words(a.what), `${who}: ${a.what}`).toBeLessThanOrEqual(6);
      // A short line, not a sentence: small letter, no full stop, no abbreviation in brackets.
      expect(a.what, who).not.toMatch(/[.!?()]$/);
    }
    // On every "Wie vraag je het?" card: the name, then the short line, inside the one card;
    // no extra button (the cards are the only taps, max 3).
    const steps = lessons.flatMap((l) => l.steps ?? []).filter((s): s is Extract<typeof s, { kind: 'whoask' }> => s.kind === 'whoask');
    expect(steps.length).toBeGreaterThan(10);
    for (const step of steps) {
      const out = html(createElement(WhoAsk, { ex: { kind: 'whoask', step }, lang: nl(), locked: false, onAnswer: () => {} }));
      expect(out.match(/<button(?![^>]*speak)/g)?.length, step.id).toBe(step.options.length);
      for (const o of step.options) {
        expect(out, `${step.id} ${o.who}`).toContain(`<span class="rule-who-name">${ASK_WHO[o.who].label}</span><span class="sr-only">, </span><span class="rule-who-what">${ASK_WHO[o.who].what}</span>`);
      }
    }
    // After another pick, the best answer in the feedback has its short line too.
    const wa = buildRuleLesson(lessons.find((l) => l.id === 'r.l.loon.2')!, { seed: 1 }).find((e) => e.kind === 'whoask') as Extract<Exercise, { kind: 'whoask' }>;
    const bestWho = wa.step.options.find((o) => o.best)!.who;
    const wrong = ruleVerdict(wa, false, wa.step.options.find((o) => !o.best)!.id)!;
    expect(wrong.best).toMatchObject({ text: ASK_WHO[bestWho].label, what: ASK_WHO[bestWho].what });
    expect(html(createElement(RuleFeedbackBody, { v: wrong, lang: nl() }))).toContain(`<span class="rule-who-what">${ASK_WHO[bestWho].what}</span>`);
  });

  it('a learner text never names a lesson by its curriculum number ("les 10.1"): the app shows no numbers', () => {
    const texts = lessons.flatMap((l) => [l.title, l.rule?.goal, l.rule?.remember, JSON.stringify(l.steps ?? [])]);
    for (const t of texts) expect(t ?? '').not.toMatch(/\bles \d+\.\d/i);
  });

  it('a written rule carries its advice line and its tag; a key rule its pocket-card mark', () => {
    const steps = lessons.flatMap((l) => l.steps ?? []);
    const written = steps.filter((s): s is Extract<typeof s, { kind: 'rule' }> => s.kind === 'rule' && s.rule === 'geschreven');
    const custom = steps.find((s) => s.kind === 'rule' && s.rule === 'ongeschreven');
    expect(written.length).toBeGreaterThan(10);
    for (const step of written) {
      const out = html(createElement(RuleCard, { ex: { kind: 'rule', step }, lang: nl(), locked: false, onAnswer: () => {} }));
      expect(out).toContain(RULE_KIND_TAG.geschreven);
      expect(out.includes(RULES_ADVICE) || out.includes(RULES_ABUSE) || out.includes(RULES_CIVIC), step.id).toBe(true);
      expect(out.includes('Op je spiekkaartje'), step.id).toBe(Boolean(step.key));
      expect(out).not.toContain('lang="en"');
    }
    if (custom && custom.kind === 'rule') {
      const out = html(createElement(RuleCard, { ex: { kind: 'rule', step: custom }, lang: nl(), locked: false, onAnswer: () => {} }));
      expect(out).toContain(RULE_KIND_TAG.ongeschreven);
      expect(out).not.toContain(RULES_ADVICE);
      expect(out).not.toContain(RULES_ABUSE);
      expect(out).not.toContain(RULES_CIVIC);
    }
  });

  it('every step kind plays in the lesson player in Dutch only', () => {
    const lesson = lessons.find((l) => l.id === 'r.l.loon.2')!;
    const list = buildRuleLesson(lesson, { seed: 1 });
    for (let at = 0; at < list.length; at++) {
      const out = html(createElement(LessonPlayer, { lesson, review: false, lang: nl(), exercises: list, startAt: at, onQuit: () => {}, onFinish: () => {} }));
      expect(out, list[at].kind).not.toContain('lang="en"');
      expect(out).not.toMatch(/class="[^"]*bi-help/);
      expect(out).toMatch(/class="tag-nl" lang="nl"/);
    }
  });

  it('the feedback: the picked option\'s own line, the best answer after another pick, the why', () => {
    const lesson = lessons.find((l) => l.id === 'r.l.ziek.1')!;
    const wd = buildRuleLesson(lesson, { seed: 1 }).find((e) => e.kind === 'whatdo') as Extract<Exercise, { kind: 'whatdo' }>;
    const best = wd.step.options.find((o) => o.best)!;
    const other = wd.step.options.find((o) => !o.best)!;
    const right = ruleVerdict(wd, true, best.id)!;
    expect(right).toMatchObject({ title: 'Goed zo!', own: best.feedback, why: wd.step.why });
    expect(right.best).toBeUndefined();
    const wrong = ruleVerdict(wd, false, other.id)!;
    expect(wrong).toMatchObject({ title: 'Het beste antwoord is:', own: other.feedback, best: { text: best.text }, why: wd.step.why });
    expect(ruleAnnouncement(wrong)).toContain(other.feedback);
    expect(ruleAnnouncement(wrong)).toContain(`Het beste antwoord is: ${best.text}`);
    // The answer itself in green with a check, and no second "Beste antwoord" under the heading.
    const body = html(createElement(RuleFeedbackBody, { v: wrong, lang: nl() }));
    expect(body).toContain('feedback-answer');
    expect(body).not.toContain('Beste antwoord');
    const wa = buildRuleLesson(lessons.find((l) => l.id === 'r.l.loon.2')!, { seed: 1 }).find((e) => e.kind === 'whoask') as Extract<Exercise, { kind: 'whoask' }>;
    const bestWho = wa.step.options.find((o) => o.best)!;
    expect(ruleVerdict(wa, false, wa.step.options.find((o) => !o.best)!.id)!.best!.text).toBe(ASK_WHO[bestWho.who].label);
  });

  it('a drawn card: not buttons, the row to work out is "?" until Check, then lit up with the answer', () => {
    const steps = lessons.flatMap((l) => l.steps ?? []);
    const cards = steps.filter((s): s is Extract<typeof s, { kind: 'card' }> => s.kind === 'card');
    expect(cards.length).toBeGreaterThan(5);
    for (const step of cards) {
      const ex = { kind: 'card' as const, step };
      const before = html(createElement(CardStep, { ex, lang: nl(), locked: false, onAnswer: () => {} }));
      const after = html(createElement(CardStep, { ex, lang: nl(), locked: true, onAnswer: () => {} }));
      // The card is a figure with rows, never a button; the answers are the 3 cards below it.
      const figure = before.slice(before.indexOf('<figure'), before.indexOf('</figure>'));
      expect(figure, step.id).toContain(`card-${step.card.type}`);
      expect(figure, step.id).not.toMatch(/<button(?![^>]*speak)/);
      expect(before.match(/class="choice[ "]/g)?.length, step.id).toBe(3);
      expect(before, step.id).not.toContain('slip-hit');
      expect(after, step.id).toContain('slip-hit');
      const todo = step.card.rows.find((r) => r.answer);
      if (todo) {
        expect(figure, step.id).not.toContain(`<dd>${todo.answer}</dd>`);
        expect(after, step.id).toContain(`<dd>${todo.answer}</dd>`);
        // The speaker beside the card never reads the answer out.
        expect(cardSpeech(step.card), step.id).not.toContain(todo.answer!);
      }
      expect(before, step.id).not.toContain('lang="en"');
    }
  });

  it('a card\'s tag, and its feedback: own line, the right answer, the steps of the sum, the why', () => {
    const lesson = lessons.find((l) => l.id === 'r.l.winkel.3')!;
    const ex = buildRuleLesson(lesson, { seed: 1 }).find((e) => e.kind === 'card') as Extract<Exercise, { kind: 'card' }>;
    expect(cardTag(ex.step)).toBe('Reken het uit');
    expect(cardTag(lessons.find((l) => l.id === 'r.l.afronden.1')!.steps!.find((s) => s.kind === 'card') as { sum?: string[] })).toBe('Lees het kaartje');
    const best = ex.step.options.find((o) => o.best)!;
    const other = ex.step.options.find((o) => !o.best)!;
    const wrong = ruleVerdict(ex, false, other.id)!;
    expect(wrong).toMatchObject({ title: 'Het goede antwoord is:', own: other.feedback, best: { text: best.text }, sum: ex.step.sum, why: ex.step.why });
    expect(ruleAnnouncement(wrong)).toContain(ex.step.sum![0]);
    const out = html(createElement(RuleFeedbackBody, { v: wrong, lang: nl() }));
    expect(out).toContain('Zo reken je het');
    for (const line of ex.step.sum!) expect(out).toContain(line);
    // In the player: the tag says what to do.
    const list = buildRuleLesson(lesson, { seed: 1 });
    const at = list.findIndex((e) => e.kind === 'card');
    const page = html(createElement(LessonPlayer, { lesson, review: false, lang: nl(), exercises: list, startAt: at, onQuit: () => {}, onFinish: () => {} }));
    expect(page).toContain('Reken het uit');
    expect(page).toContain('card-kassabon');
  });

  it('the payslip is drawn as the loonstrook card, its own row lit up after Check', () => {
    const step = lessons.flatMap((l) => l.steps ?? []).find((s): s is Extract<typeof s, { kind: 'payslip' }> => s.kind === 'payslip')!;
    const before = html(createElement(PayslipStep, { ex: { kind: 'payslip', step }, lang: nl(), locked: false, onAnswer: () => {} }));
    const after = html(createElement(PayslipStep, { ex: { kind: 'payslip', step }, lang: nl(), locked: true, onAnswer: () => {} }));
    expect(before).toContain('card-loonstrook');
    expect(before).toContain(`aria-label="Loonstrook, ${step.slip.periode}"`);
    for (const r of step.slip.rows) expect(before).toContain(`slip-${r.field}`);
    expect(before).not.toContain('slip-hit');
    expect(after).toMatch(new RegExp(`slip-${step.highlight} slip-hit`));
    expect(after.match(/slip-hit/g)).toHaveLength(1);
    // The lit-up row is named for a screen reader too, and the slip has its speaker.
    expect(after.match(/hier gaat het om/g)).toHaveLength(1);
    expect(before).not.toContain('hier gaat het om');
    expect(before).toContain('card-says');
  });
});
