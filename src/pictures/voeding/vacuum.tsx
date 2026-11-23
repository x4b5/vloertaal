import type { JSX } from 'react';
import { Arrow, Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "vacuüm": vacuum-packed (all the air is out) — a piece of red meat in clear plastic film pulled skin-
  // tight round it, flat sealed ends with crimped edges at both sides; two small arrows show
  // the film pulled in tight.
  'w.vacuum': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={96} rx={50} ry={4} />
      {/* The sealed ends of the film, crimped */}
      <path d="M10 60H24V88H10L13 84L10 80L13 76L10 72L13 68L10 64Z" fill={PAL.ice} />
      <path d="M110 60H96V88H110L107 84L110 80L107 76L110 72L107 68L110 64Z" fill={PAL.ice} />
      {/* The film round the meat, and the meat right under it */}
      <path d="M20 74Q20 50 60 50Q100 50 100 74Q100 94 60 94Q20 94 20 74Z" fill={PAL.ice} />
      <Shade color={PAL.redShade} opacity={1} at={[96, 80, 16, 20]}>
        <path d="M24 74Q24 54 60 54Q96 54 96 74Q96 90 60 90Q24 90 24 74Z" fill={PAL.red} />
      </Shade>
      <path d="M32 64Q44 57 60 57Q74 57 84 62" fill="none" stroke={PAL.redLight} strokeWidth="4.5" strokeLinecap="round" />
      {/* The tight film: shine and wrinkles */}
      <Shine d="M30 70Q34 60 46 58" width={3.5} opacity={0.85} />
      <path d="M70 80L78 76M64 84L74 80" stroke={PAL.white} strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
      {/* The film is pulled in tight from all sides */}
      <Arrow from={[30, 18]} to={[42, 44]} color={PAL.sky} width={5} head={9} />
      <Arrow from={[90, 18]} to={[78, 44]} color={PAL.sky} width={5} head={9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
