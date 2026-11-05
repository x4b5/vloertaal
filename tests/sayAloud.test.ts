import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { DutchExercise, IntroCard, ListenExercise, MeaningExercise, TipCard } from '../src/components/Exercises';
import { ModelLine } from '../src/components/RuleSteps';
import { cultureTips } from '../src/content/culture';
import { rulesUnits } from '../src/content/regels';
import { LessonPlayer } from '../src/components/LessonPlayer';
import { findLesson } from '../src/content/curriculum';
import { getHelpLanguage } from '../src/i18n/all';
import { uiEn } from '../src/i18n/types';
import { uiNl } from '../src/i18n/nl';
import { buildLesson, type Exercise } from '../src/lib/exercises';
import { followSayAloud, SAY_FALLBACK_MS, SAY_SETTLE_MS, sayMode, type SayMode } from '../src/lib/sayAloud';
import { loadPictures } from '../src/pictures';

/*
 * "Zeg het hardop" on a new word's card (the owner's request, 5 November 2026; src/lib/sayAloud.ts):
 *  - the line appears after the word has sounded, and its "your turn" sign plays after the
 *    picture has stopped moving (again after each replay);
 *  - without sound, or when nothing can play the word: "Zeg het zachtjes, of in je hoofd.", at once;
 *  - only on the intro card: never in a choice, a listening question, a review; not in Werkregels;
 *  - no button of its own (max. 3 per screen), and its place is kept while it waits (no jump);
 *  - the dots light up once (about 2 s) and stand still; less motion stops them (styles.css).
 */

type SpeechFn = (text: string, speaking: boolean, slow: boolean) => void;

function fakeEnv(stillIn = 0) {
  const speech = new Set<SpeechFn>();
  const net = new Set<() => void>();
  return {
    env: {
      stillIn: () => stillIn,
      onSpeech: (fn: SpeechFn) => { speech.add(fn); return () => { speech.delete(fn); }; },
      onSoundNeedsInternet: (fn: () => void) => { net.add(fn); return () => { net.delete(fn); }; },
    },
    say: (text: string, speaking: boolean) => speech.forEach((fn) => fn(text, speaking, false)),
    noNet: () => net.forEach((fn) => fn()),
    listeners: () => speech.size + net.size,
  };
}

function follow(mode: SayMode, stillIn = 0, wasShown = false) {
  const f = fakeEnv(stillIn);
  const shown: SayMode[] = [];
  let pulses = 0;
  const stop = followSayAloud('het hesje', mode, { shown: (m) => shown.push(m), pulse: () => { pulses++; } }, f.env, wasShown);
  return { ...f, shown, pulses: () => pulses, stop };
}

