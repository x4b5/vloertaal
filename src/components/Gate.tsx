import { useId, useState } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { CONTACT_EMAIL } from '../content/about';
import { type Access, checkPassword } from '../lib/access';
import { Bi, HelpText } from './Bi';
import { QuestionSay } from './Choice';
import { ChromeHead } from './ChromeBack';
import { Greeting } from './Greeting';
import { CheckIcon, ChevronIcon, KeyIcon, LockIcon, MailIcon, PhoneIcon } from './Icons';
import { LogoMark, Wordmark } from './Logo';
import { NlPair } from './NlPair';
import { dutchUi } from '../lib/track';

/**
 * One password field and a big yellow button. The field shows what is typed (no show/hide eye):
 * it is a shared class code, not a secret, and one less thing to tap. `accept` decides which
 * access levels count here (the upgrade card only takes the full-version password).
 */
function PasswordForm({ onAccess, accept, lang, labelHidden = false, accepted = null, initial = '' }: {
  onAccess: (a: Access, typed: string) => void;
  accept: (a: Access) => boolean;
  lang?: HelpLanguage;
  /** The screen's heading already says "Enter the password": the label is for screen readers. */
  labelHidden?: boolean;
  /** A code accepted before (back on this page from the next one): it still counts, one tap on. */
  accepted?: Access | null;
  /** The code typed before (this visit only), back in the field. */
  initial?: string;
}) {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  /** Bumped on every wrong try, so the shake plays again. */
  const [tries, setTries] = useState(0);
  const id = useId();
  // Untouched since the code was accepted: the button goes on without typing it again.
  const kept = Boolean(accepted) && value === initial;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    if (kept && accepted) {
      onAccess(accepted, value);
      return;
    }
    setBusy(true);
    let access: Access | null = null;
    try {
      access = await checkPassword(value);
    } catch {
      access = null; // no Web Crypto (very old browser or plain http): treat as wrong
    }
    setBusy(false);
    if (access && accept(access)) {
      setError(false);
      onAccess(access, value);
    } else {
      setError(true);
      setTries((n) => n + 1);
    }
  };

  return (
    <form className="pw-form" onSubmit={submit} noValidate>
      <label className={labelHidden ? 'sr-only' : 'pw-label'} htmlFor={id}>
        <Bi text={ui('password', lang)} />
      </label>
      <div key={tries} className={`pw-field ${error ? 'pw-wrong' : ''}`}>
        <input
          id={id}
          className="pw-input"
          type="text"
          dir="auto"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          aria-invalid={error}
          aria-describedby={error ? `${id}-err` : kept ? `${id}-ok` : undefined}
        />
      </div>
      {kept && (
        <p id={`${id}-ok`} className="pw-ok">
          <CheckIcon size={18} />
          <Bi text={ui('codeAccepted', lang)} />
        </p>
      )}
      {error && (
        <p id={`${id}-err`} className="pw-error" role="alert">
          <Bi text={ui('wrongPassword', lang)} />
        </p>
      )}
      <button type="submit" className="btn btn-go btn-primary pw-go" disabled={(!kept && !value.trim()) || busy}>
        <Bi text={ui('unlock', lang)} />
        <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
      </button>
    </form>
  );
}

/**
 * The door: after the language (and "Woman or man?" for a help language with gender), until a
 * password was entered on this device. The help language says what the app is, who gives you the
 * code (a teacher, coach or employer) and that nothing about you leaves the phone; the Dutch
 * question has a speaker. Two things to tap (the field and the button); the top-start arrow goes
 * back one page and is chrome. The third is "No code? Start with the first lessons" (`onFree`):
 * the sneak preview, the first lesson of each theme, without a code (src/lib/access.ts 'sample').
 * The code for the full version can be entered later, in Settings or at a locked topic.
 */
export function Gate({ lang, onAccess, onBack, accepted = null, code = '', onFree, greet = false }: {
  lang?: HelpLanguage;
  onAccess: (a: Access, typed: string) => void;
  /** Back one page: to "Woman or man?" or to the language. */
  onBack: () => void;
  /** Back here from the sector: the code accepted then still counts (not cleared). */
  accepted?: Access | null;
  /** The code typed then (this visit only), put back in the field. */
  code?: string;
  /** "No code?": the sneak preview, without a code. Undefined: no button. */
  onFree?: () => void;
  /** The first page after the language was picked: Bram waves and introduces himself, once. */
  greet?: boolean;
}) {
  const ask = ui('enterPassword', lang);
  const tagline = lang?.ui.appTagline;
  return (
    <div className="screen gate onb-gate">
      <ChromeHead lang={lang} onBack={onBack} />
      {greet && <Greeting lang={lang} place="corner" />}
      <div className="gate-sign" dir={lang?.dir}>
        <div className="gate-logo" dir="ltr">
          <LogoMark size={52} />
          <Wordmark />
        </div>
        {/* What this is, in the help language (large); the Dutch small under it. */}
        <p className="gate-tagline">
          {tagline && lang ? <HelpText className="gate-tagline-help" text={tagline} lang={lang} /> : <span className="gate-tagline-help" lang="en">{ui('appTagline').en}</span>}
          {/* The work-rules track is not about learning Dutch: its own tagline (above) only. */}
          {!dutchUi(lang) && <span className="gate-tag" lang="nl">Nederlands voor op de werkvloer</span>}
        </p>
        <div className="gate-q">
          <h1 className="gate-title">
            {dutchUi(lang)
              ? <Bi text={ask} />
              : <><span className="gate-title-nl" lang="nl"><bdi dir="ltr">Wat is de code?</bdi></span><Bi text={ask} /></>}
          </h1>
          <QuestionSay nl="Wat is de code?" help={ask.help} lang={lang} />
        </div>
        <p className="gate-note gate-who">
          <KeyIcon size={22} />
          <Bi text={ui('gateWho', lang)} />
        </p>
        <PasswordForm onAccess={onAccess} accept={() => true} lang={lang} labelHidden accepted={accepted} initial={accepted ? code : ''} />
        <p className="gate-note gate-trust">
          <PhoneIcon size={20} />
          <Bi text={ui('gateTrust', lang)} />
        </p>
        {onFree && (
          <button type="button" className="btn gate-try" onClick={onFree}>
            <Bi text={ui('startFree', lang)} />
            <ChevronIcon size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

/** Without the full version: a card in Settings ("Instellingen") to unlock it with its password, and where to ask for one. */
export function UpgradeCard({ lang, onAccess }: { lang?: HelpLanguage; onAccess: (a: Access) => void }) {
  return (
    <section className="upgrade-card" id="unlock-full" aria-labelledby="unlock-full-title">
      <h2 id="unlock-full-title" className="upgrade-title">
        <LockIcon size={24} />
        <span className="bi">
          <NlPair nlFirst nl="Volledige versie ontgrendelen" nlClass="upgrade-nl" text={ui('unlockFull', lang)} />
        </span>
      </h2>
      <p className="upgrade-hint"><Bi text={ui('unlockHint', lang)} /></p>
      {/* "No code yet? ... or e-mail us:": who came without a coach (the sneak preview needs no
          code) asks for one here. The subject is filled in, in Dutch. */}
      <a className="upgrade-mail" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Code voor de volledige versie')}`} dir="ltr" lang="en">
        <MailIcon size={20} />
        <span>{CONTACT_EMAIL}</span>
      </a>
      <PasswordForm onAccess={onAccess} accept={(a) => a === 'full'} lang={lang} />
    </section>
  );
}
