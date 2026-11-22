import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The screen's dark glass: one step under PAL.slateDark. */
const GLASS = '#1b232a';

export default {
  // "de diagnosecomputer": the diagnostic tester — a rugged handheld tablet with an orange rubber edge,
  // a dark screen with a car and three green bars, and a cable running to a plug in a dark socket.
  'w.diagnosecomputer': () => (
    <g strokeLinejoin="round">
      <Ground cx={56} cy={105} rx={46} ry={4} />
      {/* The socket on the right: a grey panel with the dark hole, the plug pushed in from below */}
      <rect x="80" y="40" width="28" height="22" rx="4" fill={PAL.steel} />
      <path d="M85 46H103L100 56H88Z" fill={PAL.slateDark} />
      {/* The cable: from the tablet's foot along the floor, up into the plug */}
      <path d="M46 96C46 108 94 108 94 78" stroke={PAL.slateDark} strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <rect x="89" y="68" width="10" height="12" rx="2" fill={PAL.slate} />
      <path d="M86 52H102L100 68H88Z" fill={PAL.blue} />
      <path d="M89 56H99" stroke={PAL.blueShade} strokeWidth="1.6" strokeLinecap="round" />
      {/* The tablet: its depth side, then the orange rubber front */}
      <rect x="18" y="14" width="56" height="84" rx="11" fill={PAL.orangeShade} />
      <Shade color={PAL.orangeShade} opacity={1} at={[72, 60, 6, 50]}>
        <rect x="12" y="18" width="56" height="84" rx="11" fill={PAL.orange} />
      </Shade>
      <Shine d="M16 32V56" color={PAL.white} width={3.2} opacity={0.55} />
      {/* The dark face and the screen */}
      <rect x="19" y="25" width="42" height="70" rx="5" fill={PAL.slate} />
      <rect x="22" y="28" width="36" height="44" rx="3" fill={GLASS} />
      {/* The car on the screen */}
      <rect x="27" y="40" width="26" height="8" rx="3" fill={PAL.ice} />
      <path d="M32 40L36 33H45L49 40Z" fill={PAL.ice} />
      <path d="M36.5 39L38.5 35H44L46 39Z" fill={GLASS} />
      <circle cx="33" cy="48" r="3.4" fill={GLASS} />
      <circle cx="33" cy="48" r="2" fill={PAL.ice} />
      <circle cx="47" cy="48" r="3.4" fill={GLASS} />
      <circle cx="47" cy="48" r="2" fill={PAL.ice} />
      {/* Three green bars */}
      <rect x="27" y="56" width="22" height="3.4" rx="1.4" fill={PAL.lime} />
      <rect x="27" y="61.5" width="15" height="3.4" rx="1.4" fill={PAL.lime} />
      <rect x="27" y="67" width="19" height="3.4" rx="1.4" fill={PAL.orangeLight} />
      {/* Two buttons under the screen */}
      <circle cx="31" cy="83" r="4.5" fill={PAL.mist} />
      <circle cx="49" cy="83" r="4.5" fill={PAL.leaf} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