describe('when the line appears', () => {
  it('after the word has sounded, not before', () => {
    vi.useFakeTimers();
    const t = follow('aloud');
    expect(t.shown).toEqual([]);
    t.say('het hesje', true);
    vi.advanceTimersByTime(500);
    expect(t.shown).toEqual([]);
    t.say('het hesje', false);
    vi.advanceTimersByTime(SAY_SETTLE_MS);
    expect(t.shown).toEqual(['aloud']);
    vi.advanceTimersByTime(1);
    expect(t.pulses()).toBe(1);
    t.stop();
    vi.useRealTimers();
  });

  it('a play cut off by the next one (a tap on the speaker) waits for the end of that one', () => {
    vi.useFakeTimers();
    const t = follow('aloud');
    t.say('het hesje', true);
    t.say('het hesje', false);
    t.say('het hesje', true);
    vi.advanceTimersByTime(1000);
    expect(t.shown).toEqual([]);
    t.say('het hesje', false);
    vi.advanceTimersByTime(SAY_SETTLE_MS);
    expect(t.shown).toEqual(['aloud']);
    t.stop();
    vi.useRealTimers();
  });

  it('another line, or an end without a start (a stop of the line before), does not count', () => {
    vi.useFakeTimers();
    const t = follow('aloud');
    t.say('de helm', true);
    t.say('de helm', false);
    t.say('het hesje', false);
    vi.advanceTimersByTime(SAY_SETTLE_MS);
    expect(t.shown).toEqual([]);
    t.stop();
    vi.useRealTimers();
  });

  it('a replay of the word plays the "your turn" sign again; the line shows once', () => {
    vi.useFakeTimers();
    const t = follow('aloud');
    for (let i = 0; i < 3; i++) { t.say('het hesje', true); t.say('het hesje', false); vi.advanceTimersByTime(SAY_SETTLE_MS + 1000); }
    expect(t.shown).toEqual(['aloud']);
    expect(t.pulses()).toBe(3);
    t.stop();
    vi.useRealTimers();
  });

  it('the sign waits until the moving picture is still', () => {
    vi.useFakeTimers();
    const t = follow('aloud', 900);
    t.say('het hesje', true);
    t.say('het hesje', false);
    vi.advanceTimersByTime(SAY_SETTLE_MS);
    expect(t.shown).toEqual(['aloud']);
    vi.advanceTimersByTime(899);
    expect(t.pulses()).toBe(0);
    vi.advanceTimersByTime(1);
    expect(t.pulses()).toBe(1);
    t.stop();
    vi.useRealTimers();
  });

  it('shows anyway when the word never reports its end', () => {
    vi.useFakeTimers();
    const t = follow('aloud');
    vi.advanceTimersByTime(SAY_FALLBACK_MS - 1);
    expect(t.shown).toEqual([]);
    vi.advanceTimersByTime(1);
    expect(t.shown).toEqual(['aloud']);
    t.stop();
    vi.useRealTimers();
  });

  it('a stop ends the timers and the listeners (the card leaves)', () => {
    vi.useFakeTimers();
    const t = follow('aloud', 500);
    t.say('het hesje', true);
    t.say('het hesje', false);
    t.stop();
    vi.advanceTimersByTime(SAY_FALLBACK_MS);
    expect(t.pulses()).toBe(0);
    expect(t.listeners()).toBe(0);
    vi.useRealTimers();
  });
});

describe('the quiet line', () => {
  it('without sound, or when nothing can say the word', () => {
    expect(sayMode(false, false)).toBe('aloud');
    expect(sayMode(true, false)).toBe('quiet');
    expect(sayMode(false, true)).toBe('quiet');
  });

  it('shows at once, without waiting for a sound', () => {
    vi.useFakeTimers();
    const t = follow('quiet');
    expect(t.shown).toEqual(['quiet']);
    vi.advanceTimersByTime(1);
    expect(t.pulses()).toBe(1);
    t.stop();
    vi.useRealTimers();
  });

  it('when the word could not be heard for want of internet', () => {
    vi.useFakeTimers();
    const t = follow('aloud');
    t.noNet();
    expect(t.shown).toEqual(['quiet']);
    t.stop();
    vi.useRealTimers();
  });

  it('the sound switched while the line is up: the text follows, no extra sign', () => {
    vi.useFakeTimers();
    const t = follow('quiet', 0, true);
    vi.advanceTimersByTime(SAY_FALLBACK_MS);
    expect(t.shown).toEqual(['quiet']);
    expect(t.pulses()).toBe(0);
    t.stop();
    vi.useRealTimers();
  });
});

