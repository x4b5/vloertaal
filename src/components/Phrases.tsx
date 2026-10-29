import { findItem, phrasebookIds } from '../content/curriculum';
import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { speechAvailable } from '../lib/audio';
import { breakable } from '../lib/dutch';
import { Bi } from './Bi';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';

/** The emergency phrases: Dutch with a speaker button, the meaning in the help language. */
export function PhraseList({ lang }: { lang?: HelpLanguage }) {
  return (
    <>
      {!speechAvailable() && <p className="warn"><Bi text={ui('audioUnavailable', lang)} /></p>}
      <ul className="phrases">
        {phrasebookIds.map((id) => {
          const item = findItem(id);
          if (!item) return null;
          return (
            <li key={id} className="phrase">
              <SpeakButton text={item.nl} help={lang} />
              <div className="phrase-text">
                <NlPair content nlFirst nl={breakable(item.nl)} nlClass="phrase-nl" text={gloss(id, item.en, lang)} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
