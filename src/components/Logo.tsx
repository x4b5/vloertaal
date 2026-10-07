/**
 * The Vloertaal logo: a bold "V" wearing a hard hat, with a check mark
 * (you got it right), on a blue tile. LogoMark is the app icon; Wordmark is
 * the name. Keep in sync with public/icon.svg.
 */
export function LogoMark({ size = 40, check = true }: { size?: number; check?: boolean }) {
  return (
    <svg className="logo-mark" viewBox="0 0 120 120" width={size} height={size} aria-hidden focusable="false">
      <rect width="120" height="120" rx="28" fill="#1cb0f6" />
      <path d="M30 30h18l12 38 12-38h18L70 92H50z" fill="#fff" />
      <path d="M40 24a20 15 0 0 1 40 0z" fill="#ffc800" />
      <rect x="34" y="21" width="52" height="7" rx="3.5" fill="#e5a400" />
      {check && (
        <>
          <circle cx="88" cy="88" r="13" fill="#ff7a00" />
          <path d="M82 88l4 4 8-8" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

/** "vloertaal." in the brand blue with an orange full stop. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark ${className ?? ''}`} aria-label="Vloertaal">
      vloertaal<span className="wordmark-dot">.</span>
    </span>
  );
}
