import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

const ROWS = [30, 48, 66, 84];

export default {
  // "de checklist": the checklist — a dark clipboard with a white list of four jobs, each with a
  // check box in front: the top three have a blue tick, the last box is still empty. A pen is
  // clipped on at the top.
  'w.checklist': () => (
    <g strokeLinejoin="round">
      {/* The board: depth edge, face */}
      <rect x="22" y="16" width="76" height="94" rx="6" fill={PAL.slateDark} transform="translate(3 3)" />
      <rect x="22" y="16" width="76" height="94" rx="6" fill={PAL.slate} />
      {/* The paper */}
      <rect x="29" y="22" width="62" height="82" rx="3" fill={PAL.paperShade} />
      <rect x="29" y="22" width="60" height="80" rx="3" fill={PAL.white} />
      {/* The rows: a box, a tick (not in the last one), a line for the job */}
      {ROWS.map((y, i) => (
        <g key={y}>
          <rect x="35" y={y} width="13" height="13" rx="2.5" fill={PAL.white} stroke={PAL.line} strokeWidth="2" />
          {i < 3 && <path d={`M37 ${y + 6}L41 ${y + 11}L50 ${y - 2}`} fill="none" stroke={PAL.blue} strokeWidth="3.6" strokeLinecap="round" />}
          <path d={`M55 ${y + 6.5}H${i % 2 ? 76 : 83}`} stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      {/* The clip with the pen */}
      <rect x="44" y="10" width="32" height="12" rx="4" fill={PAL.steel} />
      <rect x="50" y="14" width="20" height="4" rx="2" fill={PAL.slate} />
      <rect x="80" y="6" width="7" height="34" rx="3" fill={PAL.orange} transform="rotate(14 83 23)" />
      <Shine d="M26 26V44" width={2.6} opacity={0.4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
