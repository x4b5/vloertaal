import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;

export default {
  // "de aanhanger": the trailer — an open box trailer with grey steel sides on one wheel, a drawbar with a
  // coupling to the left, red lights at the back, and a load of green branches sticking out of it.
  'w.aanhanger': () => {
    const d = 22;
    const ox = r1(d * DX);
    const oy = r1(d * DY);
    return (
      <g strokeLinejoin="round">
        <Ground cx={60} cy={104} rx={52} ry={4} />
        {/* The drawbar, the coupling and the small jockey wheel */}
        <path d="M24 82L6 90" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
        <circle cx="8" cy="89" r="4.4" fill={PAL.slateDark} />
        <path d="M16 86V98" stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" />
        <circle cx="16" cy="100" r="3.6" fill={PAL.ink} />
        {/* The inside of the box (behind the load) */}
        <path d={`M22 56H100L${100 + ox} ${56 + oy}H${22 + ox}Z`} fill={PAL.slate} />
        {/* The load of branches */}
        <path d="M30 56L20 34M44 56L40 24M64 56L70 22M84 56L98 30" stroke={PAL.cardDark} strokeWidth="3.4" strokeLinecap="round" />
        <circle cx="24" cy="36" r="10" fill={PAL.greenShade} />
        <circle cx="40" cy="26" r="12" fill={PAL.green} />
        <circle cx="58" cy="34" r="12" fill={PAL.leaf} />
        <circle cx="72" cy="24" r="12" fill={PAL.green} />
        <circle cx="94" cy="32" r="11" fill={PAL.greenShade} />
        <circle cx="82" cy="44" r="10" fill={PAL.leaf} />
        {/* The box: front side and right end */}
        <path d={`M100 56L${100 + ox} ${56 + oy}V${84 + oy}L100 84Z`} fill={PAL.steel} />
        <rect x="22" y="56" width="78" height="28" rx="2" fill={PAL.mist} />
        <path d="M24 70H98" stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" />
        <rect x="22" y="56" width="78" height="4" rx="1.6" fill={PAL.paper} />
        <rect x="92" y="74" width="7" height="6" rx="1.6" fill={PAL.red} />
        <Shine d="M28 64H56" width={2.4} opacity={0.9} />
        {/* The mudguard and the wheel */}
        <path d="M46 86A14 14 0 0 1 74 86Z" fill={PAL.slate} />
        <circle cx="60" cy="92" r="11" fill={PAL.ink} />
        <circle cx="60" cy="92" r="4.4" fill={PAL.steel} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
