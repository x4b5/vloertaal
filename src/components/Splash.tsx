import { Component, type ReactNode } from 'react';
import { langMeta, NL_META } from '../i18n/meta';
import { uiEn, type UiCode } from '../i18n/types';
import { loadProgress } from '../lib/progress';
import { RestartIcon } from './Icons';
import { LogoMark } from './Logo';

/**
 * The calm start screen while a help language's texts load: the same label as the static splash in
 * index.html (ink on kraft, the logo: Bram with the V on his hat), so nothing jumps when React takes over. With no connection
 * and no saved copy, one line says so (in Dutch and the help language, from src/i18n/meta.ts: its
 * pack may be the file that did not come) and one button tries again (it also retries by itself
 * when the phone is back online).
 */
export function Splash({ failed = false, onRetry, lang }: {
  failed?: boolean;
  onRetry?: () => void;
  /** The help language (null: English); the saved one when not given. */
  lang?: UiCode | null;
}) {
  const code = lang === undefined ? loadProgress().helpLang : lang;
  const help = code === 'nl' ? null : code ? langMeta(code) : undefined;
  return (
    <div className="boot-splash" aria-busy={!failed}>
      <div className="boot-label" role="img" aria-label="Vloertaal">
        <LogoMark size={64} variant="full" />
        <span className="boot-word" lang="nl" dir="ltr">vloertaal<span className="boot-dot">.</span></span>
      </div>
      {failed && onRetry && (
        <>
          <p className="boot-failed" role="alert">
            <span lang="nl" dir="ltr">{NL_META.ui.loadFailed}</span>
            {help !== null && (help ? <span lang={help.code} dir={help.dir}>{help.ui.loadFailed}</span> : <span lang="en" dir="ltr">{uiEn.loadFailed}</span>)}
          </p>
          <button type="button" className="boot-retry" onClick={onRetry} aria-label="Try again" title="Try again">
            <RestartIcon size={28} />
          </button>
        </>
      )}
    </div>
  );
}

/**
 * Any error while drawing the app (a bug, unexpected saved data): the splash with "Try again"
 * instead of a blank white screen. The reload goes to the home (the screen that broke is not
 * restored); the progress is on the phone and stays. A screen's file that did not load has its
 * own guard (src/lazyScreens.tsx), so this one only sees real errors.
 */
export class Crashed extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: unknown) {
    console.error(error);
  }
  private reload = () => {
    try { history.replaceState(null, '', location.pathname + location.search); } catch { /* keep the address */ }
    location.reload();
  };
  render() {
    return this.state.failed ? <Splash failed onRetry={this.reload} /> : this.props.children;
  }
}
