import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { ensureLanguage, getHelpLanguage, isLanguageLoaded, type Bilingual } from '../i18n';
import { langMeta, langTag, metaLanguage, NL_META } from '../i18n/meta';
import { uiEn, type UiCode, type UiKey } from '../i18n/types';
import { dutchUi } from '../lib/track';
import { forgetProgress, loadProgress, rawBackupFile, savedProgressText } from '../lib/progress';
import { sendBackup } from '../lib/backupShare';
import { AlertIcon, CheckIcon, CrateIcon, RestartIcon } from './Icons';
import { CAST } from './Characters';
import { LogoMark } from './Logo';
import { NlPair } from './NlPair';
import { reportError } from '../lib/errors';

/**
 * The calm start screen while a help language's texts load: the same as the static splash in
 * index.html (the four colleagues, Bram, Amina, Henk and Jada, above the name in ink on kraft), so
 * nothing jumps when React takes over. index.html's copy is made from this: `npm run splash`. With no connection
 * and no saved copy, one line says so (in Dutch and the help language, from src/i18n/meta.ts: its
 * pack may be the file that did not come) and one button tries again (it also retries by itself
 * when the phone is back online). `children`: what shows under the name instead (BootFailed).
 */
export function Splash({ failed = false, onRetry, lang, children }: {
  failed?: boolean;
  onRetry?: () => void;
  /** The help language (null: English); the saved one when not given. */
  lang?: UiCode | null;
  children?: ReactNode;
}) {
  const code = lang === undefined ? loadProgress().helpLang : lang;
  const help = code === 'nl' ? null : code ? langMeta(code) : undefined;
  // "Opnieuw proberen", with the help language (English before one is chosen), from src/i18n/meta.ts.
  const retryLabel = `${NL_META.ui.retry} · ${help === null ? '' : help ? help.ui.retry : 'Try again'}`.replace(/ · $/, '');
  return (
    <div className="boot-splash" aria-busy={!failed && !children}>
      <div className="boot-cast" aria-hidden="true">
        {CAST.map((who) => (
          <span key={who} className="boot-cast-one"><LogoMark size={64} variant="full" who={who} /></span>
        ))}
      </div>
      <div className="boot-label" role="img" aria-label="Vloertaal">
        <span className="boot-word" lang="nl" dir="ltr">vloertaal<span className="boot-dot">.</span></span>
      </div>
      {children}
      {failed && onRetry && (
        <>
          <p className="boot-failed" role="alert">
            <span lang="nl" dir="ltr">{NL_META.ui.loadFailed}</span>
            {help !== null && (help ? <span lang={langTag(help.code)} dir={help.dir}>{help.ui.loadFailed}</span> : <span lang="en" dir="ltr">{uiEn.loadFailed}</span>)}
          </p>
          <button type="button" className="boot-retry" onClick={onRetry} aria-label={retryLabel} title={retryLabel}>
            <RestartIcon size={28} />
          </button>
        </>
      )}
    </div>
  );
}

/** A line in Dutch, then the same in the help language (English before one is known; nothing more in the Dutch track). */
function Said({ nl, text }: { nl: string; text: Bilingual }) {
  const { lang, help } = text;
  return (
    <>
      <span lang="nl" dir="ltr">{nl}</span>
      {!dutchUi(lang) && (lang && help
        ? <span lang={langTag(lang.code)} dir={lang.dir}>{help}</span>
        : <span lang="en" dir="ltr">{text.en}</span>)}
    </>
  );
}

/** Back to the start: the screen that broke is not restored (it would break again). */
function reloadHome() {
  try { history.replaceState(null, '', location.pathname + location.search); } catch { /* keep the address */ }
  location.reload();
}

/**
 * The app could not start (src/main.tsx, or Crashed before the learner did anything): what this
 * phone saved can't be read, or a bug. Not "Is there internet?" (the splash's, for a file that did
 * not come) and not "Try again" (the start would only fail again): it says the app can't start,
 * in Dutch and the help language (the saved one, when its texts load; English before that), with
 * two ways out, each with its picture (owner's request, 4 November 2026):
 *  - "Bewaar je voortgang": what this phone saved, as it is, as a backup file (rawBackupFile),
 *    sent or downloaded like Settings' backup (src/lib/backupShare.ts), so nothing is lost; "Zet
 *    terug" puts it back later, checked field by field;
 *  - "Opnieuw beginnen": asked once more ("Annuleren" is the main button, as in Settings' reset),
 *    then the saved progress goes and the app starts as new. With nothing saved there is nothing
 *    to keep or to lose: it only starts again.
 */
