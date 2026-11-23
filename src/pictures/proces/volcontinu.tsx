import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "volcontinu": around the clock — a big clock face cut in two: the left half night (dark blue with the
  // moon), the right half day (light, with the sun), one hand; beside it a factory chimney with a little
  // smoke: the plant runs day and night. On the intro card the smoke keeps rising (three rounds).
  'w.volcontinu': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={92} cy={105} rx={18} ry={3} />
      {/* The chimney with its smoke */}
      <Move kind="from" dy={18}>
        <circle cx="96" cy="36" r="6" fill={PAL.mist} />
        <circle cx="102" cy="26" r="7.5" fill={PAL.mist} />
        <circle cx="96" cy="16" r="5" fill={PAL.mist} />
      </Move>
      <path d="M86 104L89 46H103L106 104Z" fill={PAL.clay} />
      <path d="M98 46H103L106 104H100Z" fill={PAL.clayShade} />
      <rect x="86" y="42" width="20" height="6" rx="1.5" fill={PAL.slate} />
      <path d="M88 60H104M87.5 78H104.5M87 94H105" stroke={PAL.clayLight} strokeWidth="2" />
      {/* The clock: rim, night half, day half */}
      <circle cx="46" cy="60" r="39" fill={PAL.slateDark} />
      <circle cx="44" cy="58" r="39" fill={PAL.slate} />
      <path d="M44 25A33 33 0 0 0 44 91Z" fill={PAL.navy} />
      <path d="M44 25A33 33 0 0 1 44 91Z" fill="#e3f5ff" />
      {/* The moon and the stars on the night side, the sun on the day side */}
      <path d="M28 40A11 11 0 1 0 38 56A9 9 0 1 1 28 40Z" fill={PAL.yellow} />
      <path d="M22 72l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" fill={PAL.yellowLight} />
      <circle cx="61" cy="73" r="8" fill={PAL.yellow} />
      <path d="M61 60V62.5M61 83.5V86M48 73H50.5M71.5 73H74M51.8 63.8L53.6 65.6M68.4 80.4L70.2 82.2M51.8 82.2L53.6 80.4M68.4 65.6L70.2 63.8" stroke={PAL.yellow} strokeWidth="2.6" />
      {/* The hand and the hour marks at the top and bottom */}
      <path d="M44 27V33M44 83V89" stroke={PAL.line} strokeWidth="3" />
      <path d="M44 58L60 40" stroke={PAL.ink} strokeWidth="4.5" />
      <circle cx="44" cy="58" r="4" fill={PAL.red} />
      <Shine d="M14 46A33 33 0 0 1 26 30" width={3} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
