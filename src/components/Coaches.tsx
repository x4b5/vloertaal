import { useState } from 'react';
import { units } from '../content/curriculum';
import { unitIcons } from '../content/unitIcons';
import type { Unit } from '../content/types';
import { unitLink } from '../lib/unitLink';
import { WordPicture } from '../pictures';
import { CheckIcon } from './Icons';
import { ChromeBack } from './ChromeBack';
import type { HelpLanguage } from '../i18n/types';

/**
 * "Voor begeleiders" (Dutch only), its own page from a link on About: a link per topic that opens
 * Vloertaal at that topic, to send a learner by WhatsApp or e-mail. One kind of row with one tap
 * each (a list, the named exception to "at most three"). Shares with the phone's share sheet, or
 * copies the link. Also straight from the address with #begeleiders (App.tsx), without a
 * language choice or code first.
 */
export function Coaches({ onBack, lang }: { onBack: () => void; /** The learner's help language: the back arrow says Back in it too. */ lang?: HelpLanguage }) {
  const [copied, setCopied] = useState<string | null>(null);
  const share = async (unit: Unit) => {
    const url = unitLink(unit.id);
    try {
      if (navigator.share) {
        // A short Dutch line goes with the link (WhatsApp shows it above the link).
        await navigator.share({ title: `Vloertaal: ${unit.titleNl}`, text: `Oefen dit onderwerp in Vloertaal: ${unit.titleNl}`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(unit.id);
    } catch {
      // Share sheet closed, or no clipboard access: show the link to copy by hand.
      window.prompt('Kopieer deze link:', url);
    }
  };
  return (
    <div className="screen coaches" lang="nl">
      <div className="screen-head">
        <ChromeBack lang={lang} onBack={onBack} />
        <h1>Voor begeleiders</h1>
      </div>
      <p className="muted small">
        Stuur een leerling een link naar een onderwerp. Met de link opent Vloertaal meteen bij dat onderwerp.
        Elk onderwerp kan bij de eerste les beginnen. Een nieuwe gebruiker kiest eerst nog een taal en vult de code in.
      </p>
      <p className="muted small coach-privacy">
        Voortgang staat alleen op de telefoon van de leerling. Geen account, geen namen.
        Vraag de leerling om de certificaten te laten zien.
      </p>
      <ul className="coach-links coach-list">
        {units.map((unit) => (
          <li key={unit.id}>
            <WordPicture className="coach-icon" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={32} />
            <span className="coach-title">{unit.titleNl}</span>
            <button type="button" className="coach-share" onClick={() => share(unit)}>
              {copied === unit.id ? <><CheckIcon size={16} /> Gekopieerd</> : 'Deel link'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
