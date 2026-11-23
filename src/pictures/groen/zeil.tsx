import type { JSX } from 'react';
import { Ground, Move, PAL } from '../kit';

/** The tarp's four corners, lying on the ground in the slanted view (the front right corner folded back). */
const EYES: [number, number][] = [[18, 92], [52, 96], [28, 52], [64, 52], [100, 52]];

export default {
  // "het zeil": the tarp — a big blue plastic sheet spread on the ground in a slanted view, a lighter
  // hem round the edge with steel eyelets, a few creases, and the front right corner folded back to
  // show the grey underside.
  // On the intro card the tarp is spread out from the left (once: it is laid down once).
  'w.zeil': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={100} rx={52} ry={4} />
      <Move kind="grow" grow={0.3} once>
        {/* The sheet: back left corner (22, 46), back right (106, 46), front right folded, front left (10, 98) */}
        <path d="M22 46H106L104 72L80 98H10Z" fill={PAL.blue} stroke={PAL.blueLight} strokeWidth="4" />
        {/* Creases */}
        <path d="M32 60L60 66M44 80L74 72M70 54L92 62" stroke={PAL.blueShade} strokeWidth="2.6" />
        {/* The folded-back corner: its grey underside */}
        <path d="M104 72L80 98L110 100Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="3" />
        <path d="M104 72L80 98" stroke={PAL.blueShade} strokeWidth="3" />
        {/* The eyelets */}
        {EYES.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.6" fill="none" stroke={PAL.mist} strokeWidth="2.4" />
        ))}
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
