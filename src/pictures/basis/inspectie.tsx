import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "de inspectie": the inspection (people who check if work is fair and safe) — a navy clipboard with a checklist
  // (ticks and one red cross), a navy shield badge with a tick clipped on (official), and a big magnifying glass
  // looking over the list. On the intro card the glass goes down the list (three rounds: checking).
  'w.inspectie': () => (
    <g>
      {/* Clipboard */}
      <rect x="18" y="18" width="62" height="86" rx="6" fill={PAL.navyShade} transform="translate(3 3)" />
      <rect x="18" y="18" width="62" height="86" rx="6" fill={PAL.navy} />
      <rect x="25" y="26" width="48" height="72" rx="2" fill={PAL.paper} />
      <rect x="36" y="13" width="26" height="11" rx="3" fill={PAL.steel} />
      {/* Checklist rows */}
      {[38, 54, 70, 86].map((y, i) => (
        <g key={y}>
          <rect x="30" y={y - 5} width="10" height="10" rx="2" fill={PAL.paperShade} />
          {i === 2
            ? <path d={`M32 ${y - 3}L38 ${y + 3}M38 ${y - 3}L32 ${y + 3}`} stroke={PAL.red} strokeWidth="2.6" strokeLinecap="round" />
            : <path d={`M31.5 ${y}L34.5 ${y + 3}L39 ${y - 3}`} stroke={PAL.ok} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
          <path d={`M45 ${y}H66`} stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
        </g>
      ))}
      {/* The official badge */}
      <path d="M90 14H110V30Q110 42 100 47Q90 42 90 30Z" fill={PAL.navy} />
      <path d="M100 14H110V30Q110 42 100 47Z" fill={PAL.navyShade} />
      <path d="M94.5 29L99 33L106 24" stroke={PAL.yellow} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Magnifying glass */}
      <Move kind="from" dy={-24}>
        <path d="M84 84L104 106" stroke={PAL.slateDark} strokeWidth="10" strokeLinecap="round" />
        <circle cx="70" cy="70" r="20" fill={PAL.ice} opacity=".45" />
        <circle cx="70" cy="70" r="20" fill="none" stroke={PAL.slate} strokeWidth="6" />
        <Shine d="M58 64Q60 56 68 54" width={3} opacity={0.85} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
