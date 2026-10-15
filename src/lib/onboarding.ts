import { courseUnits } from '../content/courses';
import { units } from '../content/curriculum';
import { hasGender } from '../i18n';
import type { Access } from './access';
import { shouldAskGender } from './askGender';
import type { Progress } from './progress';
import { trackOf, type Track } from './track';

/**
 * "Try one lesson first" on the password page (the owner's choice: on). Lesson 1.1 only, then its
 * result, then the password page again with a line that the code unlocks everything. With the
 * flag off the slot on the password page stays empty.
 */
export const TRY_LESSON = true;

/** The one lesson the "try first" button plays: lesson 1.1. */
export const TRY_LESSON_ID = units[0].lessons[0].id;

/** The trial lesson of the work-rules track while its course is not loaded: the first lesson of
 *  its first unit ("Werk zoeken" 1, src/content/regels/index.ts). */
export const RULES_TRY_LESSON_ID = 'r.l.zoeken.1';

/** The trial lesson of a track: lesson 1.1 of its course (it is in the preview unit, see access.ts). */
export function tryLessonId(track: Track = 'taal'): string {
  if (track === 'taal') return TRY_LESSON_ID;
  return courseUnits('regels')[0]?.lessons[0]?.id ?? RULES_TRY_LESSON_ID;
}

/** Only lesson 1.1 (of the track's course) can be played before a password was entered. */
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

/** The trial lesson was done on this phone (lesson 1.1 of the learner's track is in the progress) and there is no code yet. */
export function trialDone(p: Pick<Progress, 'completed'> & Partial<Pick<Progress, 'helpLang'>>, access: Access | null): boolean {
  return !access && Boolean(p.completed[tryLessonId(trackOf(p))]);
}

/**
 * Whether the password page offers "Try one lesson first": the flag, only before a password, and
 * only once (after the trial the page says that the code unlocks everything instead).
 */
export function offersTryLesson(flag: boolean, access: Access | null, done = false): boolean {
  return flag && !access && !done;
}
