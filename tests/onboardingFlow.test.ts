import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { getHelpLanguage } from '../src/i18n/all';
import { Gate } from '../src/components/Gate';
import {
  offersTryLesson,
  onboardingStep,
  previousStep,
  stepIndex,
  trialDone,
  trialLessonAllowed,
  TRY_LESSON,
  TRY_LESSON_ID,
} from '../src/lib/onboarding';
import { forgetLinkedUnit, rememberedLinkedUnit, rememberLinkedUnit } from '../src/lib/unitLink';

const fresh = { onboarded: false, helpLang: null, gender: undefined, genderAsked: false, sector: undefined } as const;

describe('first-run order: language, gender (gendered only), password, sector', () => {
  it('asks "Woman or man?" before the password for a help language with gender', () => {
    expect(onboardingStep(fresh, null)).toBe('language');
    const pl = { ...fresh, onboarded: true, helpLang: 'pl' as const };
    expect(onboardingStep(pl, null)).toBe('gender');
    expect(onboardingStep({ ...pl, gender: 'f', genderAsked: true }, null)).toBe('gate');
    expect(onboardingStep({ ...pl, gender: 'f', genderAsked: true }, 'preview')).toBe('sector');
    expect(onboardingStep({ ...pl, gender: 'f', genderAsked: true, sector: 'none' }, 'preview')).toBe('done');
  });

  it('goes straight to the password for a help language without gender, and for English only', () => {
    expect(onboardingStep({ ...fresh, onboarded: true, helpLang: 'tr' }, null)).toBe('gate');
    expect(onboardingStep({ ...fresh, onboarded: true, helpLang: 'fa' }, null)).toBe('gate');
    expect(onboardingStep({ ...fresh, onboarded: true, helpLang: null }, null)).toBe('gate');
  });

  it('back from the sector shows the password page again, with the code kept', () => {
    const p = { ...fresh, onboarded: true, helpLang: 'ar' as const, gender: 'm' as const, genderAsked: true };
    expect(onboardingStep(p, 'full', true)).toBe('gate');
    expect(previousStep('sector', p)).toBe('gate');
  });

  it('every back arrow goes to the page before it', () => {
    const pl = { ...fresh, onboarded: true, helpLang: 'pl' as const };
    const tr = { ...fresh, onboarded: true, helpLang: 'tr' as const };
    expect(previousStep('gender', pl)).toBe('language');
    expect(previousStep('gate', pl)).toBe('gender');
    expect(previousStep('gate', tr)).toBe('language');
    expect(previousStep('language', pl)).toBeNull();
    expect(stepIndex('language')).toBeLessThan(stepIndex('gender'));
    expect(stepIndex('gender')).toBeLessThan(stepIndex('gate'));
    expect(stepIndex('gate')).toBeLessThan(stepIndex('sector'));
  });

  it('a learner from before the gender question with a sector keeps the one-time page (not a first-run step)', () => {
    const old = { ...fresh, onboarded: true, helpLang: 'pl' as const, sector: 'none' as const };
    expect(onboardingStep(old, 'full')).toBe('done');
  });
});

/** The things to tap on a rendered page (the back arrow is chrome; speakers do not count). */
function tappables(html: string): string[] {
  const out: string[] = [];
  for (const m of html.matchAll(/<(button|input)\b[^>]*>/g)) {
    const tag = m[0];
    if (/class="[^"]*\b(chrome-back|speak|help-say)\b/.test(tag)) continue;
    out.push(tag);
  }
  return out;
}

