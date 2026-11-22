import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

/** A darker step of the dark rubber base. */
const INK_DARK = '#1b232a';

export default {
  // "de stempel": the stamp — a red-handled rubber stamp just above a sheet of paper that lies flat,
  // and on the sheet the green round mark it just made: a tick in a circle.
  'w.stempel': () => (
    <g strokeLinejoin="round">
      {/* The sheet, lying flat: depth edge, then the paper */}
      <path d="M10 106L78 106L108 72L40 72Z" fill={PAL.paperShade} />
      <path d="M10 102L78 102L108 68L40 68Z" fill={PAL.paper} />
      <path d="M50 74H82M45 80H64" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
      {/* The green stamp mark: a ring and a tick */}
      <Move kind="show">
        <ellipse cx="46" cy="90" rx="17" ry="10" fill="none" stroke={PAL.green} strokeWidth="3.6" />
        <path d="M37 90L43.5 95L55 85" fill="none" stroke={PAL.green} strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
      </Move>
      {/* The shadow of the stamp on the paper */}
      <ellipse cx="85" cy="82" rx="15" ry="4.5" fill="#000" opacity="0.12" />
      {/* The stamp: rubber base, block, neck and red knob; it comes down from above */}
      <Move kind="from" dy={-20}>
      <rect x="67" y="62" width="34" height="5" rx="1.5" fill={PAL.green} />
      <Shade color={INK_DARK} opacity={1} at={[102, 56, 8, 12]}>
        <rect x="65" y="48" width="38" height="15" rx="3" fill={PAL.slate} />
      </Shade>
      <Shade color={PAL.redShade} opacity={1} at={[90, 36, 5, 14]}>
        <rect x="77" y="28" width="14" height="22" rx="3" fill={PAL.red} />
      </Shade>
      <Shade color={PAL.redShade} opacity={1} at={[98, 22, 9, 14]}>
        <ellipse cx="84" cy="22" rx="14" ry="11" fill={PAL.red} />
      </Shade>
      <Shine d="M75 18Q78 14 83 13" opacity={0.6} width={3.2} />
      <path d="M69 52H84" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
