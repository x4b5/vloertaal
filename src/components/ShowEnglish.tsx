import { useId, useState } from 'react';
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
  if (!lang) return null;
  const flip = () => {
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
        <button type="button" role="switch" aria-checked={on} aria-labelledby={label} className={`count-switch ${on ? 'on' : ''}`} onClick={flip}>
          <span className="count-knob" aria-hidden />
          <span className="count-state" lang="nl" aria-hidden>{on ? 'Aan' : 'Uit'}</span>
        </button>
      </div>
    </section>
  );
}
