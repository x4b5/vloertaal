import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

export default {
  // "het zwerfafval": the litter (rubbish on the street) — rubbish lying loose on a patch of grass: a crushed
  // red drink can, a paper coffee cup on its side, a crumpled yellow crisp packet and a ball of paper.
  'w.zwerfafval': () => (
    <g strokeLinejoin="round">
      {/* The patch of grass */}
      <ellipse cx="60" cy="88" rx="54" ry="18" fill={PAL.leaf} />
      <path d="M6 88Q10 104 60 106Q110 104 114 88Q108 100 60 102Q12 100 6 88Z" fill={PAL.leafShade} />
      {/* The crisp packet, crumpled, behind */}
      <path d="M64 50L92 44L100 52L96 64L102 76L74 82L68 72L70 62Z" fill={PAL.yellow} />
      <path d="M92 44L100 52L96 64L102 76L88 79Q92 62 92 44Z" fill={PAL.yellowShade} />
      <path d="M70 60L96 56" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" />
      {/* The paper cup on its side */}
      <g transform="rotate(-14 38 76)">
        <path d="M14 66L56 62V90L14 86Z" fill={PAL.white} />
        <path d="M14 80L56 82V90L14 86Z" fill={PAL.paperShade} />
        <rect x="28" y="64" width="10" height="24" fill={PAL.sky} />
        <ellipse cx="56" cy="76" rx="5" ry="14" fill={PAL.paperShade} />
        <ellipse cx="57" cy="76" rx="3" ry="11" fill={PAL.mist} />
      </g>
      {/* The crushed can */}
      <g transform="rotate(18 82 92)">
        <path d="M66 84H80L84 88L88 84H98V100H88L84 96L80 100H66Z" fill={PAL.red} />
        <path d="M66 94H98V100H66Z" fill={PAL.redShade} />
        <rect x="62" y="84" width="5" height="16" rx="2" fill={PAL.mist} />
        <rect x="97" y="84" width="5" height="16" rx="2" fill={PAL.steel} />
      </g>
      {/* A ball of paper */}
      <circle cx="30" cy="96" r="7" fill={PAL.paper} />
      <path d="M26 94L31 97L28 101M32 91L34 96" fill="none" stroke={PAL.line} strokeWidth="1.4" strokeLinecap="round" />
      <Shine d="M20 70L34 68" width={2.6} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
