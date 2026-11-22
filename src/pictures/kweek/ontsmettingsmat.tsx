import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The depth axis of the slanted view: one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The tray: front-left corner of its top, width, depth and rim height. */
const X = 12;
const Y = 96;
const W = 80;
const D = 30;
const H = 6;
const ox = D * DX;
const oy = D * DY;

export default {
  // "de ontsmettingsmat": the disinfection mat — a wet blue mat in a shallow grey tray on the floor in
  // front of an open doorway, with a green rubber boot stepping onto it and small splashes.
  'w.ontsmettingsmat': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={50} ry={4} />
      {/* The door frame behind, with the light of the opening */}
      <rect x="28" y="12" width="64" height="76" rx="2" fill="#e3f5ff" />
      <path d="M28 88V12H92V88" fill="none" stroke={PAL.steel} strokeWidth="7" strokeLinejoin="round" />
      <path d="M95 88V15" stroke={PAL.slate} strokeWidth="2" opacity=".5" />
      {/* The tray: front rim, then the top with its rim and the blue liquid */}
      <path d={`M${X} ${Y}H${X + W}V${Y + H}H${X}Z`} fill={PAL.steel} />
      <path d={`M${X + W} ${Y}L${X + W + ox} ${Y + oy}V${Y + oy + H}L${X + W} ${Y + H}Z`} fill={PAL.slate} />
      <path d={`M${X} ${Y}H${X + W}L${X + W + ox} ${Y + oy}H${X + ox}Z`} fill={PAL.mist} />
      <path d={`M${X + 4} ${Y - 2}H${X + W - 3}L${X + W + ox - 4} ${Y + oy + 2}H${X + ox + 3}Z`} fill={PAL.sky} />
      {/* The wet shine on the liquid, and ripples round the sole */}
      <path d="M22 92L34 82M84 84L96 74" stroke={PAL.ice} strokeWidth="2.8" strokeLinecap="round" />
      <ellipse cx="60" cy="84" rx="27" ry="5.5" fill="none" stroke={PAL.ice} strokeWidth="1.8" />
      {/* The boot: shaft, foot and the dark sole on the mat */}
      <g transform="translate(62 84) scale(0.82) translate(-60 -88)">
      <Shade color={PAL.greenShade} opacity={1} at={[76, 60, 12, 40]}>
        <path d="M42 36H66V68C66 72 70 74 76 75C82 76 84 80 84 84V86H38V40C38 37 40 36 42 36Z" fill={PAL.green} />
      </Shade>
      <rect x="40" y="33" width="28" height="7" rx="2.5" fill={PAL.greenShade} />
      <rect x="36" y="84" width="50" height="5" rx="2.2" fill={PAL.slateDark} />
      <Shine d="M44 46V64" color={PAL.white} width={3.4} opacity={0.5} />
      </g>
      {/* Splashes */}
      <path d="M34 76L30 70M92 74L97 69M38 72L36 66" stroke={PAL.sky} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
