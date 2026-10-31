import { courseUnits } from '../content/courses';
import { units } from '../content/curriculum';
import { hasGender } from '../i18n';
import { type Access, OPEN_TO_ALL } from './access';
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
 * form), the password, the sector, then "In welk land werk je?" (both tracks). 'done' is the home.
 */
export type OnbStep = 'language' | 'gender' | 'gate' | 'sector' | 'country' | 'done';
export const ONB_ORDER: readonly OnbStep[] = ['language', 'gender', 'gate', 'sector', 'country', 'done'];
export const stepIndex = (s: OnbStep) => ONB_ORDER.indexOf(s);

type OnbProgress = Pick<Progress, 'onboarded' | 'helpLang' | 'gender' | 'genderAsked' | 'sector'> & Partial<Pick<Progress, 'country' | 'completed' | 'xp'>>;

/** Has the learner begun (a lesson done, or points)? Then the first run is over. */
const started = (p: Partial<Pick<Progress, 'completed' | 'xp'>>) => Object.keys(p.completed ?? {}).length > 0 || (p.xp ?? 0) > 0;

/**
 * "In welk land werk je?" once, on a page of its own, for a learner who began before the question
 * was in the first run (App.tsx, on opening the home, as the gender question): onboarded, a
 * sector chosen, lessons begun, and no country chosen. Until they choose it is 'nl' (Progress.country).
 */
export function shouldAskCountry(p: OnbProgress): boolean {
  return p.onboarded && p.sector !== undefined && p.country === undefined && started(p);
}

/**
 * Which first-run page shows. `gateAgain`: back from the sector to the password page, with the
 * accepted code kept (the stored access is not cleared).
 */
export function onboardingStep(p: OnbProgress, access: Access | null, gateAgain = false): OnbStep {
  if (!p.onboarded) return 'language';
  // In the first run (no sector yet) the gender question comes before the password.
  if (p.sector === undefined && shouldAskGender(p)) return 'gender';
  // Open to all (src/lib/access.ts): no password page, also not on the way back from the sector.
  if (!access || (gateAgain && !OPEN_TO_ALL)) return 'gate';
  if (p.sector === undefined) return 'sector';
  // The first run: the country right after the sector. A learner who began before this question
  // gets it on opening the home instead (shouldAskCountry), without a way back.
  if (p.country === undefined && !started(p)) return 'country';
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
      // Open to all: no password page, so back goes to the page before it.
      return OPEN_TO_ALL ? previousStep('gate', p) : 'gate';
    case 'country':
      return 'sector';
    default:
      return null;
  }
}

