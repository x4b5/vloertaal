import { DEVICE, type VoiceRef } from './voices';

/** Dutch text-to-speech through the browser, plus small feedback sounds. */

export function speechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** null = automatic: the first recorded voice, else the phone's best Dutch voice. */
let preferredVoice: VoiceRef = null;

/** Remember the learner's chosen voice: "piper:<key>" (any recorded voice), a device voiceURI, or null. */
export function setPreferredVoice(ref: VoiceRef): void {
  preferredVoice = ref;
}

export interface RecordedVoice {
  key: string;
  label: string;
  gender?: string;
  license?: string;
  dataset?: string;
  modelCard?: string;
  /** Set when loading: who made the recordings. */
  engine?: 'ElevenLabs' | 'Piper';
}

interface RecordedIndex {
  voices: RecordedVoice[];
  /** Dutch text → clip id; files live at audio/<voice key>/<id>.mp3. */
  clips: Record<string, string>;
}

/** ElevenLabs recordings, committed to public/audio-el (see scripts/voices/elevenlabs.mjs). */
interface ElevenIndex {
  voices: (RecordedVoice & { said: Record<string, string> })[];
}

/** One recorded voice with where its files live and which texts it has. */
interface Recorded {
  voice: RecordedVoice;
  base: string;
  /** Dutch text → clip id. */
  clips: Record<string, string>;
  /** Same, keyed without capitals or closing punctuation ("Hallo" finds "hallo"). */
  plain: Record<string, string>;
}

const plainText = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');
const withPlain = (r: Omit<Recorded, 'plain'>): Recorded => ({
  ...r,
  plain: Object.fromEntries(Object.entries(r.clips).map(([text, id]) => [plainText(text), id])),
});

let recorded: Recorded[] = [];
const recordedListeners = new Set<() => void>();

/** Voices recorded ahead of time: ElevenLabs first, then Piper (built in CI). Empty when none. */
export function recordedVoices(): RecordedVoice[] {
  return recorded.map((r) => r.voice);
}

export function onRecordedVoices(fn: () => void): () => void {
  recordedListeners.add(fn);
  return () => recordedListeners.delete(fn);
}

async function loadJson<T>(url: string): Promise<T | null> {
  try {
    const r = await fetch(url);
    return r.ok ? ((await r.json()) as T) : null;
  } catch {
    return null;
  }
}

if (typeof window !== 'undefined' && typeof fetch === 'function') {
  Promise.all([loadJson<ElevenIndex>('./audio-el/voices.json'), loadJson<RecordedIndex>('./audio/voices.json')]).then(
    ([eleven, piper]) => {
      const list: Recorded[] = [
        ...(eleven?.voices ?? []).map(({ said, ...voice }) =>
          withPlain({
            voice: { ...voice, engine: 'ElevenLabs' as const },
            base: './audio-el',
            clips: Object.fromEntries(Object.entries(said).map(([id, text]) => [text.trim(), id])),
          }),
        ),
        ...(piper?.voices ?? []).map((voice) =>
          withPlain({ voice: { ...voice, engine: 'Piper' as const }, base: './audio', clips: piper!.clips }),
        ),
      ];
      if (list.length) {
        recorded = list;
        recordedListeners.forEach((fn) => fn());
      }
    },
  );
}

/** Whether a recorded voice with this key has been loaded. */
export function hasRecordedVoice(key: string): boolean {
  return recorded.some((r) => r.voice.key === key);
}

/** Which recorded voice (if any) a reference resolves to. */
function recordedFor(ref: VoiceRef): Recorded | undefined {
  if (!recorded.length) return undefined;
  if (ref === null) return recorded[0];
  if (ref.startsWith('piper:')) {
    const key = ref.slice(6);
    return recorded.find((r) => r.voice.key === key) ?? recorded[0];
  }
  return undefined;
}

/** All Dutch voices on this device, Netherlands voices first, then Belgian (nl-BE). */
export function dutchVoices(): SpeechSynthesisVoice[] {
  if (!speechAvailable()) return [];
  const rank = (v: SpeechSynthesisVoice) => (v.lang.toLowerCase().replace('_', '-') === 'nl-nl' ? 0 : 1);
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('nl'))
    .sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name));
}

function dutchVoice(uri?: string | null): SpeechSynthesisVoice | undefined {
  const voices = dutchVoices();
  return voices.find((v) => v.voiceURI === uri) ?? voices[0];
}

type SpeechListener = (text: string, speaking: boolean, slow: boolean) => void;
const speechListeners = new Set<SpeechListener>();

