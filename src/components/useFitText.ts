import { useLayoutEffect, type RefObject } from 'react';

/**
 * The sizes a tip's explanation may grow to (rem, largest first), on its own page ("Zo werkt het
 * hier"). Only sizes above the CSS size are tried (1.0625rem on a short phone screen, 1.25rem from
 * 640 px high, src/styles.css); when none fits, the CSS size stays. The room under a short tip was
 * mostly empty, so the text takes it (the owner's request, 4 November 2026). On 8 November 2026
 * larger again, and also on a phone in Safari with its bars (under 640 px high), where the text
 * stayed small with half the page empty. Up to 2rem was too large (the owner, 8 November 2026):
 * at most 1.4rem.
 */
export const FIT_STEPS = [1.4, 1.35, 1.3, 1.25, 1.2, 1.15, 1.1] as const;

/** Space kept between the text's end and the Continue bar. */
const FIT_GAP = 12;

/**
 * Sets `--tip-fit` (and `data-fit`, which turns it on in the CSS) on the element to the largest size from FIT_STEPS at which the whole element
 * still ends above the lesson's Continue bar (`.player-foot`), or removes it when none fits. Runs
 * again on a resize, a new text size (Settings > Tekst sets the root font size) and when the
 * fonts have loaded. In rem, so the steps grow with a larger text size too.
 */
export function useFitText(ref: RefObject<HTMLElement | null>, on: boolean, key: unknown): void {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !on) return;
    const off = () => { el.style.removeProperty('--tip-fit'); delete el.dataset.fit; };
    const fit = () => {
      const foot = document.querySelector<HTMLElement>('.player-foot');
      const limit = (foot ? foot.getBoundingClientRect().top : window.innerHeight) - FIT_GAP;
      // The CSS size of the text: never fit below it.
      off();
      const body = el.querySelector<HTMLElement>('.tip-body');
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const base = body ? parseFloat(getComputedStyle(body).fontSize) / rem : 0;
      for (const step of FIT_STEPS) {
        if (step <= base) break;
        el.style.setProperty('--tip-fit', `${step}rem`);
        el.dataset.fit = '';
        if (el.getBoundingClientRect().bottom <= limit) return;
      }
      off();
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
