import { hasGender } from '../i18n';
import type { Progress } from './progress';

/**
 * The home's one-time "Woman or man?" card, for learners who finished the first run before the
 * gender question existed (or switched to a help language with gender later): only once they are
 * onboarded, the help language has gender (ar, ti, uk, pl, ro, bg), nothing is chosen yet, and the
 * card was never closed. A learner who answered during the first run never sees it.
 */
export function shouldAskGender(p: Pick<Progress, 'onboarded' | 'helpLang' | 'gender' | 'genderAsked'>): boolean {
  return p.onboarded && hasGender(p.helpLang) && p.gender === undefined && !p.genderAsked;
}
