import type { JSX } from 'react';
import { CurveArrow, ExclaimMark, Ground, Move, PAL, Shade } from '../kit';

/** A bowl seen a little from above, centred on cx, its rim at y 70. */
const bowl = (cx: number, fill: string, shade: string, inner: string) => (
  <g>
    <ellipse cx={cx} cy={71} rx={24} ry={7} fill={inner} />
    <Shade color={shade} opacity={1} at={[cx + 24, 88, 10, 24]}>
      <path d={`M${cx - 24} 72Q${cx - 22} 98 ${cx} 98Q${cx + 22} 98 ${cx + 24} 72Q${cx} 82 ${cx - 24} 72Z`} fill={fill} />
    </Shade>
  </g>
);

export default {
  // "de kruisbesmetting": the cross-contamination (something gets into food where it should not be) — two
  // bowls: on the left one full of peanuts, on the right a clean white one (rice); a curved arrow goes from
  // the nuts to the clean bowl, and a few peanut bits now lie in the white rice; a red exclamation mark.
  // On the intro card the peanut bits fly over into the clean bowl. Once (it happens, then it is in there).
  'w.kruisbesmetting': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={102} rx={54} ry={4} />
      {/* The bowl of peanuts */}
      {bowl(32, PAL.sky, PAL.skyShade, PAL.clay)}
      <g fill={PAL.clay}>
        <ellipse cx="22" cy="66" rx="6" ry="5" />
        <ellipse cx="34" cy="64" rx="6" ry="5" />
        <ellipse cx="44" cy="67" rx="5.4" ry="4.6" />
        <ellipse cx="28" cy="70" rx="5.4" ry="4" />
      </g>
      <g fill={PAL.clayLight}>
        <circle cx="20" cy="64" r="1.8" />
        <circle cx="32" cy="62" r="1.8" />
      </g>
      {/* The clean bowl of white rice */}
      {bowl(88, PAL.green, PAL.greenShade, PAL.white)}
      <path d="M68 70Q88 60 108 70Q88 78 68 70Z" fill={PAL.paper} />
      <CurveArrow from={[36, 50]} to={[82, 54]} bend={22} color={PAL.line} width={5} head={10} />
      {/* The peanut bits that got in */}
      <Move kind="from" dx={-52} dy={-6} once>
        <g fill={PAL.clay}>
          <ellipse cx="84" cy="68" rx="3.6" ry="3" />
          <ellipse cx="94" cy="70" rx="3" ry="2.6" />
          <ellipse cx="88" cy="73" rx="2.6" ry="2.2" />
        </g>
      </Move>
      <ExclaimMark x={104} y={30} size={26} color={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
