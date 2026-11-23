import type { JSX } from 'react';
import { PAL, SKIN, Shade } from '../kit';

/** The red spots of the rash: [x, y, r]. */
const SPOTS: [number, number, number][] = [
  [41, 68, 3], [48, 75, 2.6], [38, 77, 2.4], [77, 68, 3], [81, 77, 2.6], [71, 76, 2.4],
  [54, 46, 2.4], [67, 43, 2.8], [60, 85, 2.4], [52, 93, 2.4], [67, 94, 2.6],
];

export default {
  // "de huiduitslag": the rash — a toddler's head and shoulders, a little unhappy, with red spots all
  // over its cheeks, forehead, chin and neck.
  'w.huiduitslag': () => {
    const [s, sh] = SKIN.bram;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* Shoulders and neck */}
        <Shade color={PAL.yellowShade} opacity={1} at={[98, 106, 10, 20]}>
          <path d="M24 114Q24 96 44 94H76Q96 96 96 114Z" fill={PAL.yellow} />
        </Shade>
        <path d="M42 94Q60 104 78 94V90H42Z" fill={s} />
        {/* The head */}
        <circle cx="60" cy="54" r="31" fill={PAL.cardDark} />
        <circle cx="31" cy="62" r="6" fill={s} />
        <circle cx="89" cy="62" r="6" fill={sh} />
        <Shade color={sh} opacity={1} at={[90, 64, 10, 34]}>
          <ellipse cx="60" cy="61" rx="27.6" ry="27" fill={s} />
        </Shade>
        <path d="M32 50Q34 26 60 25Q86 26 88 50Q74 34 50 36Q40 40 32 50Z" fill={PAL.cardDark} />
        {/* An unhappy little face */}
        <ellipse cx="50" cy="62" rx="2.6" ry="3.2" fill={PAL.ink} />
        <ellipse cx="70" cy="62" rx="2.6" ry="3.2" fill={PAL.ink} />
        <path d="M54 79Q60 76 66 79" fill="none" stroke={PAL.mouth} strokeWidth="2.4" />
        {/* The spots */}
        {SPOTS.map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill={PAL.red} />
        ))}
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
