import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de portofoon": the two-way radio, the walkie-talkie — a black radio standing up: a thick stubby
  // antenna and a yellow knob on top, a small lit display, a speaker grille, and the talk button on the
  // left side.
  'w.portofoon': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={106} rx={26} ry={4} />
      {/* The antenna and the knob */}
      <rect x="40" y="8" width="10" height="30" rx="5" fill={PAL.slateDark} />
      <rect x="64" y="20" width="10" height="12" rx="3" fill={PAL.yellow} />
      <rect x="70" y="20" width="4" height="12" rx="2" fill={PAL.yellowShade} />
      {/* The talk button on the side */}
      <rect x="32" y="50" width="8" height="22" rx="3" fill={PAL.slateDark} />
      {/* The body */}
      <Shade color={PAL.slateDark} opacity={1} at={[86, 70, 8, 44]}>
        <rect x="36" y="30" width="48" height="76" rx="9" fill={PAL.slate} />
      </Shade>
      <Shine d="M42 40V60" width={3} opacity={0.4} />
      {/* The display */}
      <rect x="46" y="40" width="28" height="15" rx="3" fill={PAL.ice} />
      <rect x="49" y="43" width="12" height="3" rx="1.5" fill={PAL.sky} />
      {/* The speaker grille */}
      <rect x="44" y="62" width="32" height="36" rx="6" fill={PAL.slateDark} />
      <path d="M50 70H70M50 77H70M50 84H70M50 91H70" stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
