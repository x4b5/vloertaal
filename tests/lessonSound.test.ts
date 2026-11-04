import { readFileSync } from 'node:fs';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Exercise } from '../src/lib/exercises';

/**
 * Phase 3 (4 November 2026), "reliable on a poor line":
 *  - a lesson's sound is fetched ahead when it opens, only what it plays, in the voice it plays
 *    it in, through the service worker (src/lib/lessonClips.ts, src/components/lessonLines.ts);
 *  - offline, a listening step whose clip is not on the phone is left out (surelySilent);
 *  - sound that fails for want of internet, with nothing to take over, says so (one line).
 */

class FakeUtterance {
  text: string;
  lang = '';
  rate = 1;
  voice: unknown = null;
  onstart: (() => void) | null = null;
  onend: (() => void) | null = null;
  onerror: ((e?: { error?: string }) => void) | null = null;
  constructor(text: string) { this.text = text; }
}
const synth = {
  voices: [] as { lang: string; name: string; voiceURI: string }[],
  spoken: [] as FakeUtterance[],
  getVoices() { return this.voices; },
  speak(u: FakeUtterance) { this.spoken.push(u); },
  cancel() {},
  addEventListener() {},
  removeEventListener() {},
};
const DUTCH = { lang: 'nl-NL', name: 'Xander', voiceURI: 'nl-xander' };

const clips: FakeAudio[] = [];
class FakeAudio {
  url: string;
  playbackRate = 1;
  defaultPlaybackRate = 1;
  preservesPitch = true;
  duration = NaN;
  onended: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(url: string) { this.url = url; clips.push(this); }
  // A clip that never starts by itself: the test makes it fail (onerror) or time out.
  play() { return new Promise<void>(() => {}); }
  pause() {}
}

const nav = { onLine: true, connection: { saveData: false }, serviceWorker: { controller: {} as unknown } };
/** The caches of the phone: absolute URL (with its ?v= when it has one) → kept. */
const cached = new Set<string>();
const fakeCaches = {
  match: async (url: string, opts?: { ignoreSearch?: boolean }) => {
    const plain = (u: string) => u.split('?')[0];
    const hit = opts?.ignoreSearch ? [...cached].some((u) => plain(u) === plain(url)) : cached.has(url);
    return hit ? ({} as Response) : undefined;
  },
};
const fetched: string[] = [];
let fetchFails = false;
const fakeFetch = vi.fn(async (url: string) => {
  if (fetchFails) throw new TypeError('Failed to fetch');
  fetched.push(url);
  // The service worker keeps what it fetched (public/sw.js audio: AUDIO, at this address).
  cached.add(url);
  return { ok: true, blob: async () => new Blob(['x']) } as unknown as Response;
});

let audio: typeof import('../src/lib/audio');
let clipsLib: typeof import('../src/lib/lessonClips');
let lines: typeof import('../src/components/lessonLines');
let player: typeof import('../src/components/LessonPlayer');
const voices = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8'));
const BASE = 'https://vloertaal.nl/';

beforeAll(async () => {
  vi.stubGlobal('window', { speechSynthesis: synth, addEventListener() {}, removeEventListener() {}, setTimeout, clearTimeout });
  vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance);
  vi.stubGlobal('Audio', FakeAudio);
  vi.stubGlobal('navigator', nav);
  vi.stubGlobal('document', { baseURI: BASE });
  vi.stubGlobal('caches', fakeCaches);
  vi.stubGlobal('fetch', fakeFetch);
  audio = await import('../src/lib/audio');
  clipsLib = await import('../src/lib/lessonClips');
  lines = await import('../src/components/lessonLines');
  player = await import('../src/components/LessonPlayer');
  audio.setRecordedIndex(voices, null);
});
afterAll(() => vi.unstubAllGlobals());
beforeEach(() => {
  nav.onLine = true;
  nav.connection.saveData = false;
  nav.serviceWorker.controller = {};
  synth.voices = [];
  synth.spoken = [];
  clips.length = 0;
  cached.clear();
  fetched.length = 0;
  fetchFails = false;
  audio.stopSpeech();
});
afterEach(() => vi.useRealTimers());

async function lesson(id: string, seed = 7): Promise<Exercise[]> {
  const { findLesson } = await import('../src/content/curriculum');
  const { buildLesson } = await import('../src/lib/exercises');
  return buildLesson(findLesson(id)!.lesson, { review: false, seed, speak: true });
}

