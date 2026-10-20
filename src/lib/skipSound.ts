import { needsAudio, type Exercise } from './exercises';

/**
 * Whether a lesson shows "Ik kan nu niet luisteren" under the exercise: only where the answer can
 * only be heard (listening, writing what you hear), before Check, and while the sound is on. A
 * tap does what "Zonder geluid" in the pause sheet does (src/components/LessonPlayer.tsx,
 * setSound): that switch alone was easy to miss.
 */
export function offerSkipSound(ex: Exercise, state: { checked: boolean; soundOff: boolean }): boolean {
  return needsAudio(ex) && !state.checked && !state.soundOff;
}
