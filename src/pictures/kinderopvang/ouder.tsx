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
  // "de ouder": the parent — Jada, the parent, holds her toddler on her arm, close to her; the child
  // in a red shirt leans against her shoulder, her hand round its back.
  'w.ouder': () => (
    <g strokeLinejoin="round">
      <Bust who="jada" x={46} y={120} scale={0.8} expr="pleased" bold />
      {/* The toddler on her arm: body, then head */}
      <Shade color={PAL.redShade} opacity={1} at={[96, 92, 8, 22]}>
        <rect x="64" y="72" width="30" height="40" rx="12" fill={PAL.red} />
      </Shade>
      <ChildHead x={82} y={56} r={16} skin={SKIN.bram} hair="#c98a4b" />
      {/* Her arm under the child and her hand on its back */}
      <path d="M40 108Q60 116 86 108" fill="none" stroke="#ffc929" strokeWidth="11" strokeLinecap="round" />
      <path d="M84 108Q92 104 94 96" fill="none" stroke={SKIN.jada[0]} strokeWidth="8" strokeLinecap="round" />
      <path d="M68 80L62 92" stroke={SKIN.bram[0]} strokeWidth="6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
