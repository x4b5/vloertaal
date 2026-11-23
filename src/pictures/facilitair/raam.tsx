import type { JSX } from 'react';
import { PAL } from '../kit';

export default {
  // "het raam": the window — a closed window with a white frame and a cross bar, four light-blue panes with
  // a light streak, a steel window handle on the right and a grey sill underneath.
  'w.raam': () => (
    <g strokeLinejoin="round">
      {/* The frame, with its grey depth edge */}
      <rect x="16" y="12" width="88" height="86" rx="4" fill={PAL.paperShade} transform="translate(3 3)" />
      <rect x="16" y="12" width="88" height="86" rx="4" fill={PAL.white} />
      {/* The panes */}
      {[[24, 20], [64, 20], [24, 58], [64, 58]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="32" height="32" rx="2" fill={PAL.ice} />
          <path d={`M${x + 32} ${y}V${y + 32}H${x}Z`} fill={PAL.sky} opacity=".35" />
          <path d={`M${x + 6} ${y + 18}L${x + 18} ${y + 6}M${x + 8} ${y + 26}L${x + 26} ${y + 8}`} stroke={PAL.white} strokeWidth="3" strokeLinecap="round" opacity=".8" />
        </g>
      ))}
      {/* The handle */}
      <rect x="96" y="52" width="6" height="8" rx="2" fill={PAL.steel} />
      <path d="M99 56V70" stroke={PAL.steel} strokeWidth="4.4" strokeLinecap="round" />
      {/* The sill */}
      <path d="M8 98H112L108 106H12Z" fill={PAL.mist} />
      <path d="M12 106H108V109H12Z" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
