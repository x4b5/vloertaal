import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * speakLong (src/lib/audio.ts): a longer Dutch text is read sentence by sentence by the phone, or
 * as one recording when the whole text has one, never a mix of both; a new tap cancels the rest;
 * without a Dutch phone voice (and no recording) nothing is said.
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
  voices: [] as { lang: string; name: string; voiceURI: string }[],
  queue: [] as FakeUtterance[],
  spoken: [] as FakeUtterance[],
  cancels: 0,
  getVoices() { return this.voices; },
  speak(u: FakeUtterance) { this.queue.push(u); this.spoken.push(u); },
  cancel() { this.cancels++; this.queue = []; },
  addEventListener() {},
  removeEventListener() {},
};

const clips: { url: string; audio: FakeAudio }[] = [];
class FakeAudio {
  url: string;
  playbackRate = 1;
  preservesPitch = true;
  onended: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(url: string) { this.url = url; clips.push({ url, audio: this }); }
  play() { return Promise.resolve(); }
  pause() {}
}

const DUTCH = { lang: 'nl-NL', name: 'Xander', voiceURI: 'nl-xander' };
const ENGLISH = { lang: 'en-GB', name: 'Daniel', voiceURI: 'en-daniel' };

let audio: typeof import('../src/lib/audio');

beforeAll(async () => {
  vi.stubGlobal('window', { speechSynthesis: synth });
  vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance);
  vi.stubGlobal('Audio', FakeAudio);
  audio = await import('../src/lib/audio');
  audio.setRecordedIndex({
    voices: [{
      key: 'thijmen', label: 'Thijmen', gender: 'male',
      said: { 'c.whole': 'Stop! Dit is niet veilig.', 'c.first': 'Bel zelf.' },
    }],
  }, null);
});
afterAll(() => vi.unstubAllGlobals());
beforeEach(() => {
  audio.stopSpeech(); // what the test before left playing
  synth.voices = [DUTCH, ENGLISH];
  synth.queue = [];
  synth.spoken = [];
  synth.cancels = 0;
  clips.length = 0;
  audio.setDeviceRate('taal');
  audio.setQuietAudio(false);
});

const RULE = 'Bel zelf, en bel vóór je dienst begint. Dat is in de meeste bedrijven de regel. Kijk in je contract of het verzuimprotocol.';

