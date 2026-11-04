import type { Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { breakable, splitQuote } from '../lib/dutch';
import { voiceFor } from '../lib/voices';
import { Bi, HelpText } from './Bi';
import type { CharacterId } from './Characters';
import { HelpSay } from './HelpSay';
import { SpeakButton } from './SpeakButton';

/**
 * The situation's text, with the Dutch said in it once: in its own place, on a line of its own
 * with its speaker ('Przełożony mówi:' / [🔊 Morgen begin je om half negen.] / 'O której …?').
 * A text that does not quote the Dutch as it is keeps the Dutch line above it.
 */
export function SituationText({ text, said, who, lang }: { text: Bilingual; said: string; who: CharacterId; lang?: HelpLanguage }) {
  const main = text.help ?? text.en;
  const parts = splitQuote(main, said);
  const rtl = text.help && text.lang?.dir === 'rtl';
  const quote = (
    <span className="situation-quote" dir="ltr">
      <span lang="nl" className="situation-nl">{breakable(said)}</span>
      <SpeakButton glyph text={said} help={lang} voice={voiceFor(who)} />
    </span>
  );
  if (!parts) {
    return (
      <>
        {quote}
        <span className="help-say-row">
          <Bi text={text} />
          <HelpSay text={text.help} lang={lang} />
        </span>
      </>
    );
  }
  const line = (t: string) => (text.help && text.lang ? <HelpText className="situation-line" text={t} lang={text.lang} /> : <span className="situation-line">{t}</span>);
  return (
    <span className="help-say-row">
      <span className={`bi situation-lines ${text.help ? 'bi-swap' : ''}`} dir={rtl ? 'rtl' : undefined}>
        <span className="bi-en">
          {parts.before && line(parts.before)}
          {quote}
          {parts.after && line(parts.after)}
        </span>
        {/* The English under it (hidden unless "Show English" is on), as in every pair. */}
        {text.help && <span className="bi-help" lang="en" dir={rtl ? 'ltr' : undefined}>{text.en}</span>}
      </span>
      <HelpSay text={text.help} lang={lang} />
    </span>
  );
}

