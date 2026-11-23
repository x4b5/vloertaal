import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A point on the duvet's top face: u from the left front corner along the front, v into the depth (0–1). */
const top = (u: number, v: number): string => `${18 + u * 72 + v * 18} ${62 - v * 25}`;

export default {
  // "het dekbed": the duvet — a thick white quilted duvet, folded double into a soft puffy block: the
  // quilting seams and puffed squares on top, the two rounded folds of the layers in front.
  'w.dekbed': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      {/* The right side */}
      <path d="M86 62L106 37V74Q106 80 100 86L88 100Z" fill={PAL.mist} />
      {/* The two folded layers in front */}
      <rect x="10" y="62" width="82" height="20" rx="10" fill={PAL.paperShade} />
      <rect x="10" y="80" width="82" height="20" rx="10" fill={PAL.paperShade} />
      <path d="M16 72H86M16 90H86" stroke={PAL.mist} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 4" />
      <path d="M16 66Q30 63 46 64M16 84Q30 81 46 82" fill="none" stroke={PAL.white} strokeWidth="2.6" strokeLinecap="round" />
      {/* The quilted top */}
      <path d={`M${top(0, 0)}Q12 62 16 56L32 39Q35 37 40 37H102Q109 37 106 42L92 59Q89 62 84 62Z`} fill={PAL.paper} />
      <path d={`M${top(1 / 3, 0)}L${top(1 / 3, 1)}M${top(2 / 3, 0)}L${top(2 / 3, 1)}M${top(0.02, 0.5)}L${top(0.98, 0.5)}`} stroke={PAL.mist} strokeWidth="2.2" strokeLinecap="round" />
      {[1 / 6, 1 / 2, 5 / 6].flatMap((u) => [0.25, 0.75].map((v) => {
        const [x, y] = top(u - 0.04, v + 0.08).split(' ').map(Number);
        return <ellipse key={`${u}${v}`} cx={x} cy={y} rx="6" ry="2" fill={PAL.white} />;
      }))}
      <Shine d="M24 56L34 44" width={2.6} color={PAL.white} opacity={1} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
