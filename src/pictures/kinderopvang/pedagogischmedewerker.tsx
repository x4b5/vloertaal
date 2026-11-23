import type { JSX } from 'react';
import { PAL, SKIN, Shade } from '../kit';
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

export default {
  // "de pedagogisch medewerker": the childcare worker — Jada at work in the group: a green lanyard with
  // her staff badge round her neck, a toddler on either side of her, her hands on their shoulders.
  'w.pedagogischmedewerker': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="jada" x={60} y={116} scale={0.8} expr="pleased" bold />
      {/* The lanyard and the badge */}
      <path d="M50 70L58 92M70 70L62 92" stroke={PAL.green} strokeWidth="3" />
      <rect x="51" y="90" width="18" height="16" rx="2.4" fill={PAL.white} />
      <rect x="51" y="90" width="18" height="5" rx="2.4" fill={PAL.green} />
      <circle cx="56" cy="100" r="2.6" fill={PAL.line} />
      <path d="M61 99H66M61 102H65" stroke={PAL.line} strokeWidth="1.4" />
      {/* The toddler on the left */}
      <rect x="10" y="96" width="24" height="18" rx="8" fill={PAL.red} />
      <ChildHead x={22} y={84} r={12} skin={SKIN.henk} hair={PAL.yellowShade} />
      <circle cx="32" cy="96" r="4.6" fill={SKIN.jada[0]} />
      {/* The toddler on the right */}
      <rect x="86" y="96" width="24" height="18" rx="8" fill={PAL.sky} />
      <ChildHead x={98} y={84} r={12} skin={SKIN.amina} hair="#2e201a" />
      <circle cx="88" cy="96" r="4.6" fill={SKIN.jada[0]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
