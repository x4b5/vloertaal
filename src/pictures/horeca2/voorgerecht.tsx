import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The three courses as three dots under the dish: this one (the first) is filled. */
const courses = (n: number) => [48, 60, 72].map((x, i) => <circle key={x} cx={x} cy={106} r={i === n ? 4.6 : 3.2} fill={i === n ? PAL.orange : PAL.mist} />);

export default {
  // "het voorgerecht": the starter (the first course) — a white bowl of red tomato soup with a swirl of cream on a
  // plate, a spoon beside it; under it three dots for the three courses, the first one filled orange.
  'w.voorgerecht': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={92} rx={46} ry={4} />
      {/* The plate */}
      <ellipse cx="58" cy="80" rx="46" ry="13" fill={PAL.paperShade} transform="translate(0 3)" />
      <ellipse cx="58" cy="80" rx="46" ry="13" fill={PAL.white} />
      {/* The spoon on the plate */}
      <path d="M90 82L106 70" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <ellipse cx="88" cy="84" rx="6" ry="3.6" fill={PAL.mist} transform="rotate(-36 88 84)" />
      {/* The bowl */}
      <Shade color={PAL.paperShade} opacity={1} at={[90, 74, 14, 24]}>
        <path d="M24 52Q26 84 56 84Q86 84 88 52Z" fill={PAL.white} />
      </Shade>
      <path d="M26 64Q56 70 86 64" fill="none" stroke={PAL.sky} strokeWidth="3.4" />
      <ellipse cx="56" cy="52" rx="32" ry="10" fill={PAL.paperShade} />
      {/* The soup */}
      <ellipse cx="56" cy="52" rx="28" ry="8" fill={PAL.clay} />
      <path d="M44 52Q50 46 58 50Q64 54 70 50" fill="none" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M28 60Q30 72 40 78" width={3} opacity={0.5} color={PAL.paperShade} />
      {courses(0)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
