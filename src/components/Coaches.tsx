import { Fragment, useState } from 'react';
import { units } from '../content/curriculum';
import { unitIcons } from '../content/unitIcons';
import type { Unit } from '../content/types';
import { unitLink } from '../lib/unitLink';
import { WordPicture } from '../pictures';
import { CheckIcon } from './Icons';
import { ChromeBack } from './ChromeBack';
import type { HelpLanguage } from '../i18n/types';
import { groupByTheme } from '../content/themes';
import { ThemeHeadRow } from './Themes';
import { COACH_FACTS } from '../content/facts';

/**
 * "Voor begeleiders" (Dutch only), its own page from a link on About: a link per topic that opens
 * Vloertaal at that topic, to send a learner by WhatsApp or e-mail, grouped by theme under plain
 * header rows (src/content/themes.ts). One kind of row with one tap
 * each (a list, the named exception to "at most three"). Shares with the phone's share sheet, or
 * copies the link. Also straight from the address with #begeleiders (App.tsx), without a
 * language choice or code first. Above the list the facts on why Dutch matters, with their
 * sources (src/content/facts.ts): plain text, nothing to tap.
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
    } catch (e) {
      // The coach closed the share sheet: nothing more to do.
      if ((e as DOMException | undefined)?.name === 'AbortError') return;
      // Sharing or the clipboard did not work: show the link to copy by hand.
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
        Elk onderwerp kan bij de eerste les beginnen. Een nieuwe gebruiker kiest eerst nog een taal.
      </p>
      <p className="muted small coach-privacy">
        Voortgang staat alleen op de telefoon van de leerling. Geen account, geen namen.
        Vraag de leerling om de certificaten te laten zien.
      </p>
      <section className="coach-facts" aria-labelledby="coach-facts-title">
        <h2 id="coach-facts-title" className="coach-facts-title">Waarom Nederlands leren? De feiten</h2>
        <ul className="coach-facts-list">
          {COACH_FACTS.map((f) => (
            <li key={f.source}>
              <span className="coach-fact">{f.text}</span>
              <span className="coach-fact-source">Bron: {f.source}</span>
            </li>
          ))}
        </ul>
      </section>
      <ul className="coach-links coach-list coach-list-themes">
        {groupByTheme(units).map((group) => (
          <Fragment key={group.key}>
            <ThemeHeadRow group={group} dutchOnly />
            {group.units.map((unit) => (
              <li key={unit.id}>
                <WordPicture className="coach-icon" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={32} />
                <span className="coach-title">{unit.titleNl}</span>
                <button type="button" className="coach-share" onClick={() => share(unit)}>
                  {copied === unit.id ? <><CheckIcon size={16} /> Gekopieerd</> : 'Deel link'}
                </button>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
