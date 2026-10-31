import { readFileSync } from 'node:fs';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * A recorded clip that hangs (src/lib/audio.ts playClip): after CLIP_START_MS without sound the
 * phone says the line, and a clip that stalls while it plays ends after its length, so a speaker
 * button or a talking mouth never keeps "talking" without sound. And the address a clip plays
 * from carries its version (clipSrc), so a new recording is never an old copy (public/sw.js).
 */

class FakeUtterance {
  text: string;
  lang = '';
  rate = 1;
  voice: unknown = null;
  onstart: (() => void) | null = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(text: string) { this.text = text; }
}
const synth = {
  voices: [{ lang: 'nl-NL', name: 'Xander', voiceURI: 'nl-xander' }],
  spoken: [] as FakeUtterance[],
  getVoices() { return this.voices; },
  speak(u: FakeUtterance) { this.spoken.push(u); },
  cancel() {},
  addEventListener() {},
  removeEventListener() {},
};

/** How the next clip's play() goes: never settles (a file that hangs), or starts with this length. */
let next: { hang: true } | { duration: number } = { hang: true };
const clips: FakeAudio[] = [];
class FakeAudio {
  url: string;
  playbackRate = 1;
  defaultPlaybackRate = 1;
  preservesPitch = true;
  duration = NaN;
  paused = false;
  onended: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(url: string) { this.url = url; clips.push(this); }
  play() {
    if ('hang' in next) return new Promise<void>(() => {});
    this.duration = next.duration;
    return Promise.resolve();
  }
  pause() { this.paused = true; }
}

let audio: typeof import('../src/lib/audio');
const CLIP = 'Kun je mij even helpen?';
let speaking: string[] = [];

beforeAll(async () => {
  vi.stubGlobal('window', { speechSynthesis: synth });
  vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance);
  vi.stubGlobal('Audio', FakeAudio);
  audio = await import('../src/lib/audio');
  audio.setRecordedIndex({ voices: [{ key: 'thijmen', label: 'Thijmen', gender: 'male', said: { 's.help': CLIP, 's.new': 'Nieuw.' }, takes: { 's.help': 2 } }] }, null);
  audio.onSpeech((text, on) => {
    speaking = on ? [...speaking, text] : speaking.filter((t) => t !== text);
  });
});
afterAll(() => vi.unstubAllGlobals());
beforeEach(() => {
  vi.useFakeTimers();
  audio.stopSpeech();
  audio.setQuietAudio(false);
  synth.spoken = [];
  clips.length = 0;
  speaking = [];
});
afterEach(() => vi.useRealTimers());

describe('a recorded clip that hangs', () => {
  it('lets the phone say the line after CLIP_START_MS without sound', async () => {
    next = { hang: true };
    audio.speak(CLIP);
    expect(clips).toHaveLength(1);
    expect(speaking).toEqual([CLIP]);
    await vi.advanceTimersByTimeAsync(audio.CLIP_START_MS - 100);
    expect(synth.spoken).toHaveLength(0);
    await vi.advanceTimersByTimeAsync(200);
    expect(clips[0].paused).toBe(true);
    expect(synth.spoken.map((u) => u.text)).toEqual([CLIP]);
    // The phone's end ends the line.
    synth.spoken[0].onend?.();
    expect(speaking).toEqual([]);
  });

  it('ends a clip that stalls while it plays, after its length', async () => {
    next = { duration: 2 };
    audio.speak(CLIP);
    await vi.advanceTimersByTimeAsync(0);
    expect(speaking).toEqual([CLIP]);
    // 2 s at the calm pace (0.75x) is about 2.7 s; a little more, then it counts as ended.
    await vi.advanceTimersByTimeAsync(7000);
    expect(speaking).toEqual([]);
    expect(synth.spoken).toHaveLength(0);
  });

  it('a clip that plays and ends as it should: no phone voice after it', async () => {
    next = { duration: 1 };
    audio.speak(CLIP);
    await vi.advanceTimersByTimeAsync(0);
    clips[0].onended?.();
    expect(speaking).toEqual([]);
    await vi.advanceTimersByTimeAsync(60_000);
    expect(synth.spoken).toHaveLength(0);
  });

  it('a new tap cancels the wait: the phone does not say the old line', async () => {
    next = { hang: true };
    audio.speak(CLIP);
    next = { duration: 1 };
    audio.speak('Nieuw.');
    await vi.advanceTimersByTimeAsync(audio.CLIP_START_MS + 100);
    expect(synth.spoken).toHaveLength(0);
  });
});

describe('the address a clip plays from', () => {
  it('has its take and a code of its text', () => {
    next = { duration: 1 };
    audio.speak(CLIP);
    audio.speak('Nieuw.');
    expect(clips[0].url).toMatch(/^\.\/audio-el\/thijmen\/s\.help\.mp3\?v=2\.[0-9a-z]+$/);
    expect(clips[1].url).toMatch(/^\.\/audio-el\/thijmen\/s\.new\.mp3\?v=1\.[0-9a-z]+$/);
    // Another text for the same clip (recorded again): another address.
    const before = audio.clipSrc('./audio-el/thijmen/s.new.mp3');
    audio.setRecordedIndex({ voices: [{ key: 'thijmen', label: 'Thijmen', gender: 'male', said: { 's.help': CLIP, 's.new': 'Nieuw!' }, takes: { 's.help': 2 } }] }, null);
    expect(audio.clipSrc('./audio-el/thijmen/s.new.mp3')).not.toBe(before);
    // A file without a recording index entry keeps its plain address.
    expect(audio.clipSrc('./audio/x/y.mp3')).toBe('./audio/x/y.mp3');
  });
});

describe('the server keeps a clip with a version only (vercel.json)', () => {
  it('as it is with ?v=, and asks again without one (a new take keeps the file name)', () => {
    const rules = JSON.parse(readFileSync('vercel.json', 'utf8')).headers as { source: string; has?: { type: string; key: string }[]; headers: { key: string; value: string }[] }[];
    const audioRules = rules.filter((r) => r.source.startsWith('/audio'));
    expect(audioRules).toHaveLength(1);
    expect(audioRules[0].source).toBe('/audio-el/(.*)');
    expect(audioRules[0].has).toEqual([{ type: 'query', key: 'v' }]);
    expect(audioRules[0].headers).toEqual([{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]);
  });
});
