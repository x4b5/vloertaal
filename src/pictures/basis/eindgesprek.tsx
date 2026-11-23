import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** A five-pointed star centred on (x, y), outer radius r. */
const star = (x: number, y: number, r: number) =>
  `M${Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const q = i % 2 ? r * 0.45 : r;
    return `${(x + q * Math.cos(a)).toFixed(1)} ${(y + q * Math.sin(a)).toFixed(1)}`;
  }).join('L')}Z`;
import { Bust } from '../bust';

export default {
  // "het eindgesprek": the final talk (at the end of the placement) — Henk and Jada face each other over a table
  // with the evaluation sheet between them: lines and a row of three yellow stars; Henk is talking.
  'w.eindgesprek': () => (
    <g>
      <Bust who="henk" x={24} y={88} scale={0.6} talk expr="pleased" />
      <Bust who="jada" x={96} y={88} scale={0.6} expr="pleased" flip />
      {/* Table */}
      <rect x="6" y="84" width="108" height="10" rx="3" fill={PAL.cardShade} />
      <rect x="6" y="80" width="108" height="8" rx="3" fill={PAL.card} />
      <path d="M16 94V108M104 94V108" stroke={PAL.cardDark} strokeWidth="5" strokeLinecap="round" />
      {/* The evaluation sheet, standing up a little */}
      <g transform="rotate(-4 60 60)">
        <rect x="38" y="36" width="44" height="48" rx="3" fill={PAL.paperShade} transform="translate(2 2)" />
        <rect x="38" y="36" width="44" height="48" rx="3" fill={PAL.paper} />
        {[48, 60, 72].map((x, i) => <path key={x} d={star(x, 49, 6.4)} fill={i < 3 ? PAL.yellow : PAL.mist} />)}
        <path d="M45 64H75M45 73H69" stroke={PAL.line} strokeWidth="2.8" strokeLinecap="round" />
      </g>
      <Shine d="M12 82H30" opacity={0.5} width={2.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
