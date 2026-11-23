import type { JSX } from 'react';
import { Arrow, Ground, Move, PAL, Shade, Shine } from '../kit';

export default {
  // "afdekken": to cover (with a lid or foil) — a steel kitchen tray of green salad; a clear plastic lid comes
  // down and covers it (the salad shows through), a blue arrow down beside it.
  // On the intro card the lid comes down onto the tray, once (it is covered once).
  'w.afdekken': () => (
    <g strokeLinejoin="round">
      <Ground cx={56} cy={104} rx={48} ry={4.5} />
      {/* The tray: the back rim, the salad, the front */}
      <path d="M16 70L28 60H92L80 70Z" fill={PAL.steel} />
      {[[32, 64], [44, 62], [56, 64], [68, 62], [80, 64], [38, 68], [62, 68], [50, 66], [74, 67]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="7" ry="4.6" fill={i % 3 === 0 ? PAL.leafShade : i % 3 === 1 ? PAL.leaf : PAL.green} transform={`rotate(${(i * 41) % 50 - 25} ${x} ${y})`} />
      ))}
      <circle cx="46" cy="65" r="3.6" fill={PAL.red} />
      <circle cx="70" cy="64" r="3.2" fill={PAL.red} />
      <path d="M80 70L92 60V88L80 98Z" fill={PAL.steel} />
      <Shade color={PAL.steel} opacity={0.5} at={[86, 84, 10, 20]}>
        <path d="M16 70H80V98H16Z" fill={PAL.mist} />
      </Shade>
      <Shine d="M22 76H52" width={2.6} opacity={0.8} />
      {/* The clear lid, come down onto the tray */}
      <Move kind="from" dy={-30} once>
        <path d="M14 70L28 56Q30 40 46 38H82Q94 40 94 56V60L80 72Z" fill={PAL.ice} opacity=".55" />
        <path d="M12 70H82L96 58" fill="none" stroke={PAL.sky} strokeWidth="3.4" strokeLinecap="round" />
        <rect x="48" y="31" width="24" height="7" rx="3.5" fill={PAL.sky} />
        <Shine d="M32 52Q34 44 44 43" width={3} opacity={0.9} />
      </Move>
      <Arrow from={[106, 14]} to={[106, 46]} color={PAL.sky} width={6} head={10} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
