import { describe, expect, it } from 'vitest';
import { typoMarks } from '../src/lib/answers';
import { feedbackTitle } from '../src/lib/feedbackTitle';
import { applyReview, INTERVALS } from '../src/lib/spaced';

// Typed almost right: "Bijna goed!", the typo marked in the learner's own answer, the word stays in its box.
describe('almost right', () => {
  it('says "Bijna goed!", not "Goed zo!"', () => {
    expect(feedbackTitle(true, 'type', true)).toBe('Bijna goed!');
    expect(feedbackTitle(true, 'type')).toBe('Goed zo!');
  });

  it('marks the letter that differs, in the learner\'s answer', () => {
    expect(typoMarks('sollisiteren', 'solliciteren')).toEqual([{ text: 'solli', typo: false }, { text: 's', typo: true }, { text: 'iteren', typo: false }]);
    expect(typoMarks('het tafel', 'de tafel')).toEqual([{ text: 'het', typo: true }, { text: ' tafel', typo: false }]);
    // The article left out is not the typo; only the typo is marked.
    expect(typoMarks('helmm', 'de helm')).toEqual([{ text: 'helm', typo: false }, { text: 'm', typo: true }]);
    expect(typoMarks('helm', 'de helm')).toEqual([{ text: '‸', typo: true }, { text: 'helm', typo: false }]);
    // A letter left out: a caret at its place.
    expect(typoMarks('solliciteen', 'solliciteren')).toEqual([{ text: 'sollicite', typo: false }, { text: '‸', typo: true }, { text: 'en', typo: false }]);
  });

  it('keeps an almost word in its box (not up, not back to 1)', () => {
    const today = '2026-11-01';
    const cards = { 'w.a': { box: 3, due: today }, 'w.b': { box: 3, due: today } };
    const next = applyReview(cards, { 'w.a': true, 'w.b': true }, today, ['w.a', 'w.b'], ['w.a']);
    expect(next['w.a'].box).toBe(3);
    expect(next['w.a'].due).toBe(`2026-11-0${1 + INTERVALS[2]}`);
    expect(next['w.b'].box).toBe(4);
  });
});
