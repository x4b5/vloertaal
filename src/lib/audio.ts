import { BRAM_HELLO, BRAM_VOICE, DEVICE, type VoiceRef } from './voices';
import { sayAs } from './sayAs';
import { sentences } from './dutch';

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

export function preferredVoiceRef(): VoiceRef {
  return preferredVoice;
}

/**
 * "Without sound" (the learner's setting): nothing plays by itself and there are no effect
 * sounds. A speaker button the learner taps still plays (they may wear earphones).
 */
let quietAudio = false;

export function setQuietAudio(quiet: boolean): void {
  if (quiet && !quietAudio) stopAll();
  quietAudio = quiet;
}

/**
 * Speech that starts by itself (a new word on screen, the right answer after Check, a tile or
 * card that says its word when picked). Silent in "Without sound"; buttons use speak().
 */
export function autoSpeak(text: string, slow = false, lang: 'nl' | 'en' = 'nl', voice?: VoiceRef): void {
  if (!quietAudio) speak(text, slow, lang, voice);
}

/** speakLong() that starts by itself (a story on screen): silent in "Without sound". */
/** Says a longer text unless sound is off; true when something is being said. */
export function autoSpeakLong(text: string, opts: LongSpeech = {}): boolean {
  return quietAudio ? false : speakLong(text, opts);
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

export interface RecordedIndex {
  voices: RecordedVoice[];
  /** Dutch text → clip id; files live at audio/<voice key>/<id>.mp3. */
  clips: Record<string, string>;
}

/** ElevenLabs recordings, committed to public/audio-el (see scripts/voices/elevenlabs.mjs). */
export interface ElevenIndex {
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

/** Puts the recorded voices in place (ElevenLabs first, then Piper). Also used by tests. */
export function setRecordedIndex(eleven: ElevenIndex | null, piper: RecordedIndex | null): void {
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
}

/** Settles once the recorded-voice index has loaded (or failed to load). */
let indexLoaded: Promise<void> = Promise.resolve();
/** The index came (so a line without a clip really has none). */
let indexArrived = false;

if (typeof window !== 'undefined' && typeof fetch === 'function') {
  // Only the ElevenLabs index: the old Piper voices (./audio/voices.json, built in CI) are no
  // longer made, so asking for that file only failed, on every load and offline.
  indexLoaded = loadJson<ElevenIndex>('./audio-el/voices.json').then((eleven) => {
    indexArrived = Boolean(eleven);
    setRecordedIndex(eleven, null);
  }).finally(() => {
    indexSettled = true;
    // Also when it failed: a screen waiting for it (Settings › Voice) can say there is none.
    recordedListeners.forEach((fn) => fn());
  });
}

export function recordedIndexReady(): Promise<void> {
  return indexLoaded;
}

/** The recorded-voice index came or failed: until then, "no voice on this phone" is not known yet. */
let indexSettled = typeof window === 'undefined' || typeof fetch !== 'function';
export function recordedIndexSettled(): boolean {
  return indexSettled;
}

/**
 * Is this line surely silent on this phone: no recording and no Dutch phone voice? Not while the
 * recorded-voice index has not come (yet, or offline without it): then it may well have a clip, and
 * a listening step is better kept than skipped for a whole lesson.
 */
export function surelySilent(text: string): boolean {
  return indexArrived && !canSay(text);
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

const clipPath = (rec: Recorded, id: string) => `${rec.base}/${rec.voice.key}/${id}.mp3`;

/**
 * The recorded file speak() would play for this Dutch text with this voice (undefined: the
 * learner's choice), relative to the app; undefined when the phone's own voice would say it.
 * Used to save a unit's sound for offline use.
 */
export function clipUrl(text: string, voice?: VoiceRef): string | undefined {
  const chosen = recordedFor(voice === undefined ? preferredVoice : voice);
  const found = chosen && clipFor(chosen, text);
  return found ? clipPath(found.rec, found.id) : undefined;
}

const clipIn = (r: Recorded, text: string) => r.clips[text.trim()] ?? r.plain[plainText(text)];

/**
 * The recording to play for this text: the chosen voice if it has the line, else another
 * recorded voice of the same gender (ElevenLabs before Piper), so a man never suddenly
 * sounds like a woman or the other way round. New lines may exist in only some voices.
 */
function clipFor(rec: Recorded, text: string): { rec: Recorded; id: string } | undefined {
  const own = clipIn(rec, text);
  if (own) return { rec, id: own };
  const gender = rec.voice.gender;
  for (const other of recorded) {
    if (other === rec || (gender && other.voice.gender !== gender)) continue;
    const id = clipIn(other, text);
    if (id) return { rec: other, id };
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

/** The lines that started and did not end yet: a stop ends them (a talking mouth, a speaker button). */
const sounding = new Map<string, boolean>();
function emitSpeech(text: string, speaking: boolean, slow: boolean): void {
  if (speaking) sounding.set(text, slow);
  else sounding.delete(text);
  speechListeners.forEach((fn) => fn(text, speaking, slow));
}

/** Learners need calm Dutch: recordings play a bit slower than recorded (same pitch),
 *  and the turtle button slower still. */
const RECORDED_RATE = { normal: 0.75, slow: 0.5 };
/** Some recorded voices speak slower by nature; this evens them out (Noa reads noticeably
 *  slower than the others, so she plays a bit faster). */
const VOICE_PACE: Record<string, number> = { noa: 1.2 };
/** The phone's own voice already speaks a little faster than the recordings. */
const DEVICE_RATE = { normal: 0.75, slow: 0.45 };
/** The work-rules track is for people who speak Dutch already: the phone's voice at an easy
 *  but normal pace there. The turtle tap stays slow in both tracks. */
const DEVICE_RATE_RULES = 0.9;
let deviceNormal = DEVICE_RATE.normal;

/** The phone voice's pace for a track ('regels': about 0.9; 'taal': 0.75, as before). */
export function setDeviceRate(track: 'taal' | 'regels'): void {
  deviceNormal = track === 'regels' ? DEVICE_RATE_RULES : DEVICE_RATE.normal;
}

/** The phone voice's rate now (normal or slow). */
export function deviceRate(slow = false): number {
  return slow ? DEVICE_RATE.slow : deviceNormal;
}

let playing: HTMLAudioElement | null = null;

/** Stop whatever is being said (before the microphone records: the clip must not be recorded too). */
export function stopSpeech(): void {
  stopAll();
}

/** Stops `text` if it is still being said (a long text's speaker that leaves the screen). */
export function stopSaying(text: string): void {
  if (sounding.has(text)) stopAll();
}

function stopAll(): void {
  playing?.pause();
  playing = null;
  // The cut-off line's own end events no longer count (cancel fires them late, or not at all).
  speechTurn++;
  if (speechAvailable()) window.speechSynthesis.cancel();
  for (const [text, slow] of [...sounding]) emitSpeech(text, false, slow);
}

/**
 * Speak Dutch (or English) text aloud. `voice` overrides the learner's choice:
 * "piper:<key>" for a recorded voice, "device" for the phone's voice, or a device voiceURI.
 * Recorded clips are used when one exists for this exact text; otherwise the phone speaks.
 */
export function speak(text: string, slow = false, lang: 'nl' | 'en' = 'nl', voice?: VoiceRef): void {
  const ref = voice === undefined ? preferredVoice : voice;
  const chosen = lang === 'nl' ? recordedFor(ref) : undefined;
  const found = chosen && clipFor(chosen, text);
  if (found) {
    const { rec, id } = found;
    playClip(clipPath(rec, id), text, slow, lang, VOICE_PACE[rec.voice.key] ?? 1);
    return;
  }
  speakDevice(text, slow, lang, deviceUriFor(ref));
}

/** The phone voice a reference asks for: a device voiceURI, or for "device" (female characters)
 *  still a phone voice the learner picked. */
function deviceUriFor(ref: VoiceRef): string | undefined {
  const isDeviceUri = (r: VoiceRef) => !!r && r !== DEVICE && !r.startsWith('piper:');
  return isDeviceUri(ref) ? ref! : ref === DEVICE && isDeviceUri(preferredVoice) ? preferredVoice! : undefined;
}

/** The phone has a Dutch voice (the list loads late in some browsers: ask again on voiceschanged). */
export function hasDutchVoice(): boolean {
  return dutchVoices().length > 0;
}

/** A recording exists for this whole Dutch text (in this voice, or one of the same gender). */
export function hasClip(text: string, voice?: VoiceRef): boolean {
  return clipUrl(text, voice) !== undefined;
}

/**
 * Can this Dutch text be said: a recording of the whole text, or a Dutch phone voice. Without
 * either a speaker is hidden (never Dutch read by an English voice).
 */
export function canSay(text: string, voice?: VoiceRef): boolean {
  return hasClip(text, voice) || (speechAvailable() && hasDutchVoice());
}

export interface LongSpeech {
  /** Who says it (a character's voice); default: the learner's chosen voice. */
  voice?: VoiceRef;
  slow?: boolean;
}

/**
 * Read a longer Dutch text aloud (a story, a rule, a why). One recorded clip when the WHOLE text
 * has one; otherwise the phone's Dutch voice, one utterance per sentence (Chrome on Android cuts
 * long utterances off), queued. Never a clip for one sentence and the phone for the next: one
 * block, one voice. Each sentence reports itself to onSpeech (and the whole text at its start and
 * end), so a character talks along. Anything that speaks next (another tap) cancels the rest.
 * Returns false when nothing can say it (no clip, no Dutch phone voice): then nothing plays.
 */
export function speakLong(text: string, opts: LongSpeech = {}): boolean {
  const ref = opts.voice === undefined ? preferredVoice : opts.voice;
  const slow = Boolean(opts.slow);
  const chosen = recordedFor(ref);
  const found = chosen && clipFor(chosen, text);
  if (found) {
    const { rec, id } = found;
    // A broken file: the phone reads the whole block instead (still one voice for the block).
    playClip(clipPath(rec, id), text, slow, 'nl', VOICE_PACE[rec.voice.key] ?? 1, () => speakSentences(text, slow, deviceUriFor(ref)));
    return true;
  }
  return speakSentences(text, slow, deviceUriFor(ref));
}

/** The phone's Dutch voice, one queued utterance per sentence (see speakLong). */
function speakSentences(text: string, slow: boolean, voiceURI: string | undefined): boolean {
  stopAll();
  if (!speechAvailable() || !hasDutchVoice()) return false;
  const synth = window.speechSynthesis;
  const parts = sentences(text).map((p) => p.trim()).filter(Boolean);
  if (!parts.length) return false;
  const voice = dutchVoice(voiceURI);
  const turn = ++speechTurn;
  const mine = () => turn === speechTurn;
  parts.forEach((part, i) => {
    const u = new SpeechSynthesisUtterance(sayAs(part));
    u.lang = 'nl-NL';
    if (voice) u.voice = voice;
    u.rate = deviceRate(slow);
    // The first sentence is reported right away (some phones never fire onstart).
    if (i > 0) u.onstart = () => { if (mine()) emitSpeech(part, true, slow); };
    u.onend = u.onerror = () => {
      if (!mine()) return;
      emitSpeech(part, false, slow);
      if (i === parts.length - 1) emitSpeech(text, false, slow);
    };
    synth.speak(u);
  });
  emitSpeech(text, true, slow);
  emitSpeech(parts[0], true, slow);
  return true;
}

/** Plays one recorded clip; a missing or broken file lets the phone say the text instead. */
function playClip(url: string, text: string, slow: boolean, lang: 'nl' | 'en', pace = 1, onFail?: () => void): void {
  stopAll();
  const audio = new Audio(url);
  const rate = (slow ? RECORDED_RATE.slow : RECORDED_RATE.normal) * pace;
  // Both: some WebKit versions reset playbackRate to the default while the clip loads.
  audio.defaultPlaybackRate = audio.playbackRate = rate;
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
    if (turn !== speechTurn) return;
    if (onFail) onFail();
    else speakDevice(text, slow, lang, undefined);
  };
  audio.play().catch(end);
  emitSpeech(text, true, slow);
}

/** The default recorded voice and its "hallo" (committed in public/audio-el, like every clip). */
const FIRST_WORD = { text: 'hallo', url: './audio-el/thijmen/w.hallo.mp3' };

/**
 * Bram's own "Hallo, ik ben Bram." (clip x.bram), when Thijmen has recorded it: the file, relative
 * to the app. Undefined until the recording exists (or before the voice index has loaded); only
 * Bram's own voice says it, never another recorded voice.
 */
export function bramHelloUrl(): string | undefined {
  const bram = recorded.find((r) => r.voice.key === BRAM_VOICE);
  const id = bram && clipIn(bram, BRAM_HELLO);
  return bram && id ? clipPath(bram, id) : undefined;
}

/**
 * The first Dutch words of the first run, on its first tap (Yes, or a language from the list):
 * Bram introduces himself, "Hallo, ik ben Bram.", in his own recorded voice (Thijmen) once that
 * line is recorded; until then "hallo" in the chosen or default recorded voice. On a slow first
 * visit the voice index may not be here yet: then the default voice's own "hallo" file plays (the
 * phone's voice if that fails too). Always started right here, inside the tap (the first user
 * gesture, which lets the phone play sound). Silent in "Without sound".
 */
export function sayFirstWord(): void {
  if (quietAudio) return;
  const intro = bramHelloUrl();
  if (intro) playClip(intro, BRAM_HELLO, false, 'nl', VOICE_PACE[BRAM_VOICE] ?? 1);
  else if (recorded.length) speak(FIRST_WORD.text);
  else playClip(FIRST_WORD.url, FIRST_WORD.text, false, 'nl');
}

function speakDevice(text: string, slow: boolean, lang: 'nl' | 'en', voiceURI: string | undefined): void {
  if (!speechAvailable()) return;
  const synth = window.speechSynthesis;
  stopAll();
  const u = new SpeechSynthesisUtterance(lang === 'en' ? text : sayAs(text));
  u.lang = lang === 'en' ? 'en-GB' : 'nl-NL';
  const voice = lang === 'en' ? undefined : dutchVoice(voiceURI);
  if (voice) u.voice = voice;
  u.rate = deviceRate(slow);
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

/** A short note with a soft attack and decay (no click at either end). */
function note(c: AudioContext, freq: number, at: number, dur: number, peak: number, type: OscillatorType = 'sine'): void {
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(peak, at + Math.min(0.012, dur / 3));
  gain.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(at);
  osc.stop(at + dur + 0.02);
}

function audioCtx(): AudioContext | undefined {
  try {
    ctx ??= new AudioContext();
    return ctx;
  } catch {
    return undefined; // No Web Audio: silently skip the effect.
  }
}

/**
 * Effect sounds; all silent in "Without sound".
 *  - tap: a tiny 1800 Hz click when an option is picked.
 *  - correct: two soft notes, 660 then 880 Hz, 80 ms apart, always the same (a run is shown by
 *    the run label, not by a rising pitch).
 *  - wrong: a low sine sliding 196 → 165 Hz through a lowpass, so it sounds like "hmm", not a buzzer.
 */
export const sounds = {
  tap: () => {
    if (quietAudio) return;
    const c = audioCtx();
    if (c) note(c, 1800, c.currentTime, 0.03, 0.04, 'triangle');
  },
  correct: () => {
    if (quietAudio) return;
    const c = audioCtx();
    if (!c) return;
    const t = c.currentTime;
    note(c, 660, t, 0.14, 0.09);
    note(c, 880, t + 0.08, 0.18, 0.08);
  },
  wrong: () => {
    if (quietAudio) return;
    const c = audioCtx();
    if (!c) return;
    try {
      const t = c.currentTime;
      const osc = c.createOscillator();
      const filter = c.createBiquadFilter();
      const gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(196, t);
      osc.frequency.exponentialRampToValueAtTime(165, t + 0.26);
      filter.type = 'lowpass';
      filter.frequency.value = 900;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.08, t + 0.03);
      gain.gain.setValueAtTime(0.08, t + 0.16);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
      osc.connect(filter).connect(gain).connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.28);
    } catch {
      // Ignore: the visual feedback says it all.
    }
  },
  /** Lesson done: a short, soft two-note confirmation (G4 then C5), no fanfare. */
  done: () => {
    if (quietAudio) return;
    const c = audioCtx();
    if (!c) return;
    const t = c.currentTime;
    note(c, 392, t, 0.18, 0.09);
    note(c, 523, t + 0.12, 0.26, 0.08);
  },
};

/**
 * The device's own voice for a help language (Tigrinya, Arabic, ...), or null when the phone has
 * none: then no "read aloud" button is shown. Dari may use a Persian voice. No recordings needed.
 */
export function helpVoice(code: string): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const want = code === 'prs' ? ['prs', 'fa'] : [code];
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => want.some((w) => v.lang.toLowerCase().replace('_', '-').split('-')[0] === w)) ?? null;
}

/** Reads a help-language text aloud with the device's voice for it (a tap; plays even when quiet). */
export function speakHelp(text: string, code: string): void {
  const voice = helpVoice(code);
  if (!voice) return;
  stopAll();
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = 0.95;
  window.speechSynthesis.speak(u);
}
