import { hasGender } from '../i18n';
import type { Progress } from './progress';

/**
 * The one-time "Woman or man?" page (App.tsx): in the first run right after the password, and on
 * opening the home for learners who finished the first run before the question existed (or
 * switched to a help language with gender later). Only once they are onboarded, the help language
 * has gender (ar, ti, uk, pl, ro, bg), nothing is chosen yet, and it was never answered.
 */
export function shouldAskGender(p: Pick<Progress, 'onboarded' | 'helpLang' | 'gender' | 'genderAsked'>): boolean {
  return p.onboarded && hasGender(p.helpLang) && p.gender === undefined && !p.genderAsked;
}
