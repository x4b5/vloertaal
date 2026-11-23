import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

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
  // "de peuter": the toddler (a child of two or three) — one small child standing, big head, short
  // chubby arms and legs, in blue dungarees over a yellow shirt, a red ball in its arms.
  'w.peuter': () => {
    const [s] = SKIN.bram;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={60} cy={106} rx={30} ry={4} />
        {/* Legs and shoes */}
        <path d="M51 86V100M69 86V100" stroke={PAL.blue} strokeWidth="11" />
        <ellipse cx="49" cy="103" rx="8" ry="4" fill={PAL.red} />
        <ellipse cx="71" cy="103" rx="8" ry="4" fill={PAL.red} />
        {/* The body: yellow shirt, blue dungarees with a bib */}
        <Shade color={PAL.yellowShade} opacity={1} at={[84, 74, 6, 20]}>
          <rect x="38" y="56" width="44" height="40" rx="16" fill={PAL.yellow} />
        </Shade>
        <path d="M44 68H76V82Q76 96 60 96Q44 96 44 82Z" fill={PAL.blue} />
        <path d="M68 68H76V82Q76 94 68 96Z" fill={PAL.blueShade} />
        <path d="M47 58V70M73 58V70" stroke={PAL.blue} strokeWidth="4" />
        <circle cx="49" cy="71" r="2" fill={PAL.yellow} />
        <circle cx="71" cy="71" r="2" fill={PAL.yellow} />
        {/* The ball in its arms */}
        <Shade color={PAL.redShade} opacity={1} at={[74, 84, 5, 12]}>
          <circle cx="62" cy="80" r="12" fill={PAL.red} />
        </Shade>
        <path d="M51 76Q62 84 73 76" fill="none" stroke={PAL.white} strokeWidth="2.6" />
        <Shine d="M55 73Q57 70 60 69" width={2.4} opacity={0.8} />
        <path d="M40 64Q42 82 50 84M80 64Q80 82 72 86" fill="none" stroke={PAL.yellow} strokeWidth="8" />
        <circle cx="51" cy="85" r="4.6" fill={s} />
        <circle cx="72" cy="87" r="4.6" fill={s} />
        {/* The head */}
        <ChildHead x={60} y={36} r={22} skin={SKIN.bram} hair={PAL.cardDark} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
