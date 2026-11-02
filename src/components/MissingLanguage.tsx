import { useEffect, useRef, useState } from 'react';
import { CONTACT_EMAIL } from '../content/about';
import { MISSING_MAX, missingLangMail, missingName } from '../lib/missingLang';
import { ChromeHead } from './ChromeBack';
import { CheckIcon, MailIcon } from './Icons';

/**
 * The first run's "Is your language missing?" page (src/lib/missingLang.ts): one field, one
 * button that opens the mail app, and the address as text for a phone without one. In English,
 * like the language list: no help language is chosen yet. After the tap: thanks, and back to
 * the list to choose a language they know for now.
 */
export function MissingLanguage({ onBack }: { onBack: () => void }) {
  const [typed, setTyped] = useState('');
  const [sent, setSent] = useState(false);
  const field = useRef<HTMLInputElement>(null);
  useEffect(() => { field.current?.focus({ preventScroll: true }); }, []);
  const name = missingName(typed);
  return (
    <div className="screen onboarding max3-page missing-lang" lang="en">
      <ChromeHead onBack={onBack} />
      <h2 className="onboarding-title">Is your language missing?</h2>
      {sent ? (
        <>
          <p className="missing-thanks"><CheckIcon size={24} /> Thank you!</p>
          <p className="muted missing-note">Send the mail in your mail app. Until we add your language, choose a language you know, or English.</p>
          <button type="button" className="btn btn-dark missing-go" onClick={onBack}>Choose a language</button>
        </>
      ) : (
        <>
          <p className="muted missing-note">Tell us which language you speak. We use it to choose the next languages.</p>
          <label className="missing-label" htmlFor="missing-name">Your language</label>
          <input
            id="missing-name" ref={field} className="pw-input missing-input" type="text" dir="auto"
            maxLength={MISSING_MAX} autoComplete="off" enterKeyHint="send" value={typed}
            onChange={(e) => setTyped(e.target.value)}
          />
          {name
            ? <a className="btn btn-dark missing-go" href={missingLangMail(name)} onClick={() => setSent(true)}><MailIcon size={22} /> Send</a>
            : <button type="button" className="btn btn-dark missing-go" disabled><MailIcon size={22} /> Send</button>}
          <p className="muted missing-small">This opens your mail app. No mail app? Write to <span className="missing-mail">{CONTACT_EMAIL}</span>.</p>
        </>
      )}
    </div>
  );
}
