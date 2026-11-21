import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** Copper: the terracotta steps of the palette, and one darker step for the hollow inside. */
const CU = { base: PAL.clay, shade: PAL.clayShade, light: PAL.clayLight, inside: '#8f3a1a' };

/** The pipe lies rising to the top right; local x runs along it, y across it. */
const ANGLE = -26;
const L = 86;
const R = 16;
/** How round the open end looks: its width over its height. */
const END = 0.45;

export default {
  // "de buis": the pipe — one length of copper pipe lying slanted, rising to the top right; the open end
  // at the bottom left faces the viewer, a light rim round the dark hollow inside.
  'w.buis': () => (
    <g>
      <Ground cx={62} cy={102} rx={46} ry={4.5} />
      <g transform={`translate(20 88) rotate(${ANGLE})`}>
        {/* The far end, rounded */}
        <ellipse cx={L} cy={0} rx={R * END} ry={R} fill={CU.shade} />
        {/* The body: base, the shaded underside, the highlight along the top */}
        <rect x={0} y={-R} width={L} height={2 * R} fill={CU.base} />
        <rect x={0} y={R * 0.25} width={L} height={R * 0.75} fill={CU.shade} />
        <Shine d={`M${R * 1.2} ${-R + 4.5}H${L - 8}`} color={PAL.white} width={3.6} opacity={0.6} />
        {/* The open end: the light cut rim and the dark hollow */}
        <ellipse cx={0} cy={0} rx={R * END} ry={R} fill={CU.light} />
        <ellipse cx={0.6} cy={0.4} rx={R * END - 2.6} ry={R - 3.4} fill={CU.inside} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
