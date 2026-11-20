import type { JSX } from 'react';
import { Ground, PAL, Shine, r1 } from '../kit';

/** The depth axis of the slanted view (as in group55): one unit of depth goes this far right and up. */
const DX = 0.6;
const DY = -0.8;
/** The grease: a darker step of the hard-hat yellow, yellow-brown, and one step darker for its shade. */
const GREASE = PAL.yellowShade;
const GREASE_SHADE = '#b98a00';

const pts = (p: [number, number][]) => p.map(([a, b]) => `${r1(a)},${r1(b)}`).join(' ');

/** The bearing block: front x BX..BX+BW, top edge at BY, bottom at the ground, depth BD. */
const BX = 16;
const BW = 38;
const BY = 82;
const BB = 104;
const BD = 12;
const top = (x: number, d: number): [number, number] => [x + d * DX, BY + d * DY];
/** The grease nipple stands in the middle of the block's top. */
const [NX, NY] = top(BX + BW / 2, BD / 2);

/** The grease gun lies level above it: the head over the nipple, the long tube to the right. */
const AXIS = 40;
const R = 11;
const HEAD_X = NX - 11;
const TUBE_X = HEAD_X + 21;
const TUBE_END = 98;

export default {
  // "het smeerpistool": the grease gun — a long blue tube with a dark head and a long lever over it,
  // a T-handle at the back; from the head a short steel pipe goes down to the nipple on a steel
  // bearing block, and yellow-brown grease swells out around the nozzle.
  'w.smeerpistool': () => (
    <g strokeLinejoin="round">
      <Ground cx={40} cy={104} rx={30} ry={4} />
      {/* The bearing block: its shaded right side, the light top, the front with the shaft end */}
      <polygon points={pts([[BX + BW, BB], [BX + BW, BY], top(BX + BW, BD), [BX + BW + BD * DX, BB + BD * DY]])} fill={PAL.slate} />
      <polygon points={pts([[BX, BY], [BX + BW, BY], top(BX + BW, BD), top(BX, BD)])} fill={PAL.mist} />
      <rect x={BX} y={BY} width={BW} height={BB - BY} fill={PAL.steel} />
      <circle cx={BX + BW / 2} cy={94} r="7" fill={PAL.mist} />
      <circle cx={BX + BW / 2} cy={94} r="3.2" fill={PAL.slate} />
      {/* The nipple on top of the block */}
      <rect x={NX - 3.5} y={NY - 6} width="7" height="6" rx="1" fill={PAL.slateDark} />
      {/* The short steel pipe down from the head, and the dark coupler on the nipple */}
      <path d={`M${NX} ${AXIS + R}V${NY - 12}`} stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <rect x={NX - 5.5} y={NY - 20} width="11" height="12" rx="2.5" fill={PAL.steel} />
      {/* The grease swelling out around the nozzle */}
      <path
        d={`M${NX - 10} ${NY - 4}Q${NX - 11} ${NY - 10} ${NX - 5} ${NY - 10}H${NX + 5}Q${NX + 11} ${NY - 10} ${NX + 10} ${NY - 4}Q${NX + 9} ${NY - 1} ${NX} ${NY - 1}Q${NX - 9} ${NY - 1} ${NX - 10} ${NY - 4}Z`}
        fill={GREASE}
      />
      <path d={`M${NX + 3} ${NY - 2}Q${NX + 9} ${NY - 2} ${NX + 10} ${NY - 5}`} stroke={GREASE_SHADE} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d={`M${NX - 7} ${NY - 6}Q${NX - 6} ${NY - 8.5} ${NX - 3} ${NY - 8.5}`} stroke={PAL.yellowLight} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* The long tube (grease barrel): base, the dark underside, the light top */}
      <rect x={TUBE_X} y={AXIS - R} width={TUBE_END - TUBE_X} height={2 * R} rx="3" fill={PAL.blue} />
      <rect x={TUBE_X} y={AXIS + R - 7} width={TUBE_END - TUBE_X} height="7" rx="3" fill={PAL.blueShade} />
      <Shine d={`M${TUBE_X + 6} ${AXIS - R + 4.5}H${TUBE_END - 10}`} width={3} opacity={0.55} />
      {/* The steel end cap and the plunger rod with its T-handle */}
      <path d={`M${TUBE_END + 4} ${AXIS}H${TUBE_END + 9}`} stroke={PAL.steel} strokeWidth="3.5" strokeLinecap="round" />
      <path d={`M${TUBE_END + 10} ${AXIS - 8}V${AXIS + 8}`} stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <rect x={TUBE_END - 2} y={AXIS - R - 2} width="6" height={2 * R + 4} rx="2.5" fill={PAL.slate} />
      {/* The cast steel head over the nipple, its right part in shade, and the dark collar */}
      <rect x={HEAD_X} y={AXIS - R - 3} width={TUBE_X - HEAD_X + 2} height={2 * R + 6} rx="4" fill={PAL.mist} />
      <rect x={HEAD_X + 13} y={AXIS - R - 3} width={TUBE_X - HEAD_X - 11} height={2 * R + 6} rx="2" fill={PAL.steel} />
      <rect x={TUBE_X - 2} y={AXIS - R - 2} width="6" height={2 * R + 4} rx="2.5" fill={PAL.slate} />
      {/* The long lever: hinged on the head, running back over the tube */}
      <path d={`M${HEAD_X + 2} ${AXIS - R - 2}L${HEAD_X + 6} ${AXIS - R - 9}`} stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d={`M${HEAD_X + 6} ${AXIS - R - 9}L${TUBE_END - 4} ${AXIS - R - 19}`} stroke={PAL.steel} strokeWidth="6" strokeLinecap="round" />
      <path d={`M${TUBE_END - 30} ${AXIS - R - 13.6}L${TUBE_END - 4} ${AXIS - R - 19}`} stroke={PAL.blueShade} strokeWidth="8" strokeLinecap="round" />
      <circle cx={HEAD_X + 6} cy={AXIS - R - 9} r="3.4" fill={PAL.slate} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
