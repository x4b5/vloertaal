import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { demoOn, learnerKey, nextCandidate, startDemo, stopDemo } from '../src/lib/demo';
import { isUnlocked } from '../src/lib/exercises';
import { allCourseUnits } from '../src/content/courses';

/** A Storage on a Map, as in a browser. */
function fakeStorage(): Storage {
  const m = new Map<string, string>();
  return {
    get length() { return m.size; },
    key: (i: number) => [...m.keys()][i] ?? null,
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => void m.set(k, String(v)),
    removeItem: (k: string) => void m.delete(k),
    clear: () => m.clear(),
  };
}

const g = globalThis as { localStorage?: Storage; sessionStorage?: Storage };
let before: [Storage | undefined, Storage | undefined];
beforeEach(() => {
  before = [g.localStorage, g.sessionStorage];
  g.localStorage = fakeStorage();
  g.sessionStorage = fakeStorage();
});
afterEach(() => { [g.localStorage, g.sessionStorage] = before; });

describe('the coaches\' demonstration (November 2026)', () => {
  it('puts the coach\'s own things away, keeps the phone\'s, and starts as on a new phone', () => {
    localStorage.setItem('vloertaal:v1', '{"helpLang":"uk","onboarded":true}');
    localStorage.setItem('vloertaal:speaking', 'off');
    localStorage.setItem('vloertaal.access', 'full');
    localStorage.setItem('vloertaal:count-off', '1');
    sessionStorage.setItem('vloertaal:resume', 'x');
    expect(startDemo()).toBe(true);
    expect(demoOn()).toBe(true);
    expect(localStorage.getItem('vloertaal:v1')).toBeNull();
    expect(localStorage.getItem('vloertaal:speaking')).toBeNull();
    expect(sessionStorage.getItem('vloertaal:resume')).toBeNull();
    // The phone's: the access level, the counting switch.
    expect(localStorage.getItem('vloertaal.access')).toBe('full');
    expect(localStorage.getItem('vloertaal:count-off')).toBe('1');
  });

  it('"Volgende kandidaat" wipes the candidate; "Stoppen" brings the coach\'s own back as it was', () => {
    localStorage.setItem('vloertaal:v1', '{"helpLang":"uk"}');
    localStorage.setItem('vloertaal:show-english', '1');
    startDemo();
    localStorage.setItem('vloertaal:v1', '{"helpLang":"ar"}');
    nextCandidate();
    expect(localStorage.getItem('vloertaal:v1')).toBeNull();
    expect(demoOn()).toBe(true);
    localStorage.setItem('vloertaal:v1', '{"helpLang":"pl"}');
    localStorage.setItem('vloertaal:greeted', '1');
    stopDemo();
    expect(demoOn()).toBe(false);
    expect(localStorage.getItem('vloertaal:v1')).toBe('{"helpLang":"uk"}');
    expect(localStorage.getItem('vloertaal:show-english')).toBe('1');
    expect(localStorage.getItem('vloertaal:greeted')).toBeNull();
    expect([...Array(localStorage.length).keys()].map((i) => localStorage.key(i)).some((k) => k?.startsWith('vloertaal-demo'))).toBe(false);
  });

  it('starting twice does not overwrite the coach\'s saved copy with a candidate\'s', () => {
    localStorage.setItem('vloertaal:v1', 'coach');
    startDemo();
    localStorage.setItem('vloertaal:v1', 'candidate');
    startDemo();
    stopDemo();
    expect(localStorage.getItem('vloertaal:v1')).toBe('coach');
  });

  it('opens every lesson, also one whose lesson before is not done', () => {
    const unit = allCourseUnits().find((u) => u.lessons.length > 1)!;
    const second = unit.lessons[1].id;
    expect(isUnlocked(second, {})).toBe(false);
    startDemo();
    expect(isUnlocked(second, {})).toBe(true);
  });

  it('a learner key is any vloertaal key but the phone\'s own; its own keys are not', () => {
    expect(learnerKey('vloertaal:v1')).toBe(true);
    expect(learnerKey('vloertaal.linkedUnit')).toBe(true);
    expect(learnerKey('vloertaal.access')).toBe(false);
    expect(learnerKey('vloertaal-demo:own')).toBe(false);
    expect(learnerKey('other')).toBe(false);
  });
});
