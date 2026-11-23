import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de naald": the needle — a used syringe lying on the ground, at a slant: a clear barrel with grey marks, the
  // dark plunger at one end and the long thin steel needle at the other, bare; its orange cap lies loose beside it.
  'w.naald': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={100} rx={48} ry={5} />
      <g transform="rotate(-28 60 64)">
        {/* The needle */}
        <path d="M94 64H118" stroke={PAL.steel} strokeWidth="2.6" />
        <rect x="88" y="60" width="8" height="8" rx="1.6" fill={PAL.slate} />
        {/* The barrel */}
        <rect x="34" y="54" width="56" height="20" rx="4" fill={PAL.ice} />
        <rect x="34" y="66" width="56" height="8" rx="3" fill={PAL.blueLight} />
        <rect x="52" y="57" width="36" height="14" rx="2" fill={PAL.sky} opacity=".55" />
        <path d="M44 54V60M52 54V62M60 54V60M68 54V62M76 54V60" stroke={PAL.slate} strokeWidth="1.6" />
        <rect x="30" y="48" width="6" height="32" rx="2" fill={PAL.mist} />
        {/* The plunger */}
        <rect x="12" y="60" width="20" height="8" fill={PAL.slate} />
        <rect x="6" y="52" width="7" height="24" rx="2.5" fill={PAL.slateDark} />
        <Shine d="M40 57H82" width={2.6} opacity={0.8} />
      </g>
      {/* The cap, loose on the ground */}
      <rect x="66" y="88" width="24" height="8" rx="4" fill={PAL.orange} transform="rotate(8 78 92)" />
      <rect x="66" y="92" width="24" height="4" rx="2" fill={PAL.orangeShade} transform="rotate(8 78 92)" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
