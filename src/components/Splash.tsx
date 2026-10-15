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
