import type { JSX } from 'react';
import { Motion, Move, PAL, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de gordel": the seat belt — Bram in a blue car seat, the dark seat belt across his chest from his
  // shoulder down to the buckle at his hip, its steel tongue clicked in. On the intro card the belt
  // swings down from where it hangs by his shoulder and clicks in (once: you put it on), then the click
  // lines.
  'w.gordel': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The seat: headrest and backrest */}
      <rect x="40" y="10" width="40" height="22" rx="8" fill={PAL.blueShade} />
      <Shade color={PAL.blueShade} opacity={1} at={[108, 70, 16, 60]}>
        <rect x="18" y="34" width="84" height="90" rx="16" fill={PAL.blue} />
      </Shade>
      <Shine d="M24 50V80" width={3.4} opacity={0.5} />
      <Bust who="bram" x={60} y={124} scale={0.78} expr="pleased" />
      {/* The buckle at his hip, with its red button */}
      <rect x="22" y="96" width="16" height="20" rx="4" fill={PAL.slateDark} />
      <rect x="26" y="100" width="8" height="6" rx="1.6" fill={PAL.red} />
      {/* The belt, from the ring by his shoulder down across his chest to the buckle */}
      <Move kind="turn" turn={-42} at={[92, 64]} once>
        <path d="M92 64L40 100" stroke={PAL.slateDark} strokeWidth="10" />
        <path d="M88 69L48 97" stroke={PAL.slate} strokeWidth="2.2" opacity=".9" />
        <path d="M42 99L33 105" stroke={PAL.steel} strokeWidth="9" />
        <circle cx="92" cy="64" r="6" fill={PAL.steel} />
      </Move>
      <Move kind="show">
        <Motion x={20} y={92} dir={-135} spread={70} n={3} len={8} gap={5} color={PAL.orange} width={3.4} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
