import { beforeAll, describe, expect, it } from 'vitest';
import { rulesUnits, sectorRulesUnits } from '../src/content/regels';
import { toCourseUnits } from '../src/content/regels/course';
import { findLessonIn, registerRulesCourse } from '../src/content/courses';
import { zlRegelsUnit } from '../src/content/regio/zuid-limburg-regels';
import { modelQuestion, zegHetWrong } from '../src/content/regels/zegHet';
import type { RuleStep } from '../src/content/regels/types';
import { buildLesson } from '../src/lib/exercises';
import { dailyRuleLesson, gradedStepIds } from '../src/lib/spaced';

/**
 * "Wat zeg je?": in a review the model sentence of a rules lesson is a question, with two
 * worse sentences beside it (src/content/regels/zegHet.ts).
 */
type Model = Extract<RuleStep, { kind: 'model' }>;
const models: Model[] = [...rulesUnits, ...sectorRulesUnits, zlRegelsUnit]
  .flatMap((u) => u.lessons.flatMap((l) => l.steps))
  .filter((s): s is Model => s.kind === 'model');
const words = (t: string) => t.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;

beforeAll(() => registerRulesCourse(toCourseUnits([...rulesUnits, ...sectorRulesUnits])));

describe('every model sentence has two wrong ones', () => {
  it('for every model step of the course and the region', () => {
    expect(models.length).toBeGreaterThan(60);
    expect(models.filter((m) => !zegHetWrong[m.id]).map((m) => m.id)).toEqual([]);
  });

  it('about as long as the model sentence, other than it, short sentences, with feedback', () => {
    for (const m of models) {
      const q = modelQuestion(m)!;
      expect(q.options.filter((o) => o.best).map((o) => o.text)).toEqual([m.nl]);
      expect(new Set(q.options.map((o) => o.text)).size, m.id).toBe(3);
      for (const o of q.options.filter((x) => !x.best)) {
        // A much shorter (or longer) wrong answer gives the right one away (docs/taal-a2.md).
        expect(o.text.length, `${m.id}: ${o.text}`).toBeGreaterThanOrEqual(Math.floor(m.nl.length * 0.65));
        expect(o.text.length, `${m.id}: ${o.text}`).toBeLessThanOrEqual(Math.ceil(m.nl.length * 1.5));
        for (const t of [o.text, o.feedback]) {
          for (const s of t.split(/(?<=[.!?])\s+/)) expect(words(s), `${m.id}: ${s}`).toBeLessThanOrEqual(12);
        }
        expect(o.feedback.trim().length, m.id).toBeGreaterThan(0);
        expect(o.say).toBe(true);
      }
    }
  });
});

describe('the model sentence comes back in the review', () => {
  const l = () => findLessonIn('regels', 'r.l.loon.2')!.lesson;
  const modelId = () => l().steps!.find((s) => s.kind === 'model')!.id;

  it('is a card of the lesson', () => {
    expect(gradedStepIds(l())).toContain(modelId());
  });

  it('is a "Wat zeg je?" question in today\'s review', () => {
    const review = dailyRuleLesson([modelId()]);
    expect(review.steps).toHaveLength(1);
    const ex = buildLesson(review, { review: true, seed: 1 });
    expect(ex).toHaveLength(1);
    expect(ex[0].kind).toBe('whatdo');
    if (ex[0].kind === 'whatdo') {
      expect(ex[0].step.id).toBe(modelId());
      expect(ex[0].step.situation).toMatch(/Wat zeg je\?$/);
      expect(ex[0].step.options).toHaveLength(3);
    }
  });

  it('a lesson played again asks it; the first time it is shown', () => {
    const again = buildLesson(l(), { review: true, seed: 2 });
    expect(again.some((e) => e.kind === 'model')).toBe(false);
    expect(again.some((e) => e.kind === 'whatdo' && e.step.id === modelId())).toBe(true);
    const first = buildLesson(l(), { review: false, seed: 2 });
    expect(first.some((e) => e.kind === 'model')).toBe(true);
  });
});
