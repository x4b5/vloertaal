import type { JSX } from 'react';
import { Ground, Move, PAL, SKIN, Shade } from '../kit';
import { Bust } from '../bust';

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

/** A small teddy bear, centred on (x, y). */
const teddy = (x: number, y: number) => (
  <g>
    <circle cx={x - 6} cy={y - 9} r="3.6" fill={PAL.cardShade} />
    <circle cx={x + 6} cy={y - 9} r="3.6" fill={PAL.cardShade} />
    <ellipse cx={x} cy={y + 8} rx="8" ry="8" fill={PAL.card} />
    <circle cx={x} cy={y - 3} r="8" fill={PAL.card} />
    <ellipse cx={x} cy={y} rx="3.6" ry="2.6" fill="#f0c48a" />
    <circle cx={x - 3} cy={y - 5} r="1.3" fill={PAL.ink} />
    <circle cx={x + 3} cy={y - 5} r="1.3" fill={PAL.ink} />
  </g>
);

export default {
  // "wennen": to settle in, to get used to a new place — a toddler lets go of its parent (only the legs
  // and hand at the left) and goes to the childcare worker (Amina), who kneels and holds out a teddy bear.
  // On the intro card the toddler comes away from the parent to her, once (a first step in a new place).
  'w.wennen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* The parent, cut off at the edge: coat, legs and a hand reaching down */}
      <path d="M16 50V102M28 50V102" stroke={PAL.slate} strokeWidth="9" />
      <ellipse cx="14" cy="103" rx="7" ry="3.4" fill={PAL.slateDark} />
      <ellipse cx="30" cy="103" rx="7" ry="3.4" fill={PAL.slateDark} />
      <path d="M6 6H34Q38 6 38 10V56H6Z" fill={PAL.red} />
      <path d="M28 6H34Q38 6 38 10V56H28Z" fill={PAL.redShade} />
      <path d="M36 14L38 46" stroke={PAL.red} strokeWidth="8" />
      <circle cx="38" cy="50" r="5" fill={SKIN.henk[0]} />
      {/* The worker (Amina), kneeling, the teddy in her hand */}
      <Bust who="amina" x={96} y={108} scale={0.56} expr="pleased" bold />
      {teddy(78, 76)}
      <circle cx="86" cy="84" r="4.6" fill={SKIN.amina[0]} />
      {/* The toddler, going from the parent to her */}
      <Move kind="from" dx={-20} once>
        <path d="M50 88V102M58 88V102" stroke={PAL.slate} strokeWidth="6" />
        <ellipse cx="49" cy="103" rx="4.4" ry="2.6" fill={PAL.red} />
        <ellipse cx="60" cy="103" rx="4.4" ry="2.6" fill={PAL.red} />
        <Shade color={PAL.yellowShade} opacity={1} at={[66, 80, 5, 14]}>
          <rect x="44" y="66" width="20" height="26" rx="8" fill={PAL.yellow} />
        </Shade>
        <path d="M61 72L66 80" stroke={PAL.yellow} strokeWidth="5.6" />
        <circle cx="67" cy="82" r="3.6" fill={SKIN.bram[0]} />
        <ChildHead x={54} y={54} r={12} skin={SKIN.bram} hair={PAL.cardDark} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
