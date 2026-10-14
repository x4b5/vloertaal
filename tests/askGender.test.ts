import { describe, expect, it } from 'vitest';
import { shouldAskGender } from '../src/lib/askGender';
import { emptyProgress, type Progress } from '../src/lib/progress';

/** A learner who finished the first run before the gender question: Polish, nothing chosen. */
const before: Progress = { ...emptyProgress, onboarded: true, helpLang: 'pl' };

describe('the one-time "Woman or man?" card on the home', () => {
  it('shows for an onboarded learner with a help language with gender and no gender stored', () => {
    for (const helpLang of ['ar', 'ti', 'uk', 'pl', 'ro', 'bg'] as const) {
      expect(shouldAskGender({ ...before, helpLang })).toBe(true);
    }
  });

  it('never shows for a help language without gender, or without a help language', () => {
    for (const helpLang of ['tr', 'fa', 'prs'] as const) expect(shouldAskGender({ ...before, helpLang })).toBe(false);
    expect(shouldAskGender({ ...before, helpLang: null })).toBe(false);
  });

  it('never shows before the first run is finished', () => {
    expect(shouldAskGender({ ...before, onboarded: false })).toBe(false);
  });

  it('never shows once a gender is stored (in the first run, Settings or the card), "rather not say" too', () => {
    for (const gender of ['f', 'm', 'x'] as const) expect(shouldAskGender({ ...before, gender })).toBe(false);
  });

  it('never comes back once closed with ✕', () => {
    expect(shouldAskGender({ ...before, genderAsked: true })).toBe(false);
    expect(shouldAskGender({ ...before, genderAsked: false })).toBe(true);
  });
});
