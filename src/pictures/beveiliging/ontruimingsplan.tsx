import type { JSX } from 'react';
import { PAL } from '../kit';

export default {
  // "het ontruimingsplan": the evacuation plan (who does what when everyone must go out) — a white plan on
  // the wall with a green border: a map of the floor with its rooms, a red dot where you stand, and a
  // dashed green route with arrows along the corridor to the green exit door.
  'w.ontruimingsplan': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The plan and its frame */}
      <rect x="10" y="16" width="100" height="88" rx="5" fill={PAL.okShade} transform="translate(0 4)" />
      <rect x="10" y="16" width="100" height="88" rx="5" fill={PAL.ok} />
      <rect x="16" y="22" width="88" height="76" rx="2" fill={PAL.white} />
      {/* The walls of the rooms */}
      <path d="M22 28H98V92H22Z M22 56H98 M46 28V50 M72 28V50 M46 62V92 M72 62V92" fill="none" stroke={PAL.slate} strokeWidth="2.6" />
      <path d="M22 50H98M22 62H98" stroke={PAL.slate} strokeWidth="2.6" />
      {/* The exit door at the right end of the corridor */}
      <rect x="92" y="50" width="12" height="12" rx="1.5" fill={PAL.ok} />
      <path d="M96 56H102M99 53L102 56L99 59" fill="none" stroke={PAL.white} strokeWidth="1.8" />
      {/* Where you are */}
      <circle cx="34" cy="40" r="6" fill={PAL.red} />
      <circle cx="34" cy="40" r="2.4" fill={PAL.white} />
      {/* The route out */}
      <path d="M34 47V56H86" fill="none" stroke={PAL.leaf} strokeWidth="4" strokeDasharray="5 5" />
      <path d="M58 52L63 56L58 60M80 52L85 56L80 60" fill="none" stroke={PAL.ok} strokeWidth="3.4" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
