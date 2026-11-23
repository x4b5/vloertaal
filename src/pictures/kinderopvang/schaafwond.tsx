import type { JSX } from 'react';
import { PAL, SKIN, Shine } from '../kit';

export default {
  // "de schaafwond": the graze (the skin is scraped) — a toddler's bent leg seen from the side, blue
  // shorts, a red shoe; on the knee a pink scraped patch with a few short red scratches, and a plaster
  // ready beside it.
  'w.schaafwond': () => {
    const [s, sh] = SKIN.jada;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The lower leg (in shade), the thigh, the knee */}
        <path d="M60 56L72 98" stroke={sh} strokeWidth="18" />
        <path d="M20 66L58 54" stroke={s} strokeWidth="22" />
        <circle cx="60" cy="56" r="13" fill={s} />
        {/* The shorts and the shoe */}
        <path d="M8 52L30 46L36 72L12 82Q6 68 8 52Z" fill={PAL.sky} />
        <path d="M62 96H86Q92 96 92 102V106H62Z" fill={PAL.red} />
        <rect x="60" y="92" width="24" height="7" rx="3" fill={PAL.white} />
        {/* The graze on the knee: a pink patch and short red scratches */}
        <ellipse cx="62" cy="48" rx="10" ry="7.4" fill={PAL.redLight} transform="rotate(-20 62 48)" />
        <path d="M56 50L64 45M59 53L68 47M60 46L65 43" stroke={PAL.red} strokeWidth="1.8" />
        {/* The plaster */}
        <g transform="rotate(-30 92 34)">
          <rect x="74" y="27" width="36" height="14" rx="7" fill={PAL.card} />
          <rect x="85" y="28.5" width="14" height="11" rx="2" fill="#f0c48a" />
          <g fill={PAL.cardShade}>
            <circle cx="79" cy="34" r="1.1" />
            <circle cx="105" cy="34" r="1.1" />
          </g>
        </g>
        <Shine d="M24 58L40 53" width={3} opacity={0.4} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
