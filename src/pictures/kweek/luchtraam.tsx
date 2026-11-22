import type { JSX } from 'react';
import { CurveArrow, PAL, Shine } from '../kit';

/** The glass of the panes, and its shaded step. */
const GLASS = PAL.ice;
const GLASS_SHADE = '#6cc6ef';

export default {
  // "het luchtraam": the roof vent — a slanting section of greenhouse glass roof (light blue panes in a
  // grey frame) under the ridge, one pane hinged at the ridge and lifted open, warm air curving out.
  'w.luchtraam': () => (
    <g strokeLinejoin="round">
      {/* The back slope of the roof, behind the ridge */}
      <path d="M26 50L92 50L100 40L34 40Z" fill={GLASS_SHADE} />
      {/* The front slope: glass panes */}
      <path d="M26 50H92L80 102H14Z" fill={GLASS} />
      <path d="M68 50H92L80 102H58Z" fill={GLASS_SHADE} />
      {/* The dark opening where the vent pane lifted away */}
      <path d="M33 52H57L52 74H28Z" fill={PAL.slate} />
      {/* The frame: ridge, bars, the gutter */}
      <path d="M26 50H92M20 76H86M14 102H80M26 50L14 102M59 50L47 102M92 50L80 102" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      <path d="M26 50H92" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      {/* The vent pane, hinged at the ridge and tilted up */}
      <path d="M33 50L57 50L64 28L40 28Z" fill={GLASS} />
      <path d="M33 50L57 50L64 28L40 28Z" fill="none" stroke={PAL.mist} strokeWidth="3.5" />
      <Shine d="M40 44L44 33" width={2.6} opacity={0.9} />
      {/* The warm air coming out */}
      <CurveArrow from={[30, 62]} to={[18, 18]} bend={-14} color={PAL.orange} width={6} head={11} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
