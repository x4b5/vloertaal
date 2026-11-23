import type { JSX } from 'react';
import { PAL, SKIN, Shade } from '../kit';

/** A child's head in the cast's flat style (as in group24), centred on (x, y), radius `r`. */
function ChildHead({ x, y, r = 12, skin = SKIN.bram, hair = PAL.brown }: { x: number; y: number; r?: number; skin?: [string, string]; hair?: string }) {
  const k = r / 12;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`}>
      <circle cx="0" cy="-1.5" r="13.2" fill={hair} />
      <circle cx="-12" cy="2" r="3.2" fill={skin[0]} />
      <circle cx="12" cy="2" r="3.2" fill={skin[1]} />
      <Shade color={skin[1]} opacity={1} at={[13, 4, 6, 16]}>
        <ellipse cx="0" cy="2" rx="11.6" ry="11.2" fill={skin[0]} />
      </Shade>
      <path d="M-12.4 -1Q-12 -13 0 -13.6Q12 -13 12.4 -1Q8 -6.5 1 -7Q-4 -4 -12.4 -1Z" fill={hair} />
      <ellipse cx="-4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <ellipse cx="4.6" cy="2.4" rx="1.6" ry="2.1" fill={PAL.ink} />
      <path d="M-3.6 7Q0 11 3.6 7" fill={PAL.mouth} stroke={PAL.mouth} strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

/** A toddler sitting: shirt in [colour, shade], head on top. */
const kid = (x: number, y: number, r: number, shirt: [string, string], skin: [string, string], hair: string) => (
  <g key={x}>
    <Shade color={shirt[1]} opacity={1} at={[x + r * 1.2, y + r * 1.8, r * 0.5, r * 1.4]}>
      <rect x={x - r} y={y + r * 0.7} width={r * 2} height={r * 1.7} rx={r * 0.7} fill={shirt[0]} />
    </Shade>
    <ChildHead x={x} y={y} r={r} skin={skin} hair={hair} />
  </g>
);

export default {
  // "de groep": the group (the children who are together every day) — five toddlers sitting close
  // together in a ring on a round green mat, three at the back and two in front.
  'w.groep': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The round mat */}
      <ellipse cx="60" cy="94" rx="54" ry="16" fill={PAL.greenShade} />
      <ellipse cx="60" cy="92" rx="54" ry="15" fill={PAL.green} />
      <ellipse cx="60" cy="92" rx="34" ry="8" fill={PAL.leaf} opacity=".5" />
      {/* Back row */}
      {kid(28, 44, 12, [PAL.red, PAL.redShade], SKIN.amina, '#2e201a')}
      {kid(60, 38, 12, [PAL.purple, PAL.purpleShade], SKIN.henk, PAL.yellowShade)}
      {kid(92, 44, 12, [PAL.orange, PAL.orangeShade], SKIN.jada, '#2e201a')}
      {/* Front row */}
      {kid(42, 72, 13, [PAL.sky, PAL.skyShade], SKIN.bram, PAL.cardDark)}
      {kid(78, 72, 13, [PAL.yellow, PAL.yellowShade], SKIN.amina, PAL.brown)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
