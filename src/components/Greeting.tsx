import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { BRAM_HELLO } from '../lib/voices';
import { HelpText } from './Bi';
import { Character } from './Characters';

/**
 * The first page after the language was picked: Bram waves once and introduces himself, "Hallo,
 * ik ben Bram." in Dutch with the help language small under it (English only without one). On
 * that tap his recorded voice says it (sayFirstWord in src/lib/audio.ts). A picture with a line of
 * text, never a button. It never pushes the page's question down much:
 *  - 'corner' (the password page): in the free top-end corner beside the back arrow, Bram at the
 *    end edge and his bubble towards the middle;
 *  - 'hero' ("Woman or man?"): in place of the logo, Bram at the start and his bubble beside him.
 * Right to left the back arrow is at the top right, so everything mirrors (Bram faces the page).
 */
export function Greeting({ lang, place = 'corner' }: { lang?: HelpLanguage; place?: 'corner' | 'hero' }) {
  const rtl = lang?.dir === 'rtl';
  const hello = ui('bramIntroHello', lang);
  // The bubble's tail points at Bram: at the start ('hero') or the end ('corner') of the row.
  const tail = (place === 'hero') !== rtl ? 'left' : 'right';
  return (
    <div className={`onb-greet onb-greet-${place}`} dir={rtl ? 'rtl' : 'ltr'}>
      <Character who="bram" mood="wave" size={place === 'hero' ? 72 : 64} flip={rtl} />
      <p className={`onb-greet-say onb-greet-tail-${tail}`}>
        <span className="onb-greet-nl" lang="nl" dir="ltr">{BRAM_HELLO}</span>
        {lang?.code === 'nl' ? null : hello.help && lang
          ? <HelpText className="onb-greet-help" text={hello.help} lang={lang} />
          : <span className="onb-greet-help" lang="en">{hello.en}</span>}
      </p>
    </div>
  );
}
