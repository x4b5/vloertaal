import { useEffect, useRef } from 'react';

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
