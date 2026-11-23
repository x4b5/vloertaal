import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "het buurthuis": the community centre — a low, wide building with a flat roof and a big window in
  // which neighbours sit together at a table with coffee; a string of coloured party flags hangs across
  // the front (something is going on for the whole neighbourhood).
  'w.buurthuis': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* The building: right side, front, the flat roof */}
      <path d="M104 46L112 40V99L104 105Z" fill={PAL.cardDark} />
      <Shade color={PAL.cardShade} opacity={1} at={[106, 76, 8, 40]}>
        <rect x="10" y="46" width="94" height="59" rx="2" fill={PAL.card} />
      </Shade>
      <path d="M6 46L14 38H114L106 46Z" fill={PAL.slate} />
      <rect x="6" y="44" width="100" height="5" rx="1.5" fill={PAL.slateDark} />
      {/* The big window with two neighbours at the table */}
      <rect x="18" y="58" width="56" height="34" rx="2" fill={PAL.ice} />
      <circle cx="34" cy="72" r="5.5" fill={SKIN.amina[0]} />
      <path d="M26 86Q26 78 34 78Q42 78 42 86Z" fill={PAL.purple} />
      <circle cx="58" cy="72" r="5.5" fill={SKIN.bram[0]} />
      <path d="M50 86Q50 78 58 78Q66 78 66 86Z" fill={PAL.green} />
      <rect x="20" y="84" width="52" height="5" rx="1.5" fill={PAL.wood} />
      <rect x="43" y="79" width="6" height="6" rx="1.5" fill={PAL.white} />
      <rect x="18" y="90" width="56" height="4" fill={PAL.paperShade} />
      <Shine d="M22 62H32" width={2.6} opacity={0.9} />
      {/* The door */}
      <rect x="82" y="68" width="16" height="37" rx="2" fill={PAL.sky} />
      <path d="M85 72H95V100H85Z" fill={PAL.ice} opacity=".6" />
      {/* The party flags */}
      <path d="M8 22Q60 40 112 22" fill="none" stroke={PAL.slate} strokeWidth="1.8" />
      {[
        [18, 25.4, PAL.red],
        [32, 29.6, PAL.yellow],
        [46, 32, PAL.sky],
        [60, 32.8, PAL.green],
        [74, 32, PAL.orange],
        [88, 29.6, PAL.purple],
        [102, 25.4, PAL.red],
      ].map(([x, y, c]) => (
        <path key={x as number} d={`M${(x as number) - 5} ${y}H${(x as number) + 5}L${x} ${(y as number) + 10}Z`} fill={c as string} />
      ))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
