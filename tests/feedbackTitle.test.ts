import { describe, expect, it } from 'vitest';
import { feedbackMeaningKey, feedbackTitle } from '../src/lib/feedbackTitle';
import { getHelpLanguage, helpLanguages, ui } from '../src/i18n/all';
import { uiNl } from '../src/i18n/nl';
import { uiEn } from '../src/i18n/types';

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
    // Wrong: an announcement of the answer, like the Dutch heading (4 November 2026).
    expect(feedbackMeaningKey(false, false, 'meaning')).toBe('rightAnswerIs');
    expect(feedbackMeaningKey(false, false, 'type')).toBe('rightAnswerIs');
    expect(feedbackMeaningKey(false, false, 'situation')).toBe('bestAnswerIs');
  });

  // "Correct answer" ("Poprawna odpowiedź", "Doğru cevap") next to a red cross read as "right!".
  it('after a wrong answer, announces the answer in every help language', () => {
    expect(uiEn.rightAnswerIs).toBe('The right answer is:');
    expect(uiEn.bestAnswerIs).toBe('The best answer is:');
    expect(uiNl.rightAnswerIs).toBe(feedbackTitle(false, 'meaning'));
    expect(uiNl.bestAnswerIs).toBe(feedbackTitle(false, 'situation'));
    expect(helpLanguages).toHaveLength(14);
    for (const lang of helpLanguages) {
      for (const key of ['rightAnswerIs', 'bestAnswerIs'] as const) {
        const text = lang.ui[key];
        expect(text?.trim(), `${lang.code} ${key}`).toBeTruthy();
        // It ends on a colon (Tigrinya ፦): it introduces the answer, it is not a verdict.
        expect(text, `${lang.code} ${key}`).toMatch(/[:፦]$/);
      }
      expect(lang.ui.rightAnswerIs, lang.code).not.toBe(lang.ui.correctAnswer);
      expect(lang.ui.bestAnswerIs, lang.code).not.toBe(lang.ui.bestAnswer);
    }
    expect(ui('rightAnswerIs', getHelpLanguage('pl'))).toMatchObject({ help: 'Poprawna odpowiedź to:' });
    expect(ui('rightAnswerIs', getHelpLanguage('tr'))).toMatchObject({ help: 'Doğru cevap şu:' });
  });
});
