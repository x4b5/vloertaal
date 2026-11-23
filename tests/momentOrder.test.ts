import { describe, expect, it, vi } from 'vitest';
import { HOME_CARDS, RESULT_QUESTIONS, RESULT_ROW_HIDDEN_BY, firstDue, rowFits } from '../src/lib/momentOrder';

/**
 * Which moment goes first (src/lib/momentOrder.ts). The order itself is the owner's choice; these
 * tests hold what it was on 11 November 2026, when it moved here from App.tsx unchanged.
 */
describe('the first that is due', () => {
  it('none due: nothing', () => {
    expect(firstDue(['a', 'b'], { a: () => false, b: () => undefined })).toBeNull();
  });

  it('the first in the order wins, whatever is due after it', () => {
    expect(firstDue(['a', 'b', 'c'], { a: () => false, b: () => true, c: () => true })).toBe('b');
    expect(firstDue(['c', 'b', 'a'], { a: () => true, b: () => true, c: () => true })).toBe('c');
  });

  it('what comes after the first due one is not asked at all', () => {
    const later = vi.fn(() => true);
    expect(firstDue(['a', 'b'], { a: () => 'yes', b: later })).toBe('a');
    expect(later).not.toHaveBeenCalled();
  });
});

describe('the cards on the home', () => {
  const card = (due: Partial<Record<(typeof HOME_CARDS)[number], boolean>>) =>
    firstDue(HOME_CARDS, { notice: () => due.notice, bridge: () => due.bridge, nudge: () => due.nudge, reason: () => due.reason });

  it('a notice, then the work rules, then the backup, then the reason', () => {
    expect([...HOME_CARDS]).toEqual(['notice', 'bridge', 'nudge', 'reason']);
    expect(card({ notice: true, bridge: true, nudge: true, reason: true })).toBe('notice');
    expect(card({ bridge: true, nudge: true, reason: true })).toBe('bridge');
    expect(card({ nudge: true, reason: true })).toBe('nudge');
    expect(card({ reason: true })).toBe('reason');
    expect(card({})).toBeNull();
  });
});

describe('the result of a lesson', () => {
  const question = (due: Partial<Record<(typeof RESULT_QUESTIONS)[number], boolean>>) =>
    firstDue(RESULT_QUESTIONS, { phrases: () => due.phrases, faster: () => due.faster, feel: () => due.feel });

  it('one question a screen: the emergency phrases, then "Wil je sneller?", then the faces', () => {
    expect(question({ phrases: true, faster: true, feel: true })).toBe('phrases');
    expect(question({ faster: true, feel: true })).toBe('faster');
    expect(question({ feel: true })).toBe('feel');
    expect(question({})).toBeNull();
  });

  it('"Oefen samen" makes room for the emergency phrases and the faces, not for "Wil je sneller?"', () => {
    expect(rowFits('samen', null)).toBe(true);
    expect(rowFits('samen', 'faster')).toBe(true);
    expect(rowFits('samen', 'phrases')).toBe(false);
    expect(rowFits('samen', 'feel')).toBe(false);
  });

  it('"Probeer het vandaag op je werk" makes room for "Wil je sneller?" and the faces, not for the emergency phrases', () => {
    expect(rowFits('workTry', null)).toBe(true);
    expect(rowFits('workTry', 'phrases')).toBe(true);
    expect(rowFits('workTry', 'faster')).toBe(false);
    expect(rowFits('workTry', 'feel')).toBe(false);
  });

  it('a row only makes room for a question that exists', () => {
    for (const hiddenBy of Object.values(RESULT_ROW_HIDDEN_BY)) for (const q of hiddenBy) expect(RESULT_QUESTIONS).toContain(q);
  });
});
