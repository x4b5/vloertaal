import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { endPose, KLANKEN, REST, type MouthPose } from '../src/content/klankMond';
import { KLANK_UITLEG, klankText } from '../src/content/klankTeksten';
import { mouthGeometry, poseAtTime, STEPS, SLOW_FACTOR } from '../src/components/Mouth';
import { KlankCard, soundText } from '../src/components/KlankCard';
import { getHelpLanguage } from '../src/i18n/all';
import { hasClip, setRecordedIndex, type ElevenIndex } from '../src/lib/audio';

/**
 * "Hoe zeg je het?", the pilot with a mouth per sound (src/content/klankMond.ts): every sound has
 * a position, an explanation in Dutch, English and Polish, and an example word with a picture and
 * a recording; the positions really differ the way the sounds do; the motion goes rest → sound →
 * rest and ends where it started; the card has at most three things to tap.
 */

const index = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')) as ElevenIndex;
const said = (key: string) => new Set(Object.values(index.voices.find((v) => v.key === key)!.said).map((t) => t.trim().toLowerCase()));
const byId = Object.fromEntries(KLANKEN.map((k) => [k.id, k]));

afterEach(() => setRecordedIndex(null, null));

describe('the six sounds of the pilot', () => {
  it('are aa, ee, oe, uu, eu and ui, each once', () => {
    expect(KLANKEN.map((k) => k.id)).toEqual(['aa', 'ee', 'oe', 'uu', 'eu', 'ui']);
  });

  it('each has a position with every value between 0 and 1, and a moving sound also an end', () => {
    for (const k of KLANKEN) {
      for (const p of [k.start, endPose(k)]) {
        for (const [name, v] of Object.entries(p)) expect(v, `${k.id}.${name}`).toBeGreaterThanOrEqual(0);
        for (const [name, v] of Object.entries(p)) expect(v, `${k.id}.${name}`).toBeLessThanOrEqual(1);
      }
      expect(Boolean(k.end), k.id).toBe(Boolean(k.glide));
    }
    expect(byId.ui.glide).toBe('full');
  });

  it('each has a short explanation in Dutch, English and Polish', () => {
    for (const k of KLANKEN) {
      const t = KLANK_UITLEG[k.id];
      for (const lang of ['nl', 'en', 'pl'] as const) {
        expect(t[lang].trim().length, `${k.id} ${lang}`).toBeGreaterThan(20);
        // Short: a few plain sentences (readers who read little).
        expect(t[lang].length, `${k.id} ${lang}`).toBeLessThanOrEqual(130);
      }
    }
    expect(klankText('uu', getHelpLanguage('pl')).help).toBe(KLANK_UITLEG.uu.pl);
    // Another help language: the English, until its translation is there.
    expect(klankText('uu', getHelpLanguage('ar')).help).toBeUndefined();
    expect(klankText('uu').en).toBe(KLANK_UITLEG.uu.en);
  });

  it('each has an example word with a drawing, the sound in it, and a recording in all four voices', async () => {
    const words = (await import('../src/pictures/words')).default as Record<string, unknown>;
    for (const k of KLANKEN) {
      expect(words[k.word.id], k.word.id).toBeTruthy();
      expect(k.word.nl, k.id).toContain(k.letters);
      for (const v of index.voices) expect(said(v.key).has(k.word.nl), `${v.key}: ${k.word.nl}`).toBe(true);
    }
  });

  it('plays the sound on its own where it is recorded (u, ui), else the word that carries it', () => {
    setRecordedIndex(index, null);
    const voice = 'piper:thijmen';
    expect(soundText(byId.uu, voice).text).toBe('u');
    expect(soundText(byId.ui, voice).text).toBe('ui');
    for (const id of ['aa', 'ee', 'oe', 'eu']) {
      const s = soundText(byId[id], voice);
      expect(s.text === byId[id].sound ? hasClip(s.text, voice) : s.text === byId[id].word.nl, id).toBe(true);
    }
    // The dev page's &tts=1: the phone's voice says the letters.
    expect(soundText(byId.eu, voice, true)).toEqual({ text: 'eu', voice: 'device' });
  });
});

