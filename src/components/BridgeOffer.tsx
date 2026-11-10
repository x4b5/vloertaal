import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { WordPicture } from '../pictures';
import { HelpSay } from './HelpSay';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';
import '../melding.css';

/** The card's Dutch line (also read aloud). */
export const BRIDGE_NL = 'Je kent nu veel Nederlands. Wil je ook de werkregels leren? Dan is alles in het Nederlands.';
/** "Eén app" (src/lib/oneApp.ts): no switch, the rules are beside each topic. */
export const BRIDGE_NL_ONE = 'Je kent nu veel Nederlands. Bij elk onderwerp kun je nu ook lezen hoe werken hier gaat, in eenvoudig Nederlands.';

/**
 * "Van Taal naar Werkregels" (src/lib/bridge.ts): a calm card at the top of the home, once, in the
 * block's place, like "Bewaar je voortgang" (src/components/BackupNudge.tsx): no pop-up. The
 * picture of Werkregels (as in Settings › "Wat wil je leren?"), the title and one line in Dutch and
 * in the help language, then [Ja, laat zien] (that Settings page, where the learner chooses) and
 * [Later]; with "Ander onderwerp" under it, three things to tap.
 */
export function BridgeOffer({ lang, onGo, onLater, one = false }: { lang?: HelpLanguage; onGo: () => void; onLater: () => void; /** "Eén app": the lessons beside each topic, not a switch. */ one?: boolean }) {
  const rtl = lang?.dir === 'rtl';
  const text = ui(one ? 'bridgeTextOne' : 'bridgeText', lang);
  const nl = one ? BRIDGE_NL_ONE : BRIDGE_NL;
  return (
    <section className="notice-card bridge-card" aria-labelledby="bridge-title" dir={rtl ? 'rtl' : undefined}>
      <div className="notice-head">
        <span className="notice-icon bridge-icon" aria-hidden><WordPicture id="w.contract" emoji="📘" size={30} /></span>
        <h2 id="bridge-title" className="notice-title">
          <NlPair nlFirst nl="De werkregels" nlClass="notice-nl" className="notice-help" text={ui('bridgeTitle', lang)} />
        </h2>
      </div>
      <div className="notice-text">
        <p className="notice-line">
          <NlPair nlFirst content dir="ltr" nl={nl} nlClass="notice-text-nl" className="notice-text-help" text={text} />
        </p>
        <span className="notice-say">
          <SpeakButton text={nl} long needsDevice help={lang} />
          <HelpSay text={text.help} lang={lang} />
        </span>
      </div>
      <div className="notice-actions">
        <button type="button" className="btn btn-primary notice-ok bridge-go" onClick={onGo}>
          <NlPair nlFirst nl="Ja, laat zien" nlClass="notice-btn-nl" text={ui('bridgeGo', lang)} />
        </button>
        <button type="button" className="btn notice-more bridge-later" onClick={onLater}>
          <NlPair nlFirst nl="Later" nlClass="notice-btn-nl" text={ui('certLater', lang)} />
        </button>
      </div>
    </section>
  );
}
