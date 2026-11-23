import type { JSX } from 'react';
import { Move, PAL, QuestionMark, Shade, Shine } from '../kit';

export default {
  // "navragen": to check, to ask about (to find out if something is right) — a payslip with one amount
  // under a magnifying glass, and a big question mark next to it: is this right? On the intro card the
  // magnifying glass goes along the rows to that amount (three rounds: checking).
  'w.navragen': () => (
    <g strokeLinejoin="round">
      {/* The payslip */}
      <rect x="12" y="14" width="60" height="92" rx="5" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[76, 58, 12, 90]}>
        <rect x="12" y="10" width="60" height="92" rx="5" fill={PAL.paper} />
      </Shade>
      <circle cx="26" cy="24" r="7" fill={PAL.yellow} />
      <path d="M38 21H60M38 28H52" stroke={PAL.navy} strokeWidth="3" strokeLinecap="round" />
      <path d="M20 44H40M52 44H64M20 56H36M52 56H64M20 68H38M52 68H64M20 80H34M52 80H64" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      <rect x="18" y="88" width="48" height="10" rx="4" fill={PAL.lime} />
      {/* The question */}
      <QuestionMark x={94} y={30} size={34} color={PAL.sky} />
      {/* The magnifying glass on one amount */}
      <Move kind="from" dy={-26}>
        <path d="M76 82L92 98" stroke={PAL.slateDark} strokeWidth="9" strokeLinecap="round" />
        <circle cx="62" cy="68" r="17" fill={PAL.slate} />
        <circle cx="62" cy="68" r="12.6" fill="#e3f5ff" opacity=".9" />
        <circle cx="55" cy="68" r="4.4" fill={PAL.yellow} />
        <path d="M63 68H70" stroke={PAL.navy} strokeWidth="4" strokeLinecap="round" />
        <Shine d="M53 62A10 10 0 0 1 58 57" width={2.6} opacity={0.8} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
