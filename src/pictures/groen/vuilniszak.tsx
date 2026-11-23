import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de vuilniszak": the rubbish bag — a big black plastic bag, full and round, standing on the ground, its
  // top gathered and tied in a knot with two ears sticking up.
  'w.vuilniszak': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={40} ry={5} />
      {/* The two tied ears and the knot */}
      <path d="M56 30Q40 14 34 22Q38 30 54 34Z" fill={PAL.slate} />
      <path d="M64 30Q80 12 88 20Q84 30 66 34Z" fill={PAL.slateDark} />
      {/* The bag */}
      <Shade color={PAL.slateDark} opacity={1} at={[96, 76, 18, 40]}>
        <path d="M52 36H68Q74 44 88 54Q100 66 98 84Q96 104 60 104Q24 104 22 84Q20 66 32 54Q46 44 52 36Z" fill={PAL.slate} />
      </Shade>
      <circle cx="60" cy="34" r="6" fill={PAL.slateDark} />
      {/* Folds in the plastic */}
      <path d="M54 42Q48 56 44 66M66 42Q70 54 74 60M46 88Q54 92 60 90" fill="none" stroke={PAL.slateDark} strokeWidth="2.2" strokeLinecap="round" />
      <Shine d="M30 76Q32 62 42 54" width={4} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