export function BootFailed() {
  const [raw] = useState(savedProgressText);
  // (loadProgress reads what it can of a broken save, and never throws.)
  const [saved] = useState(loadProgress);
  const [asking, setAsking] = useState(false);
  const [made, setMade] = useState(false);
  // The help language's texts are usually here already; else asked for once (offline and not
  // kept on the phone: Dutch and English).
  const [, setLoaded] = useState(false);
  useEffect(() => {
    if (!isLanguageLoaded(saved.helpLang)) ensureLanguage(saved.helpLang).then(() => setLoaded(true), () => {});
  }, [saved.helpLang]);
  const dutch = saved.helpLang === 'nl';
  const lang = getHelpLanguage(saved.helpLang, saved.gender) ?? (dutch ? metaLanguage(NL_META) : undefined);
  /** A text of this screen: English, and the help language's (in the Dutch track the Dutch itself, also before its texts are here). */
  const says = (k: UiKey, nl: string): Bilingual => ({ en: uiEn[k], help: lang?.ui[k] ?? (dutch ? nl : undefined), lang });
  const said = (k: UiKey, nl: string) => <Said nl={nl} text={says(k, nl)} />;
  const label = (k: UiKey, nl: string) => <NlPair nlFirst nl={nl} className="keep-btn-gloss" text={says(k, nl)} />;
  // The question takes the focus when it comes (the button tapped is gone), and gives it back.
  const step = useRef<HTMLDivElement>(null);
  const moved = useRef(false);
  useEffect(() => {
    if (moved.current) step.current?.focus({ preventScroll: true });
    moved.current = true;
  }, [asking]);
  const save = () => {
    const now = new Date();
    void sendBackup(rawBackupFile(raw, now), now).then((out) => { if (out !== 'cancelled') setMade(true); });
  };
  const startOver = () => {
    forgetProgress();
    reloadHome();
  };
  return (
    <Splash lang={saved.helpLang}>
      <div className="boot-stuck" ref={step} tabIndex={-1} dir={lang?.dir} role={asking ? 'alertdialog' : undefined} aria-label={asking ? (says('resetConfirm', 'Alle voortgang op dit apparaat wissen?').help ?? uiEn.resetConfirm) : undefined}>
        {asking ? (
          <>
            <p className="boot-failed">{said('resetConfirm', 'Alle voortgang op dit apparaat wissen?')}</p>
            <div className="reset-actions">
              <button type="button" className="btn btn-primary keep-btn reset-keep" onClick={() => setAsking(false)}>
                {label('cancel', 'Annuleren')}
              </button>
              <button type="button" className="btn btn-ghost keep-btn danger reset-wipe" onClick={startOver}>
                <AlertIcon size={22} />
                <span className="reset-wipe-text">{label('resetProgress', 'Voortgang wissen')}</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="boot-failed" role="alert">{said('bootFailed', 'Vloertaal kan niet starten.')}</p>
            {raw !== null && (
              <>
                <p className="boot-hint">{said('bootFailedHint', 'Bewaar eerst je voortgang. Begin daarna opnieuw.')}</p>
                <button type="button" className="btn btn-primary keep-btn keep-btn-small boot-way" onClick={save}>
                  <CrateIcon size={28} />
                  <span className="keep-btn-text">{label('backupTitle', 'Bewaar je voortgang')}</span>
                </button>
              </>
            )}
            {/* Always on the page (a live region that appears with its text is often not read). */}
            <div role="status">
              {made && <p className="boot-hint boot-made"><CheckIcon size={20} />{said('backupMade', 'Klaar. Bewaar dit bestand goed. Daarmee zet je je voortgang later terug.')}</p>}
            </div>
            <button type="button" className="btn btn-ghost keep-btn keep-btn-small boot-way" onClick={raw === null ? reloadHome : () => setAsking(true)}>
              <RestartIcon size={26} />
              <span className="keep-btn-text">{label('startOver', 'Opnieuw beginnen')}</span>
            </button>
          </>
        )}
      </div>
    </Splash>
  );
}

/** Has the learner used the app on this open (a tap, a key)? Until then a drawing error is the start failing. */
let used = false;
const markUsed = () => { used = true; };

/**
 * Any error while drawing the app (a bug, unexpected saved data). After the learner used the app:
 * the splash with "Try again" instead of a blank white screen; the reload goes to the home (the
 * screen that broke is not restored), the progress is on the phone and stays. Before that, the
 * start itself fails and would fail again on every reload (until 4 November 2026 its "Try again"
 * led back to the same error): the screen that says so, with its two ways out (BootFailed). A
 * screen's file that did not load has its own guard (src/lazyScreens.tsx), so this one only sees
 * real errors.
 */
export class Crashed extends Component<{ children: ReactNode }, { failed: boolean; atStart?: boolean }> {
  state = { failed: false, atStart: false };
  static getDerivedStateFromError() {
    return { failed: true, atStart: !used };
  }
  componentDidMount() {
    window.addEventListener('pointerdown', markUsed, true);
    window.addEventListener('keydown', markUsed, true);
  }
  componentWillUnmount() {
    window.removeEventListener('pointerdown', markUsed, true);
    window.removeEventListener('keydown', markUsed, true);
  }
  componentDidCatch(error: unknown) {
    console.error(error);
    // Counted without anything about the learner (src/lib/errors.ts), under "Anoniem meetellen".
    reportError('scherm', error);
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return this.state.atStart ? <BootFailed /> : <Splash failed onRetry={reloadHome} />;
  }
}
