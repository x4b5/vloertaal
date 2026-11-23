import type { JSX } from 'react';
import { CurveArrow, ExclaimMark, Ground, Move, PAL, Shade } from '../kit';

/** A bowl seen a little from above, centred on cx, its rim at y 64. */
const bowl = (cx: number, fill: string, shade: string, inner: string) => (
  <g>
    <ellipse cx={cx} cy={65} rx={26} ry={8} fill={inner} />
    <Shade color={shade} opacity={1} at={[cx + 26, 86, 10, 26]}>
      <path d={`M${cx - 26} 66Q${cx - 24} 100 ${cx} 100Q${cx + 24} 100 ${cx + 26} 66Q${cx} 78 ${cx - 26} 66Z`} fill={fill} />
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
      <Ground cx={60} cy={103} rx={54} ry={4} />
      {/* The bowl of peanuts */}
      {bowl(32, PAL.sky, PAL.skyShade, PAL.clay)}
      <g fill={PAL.clay}>
        <ellipse cx="20" cy="62" rx="6.4" ry="5.4" />
        <ellipse cx="32" cy="58" rx="6.4" ry="5.4" />
        <ellipse cx="44" cy="62" rx="6" ry="5" />
        <ellipse cx="27" cy="66" rx="6" ry="4.4" />
        <ellipse cx="39" cy="67" rx="6" ry="4.4" />
      </g>
      <g fill={PAL.clayLight}>
        <circle cx="18" cy="60" r="2" />
        <circle cx="30" cy="56" r="2" />
      </g>
      {/* The clean bowl of white rice */}
      {bowl(88, PAL.green, PAL.greenShade, PAL.white)}
      <path d="M66 64Q88 54 110 64Q88 73 66 64Z" fill={PAL.paper} />
      <CurveArrow from={[32, 44]} to={[84, 48]} bend={24} color={PAL.line} width={6} head={12} />
      {/* The peanut bits that got in */}
      <Move kind="from" dx={-52} dy={-6} once>
        <g fill={PAL.clay}>
          <ellipse cx="82" cy="62" rx="4.4" ry="3.6" />
          <ellipse cx="95" cy="64" rx="3.8" ry="3.2" />
          <ellipse cx="88" cy="68" rx="3.2" ry="2.6" />
        </g>
      </Move>
      <ExclaimMark x={104} y={26} size={32} color={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
