import { useId } from 'react';
import { CastHead, SOLID_V, type CharacterId } from './Characters';

/**
 * The Vloertaal logo: Bram, the mascot, on ink. His yellow hard hat carries a bold stencil V
 * (the V of Vloertaal; he wears it on his hat in every lesson too).
 *
 *  - `full` (56 px and up, and the 192/512 app icons): Bram's own head from the lessons
 *    (CastHead, calm closed smile), with the neck and the hi-vis collar at the bottom edge.
 *  - `small` (under 56 px: top bar, favicon): a drawing of its own for small sizes, not the head
 *    scaled down. The hat and the V fill the top half, the face is a plain shape with two eyes
 *    and a smile, and the V has no bridge gap (it would only blur at 16 px).
 *
 * `shape`: 'round' is the app icon with rounded corners; 'square' fills the whole square (the
 * phone rounds it: apple-touch-icon); 'mask' also keeps everything inside the middle 80 %
 * (Android's maskable icon). public/icon*.svg and the PNG icons are made from this file:
 * `node scripts/icons/make-icons.cjs` (dev server on :5173). Keep index.html's splash in step.
 * `check` is kept for older call sites and no longer changes the mark.
 * `who`: another cast member in the same frame (the start screen shows all four); always `full`.
 */
export function LogoMark({ size = 40, variant, shape = 'round', who = 'bram' }: {
  size?: number;
  check?: boolean;
  variant?: 'full' | 'small';
  shape?: 'round' | 'square' | 'mask';
  who?: CharacterId;
}) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const full = who !== 'bram' || (variant ?? (size >= 56 ? 'full' : 'small')) === 'full';
  const clip = `logo-${id}`;
  return (
    <svg className="logo-mark" viewBox="0 0 120 120" width={size} height={size} aria-hidden focusable="false">
      <defs>
        <clipPath id={clip}><rect width="120" height="120" rx={shape === 'round' ? 28 : 0} /></clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="120" height="120" fill="#1e2226" />
        <g transform={shape === 'mask' ? 'translate(12 14) scale(.8)' : undefined}>
          {full ? <FullBust who={who} vest={`${clip}-vest`} /> : <SmallBram />}
        </g>
      </g>
    </svg>
  );
}

const VEST = 'M30 150L31 104Q32.5 94 43 91H77Q87.5 94 89 104L90 150Z';

/** A cast member's bust from the lessons (Bram: the logo), scaled up so the head fills the icon. */
function FullBust({ who, vest }: { who: CharacterId; vest: string }) {
  return (
    <>
      {/* Hi-vis vest and the blue shirt collar, cut off by the bottom edge. */}
      <g transform="translate(-24 -20.2) scale(1.4)">
        <clipPath id={vest}><path d={VEST} /></clipPath>
        <path d={VEST} fill="#ff7a00" />
        <path d="M51 90H69L60 105Z" fill="#1a86d8" />
        <path d="M52 91L60 97.5L56 101ZM68 91L60 97.5L64 101Z" fill="#5fb8f5" />
        <path d="M44.5 95V150M75.5 95V150" stroke="#eef5f7" strokeWidth="4" />
        <path d="M79 88L104 88L104 150L82 150Z" fill="#000" opacity=".13" clipPath={`url(#${vest})`} />
        <CastHead who={who} expr="pleased" />
      </g>
    </>
  );
}

/** The small-size drawing: a big hat with a big V over a plain face. */
function SmallBram() {
  return (
    <>
      {/* Neck and collar */}
      <path d="M50 100H70V120H50Z" fill="#e2a376" />
      <path d="M22 120Q24 110 36 108L50 106L60 116L70 106L84 108Q96 110 98 120Z" fill="#ff7a00" />
      {/* Ears and face */}
      <rect x="25.5" y="66" width="10" height="17" rx="4.5" fill="#f7c49b" />
      <rect x="84.5" y="66" width="10" height="17" rx="4.5" fill="#e2a376" />
      <path d="M30 58H90V80C90 98 76 109 60 109C44 109 30 98 30 80Z" fill="#f7c49b" />
      <path d="M76 58H90V80C90 92 84 101 75 105.6C78 98 79 90 79 80V58Z" fill="#e2a376" />
      {/* Eyes and a closed smile */}
      <ellipse cx="48.5" cy="77" rx="4" ry="4.8" fill="#2a2321" />
      <ellipse cx="71.5" cy="77" rx="4" ry="4.8" fill="#2a2321" />
      <path d="M50.5 92.5Q60 99 69.5 91.5" fill="none" stroke="#2a2321" strokeWidth="3.6" strokeLinecap="round" />
      {/* Hard hat: dome, shade, ridge, brim, and the V */}
      <path d="M17 62C17 31 36 11 60 11C84 11 103 31 103 62Z" fill="#ffc414" />
      <path d="M81 16.4C95 24.4 103 41 103 62H90C90 42 87.6 27.4 81 16.4Z" fill="#e0a800" />
      <rect x="10" y="57" width="100" height="10" rx="3" fill="#e0a800" />
      <rect x="10" y="57" width="76" height="3.4" rx="1.7" fill="#ffd94d" />
      <path d={SOLID_V} transform="translate(39 18.6) scale(3)" fill="#1e2226" />
    </>
  );
}

/** While the whole app is a test version (the pilot): a small "bèta" tag beside the wordmark. */
export const APP_BETA = true;

/** "vloertaal." in ink (white in dark mode) with a yellow full stop. Always left to right, isolated
 *  from the page direction: in Arabic or Persian the full stop must not jump to the front (".vloertaal").
 *  With APP_BETA a small "bèta" tag after it, wherever the name is shown (not a button). */
export function Wordmark({ className, beta = APP_BETA }: { className?: string; beta?: boolean }) {
  return (
    <span className={`wordmark ${className ?? ''}`} aria-label={beta ? 'Vloertaal bèta' : 'Vloertaal'} lang="nl" dir="ltr">
      vloertaal<span className="wordmark-dot">.</span>
      {beta && <span className="wordmark-beta" aria-hidden>bèta</span>}
    </span>
  );
}
