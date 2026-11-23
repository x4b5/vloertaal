import type { JSX } from 'react';
import { Ground, Move, PAL, SKIN, Shade, Shine } from '../kit';

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

/** A toy block: front square, a lit top and a shaded right side. */
const block = (x: number, y: number, s: number, c: string, sh: string, light: string) => (
  <g>
    <path d={`M${x} ${y}L${x + 5} ${y - 5}H${x + s + 5}L${x + s} ${y}Z`} fill={light} />
    <path d={`M${x + s} ${y}L${x + s + 5} ${y - 5}V${y + s - 5}L${x + s} ${y + s}Z`} fill={sh} />
    <rect x={x} y={y} width={s} height={s} rx="2" fill={c} />
  </g>
);

export default {
  // "spelen": to play — a toddler sits on the floor and builds a tower of toy blocks: the blue block
  // in its hand goes on top of the red and the yellow one.
  // On the intro card the arm brings the block up and over onto the tower (playing: three rounds).
  'w.spelen': () => (
    <g strokeLinejoin="round">
      <Ground cx={58} cy={105} rx={50} ry={4} />
      {/* The tower */}
      {block(72, 86, 18, PAL.red, PAL.redShade, PAL.redLight)}
      {block(72, 68, 18, PAL.yellow, PAL.yellowShade, PAL.yellowShine)}
      {/* The toddler, sitting: legs out in front, body, head */}
      <ellipse cx="22" cy="100" rx="9" ry="5.5" fill={PAL.blueShade} />
      <ellipse cx="52" cy="100" rx="11" ry="5.5" fill={PAL.blue} />
      <ellipse cx="62" cy="101" rx="5" ry="4" fill={SKIN.amina[0]} />
      <Shade color={PAL.greenShade} opacity={1} at={[52, 82, 6, 20]}>
        <rect x="22" y="62" width="28" height="38" rx="12" fill={PAL.green} />
      </Shade>
      <path d="M26 70L20 88" stroke={PAL.green} strokeWidth="7.5" strokeLinecap="round" />
      <circle cx="20" cy="90" r="4.4" fill={SKIN.amina[0]} />
      <ChildHead x={36} y={48} r={15} skin={SKIN.amina} hair="#2e201a" />
      {/* The arm and the blue block, turning up from the shoulder onto the tower */}
      <Move kind="turn" turn={-40} at={[46, 70]}>
        <path d="M46 70L70 58" stroke={PAL.green} strokeWidth="7.5" strokeLinecap="round" />
        {block(72, 50, 18, PAL.sky, PAL.skyShade, PAL.ice)}
        <circle cx="72" cy="59" r="4.6" fill={SKIN.amina[0]} />
      </Move>
      <Shine d="M76 90V98" width={3} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
