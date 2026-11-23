import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** A drop shape with its tip at (x, y), s high. */
const drop = (x: number, y: number, s: number, fill: string) => (
  <path d={`M${x} ${y}Q${x + s * 0.45} ${y + s * 0.5} ${x + s * 0.45} ${y + s * 0.72}A${s * 0.45} ${s * 0.45} 0 0 1 ${x - s * 0.45} ${y + s * 0.72}Q${x - s * 0.45} ${y + s * 0.5} ${x} ${y}Z`} fill={fill} />
);

export default {
  // "het concentraat": the concentrate — a big purple jerrycan with a handle and a cap; on its white label
  // one big dark-purple drop next to three blue water drops: a little of this goes with a lot of water.
  'w.concentraat': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={40} ry={4.5} />
      {/* The right side and the top */}
      <path d="M86 40L102 22V86Q102 92 98 95L86 105Z" fill={PAL.purpleShade} />
      <path d="M18 40L34 22H102L86 40Z" fill={PAL.purpleLight} />
      {/* The handle on the top */}
      <path d="M34 30V18Q34 12 40 12H58Q64 12 64 18V30" fill="none" stroke={PAL.purple} strokeWidth="7" strokeLinecap="round" />
      <path d="M41 22H58" stroke={PAL.purpleShade} strokeWidth="4" strokeLinecap="round" />
      {/* The cap */}
      <path d="M74 32V22H90V32Q82 36 74 32Z" fill={PAL.slate} />
      <ellipse cx="82" cy="22" rx="8" ry="3" fill={PAL.steel} />
      {/* The front */}
      <rect x="18" y="40" width="68" height="65" rx="5" fill={PAL.purple} />
      <Shine d="M23 48V96" width={3.4} opacity={0.5} />
      {/* The label */}
      <rect x="27" y="52" width="52" height="42" rx="4" fill={PAL.white} />
      {drop(42, 58, 30, PAL.purpleShade)}
      {drop(62, 58, 13, PAL.sky)}
      {drop(72, 62, 13, PAL.sky)}
      {drop(64, 74, 13, PAL.sky)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
