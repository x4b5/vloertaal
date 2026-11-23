import type { JSX } from 'react';
import { Hand, PAL, SKIN, Shine } from '../kit';

export default {
  // "het alarmnummer": the emergency number (112) — a hand holds a phone; on its screen the keypad, with
  // the keys of 1 and 2 (the top left and the top middle) lit red, and a big green call button; above it a
  // blue emergency light shines (police, fire brigade, ambulance). No digits: the keys show it.
  'w.alarmnummer': () => {
    const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
      const x = 39 + (i % 3) * 12;
      const y = 44 + Math.floor(i / 3) * 11;
      const hot = i === 0 || i === 1;
      return <rect key={i} x={x} y={y} width="9" height="8" rx="2.4" fill={hot ? PAL.red : PAL.mist} />;
    });
    return (
      <g strokeLinejoin="round">
        {/* The emergency light */}
        <path d="M94 6V12M80 12L84 16M108 12L104 16" stroke={PAL.sky} strokeWidth="3.2" strokeLinecap="round" />
        <path d="M84 34V26Q84 17 94 17Q104 17 104 26V34Z" fill={PAL.sky} />
        <path d="M96 17Q104 18 104 26V34H96Z" fill={PAL.skyShade} />
        <path d="M88 27Q88 22 92 21" fill="none" stroke={PAL.ice} strokeWidth="2.6" strokeLinecap="round" />
        <rect x="80" y="33" width="28" height="7" rx="2.5" fill={PAL.slate} />
        {/* The hand holding the phone */}
        <Hand pose="hold" x={58} y={114} scale={1.05} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
        <rect x="32" y="26" width="46" height="80" rx="8" fill={PAL.slateDark} />
        <rect x="35" y="32" width="40" height="66" rx="4" fill={PAL.paper} />
        {keys}
        <rect x="43" y="80" width="24" height="12" rx="6" fill={PAL.ok} />
        <path d="M50 88Q50 82 55 82Q60 82 60 88" fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" />
        <rect x="50" y="28" width="10" height="2" rx="1" fill={PAL.slate} />
        <Shine d="M38 36V50" width={2.6} opacity={0.7} />
        {/* The fingers in front of the phone */}
        <rect x="26" y="78" width="12" height="7" rx="3.5" fill={SKIN.henk[0]} />
        <rect x="27" y="87" width="11" height="7" rx="3.5" fill={SKIN.henk[0]} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
