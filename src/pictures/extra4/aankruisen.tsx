import type { JSX } from 'react';
import { Move, PAL } from '../kit';

/** A box on the form: a white square with a grey frame (a form's box is a line). */
const box = (x: number, y: number, s: number) => (
  <rect x={x} y={y} width={s} height={s} rx="2.4" fill={PAL.white} stroke={PAL.line} strokeWidth="3" />
);

export default {
  // "aankruisen": to tick (to put a cross in a box) — a form with three big boxes, each with a line
  // after it; a blue pen has just put a bold cross in the middle box, the other two stay empty.
  // On the intro card the pen comes to the middle box, then the cross appears (once: one choice).
  'w.aankruisen': () => (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* The form: a depth edge and the sheet */}
      <rect x="10" y="16" width="80" height="90" rx="4" fill={PAL.paperShade} />
      <rect x="10" y="12" width="80" height="90" rx="4" fill={PAL.white} />
      {[22, 48, 74].map((y) => (
        <g key={y}>
          {box(20, y, 18)}
          <path d={`M46 ${y + 9}H${y === 48 ? 72 : 78}`} stroke={PAL.line} strokeWidth="3" />
        </g>
      ))}
      {/* The cross in the middle box */}
      <Move kind="show" once>
        <path d="M23 51L35 63M35 51L23 63" stroke={PAL.blueShade} strokeWidth="5.4" />
      </Move>
      {/* The pen, its tip at the end of the cross */}
      <Move kind="from" dx={24} dy={22} once>
        <g transform="translate(36 64) rotate(36)">
          <path d="M0 0L10 -4.6V4.6Z" fill={PAL.mist} />
          <path d="M0 0L3.4 -1.6V1.6Z" fill={PAL.ink} />
          <rect x="10" y="-4.8" width="54" height="9.6" rx="2.2" fill={PAL.blue} />
          <rect x="10" y="0.8" width="54" height="4" rx="1.6" fill={PAL.blueShade} />
          <rect x="60" y="-5.2" width="11" height="10.4" rx="2.6" fill={PAL.slate} />
          <rect x="44" y="-8" width="18" height="3.4" rx="1.6" fill={PAL.slate} />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
