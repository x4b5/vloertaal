import { nextCandidate, restartApp, stopDemo } from '../lib/demo';

/**
 * The coaches' demonstration (src/lib/demo.ts): a narrow bar above every screen, in Dutch (for the
 * coach, not the candidate), so it is always clear that this is the demo, with its two ways on:
 *  - "Volgende kandidaat": what this candidate did goes, back to the language choice;
 *  - "Stoppen": the coach's own progress and settings come back.
 * Neither asks first: nothing of value is lost (the candidate's try was never meant to be kept).
 * In the page's flow, not fixed: it never covers a screen's own head or the lesson's bar.
 */
export function DemoBar() {
  return (
    <div className="demo-bar" lang="nl" dir="ltr" role="region" aria-label="Demonstratie">
      <span className="demo-bar-label">Demo</span>
      <button type="button" className="demo-bar-btn demo-bar-next" onClick={() => { nextCandidate(); restartApp(); }}>
        Volgende kandidaat
      </button>
      <button type="button" className="demo-bar-btn" onClick={() => { stopDemo(); restartApp(); }}>
        Stoppen
      </button>
    </div>
  );
}
