import type { JSX } from 'react';
import { ExclaimMark, Ground, Motion, PAL, Shine } from '../kit';

export default {
  // "de alarmmelding": the alarm message — a monitor on a stand; over the dark plant screen a red message
  // box has popped up, with a white warning triangle (a red "!") and two white lines; red sound lines at the
  // top right corner.
  'w.alarmmelding': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={56} cy={105} rx={30} ry={3.5} />
      {/* The stand and foot */}
      <rect x="50" y="80" width="12" height="20" fill={PAL.steel} />
      <path d="M36 104Q36 99 42 99H70Q76 99 76 104Z" fill={PAL.slate} />
      {/* The monitor: depth edge, frame, dark screen with grey plant lines */}
      <rect x="13" y="25" width="88" height="60" rx="6" fill={PAL.slateDark} />
      <rect x="10" y="22" width="88" height="60" rx="6" fill={PAL.slate} />
      <rect x="15" y="27" width="78" height="50" rx="3" fill={PAL.slateDark} />
      <path d="M20 70H50M58 70H88" stroke={PAL.slate} strokeWidth="3" />
      {/* The red message box, with its depth edge */}
      <rect x="22" y="36" width="64" height="30" rx="4" fill={PAL.redShade} />
      <rect x="22" y="33" width="64" height="30" rx="4" fill={PAL.red} />
      <path d="M38 37L49 57H27Z" fill={PAL.white} stroke={PAL.white} strokeWidth="3" />
      <ExclaimMark x={38} y={49.5} size={13} color={PAL.red} />
      <path d="M56 42H79M56 50H74" stroke={PAL.white} strokeWidth="3.4" />
      <Shine d="M14 32Q14 26 20 26" width={2.6} opacity={0.5} />
      {/* The alarm sounds */}
      <Motion x={100} y={20} dir={-45} spread={70} n={3} len={8} gap={5} color={PAL.red} width={3.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
