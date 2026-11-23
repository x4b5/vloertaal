import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de noten": the nuts — three kinds of nuts together: a big walnut (pale, wrinkled, with its seam), a round
  // hazelnut with its light cap, and a flat pointed almond.
  'w.noten': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={100} rx={48} ry={5} />
      {/* The walnut */}
      <Shade color={PAL.cardShade} opacity={1} at={[78, 62, 14, 34]}>
        <ellipse cx="50" cy="56" rx="30" ry="32" fill="#e8c08c" />
      </Shade>
      <path d="M50 24V88" stroke={PAL.cardDark} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M30 44Q38 40 40 50Q42 60 32 62M34 74Q42 70 44 80M60 36Q68 34 70 44M58 58Q68 54 72 64Q74 72 66 76" fill="none" stroke={PAL.cardShade} strokeWidth="2.2" strokeLinecap="round" />
      <Shine d="M28 42Q32 32 40 28" width={3} opacity={0.55} />
      {/* The hazelnut */}
      <Shade color={PAL.brown} opacity={0.6} at={[102, 84, 8, 16]}>
        <circle cx="90" cy="84" r="15" fill={PAL.wood} />
      </Shade>
      <path d="M75 82Q76 70 90 69Q104 70 105 82Q98 76 90 76Q82 76 75 82Z" fill={PAL.card} />
      <Shine d="M80 88Q80 94 84 96" width={2.4} opacity={0.4} />
      {/* The almond */}
      <path d="M22 96Q10 90 16 78Q22 70 34 76Q42 82 40 92Q32 100 22 96Z" fill={PAL.cardDark} transform="rotate(-20 28 86)" />
      <path d="M20 84Q26 80 32 84M20 90Q28 86 34 90" fill="none" stroke={PAL.brown} strokeWidth="1.6" strokeLinecap="round" transform="rotate(-20 28 86)" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
