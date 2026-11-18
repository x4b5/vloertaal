import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { IntroCard, TipCard } from '../src/components/Exercises';
import { ModelLine } from '../src/components/RuleSteps';
import { cultureTips } from '../src/content/culture';
import { findLesson } from '../src/content/curriculum';
import { rulesUnits } from '../src/content/regels';
import { getHelpLanguage } from '../src/i18n/all';
import { uiNl } from '../src/i18n/nl';
import { forgetGoHolds, GO_DELAY_MS, GO_HOLD_MAX_MS, goClass, goHeld, goHoldId, goOpenedKey, shouldHoldGo, startGoHold } from '../src/lib/goHold';
import { SAY_FALLBACK_MS } from '../src/lib/sayAloud';
import { loadPictures } from '../src/pictures';

/*
 * Continue comes a little later on a card that asks to say something out loud (the owner,
 * 17 November 2026; src/lib/goHold.ts): the learner first sees "Zeg het hardop", is then more
 * inclined to say it, and only after that is Continue there. A soft nudge, never a lock:
 *  - Continue waits GO_DELAY_MS after the line has shown, and never longer than GO_HOLD_MAX_MS in all;
 *  - only the first time a card comes by (a repeat, or going back, has Continue at once);
 *  - only on a card that really shows the line (the Dutch course has none on its word cards).
 */

beforeEach(() => { vi.useFakeTimers(); forgetGoHolds(); });
afterEach(() => { vi.useRealTimers(); });

describe('the wait', () => {
  it('is short, and ends before the say-it line would give up on a sound that never ends', () => {
    expect(GO_DELAY_MS).toBe(1500);
    expect(GO_HOLD_MAX_MS).toBeGreaterThan(GO_DELAY_MS);
    expect(GO_HOLD_MAX_MS).toBeLessThan(SAY_FALLBACK_MS);
  });

  it('opens GO_DELAY_MS after the line has shown', () => {
    let open = 0;
    const hold = startGoHold('intro:w.hesje', () => { open += 1; });
    vi.advanceTimersByTime(1000);
    hold.shown();
    vi.advanceTimersByTime(GO_DELAY_MS - 1);
    expect(open).toBe(0);
    vi.advanceTimersByTime(1);
    expect(open).toBe(1);
  });

  it('opens anyway at the longest wait, when the line never shows (nobody gets stuck)', () => {
    let open = 0;
    startGoHold('intro:w.hesje', () => { open += 1; });
    vi.advanceTimersByTime(GO_HOLD_MAX_MS - 1);
    expect(open).toBe(0);
    vi.advanceTimersByTime(1);
    expect(open).toBe(1);
  });

  it('never waits past the longest wait, also when the line shows late', () => {
    let open = 0;
    const hold = startGoHold('intro:w.hesje', () => { open += 1; });
    vi.advanceTimersByTime(GO_HOLD_MAX_MS - 500);
    hold.shown(); // a normal wait would run to GO_HOLD_MAX_MS - 500 + GO_DELAY_MS, past the longest wait
    vi.advanceTimersByTime(499);
    expect(open).toBe(0);
    vi.advanceTimersByTime(1);
    expect(open).toBe(1);
  });

  it('counts from the first time the line shows, not from every time', () => {
    let open = 0;
    const hold = startGoHold('intro:w.hesje', () => { open += 1; });
    hold.shown();
    vi.advanceTimersByTime(1000);
    hold.shown();
    vi.advanceTimersByTime(500);
    expect(open).toBe(1);
  });

  it('opens once, whatever comes after', () => {
    let open = 0;
    const hold = startGoHold('intro:w.hesje', () => { open += 1; });
    hold.shown();
    vi.advanceTimersByTime(GO_HOLD_MAX_MS * 2);
    expect(open).toBe(1);
  });

  it('a card that is left before it opens does not open (and stays to be held next time)', () => {
    let open = 0;
    const hold = startGoHold('intro:w.hesje', () => { open += 1; });
    hold.shown();
    hold.stop();
    vi.advanceTimersByTime(GO_HOLD_MAX_MS * 2);
    expect(open).toBe(0);
    expect(shouldHoldGo('intro:w.hesje')).toBe(true);
  });
});

describe('only the first time a card comes by', () => {
  it('holds a new card, and not the same card again once Continue was there', () => {
    expect(shouldHoldGo('tip:c.gear')).toBe(true);
    const hold = startGoHold('tip:c.gear', () => {});
    hold.shown();
    vi.advanceTimersByTime(GO_DELAY_MS);
    expect(shouldHoldGo('tip:c.gear')).toBe(false);
    expect(shouldHoldGo('tip:c.other')).toBe(true);
  });
});

