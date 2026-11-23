import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

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
  // "temperaturen": to take the temperature — an adult's hand holds a white ear thermometer to a
  // toddler's ear; on its little screen a red bar rises.
  // On the intro card the red bar on the screen rises (measuring: three rounds).
  'w.temperaturen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The toddler: shoulders and head */}
      <Shade color={PAL.greenShade} opacity={1} at={[106, 104, 8, 18]}>
        <path d="M44 114Q44 94 62 92H86Q104 94 104 114Z" fill={PAL.green} />
      </Shade>
      <ChildHead x={74} y={62} r={26} skin={SKIN.jada} hair="#2e201a" />
      {/* The ear thermometer: tip at the ear, body, screen */}
      <path d="M40 60L50 62L50 70L40 72Z" fill={PAL.paperShade} />
      <Shade color={PAL.paperShade} opacity={1} at={[42, 80, 6, 30]}>
        <path d="M16 54Q16 50 20 50H38Q44 50 44 56V76Q44 82 38 82H34V104H20V82Q16 82 16 76Z" fill={PAL.white} />
      </Shade>
      <rect x="20" y="56" width="18" height="12" rx="2" fill={PAL.slate} />
      <Move kind="grow" grow={0.15}>
        <rect x="22" y="59" width="14" height="6" rx="1.5" fill={PAL.red} />
      </Move>
      <Shine d="M19 72V78" width={2.4} opacity={0.8} />
      {/* The adult's hand round the handle */}
      <Hand pose="fist" x={27} y={110} rotate={0} scale={0.56} skin={SKIN.bram} sleeve={[PAL.purple, PAL.purpleShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
