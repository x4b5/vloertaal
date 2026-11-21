import type { JSX } from 'react';
import { Ground, PAL, Shine } from '../kit';

/** The three step colours: one per step, so the order reads without digits (no numbers in pictures). */
const STEPS = [
  [PAL.blue, PAL.blueShade],
  [PAL.orange, PAL.orangeShade],
  [PAL.green, PAL.greenShade],
] as const;

/** Row tops on the sheet. */
const ROWS = [27, 49, 71];

export default {
  // "de werkinstructie": the work instruction — a sheet clipped in a dark holder on a post at the workstation, three big
  // steps one under the other: a coloured step circle with one, two, three dots, a picture tile (a bolt; the bolt with an
  // arrow into a plate; a green tick) and two grey text lines.
  'w.werkinstructie': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={26} ry={4} />
      {/* The post and its foot */}
      <rect x="55" y="86" width="9" height="16" fill={PAL.slate} />
      <rect x="63" y="86" width="3" height="16" fill={PAL.slateDark} />
      <rect x="40" y="99" width="40" height="7" rx="3" fill={PAL.slateDark} />
      {/* The holder: a dark board with its depth on the right */}
      <rect x="21" y="13" width="78" height="80" rx="5" fill={PAL.slateDark} transform="translate(4 -3)" />
      <rect x="21" y="13" width="78" height="80" rx="5" fill={PAL.slate} />
      {/* The sheet: depth edge, then the paper */}
      <rect x="26" y="19" width="68" height="70" rx="2.5" fill={PAL.paperShade} transform="translate(0 2.5)" />
      <rect x="26" y="19" width="68" height="70" rx="2.5" fill={PAL.paper} />
      {/* The clip on top */}
      <rect x="47" y="10" width="26" height="12" rx="3" fill={PAL.steel} />
      <rect x="51" y="13" width="18" height="5" rx="2" fill={PAL.slate} />
      {ROWS.map((y, i) => (
        <g key={i}>
          {/* The step circle with its dots */}
          <circle cx="37" cy={y + 8} r="8" fill={STEPS[i][0]} />
          {Array.from({ length: i + 1 }, (_, k) => (
            <circle key={k} cx={37 + (k - i / 2) * 4.2} cy={y + 8} r="1.6" fill={PAL.white} />
          ))}
          {/* The picture tile */}
          <rect x="49" y={y} width="20" height="16" rx="2.5" fill={PAL.mist} />
          {/* Two text lines */}
          <path d={`M74 ${y + 5}H89M74 ${y + 11}H84`} stroke={PAL.line} strokeWidth="2.2" strokeLinecap="round" />
          {i < 2 && <path d={`M30 ${y + 19.5}H90`} stroke={PAL.paperShade} strokeWidth="1.4" strokeLinecap="round" />}
        </g>
      ))}
      {/* Step 1: a bolt */}
      <rect x="53" y="30" width="7" height="10" rx="1.5" fill={PAL.slate} />
      <rect x="60" y="33" width="6" height="4" rx="1" fill={PAL.steel} />
      {/* Step 2: the bolt goes into the plate */}
      <rect x="51" y="58" width="16" height="5" rx="1" fill={PAL.blue} />
      <path d="M59 52V57" stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" />
      <path d="M55 54L59 57.5L63 54" stroke={PAL.slate} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Step 3: done, a tick */}
      <path d="M53 79L57.5 83L65 74" stroke={PAL.green} strokeWidth="3.4" strokeLinecap="round" fill="none" />
      <Shine d="M24 30V52" width={2.6} opacity={0.35} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
