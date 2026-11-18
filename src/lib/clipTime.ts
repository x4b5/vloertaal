/**
 * How long the spoken part of a recording lasts. Shared by everything that moves along with a
 * recording: the mouth of "Hoe zeg je het?" (src/components/Mouth.tsx) and the word by word light
 * (src/lib/followWordLight.ts).
 */

/** The silence an ElevenLabs recording ends with (measured: 0.3–0.35 s at the recorded rate), not part of the word. */
export const CLIP_TAIL_S = 0.32;

/** The spoken part of a recording, in ms as played: the clip without its silent end, at its rate. */
export const spokenMs = (clipSeconds: number, rate: number): number => Math.max(250, ((clipSeconds - CLIP_TAIL_S) / (rate || 1)) * 1000);
