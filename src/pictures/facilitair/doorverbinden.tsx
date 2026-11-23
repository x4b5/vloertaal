import type { JSX } from 'react';
import { CurveArrow, Ground, Motion, Move, PAL, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "doorverbinden": to put a call through — the call goes from the reception's desk phone (left) along a
  // big curved arrow to Henk (right), who has the handset at his ear.
  // On the intro card the arrow grows from the phone to Henk, then his ring lines appear. Once and slowly
  // (one call is put through).
  'w.doorverbinden': () => (
    <g strokeLinejoin="round">
      {/* Henk with the handset at his ear */}
      <Bust who="henk" x={82} y={124} scale={0.62} expr="pleased" bold />
      <path d="M100 58Q108 58 108 66V82Q108 90 100 90" fill="none" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      <rect x="96" y="52" width="10" height="12" rx="4" fill={PAL.slate} />
      <rect x="96" y="84" width="10" height="12" rx="4" fill={PAL.slate} />
      <Move kind="show">
        <Motion x={104} y={50} dir={-60} spread={50} n={3} len={8} gap={5} color={PAL.sky} width={3.4} />
      </Move>
      {/* The desk phone at the reception */}
      <Ground cx={30} cy={104} rx={22} ry={3} />
      <path d="M10 102L14 80H46L50 102Z" fill={PAL.slateDark} />
      <path d="M12 99L16 82H44L48 99Z" fill={PAL.slate} />
      <g fill={PAL.mist}>
        <rect x="20" y="86" width="6" height="4" rx="1.2" />
        <rect x="28" y="86" width="6" height="4" rx="1.2" />
        <rect x="36" y="86" width="6" height="4" rx="1.2" />
        <rect x="19" y="92" width="6" height="4" rx="1.2" />
        <rect x="27" y="92" width="6" height="4" rx="1.2" />
        <rect x="35" y="92" width="6" height="4" rx="1.2" />
      </g>
      <path d="M10 72Q9 66 15 66H45Q51 66 50 72L49 76Q48 80 43 79L38 77H22L17 79Q12 80 11 76Z" fill={PAL.slate} />
      <Shine d="M15 70H26" width={2.4} opacity={0.5} />
      {/* The call goes through */}
      <Move kind="grow" grow={0.15} once>
        <CurveArrow from={[26, 60]} to={[90, 36]} bend={24} color={PAL.sky} width={8} head={14} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
