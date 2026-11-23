import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "verstoppen": to hide — a red shopping basket; a hand pulls a grey jacket over a yellow box in it,
  // so that nobody sees the box (only its corner still peeks out); a small badge with a struck-out eye:
  // nobody can see it.
  // On the intro card the hand pulls the jacket over the box. Once (it is hidden once).
  'w.verstoppen': () => (
    <g strokeLinejoin="round">
      <ellipse cx="60" cy="106" rx="44" ry="4" fill="#000" opacity=".14" />
      {/* The basket's back */}
      <path d="M18 60H102L98 66H22Z" fill={PAL.redShade} />
      {/* The box inside */}
      <rect x="62" y="40" width="30" height="28" rx="2" fill={PAL.yellow} />
      <rect x="84" y="40" width="8" height="28" rx="2" fill={PAL.yellowShade} />
      <Shine d="M66 44H78" color={PAL.yellowShine} width={2.6} opacity={0.8} />
      {/* The jacket pulled over it, a sleeve hanging down */}
      <Move kind="from" dx={-28} once>
        <path d="M14 68Q16 46 40 42L74 40Q86 42 86 56L84 68Z" fill={PAL.green} />
        <path d="M74 40Q86 42 86 56L84 68H76Z" fill={PAL.greenShade} />
        <path d="M24 46Q34 40 44 44L40 52Q32 48 26 54Z" fill={PAL.greenShade} />
        <path d="M48 42V68" stroke={PAL.paper} strokeWidth="2.6" strokeLinecap="round" />
        <rect x="28" y="58" width="12" height="9" rx="2" fill={PAL.greenShade} />
        <path d="M18 64Q14 78 22 90" stroke={PAL.green} strokeWidth="10" strokeLinecap="round" fill="none" />
        <Shine d="M20 58Q22 50 30 47" width={3} opacity={0.45} />
        <Hand pose="fist" x={72} y={22} rotate={150} scale={0.6} skin={SKIN.jada} sleeve={[PAL.purple, PAL.purpleShade]} />
      </Move>
      {/* The basket's front */}
      <Shade color={PAL.redShade} opacity={1} at={[106, 84, 16, 30]}>
        <path d="M14 66H106L98 104H22Z" fill={PAL.red} />
      </Shade>
      <g fill={PAL.redShade}>
        <rect x="28" y="76" width="12" height="6" rx="2" />
        <rect x="46" y="76" width="12" height="6" rx="2" />
        <rect x="64" y="76" width="12" height="6" rx="2" />
        <rect x="82" y="76" width="10" height="6" rx="2" />
        <rect x="30" y="88" width="12" height="6" rx="2" />
        <rect x="48" y="88" width="12" height="6" rx="2" />
        <rect x="66" y="88" width="12" height="6" rx="2" />
        <rect x="83" y="88" width="9" height="6" rx="2" />
      </g>
      <Shine d="M20 70H42" width={3} opacity={0.5} />
      {/* Nobody sees it */}
      <circle cx="26" cy="24" r="15" fill={PAL.paperShade} />
      <circle cx="26" cy="22" r="15" fill={PAL.white} />
      <path d="M15 22Q26 12 37 22Q26 32 15 22Z" fill={PAL.slate} />
      <circle cx="26" cy="22" r="4" fill={PAL.white} />
      <path d="M16 32L36 12" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
