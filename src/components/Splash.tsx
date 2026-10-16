import { Component, type ReactNode } from 'react';
import { RestartIcon } from './Icons';
import { LogoMark } from './Logo';

/**
 * The calm start screen while a help language's texts load: the same label as the static splash in
 * index.html (ink on kraft, the logo: Bram with the V on his hat), so nothing jumps when React takes over. With no connection
 * and no saved copy, one button tries again (it also retries by itself when the phone is back online).
 */
export function Splash({ failed = false, onRetry }: { failed?: boolean; onRetry?: () => void }) {
  return (
    <div className="boot-splash" aria-busy={!failed}>
      <div className="boot-label" role="img" aria-label="Vloertaal">
        <LogoMark size={64} variant="full" />
        <span className="boot-word" lang="nl" dir="ltr">vloertaal<span className="boot-dot">.</span></span>
      </div>
      {failed && onRetry && (
        <button type="button" className="boot-retry" onClick={onRetry} aria-label="Try again" title="Try again">
          <RestartIcon size={28} />
        </button>
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
