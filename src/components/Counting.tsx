import { useId, useState } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { countingOn, setCounting } from '../lib/count';
import { Bi } from './Bi';

/**
 * "Anoniem meetellen" in Settings: on by default, one tap to switch off. When it is off, the app
 * sends nothing at all (see src/lib/count.ts). Kept on this device, apart from the progress.
 */
export function CountingCard({ lang }: { lang?: HelpLanguage }) {
  const [on, setOn] = useState(countingOn);
  const label = useId();
  const flip = () => {
    setCounting(!on);
    setOn(!on);
  };
  return (
    <section className="keep-card count-card">
      <div className="count-row">
        <div className="keep-head" id={label}>
          <span className="keep-nl" lang="nl">Anoniem meetellen</span>
          <Bi className="keep-gloss" text={ui('countTitle', lang)} />
        </div>
        <button type="button" role="switch" aria-checked={on} aria-labelledby={label} className={`count-switch ${on ? 'on' : ''}`} onClick={flip}>
          <span className="count-knob" aria-hidden />
          <span className="count-state" lang="nl" aria-hidden>{on ? 'Aan' : 'Uit'}</span>
        </button>
      </div>
      <p className="keep-hint"><Bi text={ui('countHint', lang)} /></p>
    </section>
  );
}
