import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de beamer": the projector — a white projector box on the right with a big dark lens, throwing a
  // pale beam of light up to the left onto a screen, where a picture (a sun over two hills) shows.
  // On the intro card the lamp goes on: the beam and the picture fade in. Once and slowly (it is switched on once).
  'w.beamer': () => (
    <g strokeLinejoin="round">
      <Ground cx={82} cy={104} rx={28} ry={4} />
      {/* The screen, blank */}
      <rect x="10" y="12" width="56" height="42" rx="2" fill={PAL.paperShade} transform="translate(2 3)" />
      <rect x="10" y="12" width="56" height="42" rx="2" fill={PAL.white} />
      <rect x="8" y="9" width="60" height="5" rx="2.5" fill={PAL.slate} />
      {/* The beam and the picture */}
      <Move kind="show" once>
        <path d="M68 82L10 12H66V54Z" fill={PAL.yellowShine} opacity=".55" />
        <path d="M72 84L14 18L62 50Z" fill={PAL.yellowShine} opacity=".4" />
        <rect x="14" y="16" width="48" height="34" rx="1.5" fill={PAL.ice} />
        <circle cx="48" cy="26" r="5" fill={PAL.yellow} />
        <path d="M14 50L28 34L40 44L48 38L62 50Z" fill={PAL.leaf} />
      </Move>
      {/* The projector */}
      <Shade color={PAL.paperShade} opacity={1} at={[110, 90, 12, 20]}>
        <rect x="58" y="74" width="50" height="28" rx="6" fill={PAL.white} />
      </Shade>
      <rect x="58" y="72" width="50" height="6" rx="3" fill={PAL.mist} />
      <circle cx="70" cy="88" r="10" fill={PAL.slate} />
      <circle cx="70" cy="88" r="6" fill={PAL.slateDark} />
      <circle cx="68" cy="86" r="2" fill={PAL.ice} />
      <path d="M88 86H102M88 92H102" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="62" y="102" width="6" height="3" rx="1" fill={PAL.slate} />
      <rect x="98" y="102" width="6" height="3" rx="1" fill={PAL.slate} />
      <Shine d="M63 79H80" width={2.4} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
