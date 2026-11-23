import type { JSX } from 'react';
import { PAL, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "de kwaliteitsdienst": the quality department (QA) — Amina (from quality control) with her checklist:
  // a big clipboard beside her with three rows, each with a green tick, and a magnifying glass on it.
  'w.kwaliteitsdienst': () => (
    <g strokeLinejoin="round">
      <Bust who="amina" x={42} y={124} scale={0.74} expr="pleased" bold />
      {/* The clipboard, with its depth edge */}
      <rect x="70" y="42" width="38" height="62" rx="4" fill={PAL.cardDark} transform="translate(2 3)" />
      <rect x="70" y="42" width="38" height="62" rx="4" fill={PAL.card} />
      <rect x="74" y="48" width="30" height="52" rx="2" fill={PAL.white} />
      <rect x="80" y="38" width="18" height="9" rx="3" fill={PAL.steel} />
      {[58, 72, 86].map((y) => (
        <g key={y}>
          <path d={`M78 ${y}L81 ${y + 3}L86 ${y - 3}`} fill="none" stroke={PAL.ok} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M90 ${y}H100`} stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      ))}
      <Shine d="M73 48V62" width={2} opacity={0.6} />
      {/* The magnifying glass */}
      <path d="M102 32L110 22" stroke={PAL.slateDark} strokeWidth="6" strokeLinecap="round" />
      <circle cx="94" cy="40" r="10" fill={PAL.ice} opacity=".5" />
      <circle cx="94" cy="40" r="10" fill="none" stroke={PAL.sky} strokeWidth="4.5" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
