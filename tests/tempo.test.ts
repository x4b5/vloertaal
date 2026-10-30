import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { THEMES, THEME_UNITS } from '../src/content/themes';
import { courseUnits, unitOfLesson } from '../src/content/courses';
import { settingsRows } from '../src/lib/settingsMenu';
import { DEVICE_RATE_RULES, paceOf, REAL_PACE_REPLAY_THEMES, realPaceReplay, tempoOf } from '../src/lib/tempo';

/**
 * "Tempo" (src/lib/tempo.ts, src/lib/audio.ts): "Rustig" (the default) plays as before (0.75x),
 * "Normaal" at the real pace (1.0x, the phone about 0.95). In the later themes of the Taal path
 * the second play of the same line in a lesson is at the real pace, also on "Rustig". The turtle
 * and the work-rules track stay as they were.
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
const clips: FakeAudio[] = [];
class FakeAudio {
  url: string;
  playbackRate = 1;
  defaultPlaybackRate = 1;
  preservesPitch = true;
  onended: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(url: string) { this.url = url; clips.push(this); }
  play() { return Promise.resolve(); }
  pause() {}
}

let audio: typeof import('../src/lib/audio');
const CLIP = 'Kun je mij even helpen?';
const NO_CLIP = 'Dit heeft geen opname.';

beforeAll(async () => {
  vi.stubGlobal('window', { speechSynthesis: synth });
  vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance);
  vi.stubGlobal('Audio', FakeAudio);
  audio = await import('../src/lib/audio');
  audio.setRecordedIndex({ voices: [{ key: 'thijmen', label: 'Thijmen', gender: 'male', said: { 's.help': CLIP } }] }, null);
});
afterAll(() => vi.unstubAllGlobals());
beforeEach(() => {
  audio.stopSpeech();
  audio.endLessonPace('late');
  audio.endLessonPace('early');
  audio.endLessonPace('rules');
  audio.setTempo('calm');
  audio.setDeviceRate('taal');
  audio.setQuietAudio(false);
  synth.spoken = [];
  clips.length = 0;
});

const lastClipRate = () => clips[clips.length - 1].playbackRate;
const lastDeviceRate = () => synth.spoken[synth.spoken.length - 1].rate;

describe('Tempo: the default and the setting', () => {
  it('older saves and new learners are calm', () => {
    expect(tempoOf({})).toBe('calm');
    expect(tempoOf({ tempo: 'fast' })).toBe('calm');
    expect(tempoOf({ tempo: 'normal' })).toBe('normal');
  });

  it('"Rustig" plays as before: recordings 0.75x, the phone 0.75, the turtle slower', () => {
    audio.speak(CLIP);
    expect(lastClipRate()).toBe(0.75);
    audio.speak(CLIP, true);
    expect(lastClipRate()).toBe(0.5);
    audio.speak(NO_CLIP);
    expect(lastDeviceRate()).toBe(0.75);
    expect(audio.deviceRate()).toBe(0.75);
  });

  it('"Normaal" plays at the real pace: recordings 1.0x, the phone about 0.95; the turtle stays', () => {
    audio.setTempo('normal');
    audio.speak(CLIP);
    expect(lastClipRate()).toBe(1);
    audio.speak(NO_CLIP);
    expect(lastDeviceRate()).toBe(0.95);
    audio.speak(CLIP, true);
    expect(lastClipRate()).toBe(0.5);
    audio.speak(NO_CLIP, true);
    expect(lastDeviceRate()).toBe(0.45);
    audio.speakLong('Een zin. Nog een zin.');
    expect(synth.spoken.slice(-2).every((u) => u.rate === 0.95)).toBe(true);
  });
});

describe('Tempo: the old save keeps working', () => {
  const store = new Map<string, string>();
  const ls = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };

  it('a save without tempo loads as calm; a saved choice stays; an unknown value is dropped', async () => {
    (globalThis as { localStorage?: unknown }).localStorage = ls;
    const { loadProgress } = await import('../src/lib/progress');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, theme: 'light', xp: 40 }));
    const old = loadProgress();
    expect(old.tempo).toBeUndefined();
    expect(tempoOf(old)).toBe('calm');
    expect(old.xp).toBe(40);
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, tempo: 'normal' }));
    expect(loadProgress().tempo).toBe('normal');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, tempo: 7 }));
    expect('tempo' in loadProgress()).toBe(false);
  });
});

describe('Tempo: the second play in the later themes', () => {
  it('the later themes are the last half of the themes, and each has Taal units', () => {
    expect(REAL_PACE_REPLAY_THEMES).toEqual(THEMES.slice(THEMES.length / 2).map((t) => t.id));
    for (const t of REAL_PACE_REPLAY_THEMES) expect(THEME_UNITS[t].taal.length).toBeGreaterThan(0);
  });

  it('a lesson of a later theme replays at the real pace; an early one does not', () => {
    const late = courseUnits('taal').find((u) => u.id === 'u.teamwork')!;
    const early = courseUnits('taal').find((u) => u.id === 'u.firstday')!;
    expect(realPaceReplay(unitOfLesson(late.lessons[0].id)?.id)).toBe(true);
    expect(realPaceReplay(unitOfLesson(early.lessons[0].id)?.id)).toBe(false);
    expect(realPaceReplay(undefined)).toBe(false);
  });

  it('on "Rustig": the first play is calm, the second of the same line 1.0x; other lines calm first', () => {
    audio.startLessonPace('late', true);
    audio.speak(CLIP);
    expect(lastClipRate()).toBe(0.75);
    audio.speak(CLIP);
    expect(lastClipRate()).toBe(1);
    // Without closing punctuation or capitals it is the same line.
    audio.speak('kun je mij even helpen');
    expect(lastClipRate()).toBe(1);
    audio.speak(NO_CLIP);
    expect(lastDeviceRate()).toBe(0.75);
    audio.speak(NO_CLIP);
    expect(lastDeviceRate()).toBe(0.95);
    // The turtle stays slow, also the second time.
    audio.speak(CLIP, true);
    expect(lastClipRate()).toBe(0.5);
  });

  it('an early theme, and outside a lesson: the second play stays calm', () => {
    audio.startLessonPace('early', false);
    audio.speak(CLIP);
    audio.speak(CLIP);
    expect(lastClipRate()).toBe(0.75);
    audio.endLessonPace('early');
    audio.speak(CLIP);
    audio.speak(CLIP);
    expect(lastClipRate()).toBe(0.75);
  });

  it('a new lesson starts fresh: its first play is calm again', () => {
    audio.startLessonPace('late', true);
    audio.speak(CLIP);
    audio.endLessonPace('late');
    audio.startLessonPace('late', true);
    audio.speak(CLIP);
    expect(lastClipRate()).toBe(0.75);
  });
});

describe('Tempo: the work-rules track does not change', () => {
  it('the phone reads at 0.9, recordings at 0.75x, also on "Normaal" and on a second play', () => {
    audio.setDeviceRate('regels');
    audio.setTempo('normal');
    audio.startLessonPace('rules', true);
    audio.speak(NO_CLIP);
    audio.speak(NO_CLIP);
    expect(synth.spoken.map((u) => u.rate)).toEqual([DEVICE_RATE_RULES, DEVICE_RATE_RULES]);
    audio.speak(CLIP);
    audio.speak(CLIP);
    expect(clips.map((c) => c.playbackRate)).toEqual([0.75, 0.75]);
    audio.speak(NO_CLIP, true);
    expect(lastDeviceRate()).toBe(0.45);
    expect(audio.deviceRate()).toBe(0.9);
    expect(paceOf({ slow: false, tempo: 'normal', rules: true, replay: true, heardBefore: true })).toBe('calm');
  });

  it('no work-rules lesson replays faster, and the rules track has no Tempo row', () => {
    for (const t of REAL_PACE_REPLAY_THEMES) for (const id of THEME_UNITS[t].regels) expect(realPaceReplay(id)).toBe(false);
    const ctx = { helpLang: true, gender: false, preview: false, install: false, offline: false };
    expect(settingsRows('lessons', ctx)).toContain('tempo');
    expect(settingsRows('lessons', { ...ctx, helpLang: false, rules: true })).not.toContain('tempo');
  });
});
