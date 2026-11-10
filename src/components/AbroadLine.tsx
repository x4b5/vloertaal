import { abroadLine } from '../content/abroad';
import type { CultureTip } from '../content/culture';
import { isTaalBeId } from '../content/taalBe/ids';
import { gloss } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { HelpSay } from './HelpSay';
import { GlobeIcon } from './Icons';

/**
 * "Uit een ander land?" under a tip (src/content/abroad.ts): sick and home, WW abroad (U2), posted
 * (A1). In the help language with the English small, read aloud in it. Text only: nothing to tap but
 * the read-aloud. None for a Belgian tip (the facts are the Netherlands').
 */
export function AbroadLine({ tip, lang }: { tip: CultureTip; lang?: HelpLanguage }) {
  const line = isTaalBeId(tip.id) ? undefined : abroadLine(tip);
  if (!line) return null;
  const text = gloss(line.id, line.en, lang);
  return (
    <p className="tip-abroad" role="note">
      <GlobeIcon size={22} />
      <span className="tip-abroad-text"><Bi text={text} /></span>
      <HelpSay text={text.help} lang={lang} />
    </p>
  );
}
