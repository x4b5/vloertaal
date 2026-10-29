import { describe, expect, it } from 'vitest';
import { feedbackMeaningKey, feedbackTitle } from '../src/lib/feedbackTitle';

// A wrong answer is already red with a cross; its heading is the right answer, not "Niet helemaal".
describe('the heading of the feedback label', () => {
  it('praises a right answer', () => {
    expect(feedbackTitle(true, 'meaning')).toBe('Goed zo!');
    expect(feedbackTitle(true, 'situation')).toBe('Goed zo!');
  });

  it('opens a wrong answer with the right one', () => {
    expect(feedbackTitle(false, 'meaning')).toBe('Het goede antwoord is:');
    expect(feedbackTitle(false, 'build')).toBe('Het goede antwoord is:');
    // A situation has a usual choice, not one right answer.
    expect(feedbackTitle(false, 'situation')).toBe('Het beste antwoord is:');
  });

  it('never says "Niet helemaal" or "Hier gaat het anders"', () => {
    for (const kind of ['meaning', 'dutch', 'listen', 'build', 'type', 'chat', 'situation'] as const) {
      expect(feedbackTitle(false, kind)).not.toMatch(/Niet helemaal|Hier gaat het anders/);
    }
  });

  it('gives the help-language meaning of the heading', () => {
    expect(feedbackMeaningKey(true, false, 'meaning')).toBe('correct');
    expect(feedbackMeaningKey(true, true, 'type')).toBe('almost');
    expect(feedbackMeaningKey(true, false, 'situation')).toBe('goodChoice');
    expect(feedbackMeaningKey(false, false, 'meaning')).toBe('correctAnswer');
    expect(feedbackMeaningKey(false, false, 'situation')).toBe('bestAnswer');
  });
});
