import { existsSync, readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';
import { tipForLesson } from '../src/content/culture';
import { units } from '../src/content/curriculum';
import { clipUrl, setRecordedIndex } from '../src/lib/audio';
import { OFFLINE_CACHE, clipPaths, currentVoices, formatBytes, unitTexts, voicesKey } from '../src/lib/offline';

const firstDay = units.find((u) => u.id === 'u.firstday')!;
const elevenIndex = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8'));

describe('the Dutch lines of a unit', () => {
  it('has its words, sentences, chats, culture tips and single tiles, once each', () => {
    for (const unit of units) {
      const texts = unitTexts(unit);
      expect(new Set(texts).size, unit.id).toBe(texts.length);
      for (const lesson of unit.lessons) {
        for (const x of [...lesson.words, ...lesson.sentences]) expect(texts, `${unit.id} ${x.id}`).toContain(x.nl.trim());
        for (const d of lesson.dialogues ?? []) expect(texts).toEqual(expect.arrayContaining([d.prompt.nl.trim(), d.reply.nl.trim()]));
        const tip = tipForLesson(lesson.id);
        if (tip) expect(texts).toContain(tip.phrase.nl.trim());
      }
    }
    // A tile of "Hallo, ik ben nieuw." says "ik" on its own.
    expect(unitTexts(firstDay)).toEqual(expect.arrayContaining(['ik', 'ben', 'nieuw']));
  });
});

describe('the recorded clips of a unit', () => {
  beforeAll(() => setRecordedIndex(elevenIndex, null));

  it('finds a file on disk for every clip, in every voice the lessons use', () => {
    const voices = currentVoices(null);
    expect(voices.length).toBeGreaterThanOrEqual(4);
    for (const unit of units) {
      const paths = clipPaths(unitTexts(unit), voices, clipUrl);
      expect(paths.length, unit.id).toBeGreaterThan(50);
      for (const p of paths) expect(existsSync(`public/${p.replace(/^\.\//, '')}`), p).toBe(true);
    }
    const keys = new Set(clipPaths(unitTexts(firstDay), voices, clipUrl).map((p) => p.split('/')[2]));
    expect([...keys].sort()).toEqual(['ariel', 'daniel', 'noa', 'thijmen']);
  });

  it('covers every word and sentence of the unit in the chosen voice', () => {
    const paths = new Set(clipPaths(unitTexts(firstDay), ['piper:daniel'], clipUrl));
    for (const l of firstDay.lessons) for (const x of [...l.words, ...l.sentences]) expect(paths.has(`./audio-el/daniel/${x.id}.mp3`), x.id).toBe(true);
  });

  it('skips lines no voice recorded (the phone says those)', () => {
    expect(clipPaths(['Dit zin bestaat nergens als opname.'], currentVoices(null), clipUrl)).toEqual([]);
  });

  it('has a stable key for a set of voices', () => {
    expect(voicesKey(['piper:noa', null])).toBe(voicesKey([null, 'piper:noa']));
    expect(voicesKey(['piper:noa'])).not.toBe(voicesKey(['piper:ariel']));
  });
});

describe('offline odds and ends', () => {
  it('shows sizes plainly', () => {
    expect(formatBytes(800_000)).toBe('800 kB');
    expect(formatBytes(3_420_000)).toBe('3.4 MB');
    expect(formatBytes(12_600_000)).toBe('13 MB');
  });

  it('uses the same offline cache as the service worker, apart from the app cache', () => {
    const sw = readFileSync('public/sw.js', 'utf8');
    expect(sw).toContain(`const OFFLINE = '${OFFLINE_CACHE}'`);
    expect(sw).toMatch(/const CACHE = 'vloertaal-v\d+'/);
    expect(sw).toContain('skipWaiting');
    expect(sw).toContain('clients.claim');
  });
});

describe('the font files saved with the app', () => {
  it('takes every .woff2 of a @font-face, not the .woff fallbacks', async () => {
    const { fontFileUrls } = await import('../src/lib/offline');
    expect(fontFileUrls('url("./noto-color-emoji.3.woff2") format("woff2")')).toEqual(['./noto-color-emoji.3.woff2']);
    expect(fontFileUrls("url(/assets/lexend-latin-ext.woff2) format('woff2'), url(/assets/lexend-latin-ext.woff) format('woff')")).toEqual(['/assets/lexend-latin-ext.woff2']);
  });
});
