import type { JSX } from 'react';
import { ExclaimMark, PAL, Shine } from '../kit';

export default {
  // "het meldpunt": the reporting point (a place where you can report a problem) — a phone with the
  // reporting form open (lines and a red send button), and a big red bubble with an exclamation mark
  // coming from it: here you report a problem.
  'w.meldpunt': () => (
    <g strokeLinejoin="round">
      {/* The phone */}
      <rect x="20" y="26" width="48" height="82" rx="8" fill={PAL.slateDark} />
      <rect x="16" y="26" width="48" height="82" rx="8" fill={PAL.slate} />
      <rect x="21" y="34" width="38" height="64" rx="3" fill={PAL.paper} />
      <rect x="21" y="34" width="38" height="9" rx="3" fill={PAL.red} />
      <rect x="25" y="48" width="30" height="9" rx="2" fill={PAL.white} stroke={PAL.mist} strokeWidth="1.4" />
      <rect x="25" y="61" width="30" height="18" rx="2" fill={PAL.white} stroke={PAL.mist} strokeWidth="1.4" />
      <path d="M28 66H48M28 71H44" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="32" y="84" width="18" height="8" rx="3" fill={PAL.red} />
      <Shine d="M19 34V50" width={2.4} opacity={0.35} />
      {/* The red bubble with the exclamation mark */}
      <path d="M70 12H100Q108 12 108 20V44Q108 52 100 52H82L70 62L72 52Q62 52 62 44V20Q62 12 70 12Z" fill={PAL.redShade} transform="translate(0 3)" />
      <path d="M70 12H100Q108 12 108 20V44Q108 52 100 52H82L70 62L72 52Q62 52 62 44V20Q62 12 70 12Z" fill={PAL.red} />
      <ExclaimMark x={85} y={32} size={30} color={PAL.white} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
