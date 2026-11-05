import { readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';
import {
  daysSince, FIRST_VOICE_MAX, firstDay, firstDayText, forgetFirstVoices, keepFirstVoice, markThenPlayed, phoneShelf, THEN_NOW_DAYS, thenVoice,
  type KeptVoice, type VoiceMeta, type VoiceShelf,
} from '../src/lib/firstVoice';
import { ui } from '../src/i18n';
import { getHelpLanguage, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SpeakExercise } from '../src/components/Speaking';
import { findLesson } from '../src/content/curriculum';

// The Dutch-only track (Werkregels) reads in Dutch.
beforeAll(() => registerPack(nlPack));

/** The shelf in memory: the same rules as IndexedDB (an add never replaces, a drop goes with it). */
function memoryShelf() {
  const voices = new Map<string, KeptVoice>();
  const metas = new Map<string, VoiceMeta>();
  const shelf: VoiceShelf = {
    list: async () => Object.fromEntries(metas),
    read: async (id) => voices.get(id) ?? null,
    add: async (id, voice, meta, drop) => {
      if (metas.has(id)) return false;
      if (drop) { voices.delete(drop); metas.delete(drop); }
      voices.set(id, voice);
      metas.set(id, meta);
      return true;
    },
    mark: async (id, meta) => { metas.set(id, meta); return true; },
    clear: async () => { voices.clear(); metas.clear(); return true; },
  };
  return { shelf, voices, metas };
}

const blob = (text: string) => new Blob([text], { type: 'audio/webm' });
const day = (d: number, h = 10) => new Date(2026, 9, d, h);
const text = async (b: Blob | undefined) => (b ? await b.text() : undefined);

describe('"Toen en nu": the first recording of a sentence, on this phone', () => {
  it('keeps only the first recording of a sentence, never a later one', async () => {
    const { shelf } = memoryShelf();
    expect(await keepFirstVoice('s.1', blob('eerste'), day(1), shelf)).toBe(true);
    expect(await keepFirstVoice('s.1', blob('tweede'), day(2), shelf)).toBe(false);
    expect(await keepFirstVoice('s.1', blob('derde'), day(20), shelf)).toBe(false);
    const then = await thenVoice('s.1', day(20), shelf);
    expect(await text(then?.blob)).toBe('eerste');
    expect(then?.at).toBe(day(1).getTime());
    // An empty recording is no first time.
    expect(await keepFirstVoice('s.2', new Blob([]), day(1), shelf)).toBe(false);
  });

  it(`offers it from ${THEN_NOW_DAYS} calendar days on, not before`, async () => {
    const { shelf } = memoryShelf();
    await keepFirstVoice('s.1', blob('eerste'), day(12, 21), shelf);
    expect(await thenVoice('s.1', day(12, 22), shelf)).toBeNull();
    expect(await thenVoice('s.1', day(18, 23), shelf)).toBeNull();
    // Seven days later, also early in the morning (calendar days, not 7 × 24 hours).
    expect(await thenVoice('s.1', day(19, 7), shelf)).not.toBeNull();
    expect(await thenVoice('s.1', day(30), shelf)).not.toBeNull();
    // Another sentence has none.
    expect(await thenVoice('s.2', day(30), shelf)).toBeNull();
  });

  it('counts calendar days across the change to winter time', () => {
    // 25 October 2026: the clocks go back in the Netherlands.
    expect(daysSince(new Date(2026, 9, 24, 23, 30).getTime(), new Date(2026, 9, 31, 0, 10))).toBe(7);
    expect(daysSince(new Date(2026, 9, 24, 12).getTime(), new Date(2026, 9, 30, 23, 59))).toBe(6);
  });

  it(`keeps at most ${FIRST_VOICE_MAX} sentences; then the oldest one already played makes room`, async () => {
    const { shelf, metas } = memoryShelf();
    for (let i = 0; i < FIRST_VOICE_MAX; i++) expect(await keepFirstVoice(`s.${i}`, blob(`v${i}`), new Date(2026, 9, 1, 0, i), shelf)).toBe(true);
    // Full, and nothing played yet: nothing new is kept, nothing old goes.
    expect(await keepFirstVoice('s.new', blob('nieuw'), day(20), shelf)).toBe(false);
    expect(metas.size).toBe(FIRST_VOICE_MAX);
    expect(metas.has('s.0')).toBe(true);
    // Two were played ("Toen en nu"): the older of those two makes room, the others stay.
    await markThenPlayed('s.7', shelf);
    await markThenPlayed('s.3', shelf);
    expect(await keepFirstVoice('s.new', blob('nieuw'), day(20), shelf)).toBe(true);
    expect(metas.size).toBe(FIRST_VOICE_MAX);
    expect(metas.has('s.3')).toBe(false);
    expect(metas.has('s.7')).toBe(true);
    expect(metas.has('s.0')).toBe(true);
    expect(await text((await thenVoice('s.new', day(30), shelf))?.blob)).toBe('nieuw');
    // The next one takes the other played one's place.
    expect(await keepFirstVoice('s.newer', blob('nieuwer'), day(21), shelf)).toBe(true);
    expect(metas.has('s.7')).toBe(false);
    expect(await keepFirstVoice('s.newest', blob('nieuwst'), day(22), shelf)).toBe(false);
  });

  it('marks a sentence as played only once, keeping its day', async () => {
    const { shelf, metas } = memoryShelf();
    await keepFirstVoice('s.1', blob('eerste'), day(1), shelf);
    await markThenPlayed('s.1', shelf);
    expect(metas.get('s.1')).toEqual({ at: day(1).getTime(), played: true });
    await markThenPlayed('s.unknown', shelf);
    expect(metas.has('s.unknown')).toBe(false);
  });

  it('is wiped with "Voortgang wissen"', async () => {
    const { shelf, metas, voices } = memoryShelf();
    await keepFirstVoice('s.1', blob('eerste'), day(1), shelf);
    await keepFirstVoice('s.2', blob('eerste'), day(1), shelf);
    await forgetFirstVoices(shelf);
    expect(metas.size).toBe(0);
    expect(voices.size).toBe(0);
    expect(await thenVoice('s.1', day(30), shelf)).toBeNull();
    // After the wipe, the next recording is a first time again.
    expect(await keepFirstVoice('s.1', blob('opnieuw'), day(2), shelf)).toBe(true);
    // The reset in the app calls it, next to the test's own recordings.
    const reset = readFileSync('src/App.tsx', 'utf8').match(/onReset=\{\(\) => \{([\s\S]*?)tab\('route'\)/)![1];
    expect(reset).toContain('forgetFirstVoices()');
    expect(reset).toContain('forgetVoices()');
  });

  it('without IndexedDB (a private window, an old phone) nothing is kept and nothing fails', async () => {
    // Node has no indexedDB: the phone's own shelf.
    expect(typeof indexedDB).toBe('undefined');
    expect(await phoneShelf.list()).toBeNull();
    expect(await keepFirstVoice('s.1', blob('eerste'), day(1))).toBe(false);
    expect(await thenVoice('s.1', day(30))).toBeNull();
    await expect(markThenPlayed('s.1')).resolves.toBeUndefined();
    await expect(forgetFirstVoices()).resolves.toBeUndefined();
    // A shelf that throws (storage blocked halfway): the same.
    const broken: VoiceShelf = {
      list: () => Promise.reject(new Error('blocked')), read: () => { throw new Error('blocked'); },
      add: () => Promise.reject(new Error('blocked')), mark: () => Promise.reject(new Error('blocked')), clear: () => { throw new Error('blocked'); },
    };
    expect(await keepFirstVoice('s.1', blob('eerste'), day(1), broken)).toBe(false);
    expect(await thenVoice('s.1', day(30), broken)).toBeNull();
    await expect(markThenPlayed('s.1', broken)).resolves.toBeUndefined();
    await expect(forgetFirstVoices(broken)).resolves.toBeUndefined();
  });

  it('never sends anything: no network in the shelf', () => {
    const src = readFileSync('src/lib/firstVoice.ts', 'utf8');
    for (const call of ['fetch(', 'XMLHttpRequest', 'sendBeacon', 'WebSocket', 'count(']) expect(src, call).not.toContain(call);
  });
});

describe('"Je eerste keer: 12 oktober"', () => {
  const at = new Date(2026, 9, 12, 9).getTime();
  const now = new Date(2026, 10, 5);

  it('shows the day in each line\'s own language, with the year only when it is not this year', () => {
    expect(firstDay(at, 'nl-NL', now)).toBe('12 oktober');
    expect(firstDay(at, 'en-GB', now)).toBe('12 October');
    expect(firstDay(at, 'nl-NL', new Date(2027, 0, 3))).toBe('12 oktober 2026');
    const nl = firstDayText(ui('thenNowFirst', getHelpLanguage('nl')), at, now);
    expect(nl.help).toBe('Je eerste keer: 12 oktober');
    const pl = firstDayText(ui('thenNowFirst', getHelpLanguage('pl')), at, now);
    expect(pl.en).toBe('Your first try: 12 October');
    expect(pl.help).toMatch(/^Pierwsza próba: 12 październik/);
    expect(firstDayText(ui('thenNowFirst'), at, now).en).toBe('Your first try: 12 October');
  });
});

describe('the speaking exercise', () => {
  const src = readFileSync('src/components/Speaking.tsx', 'utf8');

  const item = findLesson('l.gear')!.lesson.sentences[0];
  const review = (props: { thenNow?: boolean; thenForShot?: number }, lang = getHelpLanguage('pl')) => renderToStaticMarkup(createElement(SpeakExercise, {
    ex: { kind: 'speak', item }, lang, onAnswer: () => {}, phaseForShot: 'review', ...props,
  }));
  const buttons = (h: string) => (h.match(/<button[^>]*class="btn [^"]*"/g) ?? []).length;

  it('"Toen en nu" takes the place of "Luister naar jezelf": no extra button', () => {
    const before = review({ thenNow: true });
    expect(before).toContain('say-hear-mine');
    expect(before).not.toContain('say-then-now');
    expect(before).not.toContain('say-then-day');
    const after = review({ thenNow: true, thenForShot: new Date(2026, 9, 12, 9).getTime() });
    expect(after).toContain('say-then-now');
    expect(after).toContain('Wtedy i teraz');
    expect(after).toContain('Then and now');
    expect(after).toMatch(/Your first try: 12 October/);
    expect(after).not.toContain('Hear yourself');
    expect(buttons(after)).toBe(buttons(before));
    // Off (as in "Wat ken je al?"): never, even with a first recording.
    expect(review({ thenForShot: new Date(2026, 9, 12, 9).getTime() })).not.toContain('say-then-now');
    // The Dutch-only track: the Dutch line only.
    const nl = review({ thenNow: true, thenForShot: new Date(2026, 9, 12, 9).getTime() }, getHelpLanguage('nl'));
    expect(nl).toContain('Toen en nu');
    expect(nl).toMatch(/Je eerste keer: 12 oktober/);
    expect(nl).not.toContain('Then and now');
  });

  it('keeps the first recording in the lessons only, not in "Wat ken je al?"', () => {
    expect(readFileSync('src/components/LessonPlayer.tsx', 'utf8')).toMatch(/<SpeakExercise [^\n]*thenNow \/>/);
    expect(readFileSync('src/components/Toets.tsx', 'utf8')).not.toContain('thenNow');
  });

  it('the privacy texts say the first recording stays on the phone', () => {
    expect(readFileSync('src/lib/privacyPage.ts', 'utf8')).toContain('de eerste keer dat je een zin zegt');
    expect(ui('speakingHint').en).toContain('stays on your phone');
    expect(ui('speakingHint').en).not.toContain('never saved');
  });
});
