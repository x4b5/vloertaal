import { useId, useState } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { nonLatinHelp, setWantsWriting, wantsWriting } from '../lib/writing';
import { Bi } from './Bi';
import { PencilIcon } from './Icons';

/**
 * Settings: "Ik wil ook leren schrijven" (only for a help language in another script). Off (the
 * default): "type what you hear" is "hear and pick the written word". On: real dictation with
 * letter tiles. The help language large, the Dutch a small label.
 */
export function WritingCard({ lang }: { lang?: HelpLanguage }) {
  const [on, setOn] = useState(wantsWriting);
  const label = useId();
  if (!nonLatinHelp(lang)) return null;
  const flip = () => {
    setWantsWriting(!on);
    setOn(!on);
  };
  return (
    <section className="keep-card count-card writing-card">
      <div className="count-row">
        <span className="writing-icon" aria-hidden><PencilIcon size={24} /></span>
        <div className="keep-head" id={label}>
          <Bi className="keep-gloss writing-gloss" text={ui('learnWriting', lang)} />
          <span className="keep-nl" lang="nl">Ik wil ook leren schrijven</span>
        </div>
        <button type="button" role="switch" aria-checked={on} aria-labelledby={label} className={`count-switch ${on ? 'on' : ''}`} onClick={flip}>
          <span className="count-knob" aria-hidden />
          <span className="count-state" lang="nl" aria-hidden>{on ? 'Aan' : 'Uit'}</span>
        </button>
      </div>
      <p className="keep-hint"><Bi text={ui('learnWritingHint', lang)} /></p>
    </section>
  );
}
