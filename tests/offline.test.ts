import { existsSync, readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';
import { tipForLesson } from '../src/content/culture';
import { units } from '../src/content/curriculum';
import { clipUrl, setRecordedIndex } from '../src/lib/audio';
import { OFFLINE_CACHE, autoOfflinePlan, clipPaths, currentVoices, formatBytes, offlineAuto, phrasebookTexts, setOfflineAuto, unitTexts, voicesKey } from '../src/lib/offline';

const firstDay = units.find((u) => u.id === 'u.firstday')!;
const elevenIndex = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8'));
/** Lines of the first unit still to be recorded (the phone voice says them meanwhile); as in tests/g4b3Clips.test.ts. */
const PENDING_RECORDING = new Set<string>([
  // New lesson "De eerste dag: je weg vinden" (l.arrive, 18 October 2026):
  'de ingang',
  'de receptie',
  'de kantine',
  'de kleedkamer',
  'de buddy',
  'vinden',
  'Bij wie moet ik me melden?',
  'Ik kan de kleedkamer niet vinden.',
  'Wie is mijn buddy vandaag?',
]);

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
    for (const l of firstDay.lessons) {
      for (const x of [...l.words, ...l.sentences]) if (!PENDING_RECORDING.has(x.nl)) expect(paths.has(`./audio-el/daniel/${x.id}.mp3`), x.id).toBe(true);
    }
  });

  it('has every emergency phrase recorded in every voice (saved with each topic, for offline)', () => {
    const texts = phrasebookTexts();
    expect(texts.length).toBeGreaterThan(5);
    for (const voice of currentVoices(null)) {
      const paths = clipPaths(texts, [voice], clipUrl);
      expect(paths, String(voice)).toHaveLength(texts.length);
      for (const p of paths) expect(existsSync(`public/${p.replace(/^\.\//, '')}`), p).toBe(true);
    }
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
    // The app cache is per build (vite.config.ts writes BUILD); the offline cache is not.
    expect(sw).toContain('const CACHE = `vloertaal-app-${BUILD}`');
    expect(sw).toMatch(/const AUDIO = 'vloertaal-audio-v\d+'/);
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

describe('"Keep lessons on this phone" (automatic)', () => {
  const done = (...ids: string[]) => (id: string) => ids.includes(id);

  it('saves the current topic when it is not on the phone yet, or was saved with other voices', () => {
    expect(autoOfflinePlan({ current: 'u.firstday', saved: {}, done: done() })).toEqual({ save: 'u.firstday', release: [] });
    expect(autoOfflinePlan({ current: 'u.firstday', saved: { 'u.firstday': { stale: true } }, done: done() }).save).toBe('u.firstday');
    expect(autoOfflinePlan({ current: 'u.firstday', saved: { 'u.firstday': { stale: false } }, done: done() })).toEqual({ release: [] });
  });

  it('releases finished topics, never the current one, and keeps unfinished ones', () => {
    const saved = { 'u.firstday': { stale: false }, 'u.help': { stale: false }, 'u.tools': { stale: false } };
    expect(autoOfflinePlan({ current: 'u.tools', saved, done: done('u.firstday', 'u.tools') })).toEqual({ release: ['u.firstday'] });
    // Nothing current (the home offers the next topics): finished ones still go.
    expect(autoOfflinePlan({ current: null, saved, done: done('u.help') })).toEqual({ release: ['u.help'] });
  });

  it('does not start a topic again while it saves or after it failed on this visit', () => {
    expect(autoOfflinePlan({ current: 'u.help', saved: {}, done: done(), busy: ['u.help'] })).toEqual({ release: [] });
  });

  it('is off by default, on for a phone that saved a unit by hand before, and remembers the switch', () => {
    const store = new Map<string, string>();
    const ls = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v), removeItem: (k: string) => void store.delete(k) };
    const before = (globalThis as { localStorage?: unknown }).localStorage;
    (globalThis as { localStorage?: unknown }).localStorage = ls;
    try {
      expect(offlineAuto()).toBe(false);
      store.set('vloertaal:offline', JSON.stringify({ units: { 'u.firstday': { urls: [], bytes: 1, voices: 'auto' } }, shell: [] }));
      expect(offlineAuto()).toBe(true);
      store.delete('vloertaal:offline');
      setOfflineAuto(true);
      expect(offlineAuto()).toBe(true);
      setOfflineAuto(false);
      expect(offlineAuto()).toBe(false);
    } finally {
      (globalThis as { localStorage?: unknown }).localStorage = before;
    }
  });
});
