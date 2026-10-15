import { RestartIcon } from './Icons';

/**
 * The calm start screen while a help language's texts load: the same label as the static splash in
 * index.html (ink on kraft, the logo), so nothing jumps when React takes over. With no connection
 * and no saved copy, one button tries again (it also retries by itself when the phone is back online).
 */
export function Splash({ failed = false, onRetry }: { failed?: boolean; onRetry?: () => void }) {
  return (
    <div className="boot-splash" aria-busy={!failed}>
      <div className="boot-label" role="img" aria-label="Vloertaal">
        <svg viewBox="0 0 120 120" width="64" height="64" aria-hidden focusable="false">
          <rect width="120" height="120" rx="28" fill="#ffc414" />
          <g transform="rotate(-10 60 60)" fill="#1e2226">
            <circle cx="60" cy="60" r="42" fill="none" stroke="#1e2226" strokeWidth="9" />
            <path d="M38 36h14l8 26 8-26h14L68 86H52z" />
          </g>
        </svg>
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