describe('the positions differ as the sounds do', () => {
  const g = (p: MouthPose) => mouthGeometry(p);
  it('aa opens the jaw the most, oe and uu the least', () => {
    const open = KLANKEN.map((k) => [k.id, g(k.start).h] as const).sort((a, b) => b[1] - a[1]);
    expect(open[0][0]).toBe('aa');
    expect(g(byId.oe.start).h).toBeLessThan(g(byId.ee.start).h);
    expect(g(byId.uu.start).h).toBeLessThan(g(byId.eu.start).h);
    expect(g(REST).h).toBe(0);
  });

  it('ee is the widest and flat; oe, uu and the end of ui are narrow and round', () => {
    for (const k of KLANKEN.filter((x) => x.id !== 'ee')) expect(g(byId.ee.start).w, k.id).toBeGreaterThan(g(k.start).w);
    expect(byId.ee.start.round).toBeLessThan(0.2);
    for (const p of [byId.oe.start, byId.uu.start, byId.ui.end!]) {
      expect(p.round).toBeGreaterThanOrEqual(0.9);
      expect(g(p).w).toBeLessThan(g(REST).w * 0.6);
    }
  });

  it('oe and uu differ in the tongue: back (unseen) for oe, forward (seen) for uu', () => {
    expect(byId.oe.start.tongue).toBe(0);
    expect(byId.uu.start.tongue).toBeGreaterThan(0.5);
    expect(byId.oe.start.forward).toBeGreaterThan(byId.uu.start.forward);
  });

  it('eu is rounded like uu but more open, with the tongue forward like ee', () => {
    expect(byId.eu.start.round).toBeGreaterThan(0.6);
    expect(byId.eu.start.open).toBeGreaterThan(byId.uu.start.open);
    expect(byId.eu.start.tongue).toBeGreaterThan(0.4);
  });

  it('ui closes from half open to small, and its lips stay round all the way', () => {
    const { start, end } = byId.ui;
    expect(end!.open).toBeLessThan(start.open);
    expect(end!.wide).toBeLessThan(start.wide);
    for (const t of [0, 0.25, 0.5, 0.75, 1]) expect(start.round + (end!.round - start.round) * t).toBeGreaterThanOrEqual(0.6);
  });

  it('the Dutch glide of ee and eu is subtle: the end is close to the start', () => {
    for (const id of ['ee', 'eu']) {
      const k = byId[id];
      expect(k.glide).toBe('subtle');
      for (const key of Object.keys(k.start) as (keyof MouthPose)[]) expect(Math.abs(k.end![key] - k.start[key]), `${id}.${key}`).toBeLessThanOrEqual(0.16);
    }
  });
});

describe('the motion', () => {
  const total = (slow: boolean) => Object.values(STEPS).reduce((a, b) => a + b, 0) * (slow ? SLOW_FACTOR : 1);

  it('goes from the position to rest, to the sound, holds it, back to rest, and ends in its position', () => {
    for (const k of KLANKEN) {
      expect(poseAtTime(k, 0, false).pose).toEqual(k.start);
      expect(poseAtTime(k, STEPS.toRest + 10, false).pose).toEqual(REST);
      const after = total(false) + 1;
      expect(poseAtTime(k, after, false)).toEqual({ pose: k.start, done: true });
      // In the pause after the sound: at rest again.
      expect(poseAtTime(k, STEPS.toRest + STEPS.rest + STEPS.onset + STEPS.hold + STEPS.release + 10, false).pose).toEqual(REST);
    }
  });

  it('ui moves from its start to its end during the hold', () => {
    const k = byId.ui;
    const holdStart = STEPS.toRest + STEPS.rest + STEPS.onset;
    expect(poseAtTime(k, holdStart + 1, false).pose.open).toBeCloseTo(k.start.open, 2);
    expect(poseAtTime(k, holdStart + STEPS.hold - 1, false).pose.open).toBeCloseTo(k.end!.open, 2);
    const mid = poseAtTime(k, holdStart + STEPS.hold * 0.5, false).pose.open;
    expect(mid).toBeLessThan(k.start.open);
    expect(mid).toBeGreaterThan(k.end!.open);
  });

  it('slow takes twice as long, and the hold waits for the end of the sound', () => {
    const k = byId.aa;
    expect(poseAtTime(k, total(false) + 1, true).done).toBe(false);
    expect(poseAtTime(k, total(true) + 1, true).done).toBe(true);
    // The sound still plays at 2 s: the mouth still holds aa.
    expect(poseAtTime(k, 2000, false, 2100).pose).toEqual(k.start);
  });
});

describe('the card', () => {
  it('has the letters, the mouth, the explanation, the word with picture and speaker, and "Langzaam": at most 3 taps', () => {
    for (const k of KLANKEN) {
      const html = renderToStaticMarkup(createElement(KlankCard, { klank: k, lang: getHelpLanguage('pl') }));
      expect(html).toContain(`>${k.letters}</span>`);
      expect(html).toContain('class="mouth');
      expect(html).toContain(KLANK_UITLEG[k.id].pl);
      const buttons = html.match(/<button/g) ?? [];
      // The sound (letters + mouth), the word's speaker and "Langzaam".
      expect(buttons.length, k.id).toBe(3);
      expect(html).toContain('klank-play');
      expect(html).toContain('klank-slow');
      // ui shows where it starts and ends, also without motion.
      expect(html.includes('klank-steps'), k.id).toBe(k.glide === 'full');
    }
  });
});
