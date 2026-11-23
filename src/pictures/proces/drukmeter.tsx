import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine, r1 } from '../kit';

/** The gauge: centre and radius. The scale runs 270 degrees, from the bottom left (low) to the bottom right (high). */
const CX = 60;
const CY = 48;
const R = 34;
/** A point at `deg` degrees (0 = right, -90 = up) and radius r from the centre. */
const p = (deg: number, r: number) => `${r1(CX + Math.cos((deg * Math.PI) / 180) * r)} ${r1(CY + Math.sin((deg * Math.PI) / 180) * r)}`;
/** Where the needle points: high, but still short of the red zone. */
const NEEDLE = -40;

export default {
  // "de drukmeter": the pressure gauge — a round gauge on a short stem on a steel pipe: a white dial with
  // tick marks, a red zone at the high end and a black needle standing high, just short of the red.
  // On the intro card the needle swings up from low to its value (three rounds: a gauge at work).
  'w.drukmeter': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={106} rx={48} ry={3.5} />
      {/* The pipe, with a flange on each side of the tee */}
      <rect x="8" y="86" width="104" height="16" rx="3" fill={PAL.steel} />
      <rect x="8" y="96" width="104" height="6" rx="2" fill={PAL.slate} opacity=".55" />
      <Shine d="M12 89.5H108" width={2.6} opacity={0.6} />
      <rect x="44" y="82" width="6" height="24" rx="2" fill={PAL.slate} />
      <rect x="70" y="82" width="6" height="24" rx="2" fill={PAL.slate} />
      {/* The stem and its hex nut */}
      <rect x="55" y="74" width="10" height="13" fill={PAL.steel} />
      <path d="M51 76H69L67 82H53Z" fill={PAL.slate} />
      {/* The gauge: rim, dial */}
      <Shade color={PAL.slate} opacity={1} at={[CX + R * 1.2, CY, R * 0.55, R * 1.3]}>
        <circle cx={CX} cy={CY} r={R} fill={PAL.steel} />
      </Shade>
      <Shade color={PAL.paperShade} opacity={1} at={[CX + R, CY, R * 0.45, R]}>
        <circle cx={CX} cy={CY} r={R - 6} fill={PAL.white} />
      </Shade>
      {/* The red zone at the high end, and the tick marks */}
      <path d={`M${p(-10, 22)}A22 22 0 0 1 ${p(45, 22)}`} fill="none" stroke={PAL.red} strokeWidth="6" strokeLinecap="butt" />
      {[135, 180, 225, 270, 315].map((d) => (
        <path key={d} d={`M${p(d, 18)}L${p(d, 24)}`} stroke={PAL.ink} strokeWidth="2.4" />
      ))}
      {/* The needle swings up to its value */}
      <Move kind="turn" turn={-120} at={[CX, CY]}>
        <path d={`M${p(NEEDLE + 180, 6)}L${p(NEEDLE, 22)}`} stroke={PAL.ink} strokeWidth="4" />
      </Move>
      <circle cx={CX} cy={CY} r="4.5" fill={PAL.ink} />
      <Shine d={`M${p(200, R - 3)}A${R - 3} ${R - 3} 0 0 1 ${p(245, R - 3)}`} width={3} opacity={0.7} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