describe('speakLong', () => {
  it('reads one utterance per sentence, in Dutch, in order', () => {
    expect(audio.speakLong(RULE)).toBe(true);
    expect(synth.spoken.map((u) => u.text)).toEqual([
      'Bel zelf, en bel vóór je dienst begint.',
      'Dat is in de meeste bedrijven de regel.',
      'Kijk in je contract of het verzuimprotocol.',
    ]);
    expect(synth.spoken.every((u) => u.lang === 'nl-NL')).toBe(true);
    expect(clips).toHaveLength(0);
  });

  it('splits on ! and ? too, but not after an abbreviation', () => {
    // "app" is given to the voice as "ep" (src/lib/sayAs.ts).
    audio.speakLong('Ziek? Bel zelf! Gebruik bv. een app. Klaar.');
    expect(synth.spoken.map((u) => u.text)).toEqual(['Ziek?', 'Bel zelf!', 'Gebruik bv. een ep.', 'Klaar.']);
  });

  it('the work-rules track reads at about 0.9; the turtle stays slow', () => {
    audio.speakLong('Een zin. Nog een zin.');
    expect(synth.spoken[0].rate).toBe(0.75);
    audio.setDeviceRate('regels');
    synth.spoken = [];
    audio.speakLong('Een zin. Nog een zin.');
    expect(synth.spoken.every((u) => u.rate === 0.9)).toBe(true);
    synth.spoken = [];
    audio.speakLong('Een zin. Nog een zin.', { slow: true });
    expect(synth.spoken.every((u) => u.rate === 0.45)).toBe(true);
  });

  it('reports each sentence and the whole block to onSpeech', () => {
    const heard: string[] = [];
    const off = audio.onSpeech((text, on) => heard.push(`${on ? '+' : '-'}${text}`));
    audio.speakLong('Eén. Twee.');
    const [a, b] = synth.spoken;
    a.onend!();
    b.onstart!();
    b.onend!();
    off();
    expect(heard).toEqual(['+Eén. Twee.', '+Eén.', '-Eén.', '+Twee.', '-Twee.', '-Eén. Twee.']);
  });

  it('a new tap cancels what is still queued, and the old block reports nothing more', () => {
    const heard: string[] = [];
    const off = audio.onSpeech((text, on) => heard.push(`${on ? '+' : '-'}${text}`));
    audio.speakLong(RULE);
    const old = [...synth.spoken];
    const before = synth.cancels;
    audio.speakLong('Nieuwe tekst. Twee zinnen.');
    expect(synth.cancels).toBeGreaterThan(before);
    expect(synth.queue.map((u) => u.text)).toEqual(['Nieuwe tekst.', 'Twee zinnen.']);
    heard.length = 0;
    old.forEach((u) => u.onend!());
    expect(heard).toEqual([]);
    // speak() (a short word) cancels a long block too.
    audio.speak('hallo');
    expect(synth.queue.map((u) => u.text)).toEqual(['hallo']);
    off();
  });

  it('a stop ends what was cut off (a talking mouth stops), and a later speaker only stops its own text', () => {
    const heard: string[] = [];
    const off = audio.onSpeech((text, on) => heard.push(`${on ? '+' : '-'}${text}`));
    audio.speakLong('Eén. Twee.');
    heard.length = 0;
    audio.stopSpeech();
    expect(heard.sort()).toEqual(['-Eén.', '-Eén. Twee.']);
    // A speaker leaving the screen stops its text, not someone else's.
    audio.speakLong('Drie. Vier.');
    const cancels = synth.cancels;
    audio.stopSaying('Eén. Twee.');
    expect(synth.cancels).toBe(cancels);
    audio.stopSaying('Drie. Vier.');
    expect(synth.cancels).toBe(cancels + 1);
    off();
  });

  it('plays one recording when the whole block has one: no phone voice at all', () => {
    audio.speakLong('Stop! Dit is niet veilig.');
    expect(clips).toHaveLength(1);
    expect(clips[0].url).toContain('thijmen/c.whole.mp3');
    expect(synth.spoken).toHaveLength(0);
  });

  it('never mixes: a recording of one sentence is not used inside a longer block', () => {
    audio.speakLong('Bel zelf. Doe het vóór je dienst begint.');
    expect(clips).toHaveLength(0);
    expect(synth.spoken.map((u) => u.text)).toEqual(['Bel zelf.', 'Doe het vóór je dienst begint.']);
  });

  it('a broken recording: the phone reads the whole block instead (still one voice)', () => {
    audio.speakLong('Stop! Dit is niet veilig.');
    expect(synth.spoken).toHaveLength(0);
    clips[0].audio.onerror!();
    expect(synth.spoken.map((u) => u.text)).toEqual(['Stop!', 'Dit is niet veilig.']);
  });

  it('without a Dutch phone voice: nothing is said (never Dutch in an English voice), unless recorded', () => {
    synth.voices = [ENGLISH];
    expect(audio.hasDutchVoice()).toBe(false);
    expect(audio.speakLong(RULE)).toBe(false);
    expect(synth.spoken).toHaveLength(0);
    expect(audio.canSay(RULE)).toBe(false);
    // A recorded text can still be said, and its speaker stays.
    expect(audio.canSay('Stop! Dit is niet veilig.')).toBe(true);
    expect(audio.speakLong('Stop! Dit is niet veilig.')).toBe(true);
    expect(clips).toHaveLength(1);
    synth.voices = [DUTCH];
    expect(audio.hasDutchVoice()).toBe(true);
    expect(audio.canSay(RULE)).toBe(true);
  });

  it('autoSpeakLong is silent in "Zonder geluid"; a tap still plays', () => {
    audio.setQuietAudio(true);
    audio.autoSpeakLong(RULE);
    expect(synth.spoken).toHaveLength(0);
    audio.speakLong(RULE);
    expect(synth.spoken).toHaveLength(3);
  });
});