/** Follow what is being spoken (characters move their mouth along). Returns an unsubscribe. */
export function onSpeech(fn: SpeechListener): () => void {
  speechListeners.add(fn);
  return () => speechListeners.delete(fn);
}

let speechTurn = 0;

function emitSpeech(text: string, speaking: boolean, slow: boolean): void {
  speechListeners.forEach((fn) => fn(text, speaking, slow));
}

/** Learners need calm Dutch: recordings play a bit slower than recorded (same pitch),
 *  and the turtle button slower still. */
const RECORDED_RATE = { normal: 0.75, slow: 0.5 };
/** The phone's own voice already speaks a little faster than the recordings. */
const DEVICE_RATE = { normal: 0.75, slow: 0.45 };

let playing: HTMLAudioElement | null = null;

function stopAll(): void {
  playing?.pause();
  playing = null;
  if (speechAvailable()) window.speechSynthesis.cancel();
}

/**
 * Speak Dutch (or English) text aloud. `voice` overrides the learner's choice:
 * "piper:<key>" for a recorded voice, "device" for the phone's voice, or a device voiceURI.
 * Recorded clips are used when one exists for this exact text; otherwise the phone speaks.
 */
export function speak(text: string, slow = false, lang: 'nl' | 'en' = 'nl', voice?: VoiceRef): void {
  const ref = voice === undefined ? preferredVoice : voice;
  const rec = lang === 'nl' ? recordedFor(ref) : undefined;
  const id = rec?.clips[text.trim()] ?? rec?.plain[plainText(text)];
  if (rec && id) {
    stopAll();
    const audio = new Audio(`${rec.base}/${rec.voice.key}/${id}.mp3`);
    audio.playbackRate = slow ? RECORDED_RATE.slow : RECORDED_RATE.normal;
    audio.preservesPitch = true;
    (audio as HTMLAudioElement & { webkitPreservesPitch?: boolean }).webkitPreservesPitch = true;
    playing = audio;
    const turn = ++speechTurn;
    const end = () => {
      if (turn === speechTurn) emitSpeech(text, false, slow);
    };
    audio.onended = end;
    // A missing or broken clip: let the phone say it instead.
    audio.onerror = () => {
      if (turn === speechTurn) speakDevice(text, slow, lang, undefined);
    };
    audio.play().catch(end);
    emitSpeech(text, true, slow);
    return;
  }
  // "device" (female characters) still honours a phone voice the learner picked.
  const isDeviceUri = (r: VoiceRef) => !!r && r !== DEVICE && !r.startsWith('piper:');
  const deviceUri = isDeviceUri(ref) ? ref! : ref === DEVICE && isDeviceUri(preferredVoice) ? preferredVoice! : undefined;
  speakDevice(text, slow, lang, deviceUri);
}

function speakDevice(text: string, slow: boolean, lang: 'nl' | 'en', voiceURI: string | undefined): void {
  if (!speechAvailable()) return;
  const synth = window.speechSynthesis;
  playing?.pause();
  playing = null;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'en' ? 'en-GB' : 'nl-NL';
  const voice = lang === 'en' ? undefined : dutchVoice(voiceURI);
  if (voice) u.voice = voice;
  u.rate = slow ? DEVICE_RATE.slow : DEVICE_RATE.normal;
  // cancel() ends the previous utterance asynchronously; only the latest one reports its end.
  const turn = ++speechTurn;
  u.onend = u.onerror = () => {
    if (turn === speechTurn) emitSpeech(text, false, slow);
  };
  synth.speak(u);
  emitSpeech(text, true, slow);
}

// Voices load asynchronously in some browsers; touching the list early warms it up.
if (speechAvailable()) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener?.('voiceschanged', () => window.speechSynthesis.getVoices());
}

let ctx: AudioContext | undefined;

function tone(freqs: number[], duration = 0.12): void {
  try {
    ctx ??= new AudioContext();
    const start = ctx.currentTime;
    freqs.forEach((f, i) => {
      const osc = ctx!.createOscillator();
      const gain = ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      const t = start + i * duration;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.2, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
      osc.connect(gain).connect(ctx!.destination);
      osc.start(t);
      osc.stop(t + duration);
    });
  } catch {
    // No Web Audio: silently skip the effect.
  }
}

export const sounds = {
  correct: () => tone([660, 880]),
  wrong: () => tone([300, 220], 0.16),
  done: () => tone([523, 659, 784, 1047], 0.13),
};
