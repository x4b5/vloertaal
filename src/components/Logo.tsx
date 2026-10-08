import { useId } from 'react';

/**
 * The Vloertaal logo: a black rubber stamp on safety yellow, slightly tilted, with
 * "VLOERTAAL · NEDERLANDS VOOR HET WERK" around a V. Small sizes (under 56px) drop the
 * ring text and thicken the ring so it stays sharp. LogoMark is the app icon; Wordmark is
 * the name. Keep in sync with public/icon.svg (the small version) and the PNG icons.
 * `check` is kept for older call sites and no longer changes the mark.
 */
export function LogoMark({ size = 40 }: { size?: number; check?: boolean }) {
  const ring = `ring-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const full = size >= 56;
  return (
    <svg className="logo-mark" viewBox="0 0 120 120" width={size} height={size} aria-hidden focusable="false">
      <rect width="120" height="120" rx="28" fill="#ffc414" />
      <g transform="rotate(-10 60 60)" fill="#1e2226" stroke="#1e2226">
        {full ? (
          <>
            <circle cx="60" cy="60" r="44" fill="none" strokeWidth="6" />
            <circle cx="60" cy="60" r="31" fill="none" strokeWidth="2.5" />
            <path id={ring} d="M60 60m-36.2 0a36.2 36.2 0 1 1 72.4 0a36.2 36.2 0 1 1-72.4 0" fill="none" stroke="none" />
            <text fontFamily="'Lexend Variable', Lexend, system-ui, sans-serif" fontWeight={800} fontSize="6.6" letterSpacing="1.25" stroke="none">
              <textPath href={`#${ring}`} startOffset="2%">VLOERTAAL · NEDERLANDS VOOR HET WERK ·</textPath>
            </text>
            <path d="M43 41h11l6 20 6-20h11L66 79H54z" stroke="none" />
          </>
        ) : (
          <>
            <circle cx="60" cy="60" r="42" fill="none" strokeWidth="9" />
            <path d="M38 36h14l8 26 8-26h14L68 86H52z" stroke="none" />
          </>
        )}
      </g>
    </svg>
  );
}

/** "vloertaal." in ink (white in dark mode) with a yellow full stop. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark ${className ?? ''}`} aria-label="Vloertaal">
      vloertaal<span className="wordmark-dot">.</span>
    </span>
  );
}
