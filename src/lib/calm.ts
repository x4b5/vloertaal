/**
 * "Rustig scherm" (Settings › Lessen; "Vloertaal rustiger", fase 3; docs/rustiger.md): nothing
 * moves, no celebration of the day streak after a lesson, and no day count or words on the home.
 * Three choices: 'auto' (the default: on when the phone asks for less motion), 'on', 'off'.
 * Set as data-calm on <html>, so styles.css stops all motion at once and the screens can ask
 * stillMotion() (motion that is drawn by script).
 */
export type CalmChoice = 'auto' | 'on' | 'off';
export const CALM_CHOICES: CalmChoice[] = ['auto', 'on', 'off'];

/** The phone asks for less motion ("Minder beweging", "Remove animations"). */
export function phoneWantsStill(): boolean {
  return typeof window !== 'undefined' && Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
}

/** Whether the calm screen is on for this choice (auto: as the phone). */
export function calmOn(choice: CalmChoice | undefined): boolean {
  if (choice === 'on') return true;
  if (choice === 'off') return false;
  return phoneWantsStill();
}

export function applyCalm(choice: CalmChoice | undefined): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (calmOn(choice)) root.dataset.calm = '1';
  else delete root.dataset.calm;
  // The learner's own "Rustig scherm: aan" (not the phone's setting): see learnerWantsStill.
  if (choice === 'on') root.dataset.calmChosen = '1';
  else delete root.dataset.calmChosen;
}

/**
 * The learner chose "Rustig scherm: aan" in the app. Motion that IS the lesson and that the
 * learner starts with a tap (the mouth of "Hoe zeg je het?") only stops for this, not for the
 * phone's "less motion" (the owner, 5 November 2026: on a laptop with Windows' animation effects
 * off, the mouth did not move at all). WCAG 2.3.3: essential, user-started motion.
 */
export function learnerWantsStill(): boolean {
  return typeof document !== 'undefined' && document.documentElement.dataset.calmChosen === '1';
}

/** No motion now: the phone asks for less motion, or "Rustig scherm" is on. */
export function stillMotion(): boolean {
  if (phoneWantsStill()) return true;
  return typeof document !== 'undefined' && document.documentElement.dataset.calm === '1';
}
