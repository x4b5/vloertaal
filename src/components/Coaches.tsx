import { useState } from 'react';
import { units } from '../content/curriculum';
import { unitIcons } from '../content/unitIcons';
import type { Unit } from '../content/types';
import { unitLink } from '../lib/unitLink';
import { WordPicture } from '../pictures';
import { BackIcon, CheckIcon } from './Icons';

/**
 * "Voor begeleiders" (Dutch only), its own page from a link on About: a link per topic that opens
 * Vloertaal at that topic, to send a learner by WhatsApp or e-mail. One kind of row with one tap
 * each (a list, the named exception to "at most three"). Shares with the phone's share sheet, or
 * copies the link.
 */
export function Coaches({ onBack }: { onBack: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);
  const share = async (unit: Unit) => {
    const url = unitLink(unit.id);
    try {
      if (navigator.share) {
        await navigator.share({ title: `Vloertaal: ${unit.titleNl}`, url });
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
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Terug"><BackIcon size={28} /></button>
        <h1>Voor begeleiders</h1>
      </div>
      <p className="muted small">
        Stuur een leerling een link naar een onderwerp. Met de link opent Vloertaal meteen bij dat onderwerp.
        Elk onderwerp kan bij de eerste les beginnen. Een nieuwe gebruiker kiest eerst nog een taal en vult het wachtwoord in.
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
