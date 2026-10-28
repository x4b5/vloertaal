import { describe, expect, it } from 'vitest';
import { loadAccess, OPEN_TO_ALL } from '../src/lib/access';
import { onboardingStep, previousStep } from '../src/lib/onboarding';

const fresh = { onboarded: false, helpLang: null, gender: undefined, genderAsked: false, sector: undefined } as const;

describe('open to all (since 28 October 2026): the full version without a code', () => {
  it('is switched on', () => {
    expect(OPEN_TO_ALL).toBe(true);
  });

  it('gives every phone the full version', () => {
    expect(loadAccess()).toBe('full');
  });

  it('skips the password page in the first run', () => {
    const p = { ...fresh, onboarded: true, helpLang: 'tr' as const };
    expect(onboardingStep(p, loadAccess())).toBe('sector');
  });

  it('goes back from the sector to the page before the password page', () => {
    const tr = { ...fresh, onboarded: true, helpLang: 'tr' as const };
    const pl = { ...fresh, onboarded: true, helpLang: 'pl' as const, gender: 'f' as const, genderAsked: true };
    expect(previousStep('sector', tr)).toBe('language');
    expect(previousStep('sector', pl)).toBe('gender');
  });

  // Back from the sector, then the language (or gender) again: on to the sector, not to a
  // password page saying the code was accepted.
  it('does not bring the password page back on the way back from the sector', () => {
    const tr = { ...fresh, onboarded: true, helpLang: 'tr' as const };
    const pl = { ...fresh, onboarded: true, helpLang: 'pl' as const, gender: 'f' as const, genderAsked: true };
    expect(onboardingStep(tr, loadAccess(), true)).toBe('sector');
    expect(onboardingStep(pl, loadAccess(), true)).toBe('sector');
  });
});
