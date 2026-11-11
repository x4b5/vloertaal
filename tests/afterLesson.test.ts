import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { type AfterStep, afterLessonSteps, nextAfter } from '../src/lib/afterLesson';

/**
 * The screens after a lesson's result (src/lib/afterLesson.ts): one list, made once, instead of
 * every screen carrying what still had to come.
 */
describe('what follows the result', () => {
  it('nothing: an ordinary lesson, later the same day', () => {
    expect(afterLessonSteps({})).toEqual([]);
  });

  it('the day streak went up: its milestone', () => {
    expect(afterLessonSteps({ streakUp: 4 })).toEqual([{ name: 'streak', streak: 4 }]);
  });

  it('the lesson finished a topic: "Certificaat behaald"', () => {
    expect(afterLessonSteps({ cert: 'u.pay' })).toEqual([{ name: 'cert-earned', unit: 'u.pay' }]);
  });

  it('both: the certificate first, then the milestone', () => {
    expect(afterLessonSteps({ cert: 'u.pay', streakUp: 7 })).toEqual([{ name: 'cert-earned', unit: 'u.pay' }, { name: 'streak', streak: 7 }]);
  });
});

describe('going on', () => {
  it('the first of the list, and the rest goes along', () => {
    const after = afterLessonSteps({ cert: 'u.pay', streakUp: 7 });
    const first = nextAfter(after)!;
    expect(first.next).toEqual({ name: 'cert-earned', unit: 'u.pay' });
    expect(first.rest).toEqual([{ name: 'streak', streak: 7 }]);
    const second = nextAfter(first.rest)!;
    expect(second.next).toEqual({ name: 'streak', streak: 7 });
    expect(nextAfter(second.rest)).toBeNull();
  });

  it('an empty list, or none (a certificate opened from its topic): the end', () => {
    expect(nextAfter([])).toBeNull();
    expect(nextAfter(undefined)).toBeNull();
  });

  it('leaves the list it was given as it was (the screen before may still hold it)', () => {
    const after: AfterStep[] = [{ name: 'cert-earned', unit: 'u.pay' }, { name: 'streak', streak: 2 }];
    nextAfter(after);
    expect(after).toHaveLength(2);
  });
});

describe('App.tsx', () => {
  const app = readFileSync('src/App.tsx', 'utf8');

  it('no screen carries the streak or the certificate along by itself any more', () => {
    expect(app).not.toMatch(/streakUp\??:|fromCert|view\.streakUp|view\.cert\b/);
  });

  it('every screen after a lesson goes on the same way', () => {
    // The result, Oefen samen, the emergency phrases, Certificaat behaald (and its certificate), the pocket card, Voor je collega.
    expect(app.match(/onward\(view\.after\)/g)?.length).toBe(6);
  });
});
