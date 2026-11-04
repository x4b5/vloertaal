import { useLayoutEffect, type RefObject } from 'react';

/**
 * The sizes a tip's explanation may grow to (rem, largest first), on its own page ("Zo werkt het
 * hier"). Below the last one the CSS size stays (1.25rem, src/styles.css). The room under a short
 * tip was mostly empty, so the text takes it (the owner's request, 4 November 2026); a long tip
 * keeps the size it had and scrolls, as before.
 */
export const FIT_STEPS = [1.7, 1.6, 1.5, 1.4, 1.3] as const;

/** Space kept between the text's end and the Continue bar. */
const FIT_GAP = 12;

/**
 * Sets `--tip-fit` on the element to the largest size from FIT_STEPS at which the whole element
 * still ends above the lesson's Continue bar (`.player-foot`), or removes it when none fits. Runs
 * again on a resize, a new text size (Settings > Tekst sets the root font size) and when the
 * fonts have loaded. In rem, so the steps grow with a larger text size too.
 */
export function useFitText(ref: RefObject<HTMLElement | null>, on: boolean, key: unknown): void {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !on) return;
    const fit = () => {
      const foot = document.querySelector<HTMLElement>('.player-foot');
      const limit = (foot ? foot.getBoundingClientRect().top : window.innerHeight) - FIT_GAP;
      for (const step of FIT_STEPS) {
        el.style.setProperty('--tip-fit', `${step}rem`);
        if (el.getBoundingClientRect().bottom <= limit) return;
      }
      el.style.removeProperty('--tip-fit');
    };
    fit();
    let live = true;
    document.fonts?.ready.then(() => { if (live) fit(); });
    window.addEventListener('resize', fit);
    const root = new MutationObserver(fit);
    root.observe(document.documentElement, { attributes: true, attributeFilter: ['data-text'] });
    // Continue comes into the bar a moment after the tip is shown (the tip counts as answered),
    // which makes the bar taller: fit again whenever the bar changes size.
    const foot = document.querySelector<HTMLElement>('.player-foot');
    const bar = typeof ResizeObserver === 'function' && foot ? new ResizeObserver(() => fit()) : null;
    if (bar && foot) bar.observe(foot);
    return () => {
      live = false;
      window.removeEventListener('resize', fit);
      root.disconnect();
      bar?.disconnect();
    };
  }, [ref, on, key]);
}
