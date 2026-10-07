/**
 * Who speaks with which voice. Recorded voices (ElevenLabs, committed in public/audio-el,
 * and Piper, generated in CI) are named "piper:<key>"; "device" is the phone's own voice.
 */
import { hasRecordedVoice } from './audio';

export type VoiceRef = string | null;

/** Played when a learner tries a voice in Settings; also recorded in CI. */
export const VOICE_SAMPLE = 'Goedemorgen! Draag altijd je helm.';

export const DEVICE = 'device';

/** Character → voices in order of preference; the first one available is used.
 *  Keys match CharacterId in src/components/Characters.tsx. */
const CAST_VOICES: Record<string, VoiceRef[]> = {
  bram: ['piper:berend', 'piper:pim'],
  henk: ['piper:berend', 'piper:ronnie'],
  amina: ['piper:ariel', DEVICE],
  jada: ['piper:ariel', DEVICE],
};

export function voiceFor(who: string): VoiceRef {
  const options = CAST_VOICES[who];
  if (!options) return null;
  return options.find((r) => !r?.startsWith('piper:') || hasRecordedVoice(r.slice(6))) ?? DEVICE;
}
