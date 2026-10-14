import type { Lesson, Sentence, Word } from '../content/types';
import { tokenize } from './answers';
import { createRng } from './random';

/**
 * Speaking practice: "record and compare". The learner hears the Dutch, says it, hears their own
 * voice next to the speaker's and rates it themselves (no speech recognition, never graded).
 *
 * Privacy: recordings live in memory only (a Blob and an object URL inside the exercise), are
 * never uploaded or stored, and are thrown away when the exercise closes. The only thing kept on
 * the device is the on/off switch below and whether the microphone was refused this visit.
 */

const KEY = 'vloertaal:speaking';

/** The Settings switch "Speaking practice": on unless the learner turned it off (this device). */
export function speakingOn(): boolean {
  try {
    return localStorage.getItem(KEY) !== '0';
  } catch {
    return true;
  }
}

export function setSpeakingOn(on: boolean): void {
  try {
    if (on) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, '0');
  } catch {
    // Private mode: the choice holds for this visit only.
  }
}

/** Can this browser record at all? (No MediaRecorder or getUserMedia: the exercise is skipped.) */
export function canRecord(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.MediaRecorder === 'function' &&
    typeof navigator !== 'undefined' &&
    typeof navigator.mediaDevices?.getUserMedia === 'function'
  );
}

/**
 * The microphone was refused (or failed) during this lesson. It is reset when a lesson starts
 * (resetMicForLesson), so one failure never takes speaking away for the whole visit; inside the
 * lesson the learner gets one retry (MIC_RETRIES) before the "say it out loud" step stays.
 */
let micRefused = false;
export function micBlocked(): boolean {
  return micRefused;
}
export function setMicBlocked(blocked: boolean): void {
  micRefused = blocked;
}
/** A new lesson: try the microphone again. */
export function resetMicForLesson(): void {
  micRefused = false;
}
/** Retries offered after the microphone failed in a speaking exercise. */
export const MIC_RETRIES = 1;

/**
 * How a speaking exercise runs: 'record' (record and compare) when the browser can record and the
 * microphone has not failed in this lesson; else 'aloud': hear it, say it out loud, then go on
 * (self-paced, nothing recorded, never graded). Speaking is only left out without sound
 * (speakSkipped); a missing or refused microphone never removes it.
 */
export function speakMode(): 'record' | 'aloud' {
  return canRecord() && !micBlocked() ? 'record' : 'aloud';
}

/** A speaking exercise is passed over only when sound is off ("Without sound"). */
export function speakSkipped(soundOff: boolean): boolean {
  return soundOff;
}

/** A recording stops by itself after this long. */
export const MAX_RECORD_MS = 6000;
/** ... or after this much quiet once the learner has spoken. */
export const SILENCE_MS = 1200;

/** What to say: a word or a short sentence of the lesson. */
export type SpeakItem = Word | Sentence;

/** A sentence short enough to say in one go: at most 5 words and 32 characters. */
export function shortSentence(s: Sentence): boolean {
  return tokenize(s.nl).length <= 5 && s.nl.length <= 32;
}

/** The ids an exercise is about (its word, sentence, reply or match words). */
function idsOf(ex: { kind: string } & Record<string, unknown>): string[] {
  const ids: string[] = [];
  const add = (x: unknown) => { if (x && typeof x === 'object' && 'id' in x) ids.push(String((x as { id: string }).id)); };
  add(ex.word);
  add(ex.sentence);
  if (Array.isArray(ex.words)) ex.words.forEach(add);
  return ids;
}

/**
 * Where the speaking exercise goes and what it asks. Near the end: before the last two exercises
 * (the closing listening and typing), never first. It asks a short sentence the lesson already
 * built before that point, else a word met before that point; never the lesson's first word and
 * never the item of the exercise right before or after it. Null when nothing fits.
 */
export function speakPlacement<E extends { kind: string }>(
  list: readonly E[],
  lesson: Lesson,
  seed = 0,
): { at: number; item: SpeakItem } | null {
  if (list.length < 3) return null;
  const at = Math.max(1, list.length - 2);
  const before = list.slice(0, at);
  const seen = new Set(before.flatMap((e) => idsOf(e as E & Record<string, unknown>)));
  const near = new Set([...idsOf(list[at - 1] as E & Record<string, unknown>), ...(list[at] ? idsOf(list[at] as E & Record<string, unknown>) : [])]);
  const first = lesson.words[0]?.id;
  const ok = (x: SpeakItem) => x.id !== first && seen.has(x.id) && !near.has(x.id);
  const sentences = lesson.sentences.filter((s) => shortSentence(s) && ok(s));
  const words = lesson.words.filter(ok);
  const pool: SpeakItem[] = sentences.length ? sentences : words;
  if (!pool.length) return null;
  const rng = createRng((seed ^ 0x5bea4) >>> 0);
  return { at, item: pool[Math.floor(rng() * pool.length)] };
}

/** The list with one speaking exercise put in (see speakPlacement); unchanged when nothing fits. */
export function withSpeaking<E extends { kind: string }>(
  list: E[],
  lesson: Lesson,
  make: (item: SpeakItem) => E,
  seed = 0,
): E[] {
  const place = speakPlacement(list, lesson, seed);
  if (!place) return list;
  return [...list.slice(0, place.at), make(place.item), ...list.slice(place.at)];
}

/** A sentence (it has no emoji) or a word. */
export function isWord(item: SpeakItem): item is Word {
  return 'emoji' in item;
}

/** A recording format this browser can make (Safari: mp4; others: webm/ogg). */
export function recordMime(): string | undefined {
  if (typeof MediaRecorder === 'undefined' || typeof MediaRecorder.isTypeSupported !== 'function') return undefined;
  return ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'].find((t) => MediaRecorder.isTypeSupported(t));
}
