import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

export default {
  // "de maatbeker": the measuring cup — a clear plastic jug with a pouring lip on the left and a handle on
  // the right, a scale of marks up its side (long and short lines) and blue liquid up to the third mark.
  'w.maatbeker': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={32} ry={4} />
      {/* The handle */}
      <path d="M80 36Q102 36 100 58Q98 80 78 82" fill="none" stroke={PAL.mist} strokeWidth="9" strokeLinecap="round" />
      <path d="M86 40Q97 44 96 58Q95 72 84 78" fill="none" stroke={PAL.paperShade} strokeWidth="3" strokeLinecap="round" />
      {/* The back wall through the clear plastic */}
      <path d="M26 26H84L80 100Q80 105 75 105H37Q32 105 32 100Z" fill={PAL.ice} opacity=".35" />
      {/* The liquid */}
      <path d="M31.2 66H82.2L80 100Q80 105 75 105H37Q32 105 32 100Z" fill={PAL.sky} />
      <ellipse cx="56.7" cy="66" rx="25.5" ry="4" fill={PAL.ice} />
      <path d="M72 70H81.8L80 100Q80 105 75 105H70Q76 100 74 70Z" fill={PAL.skyShade} />
      {/* The rim, with the pouring lip on the left */}
      <path d="M26 26L18 20L30 22Z" fill={PAL.mist} />
      <ellipse cx="55" cy="26" rx="29" ry="5" fill="none" stroke={PAL.mist} strokeWidth="3" />
      {/* The wall's edges */}
      <path d="M26 26L32 100M84 26L80 100" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      {/* The scale */}
      {[38, 48, 58, 68, 78, 88].map((y, i) => (
        <path key={y} d={`M36 ${y}H${i % 2 ? 44 : 52}`} stroke={PAL.navy} strokeWidth="2.6" strokeLinecap="round" />
      ))}
      <Shine d="M64 34V58" width={3.4} color={PAL.white} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
