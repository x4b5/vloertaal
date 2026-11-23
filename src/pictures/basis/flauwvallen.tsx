import type { JSX } from 'react';
import { CastHead } from '../../components/Characters';
import { Ground, Move, PAL, SKIN } from '../kit';
import { Bust } from '../bust';

const SK = SKIN.bram;
const limb = (a: [number, number], b: [number, number], w: number, c: string) => (
  <path d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke={c} strokeWidth={w} strokeLinecap="round" />
);

export default {
  // "flauwvallen": to faint — Bram lies calmly on his back on the floor, eyes closed, and Amina kneels over him
  // to help, a hand on his shoulder. On the intro card Bram sinks back from sitting to lying, slowly and once
  // (no fall, nothing harsh).
  'w.flauwvallen': () => (
    <g>
      <Ground cx={60} cy={104} rx={52} ry={4} />
      {/* The helper, bent over him (behind) */}
      <Bust who="amina" x={90} y={80} scale={0.5} emotion="worried" tilt={-14} flip />
      {/* Legs, flat on the floor */}
      {limb([70, 90], [102, 92], 12, '#2d4f78')}
      {limb([70, 98], [98, 99], 12, '#26446a')}
      <ellipse cx="106" cy="88" rx="4.6" ry="7.4" fill={PAL.brown} />
      <ellipse cx="102" cy="96" rx="4.6" ry="7.4" fill={PAL.brown} />
      {/* Upper body and head sink back round the hip */}
      <Move kind="turn" turn={65} at={[72, 94]} once>
        <path d="M42 84Q42 80 48 80H72Q76 80 76 86V98Q76 104 70 104H48Q42 104 42 98Z" fill={PAL.orange} />
        <rect x="54" y="80" width="5" height="24" fill="#ffe066" />
        <path d="M42 98Q42 104 48 104H70Q76 104 76 98Z" fill={PAL.orangeShade} />
        {limb([50, 100], [68, 104], 9, PAL.blue)}
        <circle cx="71" cy="104" r="5" fill={SK[0]} />
        <g transform="translate(46 92) rotate(-90) scale(0.52) translate(-60 -92)">
          <CastHead who="bram" emotion="rest" />
        </g>
      </Move>
      {/* Amina's hand on his shoulder */}
      <path d="M76 66Q62 70 52 80" stroke={PAL.green} strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="51" cy="81" rx="6" ry="4.6" fill={SKIN.amina[0]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
