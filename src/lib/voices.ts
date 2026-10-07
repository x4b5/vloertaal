/**
 * Who speaks with which voice. Recorded voices (Piper, generated in CI) are named
 * "piper:<key>"; female characters use the phone's own voice ("device").
 */
export type VoiceRef = string | null;

/** Played when a learner tries a voice in Settings; also recorded in CI. */
export const VOICE_SAMPLE = 'Goedemorgen! Draag altijd je helm.';

export const DEVICE = 'device';

/** Character → voice. Keys match CharacterId in src/components/Characters.tsx. */
const CAST_VOICES: Record<string, VoiceRef> = {
  bram: 'piper:pim',
  henk: 'piper:ronnie',
  amina: DEVICE,
  jada: DEVICE,
};

export function voiceFor(who: string): VoiceRef {
  return CAST_VOICES[who] ?? null;
}
