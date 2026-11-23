import type { JSX } from 'react';
import { PAL, Shine } from '../kit';

/** The coupon: a strip with a half-round notch on each long side at the tear line (x = 44). */
const COUPON = 'M10 30Q10 26 14 26H40A4 4 0 0 0 48 26H106Q110 26 110 30V82Q110 86 106 86H48A4 4 0 0 0 40 86H14Q10 86 10 82Z';

export default {
  // "de tegoedbon": the credit note (a paper to spend in the shop later) — a light-yellow coupon with a
  // half-round notch at the dashed tear line: a gold coin on the stub (money to spend), grey text lines
  // and a small orange shopping bag on the body (to spend in the shop). Not a till receipt ("de bon").
  // A thing: it stays still.
  'w.tegoedbon': () => (
    <g strokeLinejoin="round" transform="rotate(-7 60 58)">
      <path d={COUPON} fill={PAL.yellowShade} transform="translate(0 5)" />
      <path d={COUPON} fill="#fff6cf" />
      <path d="M44 34V80" stroke={PAL.yellowShade} strokeWidth="2.2" strokeDasharray="4 4" strokeLinecap="round" />
      {/* The coin on the stub */}
      <circle cx="27" cy="58" r="12" fill={PAL.yellowShade} />
      <circle cx="26" cy="56" r="12" fill={PAL.yellow} />
      <circle cx="26" cy="56" r="7" fill="none" stroke={PAL.yellowShade} strokeWidth="2" />
      {/* The text lines */}
      <path d="M54 40H96M54 50H84" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" />
      {/* The shopping bag: spend it in the shop */}
      <path d="M62 68V65Q62 60 67 60Q72 60 72 65V68" fill="none" stroke={PAL.orangeShade} strokeWidth="2.4" />
      <path d="M57 67H77L78 80H56Z" fill={PAL.orange} />
      <path d="M84 72H100" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" />
      <Shine d="M16 32H36" color={PAL.white} width={3} opacity={0.8} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
