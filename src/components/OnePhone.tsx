import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { ChromeHead } from './ChromeBack';
import { HelpSay } from './HelpSay';
import { PhoneIcon } from './Icons';

/**
 * "Use this one phone": the last page of the first run, after the country (src/lib/onboarding.ts
 * 'phone'). Vloertaal has no back end, so what a learner does lives on this one device; on another
 * phone they would start again (or carry a file over: Settings > "Bewaar je voortgang"). It is a
 * page of its own with one button, not a line under a question: a line is read over, and nobody
 * should start without having seen this. In the help language, with its speaker.
 */
export function OnePhoneScreen({ lang, onDone, onBack }: {
  lang?: HelpLanguage;
  /** The button: read, on to the lessons. */
  onDone: () => void;
  /** Back to the country. */
  onBack: () => void;
}) {
  const title = ui('onePhoneTitle', lang);
  const text = ui('onePhoneText', lang);
  const both = title.help && text.help ? `${title.help} ${text.help}` : undefined;
  return (
    <div className="screen onboarding one-phone" dir={lang?.dir}>
      <ChromeHead lang={lang} onBack={onBack} />
      <div className="one-phone-pic" aria-hidden><PhoneIcon size={72} /></div>
      <h2 className="onboarding-title one-phone-title"><Bi text={title} /></h2>
      <p className="one-phone-text"><Bi text={text} /></p>
      <div className="one-phone-say"><HelpSay text={both} lang={lang} /></div>
      <button type="button" className="btn btn-primary one-phone-ok" onClick={onDone}>
        <Bi text={ui('noticeOk', lang)} />
      </button>
    </div>
  );
}
