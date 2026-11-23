import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "het draaihek": the turnstile (a gate that turns, for one person at a time) — a steel post cabinet
  // with a dark top, and on its side the round hub with three steel arms, one of them across the way;
  // a blue arrow on the floor shows the way through.
  // Three rounds: the arms turn on the hub, as when someone pushes through.
  'w.draaihek': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={56} cy={104} rx={44} ry={4} />
      <Arrow from={[40, 108]} to={[104, 108]} color={PAL.sky} width={6} head={11} />
      {/* The cabinet */}
      <Shade color={PAL.steel} opacity={1} at={[48, 76, 10, 34]}>
        <rect x="14" y="42" width="38" height="62" rx="4" fill={PAL.mist} />
      </Shade>
      <path d="M12 42L22 32H56L52 42Z" fill={PAL.slate} />
      <rect x="12" y="40" width="42" height="6" rx="2" fill={PAL.slateDark} />
      <rect x="22" y="56" width="14" height="8" rx="2" fill={PAL.slate} />
      <circle cx="29" cy="60" r="2.4" fill={PAL.leaf} />
      <Shine d="M18 50V92" width={2.6} opacity={0.7} />
      {/* The three arms on the hub */}
      <Move kind="turn" turn={-60} at={[56, 62]}>
        <path d="M56 62L106 66M56 62L36 22M56 62L38 100" stroke={PAL.steel} strokeWidth="7" />
        <path d="M60 60L104 63" stroke={PAL.paper} strokeWidth="2.2" opacity=".8" />
      </Move>
      <circle cx="56" cy="62" r="10" fill={PAL.slate} />
      <circle cx="56" cy="62" r="4.5" fill={PAL.slateDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