describe('goHoldId: which card holds Continue (the cards that show "Zeg het hardop")', () => {
  beforeAll(async () => { await loadPictures(); });
  const pl = getHelpLanguage('pl');
  const nl = { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr', reviewed: true, ui: uiNl, gloss: {} };
  const hesje = findLesson('l.gear')!.lesson.words[3];
  const tip = cultureTips.find((t) => t.id === 'c.gear')!;
  const step = rulesUnits.flatMap((u) => u.lessons).flatMap((l) => l.steps).find((s) => s.kind === 'model')!;
  const says = (html: string) => html.includes('class="say-aloud');
  const render = (card: unknown, props: Record<string, unknown>) => renderToStaticMarkup(createElement(card as never, { onAnswer: () => {}, ...props } as never));

  it('a new word, in a course with a help language: yes, and its card shows the line', () => {
    const ex = { kind: 'intro', word: hesje } as const;
    expect(goHoldId(ex, pl)).toBe(`intro:${hesje.id}`);
    expect(says(render(IntroCard, { ex, lang: pl }))).toBe(true);
  });

  it('a new word on the Dutch screen (Werkregels): no, it shows no line', () => {
    const ex = { kind: 'intro', word: hesje } as const;
    expect(goHoldId(ex, nl)).toBeUndefined();
    expect(says(render(IntroCard, { ex, lang: nl }))).toBe(false);
  });

  it('the "Zeg het zo" page of a tip: yes; its explanation page: no', () => {
    const say = { kind: 'tip', tip, part: 'say' } as const;
    const read = { kind: 'tip', tip, part: 'read' } as const;
    expect(goHoldId(say, pl)).toBe(`tip:${tip.id}`);
    expect(says(render(TipCard, { ex: say, lang: pl }))).toBe(true);
    expect(goHoldId(read, pl)).toBeUndefined();
    expect(says(render(TipCard, { ex: read, lang: pl }))).toBe(false);
  });

  it('"Zo zeg je het" in Werkregels: yes, and its card shows the line', () => {
    const ex = { kind: 'model', step } as const;
    expect(goHoldId(ex, undefined)).toBe(`model:${step.id}`);
    expect(says(render(ModelLine, { ex }))).toBe(true);
  });

  it('any other card: no', () => {
    expect(goHoldId({ kind: 'type', word: hesje } as never, pl)).toBeUndefined();
    expect(goHoldId({ kind: 'listen', word: hesje, options: [hesje] } as never, pl)).toBeUndefined();
  });
});

describe('the Continue button in the lesson (goHeld, goClass)', () => {
  it('is held on a card that holds, until it has opened', () => {
    expect(goHeld('intro:w.hesje', '3', '')).toBe(true);
    expect(goClass('intro:w.hesje', '3', '')).toBe('btn-held');
  });

  it('comes in softly once it has opened, for that card only', () => {
    const opened = goOpenedKey('3', 'intro:w.hesje');
    expect(goHeld('intro:w.hesje', '3', opened)).toBe(false);
    expect(goClass('intro:w.hesje', '3', opened)).toBe('btn-came');
    // The next card holds again (another place, or another card).
    expect(goHeld('intro:w.helm', '4', opened)).toBe(true);
  });

  it('is never held on a card that asks nothing', () => {
    expect(goHeld(undefined, '3', '')).toBe(false);
    expect(goClass(undefined, '3', '')).toBe('');
  });

  it('is not held on a card that was held before (a repeat, or going back): no class at all', () => {
    const hold = startGoHold('intro:w.hesje', () => {});
    hold.shown();
    vi.advanceTimersByTime(GO_DELAY_MS);
    expect(goHeld('intro:w.hesje', '7', '')).toBe(false);
    expect(goClass('intro:w.hesje', '7', '')).toBe('');
  });

  it('keeps a held Continue in the accessibility tree: invisible by opacity, never by visibility (a screen reader hears "not available", not nothing)', () => {
    const css = readFileSync('src/styles.css', 'utf8');
    const rule = css.match(/\.btn-go\.btn-held\s*\{([^}]*)\}/)?.[1] ?? '';
    expect(rule).toContain('opacity: 0');
    expect(rule).toContain('pointer-events: none');
    expect(rule).not.toContain('visibility');
  });

  it('is what the lesson player uses for its footer button (held: invisible and not tappable)', () => {
    const src = readFileSync('src/components/LessonPlayer.tsx', 'utf8');
    expect(src).toContain('goHeld(holdId, key, goOpened)');
    expect(src).toContain('goClass(holdId, key, goOpened)');
    expect(src).toContain('disabled={!answer || held}');
    expect(src).toContain('if (held) return;');
    // Each card that shows "Zeg het hardop" tells the player when its line has shown.
    expect(src).toMatch(/<IntroCard [^>]*onSayShown=\{onSayShown\}/);
    expect(src).toMatch(/<TipCard [^>]*onSayShown=\{onSayShown\}/);
    expect(src).toMatch(/<ModelLine [^>]*onSayShown=\{onSayShown\}/);
  });
});
