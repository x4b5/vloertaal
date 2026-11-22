import type { JSX } from 'react';
import { Ground, Move, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as in group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The light top of a cardboard box, one step above PAL.card (as LIGHT_WOOD in group56). */
const CARD_TOP = '#f0c48a';

const pts = (p: [number, number][]) => p.map(([a, b]) => `${r1(a)},${r1(b)}`).join(' ');

/** The closed box: front x BX..BX+BW, top edge at BY, bottom at the ground, depth BD. */
const BX = 12;
const BW = 78;
const BY = 82;
const BB = 104;
const BD = 18;
/** A point on the box top at x (along the front) and depth d. */
const top = (x: number, d: number): [number, number] => [x + d * DX, BY + d * DY];

/** The seam where the two flaps meet runs along the middle of the top; the tape is 8 deep. */
const SEAM = BD / 2;
const T0 = SEAM - 4;
const T1 = SEAM + 4;

/** The gun stands on the seam: its roller, the big roll above it, the grip behind. */
const ROLLER: [number, number] = [46, 69.5];
const ROLL: [number, number] = [61, 42];
const R = 20;
const CORE = 10;
/** The roll's width (its tape surface shows on the top right). */
const ROLL_W = 9;

/** The roll's tape surface: the back circle and the band joining it to the front one. */
const rollBand = () => {
  const ox = ROLL_W * DX;
  const oy = ROLL_W * DY;
  const nx = 0.8 * R;
  const ny = 0.6 * R;
  const [cx, cy] = ROLL;
  return (
    <g>
      <circle cx={cx + ox} cy={cy + oy} r={R} fill={PAL.cardShade} />
      <polygon points={pts([[cx + nx, cy + ny], [cx - nx, cy - ny], [cx - nx + ox, cy - ny + oy], [cx + nx + ox, cy + ny + oy]])} fill={PAL.cardShade} />
    </g>
  );
};

/** The serrated blade in front of the roller: a steel strip with five teeth pointing down. */
const teeth = () => {
  const x0 = 31;
  const y0 = 68;
  const step = 3.4;
  const d = Array.from({ length: 4 }, (_, i) => {
    const a = x0 + i * step;
    return `L${r1(a + step / 2)} ${y0 + 4}L${r1(a + step)} ${y0}`;
  }).join('');
  return `M${x0} ${y0}${d}V${y0 - 5}H${x0}Z`;
};

export default {
  // "het tapepistool": the tape gun — a big roll of brown tape on a dark frame with a red pistol
  // grip, standing on the seam of a closed box; the tape runs from the roll under the roller past
  // the steel teeth and lies as a brown strip along the seam behind it.
  'w.tapepistool': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={104} rx={46} ry={4} />
      {/* The closed box: its shaded right side, the light top, the front */}
      <polygon points={pts([[BX + BW, BB], [BX + BW, BY], top(BX + BW, BD), [BX + BW + BD * DX, BB + BD * DY]])} fill={PAL.cardShade} />
      <polygon points={pts([[BX, BY], [BX + BW, BY], top(BX + BW, BD), top(BX, BD)])} fill={CARD_TOP} />
      <rect x={BX} y={BY} width={BW} height={BB - BY} fill={PAL.card} />
      {/* The open seam ahead of the gun, and the tape already laid along it behind */}
      <path d={`M${top(ROLLER[0], SEAM).join(' ')}L${top(BX + BW, SEAM).join(' ')}`} stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      <Move kind="grow" grow={0.15}>
        <polygon points={pts([top(BX, T0), top(ROLLER[0] + 2, T0), top(ROLLER[0] + 2, T1), top(BX, T1)])} fill={PAL.cardDark} />
      </Move>
      {/* (The gun runs along the seam from the left and lays the tape behind it.) */}
      <Move kind="from" dx={-30}>
      {/* The frame: a dark arm from the roller up to the hub and back to the grip, and a brace over the
          top that closes the handle into a loop */}
      <path d={`M${ROLLER[0]} ${ROLLER[1]}L${ROLL[0]} ${ROLL[1]}L86 52`} fill="none" stroke={PAL.slate} strokeWidth="9" strokeLinecap="round" />
      <path d="M99 25L70 21" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      {/* The red pistol grip, its right side in shade */}
      <path d="M86 52L99 27" stroke={PAL.red} strokeWidth="13" strokeLinecap="round" />
      <path d="M91 52.5L102.5 30" stroke={PAL.redShade} strokeWidth="5" strokeLinecap="round" />
      <Shine d="M87 43L95 28" width={2.6} opacity={0.5} />
      {/* The tape running down from the roll to the roller */}
      <path d={`M${ROLL[0] - R + 1} ${ROLL[1] + 4}L${ROLLER[0] - 4} ${ROLLER[1]}`} stroke={PAL.cardDark} strokeWidth="4.5" strokeLinecap="round" />
      {/* The roller and the serrated blade */}
      <path d={teeth()} fill={PAL.steel} />
      <circle cx={ROLLER[0]} cy={ROLLER[1]} r="5" fill={PAL.slate} />
      <circle cx={ROLLER[0]} cy={ROLLER[1]} r="2" fill={PAL.steel} />
      {/* The roll of brown tape: its surface, the face, the cardboard core and the hub */}
      {rollBand()}
      <circle cx={ROLL[0]} cy={ROLL[1]} r={R} fill={PAL.cardDark} />
      <circle cx={ROLL[0]} cy={ROLL[1]} r={CORE} fill={CARD_TOP} />
      <circle cx={ROLL[0]} cy={ROLL[1]} r="5.5" fill={PAL.slate} />
      <circle cx={ROLL[0] - 1} cy={ROLL[1] - 1} r="2" fill={PAL.steel} />
      <Shine d={`M${ROLL[0] - 16} ${ROLL[1] - 3}A16 16 0 0 1 ${ROLL[0] - 4} ${ROLL[1] - 15.5}`} width={3} opacity={0.45} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
