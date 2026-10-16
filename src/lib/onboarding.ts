import { courseUnits } from '../content/courses';
import { units } from '../content/curriculum';
import { hasGender } from '../i18n';
import type { Access } from './access';
import { shouldAskGender } from './askGender';
import type { Progress } from './progress';
import type { Track } from './track';

/**
 * Lesson 1.1. It was the one trial lesson before a code ("Try one lesson first", until 16 October
 * 2026; since then "No code?" opens the sneak preview). The first lesson's result still shows
 * where the emergency phrases are when only this lesson was done before (App).
 */
export const TRY_LESSON_ID = units[0].lessons[0].id;

/** The trial lesson of the work-rules track while its course is not loaded: the first lesson of
 *  its first unit ("Werk zoeken" 1, src/content/regels/index.ts). */
export const RULES_TRY_LESSON_ID = 'r.l.zoeken.1';

/** The trial lesson of a track: lesson 1.1 of its course (it is in the preview unit, see access.ts). */
export function tryLessonId(track: Track = 'taal'): string {
  if (track === 'taal') return TRY_LESSON_ID;
  return courseUnits('regels')[0]?.lessons[0]?.id ?? RULES_TRY_LESSON_ID;
}

/** Is this lesson 1.1 of the track's course (the old trial lesson)? */
export const trialLessonAllowed = (lessonId: string, track: Track = 'taal') => lessonId === tryLessonId(track);

/**
 * The first run, one question per page, in this order: the help language, "Woman or man?" (only
 * for a help language with gender, so the password page already talks to you in the right
 * form), the password, then the sector. 'done' is the home.
 */
export type OnbStep = 'language' | 'gender' | 'gate' | 'sector' | 'done';
export const ONB_ORDER: readonly OnbStep[] = ['language', 'gender', 'gate', 'sector', 'done'];
export const stepIndex = (s: OnbStep) => ONB_ORDER.indexOf(s);

type OnbProgress = Pick<Progress, 'onboarded' | 'helpLang' | 'gender' | 'genderAsked' | 'sector'>;

/**
 * Which first-run page shows. `gateAgain`: back from the sector to the password page, with the
 * accepted code kept (the stored access is not cleared).
 */
export function onboardingStep(p: OnbProgress, access: Access | null, gateAgain = false): OnbStep {
  if (!p.onboarded) return 'language';
  // In the first run (no sector yet) the gender question comes before the password.
  if (p.sector === undefined && shouldAskGender(p)) return 'gender';
  if (!access || gateAgain) return 'gate';
  if (p.sector === undefined) return 'sector';
  return 'done';
}

/** The page the back arrow (and the phone's Back button) of a first-run page goes to. */
export function previousStep(step: OnbStep, p: OnbProgress): OnbStep | null {
  switch (step) {
    case 'gender':
      return 'language';
    case 'gate':
      return p.sector === undefined && hasGender(p.helpLang) ? 'gender' : 'language';
    case 'sector':
      return 'gate';
    default:
      return null;
  }
}

