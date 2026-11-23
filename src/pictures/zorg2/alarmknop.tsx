import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de alarmknop": the alarm button — the round pendant a client wears on a cord round the neck, with a big
  // red button; the client's finger presses it and signal arcs go out.
  // On the intro card the finger comes to the button, then the signal arcs appear. Once (one call for help).
  'w.alarmknop': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The cord */}
      <path d="M30 10Q40 40 52 46M90 10Q80 40 68 46" fill="none" stroke={PAL.slate} strokeWidth="3" />
      {/* The pendant */}
      <circle cx="60" cy="64" r="26" fill={PAL.mist} transform="translate(2 3)" />
      <Shade color={PAL.paperShade} opacity={1} at={[86, 64, 12, 30]}>
        <circle cx="60" cy="64" r="26" fill={PAL.white} />
      </Shade>
      <rect x="54" y="34" width="12" height="10" rx="3" fill={PAL.slate} />
      <circle cx="60" cy="65" r="16" fill={PAL.redShade} />
      <circle cx="60" cy="63" r="15" fill={PAL.red} />
      <Shine d="M50 58Q52 52 58 51" width={3} opacity={0.6} />
      {/* Signal arcs */}
      <Move kind="show" once>
        <path d="M22 44Q14 64 22 84M14 36Q2 64 14 92M98 44Q106 64 98 84M106 36Q118 64 106 92" fill="none" stroke={PAL.orange} strokeWidth="4" />
      </Move>
      {/* The finger pressing it */}
      <Move kind="from" dx={14} dy={20} once>
        <Hand pose="point" x={82} y={108} rotate={-35} scale={0.7} skin={SKIN.henk} sleeve={[PAL.purple, PAL.purpleShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