describe('on the word card', () => {
  const pl = getHelpLanguage('pl');
  const ar = getHelpLanguage('ar', 'f');
  const gear = findLesson('l.gear')!.lesson;
  const [helm, handschoenen, schoenen, hesje] = gear.words;
  const card = (props: Record<string, unknown>) => renderToStaticMarkup(createElement(IntroCard as never, { ex: { kind: 'intro', word: hesje }, onAnswer: () => {}, ...props } as never));
  const line = (html: string) => /<p class="say-aloud[^"]*"[\s\S]*?<\/p>/.exec(html)?.[0] ?? '';
  beforeAll(async () => { await loadPictures(); });

  it('keeps its place hidden until the word has sounded (Dutch + the help language)', () => {
    const out = line(card({ lang: pl }));
    expect(out).toContain('class="say-aloud is-waiting"');
    expect(out).toContain('aria-hidden="true"');
    expect(out).toContain(uiNl.sayItAloud as string);
    expect(out).toContain(pl.ui.sayItAloud!);
  });

  it('without sound: the quiet line, shown at once', () => {
    const out = line(card({ lang: pl, soundOff: true }));
    expect(out).toMatch(/class="say-aloud "/);
    expect(out).not.toContain('is-waiting');
    expect(out).toContain('Zeg het zachtjes, of in je hoofd.');
    expect(out).toContain(pl.ui.sayItQuietly!);
  });

  it('English only: Dutch and English', () => {
    const out = line(card({ soundOff: true }));
    expect(out).toContain('Zeg het zachtjes, of in je hoofd.');
    expect(out).toContain(uiEn.sayItQuietly);
  });

  it('right to left: the help line in its own direction, the Dutch isolated (its full stop at its end)', () => {
    const out = line(card({ lang: ar, soundOff: true }));
    expect(out).toContain('dir="rtl"');
    expect(out).toContain('<span class="say-aloud-nl" lang="nl" dir="ltr">Zeg het zachtjes, of in je hoofd.</span>');
    expect(out).toContain(ar.ui.sayItQuietly!);
  });

  it('adds no button: the card keeps its one speaker', () => {
    for (const soundOff of [false, true]) {
      const html = card({ lang: pl, soundOff });
      expect(line(html)).not.toMatch(/<button|tabindex|role="button"|<a /);
      expect(html.match(/<button/g)?.length, String(soundOff)).toBe(1);
    }
  });

  it('a lesson without sound passes it on to the word card', () => {
    const out = renderToStaticMarkup(createElement(LessonPlayer, {
      lesson: gear, review: false, lang: pl, quiet: true, startAt: 0, onQuit: () => {}, onFinish: () => {},
      exercises: [{ kind: 'intro', word: hesje }],
    } as never));
    expect(line(out)).toContain('Zeg het zachtjes, of in je hoofd.');
    expect(line(out)).not.toContain('is-waiting');
  }, 60_000);

  it('not in Werkregels (Dutch screens): no line', () => {
    const nl = { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr', reviewed: true, ui: uiNl, gloss: {} };
    expect(card({ lang: nl })).not.toContain('say-aloud');
  });

  it('not in a choice or a listening question', () => {
    const others: Exercise[] = [
      { kind: 'meaning', word: hesje, options: [handschoenen, helm, hesje] },
      { kind: 'dutch', word: helm, options: [hesje, handschoenen, helm] },
      { kind: 'listen', word: schoenen, options: [helm, schoenen, hesje] },
    ];
    const parts = { meaning: MeaningExercise, dutch: DutchExercise, listen: ListenExercise } as const;
    for (const ex of others) {
      const out = renderToStaticMarkup(createElement(parts[ex.kind as keyof typeof parts] as never, { ex, lang: pl, locked: false, onAnswer: () => {} } as never));
      expect(out, ex.kind).not.toContain('say-aloud');
    }
  });

  it('a review (a lesson played again, a mixed review) has no word cards, so no line', () => {
    for (const seed of [1, 2, 3]) expect(buildLesson(gear, { review: true, seed }).some((e) => e.kind === 'intro')).toBe(false);
    // A new lesson (or "Opnieuw beginnen") introduces every word with its card.
    expect(buildLesson(gear, { review: false, seed: 1 }).filter((e) => e.kind === 'intro').length).toBe(gear.words.length);
  });
});