describe('the lines a lesson plays (fetched ahead)', () => {
  it('has each exercise\'s Dutch in the voice it is said with, in the order of the lesson', async () => {
    const { voiceFor } = await import('../src/lib/voices');
    const { castFor, wordCast } = await import('../src/components/Characters');
    const exercises = await lesson('l.hello');
    const all = lines.lessonLines(exercises);
    const has = (text: string, voice?: string | null) => all.some((l) => l.text === text.trim() && l.voice === voice);
    for (const ex of exercises) {
      if (ex.kind === 'intro' || ex.kind === 'listen' || ex.kind === 'type') expect(has(ex.word.nl), ex.word.id).toBe(true);
      if (ex.kind === 'meaning') expect(has(ex.word.nl, voiceFor(wordCast(ex.word.id, 'meaning'))), ex.word.id).toBe(true);
      if (ex.kind === 'build') expect(has(ex.sentence.nl, voiceFor(castFor(ex.sentence.id))), ex.sentence.id).toBe(true);
      if (ex.kind === 'chat') expect(has(ex.dialogue.prompt.nl) || all.some((l) => l.text === ex.dialogue.prompt.nl.trim()), ex.dialogue.id).toBe(true);
    }
    // Once each, and the first exercise's line first.
    expect(new Set(all.map((l) => `${l.voice}|${l.text}`)).size).toBe(all.length);
    expect(all[0].text).toBe(lines.exerciseLines(exercises[0])[0].text);
  });

  it('fetches a sentence\'s own words, not the tiles that do not fit', async () => {
    const exercises = await lesson('l.hello');
    const build = exercises.find((e): e is Extract<Exercise, { kind: 'build' }> => e.kind === 'build')!;
    const { tokenize } = await import('../src/lib/answers');
    const own = new Set(tokenize(build.sentence.nl));
    const said = lines.exerciseLines(build).map((l) => l.text);
    expect(said[0]).toBe(build.sentence.nl);
    for (const t of build.tiles.filter((t) => !own.has(t))) expect(said, t).not.toContain(t);
  });

  it('is a few hundred kB a lesson, not every line in every voice', async () => {
    const paths = clipsLib.linePaths(lines.lessonLines(await lesson('l.hello')));
    expect(paths.length).toBeGreaterThan(10);
    expect(paths.length).toBeLessThan(60);
    expect(new Set(paths).size).toBe(paths.length);
    // Only recorded files (a line the phone's voice says needs none).
    expect(clipsLib.linePaths([{ text: 'Dit zin bestaat nergens als opname.' }])).toEqual([]);
  });

  it('knows the voice a step is heard in: a sentence by ear in its speaker\'s, a word in the learner\'s', async () => {
    const { voiceFor } = await import('../src/lib/voices');
    const { castFor } = await import('../src/components/Characters');
    const exercises = await lesson('l.hello');
    const build = exercises.find((e) => e.kind === 'build')!;
    const listen = exercises.find((e) => e.kind === 'listen')!;
    expect(lines.heardVoice(build)).toBe(voiceFor(castFor((build as Extract<Exercise, { kind: 'build' }>).sentence.id)));
    expect(lines.heardVoice(listen)).toBeUndefined();
  });
});

describe('fetching a lesson\'s sound ahead', () => {
  const paths = () => ['./audio-el/thijmen/w.hallo.mp3', './audio-el/thijmen/w.ja.mp3', './audio-el/daniel/w.hallo.mp3'];

  it('fetches only what is not on the phone, at the address it plays from, and notes it on the phone', async () => {
    cached.add(`${BASE}audio-el/thijmen/w.hallo.mp3`); // saved with its topic (plain address)
    const n = await clipsLib.warmClips(paths());
    expect(n).toBe(2);
    expect(fetched.map((u) => u.replace(BASE, ''))).toEqual(paths().slice(1).map((p) => audio.clipSrc(p).replace('./', '')));
    expect(fetched.every((u) => u.includes('?v='))).toBe(true);
    for (const p of paths()) expect(audio.clipOnPhone(p), p).toBe(true);
  });

  it('stops when the lesson closes, and on a line that fails', async () => {
    const stop = new AbortController();
    stop.abort();
    expect(await clipsLib.warmClips(paths(), stop.signal)).toBe(0);
    fetchFails = true;
    expect(await clipsLib.warmClips(paths())).toBe(0);
    expect(fetched).toEqual([]);
  });

  it('only online, without Data Saver, and with a service worker to keep them', () => {
    expect(clipsLib.mayWarm()).toBe(true);
    nav.connection.saveData = true;
    expect(clipsLib.mayWarm()).toBe(false);
    nav.connection.saveData = false;
    nav.onLine = false;
    expect(clipsLib.mayWarm()).toBe(false);
    nav.onLine = true;
    nav.serviceWorker.controller = null;
    expect(clipsLib.mayWarm()).toBe(false);
  });

  it('looks in the caches when a lesson opens, and with Data Saver on fetches nothing', async () => {
    nav.connection.saveData = true;
    cached.add(`${BASE}audio-el/thijmen/w.hallo.mp3?v=old`);
    const checked = vi.fn();
    const stop = clipsLib.prepareLessonSound([{ text: 'hallo' }, { text: 'ja' }], checked, 0);
    await vi.waitFor(() => expect(checked).toHaveBeenCalled());
    await new Promise((r) => setTimeout(r, 20));
    stop();
    expect(fetched).toEqual([]);
    // Any version counts offline (the service worker plays any copy it has).
    expect(audio.clipOnPhone('./audio-el/thijmen/w.hallo.mp3')).toBe(true);
    expect(audio.clipOnPhone('./audio-el/thijmen/w.ja.mp3')).toBe(false);
  });

  it('online it fetches the lesson\'s clips after a moment, and says so again', async () => {
    const checked = vi.fn();
    clipsLib.prepareLessonSound([{ text: 'ja' }, { text: 'nee' }], checked, 0);
    await vi.waitFor(() => expect(checked).toHaveBeenCalledTimes(2));
    expect(fetched.map((u) => u.split('?')[0].replace(BASE, './'))).toEqual(['./audio-el/thijmen/w.ja.mp3', './audio-el/thijmen/w.nee.mp3']);
  });
});

