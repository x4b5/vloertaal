import type { JSX } from 'react';
import { Move, PAL, SKIN, Shade } from '../kit';

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

export default {
  // "buitenspelen": to play outside — a toddler runs over the green grass in the sun, a kite on a string
  // high up on the right.
  // On the intro card the kite sways in the wind on its string (playing: three rounds).
  'w.buitenspelen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The sun */}
      <circle cx="24" cy="24" r="11" fill={PAL.yellow} />
      <path d="M24 6V9M24 39V42M6 24H9M39 24H42M11 11L13.4 13.4M34.6 34.6L37 37M11 37L13.4 34.6M34.6 13.4L37 11" stroke={PAL.yellow} strokeWidth="3.2" />
      {/* The grass */}
      <path d="M8 104Q8 94 20 94H100Q112 94 112 104V106H8Z" fill={PAL.leaf} />
      <path d="M80 94H100Q112 94 112 104V106H80Z" fill={PAL.leafShade} />
      {/* The toddler, running to the right */}
      <path d="M38 80L30 98M46 80L56 96" stroke={PAL.navy} strokeWidth="7.5" />
      <ellipse cx="28" cy="99" rx="5.4" ry="3" fill={PAL.red} />
      <ellipse cx="59" cy="97" rx="5.4" ry="3" fill={PAL.red} />
      <path d="M36 64L26 76" stroke={PAL.orange} strokeWidth="7" />
      <circle cx="25" cy="78" r="4.2" fill={SKIN.jada[0]} />
      <Shade color={PAL.orangeShade} opacity={1} at={[54, 72, 6, 18]}>
        <rect x="31" y="58" width="24" height="28" rx="10" fill={PAL.orange} />
      </Shade>
      <path d="M50 64L62 52" stroke={PAL.orange} strokeWidth="7" />
      <circle cx="63" cy="50" r="4.2" fill={SKIN.jada[0]} />
      <ChildHead x={44} y={44} r={14} skin={SKIN.jada} hair="#2e201a" />
      {/* The kite on its string, swaying from the hand */}
      <Move kind="turn" turn={28} at={[63, 50]}>
        <path d="M63 50Q84 52 96 40" fill="none" stroke={PAL.slate} strokeWidth="1.8" />
        <path d="M96 40Q91 47 97 52Q102 58 97 64" fill="none" stroke={PAL.red} strokeWidth="2.2" />
        <path d="M96 8L108 22L96 40L84 22Z" fill={PAL.red} />
        <path d="M96 8L108 22L96 22Z" fill={PAL.redShade} />
        <path d="M84 22H108M96 8V40" stroke={PAL.yellow} strokeWidth="2.2" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
