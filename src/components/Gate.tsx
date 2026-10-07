import { useId, useState } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { type Access, checkPassword } from '../lib/access';
import { Bi } from './Bi';
import { ChevronIcon, EyeIcon, EyeOffIcon, LockIcon } from './Icons';
import { LogoMark, Wordmark } from './Logo';

/**
 * One password field with a show/hide toggle and a big yellow button. `accept` decides which
 * access levels count here (the upgrade card only takes the full-version password).
 */
function PasswordForm({ onAccess, accept, lang, dutch }: {
  onAccess: (a: Access) => void;
  accept: (a: Access) => boolean;
  lang?: HelpLanguage;
  /** Dutch button text and error (the gate, before any help language is chosen). */
  dutch?: { button: string; error: string };
}) {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  /** Bumped on every wrong try, so the shake plays again. */
  const [tries, setTries] = useState(0);
  const id = useId();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
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
      onAccess(access);
    } else {
      setError(true);
      setTries((n) => n + 1);
    }
  };

  return (
    <form className="pw-form" onSubmit={submit} noValidate>
      <label className="pw-label" htmlFor={id}>
        {dutch ? <><span lang="nl">Wachtwoord</span> · Password</> : <Bi text={ui('password', lang)} />}
      </label>
      <div key={tries} className={`pw-field ${error ? 'pw-wrong' : ''}`}>
        <input
          id={id}
          className="pw-input"
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          autoComplete="current-password"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          aria-invalid={error}
          aria-describedby={error ? `${id}-err` : undefined}
        />
        <button
          type="button"
          className="pw-eye"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? 'Hide password' : 'Show password'}
          aria-pressed={show}
        >
          {show ? <EyeOffIcon size={24} /> : <EyeIcon size={24} />}
        </button>
      </div>
      {error && (
        <p id={`${id}-err`} className="pw-error" role="alert">
          {dutch ? <><span lang="nl">{dutch.error}</span><span className="pw-error-en">{ui('wrongPassword').en}</span></> : <Bi text={ui('wrongPassword', lang)} />}
        </p>
      )}
      <button type="submit" className="btn btn-go btn-primary pw-go" disabled={!value.trim() || busy}>
        {dutch ? <span className="bi"><span lang="nl">{dutch.button}</span><span className="pw-go-en">{ui('unlock').en}</span></span> : <Bi text={ui('unlock', lang)} />}
        <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
      </button>
    </form>
  );
}

/** The door: shown before anything else until a password was entered on this device. */
export function Gate({ onAccess }: { onAccess: (a: Access) => void }) {
  return (
    <div className="screen gate">
      <div className="gate-sign">
        <span className="gate-hazard" aria-hidden />
        <div className="gate-logo">
          <LogoMark size={64} />
          <Wordmark />
        </div>
        <p className="gate-tag" lang="nl">Nederlands voor op de werkvloer</p>
        <h1 className="gate-title">
          <LockIcon size={26} />
          <span className="bi">
            <span lang="nl">Voer het wachtwoord in</span>
            <span className="gate-en">Enter the password</span>
          </span>
        </h1>
        <PasswordForm
          onAccess={onAccess}
          accept={() => true}
          dutch={{ button: 'Naar binnen', error: 'Dit wachtwoord klopt niet.' }}
        />
      </div>
    </div>
  );
}

/** Preview only: a card in Settings ("Ik") to unlock the full version with its password. */
export function UpgradeCard({ lang, onAccess }: { lang?: HelpLanguage; onAccess: (a: Access) => void }) {
  return (
    <section className="upgrade-card" id="unlock-full" aria-labelledby="unlock-full-title">
      <h2 id="unlock-full-title" className="upgrade-title">
        <LockIcon size={24} />
        <span className="bi">
          <span lang="nl" className="upgrade-nl">Volledige versie ontgrendelen</span>
          <Bi text={ui('unlockFull', lang)} />
        </span>
      </h2>
      <p className="upgrade-hint"><Bi text={ui('unlockHint', lang)} /></p>
      <PasswordForm onAccess={onAccess} accept={(a) => a === 'full'} lang={lang} />
    </section>
  );
}
