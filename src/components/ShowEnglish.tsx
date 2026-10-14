import { useId, useLayoutEffect, useRef, useState } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { applyEnglish, setWantsEnglish, wantsEnglish } from '../lib/english';
import { Bi } from './Bi';

/**
 * Settings: "Ook Engels tonen" / "Show English too" (only with a help language; off by default).
 * Off: the help language alone, calmer to read. On: the small English line comes back under it,
 * for coaches and learners who know some English. See src/lib/english.ts.
 */
export function ShowEnglishCard({ lang }: { lang?: HelpLanguage }) {
  const [on, setOn] = useState(wantsEnglish);
  const label = useId();
  const knob = useRef<HTMLButtonElement>(null);
  /** Where the switch was on screen before the flip: the English lines that come or go above
   *  it would move it away from the finger, so the page scrolls to keep it in place. */
  const before = useRef<number | null>(null);
  useLayoutEffect(() => {
    const top = before.current;
    before.current = null;
    if (top === null || !knob.current) return;
    const moved = knob.current.getBoundingClientRect().top - top;
    if (Math.abs(moved) > 1) window.scrollBy({ top: moved, behavior: 'instant' as ScrollBehavior });
  }, [on]);
  if (!lang) return null;
  const flip = () => {
    before.current = knob.current?.getBoundingClientRect().top ?? null;
    setWantsEnglish(!on);
    applyEnglish(lang.code, !on);
    setOn(!on);
  };
  return (
    <section className="keep-card count-card writing-card show-en-card">
      <div className="count-row">
        <span className="writing-icon show-en-icon" aria-hidden lang="en">EN</span>
        <div className="keep-head" id={label}>
          <Bi className="keep-gloss writing-gloss" text={ui('showEnglish', lang)} />
          <span className="keep-nl" lang="nl">Ook Engels tonen</span>
        </div>
        <button ref={knob} type="button" role="switch" aria-checked={on} aria-labelledby={label} className={`count-switch ${on ? 'on' : ''}`} onClick={flip}>
          <span className="count-knob" aria-hidden />
          <span className="count-state" lang="nl" aria-hidden>{on ? 'Aan' : 'Uit'}</span>
        </button>
      </div>
    </section>
  );
}
