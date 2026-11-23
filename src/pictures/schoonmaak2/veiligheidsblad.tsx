import type { JSX } from 'react';
import { ExclaimMark, PAL } from '../kit';

/** A block of text lines: a dark heading bar and grey lines under it. */
const section = (y: number) => (
  <g key={y}>
    <path d={`M32 ${y}H54`} stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
    <path d={`M32 ${y + 8}H86M32 ${y + 15}H76`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
  </g>
);

export default {
  // "het veiligheidsblad": the safety data sheet — a sheet of paper with its corner folded: at the top a
  // big red-edged danger diamond with an exclamation mark, beside it a few lines, and under it sections
  // of text (dark heading bars with grey lines).
  'w.veiligheidsblad': () => (
    <g strokeLinejoin="round">
      {/* Depth edge and the sheet */}
      <path d="M26 14H82L98 30V108H26Z" fill={PAL.paperShade} transform="translate(3 3)" />
      <path d="M24 12H82L96 26V106H24Z" fill={PAL.white} />
      <path d="M82 12V26H96Z" fill={PAL.mist} />
      {/* The danger diamond */}
      <rect x="35" y="21" width="24" height="24" rx="2" transform="rotate(45 47 33)" fill={PAL.white} stroke={PAL.red} strokeWidth="4.4" />
      <ExclaimMark x={47} y={34} size={20} color={PAL.ink} />
      <path d="M68 30H86M68 38H82" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
      {section(58)}
      {section(80)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