describe('offline: a step that can\'t be heard is left out', () => {
  it('a recording not on the phone is silent offline, unless a Dutch phone voice can say it', () => {
    const path = audio.clipUrl('hallo')!;
    audio.markOnPhone(path, false);
    expect(audio.surelySilent('hallo')).toBe(false); // online: it can be fetched
    nav.onLine = false;
    expect(audio.surelySilent('hallo')).toBe(true);
    audio.markOnPhone(path, true);
    expect(audio.surelySilent('hallo')).toBe(false);
    audio.markOnPhone(path, false);
    synth.voices = [DUTCH];
    expect(audio.surelySilent('hallo')).toBe(false);
  });

  it('a listening step in the learner\'s voice, a sentence by ear in its speaker\'s (cantBeHeard)', async () => {
    const exercises = await lesson('l.hello');
    const listen = exercises.find((e): e is Extract<Exercise, { kind: 'listen' }> => e.kind === 'listen')!;
    const build = { ...exercises.find((e): e is Extract<Exercise, { kind: 'build' }> => e.kind === 'build')!, audio: true as const };
    nav.onLine = false;
    audio.markOnPhone(audio.clipUrl(listen.word.nl)!, false);
    expect(player.cantBeHeard(listen)).toBe(true);
    audio.markOnPhone(audio.clipUrl(listen.word.nl)!, true);
    expect(player.cantBeHeard(listen)).toBe(false);
    // The sentence's clip in the learner's voice is not the one that plays: its speaker's is.
    audio.markOnPhone(audio.clipUrl(build.sentence.nl)!, true);
    audio.markOnPhone(audio.clipUrl(build.sentence.nl, lines.heardVoice(build))!, false);
    expect(player.cantBeHeard(build)).toBe(true);
    audio.markOnPhone(audio.clipUrl(build.sentence.nl, lines.heardVoice(build))!, true);
    expect(player.cantBeHeard(build)).toBe(false);
    // Online nothing is left out for this reason.
    nav.onLine = true;
    audio.markOnPhone(audio.clipUrl(listen.word.nl)!, false);
    expect(player.cantBeHeard(listen)).toBe(false);
  });
});

describe('"Geen internet: het geluid werkt nu niet."', () => {
  let told = 0;
  beforeAll(() => { audio.onSoundNeedsInternet(() => { told++; }); });
  beforeEach(() => { told = 0; });

  it('is said when a clip fails offline and the phone has no Dutch voice to take over', () => {
    nav.onLine = false;
    audio.speak('hallo');
    clips[0].onerror?.();
    expect(told).toBe(1);
  });

  it('is not said when the phone\'s Dutch voice says it instead, nor for a broken file online', () => {
    nav.onLine = false;
    synth.voices = [DUTCH];
    audio.speak('hallo');
    clips[0].onerror?.();
    expect(synth.spoken.map((u) => u.text)).toEqual(['hallo']);
    expect(told).toBe(0);
    synth.voices = [];
    nav.onLine = true;
    audio.speak('ja');
    clips[1].onerror?.();
    expect(told).toBe(0);
  });

  it('is said for a clip that does not start in time (a line that hangs) with nothing to take over', () => {
    vi.useFakeTimers();
    audio.speak('hallo');
    vi.advanceTimersByTime(audio.CLIP_START_MS + 10);
    expect(told).toBe(1);
  });

  it('is said when the phone\'s own voice fails offline too, not when it was only cut off', () => {
    synth.voices = [DUTCH];
    nav.onLine = false;
    audio.speak('Dit zin bestaat nergens als opname.');
    synth.spoken[0].onerror?.({ error: 'interrupted' });
    expect(told).toBe(0);
    audio.speak('Nog een zin zonder opname.');
    synth.spoken[1].onerror?.({ error: 'network' });
    expect(told).toBe(1);
  });

  it('is a UI text in every help language and in the work-rules track', async () => {
    const { uiEn } = await import('../src/i18n/types');
    const { uiNl } = await import('../src/i18n/nl');
    expect(uiEn.noInternetSound).toMatch(/internet/i);
    expect(uiNl.noInternetSound).toBe('Geen internet: het geluid werkt nu niet.');
  });
});
