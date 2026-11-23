import type { JSX } from 'react';
import { Hand, PAL, SKIN, Shine } from '../kit';

const SK = SKIN.bram;

export default {
  // "het verband": the bandage — an open hand with its palm and wrist wrapped in white gauze bands, and the
  // rest of the roll hanging at the side on its loose end.
  'w.verband': () => (
    <g>
      <Hand pose="open" x={50} y={106} scale={1.35} skin={SK} sleeve={[PAL.blue, PAL.blueShade]} />
      {/* Loose end to the roll */}
      <path d="M66 96Q84 98 88 84" stroke={PAL.paperShade} strokeWidth="9" fill="none" />
      <path d="M66 94Q82 96 86 84" stroke={PAL.white} strokeWidth="7" fill="none" />
      {/* The roll, standing on its side */}
      <ellipse cx="92" cy="78" rx="14" ry="14" fill={PAL.paperShade} />
      <ellipse cx="90" cy="76" rx="14" ry="14" fill={PAL.white} />
      <circle cx="90" cy="76" r="9" fill="none" stroke={PAL.paperShade} strokeWidth="1.6" />
      <circle cx="90" cy="76" r="4" fill={PAL.mist} />
      {/* Gauze bands round the palm and wrist (slanted, overlapping) */}
      {[[76, -5], [87, 4], [98, -3]].map(([y, r]) => (
        <g key={y} transform={`rotate(${r} 50 ${y})`}>
          <rect x="29" y={y - 6} width="43" height="13" rx="4" fill={PAL.paperShade} />
          <rect x="29" y={y - 7} width="43" height="11" rx="4" fill={PAL.white} />
          <path d={`M36 ${y - 1}H64`} stroke={PAL.paperShade} strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 3" />
        </g>
      ))}
      
    </g>
  ),
} as Record<string, () => JSX.Element>;
