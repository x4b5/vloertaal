import type { JSX } from 'react';
import { PAL, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de afdeling": the department — one team in its own part of the building: three colleagues (Jada,
  // Henk, Amina) side by side behind one long shared desk with their screens, together on one blue floor
  // area (their part of the office).
  'w.afdeling': () => (
    <g strokeLinejoin="round">
      {/* Their floor area */}
      <rect x="6" y="18" width="108" height="90" rx="12" fill={PAL.ice} opacity=".55" />
      <Bust who="jada" x={28} y={86} scale={0.42} expr="pleased" bold />
      <Bust who="amina" x={92} y={86} scale={0.42} expr="pleased" bold />
      <Bust who="henk" x={60} y={82} scale={0.46} expr="pleased" bold />
      {/* The long desk */}
      <rect x="8" y="80" width="104" height="8" rx="3" fill={PAL.card} />
      <rect x="8" y="86" width="104" height="5" rx="2" fill={PAL.cardShade} />
      <path d="M16 90V106M104 90V106" stroke={PAL.cardDark} strokeWidth="5" strokeLinecap="round" />
      <Shine d="M14 82H40" width={2.2} opacity={0.6} />
      {/* Three screens, backs to us */}
      {[28, 60, 92].map((x) => (
        <g key={x}>
          <rect x={x - 2} y="74" width="4" height="7" fill={PAL.slateDark} />
          <rect x={x - 10} y="62" width="20" height="13" rx="2.5" fill={PAL.slate} />
        </g>
      ))}
    </g>
  ),
} as Record<string, () => JSX.Element>;
