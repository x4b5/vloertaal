import type { JSX } from 'react';
import { Hand, PAL, SKIN, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de buurvrouw": the neighbour (a woman) — Amina, friendly, waves over the low white garden fence
  // between her garden and yours; a bit of her house (red roof edge, a window) behind her.
  'w.buurvrouw': () => (
    <g strokeLinejoin="round">
      {/* Her house behind her */}
      <rect x="62" y="34" width="50" height="76" fill={PAL.paperShade} />
      <path d="M56 38L86 14L116 38Z" fill={PAL.clay} stroke={PAL.clay} strokeWidth="4" />
      <rect x="88" y="46" width="16" height="16" rx="1.5" fill={PAL.sky} />
      {/* Amina, waving */}
      <Bust who="amina" x={52} y={124} scale={0.72} expr="pleased" bold />
      <Hand pose="open" x={86} y={74} rotate={16} scale={0.5} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      {/* The garden fence in front */}
      {[12, 26, 40, 54, 68, 82, 96].map((x) => (
        <path key={x} d={`M${x} 110V90L${x + 5} 85L${x + 10} 90V110Z`} fill={PAL.white} />
      ))}
      <rect x="8" y="94" width="104" height="5" rx="2" fill={PAL.paperShade} />
      <rect x="8" y="104" width="104" height="5" rx="2" fill={PAL.paperShade} />
      <Shine d="M15 92V100" width={2} opacity={0.5} color={PAL.mist} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
