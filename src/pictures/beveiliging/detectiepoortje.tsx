import type { JSX } from 'react';
import { Ground, Motion, PAL, Shade, Shine } from '../kit';

/** One gate panel: a tall rounded plate on a dark foot, with a red lamp on top. */
const panel = (x: number) => (
  <g>
    <Shade color={PAL.paperShade} opacity={1} at={[x + 24, 60, 8, 50]}>
      <rect x={x} y="28" width="22" height="70" rx="9" fill={PAL.paper} />
    </Shade>
    <rect x={x + 5} y="36" width="12" height="54" rx="5" fill={PAL.mist} />
    <path d={`M${x + 8} 42V84M${x + 14} 42V84`} stroke={PAL.paperShade} strokeWidth="2" strokeLinecap="round" />
    <rect x={x - 2} y="96" width="26" height="8" rx="3" fill={PAL.slate} />
    <rect x={x + 4} y="18" width="14" height="12" rx="5" fill={PAL.red} />
    <rect x={x + 12} y="18" width="6" height="12" rx="3" fill={PAL.redShade} />
    <Shine d={`M${x + 4} 36V58`} width={2.6} opacity={0.8} />
  </g>
);

export default {
  // "het detectiepoortje": the security gate (it beeps at the door) — the two white panels at a shop's
  // exit, side by side with a passage between them; their red lamps on top light up and beep (short red
  // lines) because something with a tag goes through.
  'w.detectiepoortje': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={50} ry={4} />
      {/* The passage between the panels */}
      <path d="M38 102H82" stroke={PAL.paperShade} strokeWidth="4" strokeLinecap="round" />
      {panel(16)}
      {panel(82)}
      <Motion x={27} y={22} dir={-120} spread={60} n={3} len={7} gap={10} color={PAL.red} width={3.2} />
      <Motion x={93} y={22} dir={-60} spread={60} n={3} len={7} gap={10} color={PAL.red} width={3.2} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
