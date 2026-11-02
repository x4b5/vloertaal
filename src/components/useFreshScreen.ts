import { useEffect, useRef } from 'react';
import { stillMotion } from '../lib/calm';

/**
 * Cards that just came on screen, in the place of the cards of the step before: the second tap of
 * a double tap would land on them and answer a question the learner never saw. `fresh()` is true
 * in the first moment after they came (on mount, and when `key` changes).
 */
export function useFreshCards(key: string, ms = 300): () => boolean {
  const shown = useRef(0);
  useEffect(() => { shown.current = performance.now(); }, [key]);
  return () => performance.now() - shown.current < ms;
}

/** False for the first 700 ms (400 ms with reduced motion): a tap meant for the screen before
 *  must not skip this one (a Continue at the foot: the milestone screens, the first-run colour). */
export function useTapGuard() {
  const ready = useRef(false);
  useEffect(() => {
    const still = stillMotion();
    const t = window.setTimeout(() => { ready.current = true; }, still ? 400 : 700);
    return () => window.clearTimeout(t);
  }, []);
  return ready;
}
