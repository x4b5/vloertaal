import type { JSX } from 'react';
import { Bubble, Dots, PAL, Shade } from '../kit';
import { Bust } from '../bust';

export default {
  // "het intakegesprek": the intake interview (the first talk at the agency) — Amina of the agency
  // (left) and Bram (right) face each other across the desk; she asks (a speech bubble), and on the
  // desk between them lies the form she fills in, with a pen.
  'w.intakegesprek': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={30} y={100} scale={0.62} expr="pleased" talk bold />
      <Bust who="bram" x={90} y={100} scale={0.62} expr="neutral" flip bold />
      <Bubble x={42} y={6} w={40} h={22} tail="left">
        <Dots cx={62} cy={17} gap={10} r={3.4} />
      </Bubble>
      {/* The desk */}
      <rect x="6" y="90" width="108" height="16" rx="3" fill={PAL.card} />
      <rect x="6" y="102" width="108" height="4" rx="2" fill={PAL.cardShade} />
      {/* The form on the desk */}
      <path d="M44 78L76 78L80 96L40 96Z" fill={PAL.mist} transform="translate(0 2)" />
      <Shade color={PAL.paperShade} opacity={1} at={[84, 88, 8, 16]}>
        <path d="M44 78L76 78L80 96L40 96Z" fill={PAL.white} />
      </Shade>
      <path d="M48 83H58M47 87.5H70M46 92H66" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="60" y="81" width="6" height="3.6" rx="1" fill={PAL.sky} />
      {/* The pen */}
      <path d="M70 92L84 84" stroke={PAL.blue} strokeWidth="3.6" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
