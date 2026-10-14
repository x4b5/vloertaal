/**
 * Who speaks with which voice. Recorded voices (ElevenLabs, committed in public/audio-el)
 * are named "piper:<key>" (a historical prefix); "device" is the phone's own voice.
 */
import type { Gender } from '../i18n/types';
import { hasRecordedVoice } from './audio';

export type VoiceRef = string | null;

/** Played when a learner tries a voice in Settings; also recorded in CI. */
export const VOICE_SAMPLE = 'Goedemorgen! Draag altijd je helm.';

export const DEVICE = 'device';

/** Character → voices in order of preference; the first one available is used.
 *  Keys match CharacterId in src/components/Characters.tsx. */
const CAST_VOICES: Record<string, VoiceRef[]> = {
  bram: ['piper:thijmen', DEVICE],
  henk: ['piper:daniel', DEVICE],
  amina: ['piper:ariel', DEVICE],
  jada: ['piper:noa', DEVICE],
};

export function voiceFor(who: string): VoiceRef {
  const options = CAST_VOICES[who];
  if (!options) return null;
  return options.find((r) => !r?.startsWith('piper:') || hasRecordedVoice(r.slice(6))) ?? DEVICE;
}

/** The voices the characters speak with now (lessons use all of them: chats, tiles, answers). */
export function castVoices(): VoiceRef[] {
  return Object.keys(CAST_VOICES).map(voiceFor);
}

/**
 * Whose recorded voice "you" borrow in the chats: Amina's (a woman's voice) by default, Bram's
 * (a man's voice) when the learner said "man" on the gender question. "Rather not say" or no
 * answer keeps Amina's voice, as before. Only the voice: on screen "you" are a neutral person
 * icon for everyone (MeAvatar in components/Characters.tsx), never a cast member's face, so no
 * learner is shown in a hijab or as the narrator. The colleagues are picked from the rest of the
 * cast, so you never talk to someone with your own voice.
 */
export type LearnerId = 'amina' | 'bram';
export function learnerCharacter(gender?: Gender | null): LearnerId {
  return gender === 'm' ? 'bram' : 'amina';
}

/** The voice "you" speak with. A line one recorded voice lacks is played by another recorded
 *  voice of the same gender (see clipFor in audio.ts), so a man never sounds like a woman. */
export function learnerVoice(gender?: Gender | null): VoiceRef {
  return voiceFor(learnerCharacter(gender));
}
