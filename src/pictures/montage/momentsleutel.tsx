import type { JSX } from 'react';
import { CurveArrow, Ground, Motion, Move, PAL, Shade, Shine, r1 } from '../kit';

/** The wrench lies along a line rising to the top right; its local origin is the centre of the ring head. */
const TURN = 'translate(30 80) rotate(-36)';
/** The hex nut in the head (local), its corners. */
const HEX = Array.from({ length: 6 }, (_, i) => {
  const t = ((30 + i * 60) * Math.PI) / 180;
  return `${r1(7.4 * Math.cos(t))},${r1(7.4 * Math.sin(t))}`;
}).join(' ');

export default {
  // "de momentsleutel": the torque wrench — a long chrome wrench rising to the top right: its ring head on a hex nut at the
  // bottom left, a light scale window with tick marks on the handle, a red grip at the top right; a curved arrow turns
  // round the nut and short lines by the scale stand for the click.
  'w.momentsleutel': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={44} ry={4} />
      {/* The turning arrow round the nut */}
      <CurveArrow from={[12, 92]} to={[20, 58]} bend={-14} color={PAL.sky} width={6} head={10} />
      {/* The wrench turns round the nut into place */}
      <Move kind="turn" turn={-28} at={[30, 80]}>
      <g transform={TURN}>
        {/* The shaft: its underside in shade */}
        <rect x="6" y="-4" width="52" height="9.5" rx="3" fill={PAL.slate} />
        <rect x="6" y="-4.5" width="52" height="8" rx="3" fill={PAL.steel} />
        {/* The ring head round the nut */}
        <Shade color={PAL.steel} opacity={1} at={[10, 8, 10, 10]}>
          <circle cx="0" cy="0" r="14" fill={PAL.mist} />
        </Shade>
        <circle cx="0" cy="0" r="9.5" fill={PAL.slateDark} />
        <polygon points={HEX} fill={PAL.paperShade} />
        <circle cx="0" cy="0" r="3.2" fill={PAL.steel} />
        {/* The scale tube, its window and the tick marks */}
        <Shade color={PAL.steel} opacity={1} at={[52, 10, 26, 6]}>
          <rect x="38" y="-8" width="32" height="16" rx="4" fill={PAL.mist} />
        </Shade>
        <rect x="42" y="-4.6" width="24" height="9.2" rx="2" fill={PAL.paper} />
        <path d="M45 -4.6V2.6M50 -4.6V-0.4M55 -4.6V2.6M60 -4.6V-0.4M65 -4.6V2.6" stroke={PAL.slate} strokeWidth="1.4" strokeLinecap="butt" />
        <path d="M43 3.2H63" stroke={PAL.red} strokeWidth="1.8" strokeLinecap="round" />
        {/* The red grip with its ribs and the end cap */}
        <rect x="70" y="-9" width="28" height="18" rx="7" fill={PAL.redShade} />
        <rect x="70" y="-9" width="27" height="15.5" rx="7" fill={PAL.red} />
        <path d="M77 -6V5M83 -6V5M89 -6V5" stroke={PAL.redShade} strokeWidth="1.6" strokeLinecap="round" />
        <rect x="96" y="-6" width="6" height="12" rx="2.5" fill={PAL.slate} />
        <Shine d="M18 -2.4H34" width={2.4} opacity={0.8} />
        <Shine d="M73 -5.6H93" width={2.6} opacity={0.55} />
      </g>
      </Move>
      {/* The click: short lines above the scale */}
      <Move kind="show">
        <Motion x={70} y={44} dir={-110} spread={70} n={3} len={7} gap={9} color={PAL.line} width={3} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;