describe('"Try one lesson first" (TRY_LESSON)', () => {
  const ar = getHelpLanguage('ar', 'f');

  it('is on (the owner chose the trial lesson)', () => {
    expect(TRY_LESSON).toBe(true);
    expect(offersTryLesson(TRY_LESSON, null)).toBe(true);
  });

  it('flag off: the third slot of the password page stays empty', () => {
    expect(offersTryLesson(false, null)).toBe(false);
    const html = renderToStaticMarkup(createElement(Gate, {
      lang: ar, onAccess: () => {}, onBack: () => {},
      onTry: offersTryLesson(false, null) ? () => {} : undefined,
    }));
    expect(html).not.toContain('gate-try');
    expect(tappables(html)).toHaveLength(2); // the field and "Unlock"
    expect(html).toContain('chrome-back');
  });

  it('when on: one more button, still at most three things to tap, only before a password', () => {
    expect(offersTryLesson(true, null)).toBe(true);
    expect(offersTryLesson(true, 'preview')).toBe(false);
    expect(offersTryLesson(true, 'full')).toBe(false);
    const html = renderToStaticMarkup(createElement(Gate, {
      lang: ar, onAccess: () => {}, onBack: () => {},
      onTry: offersTryLesson(true, null) ? () => {} : undefined,
    }));
    expect(html).toContain('gate-try');
    expect(html).toContain(ar!.ui.tryLesson!);
    expect(tappables(html)).toHaveLength(3);
  });

  it('once done, the page says the code unlocks everything and offers no second trial', () => {
    expect(trialDone({ completed: {} }, null)).toBe(false);
    expect(trialDone({ completed: { [TRY_LESSON_ID]: { best: 1, times: 1 } } as never }, null)).toBe(true);
    expect(trialDone({ completed: { [TRY_LESSON_ID]: { best: 1, times: 1 } } as never }, 'preview')).toBe(false);
    expect(offersTryLesson(true, null, true)).toBe(false);
    const html = renderToStaticMarkup(createElement(Gate, { lang: ar, onAccess: () => {}, onBack: () => {}, trialDone: true }));
    expect(html).toContain('gate-trial-done');
    expect(html).toContain(ar!.ui.trialDone!);
    expect(html).not.toContain('gate-try');
    expect(tappables(html)).toHaveLength(2);
  });

  it('plays lesson 1.1 only', () => {
    expect(TRY_LESSON_ID).toBe(units[0].lessons[0].id);
    expect(trialLessonAllowed(TRY_LESSON_ID)).toBe(true);
    expect(trialLessonAllowed(units[0].lessons[1].id)).toBe(false);
    expect(trialLessonAllowed(units[1].lessons[0].id)).toBe(false);
  });
});

describe('the password page explained', () => {
  it('says who gives the code and that nothing leaves the phone, in the help language and gender', () => {
    const tiF = getHelpLanguage('ti', 'f')!;
    const tiM = getHelpLanguage('ti', 'm')!;
    const html = renderToStaticMarkup(createElement(Gate, { lang: tiF, onAccess: () => {}, onBack: () => {} }));
    expect(html).toContain(tiF.ui.gateWho!);
    expect(html).toContain(tiF.ui.gateTrust!);
    expect(tiF.ui.gateWho).not.toBe(tiM.ui.gateWho);
    // What the app is, in the help language; the Dutch question with its one speaker.
    expect(html).toContain(tiF.ui.appTagline!);
    expect(html).toContain('Wat is de code?');
    expect(html.match(/class="speak /g)).toHaveLength(1);
  });

  it('back from the sector: the accepted code shows as accepted and the button is on', () => {
    const pl = getHelpLanguage('pl', 'f')!;
    const html = renderToStaticMarkup(createElement(Gate, { lang: pl, onAccess: () => {}, onBack: () => {}, accepted: 'preview', code: 'testcode' }));
    expect(html).toContain('pw-ok');
    expect(html).toContain('value="testcode"');
    expect(html).not.toMatch(/<button type="submit"[^>]*disabled/);
  });
});

describe('a coach link is kept until the home has shown it', () => {
  let store: Map<string, string>;
  const real = (globalThis as { localStorage?: Storage }).localStorage;
  beforeEach(() => {
    store = new Map();
    (globalThis as { localStorage?: unknown }).localStorage = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    };
  });
  afterEach(() => { (globalThis as { localStorage?: unknown }).localStorage = real; });

  it('survives a reload, is forgotten once shown, and ignores unknown units', () => {
    expect(rememberedLinkedUnit()).toBeNull();
    rememberLinkedUnit('u.safety');
    expect(rememberedLinkedUnit()).toBe('u.safety');
    forgetLinkedUnit();
    expect(rememberedLinkedUnit()).toBeNull();
    store.set('vloertaal.linkedUnit', 'u.greenhouse');
    expect(rememberedLinkedUnit()).toBeNull();
  });

  it('blocked storage is no error', () => {
    (globalThis as { localStorage?: unknown }).localStorage = {
      getItem: () => { throw new Error('blocked'); },
      setItem: () => { throw new Error('blocked'); },
      removeItem: () => { throw new Error('blocked'); },
    };
    expect(() => rememberLinkedUnit('u.safety')).not.toThrow();
    expect(rememberedLinkedUnit()).toBeNull();
    expect(() => forgetLinkedUnit()).not.toThrow();
  });
});

describe('the first Dutch word on the first tap', () => {
  it('is the default recorded voice\'s own "hallo" file (no new audio)', async () => {
    const { readFileSync, existsSync } = await import('node:fs');
    const voices = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')) as { voices: { key: string; said: Record<string, string> }[] };
    expect(voices.voices[0].key).toBe('thijmen');
    expect(voices.voices[0].said['w.hallo']).toBe('hallo');
    expect(existsSync('public/audio-el/thijmen/w.hallo.mp3')).toBe(true);
  });
});
