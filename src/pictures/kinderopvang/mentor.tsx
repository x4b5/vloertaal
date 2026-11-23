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
  // "de mentor": the mentor, the worker who follows one child closely — Amina with one toddler close at
  // her side, her hand on its shoulder; she holds up the child's own folder with its photo on it.
  'w.mentor': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Bust who="amina" x={42} y={116} scale={0.76} expr="pleased" bold />
      {/* The child's folder, with its photo */}
      <rect x="10" y="66" width="34" height="42" rx="3" fill={PAL.orangeShade} />
      <rect x="8" y="64" width="34" height="42" rx="3" fill={PAL.orange} />
      <rect x="14" y="70" width="22" height="20" rx="2" fill={PAL.white} />
      <circle cx="25" cy="79" r="6.4" fill={PAL.cardDark} />
      <circle cx="25" cy="81" r="5.2" fill={SKIN.bram[0]} />
      <path d="M14 96H36M14 101H30" stroke={PAL.white} strokeWidth="2.2" />
      <circle cx="40" cy="98" r="5" fill={SKIN.amina[0]} />
      {/* The toddler at her side (the same child as in the photo) */}
      <Shade color={PAL.yellowShade} opacity={1} at={[106, 102, 6, 16]}>
        <rect x="78" y="88" width="28" height="26" rx="10" fill={PAL.yellow} />
      </Shade>
      <ChildHead x={92} y={72} r={15} skin={SKIN.bram} hair={PAL.cardDark} />
      <path d="M62 98Q72 92 80 94" fill="none" stroke={PAL.green} strokeWidth="7" />
      <circle cx="81" cy="94" r="4.6" fill={SKIN.amina[0]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
