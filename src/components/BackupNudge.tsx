import { useEffect } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { nudgeShown } from '../lib/backupNudge';
import { HelpSay } from './HelpSay';
import { CrateIcon } from './Icons';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';
import '../melding.css';

/** The card's Dutch line (also read aloud). */
export const NUDGE_NL = 'Je telefoon kan je voortgang soms wissen. Bewaar daarom een kopie.';

/**
 * "Bewaar je voortgang" (src/lib/backupNudge.ts): a calm card at the top of the home, in the
 * block's place, like "Er is iets veranderd" (src/components/NoticeCard.tsx): no pop-up, nothing
 * moves. The crate (the backup's icon in Settings), the title and one line in Dutch and in the help
 * language, then [Bewaar nu] (Settings › "Bewaar je voortgang") and [Later]; with "Ander
 * onderwerp" under it, three things to tap.
 */
export function BackupNudge({ lang, lessons, onKeep, onLater }: { lang?: HelpLanguage; lessons: number; onKeep: () => void; onLater: () => void }) {
  const rtl = lang?.dir === 'rtl';
  const text = ui('bewaarNudge', lang);
  // Shown: remembered once, so it does not come back after the next lesson.
  useEffect(() => { nudgeShown(lessons); }, [lessons]);
  return (
    <section className="notice-card bewaar-card" aria-labelledby="bewaar-title" dir={rtl ? 'rtl' : undefined}>
      <div className="notice-head">
        <span className="notice-icon bewaar-icon" aria-hidden><CrateIcon size={28} /></span>
        <h2 id="bewaar-title" className="notice-title">
          <NlPair nlFirst nl="Bewaar je voortgang" nlClass="notice-nl" className="notice-help" text={ui('backupTitle', lang)} />
        </h2>
      </div>
      <div className="notice-text">
        <p className="notice-line">
          <NlPair nlFirst content dir="ltr" nl={NUDGE_NL} nlClass="notice-text-nl" className="notice-text-help" text={text} />
        </p>
        <span className="notice-say">
          <SpeakButton text={NUDGE_NL} long needsDevice help={lang} />
          <HelpSay text={text.help} lang={lang} />
        </span>
      </div>
      <div className="notice-actions">
        <button type="button" className="btn btn-primary notice-ok bewaar-go" onClick={onKeep}>
          <NlPair nlFirst nl="Bewaar nu" nlClass="notice-btn-nl" text={ui('bewaarGo', lang)} />
        </button>
        <button type="button" className="btn notice-more bewaar-later" onClick={onLater}>
          <NlPair nlFirst nl="Later" nlClass="notice-btn-nl" text={ui('certLater', lang)} />
        </button>
      </div>
    </section>
  );
}
