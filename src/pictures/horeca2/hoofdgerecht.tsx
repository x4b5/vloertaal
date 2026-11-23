import type { JSX } from 'react';
import { Ground, PAL } from '../kit';

/** The three courses as three dots under the dish: this one (the second) is filled. */
const courses = (n: number) => [48, 60, 72].map((x, i) => <circle key={x} cx={x} cy={106} r={i === n ? 4.6 : 3.2} fill={i === n ? PAL.orange : PAL.mist} />);

export default {
  // "het hoofdgerecht": the main course — a big white plate, full: a piece of meat, golden potatoes and green
  // broccoli; under it three dots for the three courses, the middle one filled orange.
  'w.hoofdgerecht': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={94} rx={50} ry={4} />
      {/* The plate */}
      <ellipse cx="60" cy="66" rx="52" ry="26" fill={PAL.paperShade} transform="translate(0 4)" />
      <ellipse cx="60" cy="66" rx="52" ry="26" fill={PAL.white} />
      <ellipse cx="60" cy="66" rx="38" ry="17" fill="none" stroke={PAL.paperShade} strokeWidth="2" />
      {/* The meat */}
      <path d="M26 66Q24 54 40 52Q56 50 60 60Q62 74 46 76Q30 78 26 66Z" fill={PAL.brown} transform="translate(0 4)" />
      <path d="M26 66Q24 54 40 52Q56 50 60 60Q62 74 46 76Q30 78 26 66Z" fill={PAL.wood} />
      <path d="M34 58L42 72M46 56L52 68" stroke={PAL.brown} strokeWidth="3.4" strokeLinecap="round" />
      {/* The potatoes */}
      {[[70, 72], [80, 76], [88, 68], [76, 64]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x} cy={y + 1.6} rx="7" ry="5.6" fill={PAL.yellowShade} />
          <ellipse cx={x} cy={y} rx="7" ry="5.6" fill={PAL.yellow} />
          <ellipse cx={x - 2} cy={y - 2} rx="2.4" ry="1.4" fill={PAL.yellowShine} />
        </g>
      ))}
      {/* The broccoli */}
      {[[62, 46], [72, 44], [82, 48]].map(([x, y]) => (
        <g key={x}>
          <path d={`M${x} ${y}V${y + 10}`} stroke={PAL.leaf} strokeWidth="4" strokeLinecap="round" />
          <circle cx={x - 3} cy={y} r="5" fill={PAL.green} />
          <circle cx={x + 3} cy={y - 1} r="5" fill={PAL.greenShade} />
          <circle cx={x} cy={y - 4} r="4.6" fill={PAL.green} />
        </g>
      ))}
      {courses(1)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
