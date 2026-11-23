import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de matras": the mattress — a thick single mattress standing on its end, a little from the right, leaning
  // back: white cover with light blue quilting stitches and button tufts, a blue piped edge and its deep side.
  'w.matras': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={104} rx={40} ry={4.5} />
      <g transform="rotate(6 60 104)">
        {/* The deep side */}
        <path d="M82 14L96 8V96L82 104Z" fill={PAL.blueLight} />
        <path d="M86 20V96M92 18V96" stroke={PAL.sky} strokeWidth="1.6" opacity=".6" />
        {/* The face */}
        <Shade color={PAL.paperShade} opacity={1} at={[92, 60, 12, 60]}>
          <rect x="30" y="14" width="52" height="90" rx="6" fill={PAL.paper} />
        </Shade>
        <rect x="30" y="14" width="52" height="90" rx="6" fill="none" stroke={PAL.blue} strokeWidth="3" />
        <path d="M30 44H82M30 74H82M47 14V104M65 14V104" stroke={PAL.ice} strokeWidth="2" />
        <g fill={PAL.blueLight}>
          {[29, 59, 89].map((y) => [38, 56, 74].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" />))}
        </g>
        <Shine d="M36 22V40" width={3} opacity={0.9} />
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
