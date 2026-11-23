import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de schaal": the tray (a flat dish for food) — an empty black plastic food tray seen a little from
  // above: a wide flat rim, a shallow well with a white absorbent pad in it, and low sloping walls.
  'w.schaal': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={96} rx={52} ry={5} />
      {/* The walls, seen from the front */}
      <path d="M12 70L20 90Q22 94 28 94H92Q98 94 100 90L108 70Z" fill={PAL.slateDark} />
      <path d="M92 94Q98 94 100 90L108 70H96L90 94Z" fill="#1b232a" />
      {/* The rim */}
      <rect x="8" y="40" width="104" height="34" rx="10" fill={PAL.slate} />
      {/* The well */}
      <rect x="18" y="46" width="84" height="23" rx="6" fill={PAL.slateDark} />
      <rect x="22" y="51" width="76" height="15" rx="5" fill="#1b232a" />
      {/* The absorbent pad */}
      <rect x="40" y="53" width="40" height="11" rx="2.5" fill={PAL.paper} />
      <path d="M44 58.5H76" stroke={PAL.paperShade} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3" />
      <Shine d="M16 44H50" width={3} opacity={0.5} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