describe('the "your turn" dots (styles.css)', () => {
  const css = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  const rules = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({ sel: m[1].trim(), body: m[2] }));

  it('waiting keeps the place (visibility, never display: none)', () => {
    const waiting = rules.filter((r) => r.sel.includes('.say-aloud.is-waiting'));
    expect(waiting.length).toBeGreaterThan(0);
    for (const r of waiting) {
      expect(r.body).toMatch(/visibility:\s*hidden/);
      expect(r.body).not.toMatch(/display\s*:/);
    }
  });

  it('light up once, only while pulsing, about 2 s in all, and end standing still', () => {
    const moving = rules.filter((r) => r.sel.includes('say-aloud') && /\banimation(-delay)?\b/.test(r.body));
    expect(moving.length).toBeGreaterThan(0);
    for (const r of moving) expect(r.sel).toContain('.is-pulsing');
    const main = moving.find((r) => /animation\s*:/.test(r.body))!;
    const decl = /animation\s*:\s*([^;]+)/.exec(main.body)![1];
    expect(decl).not.toMatch(/infinite|!important/);
    expect(decl).toMatch(/\bbackwards\b/);
    const times = [...decl.matchAll(/(\d*\.?\d+)s\b/g)].map((m) => Number(m[1]));
    const delays = moving.flatMap((r) => [...r.body.matchAll(/animation-delay\s*:\s*(\d*\.?\d+)s/g)].map((m) => Number(m[1])));
    const total = times[0] + Math.max(0, ...delays);
    expect(total).toBeGreaterThanOrEqual(1.5);
    expect(total).toBeLessThanOrEqual(2.5);
  });
});

describe('the texts', () => {
  const langs = ['pl', 'ro', 'bg', 'uk', 'ar', 'ti', 'fa', 'prs', 'tr', 'es', 'pt', 'fr', 'de'];
  it('every help language has both, marked to be checked; ar and ti by gender', () => {
    for (const code of langs) {
      const src = readFileSync(new URL(`../src/i18n/${code}.ts`, import.meta.url), 'utf8');
      for (const key of ['sayItAloud', 'sayItQuietly']) {
        const row = src.split('\n').find((l) => l.trim().startsWith(`${key}:`));
        expect(row, `${code} ${key}`).toBeDefined();
        expect(row, `${code} ${key}`).toContain('// nieuw, nalezen');
        if (code === 'ar' || code === 'ti') expect(row, `${code} ${key}`).toMatch(/\{ m: .*, f: .*, x: .* \}/);
      }
    }
    expect(uiNl.sayItAloud).toBe('Zeg het hardop.');
    expect(uiNl.sayItQuietly).toBe('Zeg het zachtjes, of in je hoofd.');
  });
});

describe('"Zeg het hardop" under "Zeg het zo" and "Zo zeg je het" too (the owner, 5 November 2026)', () => {
  beforeAll(async () => { await loadPictures(); });
  const tip = cultureTips.find((t) => t.id === 'c.gear')!;
  const pl = getHelpLanguage('pl');
  const tipCard = (part: 'read' | 'say', extra: Record<string, unknown> = {}) =>
    renderToStaticMarkup(createElement(TipCard as never, { ex: { kind: 'tip', tip, part }, lang: pl, onAnswer: () => {}, ...extra } as never));

  it('on the tip\'s "Zeg het zo" page, at once (the phrase does not play by itself), in Dutch and the help language', () => {
    const out = tipCard('say');
    expect(out).toContain('class="say-aloud ');
    expect(out).not.toContain('say-aloud is-waiting');
    expect(out).toContain(uiNl.sayItAloud as string);
    expect(out).toContain(pl!.ui.sayItAloud as string);
  });

  it('softly without sound; not on the tip\'s first page (its explanation)', () => {
    expect(tipCard('say', { soundOff: true })).toContain(uiNl.sayItQuietly as string);
    expect(tipCard('read')).not.toContain('say-aloud');
  });

  it('under "Zo zeg je het" in Werkregels: in Dutch only, after the sentence has sounded', () => {
    const step = rulesUnits.flatMap((u) => u.lessons).flatMap((l) => l.steps).find((s) => s.kind === 'model')!;
    const out = renderToStaticMarkup(createElement(ModelLine as never, { ex: { kind: 'model', step }, onAnswer: () => {} } as never));
    expect(out).toContain('say-aloud is-waiting');
    expect(out).toContain(uiNl.sayItAloud as string);
    expect(out).not.toContain('bi-help');
  });
});
